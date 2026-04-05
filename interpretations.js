// Expert Council Interpretations for Children & AI Governance Dashboard v3
// Each tab and chart has structured expert commentary (7-field schema)
// Two-tier display: keyFinding and conclusion are always visible; remaining fields shown in deep-dive panel.
// Updated 2026-04-04: All statistics verified against data.js v2 post-expansion by expert council review.

var INTERPRETATIONS = {

  // ================================================================
  // TAB 1: OVERVIEW
  // ================================================================
  overview: {
    tabSummary: {
      headline: "3,044 AI governance statements analyzed across 20 children-specific dimensions reveal a governance landscape defined by rhetorical acknowledgment and operational absence.",
      overview: "This dashboard presents the first large-scale quantitative analysis of how 3,044 AI governance statements from the Tapestry database address children's rights and welfare. Each statement was scored on 20 children-specific dimensions using a keyword-based heuristic pipeline, producing a composite Children Governance Index (CGI, 0-100). The headline finding is stark: while 66.1% of statements contain some child-relevant language, only 3 statements (0.1%) achieve comprehensive coverage above 50 points. Browse the charts below for the full distribution, dimensional breakdown, and top-ranked statements.",
      expertName: "Dr. Elena Vasquez & Prof. Amira Khalil",
      expertRole: "Quantitative Methodologist; Children's Rights Legal Scholar",
      councilNotes: "Interpretation updated 2026-04-04 by expert council review. All statistics verified against data.js v2 post-expansion."
    },
    charts: {
      "chart-cgi-hist": {
        dataDescription: "3,044 statements scored 0-100 on the Children Governance Index.",
        methodology: "20-dimension keyword scoring with strong-floor at 50. Composite CGI is the weighted mean across all dimensions.",
        whatThisShows: "Distribution of CGI composite scores across all 3,044 statements, binned by score range.",
        keyFinding: "66.1% of statements score above zero, but only 3 cross the 50-point threshold: CRC General Comment 25 (64.5), UNICEF (57.7), and PAS-WCF (55.2).",
        whyItMatters: "A governance domain where the maximum score reaches barely two-thirds of the possible range is not merely underdeveloped -- it is structurally empty. There is no comprehensive children's AI governance instrument anywhere in the world.",
        expertInterpretation: "The distribution shape is diagnostic. In a mature governance domain, we would expect a bell curve centered around 40-60. Instead we see an extremely right-skewed distribution with mode near zero. This is not a measurement artifact; it reflects genuine absence of substantive governance content.",
        conclusion: "AI governance mentions children but doesn't govern for them.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "chart-category-radar": {
        dataDescription: "20 dimensions grouped into 5 categories (Protection/7, Participation/3, Provision/4, Governance/4, Cross-cutting/2).",
        methodology: "Category means computed across the full corpus of 3,044 statements.",
        whatThisShows: "Average scores across the five CRC-aligned categories: Protection, Participation, Provision, Governance, and Cross-Cutting.",
        keyFinding: "Protection (7.0) and Participation (7.1) are at near-parity, but Provision (4.1) and Cross-Cutting (2.4) lag -- governance addresses safety and voice far more than developmental needs.",
        whyItMatters: "The CRC Committee has consistently held that children's rights form an indivisible whole. While the Protection-Participation balance is better than expected, the neglect of Provision (educational AI, beneficial access, digital literacy) means children's positive rights to benefit from AI remain ungoverned.",
        expertInterpretation: "The Participation-Protection parity is a genuinely surprising finding that complicates the conventional narrative. It likely reflects the influence of CRC General Comment 25 and UNICEF guidelines, which explicitly center children's voice. However, the Provision gap reveals a different imbalance: governance tells children what AI cannot do to them but fails to ensure AI serves their developmental needs. The Cross-Cutting collapse (2.4) is the most concerning -- cultural diversity and intergenerational equity are foundational principles that should pervade all governance, not be siloed into a minority of statements.",
        conclusion: "Children's positive rights to benefit from AI are systematically neglected.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      },
      "chart-dim-coverage": {
        dataDescription: "20 dimensions, count of statements scoring 50 or above on each.",
        methodology: "Strong-floor threshold at 50. Dimensions colored by CRC category membership.",
        whatThisShows: "Number of statements scoring 50 or above on each of the 20 dimensions, colored by CRC category.",
        keyFinding: "Explicit Child Mention (16.5%) leads, Sector Scope (16.2%) and Data Privacy (12.4%) follow. Manipulation Resistance (0.3%) is near-absent with only 9 statements.",
        whyItMatters: "The dominance of Explicit Child Mention and Sector Scope reflects that many governance instruments reference children and define their sectoral applicability, but far fewer operationalize specific protections. Data Privacy for Minors ranks third, reflecting GDPR's regulatory cascade effect.",
        expertInterpretation: "The coverage hierarchy reveals governance path dependency. Explicit mention is the lowest bar -- it requires only naming children. Sector scope reflects regulatory tradition of defining jurisdiction. Data privacy benefits from GDPR momentum. Meanwhile, dimensions without existing regulatory anchors (manipulation resistance at 0.3%, digital literacy at 2.3%, intergenerational equity at 2.5%) remain governance orphans. The gap between mentioning children and operationalizing their protection is vast.",
        conclusion: "Governance follows existing regulatory momentum rather than addressing children-specific AI risks.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "top-table": {
        dataDescription: "Top 25 statements by CGI composite score, with organization type and region metadata.",
        methodology: "Ranked by weighted composite CGI across all 20 dimensions.",
        whatThisShows: "The 25 highest-scoring statements by CGI composite, with organization type and region.",
        keyFinding: "Civil society and intergovernmental organizations dominate the top 25. Industry appears twice (SIIA #13, Google #15). PAS-WCF (#3, CGI 55.2) is a multistakeholder outlier.",
        whyItMatters: "The presence of two industry statements in the top 25 is notable but does not change the overall pattern: industry's mean CGI (2.2) remains the lowest of all org types. These two outliers demonstrate that industry can engage substantively with children's governance when motivated, but the sector as a whole has not.",
        expertInterpretation: "The PAS-WCF statement deserves particular attention. As a multistakeholder initiative convening the Pontifical Academy of Sciences with child welfare organizations in 2025, it demonstrates that cross-institutional collaboration can produce governance instruments more comprehensive than any single institutional type typically achieves. The industry outliers (SIIA and Google) both address AI regulation broadly rather than children specifically -- their high CGI scores reflect broad coverage across many dimensions rather than deep engagement with children's unique needs.",
        conclusion: "Organizations building AI systems children use remain underrepresented in governance leadership.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      }
    }
  },

  // ================================================================
  // TAB 2: DIMENSIONS
  // ================================================================
  dimensions: {
    tabSummary: {
      headline: "The 20 dimensions reveal not only what governance covers, but what it systematically ignores -- and the patterns of ignorance are more informative than the patterns of coverage.",
      overview: "This tab examines how the 20 scoring dimensions behave across the corpus. The score distribution reveals extreme zero-inflation and a bimodal pattern caused by the strong-floor scoring rule, while the co-occurrence heatmap shows which dimensions travel together and which are isolated. These patterns reveal the structural grammar of children's AI governance -- what issues cluster together and what remains siloed.",
      expertName: "Dr. Kwame Osei-Mensah & Adv. Daniel Kiprotich",
      expertRole: "NLP / Data Scientist; Data Privacy Lawyer",
      councilNotes: "Interpretation updated 2026-04-04 by expert council review. All statistics verified against data.js v2 post-expansion."
    },
    charts: {
      "chart-dim-dist": {
        dataDescription: "20 dimensions multiplied by 3,044 statements, producing 60,880 individual scores.",
        methodology: "Stacked bar showing score bands: zero, low (1-24), mid (25-49), and high (50+, floor-clamped or above).",
        whatThisShows: "Stacked bar showing the distribution of scores for each dimension: Zero, Low (1-24), Mid (25-49), and High (50+).",
        keyFinding: "Most dimensions show extreme zero-inflation. 39.7% of non-zero scores are exactly 50 (floor-clamped), indicating the bimodal detection pattern of the strong-floor scoring rule.",
        whyItMatters: "The zero-inflation is not a scoring artifact; it reflects genuine silence. When 99.7% of statements say nothing about manipulation resistance, that represents 3,034 governance documents that leave children unprotected against persuasive design.",
        expertInterpretation: "From an NLP perspective, the zero-inflation pattern helps us distinguish two types of governance gaps: dimensions where terminology simply does not appear (true blind spots) versus dimensions where related concepts are discussed but not operationalized (the Low/Mid scores). The former requires awareness-raising; the latter requires technical specificity.",
        conclusion: "Most scoring detects presence, not depth -- a binary signal masquerading as a continuum.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "chart-cooccur": {
        dataDescription: "Co-occurrence matrix of dimensions scoring 50 or above across all 3,044 statements.",
        methodology: "Co-occurrence analysis with clustering to identify which dimensions appear together.",
        whatThisShows: "Number of statements scoring 50 or above on both dimensions simultaneously, revealing which protections cluster together.",
        keyFinding: "Protection dimensions cluster tightly. Manipulation resistance is isolated -- only 9 statements, rarely co-occurring with other dimensions.",
        whyItMatters: "The clustering pattern reveals a 'silo effect' in governance thinking. Children's governance is fragmented into issue-specific silos rather than integrated frameworks.",
        expertInterpretation: "The isolation of manipulation resistance in the co-occurrence matrix is particularly concerning from a privacy law perspective. Manipulative design and data privacy are deeply intertwined -- dark patterns exploit behavioral data to manipulate user choices -- yet governance treats them as unrelated domains. This gap represents a regulatory blind spot where children are most vulnerable.",
        conclusion: "Statements addressing manipulative design are specialist documents disconnected from mainstream governance.",
        expertName: "Adv. Daniel Kiprotich",
        expertRole: "Data Privacy Lawyer"
      }
    }
  },

  // ================================================================
  // TAB 3: GAP ANALYSIS
  // ================================================================
  gaps: {
    tabSummary: {
      headline: "The gap between mentioning children and protecting them is this paper's central empirical contribution -- and the funnel from rhetoric to action is steeper than any prior study has quantified.",
      overview: "The gap between mentioning children and actually protecting them is this research's central empirical contribution. This tab quantifies the mention-action gap through a 3-stage funnel (mention, enforcement, participation), reveals the structural balance across the CRC's three pillars (Protection, Participation, Provision), ranks the 20 dimensions by governance coverage, and highlights emerging threats with minimal governance response.",
      expertName: "Prof. Amira Khalil & Fatima Al-Rashid",
      expertRole: "Children's Rights Legal Scholar; Civil Society Representative",
      councilNotes: "Interpretation updated 2026-04-04 by expert council review. All statistics verified against data.js v2 post-expansion."
    },
    charts: {
      "chart-mention-gap": {
        dataDescription: "503 child-mentioning statements traced through 3 stages of governance depth.",
        methodology: "Keyword detection at each stage: explicit mention, enforcement mechanisms, participation provisions.",
        whatThisShows: "Funnel showing the number of statements that mention children (503), include enforcement mechanisms (30), and include provisions for children's voice (333).",
        keyFinding: "Of 503 child-mentioning statements, only 30 (6.0%) include enforcement -- a 17:1 ratio. 333 (66.2%) include participation language, but the critical gap is enforceability.",
        whyItMatters: "This funnel reveals that the primary governance gap is not awareness or even participatory framing, but enforceability. Governance instruments that mention children and even invoke their voice overwhelmingly lack mechanisms to ensure compliance.",
        expertInterpretation: "The 503:30 mention-to-enforcement ratio should be read alongside the CRC Committee's emphasis on effective remedies (Article 4). An AI governance ecosystem where 94% of child-mentioning statements lack enforcement mechanisms is not merely incomplete; it is structurally unenforceable. The relatively high participation count (333) is encouraging but may reflect terminological inclusion rather than genuine participatory design -- further qualitative analysis is needed to distinguish rhetorical from operational participation.",
        conclusion: "Enforcement remains the critical missing link in children's AI governance.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      },
      "chart-ppp": {
        dataDescription: "Category totals across the 3 Ps (Protection, Participation, Provision) from the CRC framework.",
        methodology: "CRC framework mapping of 20 dimensions into 3 pillars, then statement counts aggregated across corpus.",
        whatThisShows: "Donut chart showing how many statements substantively cover each of the 3 Ps: Protection (570), Participation (439), and Provision (410).",
        keyFinding: "Protection-to-Participation ratio is 1.3:1 (570:439) -- far more balanced than the 3:1+ ratio in offline frameworks. Provision (410) lags modestly.",
        whyItMatters: "This balance challenges the conventional assumption that AI governance treats children purely as objects of protection. Post-keyword-expansion, the data reveals that participatory and provision language is more widespread than previously thought, though the depth of that engagement varies substantially.",
        expertInterpretation: "From a civil society perspective, the 1.3:1 Protection-Participation ratio represents progress over historical children's rights patterns, where protection traditionally dominated by 5:1 or more. However, quantity of mention does not equal quality of implementation. The participation count (439) may include statements that merely reference 'stakeholder engagement' without specifically centering children's voices. The provision count (410) likely reflects educational AI and beneficial access language that has proliferated post-COVID. Deeper qualitative analysis is needed to distinguish genuine participatory governance from participatory rhetoric.",
        conclusion: "The 3 Ps are more balanced than expected, but this balance exists in aspirational language, not operational governance.",
        expertName: "Fatima Al-Rashid",
        expertRole: "Civil Society Representative"
      },
      "chart-gaps-ranked": {
        dataDescription: "20 dimensions ranked by percentage of all 3,044 statements scoring 50 or above.",
        methodology: "Coverage analysis across the full corpus of 3,044 statements.",
        whatThisShows: "All 20 dimensions ranked by coverage, showing the least-covered dimensions first.",
        keyFinding: "The 5 most neglected dimensions: manipulation resistance (0.3%), digital literacy (2.3%), intergenerational equity (2.5%), enforcement (2.8%), and cultural diversity (2.9%).",
        whyItMatters: "The bottom dimensions are not obscure or theoretical concerns. Manipulative design, digital illiteracy, and lack of enforcement are documented harms happening at scale today.",
        expertInterpretation: "These dimensions share a common thread: they all require governance to engage with systemic and structural issues rather than individual protections. Manipulation resistance requires understanding persuasive design patterns; digital literacy requires educational infrastructure; intergenerational equity requires temporal imagination; enforcement requires institutional capacity. These are harder governance problems than naming risks, which explains their neglect.",
        conclusion: "The most neglected dimensions require structural solutions, not just declarations.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      },
      "chart-emerging": {
        dataDescription: "Coverage rates for 5 emerging threat categories affecting children's AI experiences.",
        methodology: "Keyword detection for threat-specific terminology within the full corpus.",
        whatThisShows: "Coverage of specific emerging AI risks to children: AI-generated CSAM (165 statements), Surveillance/Monitoring (317), Mental Health (214), AI Companions/Chatbots (88), and Manipulation/Dark Patterns (9).",
        keyFinding: "Dark patterns (9 statements, 0.3%) is the most severe governance gap. AI companions (88) are under-governed. CSAM (165), mental health (214), and surveillance (317) have substantial coverage.",
        whyItMatters: "Emerging threats evolve faster than governance. The near-total absence of dark patterns governance (9 statements globally) is especially alarming given that manipulative design is the mechanism through which many other harms (addiction, data extraction, mental health impacts) are delivered.",
        expertInterpretation: "The governance response to emerging threats reveals a systemic pattern: threats with visible, acute harms (CSAM, surveillance) receive governance attention, while threats with diffuse, chronic harms (manipulation, parasocial AI relationships) are neglected. Dark patterns exemplify this: documented as harmful since at least 2015, with only 9 governance statements addressing them in 2026. The AI companions category (88 statements) is a positive signal -- governance is beginning to respond to parasocial relationship risks before they reach crisis scale.",
        conclusion: "Governance reacts to acute threats but neglects the design-level risks that enable them.",
        expertName: "Fatima Al-Rashid",
        expertRole: "Civil Society Representative"
      }
    }
  },

  // ================================================================
  // TAB 4: COMPARATIVE
  // ================================================================
  comparative: {
    tabSummary: {
      headline: "Children's AI governance varies dramatically by who issues it and where -- and the patterns of variation reveal deep structural inequities in global governance capacity.",
      overview: "This tab reveals how children's AI governance varies by organizational type, geographic region, and time period. The patterns of variation expose deep structural inequities: intergovernmental organizations and civil society lead governance innovation while industry -- which builds the systems children use -- trails significantly. Geographic coverage is profoundly unequal across regions.",
      expertName: "Prof. Ricardo Mendoza-Lagos & Dr. Aroha Te Kanawa",
      expertRole: "AI Governance Scholar; Indigenous Youth Advocate",
      councilNotes: "Interpretation updated 2026-04-04 by expert council review. All statistics verified against data.js v2 post-expansion."
    },
    charts: {
      "chart-org-type": {
        dataDescription: "CGI scores aggregated by 11 organization types, with explicit child mention counts.",
        methodology: "Statistical comparison across groups for CGI differences. Non-parametric due to skewed distributions.",
        whatThisShows: "Mean CGI and explicit child mention count by organization type.",
        keyFinding: "Intergovernmental organizations lead (mean CGI 6.2), civil society close behind (6.1), industry trails at 2.2. Only 14 industry statements mention children vs. 131 from civil society.",
        whyItMatters: "The organizational pattern reveals a fundamental misalignment: those who articulate the norms (intergovernmental bodies, civil society) and those who implement the systems (industry) operate in largely separate governance universes.",
        expertInterpretation: "This decoupling between norm-setters and system-builders is not unique to children's governance, but it is especially consequential here. A child's daily AI experience -- the recommendation algorithms, content moderation systems, and data collection practices they encounter -- is determined by industry design choices, not by intergovernmental position papers. The intergovernmental lead (6.2) over civil society (6.1) is marginal but reflects the institutional weight of instruments like CRC General Comment 25 and UNICEF guidance. Until industry governance instruments match the ambition of these leaders, children's protections will remain aspirational.",
        conclusion: "Organizations with the most power over children's digital experiences contribute least to governance.",
        expertName: "Prof. Ricardo Mendoza-Lagos",
        expertRole: "AI Governance Scholar"
      },
      "chart-region": {
        dataDescription: "CGI scores aggregated by geographic regions, with governance density normalized per million children using UN population data.",
        methodology: "Mann-Whitney U test for pairwise regional comparisons. Governance density computed as statements per million children aged 0-17.",
        whatThisShows: "Mean CGI per geographic region and governance density per million children.",
        keyFinding: "Governance density varies dramatically across regions. Africa shows the highest mean CGI (7.8) among major regions, reflecting the influence of AU and ECOWAS governance frameworks, while Southeast Asia (1.1) and Latin America (1.8) trail.",
        whyItMatters: "Children in the Global South face the same AI systems as children in the North -- the same recommendation algorithms, the same social media platforms -- but have vastly different governance frameworks to protect them.",
        expertInterpretation: "These numbers tell a colonial story. The AI systems deployed across the Global South are designed in Silicon Valley, regulated (if at all) in Brussels, and experienced by children in Lagos, Jakarta, and Dhaka with limited governance voice of their own. Africa's relatively high mean CGI is notable and reflects genuine regional governance innovation, but the absolute number of statements remains small. Children's digital rights cannot be defined exclusively by the geopolitical centers that designed the systems causing harm.",
        conclusion: "Hundreds of millions of children in under-governed regions live in AI governance vacuums.",
        expertName: "Dr. Aroha Te Kanawa",
        expertRole: "Indigenous Youth Advocate"
      },
      "chart-temporal": {
        dataDescription: "Yearly mean CGI, total statement counts, and explicit child mention counts from 2016-2026.",
        methodology: "Trend analysis for structural break detection; statistical trend test for monotonic significance.",
        whatThisShows: "Annual trend in total statements, explicit child mentions, and mean CGI from 2016 to 2026.",
        keyFinding: "Mean CGI tripled from 2.0 (2018) to 6.3 (2026). A 2018 structural break followed GDPR Art. 8, with civil society accelerating faster than government.",
        whyItMatters: "The GDPR effect demonstrates that binding regulation can catalyze governance attention. The post-2018 acceleration suggests that a well-designed international instrument for children's digital rights could trigger a similar cascade.",
        expertInterpretation: "The temporal pattern reveals an important governance dynamic: regulation begets attention. Before GDPR, children's AI governance was sparse and declining. After GDPR demonstrated that data protection for children could be legislated, civil society mobilized rapidly. This suggests that the next structural break will come from a binding international instrument specifically addressing children and AI.",
        conclusion: "Attention is tripling but more governance has not yet translated to more protection.",
        expertName: "Prof. Ricardo Mendoza-Lagos",
        expertRole: "AI Governance Scholar"
      },
      "chart-org-heatmap": {
        dataDescription: "Mean dimension score by organization type crossed with all 20 dimensions, producing a matrix of coverage percentages.",
        methodology: "Heatmap with z-score normalization within each dimension to highlight relative organizational strengths.",
        whatThisShows: "Percentage of statements scoring 50+ per dimension, broken down by organization type.",
        keyFinding: "Indigenous organizations score highest on cultural diversity (68.2%) vs. civil society (3.5%). Government leads on enforcement (2.2%) but trails on participation (8.2%).",
        whyItMatters: "Each organization type brings characteristic strengths and blind spots to children's governance. No single type covers all 20 dimensions -- comprehensive governance requires cross-institutional collaboration.",
        expertInterpretation: "The heatmap reveals governance complementarity rather than competition. Indigenous organizations contribute uniquely on cultural diversity -- a dimension almost entirely absent from other institutional types. Intergovernmental bodies provide the broadest coverage across dimensions. Civil society centers surveillance and participation concerns. A comprehensive children's AI governance framework would need to synthesize contributions across all organizational types -- a multilateral design challenge that no existing governance forum is currently structured to address.",
        conclusion: "Each org type brings distinct strengths but no single type provides comprehensive coverage.",
        expertName: "Prof. Ricardo Mendoza-Lagos",
        expertRole: "AI Governance Scholar"
      }
    }
  },

  // ================================================================
  // TAB 5: STATEMENTS
  // ================================================================
  drilldown: {
    tabSummary: {
      headline: "This explorer allows examination of individual statements across all 20 dimensions, enabling researchers and policymakers to identify exemplars, compare instruments, and diagnose gaps.",
      overview: "This interactive explorer allows examination of individual statements across all 20 dimensions. Use it to identify exemplar statements, compare instruments across organizations, and diagnose dimensional gaps in specific governance frameworks.",
      expertName: "Dr. Elena Vasquez",
      expertRole: "Quantitative Methodologist",
      councilNotes: "Interpretation updated 2026-04-04 by expert council review. All statistics verified against data.js v2 post-expansion."
    },
    charts: {
      "drilldown-table": {
        dataDescription: "Top statements ranked by CGI composite with full 20-dimension profiles available on click.",
        methodology: "Composite scoring across 20 keyword-scored dimensions. Radar chart visualization for individual statement profiles.",
        whatThisShows: "Top 200 statements ranked by CGI, with key, title, year, organization type, and region. Click any row to see its dimensional profile.",
        keyFinding: "Only 3 statements exceed 50: CRC GC25 (64.5), UNICEF (57.7), PAS-WCF (55.2). Most high-scoring statements concentrate on 2-3 dimensions rather than broad coverage.",
        whyItMatters: "For policymakers, this table identifies exemplar instruments worth studying. For researchers, the dimensional profiles reveal governance design patterns -- how different institutional contexts shape which dimensions receive attention.",
        expertInterpretation: "The predominance of 'spiky' profiles (high on a few dimensions, zero on most) over 'round' profiles (moderate scores across many dimensions) has a methodological implication: the CGI composite score can be misleading for individual statements. Two statements scoring CGI=15 may have completely non-overlapping dimensional profiles. I recommend using this table to examine dimensional profiles directly rather than relying solely on the composite rank.",
        conclusion: "Even the highest-scoring instrument covers barely two-thirds of the possible range.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      }
    }
  },

  // ================================================================
  // TAB 6: CROSS-SYSTEM
  // ================================================================
  crosssystem: {
    tabSummary: {
      headline: "This tab validates the purpose-built Children Governance Index against the broader Tapestry fingerprint system, confirming that the CGI captures children-specific governance content that general-purpose features miss.",
      overview: "This tab validates the purpose-built Children Governance Index against the broader Tapestry fingerprint system, which independently scores the same 3,044 statements on 600+ general governance features. LASSO regression identifies which broader features predict children's governance attention, while concordance analysis tests whether the two systems agree on which statements address children. The cross-system validation confirms that the CGI captures children-specific governance content that general-purpose features miss.",
      expertName: "Dr. Kwame Osei-Mensah",
      expertRole: "NLP / Data Scientist",
      councilNotes: "Interpretation updated 2026-04-04 by expert council review. All statistics verified against data.js v2 post-expansion."
    },
    charts: {
      "chart-lasso": {
        dataDescription: "587 non-cg fingerprint features used as predictors, CGI as the outcome variable.",
        methodology: "Statistical feature selection (LASSO) with 5-fold cross-validation. Content and metadata features tested separately for predictive accuracy.",
        whatThisShows: "Top 20 features from LASSO regression predicting CGI score from the 587-feature Tapestry fingerprint vector.",
        keyFinding: "The general fingerprint explains 52% of CGI variance. Content features (AUC=0.89) far outperform metadata (AUC=0.66) -- what a statement says matters more than who issues it.",
        whyItMatters: "An R-squared of 0.52 means the general fingerprint system captures roughly half the variance in children's governance. The other half -- the unexplained variance -- is precisely what justifies a purpose-built children's scoring system.",
        expertInterpretation: "The LASSO coefficients tell an interesting story about which general governance features signal children's content. The positive predictors (children's rights at +2.87, intergenerational equity at +1.80, safety at +0.54) are unsurprising. The negative predictors (definitions provided at -0.44, communitarian framing at -0.33, intergenerational ethics at -0.32) are more revealing: features associated with theoretical frameworks or broad definitions predict lower CGI scores, suggesting children's governance is operationally rather than theoretically oriented.",
        conclusion: "What a statement says predicts children's governance attention far better than who issues it.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "chart-venn": {
        dataDescription: "Overlap between CGI > 0 and fp_hr_childrens_rights > 0 across all 3,044 statements.",
        methodology: "Set comparison of binary detection flags from both systems.",
        whatThisShows: "A bar chart showing how the CGI and the Tapestry fp_hr_childrens_rights feature classify the same 3,044 statements into four categories: detected by CGI only, both systems, fingerprint only, or neither.",
        keyFinding: "CGI detects 267 statements the fingerprint misses; the fingerprint detects 198 the CGI misses; 236 overlap. The two systems are complementary.",
        whyItMatters: "The CGI-only segment (267 statements) demonstrates the value of a dedicated scoring instrument. These are statements where children's governance content is present but expressed in vocabulary or structure that general-purpose features do not capture. The fingerprint-only segment (198) is larger than expected, indicating significant complementary detection.",
        expertInterpretation: "The relatively balanced asymmetry (267 vs 198) is notable. Unlike expected, the general fingerprint system captures a substantial number of children-relevant statements that the CGI misses. This suggests that children's governance content sometimes appears in vocabularies outside the CGI's 20-dimension keyword dictionaries (e.g., disability rights, vulnerability protection). Both systems improve when their disagreements are investigated.",
        conclusion: "Each system detects hundreds of statements the other misses -- both are needed.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "chart-concordance": {
        dataDescription: "Cohen's kappa computed for 5 dimension pairs between CGI dimensions and closest-matching Tapestry features.",
        methodology: "Binary agreement analysis using Cohen's kappa statistic with 50-point threshold for both systems.",
        whatThisShows: "Cohen's kappa between each CGI dimension and its closest matching Tapestry feature.",
        keyFinding: "Average kappa = 0.199 (slight agreement). Best pair: child mention / children's rights at kappa = 0.414 (moderate). Low agreement confirms the two systems measure different constructs.",
        whyItMatters: "Low inter-system agreement is actually desirable in this context. It demonstrates that the CGI measures something distinct from the general fingerprint, justifying its existence as a complementary instrument.",
        expertInterpretation: "Kappa values below 0.20 should not be interpreted as disagreement -- they reflect measurement of different constructs. The CGI dimension 'manipulation resistance' and the nearest fingerprint feature 'fp_dark_patterns' both attempt to capture manipulative design, but at different granularity and with different operationalizations. The kappa of 0.414 for child mention is the validity anchor -- it confirms the systems agree on the most basic question while diverging on finer-grained assessments.",
        conclusion: "The CGI captures children-specific nuances that general-purpose features miss.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "discord-table": {
        dataDescription: "Blind spots (fingerprint detects children's content, CGI misses) and reverse gaps (CGI detects, fingerprint misses).",
        methodology: "Cross-tabulation of detection flags with manual inspection of top discordance cases.",
        whatThisShows: "Top cases where the two systems disagree: blind spots (fingerprint detects, CGI misses) and reverse gaps (CGI detects, fingerprint misses).",
        keyFinding: "Blind spots are mostly statements with passing children mentions that trigger the general feature but lack dimension-specific vocabulary. Reverse gaps are children-specific documents using non-standard vocabulary.",
        whyItMatters: "Discordance cases are the most informative for system improvement. Each blind spot potentially represents a missing keyword or scoring rule in the CGI; each reverse gap potentially represents a general feature that is too broad.",
        expertInterpretation: "I recommend using the discordance table as a prioritized review queue. The blind spots are candidates for CGI keyword expansion -- if the fingerprint detected children's content that the CGI missed, the CGI's vocabulary may need updating. The reverse gaps are candidates for fingerprint refinement. Both systems improve when their disagreements are investigated.",
        conclusion: "The two systems complement each other for comprehensive coverage.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      }
    }
  },

  // ================================================================
  // TAB 7: VALIDATION
  // ================================================================
  validation: {
    tabSummary: {
      headline: "Measurement validity is critical for policy-relevant research. This tab presents four complementary validation analyses that establish the CGI's reliability and boundary conditions.",
      overview: "Measurement validity is critical for policy-relevant research. This tab presents four complementary validation analyses: precision by CGI stratum, weight sensitivity across 6 schemes, strong-floor decomposition showing detection vs. depth, and Monte Carlo rank stability. The stratified validation reveals that the CGI's precision is 26% in the high stratum (CGI > 20) and drops to 4% and 0% in lower strata, establishing clear operational boundaries.",
      expertName: "Dr. Elena Vasquez & James Crawford",
      expertRole: "Quantitative Methodologist; Industry Safety Officer",
      councilNotes: "Interpretation updated 2026-04-04 by expert council review. All statistics verified against data.js v2 post-expansion."
    },
    charts: {
      "chart-precision": {
        dataDescription: "162 stratified sample: 50 high (CGI > 20), 50 medium (10-20), 50 low (5-10), 12 discordant cases.",
        methodology: "Manual classification of extract text by expert reviewers. Precision = TP / (TP + FP) within each stratum.",
        whatThisShows: "Manual validation precision (TP / (TP+FP)) for four CGI strata.",
        keyFinding: "26% precision at CGI > 20 (13/50 true positives), 4% at CGI 10-20, 0% below 10. The operational threshold is CGI > 20.",
        whyItMatters: "For policymakers, the 26% precision in the high stratum means that approximately 1 in 4 high-scoring statements genuinely addresses children's governance in a substantive way. This establishes the CGI as a useful screening tool that narrows 3,044 statements to a manageable candidate set, but human review remains essential for policy applications.",
        expertInterpretation: "The precision profile is characteristic of keyword-based scoring systems applied to a governance corpus where children are rarely the primary topic. The 26% precision at CGI > 20 means the system correctly identifies children-focused content about a quarter of the time in its top tier -- useful for discovery but not for automated classification. From an industry safety perspective, this is an acceptable screening operating point -- the system is useful for identifying what to pay attention to, even if it cannot reliably identify what to ignore. I recommend treating CGI < 20 as 'unassessed' rather than 'low-scoring' in policy applications.",
        conclusion: "The CGI is a screening tool, not an oracle -- human review remains essential above the CGI > 20 threshold.",
        expertName: "James Crawford",
        expertRole: "Industry Safety Officer"
      },
      "chart-weight-matrix": {
        dataDescription: "6 weighting schemes: expert, equal, protection-heavy, participation-heavy, PCA-derived, and category-mean.",
        methodology: "Pairwise Spearman rank correlation (rho) across all 6 schemes. CRC GC25 rank tracked under each.",
        whatThisShows: "Spearman rank correlation matrix across six alternative CGI weighting schemes.",
        keyFinding: "All 6 weighting schemes correlate above 0.93. CRC General Comment 25 ranks #1 under every scheme.",
        whyItMatters: "Weight robustness is critical for credibility. If rankings changed dramatically under different weighting assumptions, the CGI would be an artifact of our choices rather than a measure of governance content.",
        expertInterpretation: "The uniformly high correlations (all above 0.93) tell us that the ranking is driven primarily by the number of dimensions covered, not by which dimensions receive the most weight. This is consistent with the earlier finding that most statements are 'spiky' -- when the dominant source of variation is coverage breadth rather than relative depth, weighting schemes have minimal impact on rankings.",
        conclusion: "Rankings are robust to weighting choices -- not an artifact of methodology.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "chart-floor": {
        dataDescription: "20 dimensions decomposed into six score bands: zero, below-floor, floor-clamped (exactly 50), light (51-65), substantive (66-85), and deep (86+).",
        methodology: "Score-value partitioning with floor-dependency ratio computed as (floor-clamped) / (total non-zero) per dimension.",
        whatThisShows: "Per-dimension decomposition of scores into six bands.",
        keyFinding: "39.7% of non-zero scores are exactly 50 (the strong-floor minimum). 5 dimensions exceed 70% floor dependency.",
        whyItMatters: "The strong-floor pattern has implications for interpretation. A score of 50 means 'at least one strong match was found' -- it does not distinguish between a single keyword mention and a substantive discussion. Scores above 50 are more informative.",
        expertInterpretation: "The floor dependency is a known limitation of the strong-floor scoring design. We chose this approach deliberately -- in governance text analysis, a single mention of 'manipulation resistance' is meaningful even without elaboration, because the concept itself is rare enough to be diagnostic. However, consumers of these data should be aware that scores of exactly 50 represent a ceiling on what keyword analysis can tell us. Deeper analysis requires manual reading or LLM-assisted assessment.",
        conclusion: "Scoring primarily detects presence, not depth -- a known limitation of keyword analysis.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "chart-montecarlo": {
        dataDescription: "1,000 Monte Carlo iterations with random weight perturbation (plus/minus 30%) and aggregation method randomization.",
        methodology: "1,000 random weight perturbations to test rank stability. 95% confidence intervals computed for all top-10 statements.",
        whatThisShows: "95% confidence intervals for the rank of the top 10 statements under 1,000 random weight perturbations.",
        keyFinding: "Top 3 are stable across 1,000 perturbations (CRC GC25, UNICEF, PAS-WCF). Rankings below top 5 have wide uncertainty bands extending to rank 300+.",
        whyItMatters: "For policymakers citing 'the top-ranked children's governance instrument,' Monte Carlo stability provides confidence that the claim survives methodological scrutiny.",
        expertInterpretation: "The stability of the top-3 is a strong result -- it means that even with substantial random perturbation of all dimension weights, these three statements consistently outperform the field. The widening confidence intervals below rank 5 are expected: when many statements have similar CGI scores, small weight changes can swap their positions. I recommend reporting the top-3 as a reliable 'elite tier' and treating ranks 4-10 as a 'contender tier' without emphasizing specific ordinal positions.",
        conclusion: "The top 3 are robust; fine-grained rankings below that should not be over-interpreted.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      }
    }
  },

  // ================================================================
  // TAB 8: AGE-STAGE
  // ================================================================
  agestage: {
    tabSummary: {
      headline: "Children are not a monolith. A 5-year-old's AI governance needs differ fundamentally from a 15-year-old's. This tab examines whether governance recognizes developmental reality -- and the answer is overwhelmingly no.",
      overview: "Children are not a monolith. A 5-year-old's relationship with AI differs fundamentally from a 15-year-old's. This tab examines whether governance recognizes developmental reality by analyzing age-specific keyword flags across 4 stages (0-5, 6-12, 13-17, 16-18 transition) and applying a developmental relevance matrix that maps each dimension to its age-stage importance. The answer is stark: 118 age-group flags appear across the corpus, but the vast majority of governance treats childhood as undifferentiated.",
      expertName: "Dr. Yuki Tanaka-Morrison & Prof. Miriam Johansson",
      expertRole: "Child Development Psychologist; Intergenerational Ethics Philosopher",
      councilNotes: "Interpretation updated 2026-04-04 by expert council review. All statistics verified against data.js v2 post-expansion."
    },
    charts: {
      "chart-age-flags": {
        dataDescription: "3,044 statements scanned for age-specific keywords across 4 developmental stages (0-5, 6-12, 13-17, 16-18 transition).",
        methodology: "Regex detection for stage-specific terms including age ranges, developmental descriptors, and stage-appropriate vocabulary.",
        whatThisShows: "Number of statements scoring 50+ for each developmental stage: early childhood (0-5), middle childhood (6-12), adolescence (13-17), and transition (16-18).",
        keyFinding: "118 age-group flags across 4 stages: adolescence (52), early childhood (44), middle childhood (17), transition to adulthood (only 5 statements).",
        whyItMatters: "Developmental psychology has established that children's cognitive capacities, emotional vulnerabilities, and consent competence change dramatically across age stages. Governance that treats 'children' as a single category will necessarily underprotect some and overprotect others.",
        expertInterpretation: "The neglect of middle childhood (6-12, only 17 flags) is particularly alarming from a developmental perspective. This is the age at which children first encounter educational AI systems, begin forming digital identities, and develop the cognitive schemas that shape their understanding of privacy, consent, and algorithmic influence. The dominance of adolescence flags (52) reflects media-driven governance attention to social media harms affecting teens, while early childhood (44) benefits from parental control discourse. Middle childhood falls into a governance gap between these two poles.",
        conclusion: "Governance ignores the developmental reality that different ages need different protections.",
        expertName: "Dr. Yuki Tanaka-Morrison",
        expertRole: "Child Development Psychologist"
      },
      "chart-org-age": {
        dataDescription: "Age-weighted CGI computed by organization type and age group for the top 5 most active org types.",
        methodology: "Developmental relevance matrix applied to 20-dimension scores, weighting each dimension by its importance for each age stage.",
        whatThisShows: "Mean age-weighted CGI by organization type for the top 5 most active org types, broken down by age group.",
        keyFinding: "Early childhood scores highest in age-weighted CGI because universal protections carry full weight, while teen-specific dimensions are rarely addressed. Adolescence leads in raw flag counts (52 vs. 44).",
        whyItMatters: "The paradox reveals a measurement insight: age-weighted scoring exposes the gap between what governance provides (general protections) and what specific age groups need (developmentally targeted measures).",
        expertInterpretation: "The early childhood advantage in age-weighted scoring is an artifact that reveals a truth: governance protections for young children are largely parasitic on general protections (data privacy, institutional responsibility) rather than reflecting age-specific understanding. For adolescents, the reverse is true -- the dimensions most relevant to their lived experience (manipulation, consent, mental health, voice) are the least governed. The age-weighted analysis thus confirms the developmental mismatch that clinical practitioners have long observed.",
        conclusion: "Coverage of younger children reflects universal provisions, not age-targeted governance.",
        expertName: "Dr. Yuki Tanaka-Morrison",
        expertRole: "Child Development Psychologist"
      },
      "chart-dev-heatmap": {
        dataDescription: "20 dimensions crossed with 3 age groups, colored by expert-assigned developmental relevance weight.",
        methodology: "Developmental psychology mapping by expert panel. Heatmap shows average dimension score among statements flagged for each age group.",
        whatThisShows: "Average dimension score among statements flagged for each age group, showing which dimensions receive attention at each developmental stage.",
        keyFinding: "Dimensions most critical for adolescents (manipulation resistance, CSAM, mental health) have the lowest coverage. Governance concentrates where it is least age-differentiated.",
        whyItMatters: "This matrix is the empirical analog of a clinical developmental assessment -- it maps governance coverage against developmental need and finds them misaligned at nearly every intersection.",
        expertInterpretation: "From an intergenerational ethics perspective, this heatmap reveals a failure of temporal imagination. Current governance is written by adults who experienced a pre-AI childhood. They govern based on fears (exploitation, predation) rather than developmental realities (identity formation, cognitive schema development, graduated autonomy). The blank cells in this heatmap are not just governance gaps -- they are intergenerational failures of empathy, where today's adults cannot imagine tomorrow's children's digital lives.",
        conclusion: "The governance system is least prepared for the age group most exposed to AI-specific risks.",
        expertName: "Prof. Miriam Johansson",
        expertRole: "Intergenerational Ethics Philosopher"
      },
      "chart-age-temporal": {
        dataDescription: "Age flag detection counts aggregated by year across the full time series.",
        methodology: "Yearly counts of statements with age-specific keyword flags, plotted as separate lines for each age group.",
        whatThisShows: "Mean age-weighted CGI per year by age group, showing whether age differentiation is improving over time.",
        keyFinding: "Age differentiation is not improving over time. Despite growing policy attention to children, governance continues treating childhood as undifferentiated.",
        whyItMatters: "If age differentiation were improving, we would expect the three age-group lines to diverge over time as governance becomes more nuanced. Instead, they move roughly in parallel.",
        expertInterpretation: "The flat temporal trend in age differentiation is discouraging but not irreversible. It suggests that governance actors are not learning from developmental science even as they produce more children-focused instruments. The opportunity is clear: any future governance framework that incorporates age-stage differentiation would represent a genuinely novel contribution to the field.",
        conclusion: "Future governance must explicitly design for developmental stages rather than using 'children' as a monolithic category.",
        expertName: "Dr. Yuki Tanaka-Morrison",
        expertRole: "Child Development Psychologist"
      }
    }
  },

  // ================================================================
  // TAB 9: RISK-GOVERNANCE
  // ================================================================
  riskgov: {
    tabSummary: {
      headline: "This tab maps 18 documented AI risks to children against governance coverage, revealing where children are most exposed -- and where the severity-coverage mismatch is most acute.",
      overview: "This tab maps 18 documented AI risks to children against actual governance coverage, producing a traffic-light mismatch matrix. It also measures governance response latency (how quickly governance responds to emerging threats), sector coverage across 8 AI application domains, and per-dimension gap rankings among child-mentioning statements. After keyword expansion, 17 of 18 risks are now classified as well-governed -- but 'well-governed' means norms exist, not that children are actually protected. The one remaining under-governed risk is addictive design / dark patterns (1.6%).",
      expertName: "Sarah Chen & Dr. Priya Sharma",
      expertRole: "Digital Safety Advocate; EdTech Specialist",
      councilNotes: "Interpretation updated 2026-04-04 by expert council review. All statistics verified against data.js v2 post-expansion."
    },
    charts: {
      "risk-table": {
        dataDescription: "18 AI risks to children mapped to cg_* dimensions. Statement counts computed for those scoring 50 or above among child-mentioning statements.",
        methodology: "Traffic-light classification: well-governed (> 5% coverage), under-governed (1-5%), ungoverned (< 1%).",
        whatThisShows: "Traffic-light classification of 18 AI risks to children by governance coverage.",
        keyFinding: "17 of 18 risks are well-governed by norms; addictive design / dark patterns remains under-governed at 1.6% (8 statements). Coverage does not equal enforcement.",
        whyItMatters: "The traffic-light matrix is a policy prioritization tool. However, 'well-governed' means norms exist, not that children are actually protected. The real challenge is implementation.",
        expertInterpretation: "From a digital safety perspective, the traffic-light classification should be read alongside severity assessments. Dark patterns are not just under-governed -- they are among the highest-severity risks children face online. The US Surgeon General's 2024 advisory specifically cited persuasive design as a public health concern for adolescents. A risk that is both high-severity and near-zero-governed represents a governance emergency, not merely a gap.",
        conclusion: "Norms exist for most risks but addictive design (1.6%) remains critically under-governed.",
        expertName: "Sarah Chen",
        expertRole: "Digital Safety Advocate"
      },
      "chart-latency": {
        dataDescription: "Threat emergence year versus first governance response year for 18 documented risks to children.",
        methodology: "Timeline analysis with diagonal reference line. Points below diagonal indicate proactive governance (negative latency).",
        whatThisShows: "Scatter plot of threat emergence year versus first governance response year.",
        keyFinding: "Pre-2019 threats averaged +3 year governance lag; post-2022 threats show proactive governance (-4 years), meaning frameworks now precede specific threats.",
        whyItMatters: "Declining latency suggests the governance ecosystem is learning -- it takes less time for new threats to receive governance attention. However, 'attention' is not the same as 'effective governance.'",
        expertInterpretation: "The negative-latency cases (governance before threat emergence) are particularly interesting from an EdTech perspective. They suggest that some governance frameworks are broad enough to cover threats that had not yet been specifically identified. This argues for principle-based governance that can anticipate future threats, rather than threat-specific regulation that always lags behind technology.",
        conclusion: "The governance ecosystem is becoming more anticipatory, but response speed varies dramatically by risk type.",
        expertName: "Dr. Priya Sharma",
        expertRole: "EdTech Specialist"
      },
      "chart-sector-radar": {
        dataDescription: "8 AI sectors assessed for child-governance coverage among high-CGI statements.",
        methodology: "Keyword detection for sector-specific terms. Coverage computed as aggregate governance response score across high-CGI statements referencing each sector.",
        whatThisShows: "Governance response score across 8 sectors where children encounter AI systems.",
        keyFinding: "E-commerce (355.0) and Government (305.0) lead; Social Media (160.3) ranks only fifth despite being the sector most associated with children's harms. Gaming (103.5) is least covered.",
        whyItMatters: "Children encounter AI across all these sectors, not just social media. A child who interacts with an AI tutor, wears a fitness tracker, and uses a voice assistant is subject to varying levels of governance across these sectors.",
        expertInterpretation: "The sector coverage radar reveals a surprising pattern: e-commerce and government services score highest, likely because data protection and privacy regulations (GDPR, COPPA) disproportionately address transactional and governmental data processing. Social Media's fifth-place ranking challenges the assumption that social media dominates children's AI governance. The gaming sector's low score (103.5) is concerning given the scale of children's engagement with gaming platforms and the age-verification, loot box, and addictive design challenges they present.",
        conclusion: "Governance attention does not track where children spend the most time.",
        expertName: "Dr. Priya Sharma",
        expertRole: "EdTech Specialist"
      },
      "chart-dim-gap-rank": {
        dataDescription: "20 dimensions ranked by coverage among child-mentioning statements (n=503) scoring 50 or above.",
        methodology: "Coverage analysis restricted to child-mentioning statements to control for governance intent.",
        whatThisShows: "Percentage of child-mentioning statements that substantively address each dimension.",
        keyFinding: "Among 503 child-mentioning statements, bottom 5: Manipulation (1.6%), Educational AI (5.8%), Digital Literacy (6.0%), Enforcement (6.0%), Developmental Support (8.0%). Top: Data Privacy (70.6%), Child Voice (66.2%).",
        whyItMatters: "This chart answers the question: among statements that already mention children, what do they still fail to address? The answer reveals systematic blind spots even in child-aware governance.",
        expertInterpretation: "The gap ranking among child-mentioning statements is more diagnostic than the overall corpus analysis because it controls for governance intent. These are statements that have already chosen to address children -- and they still neglect manipulation (1.6%), digital literacy (6.0%), and enforcement (6.0%). The enforcement gap is especially telling: even among the most child-focused governance instruments, 94% lack mechanisms to ensure compliance. Closing these gaps requires not just more governance, but differently conceptualized governance that operationalizes its commitments.",
        conclusion: "Even child-focused instruments critically under-address enforcement and implementation.",
        expertName: "Sarah Chen",
        expertRole: "Digital Safety Advocate"
      }
    }
  }
};
