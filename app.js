// Children & AI Governance v2 — App + Charts
// All data pre-computed in data.js (DASH constant)

var _charts = [];
var TH = {
    text: '#94a3b8', axis: '#334155', split: '#1e293b',
    tooltipBg: 'rgba(15,23,42,0.95)', tooltipBorder: '#334155', tooltipText: '#f1f5f9'
};
var TH_DARK = {
    text: '#94a3b8', axis: '#334155', split: '#1e293b',
    tooltipBg: 'rgba(15,23,42,0.95)', tooltipBorder: '#334155', tooltipText: '#f1f5f9'
};
var TH_LIGHT = {
    text: '#475569', axis: '#e2e8f0', split: '#f1f5f9',
    tooltipBg: 'rgba(255,255,255,0.95)', tooltipBorder: '#e2e8f0', tooltipText: '#0f172a'
};
var CAT_COLORS = {
    Protection: '#ef4444', Participation: '#6366f1', Provision: '#10b981',
    Governance: '#f59e0b', 'Cross-Cutting': '#8b5cf6'
};

function mkChart(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    var c = echarts.init(el);
    _charts.push(c);
    return c;
}
function _tt() {
    return { backgroundColor: TH.tooltipBg, borderColor: TH.tooltipBorder, textStyle: { color: TH.tooltipText } };
}
function _toolbox() {
    return { show: true, right: 10, top: 0, feature: { saveAsImage: { title: 'Save', pixelRatio: 2 } }, iconStyle: { borderColor: TH.text } };
}
function resizeAll() { _charts.forEach(function(c) { try { c.resize(); } catch(e) {} }); }
function reThemeAll() {
    _charts.forEach(function(c) {
        try {
            var opt = c.getOption();
            if (opt.xAxis) opt.xAxis.forEach(function(ax) {
                if (ax.axisLabel) ax.axisLabel.color = TH.text;
                if (ax.axisLine && ax.axisLine.lineStyle) ax.axisLine.lineStyle.color = TH.axis;
            });
            if (opt.yAxis) opt.yAxis.forEach(function(ax) {
                if (ax.axisLabel) ax.axisLabel.color = TH.text;
                if (ax.axisLine && ax.axisLine.lineStyle) ax.axisLine.lineStyle.color = TH.axis;
                if (ax.splitLine && ax.splitLine.lineStyle) ax.splitLine.lineStyle.color = TH.split;
            });
            if (opt.tooltip && opt.tooltip.length) opt.tooltip.forEach(function(t) {
                t.backgroundColor = TH.tooltipBg;
                t.borderColor = TH.tooltipBorder;
                if (t.textStyle) t.textStyle.color = TH.tooltipText;
            });
            if (opt.toolbox && opt.toolbox.length) opt.toolbox.forEach(function(tb) {
                if (tb.iconStyle) tb.iconStyle.borderColor = TH.text;
            });
            c.setOption(opt);
        } catch(e) {}
    });
}

// ================================================================
// TAB 1: OVERVIEW
// ================================================================
function renderCGIHistogram() {
    var c = mkChart('chart-cgi-hist');
    if (!c || !DASH.overview) return;
    var h = DASH.overview.histogram;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        grid: { left: 50, right: 20, top: 20, bottom: 40 },
        xAxis: { type: 'category', data: h.labels, axisLabel: { color: TH.text, fontSize: 11 }, axisLine: { lineStyle: { color: TH.axis } } },
        yAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        series: [{
            type: 'bar', data: h.counts,
            itemStyle: { color: function(p) { return p.dataIndex < 2 ? '#475569' : p.dataIndex < 5 ? '#6366f1' : '#10b981'; } },
            label: { show: true, position: 'top', color: TH.text, fontSize: 10 }
        }]
    });
}

function renderCategoryRadar() {
    var c = mkChart('chart-category-radar');
    if (!c || !DASH.overview) return;
    var r = DASH.overview.categoryRadar;
    var cats = Object.keys(r);
    var vals = cats.map(function(k) { return r[k]; });
    c.setOption({
        toolbox: _toolbox(),
        tooltip: _tt(),
        radar: {
            indicator: cats.map(function(k) { return { name: k, max: 10 }; }),
            axisName: { color: TH.text, fontSize: 11 },
            splitArea: { areaStyle: { color: ['rgba(99,102,241,0.05)', 'rgba(99,102,241,0.1)'] } },
            splitLine: { lineStyle: { color: TH.split } },
            axisLine: { lineStyle: { color: TH.axis } }
        },
        series: [{ type: 'radar', data: [{ value: vals, name: 'Average Score',
            areaStyle: { color: 'rgba(99,102,241,0.2)' },
            lineStyle: { color: '#6366f1', width: 2 }, itemStyle: { color: '#6366f1' }
        }] }]
    });
}

function renderDimCoverage() {
    var c = mkChart('chart-dim-coverage');
    if (!c || !DASH.overview) return;
    var dims = DASH.overview.dimCoverage;
    var labels = dims.map(function(d) { return d.label; }).reverse();
    var counts = dims.map(function(d) { return d.count; }).reverse();
    var catLookup = {};
    for (var cat in DASH.categoryMap) {
        DASH.categoryMap[cat].forEach(function(lbl) { catLookup[lbl] = cat; });
    }
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        grid: { left: 200, right: 60, top: 10, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: labels, axisLabel: { color: TH.text, fontSize: 11 } },
        series: [{ type: 'bar', data: counts.map(function(v, i) {
            var clr = CAT_COLORS[catLookup[labels[i]]] || '#6366f1';
            return { value: v, itemStyle: { color: clr } };
        }), label: { show: true, position: 'right', color: TH.text, fontSize: 10 } }]
    });
}

// ================================================================
// TAB 2: DIMENSIONS
// ================================================================
function renderDimDistributions() {
    var c = mkChart('chart-dim-dist');
    if (!c || !DASH.dimensions) return;
    var dd = DASH.dimensions.distributions;
    var fields = DASH.fieldOrder;
    var labels = fields.map(function(f) { return DASH.fieldLabels[f]; });
    var zeroD = [], lowD = [], midD = [], highD = [];
    fields.forEach(function(f) {
        var d = dd[f]; zeroD.push(d.zero); lowD.push(d.low); midD.push(d.mid); highD.push(d.high);
    });
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        legend: { data: ['Zero', 'Low (1-24)', 'Mid (25-49)', 'High (50+)'], textStyle: { color: TH.text, fontSize: 10 }, top: 0 },
        grid: { left: 200, right: 30, top: 40, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: labels, inverse: true, axisLabel: { color: TH.text, fontSize: 11 } },
        series: [
            { name: 'Zero', type: 'bar', stack: 'total', data: zeroD, itemStyle: { color: '#334155' } },
            { name: 'Low (1-24)', type: 'bar', stack: 'total', data: lowD, itemStyle: { color: '#64748b' } },
            { name: 'Mid (25-49)', type: 'bar', stack: 'total', data: midD, itemStyle: { color: '#f59e0b' } },
            { name: 'High (50+)', type: 'bar', stack: 'total', data: highD, itemStyle: { color: '#10b981' } }
        ]
    });
}

function renderCooccurrence() {
    var c = mkChart('chart-cooccur');
    if (!c || !DASH.dimensions) return;
    var co = DASH.dimensions.cooccurrence;
    var flds = co.fields;
    var data = [];
    for (var i = 0; i < flds.length; i++) {
        for (var j = 0; j < flds.length; j++) {
            if (co.matrix[i][j] > 0) data.push([j, i, co.matrix[i][j]]);
        }
    }
    var maxVal = Math.max.apply(null, data.map(function(d) { return d[2]; }));
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ formatter: function(p) { return flds[p.data[1]] + ' + ' + flds[p.data[0]] + ': ' + p.data[2]; } }, _tt()),
        grid: { left: 180, right: 40, top: 10, bottom: 160 },
        xAxis: { type: 'category', data: flds, axisLabel: { color: TH.text, fontSize: 9, rotate: 55 }, axisLine: { lineStyle: { color: TH.axis } } },
        yAxis: { type: 'category', data: flds, axisLabel: { color: TH.text, fontSize: 9 }, axisLine: { lineStyle: { color: TH.axis } } },
        visualMap: { min: 0, max: maxVal || 1, calculable: true, orient: 'horizontal', left: 'center', bottom: 0,
            inRange: { color: ['#1e293b', '#312e81', '#6366f1', '#10b981', '#f59e0b'] }, textStyle: { color: TH.text } },
        series: [{ type: 'heatmap', data: data, label: { show: false } }]
    });
}

// ================================================================
// TAB 3: GAP ANALYSIS
// ================================================================
function renderMentionGap() {
    var c = mkChart('chart-mention-gap');
    if (!c || !DASH.gaps) return;
    var g = DASH.gaps.mentionVsAction;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: _tt(),
        grid: { left: 140, right: 40, top: 20, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: ['With Participation', 'With Enforcement', 'Mention Children'], inverse: true,
            axisLabel: { color: TH.text, fontSize: 12 } },
        series: [{ type: 'bar', data: [
            { value: g.participated, itemStyle: { color: '#6366f1' } },
            { value: g.enforced, itemStyle: { color: '#f59e0b' } },
            { value: g.mentions, itemStyle: { color: '#10b981' } }
        ], label: { show: true, position: 'right', color: TH.text, fontSize: 12, fontWeight: 'bold' } }]
    });
}

function renderPPP() {
    var c = mkChart('chart-ppp');
    if (!c || !DASH.gaps) return;
    var p = DASH.gaps.ppp;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: _tt(),
        series: [{ type: 'pie', radius: ['45%', '75%'], center: ['50%', '50%'],
            data: [
                { value: p.Protection, name: 'Protection', itemStyle: { color: '#ef4444' } },
                { value: p.Participation, name: 'Participation', itemStyle: { color: '#6366f1' } },
                { value: p.Provision, name: 'Provision', itemStyle: { color: '#10b981' } }
            ],
            label: { color: TH.text, fontSize: 12, formatter: '{b}\n{c} stmts' },
            emphasis: { label: { fontSize: 14, fontWeight: 'bold' } }
        }]
    });
}

function renderGapsRanked() {
    var c = mkChart('chart-gaps-ranked');
    if (!c || !DASH.gaps) return;
    var dims = DASH.gaps.dimRanked;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        grid: { left: 200, right: 60, top: 10, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: dims.map(function(d) { return d.label; }), inverse: true,
            axisLabel: { color: TH.text, fontSize: 11 } },
        series: [{ type: 'bar', data: dims.map(function(d, i) {
            var clr = i < 5 ? '#ef4444' : i < 10 ? '#f59e0b' : '#10b981';
            return { value: d.count, itemStyle: { color: clr } };
        }), label: { show: true, position: 'right', color: TH.text, fontSize: 10,
            formatter: function(p) { return p.value + ' (' + dims[p.dataIndex].pct + '%)'; } } }]
    });
}

function renderEmerging() {
    var c = mkChart('chart-emerging');
    if (!c || !DASH.gaps) return;
    var e = DASH.gaps.emergingThreats;
    var labels = Object.keys(e);
    var vals = labels.map(function(k) { return e[k]; });
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        grid: { left: 220, right: 60, top: 10, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: labels, inverse: true, axisLabel: { color: TH.text, fontSize: 12 } },
        series: [{ type: 'bar', data: vals.map(function(v) {
            return { value: v, itemStyle: { color: v < 10 ? '#ef4444' : v < 30 ? '#f59e0b' : '#10b981' } };
        }), label: { show: true, position: 'right', color: TH.text, fontSize: 12, fontWeight: 'bold' } }]
    });
}

// ================================================================
// TAB 4: COMPARATIVE
// ================================================================
function renderOrgType() {
    var c = mkChart('chart-org-type');
    if (!c || !DASH.comparative) return;
    var ot = DASH.comparative.orgType;
    var labels = Object.keys(ot).sort(function(a, b) { return ot[b].cgiMean - ot[a].cgiMean; });
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis' }, _tt()),
        legend: { data: ['Mean CGI', 'Explicit Mentions'], textStyle: { color: TH.text }, top: 0 },
        grid: { left: 140, right: 40, top: 40, bottom: 20 },
        xAxis: [
            { type: 'value', name: 'Mean CGI', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
            { type: 'value', name: 'Count', axisLabel: { color: TH.text }, splitLine: { show: false } }
        ],
        yAxis: { type: 'category', data: labels, axisLabel: { color: TH.text, fontSize: 11 } },
        series: [
            { name: 'Mean CGI', type: 'bar', data: labels.map(function(k) { return ot[k].cgiMean; }), itemStyle: { color: '#6366f1' },
              label: { show: true, position: 'right', color: TH.text, fontSize: 10 } },
            { name: 'Explicit Mentions', type: 'bar', xAxisIndex: 1,
              data: labels.map(function(k) { return ot[k].explicitMention; }), itemStyle: { color: 'rgba(16,185,129,0.4)' } }
        ]
    });
}

function renderRegion() {
    var c = mkChart('chart-region');
    if (!c || !DASH.comparative) return;
    var rg = DASH.comparative.region;
    var labels = Object.keys(rg).sort(function(a, b) { return rg[b].cgiMean - rg[a].cgiMean; });
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        grid: { left: 140, right: 40, top: 10, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: labels, axisLabel: { color: TH.text, fontSize: 11 } },
        series: [{ type: 'bar', data: labels.map(function(k) { return { value: rg[k].cgiMean, itemStyle: { color: '#6366f1' } }; }),
            label: { show: true, position: 'right', color: TH.text, fontSize: 10,
                formatter: function(p) { return p.value.toFixed(1); } } }]
    });
}

function renderTemporal() {
    var c = mkChart('chart-temporal');
    if (!c || !DASH.comparative) return;
    var t = DASH.comparative.temporal;
    var years = Object.keys(t).sort();
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis' }, _tt()),
        legend: { data: ['Total Statements', 'Explicit Child Mention', 'Mean CGI'], textStyle: { color: TH.text }, top: 0 },
        grid: { left: 50, right: 50, top: 50, bottom: 30 },
        xAxis: { type: 'category', data: years, axisLabel: { color: TH.text }, axisLine: { lineStyle: { color: TH.axis } } },
        yAxis: [
            { type: 'value', name: 'Count', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
            { type: 'value', name: 'Mean CGI', axisLabel: { color: TH.text }, splitLine: { show: false } }
        ],
        series: [
            { name: 'Total Statements', type: 'bar', data: years.map(function(y) { return t[y].total; }), itemStyle: { color: 'rgba(100,116,139,0.3)' } },
            { name: 'Explicit Child Mention', type: 'bar', data: years.map(function(y) { return t[y].explicitMention; }), itemStyle: { color: '#6366f1' } },
            { name: 'Mean CGI', type: 'line', yAxisIndex: 1, data: years.map(function(y) { return t[y].cgiMean; }),
              lineStyle: { color: '#10b981', width: 2 }, itemStyle: { color: '#10b981' }, symbol: 'circle', symbolSize: 6 }
        ]
    });
}

function renderOrgHeatmap() {
    var c = mkChart('chart-org-heatmap');
    if (!c || !DASH.comparative) return;
    var hm = DASH.comparative.orgDimHeatmap;
    var data = [];
    for (var i = 0; i < hm.orgTypes.length; i++) {
        for (var j = 0; j < hm.fields.length; j++) {
            if (hm.data[i][j] > 0) data.push([j, i, hm.data[i][j]]);
        }
    }
    var maxVal = 0;
    data.forEach(function(d) { if (d[2] > maxVal) maxVal = d[2]; });
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ formatter: function(p) { return hm.orgTypes[p.data[1]] + ' / ' + hm.fields[p.data[0]] + ': ' + p.data[2] + '%'; } }, _tt()),
        grid: { left: 140, right: 80, top: 10, bottom: 180 },
        xAxis: { type: 'category', data: hm.fields, axisLabel: { color: TH.text, fontSize: 9, rotate: 55 }, axisLine: { lineStyle: { color: TH.axis } } },
        yAxis: { type: 'category', data: hm.orgTypes, axisLabel: { color: TH.text, fontSize: 11 }, axisLine: { lineStyle: { color: TH.axis } } },
        visualMap: { min: 0, max: maxVal || 1, calculable: true, orient: 'horizontal', left: 'center', bottom: 0,
            inRange: { color: ['#1e293b', '#312e81', '#6366f1', '#10b981', '#f59e0b'] }, textStyle: { color: TH.text } },
        series: [{ type: 'heatmap', data: data, label: { show: false } }]
    });
}

// ================================================================
// TAB 5: DRILL-DOWN
// ================================================================
function renderDrilldownTable() {
    if (!DASH.drilldown) return;
    var stmts = DASH.drilldown.statements;
    var tbl = document.getElementById('drilldown-table');
    var rows = ['<thead><tr><th>Key</th><th>Title</th><th>Year</th><th>Org Type</th><th>Region</th><th>CGI</th></tr></thead><tbody>'];
    stmts.forEach(function(s) {
        var cls = s.cgi >= 20 ? 'cgi-high' : s.cgi >= 10 ? 'cgi-mid' : 'cgi-low';
        rows.push('<tr data-key="' + s.key + '" style="cursor:pointer;">');
        rows.push('<td>' + s.key + '</td><td>' + (s.title || '').substring(0, 70) + '</td>');
        rows.push('<td>' + s.year + '</td><td>' + (s.orgType || '') + '</td><td>' + (s.region || '') + '</td>');
        rows.push('<td><span class="cgi-badge ' + cls + '">' + s.cgi.toFixed(1) + '</span></td></tr>');
    });
    rows.push('</tbody>');
    tbl.textContent = '';
    tbl.insertAdjacentHTML('beforeend', rows.join(''));
    tbl.querySelectorAll('tbody tr').forEach(function(row) {
        row.addEventListener('click', function() {
            tbl.querySelectorAll('tbody tr.selected').forEach(function(r) { r.classList.remove('selected'); });
            row.classList.add('selected');
            var key = row.getAttribute('data-key');
            var stmt = stmts.find(function(s) { return s.key === key; });
            if (stmt) renderStmtDetail(stmt);
        });
    });
}

function renderStmtDetail(stmt) {
    var panel = document.getElementById('stmt-detail');
    panel.style.display = 'block';
    // Add close button if not already present
    if (!panel.querySelector('.detail-close')) {
        var closeBtn = document.createElement('button');
        closeBtn.className = 'detail-close';
        closeBtn.textContent = '\u00D7';
        closeBtn.addEventListener('click', function() { panel.style.display = 'none'; });
        panel.insertBefore(closeBtn, panel.firstChild);
    }
    document.getElementById('detail-title').textContent = stmt.key + ' -- ' + stmt.title;
    var el = document.getElementById('chart-stmt-radar');
    var c = echarts.getInstanceByDom(el) || echarts.init(el);
    if (_charts.indexOf(c) === -1) _charts.push(c);
    if (!c) return;
    var fields = DASH.fieldOrder;
    var labels = fields.map(function(f) { return DASH.fieldLabels[f]; });
    var vals = fields.map(function(f) { return stmt.scores[f] || 0; });
    c.setOption({
        toolbox: _toolbox(),
        tooltip: _tt(),
        radar: {
            indicator: labels.map(function(l) { return { name: l, max: 100 }; }),
            axisName: { color: TH.text, fontSize: 9 },
            splitArea: { areaStyle: { color: ['rgba(99,102,241,0.03)', 'rgba(99,102,241,0.06)'] } },
            splitLine: { lineStyle: { color: TH.split } },
            axisLine: { lineStyle: { color: TH.axis } }
        },
        series: [{ type: 'radar', data: [{ value: vals, name: stmt.key,
            areaStyle: { color: 'rgba(99,102,241,0.25)' },
            lineStyle: { color: '#6366f1', width: 2 }, itemStyle: { color: '#6366f1' }
        }] }]
    });
}

// ================================================================
// TAB 6: CROSS-SYSTEM
// ================================================================
function renderLasso() {
    var c = mkChart('chart-lasso');
    if (!c || !DASH.crossSystem) return;
    var cs = DASH.crossSystem;
    var feats = cs.lassoFeatures.slice().reverse();
    var coefs = cs.lassoCoefs.slice().reverse();
    c.setOption({
        toolbox: _toolbox(),
        title: { text: 'R\u00b2 = ' + cs.rSquared.toFixed(3) + ' | ' + cs.nNonzero + ' non-zero features',
            left: 'center', top: 0, textStyle: { color: TH.text, fontSize: 11, fontWeight: 'normal' } },
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        grid: { left: 260, right: 40, top: 30, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: feats, axisLabel: { color: TH.text, fontSize: 10 } },
        series: [{ type: 'bar', data: coefs.map(function(v) {
            return { value: v, itemStyle: { color: v >= 0 ? '#10b981' : '#ef4444' } };
        }), label: { show: true, position: 'right', color: TH.text, fontSize: 9,
            formatter: function(p) { return p.value.toFixed(3); } } }]
    });
}

function renderVenn() {
    var c = mkChart('chart-venn');
    if (!c || !DASH.crossSystem) return;
    var v = DASH.crossSystem.venn;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: _tt(),
        series: [{ type: 'pie', radius: ['0%', '75%'], center: ['50%', '50%'],
            data: [
                { value: v.cgOnly, name: 'CGI-only: ' + v.cgOnly, itemStyle: { color: '#6366f1' } },
                { value: v.both, name: 'Both: ' + v.both, itemStyle: { color: '#10b981' } },
                { value: v.fpOnly, name: 'fp-only: ' + v.fpOnly, itemStyle: { color: '#f59e0b' } },
                { value: v.neither, name: 'Neither: ' + v.neither, itemStyle: { color: '#334155' } }
            ],
            label: { color: TH.text, fontSize: 11, formatter: '{b}' },
            emphasis: { label: { fontSize: 13, fontWeight: 'bold' } }
        }]
    });
}

function renderConcordance() {
    var c = mkChart('chart-concordance');
    if (!c || !DASH.crossSystem) return;
    var kr = DASH.crossSystem.kappaResults;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        grid: { left: 260, right: 40, top: 10, bottom: 20 },
        xAxis: { type: 'value', name: "Cohen's Kappa", min: 0, max: 0.5,
            axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: kr.labels.slice().reverse(), axisLabel: { color: TH.text, fontSize: 10 } },
        series: [{ type: 'bar', data: kr.values.slice().reverse().map(function(v) {
            return { value: v, itemStyle: { color: v > 0.3 ? '#10b981' : v > 0.15 ? '#f59e0b' : '#ef4444' } };
        }), label: { show: true, position: 'right', color: TH.text, fontSize: 10,
            formatter: function(p) { return p.value.toFixed(3); } } }]
    });
}

function renderDiscordTable() {
    if (!DASH.crossSystem) return;
    var cs = DASH.crossSystem;
    var tbl = document.getElementById('discord-table');
    var rows = ['<thead><tr><th>Type</th><th>Key</th><th>Title</th><th>fp Score</th><th>CGI</th></tr></thead><tbody>'];
    cs.blindSpots.slice(0, 10).forEach(function(s) {
        rows.push('<tr><td><span class="status-badge status-yellow">Blind Spot</span></td>');
        rows.push('<td>' + s.key + '</td><td>' + (s.title || '').substring(0, 50) + '</td>');
        rows.push('<td>' + s.fpScore + '</td><td>' + s.cgi.toFixed(1) + '</td></tr>');
    });
    cs.reverseGaps.slice(0, 10).forEach(function(s) {
        rows.push('<tr><td><span class="status-badge status-red">Reverse Gap</span></td>');
        rows.push('<td>' + s.key + '</td><td>' + (s.title || '').substring(0, 50) + '</td>');
        rows.push('<td>' + s.fpScore + '</td><td>' + s.cgi.toFixed(1) + '</td></tr>');
    });
    rows.push('</tbody>');
    tbl.textContent = '';
    tbl.insertAdjacentHTML('beforeend', rows.join(''));
}

// ================================================================
// TAB 7: VALIDATION
// ================================================================
function renderPrecision() {
    var c = mkChart('chart-precision');
    if (!c || !DASH.validation) return;
    var st = DASH.validation.stratum;
    var labels = ['A_high', 'B_medium', 'C_low', 'D_discordant'];
    var display = ['A: High', 'B: Medium', 'C: Low', 'D: Discordant'];
    var precs = labels.map(function(l) {
        var p = st[l] ? st[l].precision : null;
        return p !== null ? p : 0;
    });
    var counts = labels.map(function(l) { return st[l] ? st[l].n : 0; });
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', formatter: function(p) {
            var i = p[0].dataIndex;
            return display[i] + '\nPrecision: ' + precs[i] + '%\nSampled: ' + counts[i];
        } }, _tt()),
        grid: { left: 60, right: 40, top: 20, bottom: 40 },
        xAxis: { type: 'category', data: display, axisLabel: { color: TH.text, fontSize: 11 }, axisLine: { lineStyle: { color: TH.axis } } },
        yAxis: { type: 'value', name: 'Precision (%)', max: 100, axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        series: [{ type: 'bar', data: precs.map(function(v) {
            return { value: v, itemStyle: { color: v > 80 ? '#10b981' : v > 10 ? '#f59e0b' : '#ef4444' } };
        }), label: { show: true, position: 'top', color: TH.text, fontSize: 12, fontWeight: 'bold',
            formatter: function(p) { return p.value + '%'; } } }]
    });
}

function renderWeightMatrix() {
    var c = mkChart('chart-weight-matrix');
    if (!c || !DASH.validation) return;
    var wm = DASH.validation.weightMatrix;
    var labels = wm.labels;
    var data = [];
    for (var i = 0; i < labels.length; i++) {
        for (var j = 0; j < labels.length; j++) {
            data.push([j, i, wm.data[i][j]]);
        }
    }
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ formatter: function(p) {
            return labels[p.data[1]] + ' vs ' + labels[p.data[0]] + ': ' + p.data[2].toFixed(4);
        } }, _tt()),
        grid: { left: 100, right: 60, top: 10, bottom: 100 },
        xAxis: { type: 'category', data: labels, axisLabel: { color: TH.text, fontSize: 10, rotate: 35 }, axisLine: { lineStyle: { color: TH.axis } } },
        yAxis: { type: 'category', data: labels, axisLabel: { color: TH.text, fontSize: 10 }, axisLine: { lineStyle: { color: TH.axis } } },
        visualMap: { min: 0.93, max: 1.0, calculable: true, orient: 'horizontal', left: 'center', bottom: 0,
            inRange: { color: ['#312e81', '#6366f1', '#10b981', '#a3e635'] }, textStyle: { color: TH.text } },
        series: [{ type: 'heatmap', data: data,
            label: { show: true, color: '#fff', fontSize: 9, formatter: function(p) { return p.data[2].toFixed(2); } } }]
    });
}

function renderFloorDecomp() {
    var c = mkChart('chart-floor');
    if (!c || !DASH.validation) return;
    var fd = DASH.validation.floorDecomp;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        legend: { data: ['Zero', 'Below Floor', 'Floor (=50)', 'Light (51-65)', 'Substantive (66-85)', 'Deep (86+)'],
            textStyle: { color: TH.text, fontSize: 9 }, top: 0 },
        grid: { left: 200, right: 30, top: 40, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: fd.labels, inverse: true, axisLabel: { color: TH.text, fontSize: 10 } },
        series: [
            { name: 'Zero', type: 'bar', stack: 'total', data: fd.zero, itemStyle: { color: '#334155' } },
            { name: 'Below Floor', type: 'bar', stack: 'total', data: fd.below, itemStyle: { color: '#475569' } },
            { name: 'Floor (=50)', type: 'bar', stack: 'total', data: fd.floor, itemStyle: { color: '#f59e0b' } },
            { name: 'Light (51-65)', type: 'bar', stack: 'total', data: fd.light, itemStyle: { color: '#6366f1' } },
            { name: 'Substantive (66-85)', type: 'bar', stack: 'total', data: fd.subst, itemStyle: { color: '#10b981' } },
            { name: 'Deep (86+)', type: 'bar', stack: 'total', data: fd.deep, itemStyle: { color: '#22d3ee' } }
        ]
    });
}

function renderMonteCarlo() {
    var c = mkChart('chart-montecarlo');
    if (!c || !DASH.validation) return;
    var mc = DASH.validation.monteCarlo;
    var labels = mc.labels.slice().reverse();
    var refs = mc.refRank.slice().reverse();
    var medians = mc.medianRank.slice().reverse();
    var los = mc.ci95Lo.slice().reverse();
    var his = mc.ci95Hi.slice().reverse();
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', formatter: function(p) {
            var i = p[0].dataIndex;
            return labels[i] + '\nRef Rank: ' + refs[i] + '\nMedian: ' + medians[i] + '\n95% CI: [' + los[i] + ', ' + his[i] + ']';
        } }, _tt()),
        grid: { left: 270, right: 60, top: 20, bottom: 30 },
        xAxis: { type: 'value', name: 'Rank (lower = better)', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: labels, axisLabel: { color: TH.text, fontSize: 9 } },
        series: [
            { name: 'Reference Rank', type: 'scatter',
              data: refs.map(function(v, i) { return [v, i]; }),
              symbolSize: 12, itemStyle: { color: '#6366f1' }, z: 3 },
            { name: 'Median Rank', type: 'scatter',
              data: medians.map(function(v, i) { return [v, i]; }),
              symbolSize: 8, symbol: 'diamond', itemStyle: { color: '#10b981' }, z: 3 },
            { name: '95% CI', type: 'custom',
              renderItem: function(params, api) {
                  var yVal = api.coord([0, api.value(1)])[1];
                  var loX = api.coord([api.value(2), 0])[0];
                  var hiX = api.coord([api.value(3), 0])[0];
                  return {
                      type: 'line',
                      shape: { x1: loX, y1: yVal, x2: hiX, y2: yVal },
                      style: { stroke: '#f59e0b', lineWidth: 2 }
                  };
              },
              data: los.map(function(lo, i) { return [0, i, lo, his[i]]; }),
              encode: { x: [2, 3], y: 1 }, z: 1
            }
        ]
    });
}

// ================================================================
// TAB 8: AGE-STAGE
// ================================================================
function renderAgeFlags() {
    var c = mkChart('chart-age-flags');
    if (!c || !DASH.ageStage) return;
    var af = DASH.ageStage.ageFlags;
    var labels = ['0-5', '6-12', '13-17', 'Transition'];
    var vals = [af['0-5'], af['6-12'], af['13-17'], af['transition']];
    var colors = ['#ef4444', '#f59e0b', '#6366f1', '#8b5cf6'];
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' } }, _tt()),
        grid: { left: 60, right: 40, top: 20, bottom: 40 },
        xAxis: { type: 'category', data: labels, axisLabel: { color: TH.text, fontSize: 12 }, axisLine: { lineStyle: { color: TH.axis } } },
        yAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        series: [{ type: 'bar', data: vals.map(function(v, i) { return { value: v, itemStyle: { color: colors[i] } }; }),
            label: { show: true, position: 'top', color: TH.text, fontSize: 14, fontWeight: 'bold' },
            barWidth: '50%' }]
    });
}

function renderOrgAge() {
    var c = mkChart('chart-org-age');
    if (!c || !DASH.ageStage) return;
    var oa = DASH.ageStage.orgAgeCGI;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis' }, _tt()),
        legend: { data: ['0-5 yrs', '6-12 yrs', '13-17 yrs'], textStyle: { color: TH.text }, top: 0 },
        grid: { left: 140, right: 40, top: 40, bottom: 20 },
        xAxis: { type: 'value', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: oa.orgTypes, axisLabel: { color: TH.text, fontSize: 11 } },
        series: [
            { name: '0-5 yrs', type: 'bar', data: oa.age0to5, itemStyle: { color: '#ef4444' } },
            { name: '6-12 yrs', type: 'bar', data: oa.age6to12, itemStyle: { color: '#f59e0b' } },
            { name: '13-17 yrs', type: 'bar', data: oa.age13to17, itemStyle: { color: '#6366f1' } }
        ]
    });
}

function renderDevHeatmap() {
    var c = mkChart('chart-dev-heatmap');
    if (!c || !DASH.ageStage) return;
    var dh = DASH.ageStage.devHeatmap;
    var data = [];
    var maxVal = 0;
    for (var i = 0; i < dh.dims.length; i++) {
        for (var j = 0; j < dh.ageGroups.length; j++) {
            var val = dh.data[i][j];
            data.push([j, i, val]);
            if (val > maxVal) maxVal = val;
        }
    }
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ formatter: function(p) {
            return dh.dims[p.data[1]] + ' / ' + dh.ageGroups[p.data[0]] + ': ' + p.data[2].toFixed(1);
        } }, _tt()),
        grid: { left: 200, right: 80, top: 10, bottom: 60 },
        xAxis: { type: 'category', data: dh.ageGroups, axisLabel: { color: TH.text, fontSize: 12 },
            axisLine: { lineStyle: { color: TH.axis } }, position: 'top' },
        yAxis: { type: 'category', data: dh.dims, inverse: true,
            axisLabel: { color: TH.text, fontSize: 10 }, axisLine: { lineStyle: { color: TH.axis } } },
        visualMap: { min: 0, max: maxVal || 1, calculable: true, orient: 'horizontal', left: 'center', bottom: 0,
            inRange: { color: ['#1e293b', '#312e81', '#6366f1', '#10b981', '#f59e0b'] }, textStyle: { color: TH.text } },
        series: [{ type: 'heatmap', data: data,
            label: { show: true, color: '#fff', fontSize: 9,
                formatter: function(p) { return p.data[2] > 0 ? p.data[2].toFixed(0) : ''; } } }]
    });
}

function renderAgeTemporal() {
    var c = mkChart('chart-age-temporal');
    if (!c || !DASH.ageStage) return;
    var at = DASH.ageStage.ageTemporal;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis' }, _tt()),
        legend: { data: ['0-5 yrs', '6-12 yrs', '13-17 yrs'], textStyle: { color: TH.text }, top: 0 },
        grid: { left: 50, right: 30, top: 50, bottom: 30 },
        xAxis: { type: 'category', data: at.years, axisLabel: { color: TH.text }, axisLine: { lineStyle: { color: TH.axis } } },
        yAxis: { type: 'value', name: 'Mean Age-Weighted CGI', axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        series: [
            { name: '0-5 yrs', type: 'line', data: at.age0to5,
              lineStyle: { color: '#ef4444', width: 2 }, itemStyle: { color: '#ef4444' }, symbol: 'circle', symbolSize: 5 },
            { name: '6-12 yrs', type: 'line', data: at.age6to12,
              lineStyle: { color: '#f59e0b', width: 2 }, itemStyle: { color: '#f59e0b' }, symbol: 'circle', symbolSize: 5 },
            { name: '13-17 yrs', type: 'line', data: at.age13to17,
              lineStyle: { color: '#6366f1', width: 2 }, itemStyle: { color: '#6366f1' }, symbol: 'circle', symbolSize: 5 }
        ]
    });
}

// ================================================================
// TAB 9: RISK-GOVERNANCE
// ================================================================
function renderRiskTable() {
    if (!DASH.riskGov) return;
    var risks = DASH.riskGov.riskTable;
    var tbl = document.getElementById('risk-table');
    var rows = ['<thead><tr><th>Risk</th><th>Gov Count</th><th>Coverage %</th><th>Status</th></tr></thead><tbody>'];
    risks.forEach(function(r) {
        var cls = 'status-' + r.status;
        rows.push('<tr><td>' + r.name + '</td>');
        rows.push('<td>' + r.count + '</td>');
        rows.push('<td>' + r.pct + '%</td>');
        rows.push('<td><span class="status-badge ' + cls + '">' + r.label + '</span></td></tr>');
    });
    rows.push('</tbody>');
    tbl.textContent = '';
    tbl.insertAdjacentHTML('beforeend', rows.join(''));
}

function renderLatency() {
    var c = mkChart('chart-latency');
    if (!c || !DASH.riskGov) return;
    var ld = DASH.riskGov.latencyData;
    var scatterData = ld.map(function(d) { return [d.threatYear, d.govYear]; });
    var tooltips = ld.map(function(d) { return d.name; });
    var colors = ld.map(function(d) {
        return d.status === 'green' ? '#10b981' : d.status === 'yellow' ? '#f59e0b' : '#ef4444';
    });
    var minYear = 2013, maxYear = 2026;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ formatter: function(p) {
            if (p.seriesType === 'scatter') {
                return tooltips[p.dataIndex] + '\nThreat: ' + p.data[0] + '\nGov: ' + p.data[1] + '\nLag: ' + (p.data[1] - p.data[0]) + ' yrs';
            }
            return '';
        } }, _tt()),
        grid: { left: 60, right: 30, top: 20, bottom: 50 },
        xAxis: { type: 'value', name: 'Threat Emergence', min: minYear, max: maxYear,
            axisLabel: { color: TH.text, formatter: '{value}' }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'value', name: 'First Governance', min: minYear, max: maxYear,
            axisLabel: { color: TH.text, formatter: '{value}' }, splitLine: { lineStyle: { color: TH.split } } },
        series: [
            { type: 'line', data: [[minYear, minYear], [maxYear, maxYear]],
              lineStyle: { color: '#475569', type: 'dashed', width: 1 }, symbol: 'none', silent: true },
            { type: 'scatter', data: scatterData, symbolSize: 14,
              itemStyle: { color: function(p) { return colors[p.dataIndex]; } } }
        ]
    });
}

function renderSectorRadar() {
    var c = mkChart('chart-sector-radar');
    if (!c || !DASH.riskGov) return;
    var sr = DASH.riskGov.sectorRadar;
    var sectors = Object.keys(sr);
    var vals = sectors.map(function(s) { return sr[s]; });
    var maxVal = Math.max.apply(null, vals) || 50;
    c.setOption({
        toolbox: _toolbox(),
        tooltip: _tt(),
        radar: {
            indicator: sectors.map(function(s) { return { name: s, max: maxVal * 1.2 }; }),
            axisName: { color: TH.text, fontSize: 11 },
            splitArea: { areaStyle: { color: ['rgba(99,102,241,0.05)', 'rgba(99,102,241,0.1)'] } },
            splitLine: { lineStyle: { color: TH.split } },
            axisLine: { lineStyle: { color: TH.axis } }
        },
        series: [{ type: 'radar', data: [{ value: vals, name: 'Avg Coverage',
            areaStyle: { color: 'rgba(99,102,241,0.2)' },
            lineStyle: { color: '#6366f1', width: 2 }, itemStyle: { color: '#6366f1' }
        }] }]
    });
}

function renderDimGapRank() {
    var c = mkChart('chart-dim-gap-rank');
    if (!c || !DASH.riskGov) return;
    var dg = DASH.riskGov.dimGaps;
    var labels = dg.map(function(d) { return d.label; });
    var pcts = dg.map(function(d) { return d.pct; });
    c.setOption({
        toolbox: _toolbox(),
        tooltip: Object.assign({ trigger: 'axis', axisPointer: { type: 'shadow' },
            formatter: function(p) {
                var i = p[0].dataIndex;
                return labels[i] + '\n' + pcts[i] + '% (' + dg[i].count + ' stmts)';
            } }, _tt()),
        grid: { left: 200, right: 60, top: 10, bottom: 20 },
        xAxis: { type: 'value', name: '%', max: 100, axisLabel: { color: TH.text }, splitLine: { lineStyle: { color: TH.split } } },
        yAxis: { type: 'category', data: labels, inverse: true, axisLabel: { color: TH.text, fontSize: 11 } },
        series: [{ type: 'bar', data: pcts.map(function(v) {
            return { value: v, itemStyle: { color: v < 5 ? '#ef4444' : v < 15 ? '#f59e0b' : '#10b981' } };
        }), label: { show: true, position: 'right', color: TH.text, fontSize: 10,
            formatter: function(p) { return p.value + '%'; } } }]
    });
}

// ================================================================
// EXPERT INTERPRETATIONS
// ================================================================
var _interpVisible = true;

function renderTabInterpretation(tabKey) {
    if (typeof INTERPRETATIONS === 'undefined') return;
    var tabData = INTERPRETATIONS[tabKey];
    if (!tabData || !tabData.tabSummary) return;
    var el = document.getElementById('tab-interp-' + tabKey);
    if (!el || el.children.length > 0) return;
    var s = tabData.tabSummary;
    var html = '<div class="tab-headline">' + escHtml(s.headline) + '</div>';
    html += '<div class="tab-overview">' + escHtml(s.overview) + '</div>';
    html += '<div class="tab-attribution">' + escHtml(s.expertName) + ' -- ' + escHtml(s.expertRole) + '</div>';
    el.insertAdjacentHTML('beforeend', html);
    if (_interpVisible) el.classList.add('visible');
}

function renderChartInterpretation(chartId) {
    if (typeof INTERPRETATIONS === 'undefined') return;
    var tabs = Object.keys(INTERPRETATIONS);
    var data = null;
    for (var t = 0; t < tabs.length; t++) {
        var charts = INTERPRETATIONS[tabs[t]].charts;
        if (charts && charts[chartId]) { data = charts[chartId]; break; }
    }
    if (!data) return;
    var el = document.getElementById('interp-' + chartId);
    if (!el || el.children.length > 0) return;
    var html = '';
    if (data.dataDescription || data.methodology) {
        html += '<div class="interp-data-method">';
        if (data.dataDescription) html += '<strong>Data:</strong> ' + escHtml(data.dataDescription) + ' ';
        if (data.methodology) html += '<strong>Method:</strong> ' + escHtml(data.methodology);
        html += '</div>';
    }
    html += '<div class="interp-label">What This Shows</div><div class="interp-text">' + escHtml(data.whatThisShows) + '</div>';
    html += '<div class="interp-label">Key Finding</div><div class="interp-text" style="font-weight:600">' + escHtml(data.keyFinding) + '</div>';
    html += '<div class="interp-label">Why It Matters</div><div class="interp-text">' + escHtml(data.whyItMatters) + '</div>';
    html += '<div class="interp-label">Expert Interpretation</div><div class="interp-text">' + escHtml(data.expertInterpretation) + '</div>';
    if (data.conclusion) {
        html += '<div class="interp-label">Conclusion</div><div class="interp-text interp-conclusion">' + escHtml(data.conclusion) + '</div>';
    }
    html += '<div class="interp-expert">' + escHtml(data.expertName) + ' \u2014 ' + escHtml(data.expertRole) + '</div>';
    el.insertAdjacentHTML('beforeend', html);
    if (_interpVisible) el.classList.add('visible');
}

function escHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function toggleInterpretations() {
    _interpVisible = !_interpVisible;
    var btn = document.getElementById('interp-toggle');
    if (btn) {
        if (_interpVisible) { btn.classList.add('active'); }
        else { btn.classList.remove('active'); }
    }
    var panels = document.querySelectorAll('.tab-interpretation, .chart-interpretation');
    panels.forEach(function(p) {
        if (_interpVisible) { p.classList.add('visible'); }
        else { p.classList.remove('visible'); }
    });
}

function renderInterpretationsForTab(tabKey) {
    renderTabInterpretation(tabKey);
    if (typeof INTERPRETATIONS === 'undefined') return;
    var tabData = INTERPRETATIONS[tabKey];
    if (!tabData || !tabData.charts) return;
    var chartIds = Object.keys(tabData.charts);
    for (var i = 0; i < chartIds.length; i++) {
        renderChartInterpretation(chartIds[i]);
    }
}

// Bind toggle button
var interpBtn = document.getElementById('interp-toggle');
if (interpBtn) {
    interpBtn.addEventListener('click', function() { toggleInterpretations(); });
    interpBtn.classList.add('active');
}

// ================================================================
// APP CONTROLLER
// ================================================================
var activeTab = 'overview';
var _tabInited = {};

function renderKPIs() {
    if (!DASH || !DASH.overview) return;
    var o = DASH.overview;
    var grid = document.getElementById('kpi-grid');
    var cards = [
        kpi(o.total.toLocaleString(), 'Statements Analyzed', '20 dimensions each'),
        kpi(o.explicitMention.toLocaleString(), 'Mention Children', o.explicitMention + ' of ' + o.total + ' (' + (100 * o.explicitMention / o.total).toFixed(1) + '%)'),
        kpi(o.cgiMax.toFixed(1), 'Max CGI', 'out of 100 possible'),
        kpi(o.cgiAboveZero.toLocaleString(), 'CGI > 0', o.cgiAboveZeroPct + '% of corpus'),
        kpi(o.cgiMeanNonZero.toFixed(1), 'Mean CGI (non-zero)', 'across ' + o.cgiAboveZero + ' statements'),
        kpi('9', 'Dashboard Tabs', '5 original + 4 new')
    ];
    grid.textContent = '';
    grid.insertAdjacentHTML('beforeend', cards.join(''));
}

function kpi(val, label, sub) {
    return '<div class="kpi-card"><div class="kpi-value">' + val + '</div><div class="kpi-label">' + label + '</div><div class="kpi-sub">' + (sub || '') + '</div></div>';
}

function renderHeadline() {
    if (!DASH.texts) return;
    var banner = document.getElementById('headline-banner');
    banner.textContent = '';
    var p = document.createElement('p');
    p.innerHTML = DASH.texts.headline;
    banner.appendChild(p);
    var list = document.getElementById('findings-list');
    list.textContent = '';
    DASH.texts.keyFindings.forEach(function(f) {
        var li = document.createElement('li');
        li.textContent = f;
        list.appendChild(li);
    });
}

function renderTopTable() {
    if (!DASH.overview) return;
    var top = DASH.overview.top25;
    var tbl = document.getElementById('top-table');
    var rows = ['<thead><tr><th>#</th><th>Key</th><th>Title</th><th>Year</th><th>Org Type</th><th>Region</th><th>CGI</th></tr></thead><tbody>'];
    top.forEach(function(s, i) {
        var cls = s.cgi >= 20 ? 'cgi-high' : s.cgi >= 10 ? 'cgi-mid' : 'cgi-low';
        var title = (s.title || '');
        var display = title.length > 65 ? title.substring(0, 62) + '...' : title;
        rows.push('<tr><td>' + (i + 1) + '</td><td>' + s.key + '</td><td title="' + escHtml(title) + '">' + escHtml(display) + '</td>');
        rows.push('<td>' + s.year + '</td><td>' + (s.org_type || '') + '</td><td>' + (s.region || '') + '</td>');
        rows.push('<td><span class="cgi-badge ' + cls + '">' + s.cgi.toFixed(1) + '</span></td></tr>');
    });
    rows.push('</tbody>');
    tbl.textContent = '';
    tbl.insertAdjacentHTML('beforeend', rows.join(''));
}

function switchTab(tabId) {
    activeTab = tabId;
    document.querySelectorAll('.tab-pane').forEach(function(p) { p.classList.remove('active'); });
    var pane = document.getElementById('pane-' + tabId);
    if (pane) pane.classList.add('active');
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelector('[data-tab="' + tabId + '"]').classList.add('active');
    if (!_tabInited[tabId]) {
        _tabInited[tabId] = true;
        initTab(tabId);
    }
    setTimeout(resizeAll, 80);
}

function initTab(tab) {
    switch (tab) {
        case 'overview': renderCGIHistogram(); renderCategoryRadar(); renderDimCoverage(); break;
        case 'dimensions': renderDimDistributions(); renderCooccurrence(); break;
        case 'gaps': renderMentionGap(); renderPPP(); renderGapsRanked(); renderEmerging(); break;
        case 'comparative': renderOrgType(); renderRegion(); renderTemporal(); renderOrgHeatmap(); break;
        case 'drilldown': renderDrilldownTable(); break;
        case 'crosssystem': renderLasso(); renderVenn(); renderConcordance(); renderDiscordTable(); break;
        case 'validation': renderPrecision(); renderWeightMatrix(); renderFloorDecomp(); renderMonteCarlo(); break;
        case 'agestage': renderAgeFlags(); renderOrgAge(); renderDevHeatmap(); renderAgeTemporal(); break;
        case 'riskgov': renderRiskTable(); renderLatency(); renderSectorRadar(); renderDimGapRank(); break;
    }
    renderInterpretationsForTab(tab);
}

// Tab click handlers
document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { switchTab(btn.dataset.tab); });
});

// Theme toggle
var themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', function() {
    var html = document.documentElement;
    var current = html.getAttribute('data-theme');
    if (current === 'light') {
        html.removeAttribute('data-theme');
        themeBtn.textContent = '\u263E';
    } else {
        html.setAttribute('data-theme', 'light');
        themeBtn.textContent = '\u2600';
    }
    var newTH = current === 'light' ? TH_DARK : TH_LIGHT;
    Object.keys(newTH).forEach(function(k) { TH[k] = newTH[k]; });
    setTimeout(function() { resizeAll(); reThemeAll(); }, 100);
});

// Search
var searchInput = document.getElementById('stmt-search');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        var q = this.value.toLowerCase();
        var rows = document.querySelectorAll('#drilldown-table tbody tr');
        rows.forEach(function(row) {
            row.style.display = row.textContent.toLowerCase().indexOf(q) >= 0 ? '' : 'none';
        });
    });
}

// Resize
window.addEventListener('resize', function() { setTimeout(resizeAll, 100); });

// Init
renderKPIs();
renderHeadline();
renderTopTable();
_tabInited['overview'] = true;
initTab('overview');
