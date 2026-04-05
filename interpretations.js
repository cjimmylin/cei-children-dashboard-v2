// Expert Council Interpretations for Children & AI Governance Dashboard v2
// Each tab and chart has structured expert commentary

var INTERPRETATIONS = {

  // ================================================================
  // TAB 1: OVERVIEW
  // ================================================================
  overview: {
    tabSummary: {
      headline: "3,044 AI governance statements analyzed across 20 children-specific dimensions reveal a governance landscape defined by rhetorical acknowledgment and operational absence.",
      overview: "Two-thirds of statements (66.9%) score above zero on the Children Governance Index, indicating some textual reference to children or child-relevant concepts. Yet the maximum CGI is only 55.6 out of 100, and only one statement -- CRC General Comment 25 -- crosses the 50-point substantive threshold. This is the central paradox: children are widely mentioned but rarely governed.",
      expertName: "Dr. Elena Vasquez & Prof. Amira Khalil",
      expertRole: "Quantitative Methodologist; Children's Rights Legal Scholar"
    },
    charts: {
      "chart-cgi-hist": {
        whatThisShows: "Distribution of CGI composite scores across all 3,044 statements, binned by score range.",
        keyFinding: "The extreme right-skew reveals near-universal rhetorical acknowledgment (66.9% score above zero) but vanishing comprehensive coverage. Only CRC General Comment 25 crosses the 50-point threshold.",
        whyItMatters: "A governance domain where the maximum score reaches barely half the possible range is not merely underdeveloped -- it is structurally empty. There is no comprehensive children's AI governance instrument anywhere in the world.",
        expertInterpretation: "The distribution shape is diagnostic. In a mature governance domain, we would expect a bell curve centered around 40-60. Instead we see a Poisson-like distribution with mode near zero. This is not a measurement artifact; it reflects genuine absence of substantive governance content.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "chart-category-radar": {
        whatThisShows: "Average scores across the five CRC-aligned categories: Protection, Participation, Provision, Governance, and Cross-Cutting.",
        keyFinding: "The 3 Ps (Protection, Participation, Provision) are profoundly imbalanced. Protection scores approximately 3x higher than Participation.",
        whyItMatters: "The CRC Committee has consistently held that children's rights form an indivisible whole. Governance that protects children without enabling their participation treats them as objects of concern rather than subjects with agency.",
        expertInterpretation: "This imbalance mirrors a historical pattern in children's rights: the 'welfare' model (adults decide what is best) dominates over the 'agency' model (children participate in decisions). AI governance is repeating the same mistake that took decades to correct in offline children's rights frameworks.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      },
      "chart-dim-coverage": {
        whatThisShows: "Number of statements scoring 50 or above on each of the 20 dimensions, colored by CRC category.",
        keyFinding: "Data privacy (10.3%) and institutional responsibility (16.1%) are the most commonly addressed dimensions. Manipulation resistance (0.2%) and consent/autonomy (0.3%) are virtually absent.",
        whyItMatters: "The coverage pattern reveals what governance actors consider important: data protection (aligned with GDPR-era priorities) versus what children actually need (protection from manipulative design, age-appropriate consent mechanisms).",
        expertInterpretation: "The dominance of data privacy reflects regulatory path dependency -- GDPR created institutional momentum around data protection that cascaded to children's governance. Dimensions without existing regulatory anchors (manipulation resistance, developmental support) remain governance orphans.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "top-table": {
        whatThisShows: "The 25 highest-scoring statements by CGI composite, with organization type and region.",
        keyFinding: "Civil society and intergovernmental organizations dominate the top ranks. No industry statement appears in the top 25. The Vatican's PAS-WCF statement (2017) preceded many secular frameworks.",
        whyItMatters: "The absence of industry from the top rankings is especially significant because industry builds the systems children encounter daily. The actors most capable of implementing children's protections are the least engaged in articulating them.",
        expertInterpretation: "The Vatican's early entry (2017) is noteworthy from a governance sequencing perspective. Religious institutions, often dismissed in tech governance discourse, were among the first to articulate comprehensive frameworks addressing children's relationship with AI. This complicates the narrative that children's AI governance is purely a secular, technical domain.",
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
      overview: "Each dimension captures a specific aspect of children's relationship with AI systems. The distributions show extreme zero-inflation across most dimensions, meaning the majority of statements say nothing about most children's issues. When dimensions are addressed, scores cluster at the strong-floor minimum (50), indicating shallow rather than deep engagement.",
      expertName: "Dr. Kwame Osei-Mensah & Adv. Daniel Kiprotich",
      expertRole: "NLP / Data Scientist; Data Privacy Lawyer"
    },
    charts: {
      "chart-dim-dist": {
        whatThisShows: "Stacked bar showing the distribution of scores for each dimension: Zero, Low (1-24), Mid (25-49), and High (50+).",
        keyFinding: "Most dimensions show extreme zero-inflation -- the majority of statements score zero on most dimensions. The bimodal pattern (0 or 50) in many dimensions reflects the strong-floor scoring rule, where any strong keyword match yields a minimum score of 50.",
        whyItMatters: "The zero-inflation is not a scoring artifact; it reflects genuine silence. When 98% of statements say nothing about manipulation resistance, that represents 2,983 governance documents that leave children unprotected against persuasive design.",
        expertInterpretation: "From an NLP perspective, the zero-inflation pattern helps us distinguish two types of governance gaps: dimensions where terminology simply does not appear (true blind spots) versus dimensions where related concepts are discussed but not operationalized (the Low/Mid scores). The former requires awareness-raising; the latter requires technical specificity.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "chart-cooccur": {
        whatThisShows: "Number of statements scoring 50 or above on both dimensions simultaneously, revealing which protections cluster together.",
        keyFinding: "Protection dimensions cluster together (CSAM, online safety, surveillance, mental health). Manipulation resistance is isolated -- almost no statement that addresses it also addresses other dimensions.",
        whyItMatters: "The clustering pattern reveals a 'silo effect' in governance thinking. Statements that address CSAM tend to also address online safety, but rarely extend to participation or provision dimensions. Children's governance is fragmented into issue-specific silos rather than integrated frameworks.",
        expertInterpretation: "The isolation of manipulation resistance in the co-occurrence matrix is particularly concerning from a privacy law perspective. Manipulative design and data privacy are deeply intertwined -- dark patterns exploit behavioral data to manipulate user choices -- yet governance treats them as unrelated domains. This gap represents a regulatory blind spot where children are most vulnerable.",
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
      overview: "This tab traces the progressive attenuation from mention to mechanism: 503 statements mention children, but only 29 include enforcement mechanisms, and only 15 include children's voice in governance. The ratio of mention to participation (503:15, or 34:1) quantifies the distance between rhetorical commitment and institutional action.",
      expertName: "Prof. Amira Khalil & Fatima Al-Rashid",
      expertRole: "Children's Rights Legal Scholar; Civil Society Representative"
    },
    charts: {
      "chart-mention-gap": {
        whatThisShows: "Funnel showing the number of statements that mention children, include enforcement mechanisms, and include provisions for children's voice.",
        keyFinding: "For every 34 statements that mention children, only one includes a mechanism for children's voice. The progressive attenuation from mention (503) to enforcement (29) to participation (15) quantifies the distance between rhetoric and action.",
        whyItMatters: "This funnel is the empirical signature of what children's rights scholars call the 'implementation gap' -- the chasm between normative commitment and institutional practice. In AI governance, this gap is wider than in any comparable policy domain.",
        expertInterpretation: "The 34:1 mention-to-participation ratio should be read alongside the CRC Committee's insistence that Article 12 (right to be heard) is not optional -- it is a foundational principle that enables all other rights. An AI governance ecosystem where 97% of child-mentioning statements exclude children's voices is not merely incomplete; it is structurally paternalistic.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      },
      "chart-ppp": {
        whatThisShows: "Donut chart showing how many statements substantively cover each of the 3 Ps: Protection, Participation, and Provision.",
        keyFinding: "Protection dominates by approximately 9:1 over Participation. The CRC Committee has repeatedly emphasized that participation rights (Article 12) are fundamental to all other rights, yet in AI governance, participation is the most neglected category.",
        whyItMatters: "A governance framework built on protection alone will infantilize children rather than empower them. The 3 Ps framework was designed to ensure balance -- AI governance has adopted only one leg of a three-legged stool.",
        expertInterpretation: "From a civil society perspective, the protection bias reflects who is at the table. When children's governance is designed by adults -- legislators, engineers, lawyers -- protection naturally dominates because adults project their fears onto children's digital experiences. Participation requires a fundamentally different governance process: one that includes children as co-designers, not just beneficiaries.",
        expertName: "Fatima Al-Rashid",
        expertRole: "Civil Society Representative"
      },
      "chart-gaps-ranked": {
        whatThisShows: "All 20 dimensions ranked by coverage, showing the least-covered dimensions first.",
        keyFinding: "Manipulation resistance (5 statements), consent/autonomy (10), surveillance (15), and child voice (16) are the four most neglected dimensions. These represent governance blind spots for some of children's most pressing AI risks.",
        whyItMatters: "The bottom four dimensions are not obscure or theoretical concerns. Manipulative design, surveillance of children, and lack of meaningful consent are documented harms happening at scale today. The governance gap is not hypothetical -- it is operational.",
        expertInterpretation: "These four dimensions share a common thread: they all require governance to engage with children's agency. Manipulation resistance means recognizing children can be manipulated; consent/autonomy means recognizing children have decision-making capacity; child voice means recognizing children have governance-relevant perspectives. The gap reflects a deeper failure to conceptualize children as agents in their own digital lives.",
        expertName: "Prof. Amira Khalil",
        expertRole: "Children's Rights Legal Scholar"
      },
      "chart-emerging": {
        whatThisShows: "Coverage of specific emerging AI risks to children: AI-generated CSAM, AI companions, algorithmic manipulation, and dark patterns.",
        keyFinding: "AI-generated CSAM, AI companions for minors, and algorithmic manipulation are emerging threats with minimal governance response. Dark patterns -- ranked among the highest-severity risks by the US Surgeon General -- are addressed by only 5 statements globally.",
        whyItMatters: "Emerging threats evolve faster than governance. AI-generated CSAM already accounts for a growing share of child sexual abuse material online, yet fewer than 50 statements address it. AI companions are being marketed directly to children with no age-appropriate design standards.",
        expertInterpretation: "The governance response to emerging threats reveals a systemic latency problem. By the time a threat is sufficiently documented for governance attention, millions of children have already been exposed. Dark patterns exemplify this: documented as harmful since at least 2018, still virtually ungoverned in 2026. Proactive governance -- regulating foreseeable harms before they manifest at scale -- remains the exception rather than the rule.",
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
      overview: "Civil society organizations score 2.5x higher than industry on the CGI, yet industry builds the systems children encounter daily. Regional disparities are even starker: North America produces governance statements at 257x the rate of Southeast Asia per capita of children. These disparities are not merely gaps to be filled -- they reflect power asymmetries in who gets to define children's digital rights.",
      expertName: "Prof. Ricardo Mendoza-Lagos & Dr. Aroha Te Kanawa",
      expertRole: "AI Governance Scholar; Indigenous Youth Advocate"
    },
    charts: {
      "chart-org-type": {
        whatThisShows: "Mean CGI and explicit child mention count by organization type.",
        keyFinding: "Civil society organizations score 2.5x higher than industry, yet industry builds the systems children encounter daily. Only 14 industry statements in the corpus address children.",
        whyItMatters: "The organizational pattern reveals a fundamental misalignment: those who articulate the norms (civil society, intergovernmental bodies) and those who implement the systems (industry) operate in largely separate governance universes.",
        expertInterpretation: "This decoupling between norm-setters and system-builders is not unique to children's governance, but it is especially consequential here. A child's daily AI experience -- the recommendation algorithms, content moderation systems, and data collection practices they encounter -- is determined by industry design choices, not by civil society position papers. Until industry governance instruments match civil society ambition, children's protections will remain aspirational.",
        expertName: "Prof. Ricardo Mendoza-Lagos",
        expertRole: "AI Governance Scholar"
      },
      "chart-region": {
        whatThisShows: "Mean CGI per geographic region.",
        keyFinding: "North America produces 9 governance statements per million children; Southeast Asia produces 0.035 -- a 257:1 ratio. Three entire regions (Africa, Central Asia, Southeast Asia) have zero statements meeting the substantive threshold.",
        whyItMatters: "Children in the Global South face the same AI systems as children in the North -- the same recommendation algorithms, the same social media platforms -- but have no region-specific governance frameworks to protect them.",
        expertInterpretation: "These numbers tell a colonial story. The AI systems deployed across the Global South are designed in Silicon Valley, regulated (if at all) in Brussels, and experienced by children in Lagos, Jakarta, and Dhaka with no governance voice of their own. The 257:1 ratio is not just a governance gap; it is a governance dispossession. Children's digital rights cannot be defined exclusively by the geopolitical centers that designed the systems causing harm.",
        expertName: "Dr. Aroha Te Kanawa",
        expertRole: "Indigenous Youth Advocate"
      },
      "chart-temporal": {
        whatThisShows: "Annual trend in total statements, explicit child mentions, and mean CGI from 2010 to 2026.",
        keyFinding: "The 2018 GDPR created a structural break -- children's governance attention reversed from declining to accelerating. Civil society is driving this acceleration 3x faster than government, raising questions about who sets the normative agenda.",
        whyItMatters: "The GDPR effect demonstrates that binding regulation can catalyze governance attention. The post-2018 acceleration suggests that a well-designed international instrument for children's digital rights could trigger a similar cascade.",
        expertInterpretation: "The temporal pattern reveals an important governance dynamic: regulation begets attention. Before GDPR, children's AI governance was sparse and declining. After GDPR demonstrated that data protection for children could be legislated, civil society mobilized rapidly. This suggests that the next structural break will come from a binding international instrument specifically addressing children and AI -- a possibility the CRC Committee is actively exploring.",
        expertName: "Prof. Ricardo Mendoza-Lagos",
        expertRole: "AI Governance Scholar"
      },
      "chart-org-heatmap": {
        whatThisShows: "Percentage of statements scoring 50+ per dimension, broken down by organization type.",
        keyFinding: "Religious organizations score highest on intergenerational equity and cultural diversity but lowest on enforcement and binding specificity. Government leads on enforcement but trails on participation.",
        whyItMatters: "Each organization type brings characteristic strengths and blind spots to children's governance. No single type covers all 20 dimensions -- comprehensive governance requires cross-institutional collaboration.",
        expertInterpretation: "The heatmap reveals governance complementarity rather than competition. Religious organizations contribute ethical depth on intergenerational concerns; government provides enforcement infrastructure; civil society centers participation and rights. A comprehensive children's AI governance framework would need to synthesize contributions across all organizational types -- a multilateral design challenge that no existing governance forum is currently structured to address.",
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
      overview: "CGI scores above 20 indicate substantive children's governance content with 93% precision, validated against manual expert review. Scores below 10 should be interpreted cautiously -- at these levels, the scoring system cannot reliably distinguish genuine children's governance content from incidental keyword matches. The dimensional radar chart for each statement reveals its profile shape, distinguishing balanced instruments (rare) from single-dimension specialists.",
      expertName: "Dr. Elena Vasquez",
      expertRole: "Quantitative Methodologist"
    },
    charts: {
      "drilldown-table": {
        whatThisShows: "Top 200 statements ranked by CGI, with key, title, year, organization type, and region. Click any row to see its dimensional profile.",
        keyFinding: "Each row represents a governance instrument. The radar chart shows the dimensional profile -- balanced profiles (coverage across Protection, Participation, and Provision) are rare and noteworthy. Most high-scoring statements concentrate on 2-3 dimensions rather than providing comprehensive coverage.",
        whyItMatters: "For policymakers, this table identifies exemplar instruments worth studying. For researchers, the dimensional profiles reveal governance design patterns -- how different institutional contexts shape which dimensions receive attention.",
        expertInterpretation: "The predominance of 'spiky' profiles (high on a few dimensions, zero on most) over 'round' profiles (moderate scores across many dimensions) has a methodological implication: the CGI composite score can be misleading for individual statements. Two statements scoring CGI=15 may have completely non-overlapping dimensional profiles. I recommend using this table to examine dimensional profiles directly rather than relying solely on the composite rank.",
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
      overview: "LASSO regression identifies 114 of 587 broader governance features that predict children's governance attention (R-squared = 0.48). The strongest predictor is fp_hr_childrens_rights (+1.18), confirming convergent validity. The two systems are complementary: the CGI detects 1,639 statements the fingerprint system misses, while the fingerprint catches 36 the CGI misses.",
      expertName: "Dr. Kwame Osei-Mensah",
      expertRole: "NLP / Data Scientist"
    },
    charts: {
      "chart-lasso": {
        whatThisShows: "Top 20 features from LASSO regression predicting CGI score from the 587-feature Tapestry fingerprint vector.",
        keyFinding: "LASSO regression (R-squared = 0.48) identified 114 of 587 broader governance features that predict children's governance attention. The strongest predictor is fp_hr_childrens_rights (+1.18), confirming convergent validity.",
        whyItMatters: "An R-squared of 0.48 means the general fingerprint system captures roughly half the variance in children's governance. The other half -- the unexplained variance -- is precisely what justifies a purpose-built children's scoring system.",
        expertInterpretation: "The LASSO coefficients tell an interesting story about which general governance features signal children's content. The positive predictors (children's rights, data protection, education) are unsurprising. The negative predictors are more revealing: features associated with industrial AI, autonomous weapons, or financial regulation predict lower CGI scores. This confirms that children's governance occupies a distinct niche in the overall governance landscape, not merely a subset of human rights or data protection discourse.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "chart-venn": {
        whatThisShows: "How the CGI and the Tapestry fp_hr_childrens_rights feature classify the same 3,044 statements.",
        keyFinding: "The CGI detects 1,639 statements the fingerprint system misses, while the fingerprint catches 36 the CGI misses. The systems are complementary -- purpose-built dimensions outperform general features for children-specific analysis.",
        whyItMatters: "The large CGI-only segment (1,639 statements) demonstrates the value of a dedicated scoring instrument. These are statements where children's governance content is present but expressed in vocabulary or structure that general-purpose features do not capture.",
        expertInterpretation: "The asymmetry is expected. The Tapestry fingerprint uses a single binary feature (fp_hr_childrens_rights) as a proxy for an entire 20-dimension construct. The CGI decomposes that construct into actionable dimensions. The 36 fingerprint-only detections are worth investigating individually -- they likely represent statements using child-relevant vocabulary that the CGI's more conservative strong-floor scoring does not trigger.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "chart-concordance": {
        whatThisShows: "Cohen's kappa between each CGI dimension and its closest matching Tapestry feature.",
        keyFinding: "Cohen's kappa averages 0.158 across dimension pairs, indicating slight agreement. This is expected -- the two systems use fundamentally different architectures (20-dimension targeted versus 200+ feature general). The best pair (child mention, kappa = 0.414) confirms moderate convergent validity.",
        whyItMatters: "Low inter-system agreement is actually desirable in this context. It demonstrates that the CGI measures something distinct from the general fingerprint, justifying its existence as a complementary instrument.",
        expertInterpretation: "Kappa values below 0.20 should not be interpreted as disagreement -- they reflect measurement of different constructs. The CGI dimension 'manipulation resistance' and the nearest fingerprint feature 'fp_dark_patterns' both attempt to capture manipulative design, but at different granularity and with different operationalizations. The kappa of 0.414 for child mention is the validity anchor -- it confirms the systems agree on the most basic question (does this statement mention children?) while diverging on finer-grained assessments.",
        expertName: "Dr. Kwame Osei-Mensah",
        expertRole: "NLP / Data Scientist"
      },
      "discord-table": {
        whatThisShows: "Top cases where the two systems disagree: blind spots (fingerprint detects, CGI misses) and reverse gaps (CGI detects, fingerprint misses).",
        keyFinding: "The 97 blind spots (fingerprint detects, CGI misses) and 19 reverse gaps (CGI detects, fingerprint misses) reveal what each system's assumptions capture differently.",
        whyItMatters: "Discordance cases are the most informative for system improvement. Each blind spot potentially represents a missing keyword or scoring rule in the CGI; each reverse gap potentially represents a general feature that is too broad.",
        expertInterpretation: "I recommend using the discordance table as a prioritized review queue. The blind spots are candidates for CGI keyword expansion -- if the fingerprint detected children's content that the CGI missed, the CGI's vocabulary may need updating. The reverse gaps are candidates for fingerprint refinement. Both systems improve when their disagreements are investigated.",
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
      overview: "The CGI achieves 93% precision for statements scoring above 20 and demonstrates robustness across six alternative weighting schemes (all rho > 0.94). However, 39.7% of non-zero scores are strong-floor clamped values (exactly 50), indicating that many detections are binary rather than reflecting depth. The Monte Carlo analysis confirms that the top-5 rankings are stable under random perturbation.",
      expertName: "Dr. Elena Vasquez & James Crawford",
      expertRole: "Quantitative Methodologist; Industry Safety Officer"
    },
    charts: {
      "chart-precision": {
        whatThisShows: "Manual validation precision (TP / (TP+FP)) for four CGI strata: A (high), B (medium), C (low), and D (discordant cases).",
        keyFinding: "The CGI achieves 93% precision for statements scoring above 20, making high-CGI rankings reliable for policy identification. However, overall precision is 17.5% -- scores below 10 are essentially noise. The recommended operational threshold is CGI of 10 or above.",
        whyItMatters: "For policymakers using this dashboard to identify governance exemplars, 93% precision means that 19 out of 20 high-scoring statements genuinely address children's governance. This level of reliability supports evidence-based policy recommendations.",
        expertInterpretation: "The stratified precision pattern is characteristic of keyword-based scoring systems: high specificity at the top (strong matches are reliable), low specificity at the bottom (weak matches are noisy). From an industry safety perspective, this is an acceptable operating point -- the system is useful for identifying what to pay attention to, even if it cannot reliably identify what to ignore. I recommend treating CGI < 10 as 'unassessed' rather than 'low-scoring' in policy applications.",
        expertName: "James Crawford",
        expertRole: "Industry Safety Officer"
      },
      "chart-weight-matrix": {
        whatThisShows: "Spearman rank correlation matrix across six alternative CGI weighting schemes.",
        keyFinding: "All six weighting schemes correlate above rho = 0.94, and CRC General Comment 25 holds the top rank under every scheme. The CGI is robust to methodological choices about how to weight dimensions.",
        whyItMatters: "Weight robustness is critical for credibility. If rankings changed dramatically under different weighting assumptions, the CGI would be an artifact of our choices rather than a measure of governance content. The stability confirms that the rankings reflect genuine variation in children's governance coverage.",
        expertInterpretation: "The uniformly high correlations (> 0.94) tell us that the ranking is driven primarily by the number of dimensions covered, not by which dimensions receive the most weight. This is consistent with the earlier finding that most statements are 'spiky' (high on a few dimensions, zero on most) -- when the dominant source of variation is coverage breadth rather than relative depth, weighting schemes have minimal impact on rankings.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "chart-floor": {
        whatThisShows: "Per-dimension decomposition of scores into six bands: zero, below floor, floor (exactly 50), light (51-65), substantive (66-85), and deep (86+).",
        keyFinding: "39.7% of non-zero scores are exactly 50 (the strong-floor minimum). This means many detections are binary (found one keyword) rather than reflecting depth of coverage. Five dimensions exceed 70% floor dependency.",
        whyItMatters: "The strong-floor pattern has implications for interpretation. A score of 50 means 'at least one strong match was found' -- it does not distinguish between a single keyword mention and a substantive discussion. Scores above 50 are more informative because they reflect multiple matches or contextual depth.",
        expertInterpretation: "The floor dependency is a known limitation of the strong-floor scoring design. We chose this approach deliberately -- in governance text analysis, a single mention of 'manipulation resistance' is meaningful even without elaboration, because the concept itself is rare enough to be diagnostic. However, consumers of these data should be aware that scores of exactly 50 represent a ceiling on what keyword analysis can tell us. Deeper analysis requires manual reading or LLM-assisted assessment.",
        expertName: "Dr. Elena Vasquez",
        expertRole: "Quantitative Methodologist"
      },
      "chart-montecarlo": {
        whatThisShows: "95% confidence intervals for the rank of the top 10 statements under 1,000 random weight perturbations.",
        keyFinding: "CRC General Comment 25 holds the number-one rank in 69.3% of iterations. The top-5 are stable; rankings below the top 10 have wide uncertainty bands.",
        whyItMatters: "For policymakers citing 'the top-ranked children's governance instrument,' Monte Carlo stability provides confidence that the claim survives methodological scrutiny. The wide bands below rank 10 indicate that fine-grained rankings in the mid-tier should not be over-interpreted.",
        expertInterpretation: "The 69.3% first-place probability for CRC General Comment 25 is a strong result -- it means that even with substantial random perturbation of all dimension weights, this statement tops the ranking more often than not. The widening confidence intervals below rank 5 are expected: when many statements have similar CGI scores, small weight changes can swap their positions. I recommend reporting the top-5 as a reliable 'elite tier' and treating ranks 6-25 as a 'contender tier' without emphasizing specific ordinal positions.",
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
      overview: "Only 105 of 3,044 statements mention any specific age group. Middle childhood (6-12) is the most neglected developmental stage with just 17 statements. The transition to adulthood (16-18) -- when graduated autonomy matters most for digital identity and consent -- is addressed by only 5 statements globally. Age differentiation is not improving over time despite growing policy attention to children.",
      expertName: "Dr. Yuki Tanaka-Morrison & Prof. Miriam Johansson",
      expertRole: "Child Development Psychologist; Intergenerational Ethics Philosopher"
    },
    charts: {
      "chart-age-flags": {
        whatThisShows: "Number of statements scoring 50+ for each developmental stage: early childhood (0-5), middle childhood (6-12), adolescence (13-17), and transition (16-18).",
        keyFinding: "Only 105 of 3,044 statements mention any specific age group. Middle childhood (6-12) is the most neglected with just 17 statements. The transition to adulthood (16-18) is addressed by only 5 statements globally.",
        whyItMatters: "Developmental psychology has established that children's cognitive capacities, emotional vulnerabilities, and consent competence change dramatically across age stages. Governance that treats 'children' as a single category will necessarily underprotect some and overprotect others.",
        expertInterpretation: "The neglect of middle childhood (6-12) is particularly alarming from a developmental perspective. This is the age at which children first encounter educational AI systems, begin forming digital identities, and develop the cognitive schemas that shape their understanding of privacy, consent, and algorithmic influence. Governance designed for either younger children (parental controls) or adolescents (social media protections) misses the critical developmental window where digital literacy foundations are laid.",
        expertName: "Dr. Yuki Tanaka-Morrison",
        expertRole: "Child Development Psychologist"
      },
      "chart-org-age": {
        whatThisShows: "Mean age-weighted CGI by organization type for the top 5 most active org types, broken down by age group.",
        keyFinding: "When dimensions are weighted by developmental relevance, early childhood (0-5) paradoxically scores highest because universal provisions (enforcement, binding specificity) carry full weight regardless of age, while teen-specific dimensions that the matrix weights heavily for adolescents are rarely addressed.",
        whyItMatters: "The paradox reveals a measurement insight: age-weighted scoring exposes the gap between what governance provides (general protections) and what specific age groups need (developmentally targeted measures).",
        expertInterpretation: "The early childhood advantage in age-weighted scoring is an artifact that reveals a truth: governance protections for young children are largely parasitic on general protections (data privacy, institutional responsibility) rather than reflecting age-specific understanding. For adolescents, the reverse is true -- the dimensions most relevant to their lived experience (manipulation, consent, mental health, voice) are the least governed. The age-weighted analysis thus confirms the developmental mismatch that clinical practitioners have long observed.",
        expertName: "Dr. Yuki Tanaka-Morrison",
        expertRole: "Child Development Psychologist"
      },
      "chart-dev-heatmap": {
        whatThisShows: "Average dimension score among statements flagged for each age group, showing which dimensions receive attention at each developmental stage.",
        keyFinding: "Governance provisions are concentrated where they are least age-differentiated. Protection from manipulation is most critical for adolescents but almost ungoverned across all age stages.",
        whyItMatters: "This matrix is the empirical analog of a clinical developmental assessment -- it maps governance coverage against developmental need and finds them misaligned at nearly every intersection.",
        expertInterpretation: "From an intergenerational ethics perspective, this heatmap reveals a failure of temporal imagination. Current governance is written by adults who experienced a pre-AI childhood. They govern based on fears (exploitation, predation) rather than developmental realities (identity formation, cognitive schema development, graduated autonomy). The blank cells in this heatmap are not just governance gaps -- they are intergenerational failures of empathy, where today's adults cannot imagine tomorrow's children's digital lives.",
        expertName: "Prof. Miriam Johansson",
        expertRole: "Intergenerational Ethics Philosopher"
      },
      "chart-age-temporal": {
        whatThisShows: "Mean age-weighted CGI per year by age group, showing whether age differentiation is improving over time.",
        keyFinding: "Age differentiation is not improving over time. Despite growing policy attention to children generally, governance continues to treat childhood as undifferentiated.",
        whyItMatters: "If age differentiation were improving, we would expect the three age-group lines to diverge over time as governance becomes more nuanced. Instead, they move roughly in parallel, suggesting that new governance instruments replicate the same undifferentiated approach as older ones.",
        expertInterpretation: "The flat temporal trend in age differentiation is discouraging but not irreversible. It suggests that governance actors are not learning from developmental science even as they produce more children-focused instruments. The opportunity is clear: any future governance framework that incorporates age-stage differentiation would represent a genuinely novel contribution to the field. The CRC Committee's General Comment 25 (2021) made a start, but its influence on subsequent instruments is not yet visible in these data.",
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
      overview: "Of 18 identified risks, only 1 is effectively ungoverned (dark patterns/addictive design at 0.8% coverage). Six risks are under-governed (1-5% coverage). The severity-coverage mismatch is most acute for dark patterns -- high severity, near-zero governance. Governance response latency has improved: pre-2019 threats faced 3-year average lags, while post-2022 threats often have proactive governance frameworks already in place.",
      expertName: "Sarah Chen & Dr. Priya Sharma",
      expertRole: "Digital Safety Advocate; EdTech Specialist"
    },
    charts: {
      "risk-table": {
        whatThisShows: "Traffic-light classification of 18 AI risks to children by governance coverage: green (adequately governed), yellow (under-governed), red (effectively ungoverned).",
        keyFinding: "Of 18 identified risks, dark patterns and addictive design has the lowest coverage at 0.8%. Six risks fall in the under-governed yellow zone (1-5% coverage), including mental health impacts, AI companions, and algorithmic identity formation.",
        whyItMatters: "The traffic-light matrix is a policy prioritization tool. Red-zone risks require urgent governance attention; yellow-zone risks require expansion of existing frameworks; green-zone risks require monitoring and enforcement.",
        expertInterpretation: "From a digital safety perspective, the traffic-light classification should be read alongside severity assessments. Dark patterns are not just under-governed -- they are among the highest-severity risks children face online. The US Surgeon General's 2024 advisory specifically cited persuasive design as a public health concern for adolescents. A risk that is both high-severity and near-zero-governed represents a governance emergency, not merely a gap.",
        expertName: "Sarah Chen",
        expertRole: "Digital Safety Advocate"
      },
      "chart-latency": {
        whatThisShows: "Scatter plot of threat emergence year versus first governance response year. Points on the diagonal represent instant response; points above represent governance lag.",
        keyFinding: "Governance response to children's AI risks has accelerated dramatically. Pre-2019 threats faced a 3-year average governance lag; threats emerging after 2022 often have proactive governance (negative latency), meaning frameworks were already in place before specific new threat modalities emerged.",
        whyItMatters: "Declining latency suggests the governance ecosystem is learning -- it takes less time for new threats to receive governance attention. However, 'attention' is not the same as 'effective governance.' Many governance responses remain rhetorical rather than operational.",
        expertInterpretation: "The negative-latency cases (governance before threat emergence) are particularly interesting from an EdTech perspective. They suggest that some governance frameworks are broad enough to cover threats that had not yet been specifically identified. For example, data protection frameworks designed for general online services turned out to be applicable to educational AI when it emerged. This argues for principle-based governance that can anticipate future threats, rather than threat-specific regulation that always lags behind technology.",
        expertName: "Dr. Priya Sharma",
        expertRole: "EdTech Specialist"
      },
      "chart-sector-radar": {
        whatThisShows: "Average governance response score across 8 sectors where children encounter AI systems.",
        keyFinding: "Social media and education are the most governed sectors (65.9% coverage each among high-CGI statements). Smart devices and IoT are the most under-governed at 11%. Three sectors -- healthcare, justice, and smart devices -- have zero legally binding instruments addressing children.",
        whyItMatters: "Children encounter AI across all these sectors, not just social media. A child who interacts with an AI tutor, wears a fitness tracker, and uses a voice assistant is subject to governance in education but virtually ungoverned in health and IoT.",
        expertInterpretation: "The sector coverage radar reveals the 'social media bias' in children's AI governance. Because the most visible harms (cyberbullying, CSAM, screen addiction) occur on social media platforms, governance attention has concentrated there. But children's AI exposure is rapidly diversifying: educational AI, health monitoring, smart toys, and voice assistants are all becoming part of daily childhood. Governance that focuses on social media alone is fighting the last war.",
        expertName: "Dr. Priya Sharma",
        expertRole: "EdTech Specialist"
      },
      "chart-dim-gap-rank": {
        whatThisShows: "Percentage of child-mentioning statements (n=503) that substantively address each dimension.",
        keyFinding: "The bottom five dimensions -- manipulation resistance, consent/autonomy, surveillance, child voice, and mental health -- represent the governance priorities most disconnected from documented risks to children.",
        whyItMatters: "This chart answers the question: among statements that already mention children, what do they still fail to address? The answer reveals that even child-aware governance has systematic blind spots.",
        expertInterpretation: "The gap ranking among child-mentioning statements is more diagnostic than the overall corpus analysis because it controls for governance intent. These are statements that have already chosen to address children -- and they still neglect manipulation, consent, and voice. This cannot be attributed to lack of awareness; it reflects deliberate or unconscious prioritization of protection over agency. Closing these gaps requires not just more governance, but differently conceptualized governance that treats children as participants rather than merely as beneficiaries of adult protection.",
        expertName: "Sarah Chen",
        expertRole: "Digital Safety Advocate"
      }
    }
  }
};
