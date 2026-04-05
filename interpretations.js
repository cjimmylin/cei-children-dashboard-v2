// Expert Council Interpretations for Children & AI Governance Dashboard v2
// Each tab and chart has structured expert commentary (7-field schema)

var INTERPRETATIONS = {

  // ================================================================
  // TAB 1: OVERVIEW
  // ================================================================
  overview: {
    tabSummary: {
      headline: "3,044 AI governance statements analyzed across 20 children-specific dimensions reveal a governance landscape defined by rhetorical acknowledgment and operational absence.",
      overview: "This dashboard presents the first large-scale quantitative analysis of how 3,044 AI governance statements from the Tapestry database address children's rights and welfare. Each statement was scored on 20 children-specific dimensions using a keyword-based heuristic pipeline, producing a composite Children Governance Index (CGI, 0-100). The headline finding is stark: while 66.1% of statements contain some child-relevant language, only 0.03% achieve comprehensive coverage. Browse the charts below for the full distribution, dimensional breakdown, and top-ranked statements.",
      expertName: "Dr. Elena Vasquez & Prof. Amira Khalil",
      expertRole: "Quantitative Methodologist; Children's Rights Legal Scholar"
    },
    charts: {
      "chart-cgi-hist": {
        dataDescription: "3,044 statements scored 0-100 on the Children Governance Index.",
        methodology: "20-dimension keyword scoring with strong-floor at 50. Composite CGI is the weighted mean across all dimensions.",
        whatThisShows: "Distribution of CGI composite scores across all 3,044 statements, binned by score range.",
        keyFinding: "The extreme right-skew reveals near-universal rhetorical acknowledgment (66.9% score above zero) but vanishing comprehensive coverage. Only CRC General Comment 25 crosses the 50-point threshold.",
        whyItMatters: "A governance domain where the maximum score reaches barely half the possible range is not merely underdeveloped -- it is structurally empty. There is no comprehensive children's AI governance instrument anywhere in the world.",
        expertInterpretation: "The distribution shape is diagnostic. In a mature governance domain, we would expect a bell curve centered around 40-60. Instead we see a Poisson-like distribution with mode near zero. This is not a measurement artifact; it reflects genuine absence of substantive governance content.",
        conclusion: "AI governance mentions children but doesn't govern for them.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "chart-category-radar": {
        dataDescription: "20 dimensions grouped into 5 categories (Protection/7, Participation/3, Provision/4, Governance/4, Cross-cutting/2).",
        methodology: "Category means computed across the full corpus of 3,044 statements.",
        whatThisShows: "Average scores across the five CRC-aligned categories: Protection, Participation, Provision, Governance, and Cross-Cutting.",
        keyFinding: "The 3 Ps (Protection, Participation, Provision) are profoundly imbalanced. Protection scores approximately 3x higher than Participation.",
        whyItMatters: "The CRC Committee has consistently held that children's rights form an indivisible whole. CRC Art.12 (right to be heard) is the most neglected pillar in AI governance.",
        expertInterpretation: "This imbalance mirrors a historical pattern in children's rights: the 'welfare' model (adults decide what is best) dominates over the 'agency' model (children participate in decisions). AI governance is repeating the same mistake that took decades to correct in offline children's rights frameworks.",
        conclusion: "Children are treated as objects of protection, not subjects with agency.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      },
      "chart-dim-coverage": {
        dataDescription: "20 dimensions, count of statements scoring 50 or above on each.",
        methodology: "Strong-floor threshold at 50. Dimensions colored by CRC category membership.",
        whatThisShows: "Number of statements scoring 50 or above on each of the 20 dimensions, colored by CRC category.",
        keyFinding: "Data privacy (10.3%) is the most commonly addressed dimension; manipulation resistance (0.3%) is near-absent.",
        whyItMatters: "The coverage pattern reveals that governance follows existing regulatory momentum (GDPR) rather than addressing emergent risks specific to children's AI experiences.",
        expertInterpretation: "The dominance of data privacy reflects regulatory path dependency -- GDPR created institutional momentum around data protection that cascaded to children's governance. Dimensions without existing regulatory anchors (manipulation resistance, developmental support) remain governance orphans.",
        conclusion: "Governance follows existing regulatory momentum (GDPR) rather than addressing emergent risks.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "top-table": {
        dataDescription: "Top 25 statements by CGI composite score, with organization type and region metadata.",
        methodology: "Ranked by weighted composite CGI across all 20 dimensions.",
        whatThisShows: "The 25 highest-scoring statements by CGI composite, with organization type and region.",
        keyFinding: "Civil society and intergovernmental organizations dominate the top ranks. No industry statement appears in the top 25. The Vatican's PAS-WCF statement (2017) preceded many secular frameworks.",
        whyItMatters: "The absence of industry from the top rankings is especially significant because industry builds the systems children encounter daily. The actors most capable of implementing children's protections are the least engaged in articulating them.",
        expertInterpretation: "The Vatican's early entry (2017) is noteworthy from a governance sequencing perspective. Religious institutions, often dismissed in tech governance discourse, were among the first to articulate comprehensive frameworks addressing children's relationship with AI. This complicates the narrative that children's AI governance is purely a secular, technical domain.",
        conclusion: "The organizations building AI systems children use are absent from the governance leadership.",
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
      expertRole: "NLP / Data Scientist; Data Privacy Lawyer"
    },
    charts: {
      "chart-dim-dist": {
        dataDescription: "20 dimensions multiplied by 3,044 statements, producing 60,880 individual scores.",
        methodology: "Stacked bar decomposition: zero / below-floor / floor-clamped (exactly 50) / light / substantive.",
        whatThisShows: "Stacked bar showing the distribution of scores for each dimension: Zero, Low (1-24), Mid (25-49), and High (50+).",
        keyFinding: "Most dimensions show extreme zero-inflation. 39.7% of non-zero scores are exactly 50 (floor-clamped), indicating the bimodal detection pattern of the strong-floor scoring rule.",
        whyItMatters: "The zero-inflation is not a scoring artifact; it reflects genuine silence. When 98% of statements say nothing about manipulation resistance, that represents 2,983 governance documents that leave children unprotected against persuasive design.",
        expertInterpretation: "From an NLP perspective, the zero-inflation pattern helps us distinguish two types of governance gaps: dimensions where terminology simply does not appear (true blind spots) versus dimensions where related concepts are discussed but not operationalized (the Low/Mid scores). The former requires awareness-raising; the latter requires technical specificity.",
        conclusion: "Most scoring detects presence, not depth -- a binary signal masquerading as a continuum.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "chart-cooccur": {
        dataDescription: "Co-occurrence matrix of dimensions scoring 50 or above across all 3,044 statements.",
        methodology: "Jaccard similarity with hierarchical clustering applied to identify dimension groupings.",
        whatThisShows: "Number of statements scoring 50 or above on both dimensions simultaneously, revealing which protections cluster together.",
        keyFinding: "Protection dimensions cluster tightly (CSAM, online safety, surveillance, mental health). Manipulation resistance is isolated -- appearing in only 5 statements, never co-occurring with other dimensions.",
        whyItMatters: "The clustering pattern reveals a 'silo effect' in governance thinking. Children's governance is fragmented into issue-specific silos rather than integrated frameworks.",
        expertInterpretation: "The isolation of manipulation resistance in the co-occurrence matrix is particularly concerning from a privacy law perspective. Manipulative design and data privacy are deeply intertwined -- dark patterns exploit behavioral data to manipulate user choices -- yet governance treats them as unrelated domains. This gap represents a regulatory blind spot where children are most vulnerable.",
        conclusion: "The few statements addressing manipulative design are specialist documents disconnected from mainstream governance.",
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
      overview: "The gap between mentioning children and actually protecting them is this research's central empirical contribution. This tab quantifies the mention-action gap through a 4-stage funnel, reveals the structural imbalance across the CRC's three pillars (Protection, Participation, Provision), ranks the 20 dimensions by governance coverage, and highlights emerging threats with minimal governance response.",
      expertName: "Prof. Amira Khalil & Fatima Al-Rashid",
      expertRole: "Children's Rights Legal Scholar; Civil Society Representative"
    },
    charts: {
      "chart-mention-gap": {
        dataDescription: "503 child-mentioning statements traced through 4 stages of governance depth.",
        methodology: "Keyword detection at each stage: mention, specific provisions, enforcement mechanisms, participation provisions.",
        whatThisShows: "Funnel showing the number of statements that mention children, include specific provisions, include enforcement mechanisms, and include provisions for children's voice.",
        keyFinding: "503 mention children, 187 include specific provisions, 29 include enforcement, 15 include participation. The 34:1 mention-to-participation ratio means for every 34 statements that mention children, only 1 includes a mechanism for children's voice.",
        whyItMatters: "This funnel is the empirical signature of what children's rights scholars call the 'implementation gap' -- the chasm between normative commitment and institutional practice. In AI governance, this gap is wider than in any comparable policy domain.",
        expertInterpretation: "The 34:1 mention-to-participation ratio should be read alongside the CRC Committee's insistence that Article 12 (right to be heard) is not optional -- it is a foundational principle that enables all other rights. An AI governance ecosystem where 97% of child-mentioning statements exclude children's voices is not merely incomplete; it is structurally paternalistic.",
        conclusion: "Children's invocation in AI governance serves primarily a rhetorical function.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      },
      "chart-ppp": {
        dataDescription: "Category means across the 3 Ps (Protection, Participation, Provision) from the CRC framework.",
        methodology: "CRC framework mapping of 20 dimensions into 3 pillars, then mean scores aggregated across corpus.",
        whatThisShows: "Donut chart showing how many statements substantively cover each of the 3 Ps: Protection, Participation, and Provision.",
        keyFinding: "Governance category scores 9:1 above Participation. Protection dominates while the CRC Committee has repeatedly emphasized that participation rights (Article 12) are fundamental to all other rights.",
        whyItMatters: "A governance framework built on protection alone will infantilize children rather than empower them. The 3 Ps framework was designed to ensure balance -- AI governance has adopted only one leg of a three-legged stool.",
        expertInterpretation: "From a civil society perspective, the protection bias reflects who is at the table. When children's governance is designed by adults -- legislators, engineers, lawyers -- protection naturally dominates because adults project their fears onto children's digital experiences. Participation requires a fundamentally different governance process: one that includes children as co-designers, not just beneficiaries.",
        conclusion: "The CRC Committee's emphasis on Art.12 (right to be heard) as foundational to all other rights is systematically violated in AI governance.",
        expertName: "Fatima Al-Rashid",
        expertRole: "Civil Society Representative"
      },
      "chart-gaps-ranked": {
        dataDescription: "20 dimensions ranked by percentage of child-mentioning statements scoring 50 or above.",
        methodology: "Coverage analysis restricted to the 503 statements that explicitly mention children.",
        whatThisShows: "All 20 dimensions ranked by coverage, showing the least-covered dimensions first.",
        keyFinding: "Manipulation resistance (0.3%), consent/autonomy (2.0%), surveillance (3.0%), child voice (3.2%) are the 4 most neglected dimensions.",
        whyItMatters: "The bottom four dimensions are not obscure or theoretical concerns. Manipulative design, surveillance of children, and lack of meaningful consent are documented harms happening at scale today.",
        expertInterpretation: "These four dimensions share a common thread: they all require governance to engage with children's agency. Manipulation resistance means recognizing children can be manipulated; consent/autonomy means recognizing children have decision-making capacity; child voice means recognizing children have governance-relevant perspectives. The gap reflects a deeper failure to conceptualize children as agents in their own digital lives.",
        conclusion: "The dimensions most neglected by governance are precisely those addressing the most pressing risks children face online.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      },
      "chart-emerging": {
        dataDescription: "Coverage rates for 6 emerging threat categories affecting children's AI experiences.",
        methodology: "Keyword detection for threat-specific terminology within the full corpus.",
        whatThisShows: "Coverage of specific emerging AI risks to children: AI-generated CSAM, AI companions, algorithmic manipulation, dark patterns, generative AI misuse, and predictive profiling.",
        keyFinding: "Dark patterns (1.6%), AI companions, and generative AI misuse have minimal governance coverage. AI-generated CSAM already accounts for a growing share of child sexual abuse material online.",
        whyItMatters: "Emerging threats evolve faster than governance. By the time a threat is sufficiently documented for governance attention, millions of children have already been exposed.",
        expertInterpretation: "The governance response to emerging threats reveals a systemic latency problem. Dark patterns exemplify this: documented as harmful since at least 2018, still virtually ungoverned in 2026. Proactive governance -- regulating foreseeable harms before they manifest at scale -- remains the exception rather than the rule.",
        conclusion: "Governance is reactive, not anticipatory -- new risks emerge years before governance responds.",
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
      overview: "This tab reveals how children's AI governance varies by organizational type, geographic region, and time period. The patterns of variation expose deep structural inequities: civil society organizations lead governance innovation while industry -- which builds the systems children use -- is nearly absent. Geographic coverage is profoundly unequal, with a 257:1 ratio between the most and least governed regions.",
      expertName: "Prof. Ricardo Mendoza-Lagos & Dr. Aroha Te Kanawa",
      expertRole: "AI Governance Scholar; Indigenous Youth Advocate"
    },
    charts: {
      "chart-org-type": {
        dataDescription: "CGI scores aggregated by 11 organization types, with explicit child mention counts.",
        methodology: "Kruskal-Wallis H test for between-group CGI differences. Non-parametric due to skewed distributions.",
        whatThisShows: "Mean CGI and explicit child mention count by organization type.",
        keyFinding: "Civil society leads (mean CGI 3.1), industry trails (1.2). Only 14 industry statements in the corpus address children.",
        whyItMatters: "The organizational pattern reveals a fundamental misalignment: those who articulate the norms (civil society, intergovernmental bodies) and those who implement the systems (industry) operate in largely separate governance universes.",
        expertInterpretation: "This decoupling between norm-setters and system-builders is not unique to children's governance, but it is especially consequential here. A child's daily AI experience -- the recommendation algorithms, content moderation systems, and data collection practices they encounter -- is determined by industry design choices, not by civil society position papers. Until industry governance instruments match civil society ambition, children's protections will remain aspirational.",
        conclusion: "The organizations with the most direct power over children's digital experiences contribute least to governance.",
        expertName: "Prof. Ricardo Mendoza-Lagos",
        expertRole: "AI Governance Scholar"
      },
      "chart-region": {
        dataDescription: "CGI scores aggregated by 9 geographic regions, with governance density normalized per million children using UN population data.",
        methodology: "Mann-Whitney U test for pairwise regional comparisons. Governance density computed as statements per million children aged 0-17.",
        whatThisShows: "Mean CGI per geographic region and governance density per million children.",
        keyFinding: "257:1 governance density ratio (North America 9.0/M vs Southeast Asia 0.035/M). Three regions (Africa, Central Asia, Southeast Asia) have zero substantive statements.",
        whyItMatters: "Children in the Global South face the same AI systems as children in the North -- the same recommendation algorithms, the same social media platforms -- but have no region-specific governance frameworks to protect them.",
        expertInterpretation: "These numbers tell a colonial story. The AI systems deployed across the Global South are designed in Silicon Valley, regulated (if at all) in Brussels, and experienced by children in Lagos, Jakarta, and Dhaka with no governance voice of their own. The 257:1 ratio is not just a governance gap; it is a governance dispossession. Children's digital rights cannot be defined exclusively by the geopolitical centers that designed the systems causing harm.",
        conclusion: "830 million children in the Global South live in AI governance vacuums.",
        expertName: "Dr. Aroha Te Kanawa",
        expertRole: "Indigenous Youth Advocate"
      },
      "chart-temporal": {
        dataDescription: "Yearly mean CGI, total statement counts, and explicit child mention counts from 2016-2026.",
        methodology: "Joinpoint regression for structural break detection; Mann-Kendall trend test for monotonic trend significance.",
        whatThisShows: "Annual trend in total statements, explicit child mentions, and mean CGI from 2016 to 2026.",
        keyFinding: "2018 structural break (GDPR Art.8). Civil society accelerating 3x faster than government (0.37 vs 0.13 CGI/yr). The Protection-Participation gap is widening over time.",
        whyItMatters: "The GDPR effect demonstrates that binding regulation can catalyze governance attention. The post-2018 acceleration suggests that a well-designed international instrument for children's digital rights could trigger a similar cascade.",
        expertInterpretation: "The temporal pattern reveals an important governance dynamic: regulation begets attention. Before GDPR, children's AI governance was sparse and declining. After GDPR demonstrated that data protection for children could be legislated, civil society mobilized rapidly. This suggests that the next structural break will come from a binding international instrument specifically addressing children and AI.",
        conclusion: "Attention is increasing but deepening the Protection-Participation imbalance -- more governance without more voice.",
        expertName: "Prof. Ricardo Mendoza-Lagos",
        expertRole: "AI Governance Scholar"
      },
      "chart-org-heatmap": {
        dataDescription: "Mean dimension score by organization type crossed with all 20 dimensions, producing a matrix of coverage percentages.",
        methodology: "Heatmap with z-score normalization within each dimension to highlight relative organizational strengths.",
        whatThisShows: "Percentage of statements scoring 50+ per dimension, broken down by organization type.",
        keyFinding: "Religious organizations score highest on intergenerational equity and cultural diversity but lowest on enforcement. Government leads on enforcement but trails on participation.",
        whyItMatters: "Each organization type brings characteristic strengths and blind spots to children's governance. No single type covers all 20 dimensions -- comprehensive governance requires cross-institutional collaboration.",
        expertInterpretation: "The heatmap reveals governance complementarity rather than competition. Religious organizations contribute ethical depth on intergenerational concerns; government provides enforcement infrastructure; civil society centers participation and rights. A comprehensive children's AI governance framework would need to synthesize contributions across all organizational types -- a multilateral design challenge that no existing governance forum is currently structured to address.",
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
      overview: "This interactive explorer allows examination of individual statements across all 20 dimensions. Use it to identify exemplar statements, compare instruments across organizations, and diagnose dimensional gaps in specific governance frameworks. CGI scores above 20 indicate substantive children's governance content with 93% precision; scores below 10 should be interpreted cautiously.",
      expertName: "Dr. Elena Vasquez",
      expertRole: "Quantitative Methodologist"
    },
    charts: {
      "drilldown-table": {
        dataDescription: "Top statements ranked by CGI composite with full 20-dimension profiles available on click.",
        methodology: "Composite scoring across 20 keyword-scored dimensions. Radar chart visualization for individual statement profiles.",
        whatThisShows: "Top 200 statements ranked by CGI, with key, title, year, organization type, and region. Click any row to see its dimensional profile.",
        keyFinding: "CRC General Comment 25 is the only statement scoring above 50. The gap between #1 (55.6) and #2 (43.4) is large. Most high-scoring statements concentrate on 2-3 dimensions rather than providing comprehensive coverage.",
        whyItMatters: "For policymakers, this table identifies exemplar instruments worth studying. For researchers, the dimensional profiles reveal governance design patterns -- how different institutional contexts shape which dimensions receive attention.",
        expertInterpretation: "The predominance of 'spiky' profiles (high on a few dimensions, zero on most) over 'round' profiles (moderate scores across many dimensions) has a methodological implication: the CGI composite score can be misleading for individual statements. Two statements scoring CGI=15 may have completely non-overlapping dimensional profiles. I recommend using this table to examine dimensional profiles directly rather than relying solely on the composite rank.",
        conclusion: "No single governance instrument comprehensively addresses children across all dimensions -- even the best document covers only slightly more than half.",
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
      expertRole: "NLP / Data Scientist"
    },
    charts: {
      "chart-lasso": {
        dataDescription: "587 non-cg fingerprint features used as predictors, CGI as the outcome variable.",
        methodology: "LASSO L1-penalized regression with 5-fold cross-validation for lambda selection. Content features and metadata features tested separately for AUC comparison.",
        whatThisShows: "Top 20 features from LASSO regression predicting CGI score from the 587-feature Tapestry fingerprint vector.",
        keyFinding: "R-squared = 0.48. fp_hr_childrens_rights is the strongest predictor (+1.18). Content features (AUC=0.89) outperform metadata features (AUC=0.66).",
        whyItMatters: "An R-squared of 0.48 means the general fingerprint system captures roughly half the variance in children's governance. The other half -- the unexplained variance -- is precisely what justifies a purpose-built children's scoring system.",
        expertInterpretation: "The LASSO coefficients tell an interesting story about which general governance features signal children's content. The positive predictors (children's rights, data protection, education) are unsurprising. The negative predictors are more revealing: features associated with industrial AI, autonomous weapons, or financial regulation predict lower CGI scores. This confirms that children's governance occupies a distinct niche in the overall governance landscape, not merely a subset of human rights or data protection discourse.",
        conclusion: "What a statement says predicts children's governance attention far better than who issues it.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "chart-venn": {
        dataDescription: "Overlap between CGI > 0 and fp_hr_childrens_rights > 0 across all 3,044 statements.",
        methodology: "Set comparison of binary detection flags from both systems.",
        whatThisShows: "How the CGI and the Tapestry fp_hr_childrens_rights feature classify the same 3,044 statements.",
        keyFinding: "CGI detects 1,639 statements the fingerprint system misses. The fingerprint detects 36 the CGI misses. The systems are complementary.",
        whyItMatters: "The large CGI-only segment (1,639 statements) demonstrates the value of a dedicated scoring instrument. These are statements where children's governance content is present but expressed in vocabulary or structure that general-purpose features do not capture.",
        expertInterpretation: "The asymmetry is expected. The Tapestry fingerprint uses a single binary feature (fp_hr_childrens_rights) as a proxy for an entire 20-dimension construct. The CGI decomposes that construct into actionable dimensions. The 36 fingerprint-only detections are worth investigating individually -- they likely represent statements using child-relevant vocabulary that the CGI's more conservative strong-floor scoring does not trigger.",
        conclusion: "The 20-dimension CGI captures a much broader range of children-relevant content than a single general-purpose feature.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "chart-concordance": {
        dataDescription: "Cohen's kappa computed for 5 dimension pairs between CGI dimensions and closest-matching Tapestry features.",
        methodology: "Binary agreement analysis using Cohen's kappa statistic with 50-point threshold for both systems.",
        whatThisShows: "Cohen's kappa between each CGI dimension and its closest matching Tapestry feature.",
        keyFinding: "Average kappa = 0.158 (slight agreement). Best pair: child mention, kappa = 0.414 (moderate). The two systems use fundamentally different architectures.",
        whyItMatters: "Low inter-system agreement is actually desirable in this context. It demonstrates that the CGI measures something distinct from the general fingerprint, justifying its existence as a complementary instrument.",
        expertInterpretation: "Kappa values below 0.20 should not be interpreted as disagreement -- they reflect measurement of different constructs. The CGI dimension 'manipulation resistance' and the nearest fingerprint feature 'fp_dark_patterns' both attempt to capture manipulative design, but at different granularity and with different operationalizations. The kappa of 0.414 for child mention is the validity anchor -- it confirms the systems agree on the most basic question while diverging on finer-grained assessments.",
        conclusion: "The two systems measure related but distinct constructs -- the CGI captures children-specific nuances that general features miss.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "discord-table": {
        dataDescription: "97 blind spots (fingerprint detects children's content, CGI misses) and 19 reverse gaps (CGI detects, fingerprint misses).",
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
      overview: "Measurement validity is critical for policy-relevant research. This tab presents four complementary validation analyses: precision-recall by CGI stratum, weight sensitivity across 6 schemes, strong-floor decomposition showing detection vs. depth, and Monte Carlo rank stability. Together they establish the CGI's reliability above CGI=20 (93% precision) while honestly documenting its limitations below CGI=10 (0% precision).",
      expertName: "Dr. Elena Vasquez & James Crawford",
      expertRole: "Quantitative Methodologist; Industry Safety Officer"
    },
    charts: {
      "chart-precision": {
        dataDescription: "127 stratified sample: 14 high (CGI > 20), 50 medium (10-20), 50 low (5-10), 13 discordant cases.",
        methodology: "Manual classification of extract text by expert reviewers. Precision = TP / (TP + FP) within each stratum.",
        whatThisShows: "Manual validation precision (TP / (TP+FP)) for four CGI strata.",
        keyFinding: "93% precision at CGI > 20. 14% precision at CGI 5-20. 0% precision at CGI < 5. The recommended operational threshold is CGI of 10 or above.",
        whyItMatters: "For policymakers using this dashboard to identify governance exemplars, 93% precision means that 19 out of 20 high-scoring statements genuinely address children's governance. This level of reliability supports evidence-based policy recommendations.",
        expertInterpretation: "The stratified precision pattern is characteristic of keyword-based scoring systems: high specificity at the top (strong matches are reliable), low specificity at the bottom (weak matches are noisy). From an industry safety perspective, this is an acceptable operating point -- the system is useful for identifying what to pay attention to, even if it cannot reliably identify what to ignore. I recommend treating CGI < 10 as 'unassessed' rather than 'low-scoring' in policy applications.",
        conclusion: "The CGI is reliable for identifying high-scoring statements but should not be used to interpret low scores -- the recommended operational threshold is CGI of 10 or above.",
        expertName: "James Crawford",
        expertRole: "Industry Safety Officer"
      },
      "chart-weight-matrix": {
        dataDescription: "6 weighting schemes: equal, protection-heavy, participation-heavy, PCA-derived, category-mean, and original.",
        methodology: "Pairwise Spearman rank correlation (rho) across all 6 schemes. CRC GC25 rank tracked under each.",
        whatThisShows: "Spearman rank correlation matrix across six alternative CGI weighting schemes.",
        keyFinding: "All 6 weighting schemes correlate above rho = 0.94. CRC General Comment 25 ranks #1 under every scheme.",
        whyItMatters: "Weight robustness is critical for credibility. If rankings changed dramatically under different weighting assumptions, the CGI would be an artifact of our choices rather than a measure of governance content.",
        expertInterpretation: "The uniformly high correlations (> 0.94) tell us that the ranking is driven primarily by the number of dimensions covered, not by which dimensions receive the most weight. This is consistent with the earlier finding that most statements are 'spiky' -- when the dominant source of variation is coverage breadth rather than relative depth, weighting schemes have minimal impact on rankings.",
        conclusion: "Rankings are robust to how dimensions are weighted -- the results are not an artifact of weighting choices.",
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
        conclusion: "The scoring system primarily detects presence/absence, not depth -- a known limitation for dimensions with narrow keyword dictionaries.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "chart-montecarlo": {
        dataDescription: "1,000 Monte Carlo iterations with random weight perturbation (plus/minus 30%) and aggregation method randomization.",
        methodology: "OECD composite indicator robustness test. First-place probability and 95% confidence intervals computed for all top-10 statements.",
        whatThisShows: "95% confidence intervals for the rank of the top 10 statements under 1,000 random weight perturbations.",
        keyFinding: "CRC General Comment 25 holds #1 in 69.3% of iterations. Top-5 are stable; rankings below top-10 have wide uncertainty bands.",
        whyItMatters: "For policymakers citing 'the top-ranked children's governance instrument,' Monte Carlo stability provides confidence that the claim survives methodological scrutiny.",
        expertInterpretation: "The 69.3% first-place probability for CRC General Comment 25 is a strong result -- it means that even with substantial random perturbation of all dimension weights, this statement tops the ranking more often than not. The widening confidence intervals below rank 5 are expected: when many statements have similar CGI scores, small weight changes can swap their positions. I recommend reporting the top-5 as a reliable 'elite tier' and treating ranks 6-25 as a 'contender tier' without emphasizing specific ordinal positions.",
        conclusion: "The top-ranked statements are robustly identified; fine-grained ranking distinctions below the top tier should not be over-interpreted.",
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
      overview: "Children are not a monolith. A 5-year-old's relationship with AI differs fundamentally from a 15-year-old's. This tab examines whether governance recognizes developmental reality by analyzing age-specific keyword flags across 4 stages (0-5, 6-12, 13-17, 16-18 transition) and applying a developmental relevance matrix that maps each dimension to its age-stage importance. The answer is stark: 96.6% of governance treats childhood as undifferentiated.",
      expertName: "Dr. Yuki Tanaka-Morrison & Prof. Miriam Johansson",
      expertRole: "Child Development Psychologist; Intergenerational Ethics Philosopher"
    },
    charts: {
      "chart-age-flags": {
        dataDescription: "3,044 statements scanned for age-specific keywords across 4 developmental stages (0-5, 6-12, 13-17, 16-18 transition).",
        methodology: "Regex detection for stage-specific terms including age ranges, developmental descriptors, and stage-appropriate vocabulary.",
        whatThisShows: "Number of statements scoring 50+ for each developmental stage: early childhood (0-5), middle childhood (6-12), adolescence (13-17), and transition (16-18).",
        keyFinding: "Only 105 statements mention any specific age group. Middle childhood (6-12) is the most neglected with just 17 statements. Transition to adulthood (16-18) is addressed by only 5 statements globally.",
        whyItMatters: "Developmental psychology has established that children's cognitive capacities, emotional vulnerabilities, and consent competence change dramatically across age stages. Governance that treats 'children' as a single category will necessarily underprotect some and overprotect others.",
        expertInterpretation: "The neglect of middle childhood (6-12) is particularly alarming from a developmental perspective. This is the age at which children first encounter educational AI systems, begin forming digital identities, and develop the cognitive schemas that shape their understanding of privacy, consent, and algorithmic influence. Governance designed for either younger children (parental controls) or adolescents (social media protections) misses the critical developmental window where digital literacy foundations are laid.",
        conclusion: "Governance ignores the developmental reality that different ages need different protections.",
        expertName: "Dr. Yuki Tanaka-Morrison",
        expertRole: "Child Development Psychologist"
      },
      "chart-org-age": {
        dataDescription: "Age-weighted CGI computed by organization type and age group for the top 5 most active org types.",
        methodology: "Developmental relevance matrix applied to 20-dimension scores, weighting each dimension by its importance for each age stage.",
        whatThisShows: "Mean age-weighted CGI by organization type for the top 5 most active org types, broken down by age group.",
        keyFinding: "Early childhood (0-5) paradoxically scores highest because universal dimensions (enforcement, binding specificity) carry full weight regardless of age, while teen-specific dimensions that the matrix weights heavily for adolescents are rarely addressed.",
        whyItMatters: "The paradox reveals a measurement insight: age-weighted scoring exposes the gap between what governance provides (general protections) and what specific age groups need (developmentally targeted measures).",
        expertInterpretation: "The early childhood advantage in age-weighted scoring is an artifact that reveals a truth: governance protections for young children are largely parasitic on general protections (data privacy, institutional responsibility) rather than reflecting age-specific understanding. For adolescents, the reverse is true -- the dimensions most relevant to their lived experience (manipulation, consent, mental health, voice) are the least governed. The age-weighted analysis thus confirms the developmental mismatch that clinical practitioners have long observed.",
        conclusion: "The apparent coverage of younger children is an artifact of universal provisions, not age-targeted governance.",
        expertName: "Dr. Yuki Tanaka-Morrison",
        expertRole: "Child Development Psychologist"
      },
      "chart-dev-heatmap": {
        dataDescription: "20 dimensions crossed with 3 age groups, colored by expert-assigned developmental relevance weight.",
        methodology: "Developmental psychology mapping by expert panel. Heatmap shows average dimension score among statements flagged for each age group.",
        whatThisShows: "Average dimension score among statements flagged for each age group, showing which dimensions receive attention at each developmental stage.",
        keyFinding: "Dimensions most critical for adolescents (manipulation resistance, CSAM, mental health) are precisely those with lowest governance coverage. Governance provisions concentrate where they are least age-differentiated.",
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
      overview: "This tab maps 18 documented AI risks to children against actual governance coverage, producing a traffic-light mismatch matrix. It also measures governance response latency (how quickly governance responds to emerging threats), sector coverage across 8 AI application domains, and per-dimension gap rankings. After keyword expansion, 17 of 18 risks are now classified as well-governed -- but 'well-governed' means norms exist, not that children are actually protected. The implementation gap is the dominant challenge.",
      expertName: "Sarah Chen & Dr. Priya Sharma",
      expertRole: "Digital Safety Advocate; EdTech Specialist"
    },
    charts: {
      "risk-table": {
        dataDescription: "18 AI risks to children mapped to cg_* dimensions. Statement counts computed for those scoring 50 or above.",
        methodology: "Traffic-light classification: well-governed (> 5% coverage), under-governed (1-5%), ungoverned (< 1%).",
        whatThisShows: "Traffic-light classification of 18 AI risks to children by governance coverage.",
        keyFinding: "Post-keyword-expansion, 17 risks are well-governed, 1 under-governed (dark patterns at 1.6%), 0 ungoverned. But 15 of 20 dimensions are classified as implementation gaps where norms exist but lack operational enforcement.",
        whyItMatters: "The traffic-light matrix is a policy prioritization tool. However, 'well-governed' means norms exist, not that children are actually protected. The real challenge is implementation.",
        expertInterpretation: "From a digital safety perspective, the traffic-light classification should be read alongside severity assessments. Dark patterns are not just under-governed -- they are among the highest-severity risks children face online. The US Surgeon General's 2024 advisory specifically cited persuasive design as a public health concern for adolescents. A risk that is both high-severity and near-zero-governed represents a governance emergency, not merely a gap.",
        conclusion: "Governance norms exist for most risks but the real challenge is implementation -- 15 of 20 dimensions are classified as implementation gaps where norms exist but lack operational enforcement.",
        expertName: "Sarah Chen",
        expertRole: "Digital Safety Advocate"
      },
      "chart-latency": {
        dataDescription: "Threat emergence year versus first governance response year for 18 documented risks to children.",
        methodology: "Timeline analysis with diagonal reference line. Points below diagonal indicate proactive governance (negative latency).",
        whatThisShows: "Scatter plot of threat emergence year versus first governance response year.",
        keyFinding: "Governance is accelerating. Pre-2019 threats averaged +3yr lag; threats emerging after 2022 show proactive governance (-4yr), meaning frameworks preceded specific threat modalities.",
        whyItMatters: "Declining latency suggests the governance ecosystem is learning -- it takes less time for new threats to receive governance attention. However, 'attention' is not the same as 'effective governance.'",
        expertInterpretation: "The negative-latency cases (governance before threat emergence) are particularly interesting from an EdTech perspective. They suggest that some governance frameworks are broad enough to cover threats that had not yet been specifically identified. This argues for principle-based governance that can anticipate future threats, rather than threat-specific regulation that always lags behind technology.",
        conclusion: "The governance ecosystem is becoming more anticipatory, but response speed varies dramatically by risk type.",
        expertName: "Dr. Priya Sharma",
        expertRole: "EdTech Specialist"
      },
      "chart-sector-radar": {
        dataDescription: "8 AI sectors assessed for child-governance coverage among high-CGI statements.",
        methodology: "Keyword detection for sector-specific terms. Coverage computed as percentage of high-CGI statements referencing each sector.",
        whatThisShows: "Average governance response score across 8 sectors where children encounter AI systems.",
        keyFinding: "Social media and education are best covered (65.9% each). Smart devices/IoT most under-governed (11%). 3 sectors have zero legally binding instruments addressing children.",
        whyItMatters: "Children encounter AI across all these sectors, not just social media. A child who interacts with an AI tutor, wears a fitness tracker, and uses a voice assistant is subject to governance in education but virtually ungoverned in health and IoT.",
        expertInterpretation: "The sector coverage radar reveals the 'social media bias' in children's AI governance. Because the most visible harms (cyberbullying, CSAM, screen addiction) occur on social media platforms, governance attention has concentrated there. But children's AI exposure is rapidly diversifying: educational AI, health monitoring, smart toys, and voice assistants are all becoming part of daily childhood. Governance that focuses on social media alone is fighting the last war.",
        conclusion: "Governance tracks public salience (social media) rather than risk magnitude -- emerging sectors like smart toys and pediatric AI are governance blind spots.",
        expertName: "Dr. Priya Sharma",
        expertRole: "EdTech Specialist"
      },
      "chart-dim-gap-rank": {
        dataDescription: "20 dimensions ranked by percentage of child-mentioning statements (n=503) scoring 50 or above.",
        methodology: "Coverage analysis restricted to child-mentioning statements to control for governance intent.",
        whatThisShows: "Percentage of child-mentioning statements that substantively address each dimension.",
        keyFinding: "Bottom 5: manipulation resistance, consent/autonomy, surveillance, child voice, mental health -- precisely the dimensions addressing the most pressing risks children face.",
        whyItMatters: "This chart answers the question: among statements that already mention children, what do they still fail to address? The answer reveals systematic blind spots even in child-aware governance.",
        expertInterpretation: "The gap ranking among child-mentioning statements is more diagnostic than the overall corpus analysis because it controls for governance intent. These are statements that have already chosen to address children -- and they still neglect manipulation, consent, and voice. This cannot be attributed to lack of awareness; it reflects deliberate or unconscious prioritization of protection over agency. Closing these gaps requires not just more governance, but differently conceptualized governance that treats children as participants rather than merely as beneficiaries of adult protection.",
        conclusion: "The governance system's priorities are inverted relative to the risk landscape.",
        expertName: "Sarah Chen",
        expertRole: "Digital Safety Advocate"
      }
    }
  }
};
