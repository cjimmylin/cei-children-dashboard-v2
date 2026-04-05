# Children & AI Governance Dashboard v2

Interactive dashboard analyzing children's governance provisions across 3,044 AI governance statements from the [Tapestry database](https://github.com/cjimmylin/cei-ai-statements).

## Features
- **9 tabs**: Overview, Dimensions, Gap Analysis, Comparative, Statements, Cross-System, Validation, Age-Stage, Risk-Governance
- **20 scoring dimensions** organized by CRC 3 Ps framework (Protection, Participation, Provision)
- **Expert commentary** from a 12-member interdisciplinary council (toggle on/off)
- **3,044 statements** scored across 20 dimensions with composite Children Governance Index (CGI)

## Technology
- ECharts 5 + Bootstrap 5.3 + Inter font
- "Fat data, thin client" architecture: Python pre-computes all analytics into data.js, browser renders
- Dark/light theme toggle

## Citation
Lin, J. (2026). Children in the Blind Spot: A Multi-Dimensional Analysis of Children's Governance in 3,044 AI Policy Statements. *Working paper*.

## Related
- [CEI Literature Vault Dashboard](https://cjimmylin.github.io/cei-dashboard-13/)
- [Governance Genome Explorer](https://cjimmylin.github.io/cei-genome-heatmap/)
