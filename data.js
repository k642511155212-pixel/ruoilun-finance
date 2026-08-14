const FINANCE_DATA = {
  "meta": {
    "course": "Principles of Finance (TCH 302)",
    "product": "Finance Mastery",
    "version": "0.6.3",
    "subtitle": "Expanded exam-style practice · 600-question bank · theory + calculation variants · polished visual learning interface",
    "policy": "Official lecture and instructor-commented Q&A remain primary. Newly uploaded consolidated LTTC notes are supporting study notes, used only where aligned with the governing course sources. Past exam files are used to identify recurring exam patterns and to build normalized/adapted practice; they do not override theory sources. v0.6 adds generated exam-style variants derived from recurring patterns in the uploaded prior-paper archive; generated variants are clearly labeled and never presented as original past-paper questions. v0.6.2 upgrades the visual system with a polished homepage hero, chapter banners, and compact lesson-card icons while keeping the same source-grounded academic content and 600-question practice bank."
  },
  "modules": [
    {
      "id": "intro",
      "order": 1,
      "name": "Introduction to Finance",
      "vi": "Nhập môn tài chính",
      "coverage": "HIGH",
      "primarySource": "2024 Introduction to Finance.pdf",
      "topics": [
        "Real assets vs financial assets",
        "Defining finance",
        "Why study finance?",
        "Household financial decisions",
        "Firm financial decisions",
        "Forms of business organization",
        "Separation of ownership and management",
        "Goal of management",
        "Financial system",
        "Financial markets and institutions",
        "Flow of funds",
        "Functions of money and payment systems",
        "Financial-instrument value drivers and standardization"
      ],
      "lessons": [
        "real-vs-financial",
        "defining-finance",
        "household-decisions",
        "firm-decisions",
        "business-organization",
        "goal-management",
        "financial-system",
        "money-functions-payment",
        "financial-instruments-deep"
      ],
      "chapterFlow": [
        {
          "title": "Foundation",
          "items": [
            "Real assets vs financial assets",
            "Defining finance",
            "Why study finance?"
          ]
        },
        {
          "title": "Mechanics & relationships",
          "items": [
            "Household financial decisions",
            "Firm financial decisions",
            "Forms of business organization"
          ]
        },
        {
          "title": "Application & exam use",
          "items": [
            "Separation of ownership and management",
            "Goal of management",
            "Financial system",
            "Financial markets and institutions",
            "Flow of funds",
            "Functions of money and payment systems",
            "Financial-instrument value drivers"
          ]
        }
      ],
      "examChecklist": [
        "Real assets vs financial assets",
        "Defining finance",
        "Why study finance?",
        "Household financial decisions",
        "Firm financial decisions",
        "Forms of business organization",
        "Separation of ownership and management",
        "Goal of management",
        "Financial system",
        "Financial markets and institutions"
      ],
      "examPatterns": [
        "Distinguish money from wealth and income; identify medium of exchange, unit of account, and store of value.",
        "Explain why liquidity makes money a useful store of value even when other assets may offer higher expected returns.",
        "Recognize the legal structure and uses of a financial instrument: payment, store of value, and risk transfer.",
        "Rank instrument value by size, timing, likelihood of payment, and state/circumstances."
      ]
    },
    {
      "id": "tvm",
      "order": 2,
      "name": "Time Value of Money",
      "vi": "Giá trị thời gian của tiền",
      "coverage": "HIGH",
      "primarySource": "2023 Time Value of Money.pdf",
      "topics": [
        "Time value of money",
        "Compounding and discounting",
        "Lump-sum PV and FV",
        "Multiple cash flows",
        "Annuities",
        "Loan payments and amortization",
        "Perpetuities",
        "Growing cash flows",
        "APR and EAR",
        "NPV",
        "IRR"
      ],
      "lessons": [
        "tvm-intuition",
        "lump-sum",
        "multiple-cash-flows",
        "annuities",
        "loans",
        "perpetuities",
        "growing-cash-flows",
        "apr-ear",
        "npv",
        "irr"
      ],
      "chapterFlow": [
        {
          "title": "Foundation",
          "items": [
            "Time value of money",
            "Compounding and discounting",
            "Lump-sum PV and FV"
          ]
        },
        {
          "title": "Mechanics & relationships",
          "items": [
            "Multiple cash flows",
            "Annuities",
            "Loan payments and amortization"
          ]
        },
        {
          "title": "Application & exam use",
          "items": [
            "Perpetuities",
            "Growing cash flows",
            "APR and EAR",
            "NPV",
            "IRR"
          ]
        }
      ],
      "examChecklist": [
        "Time value of money",
        "Compounding and discounting",
        "Lump-sum PV and FV",
        "Multiple cash flows",
        "Annuities",
        "Loan payments and amortization",
        "Perpetuities",
        "Growing cash flows",
        "APR and EAR",
        "NPV"
      ],
      "examPatterns": [
        "Lump-sum PV/FV with annual or sub-annual compounding.",
        "APR ↔ periodic rate ↔ EAR; recognize that horizon does not change the EAR formula.",
        "Unequal cash-flow timelines and deferred annuities.",
        "Loan payment, total interest, remaining balance/payoff, and principal-versus-interest split.",
        "NPV/IRR decisions and constrained project selection under a capital budget."
      ]
    },
    {
      "id": "personal",
      "order": 3,
      "name": "Personal Finance",
      "vi": "Tài chính cá nhân",
      "coverage": "MEDIUM",
      "primarySource": "2023 Time Value of Money.pdf + instructor Q&A + Time Value of Money workbook",
      "topics": [
        "Mortgage payments",
        "Adjustable-rate mortgages",
        "Retirement annuities",
        "Loan consolidation",
        "Mortgage payoff",
        "Financing comparisons",
        "Interest-only loans",
        "Credit-card balances",
        "Growing savings plans"
      ],
      "lessons": [
        "mortgage-arm",
        "retirement-annuity",
        "loan-consolidation",
        "mortgage-payoff",
        "financing-rebate",
        "interest-only-personal",
        "credit-card-mechanics",
        "growing-savings"
      ],
      "chapterFlow": [
        {
          "title": "Foundation",
          "items": [
            "Mortgage payments",
            "Adjustable-rate mortgages",
            "Retirement annuities"
          ]
        },
        {
          "title": "Mechanics & relationships",
          "items": [
            "Loan consolidation",
            "Mortgage payoff",
            "Financing comparisons"
          ]
        },
        {
          "title": "Application & exam use",
          "items": [
            "Interest-only loans",
            "Credit-card balances",
            "Growing savings plans"
          ]
        }
      ],
      "examChecklist": [
        "Mortgage payments",
        "Adjustable-rate mortgages",
        "Retirement annuities",
        "Loan consolidation",
        "Mortgage payoff",
        "Financing comparisons",
        "Interest-only loans",
        "Credit-card balances",
        "Growing savings plans"
      ],
      "examPatterns": [
        "Mortgage/loan payment and payoff after k payments.",
        "Interest-only loan cash-flow structure.",
        "Credit-card timing / cash-cycle reasoning.",
        "Retirement or insurance annuity: compare purchase price with PV of promised payments."
      ]
    },
    {
      "id": "markets",
      "order": 4,
      "name": "Understanding Financial Markets and Institutions",
      "vi": "Thị trường và định chế tài chính",
      "coverage": "HIGH",
      "primarySource": "2023 Understanding Financial Markets and Financial Institutions.pdf",
      "topics": [
        "Role of financial markets",
        "Debt and equity",
        "Primary and secondary markets",
        "Exchanges and OTC markets",
        "Money and capital markets",
        "Foreign exchange markets",
        "Derivatives",
        "Holding-period return",
        "Internationalization",
        "Financial institutions",
        "Insurance and pensions",
        "Finance companies",
        "Mutual funds and investment banks",
        "Asymmetric information",
        "Characteristics of a well-run financial market",
        "Financial regulation and investor protection"
      ],
      "lessons": [
        "market-role",
        "market-structure",
        "money-capital-markets",
        "market-quality-regulation",
        "fx-derivatives",
        "market-rates",
        "international-markets",
        "financial-institutions",
        "insurance-pensions",
        "finance-companies-securities",
        "asymmetric-information"
      ],
      "chapterFlow": [
        {
          "title": "Foundation",
          "items": [
            "Role of financial markets",
            "Debt and equity",
            "Primary and secondary markets",
            "Exchanges and OTC markets"
          ]
        },
        {
          "title": "Mechanics & relationships",
          "items": [
            "Money and capital markets",
            "Foreign exchange markets",
            "Derivatives",
            "Holding-period return",
            "Characteristics of a well-run financial market"
          ]
        },
        {
          "title": "Application & exam use",
          "items": [
            "Internationalization",
            "Financial institutions",
            "Insurance and pensions",
            "Finance companies",
            "Mutual funds and investment banks",
            "Asymmetric information",
            "Financial regulation and investor protection"
          ]
        }
      ],
      "examChecklist": [
        "Role of financial markets",
        "Debt and equity",
        "Primary and secondary markets",
        "Exchanges and OTC markets",
        "Money and capital markets",
        "Foreign exchange markets",
        "Derivatives",
        "Holding-period return",
        "Internationalization",
        "Financial institutions"
      ],
      "examPatterns": [
        "Primary vs secondary; money vs capital; exchange vs OTC classification.",
        "Money-market instrument identification: T-bills, CDs, commercial paper, repos, federal funds, bankers’ acceptances.",
        "Functions and types of financial intermediaries, especially commercial banks and investment banks.",
        "Adverse selection (before transaction) vs moral hazard (after transaction) and mitigation tools.",
        "Why secondary-market prices/liquidity affect future primary-market financing."
      ]
    },
    {
      "id": "valuation",
      "order": 5,
      "name": "Valuation of Securities",
      "vi": "Định giá chứng khoán",
      "coverage": "HIGH",
      "primarySource": "2023 Valuation of securities.pdf",
      "topics": [
        "Required, expected, and realized returns",
        "Bond valuation",
        "Zero-coupon bonds",
        "Coupon bonds",
        "Interest rates and bond prices",
        "Yield to maturity",
        "Premium, par, and discount bonds",
        "Equity valuation",
        "Zero-growth dividends",
        "Constant-growth dividends",
        "Supernormal growth",
        "Money-market yields",
        "Money-market instruments",
        "Treasury and corporate bonds",
        "Bond ratings and spreads",
        "International bonds"
      ],
      "lessons": [
        "return-measures",
        "bond-valuation",
        "zero-coupon-bonds",
        "bond-price-rates",
        "ytm-bond-types",
        "equity-valuation",
        "money-market-yields",
        "money-market-instruments",
        "treasury-corporate-bonds",
        "bond-ratings-international"
      ],
      "chapterFlow": [
        {
          "title": "Foundation",
          "items": [
            "Required, expected, and realized returns",
            "Bond valuation",
            "Zero-coupon bonds",
            "Coupon bonds",
            "Interest rates and bond prices"
          ]
        },
        {
          "title": "Mechanics & relationships",
          "items": [
            "Yield to maturity",
            "Premium, par, and discount bonds",
            "Equity valuation",
            "Zero-growth dividends",
            "Constant-growth dividends"
          ]
        },
        {
          "title": "Application & exam use",
          "items": [
            "Supernormal growth",
            "Money-market yields",
            "Money-market instruments",
            "Treasury and corporate bonds",
            "Bond ratings and spreads",
            "International bonds"
          ]
        }
      ],
      "examChecklist": [
        "Required, expected, and realized returns",
        "Bond valuation",
        "Zero-coupon bonds",
        "Coupon bonds",
        "Interest rates and bond prices",
        "Yield to maturity",
        "Premium, par, and discount bonds",
        "Equity valuation",
        "Zero-growth dividends",
        "Constant-growth dividends"
      ],
      "examPatterns": [
        "Coupon-bond price from par, coupon, maturity, and YTM; then interpret premium/discount.",
        "Recalculate YTM or price when maturity/rating/required return changes.",
        "T-bill quote → price → holding-period return / bond-equivalent yield / EAR.",
        "Commercial paper and other money-market yield conventions.",
        "Bid/ask interpretation and money-market instrument identification.",
        "Credit ratings, default risk, liquidity, tax treatment, and yield spreads."
      ]
    },
    {
      "id": "risk",
      "order": 6,
      "name": "Understanding Risk",
      "vi": "Hiểu về rủi ro",
      "coverage": "HIGH",
      "primarySource": "2023 Understanding risk.pdf",
      "topics": [
        "Definition of risk",
        "Probabilities",
        "Expected value",
        "Variance",
        "Standard deviation",
        "Leverage",
        "Value at Risk",
        "Idiosyncratic risk",
        "Systematic risk",
        "Risk aversion",
        "Risk premium",
        "Hedging",
        "Diversification",
        "Risk spreading",
        "Two-asset portfolio variance, covariance and correlation"
      ],
      "lessons": [
        "defining-risk",
        "probability-expected-value",
        "variance-standard-deviation",
        "portfolio-risk-two-assets",
        "leverage-risk",
        "value-at-risk",
        "systematic-idiosyncratic",
        "risk-aversion-premium",
        "hedging-diversification"
      ],
      "chapterFlow": [
        {
          "title": "Foundation",
          "items": [
            "Definition of risk",
            "Probabilities",
            "Expected value",
            "Variance"
          ]
        },
        {
          "title": "Mechanics & relationships",
          "items": [
            "Standard deviation",
            "Leverage",
            "Value at Risk",
            "Idiosyncratic risk",
            "Two-asset portfolio risk"
          ]
        },
        {
          "title": "Application & exam use",
          "items": [
            "Systematic risk",
            "Risk aversion",
            "Risk premium",
            "Hedging",
            "Diversification",
            "Risk spreading"
          ]
        }
      ],
      "examChecklist": [
        "Definition of risk",
        "Probabilities",
        "Expected value",
        "Variance",
        "Standard deviation",
        "Leverage",
        "Value at Risk",
        "Idiosyncratic risk",
        "Systematic risk",
        "Risk aversion"
      ],
      "examPatterns": [
        "Expected value and standard deviation from discrete outcomes.",
        "Portfolio risk from weights, variances/standard deviations, covariance or correlation.",
        "Interpret perfect positive correlation as no diversification benefit from combining risky assets.",
        "Explain how financial leverage changes default risk and the dispersion of equity outcomes.",
        "Risk aversion: investors require compensation (risk premium) to bear more risk."
      ]
    },
    {
      "id": "health",
      "order": 7,
      "name": "Managing Financial Health",
      "vi": "Quản trị sức khỏe tài chính",
      "coverage": "HIGH",
      "primarySource": "2023 Financial Statements.pdf + 2023 Analyzing Firm Performance.pdf",
      "topics": [
        "Annual report",
        "Balance sheet",
        "Net working capital",
        "Book vs market value",
        "Income statement",
        "Taxes",
        "Debt vs equity financing",
        "Statement of cash flows",
        "Free cash flow",
        "Retained earnings",
        "Liquidity ratios",
        "Asset-management ratios",
        "Leverage and coverage ratios",
        "Profitability ratios",
        "Market-value ratios",
        "DuPont analysis",
        "Time-series and cross-sectional analysis",
        "Ratio cautions"
      ],
      "lessons": [
        "financial-statements-overview",
        "balance-sheet-nwc",
        "book-vs-market",
        "income-taxes-financing",
        "cash-flow-fcf",
        "retained-earnings",
        "liquidity-ratios",
        "asset-management-ratios",
        "leverage-coverage-ratios",
        "profitability-market-ratios",
        "dupont-analysis",
        "benchmarking-cautions"
      ],
      "chapterFlow": [
        {
          "title": "Foundation",
          "items": [
            "Annual report",
            "Balance sheet",
            "Net working capital",
            "Book vs market value",
            "Income statement",
            "Taxes"
          ]
        },
        {
          "title": "Mechanics & relationships",
          "items": [
            "Debt vs equity financing",
            "Statement of cash flows",
            "Free cash flow",
            "Retained earnings",
            "Liquidity ratios",
            "Asset-management ratios"
          ]
        },
        {
          "title": "Application & exam use",
          "items": [
            "Leverage and coverage ratios",
            "Profitability ratios",
            "Market-value ratios",
            "DuPont analysis",
            "Time-series and cross-sectional analysis",
            "Ratio cautions"
          ]
        }
      ],
      "examChecklist": [
        "Annual report",
        "Balance sheet",
        "Net working capital",
        "Book vs market value",
        "Income statement",
        "Taxes",
        "Debt vs equity financing",
        "Statement of cash flows",
        "Free cash flow",
        "Retained earnings"
      ],
      "examPatterns": [
        "Compute missing net margin, asset turnover, equity multiplier, ROA, or ROE using DuPont identities.",
        "Interpret whether weak ROE comes from profitability, efficiency, or leverage.",
        "Calculate debt-to-equity and other leverage/coverage ratios.",
        "Compare companies using multiple ratios rather than a single number.",
        "Discuss book versus market leverage and off-balance-sheet obligations conceptually."
      ]
    }
  ],
  "lessons": {
    "real-vs-financial": {
      "module": "intro",
      "title": "Real Assets vs Financial Assets",
      "vi": "Tài sản thực và tài sản tài chính",
      "objective": "Distinguish real assets from financial assets using the course framing.",
      "intuition": "The lecture separates assets that contribute to productive capacity from financial claims that allocate income or wealth among investors.",
      "definition": "Financial assets are the means by which individuals in well-developed economies hold their claims on real assets.",
      "relationships": [
        "Real assets generate net income to the economy.",
        "Financial assets define the allocation of income or wealth among investors."
      ],
      "commonMistake": "Do not classify an item only by whether it has a monetary price; use the lecture distinction between productive assets and financial claims.",
      "source": {
        "file": "2024 Introduction to Finance.pdf",
        "location": "Slide 7",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Financial assets are the means by which individuals in well-developed economies hold their claims on real assets.",
        "The source then connects this concept to: Real assets generate net income to the economy. Financial assets define the allocation of income or wealth among investors.",
        "Exam lens: Do not classify an item only by whether it has a monetary price; use the lecture distinction between productive assets and financial claims."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Financial assets are the means by which individuals in well-developed economies hold their claims on real assets."
        },
        {
          "label": "2 · Connect",
          "text": "Real assets generate net income to the economy."
        },
        {
          "label": "3 · Apply",
          "text": "Financial assets define the allocation of income or wealth among investors."
        },
        {
          "label": "4 · Check",
          "text": "Do not classify an item only by whether it has a monetary price; use the lecture distinction between productive assets and financial claims."
        }
      ],
      "examFocus": [
        "Be able to explain Real Assets vs Financial Assets in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not classify an item only by whether it has a monetary price; use the lecture distinction between productive assets and financial claims."
      ]
    },
    "defining-finance": {
      "module": "intro",
      "title": "Defining Finance",
      "vi": "Định nghĩa tài chính",
      "objective": "Explain what finance studies and the two features that distinguish financial decisions.",
      "intuition": "Finance focuses on allocating scarce resources over time, where costs and benefits occur at different dates and are usually uncertain in advance.",
      "definition": "Finance is the study of how people allocate scarce resources over time.",
      "relationships": [
        "Costs and benefits of financial decisions are spread out over time.",
        "Costs and benefits are usually not known with certainty in advance.",
        "Cash flow describes paying and receiving money over time."
      ],
      "commonMistake": "Finance is broader than only investing or only corporate finance.",
      "source": {
        "file": "2024 Introduction to Finance.pdf",
        "location": "Slide 12",
        "preview": "assets/source-previews/intro-slide-12.png",
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Finance is not only about securities or corporate decisions. The lecture frames it as the allocation of scarce resources over time. That wording immediately creates two questions for every financial decision: when do costs and benefits occur, and how uncertain are they?",
        "Because payments and receipts occur at different dates, amounts cannot be compared mechanically without putting them on a common time basis. This is why time value of money becomes a foundation for later topics such as loans, bond valuation, equity valuation, and project evaluation.",
        "The uploaded Financial Economics text reinforces this broad framing: finance studies resource allocation over time under uncertainty, with intertemporal choice, valuation, and risk management as recurring analytical pillars."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Finance is the study of how people allocate scarce resources over time."
        },
        {
          "label": "2 · Connect",
          "text": "Costs and benefits of financial decisions are spread out over time."
        },
        {
          "label": "3 · Apply",
          "text": "Costs and benefits are usually not known with certainty in advance."
        },
        {
          "label": "4 · Check",
          "text": "Finance is broader than only investing or only corporate finance."
        }
      ],
      "examFocus": [
        "Be able to explain Defining Finance in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Finance is broader than only investing or only corporate finance."
      ]
    },
    "household-decisions": {
      "module": "intro",
      "title": "Financial Decisions of Households",
      "vi": "Quyết định tài chính của hộ gia đình",
      "objective": "Identify the four basic financial decisions households face.",
      "intuition": "Households decide how much to consume and save, how to invest savings, when to borrow, and how to manage financial risk.",
      "definition": "When people choose how to hold their pool of accumulated savings, the lecture calls this personal investing or asset allocation.",
      "relationships": [
        "Consumption and saving decisions",
        "Investment decisions",
        "Financing decisions",
        "Risk-management decisions",
        "Net worth = assets − liabilities"
      ],
      "commonMistake": "Financing decisions concern borrowing; investment decisions concern how saved money is allocated.",
      "source": {
        "file": "2024 Introduction to Finance.pdf",
        "location": "Slide 20",
        "preview": "assets/source-previews/intro-slide-20.png",
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: When people choose how to hold their pool of accumulated savings, the lecture calls this personal investing or asset allocation.",
        "The source then connects this concept to: Consumption and saving decisions Investment decisions Financing decisions",
        "Exam lens: Financing decisions concern borrowing; investment decisions concern how saved money is allocated."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "When people choose how to hold their pool of accumulated savings, the lecture calls this personal investing or asset allocation."
        },
        {
          "label": "2 · Connect",
          "text": "Consumption and saving decisions"
        },
        {
          "label": "3 · Apply",
          "text": "Investment decisions"
        },
        {
          "label": "4 · Check",
          "text": "Financing decisions concern borrowing; investment decisions concern how saved money is allocated."
        }
      ],
      "examFocus": [
        "Be able to explain Financial Decisions of Households in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Financing decisions concern borrowing; investment decisions concern how saved money is allocated."
      ]
    },
    "firm-decisions": {
      "module": "intro",
      "title": "Financial Decisions of Firms",
      "vi": "Quyết định tài chính của doanh nghiệp",
      "objective": "Differentiate capital budgeting, capital structure, and working capital management.",
      "intuition": "The lecture separates deciding what projects to undertake, how to finance those projects, and how to manage short-term operating cash flows.",
      "definition": "The branch of finance dealing with financial decisions of firms is called business finance or corporate finance.",
      "relationships": [
        "Capital budgeting: identify, evaluate, decide on, and implement investment projects.",
        "Capital structure: determine how projects are financed, including debt and equity.",
        "Working capital management: manage collections, payments, and operating cash-flow deficits or surpluses."
      ],
      "commonMistake": "Capital budgeting is an investment decision; capital structure is a financing decision.",
      "source": {
        "file": "2024 Introduction to Finance.pdf",
        "location": "Slide 21",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: The branch of finance dealing with financial decisions of firms is called business finance or corporate finance.",
        "The source then connects this concept to: Capital budgeting: identify, evaluate, decide on, and implement investment projects. Capital structure: determine how projects are financed, including debt and equity. Working capital management: manage collections, payments, and operating cash-flow deficits or surpluses.",
        "Exam lens: Capital budgeting is an investment decision; capital structure is a financing decision."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The branch of finance dealing with financial decisions of firms is called business finance or corporate finance."
        },
        {
          "label": "2 · Connect",
          "text": "Capital budgeting: identify, evaluate, decide on, and implement investment projects."
        },
        {
          "label": "3 · Apply",
          "text": "Capital structure: determine how projects are financed, including debt and equity."
        },
        {
          "label": "4 · Check",
          "text": "Capital budgeting is an investment decision; capital structure is a financing decision."
        }
      ],
      "examFocus": [
        "Be able to explain Financial Decisions of Firms in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Capital budgeting is an investment decision; capital structure is a financing decision."
      ]
    },
    "business-organization": {
      "module": "intro",
      "title": "Forms of Business Organization",
      "vi": "Các hình thức tổ chức doanh nghiệp",
      "objective": "Recognize the three forms listed in the lecture and their liability distinction.",
      "intuition": "The lecture organizes firms as sole proprietorships, partnerships, and corporations, with ownership and liability rules differing across forms.",
      "definition": "A corporation is a firm that is a legal entity distinct from its owners.",
      "relationships": [
        "Sole proprietorship: owned by an individual or family; proprietor has unlimited liability.",
        "Partnership: two or more owners; general partners have unlimited liability, while some partners may be limited partners.",
        "Corporation: legal entity distinct from owners; shareholders have limited liability."
      ],
      "commonMistake": "A corporation can have one owner and still not be a sole proprietorship because the corporation is legally distinct from the owner.",
      "source": {
        "file": "2024 Introduction to Finance.pdf",
        "location": "Slides 30–32",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: A corporation is a firm that is a legal entity distinct from its owners.",
        "The source then connects this concept to: Sole proprietorship: owned by an individual or family; proprietor has unlimited liability. Partnership: two or more owners; general partners have unlimited liability, while some partners may be limited partners. Corporation: legal entity distinct from owners; shareholders have limited liability.",
        "Exam lens: A corporation can have one owner and still not be a sole proprietorship because the corporation is legally distinct from the owner."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "A corporation is a firm that is a legal entity distinct from its owners."
        },
        {
          "label": "2 · Connect",
          "text": "Sole proprietorship: owned by an individual or family; proprietor has unlimited liability."
        },
        {
          "label": "3 · Apply",
          "text": "Partnership: two or more owners; general partners have unlimited liability, while some partners may be limited partners."
        },
        {
          "label": "4 · Check",
          "text": "A corporation can have one owner and still not be a sole proprietorship because the corporation is legally distinct from the owner."
        }
      ],
      "examFocus": [
        "Be able to explain Forms of Business Organization in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: A corporation can have one owner and still not be a sole proprietorship because the corporation is legally distinct from the owner."
      ]
    },
    "goal-management": {
      "module": "intro",
      "title": "The Goal of Management",
      "vi": "Mục tiêu của quản trị",
      "objective": "Explain the shareholder-wealth-maximization framing used by the lecture.",
      "intuition": "The lecture frames managers as making decisions in shareholders’ best interests and links this to maximizing the market value of shares.",
      "definition": "The manager’s primary commitment is to make decisions which are in the best interests of shareholders.",
      "relationships": [
        "An owner would want managers to choose the investment project that maximizes the market value of shares.",
        "The lecture contrasts shareholder-wealth maximization with simple profit maximization."
      ],
      "commonMistake": "Do not automatically equate “profit maximization” with the lecture’s stated goal of maximizing shareholder wealth.",
      "source": {
        "file": "2024 Introduction to Finance.pdf",
        "location": "Slides 37–40",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: The manager’s primary commitment is to make decisions which are in the best interests of shareholders.",
        "The source then connects this concept to: An owner would want managers to choose the investment project that maximizes the market value of shares. The lecture contrasts shareholder-wealth maximization with simple profit maximization.",
        "Exam lens: Do not automatically equate “profit maximization” with the lecture’s stated goal of maximizing shareholder wealth."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The manager’s primary commitment is to make decisions which are in the best interests of shareholders."
        },
        {
          "label": "2 · Connect",
          "text": "An owner would want managers to choose the investment project that maximizes the market value of shares."
        },
        {
          "label": "3 · Apply",
          "text": "The lecture contrasts shareholder-wealth maximization with simple profit maximization."
        },
        {
          "label": "4 · Check",
          "text": "Do not automatically equate “profit maximization” with the lecture’s stated goal of maximizing shareholder wealth."
        }
      ],
      "examFocus": [
        "Be able to explain The Goal of Management in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not automatically equate “profit maximization” with the lecture’s stated goal of maximizing shareholder wealth."
      ]
    },
    "financial-system": {
      "module": "intro",
      "title": "The Financial System",
      "vi": "Hệ thống tài chính",
      "objective": "Explain what the financial system is, identify its six course components, and connect those components to the movement of funds, risk, information, and financial decision-making.",
      "intuition": "Households, firms, and governments rarely make financial decisions in isolation. They need a system that lets surplus units transfer funds to deficit units, trade financial claims, obtain liquidity, manage risk, and obtain information. Markets, institutions, instruments, money, regulators, and central banks are different parts of that same system.",
      "definition": "In the course lecture, the financial system is the organized framework made up of money, financial instruments, financial markets, financial institutions, government regulatory agencies, and central banks. Together these components support financial transactions and the allocation of funds across the economy.",
      "keyTerms": [
        [
          "Financial system",
          "Hệ thống tài chính"
        ],
        [
          "Financial instrument",
          "Công cụ tài chính"
        ],
        [
          "Financial market",
          "Thị trường tài chính"
        ],
        [
          "Financial institution / intermediary",
          "Tổ chức / trung gian tài chính"
        ],
        [
          "Regulatory agency",
          "Cơ quan quản lý tài chính"
        ],
        [
          "Central bank",
          "Ngân hàng trung ương"
        ],
        [
          "Direct finance",
          "Tài chính trực tiếp"
        ],
        [
          "Indirect finance",
          "Tài chính gián tiếp"
        ],
        [
          "Liquidity",
          "Tính thanh khoản"
        ],
        [
          "Asymmetric information",
          "Thông tin bất cân xứng"
        ]
      ],
      "theory": [
        {
          "title": "1. Flow of funds",
          "body": "A central role of the financial system is to connect economic units with surplus funds to units that need financing. Funds can move directly through financial markets or indirectly through financial intermediaries."
        },
        {
          "title": "2. Financial markets",
          "body": "Financial markets provide arrangements for issuing and trading financial claims. The uploaded Mishkin text organizes markets by debt versus equity, primary versus secondary, exchange versus over-the-counter, and money versus capital markets."
        },
        {
          "title": "3. Financial intermediaries",
          "body": "Intermediaries channel funds between savers and borrowers. The uploaded Mishkin chapter emphasizes that intermediaries can reduce transaction costs, support risk sharing, and help address information problems such as adverse selection and moral hazard."
        },
        {
          "title": "4. Financial instruments",
          "body": "Financial instruments are claims or contracts used to transfer funds and risks. Their cash-flow rights, maturity, risk, and tradability determine how they function within the system."
        },
        {
          "title": "5. Regulation and central banking",
          "body": "Regulatory agencies establish and enforce rules intended to support information availability and the soundness of intermediaries. Central banks are included by the lecture as a distinct part of the financial system and are responsible for key monetary and financial-system functions covered later in the supporting banking text."
        }
      ],
      "example": {
        "title": "From household saving to corporate financing",
        "body": "Suppose a household has excess cash and a company needs funds for a project. In direct finance, the household can ultimately fund the company by purchasing a security issued in a financial market. In indirect finance, the household may place money with a bank or fund, and that intermediary then provides financing or buys securities. Money is used for settlement; instruments define the claim; markets or institutions connect the parties; regulators set rules; and the central bank sits within the broader system."
      },
      "relationships": [
        "Money supports payment and settlement within the system.",
        "Financial instruments specify financial claims and contractual cash flows.",
        "Financial markets connect buyers and sellers of financial claims and support direct finance.",
        "Financial institutions and intermediaries channel funds and support indirect finance.",
        "Regulatory agencies establish and enforce rules for market conduct, disclosure, and institutional soundness.",
        "Central banks are a separate course component of the financial system and influence money, liquidity, and monetary conditions.",
        "Transaction costs and asymmetric information help explain why intermediaries exist rather than all finance occurring directly through markets."
      ],
      "commonMistake": "Do not treat 'financial system' as a synonym for 'financial markets.' Markets are only one component. The course explicitly lists six parts, and supporting sources explain how markets and intermediaries perform different but connected functions.",
      "source": {
        "file": "2024 Introduction to Finance.pdf",
        "location": "Slides 45–55",
        "preview": "assets/source-previews/intro-slide-45.png",
        "level": "Primary course source"
      },
      "supporting": [
        "The Economics of Money, Banking, and Financial Markets — Mishkin & Serletis, Chapter 2: financial markets, intermediaries, transaction costs, risk sharing, asymmetric information, and regulation",
        "Financial Economics — Bodie, Merton & Cleeton, Part I / Chapter 2 in the uploaded scan: financial markets, intermediaries, infrastructure, regulation, and governmental organizations",
        "LTTC_Financial market_HKT.pdf · six-part financial system and instrument/market/institution notes"
      ],
      "deepExplanation": [
        "Start with the economic problem: some households, firms, or governments have funds available now, while others need financing now. The financial system is the set of mechanisms through which those resources, financial claims, and risks are transferred.",
        "The 2024 lecture separates the system into six connected parts: money, financial instruments, financial markets, financial institutions, regulatory agencies, and central banks. Treat these as different functions, not synonyms. Money settles transactions; instruments define claims; markets support trading; institutions provide access and services; regulators support safe and reliable operation; central banks stabilize the economy within the lecture framing.",
        "The supporting Mishkin text explains why markets alone are not enough. Transaction costs and asymmetric information can make direct transactions expensive or difficult. Intermediaries can exploit scale, collect information, screen and monitor, and therefore facilitate indirect finance."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "In the course lecture, the financial system is the organized framework made up of money, financial instruments, financial markets, financial institutions, government regulatory agencies, and central banks. Together these components support financial transactions and the allocation of funds across the economy."
        },
        {
          "label": "2 · Connect",
          "text": "Money supports payment and settlement within the system."
        },
        {
          "label": "3 · Apply",
          "text": "Financial instruments specify financial claims and contractual cash flows."
        },
        {
          "label": "4 · Check",
          "text": "Do not treat 'financial system' as a synonym for 'financial markets.' Markets are only one component. The course explicitly lists six parts, and supporting sources explain how markets and intermediaries perform different but connected functions."
        }
      ],
      "examFocus": [
        "Be able to explain The Financial System in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not treat 'financial system' as a synonym for 'financial markets.' Markets are only one component. The course explicitly lists six parts, and supporting sources explain how markets and intermediaries perform different but connected functions.",
        "Past papers repeatedly test whether a transaction occurs through a financial market, intermediary, or particular financial instrument."
      ]
    },
    "tvm-intuition": {
      "module": "tvm",
      "title": "Time Value of Money",
      "vi": "Giá trị thời gian của tiền",
      "objective": "Explain why the same nominal amount can have different values at different dates.",
      "intuition": "A dollar in hand today is worth more than a dollar received in the future because today’s dollar can be invested and grow over time.",
      "definition": "The time value of money refers to a dollar in hand today being worth more than a dollar received in the future.",
      "relationships": [
        "Compounding translates a value today into a future value.",
        "Discounting translates a future value into the present."
      ],
      "commonMistake": "Compounding moves value forward in time; discounting moves value backward in time.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slides 4–7",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "The newly uploaded TVM notes give three reasons the same nominal amount is worth more today: money available today can earn a return, inflation can reduce future purchasing power, and future receipt is generally uncertain. These reasons reinforce the course intuition rather than replacing it.",
        "The core idea is equivalence across dates. Two equal nominal cash amounts are not automatically equal in economic value if they are received at different dates.",
        "Compounding asks what a present amount grows to; discounting asks what present amount is equivalent to a future cash flow. Always choose a valuation date before selecting a formula."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The time value of money refers to a dollar in hand today being worth more than a dollar received in the future."
        },
        {
          "label": "2 · Connect",
          "text": "Compounding translates a value today into a future value."
        },
        {
          "label": "3 · Apply",
          "text": "Discounting translates a future value into the present."
        },
        {
          "label": "4 · Check",
          "text": "Compounding moves value forward in time; discounting moves value backward in time."
        }
      ],
      "examFocus": [
        "Be able to explain Time Value of Money in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Compounding moves value forward in time; discounting moves value backward in time."
      ],
      "supporting": [
        "LTTC_Time value and money_HKT.pdf · pp. 1–5"
      ],
      "keyTerms": [
        [
          "Compounding",
          "Ghép lãi / tích lũy"
        ],
        [
          "Discounting",
          "Chiết khấu"
        ],
        [
          "Purchasing power",
          "Sức mua"
        ],
        [
          "Inflation",
          "Lạm phát"
        ],
        [
          "Reinvestment rate",
          "Lãi suất tái đầu tư"
        ]
      ]
    },
    "lump-sum": {
      "module": "tvm",
      "title": "Lump-Sum Valuation",
      "vi": "Định giá khoản tiền đơn",
      "objective": "Calculate present value and future value of a single cash flow.",
      "intuition": "Lump-sum valuation finds an equivalent amount at another point in time by compounding or discounting.",
      "definition": "A lump sum payment is a single cash payment received at the beginning or end of an investment horizon.",
      "relationships": [
        "Higher r lowers PV for a fixed future value and time horizon.",
        "More periods lower PV for a fixed future value when r is positive."
      ],
      "commonMistake": "Match the rate per period with the number of periods.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slide 8",
        "preview": "assets/source-previews/tvm-slide-8.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Present Value",
          "html": "PV = FV<sub>t</sub> / (1 + r)<sup>t</sup>"
        },
        {
          "label": "Future Value",
          "html": "FV<sub>t</sub> = PV(1 + r)<sup>t</sup>"
        }
      ],
      "variables": [
        [
          "PV",
          "Present value"
        ],
        [
          "FVₜ",
          "Future value received in t periods"
        ],
        [
          "r",
          "Interest rate per period"
        ],
        [
          "t",
          "Number of compounding periods"
        ]
      ],
      "workedExample": {
        "title": "Single future cash flow",
        "prompt": "What is the present value of $1,000 received in 3 years at 8% per year?",
        "steps": [
          "Identify FV = 1,000, r = 0.08, t = 3.",
          "Use PV = FV/(1+r)^t.",
          "PV = 1,000/(1.08)^3."
        ],
        "answer": "$793.83"
      },
      "deepExplanation": [
        "A lump sum is a single cash flow, so its valuation is the cleanest TVM case. The future-value and present-value formulas are inverses of one another: one compounds a present amount forward, the other discounts a future amount backward.",
        "The interest rate and number of periods must use the same time unit. If the rate is monthly, the number of periods must be months; if the rate is annual, the number of periods must be years. This unit-matching step is a frequent source of otherwise avoidable errors.",
        "Sensitivity follows directly from discounting. Holding a future cash flow and horizon fixed, a larger positive discount rate produces a lower present value. Holding the rate fixed, a longer wait also lowers present value.",
        "Compound interest means interest can itself earn interest. Over long horizons, the gap between simple and compound interest can become large, so “rate × years” is not a valid substitute for compounding when the source specifies compound interest.",
        "When choosing between a long deposit and a sequence of shorter deposits, the reinvestment rate on the future short deposit matters; the initial quoted rates alone are not enough."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "A lump sum payment is a single cash payment received at the beginning or end of an investment horizon."
        },
        {
          "label": "2 · Connect",
          "text": "Higher r lowers PV for a fixed future value and time horizon."
        },
        {
          "label": "3 · Apply",
          "text": "More periods lower PV for a fixed future value when r is positive."
        },
        {
          "label": "4 · Check",
          "text": "Match the rate per period with the number of periods."
        }
      ],
      "examFocus": [
        "Be able to explain Lump-Sum Valuation in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Match the rate per period with the number of periods."
      ],
      "supporting": [
        "LTTC_Time value and money_HKT.pdf · compounding examples and reinvestment-rate example"
      ]
    },
    "multiple-cash-flows": {
      "module": "tvm",
      "title": "Multiple Cash Flows & Timelines",
      "vi": "Dòng tiền nhiều kỳ và trục thời gian",
      "objective": "Value a stream of unequal cash flows by placing each cash flow on the correct date.",
      "intuition": "A timeline prevents timing errors: each cash flow is discounted or compounded for the number of periods between its date and the valuation date.",
      "definition": "When cash flows differ across periods, each cash flow can be valued separately and the values added at a common date.",
      "relationships": [
        "Cash flows must be brought to the same point in time before they are added.",
        "The number of discount periods depends on the actual timing of each cash flow."
      ],
      "commonMistake": "Do not discount all cash flows by the same number of periods unless they occur at the same date.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slides 28–31",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Unequal cash flows cannot be collapsed into an annuity formula. Each payment has its own date, so each must be moved to the common valuation date using the number of periods that actually separates the cash flow from that date.",
        "The correct workflow is mechanical: draw the timeline, label each date, choose the valuation date, discount or compound every cash flow separately, and only then add the equivalent values.",
        "A useful exam check is dimensional: if two cash flows occur at different dates and you have discounted both by exactly the same exponent, re-check the timeline."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "When cash flows differ across periods, each cash flow can be valued separately and the values added at a common date."
        },
        {
          "label": "2 · Connect",
          "text": "Cash flows must be brought to the same point in time before they are added."
        },
        {
          "label": "3 · Apply",
          "text": "The number of discount periods depends on the actual timing of each cash flow."
        },
        {
          "label": "4 · Check",
          "text": "Do not discount all cash flows by the same number of periods unless they occur at the same date."
        }
      ],
      "examFocus": [
        "Be able to explain Multiple Cash Flows & Timelines in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not discount all cash flows by the same number of periods unless they occur at the same date."
      ]
    },
    "annuities": {
      "module": "tvm",
      "title": "Annuities",
      "vi": "Niên kim",
      "objective": "Identify an annuity and calculate its present or future value using the course formula.",
      "intuition": "Because annuity cash flows are equal and occur at regular intervals, the repeated cash flows can be valued with a compact formula.",
      "definition": "An annuity is a stream of N equal cash flows paid at regular intervals.",
      "relationships": [
        "Most car loans, mortgages, and some bonds are presented as annuities in the lecture.",
        "The timing of the first and last payment matters."
      ],
      "commonMistake": "Do not silently treat a payment today as an ordinary-annuity payment; the Q&A repeatedly emphasizes payment timing.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slides 32–36",
        "preview": "assets/source-previews/tvm-slide-33.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Present Value of an Annuity",
          "html": "PV = PMT × [ (1 − 1/(1+r)<sup>t</sup>) / r ]"
        },
        {
          "label": "Future Value of an Annuity",
          "html": "FV<sub>t</sub> = PMT × [ ((1+r)<sup>t</sup> − 1) / r ]"
        }
      ],
      "variables": [
        [
          "PMT",
          "Periodic payment"
        ],
        [
          "r",
          "Interest rate per period"
        ],
        [
          "t",
          "Number of payment periods"
        ]
      ],
      "supporting": [
        "PV of an annuity.pdf — visual derivation",
        "Q&A 3.pdf — payment timing clarification",
        "LTTC_Time value and money_HKT.pdf · annuity section, including insurance-annuity and mortgage applications"
      ],
      "deepExplanation": [
        "An annuity is a repeated equal cash flow at regular intervals. The compact annuity formula works because every payment has the same amount and spacing, but the payments still occur at different dates and therefore carry different discount factors.",
        "Timing is decisive. In the standard ordinary-annuity setup, the first payment occurs one period after the valuation date. The instructor Q&A repeatedly emphasizes that a payment occurring today changes the structure and should not be silently treated as an ordinary annuity.",
        "On exams, identify PMT, periodic rate, and number of payments only after confirming the first payment date. Many annuity mistakes are timeline mistakes rather than algebra mistakes.",
        "The new notes distinguish cash flows starting immediately from cash flows starting at the end of the period. In practice, read the dates rather than relying on labels: a first payment today is an annuity-due timing pattern; a first payment one period from now is an ordinary-annuity timing pattern.",
        "A deferred annuity is handled by valuing the annuity one period before its first payment, then discounting that value back to the desired valuation date."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "An annuity is a stream of N equal cash flows paid at regular intervals."
        },
        {
          "label": "2 · Connect",
          "text": "Most car loans, mortgages, and some bonds are presented as annuities in the lecture."
        },
        {
          "label": "3 · Apply",
          "text": "The timing of the first and last payment matters."
        },
        {
          "label": "4 · Check",
          "text": "Do not silently treat a payment today as an ordinary-annuity payment; the Q&A repeatedly emphasizes payment timing."
        }
      ],
      "examFocus": [
        "Be able to explain Annuities in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not silently treat a payment today as an ordinary-annuity payment; the Q&A repeatedly emphasizes payment timing."
      ]
    },
    "loans": {
      "module": "tvm",
      "title": "Loan Payment Methods & Amortization",
      "vi": "Phương thức trả nợ và khấu hao khoản vay",
      "objective": "Distinguish amortized, discount, and interest-only loans.",
      "intuition": "Loan structures differ in when principal and interest are paid, which changes the cash-flow timeline.",
      "definition": "The lecture lists three loan payment methods: amortized loan, discount loan, and interest-only loan.",
      "relationships": [
        "Amortized loan: interest and principal are paid as you go.",
        "Discount loan: interest and principal are paid at maturity.",
        "Interest-only loan: interest is paid as you go and principal is paid at maturity."
      ],
      "commonMistake": "Interest-only does not mean principal disappears; principal is due at maturity.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slides 37–41",
        "preview": null,
        "level": "Primary course source"
      },
      "workedExample": {
        "title": "Amortized loan source case",
        "prompt": "The lecture asks for the annual payment and amortization schedule on a VND 2 billion, 20-year loan at 9%.",
        "steps": [
          "Treat the equal annual payments as an annuity.",
          "Use the payment that makes the present value of payments equal the loan amount.",
          "For each period: interest = beginning balance × periodic rate; principal reduction = payment − interest."
        ],
        "answer": "Use the amortization process rather than treating every period’s principal as equal."
      },
      "deepExplanation": [
        "Start with the course definition: The lecture lists three loan payment methods: amortized loan, discount loan, and interest-only loan.",
        "The source then connects this concept to: Amortized loan: interest and principal are paid as you go. Discount loan: interest and principal are paid at maturity. Interest-only loan: interest is paid as you go and principal is paid at maturity.",
        "Exam lens: Interest-only does not mean principal disappears; principal is due at maturity.",
        "The consolidated notes explicitly warn against computing a “true rate” as total interest divided by original principal when the principal is being repaid through time. The outstanding balance changes after every payment, so interest is charged on a declining balance.",
        "A past-paper pattern asks for both payment and payoff after a specified payment. Solve in two stages: compute PMT from the original loan, then value only the remaining payments at the payoff date."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The lecture lists three loan payment methods: amortized loan, discount loan, and interest-only loan."
        },
        {
          "label": "2 · Connect",
          "text": "Amortized loan: interest and principal are paid as you go."
        },
        {
          "label": "3 · Apply",
          "text": "Discount loan: interest and principal are paid at maturity."
        },
        {
          "label": "4 · Check",
          "text": "Interest-only does not mean principal disappears; principal is due at maturity."
        }
      ],
      "examFocus": [
        "Be able to explain Loan Payment Methods & Amortization in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Interest-only does not mean principal disappears; principal is due at maturity.",
        "Be able to compute the payment first, then compute remaining balance/payoff at a later payment date.",
        "Be able to split a specific payment into interest = r × prior balance and principal = PMT − interest."
      ],
      "theory": [
        {
          "title": "1. Payment equation",
          "body": "For a fully amortizing loan, the original principal equals the present value of the scheduled payments at the loan rate per payment period."
        },
        {
          "title": "2. Interest/principal split",
          "body": "Each payment first covers interest on the outstanding balance. The remainder reduces principal. As the balance falls, interest generally falls and principal repayment rises."
        },
        {
          "title": "3. Remaining balance",
          "body": "Immediately after payment k, the remaining balance equals the present value at that date of the payments still outstanding. This is the cleanest payoff calculation."
        },
        {
          "title": "4. Total interest",
          "body": "For a fixed fully amortizing loan with no fees, total scheduled interest equals total payments over the loan minus original principal."
        }
      ],
      "formula": [
        {
          "label": "Remaining balance after payment k",
          "html": "B<sub>k</sub> = PMT × [1 − (1+r)<sup>−(n−k)</sup>] / r"
        }
      ],
      "supporting": [
        "LTTC_Time value and money_HKT.pdf · amortization explanation",
        "5 bộ đề năm trước LTTC.pdf · recurring loan-payment/payoff written problems"
      ]
    },
    "perpetuities": {
      "module": "tvm",
      "title": "Perpetuities",
      "vi": "Dòng tiền vĩnh cửu",
      "objective": "Recognize a perpetuity and calculate its present value.",
      "intuition": "A perpetuity extends an equal periodic cash flow forever, so the infinite discounted stream simplifies to a compact expression.",
      "definition": "A perpetuity is a stream of equal cash flows that occur at regular intervals and last forever.",
      "relationships": [
        "The first payment in the lecture’s standard perpetuity occurs one period from today.",
        "British consols are used as an example of perpetual bonds."
      ],
      "commonMistake": "Check the first-payment date before applying the formula.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slides 42–46",
        "preview": "assets/source-previews-v02/tvm-slide-44.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Present Value of a Perpetuity",
          "html": "PV = C / r"
        }
      ],
      "variables": [
        [
          "C",
          "Periodic cash flow"
        ],
        [
          "r",
          "Interest rate per period"
        ]
      ],
      "deepExplanation": [
        "Start with the course definition: A perpetuity is a stream of equal cash flows that occur at regular intervals and last forever.",
        "The source then connects this concept to: The first payment in the lecture’s standard perpetuity occurs one period from today. British consols are used as an example of perpetual bonds.",
        "Exam lens: Check the first-payment date before applying the formula."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "A perpetuity is a stream of equal cash flows that occur at regular intervals and last forever."
        },
        {
          "label": "2 · Connect",
          "text": "The first payment in the lecture’s standard perpetuity occurs one period from today."
        },
        {
          "label": "3 · Apply",
          "text": "British consols are used as an example of perpetual bonds."
        },
        {
          "label": "4 · Check",
          "text": "Check the first-payment date before applying the formula."
        }
      ],
      "examFocus": [
        "Be able to explain Perpetuities in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Check the first-payment date before applying the formula."
      ]
    },
    "growing-cash-flows": {
      "module": "tvm",
      "title": "Growing Perpetuities & Growing Annuities",
      "vi": "Dòng tiền tăng trưởng",
      "objective": "Distinguish a growing perpetuity from a growing annuity and use the verified course formulas.",
      "intuition": "The lecture extends equal-payment streams by allowing cash flows to grow at a constant rate.",
      "definition": "A growing perpetuity lasts forever; a growing annuity contains N growing cash flows and eventually ends.",
      "relationships": [
        "Growing perpetuity assumes g < r in the course formula.",
        "The first growing-annuity cash flow is C; the last reflects N−1 periods of growth."
      ],
      "commonMistake": "Do not apply the growing-perpetuity formula when g is not below r.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slides 47–52",
        "preview": "assets/source-previews-v02/tvm-slide-51.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Growing Perpetuity",
          "html": "PV = C / (r − g)"
        },
        {
          "label": "Growing Annuity",
          "html": "PV = C × [1/(r−g)] × [1 − ((1+g)/(1+r))<sup>N</sup>]"
        }
      ],
      "variables": [
        [
          "C",
          "First cash flow"
        ],
        [
          "r",
          "Discount rate per period"
        ],
        [
          "g",
          "Cash-flow growth rate per period"
        ],
        [
          "N",
          "Number of cash flows"
        ]
      ],
      "supporting": [
        "Q&A 3.pdf — instructor clarification on growing-annuity timing"
      ],
      "deepExplanation": [
        "Start with the course definition: A growing perpetuity lasts forever; a growing annuity contains N growing cash flows and eventually ends.",
        "The source then connects this concept to: Growing perpetuity assumes g < r in the course formula. The first growing-annuity cash flow is C; the last reflects N−1 periods of growth.",
        "Exam lens: Do not apply the growing-perpetuity formula when g is not below r."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "A growing perpetuity lasts forever; a growing annuity contains N growing cash flows and eventually ends."
        },
        {
          "label": "2 · Connect",
          "text": "Growing perpetuity assumes g < r in the course formula."
        },
        {
          "label": "3 · Apply",
          "text": "The first growing-annuity cash flow is C; the last reflects N−1 periods of growth."
        },
        {
          "label": "4 · Check",
          "text": "Do not apply the growing-perpetuity formula when g is not below r."
        }
      ],
      "examFocus": [
        "Be able to explain Growing Perpetuities & Growing Annuities in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not apply the growing-perpetuity formula when g is not below r."
      ]
    },
    "apr-ear": {
      "module": "tvm",
      "title": "APR, Periodic Rate & EAR",
      "vi": "APR, lãi suất theo kỳ và EAR",
      "objective": "Distinguish APR from the rate per compounding period and compute effective annual rate.",
      "intuition": "When compounding occurs more than once a year, the quoted annual percentage rate is not the per-period rate used in compounding.",
      "definition": "When an interest rate is stated per year but interest is compounded more frequently than once per year, the stated annual rate is the annual percentage rate (APR).",
      "relationships": [
        "Periodic rate = APR/m when the quoted rate is APR with m compounding periods.",
        "EAR incorporates the effect of compounding over the full year."
      ],
      "commonMistake": "Do not use the full APR as the monthly, quarterly, or semiannual periodic rate.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slides 54–56",
        "preview": "assets/source-previews/tvm-slide-56.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Effective Annual Rate",
          "html": "EAR = (1 + APR / m)<sup>m</sup> − 1"
        },
        {
          "label": "Continuous compounding",
          "html": "FV = PV·e<sup>rt</sup> &nbsp; and &nbsp; PV = FV·e<sup>−rt</sup>"
        }
      ],
      "variables": [
        [
          "APR",
          "Annual percentage rate"
        ],
        [
          "m",
          "Compounding periods per year"
        ]
      ],
      "supporting": [
        "Q&A 3.pdf — EAR-to-monthly-rate clarification",
        "LTTC_Time value and money_HKT.pdf · pp. 3–6"
      ],
      "deepExplanation": [
        "APR is a quoted annual rate when compounding occurs more frequently than once per year. The periodic rate is the APR divided by the number of compounding periods per year when the lecture uses the standard nominal-rate convention.",
        "EAR measures the one-year growth actually produced after intra-year compounding. Therefore EAR and APR are generally not interchangeable when compounding is more frequent than annually.",
        "The safest exam workflow is: identify compounding frequency, compute the periodic rate, match that rate to the cash-flow period, and convert to EAR only when an effective annual comparison is requested.",
        "The consolidated notes also show continuous compounding as a limiting case. Use it only when the problem explicitly states a continuously compounded annual rate: FV = PV·e^(rt), or PV = FV·e^(−rt).",
        "Do not compare two quoted APRs with different compounding frequencies directly. Convert to a common effective basis when the question asks which financing or saving offer is economically better."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "When an interest rate is stated per year but interest is compounded more frequently than once per year, the stated annual rate is the annual percentage rate (APR)."
        },
        {
          "label": "2 · Connect",
          "text": "Periodic rate = APR/m when the quoted rate is APR with m compounding periods."
        },
        {
          "label": "3 · Apply",
          "text": "EAR incorporates the effect of compounding over the full year."
        },
        {
          "label": "4 · Check",
          "text": "Do not use the full APR as the monthly, quarterly, or semiannual periodic rate."
        }
      ],
      "examFocus": [
        "Be able to explain APR, Periodic Rate & EAR in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not use the full APR as the monthly, quarterly, or semiannual periodic rate."
      ]
    },
    "npv": {
      "module": "tvm",
      "title": "Net Present Value (NPV)",
      "vi": "Giá trị hiện tại ròng",
      "objective": "Define NPV and apply the course decision rule.",
      "intuition": "NPV compares the present value of what an investment brings in with the present value of what it costs.",
      "definition": "NPV is the difference between the present value of cash inflows and the present value of cash outflows.",
      "relationships": [
        "A positive NPV increases firm value under the lecture decision rule.",
        "When choosing among alternatives, take the alternative with the highest NPV."
      ],
      "commonMistake": "For mutually exclusive alternatives, do not simply choose the highest IRR.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slides 61–64",
        "preview": "assets/source-previews/tvm-slide-61.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Net Present Value",
          "html": "NPV = PV(Cash inflows) − PV(Cash outflows)"
        }
      ],
      "supporting": [
        "Time Value of Money workbook — NPV sheet with investment profiles",
        "LTTC_Time value and money_HKT.pdf · NPV section",
        "5 bộ đề năm trước LTTC.pdf · capital-budget / maximum total NPV question"
      ],
      "deepExplanation": [
        "Net Present Value compares the present value of benefits with the present value of costs. It is therefore a value-creation measure expressed at a common date, usually today.",
        "The decision logic is direct: a positive NPV means the discounted benefits exceed the required investment on the chosen discount-rate basis; a negative NPV means the opposite. For mutually exclusive alternatives, the lecture emphasizes comparing the value created rather than treating every positive-return project as equally desirable.",
        "A common exam trap is to add cash flows from different dates before discounting. NPV requires each dated cash flow to be discounted appropriately, then summed.",
        "Opportunity cost of capital is the return available on the next-best alternative of comparable risk. Discounting at that opportunity cost makes future cash flows comparable with the investment made today.",
        "A constrained-project-selection question is not solved by choosing the highest individual NPV or highest NPV per project blindly. Enumerate feasible combinations under the budget and maximize total NPV unless the course question specifies another constraint."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "NPV is the difference between the present value of cash inflows and the present value of cash outflows."
        },
        {
          "label": "2 · Connect",
          "text": "A positive NPV increases firm value under the lecture decision rule."
        },
        {
          "label": "3 · Apply",
          "text": "When choosing among alternatives, take the alternative with the highest NPV."
        },
        {
          "label": "4 · Check",
          "text": "For mutually exclusive alternatives, do not simply choose the highest IRR."
        }
      ],
      "examFocus": [
        "Be able to explain Net Present Value (NPV) in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: For mutually exclusive alternatives, do not simply choose the highest IRR."
      ],
      "theory": [
        {
          "title": "Capital rationing / budget constraint",
          "body": "Past papers include project-selection problems where a firm has a fixed investment budget. Positive NPV remains the value criterion, but when not every positive-NPV project can be funded, compare feasible combinations and choose the combination with the largest total NPV."
        }
      ]
    },
    "irr": {
      "module": "tvm",
      "title": "Internal Rate of Return (IRR)",
      "vi": "Tỷ suất hoàn vốn nội bộ",
      "objective": "Define IRR and state its decision rule and limitations.",
      "intuition": "IRR is the discount rate that balances discounted inflows and outflows, making NPV equal to zero.",
      "definition": "IRR is the interest rate that sets the net present value of the cash flows equal to zero.",
      "relationships": [
        "Invest if IRR is greater than the cost of capital.",
        "For mutually exclusive investments, the highest IRR may not correspond to the best NPV.",
        "Nonconventional cash flows can create multiple IRRs."
      ],
      "commonMistake": "Do not rank mutually exclusive projects only by IRR.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slides 68–75",
        "preview": null,
        "level": "Primary course source"
      },
      "supporting": [
        "Time Value of Money workbook — NPV and Multiple IRR sheets"
      ],
      "deepExplanation": [
        "IRR is the discount rate that makes an investment's NPV equal to zero. It converts the cash-flow pattern into a break-even rate of return rather than a dollar value.",
        "The IRR rule is useful only when interpreted with the required return and the structure of the cash flows. The course material also flags multiple-IRR and mutually exclusive-project issues, which are reasons not to apply the rule mechanically.",
        "For exam questions, separate the calculation from the decision. First identify the IRR; then compare it with the relevant required return, while checking whether the cash-flow pattern makes the rule well behaved."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "IRR is the interest rate that sets the net present value of the cash flows equal to zero."
        },
        {
          "label": "2 · Connect",
          "text": "Invest if IRR is greater than the cost of capital."
        },
        {
          "label": "3 · Apply",
          "text": "For mutually exclusive investments, the highest IRR may not correspond to the best NPV."
        },
        {
          "label": "4 · Check",
          "text": "Do not rank mutually exclusive projects only by IRR."
        }
      ],
      "examFocus": [
        "Be able to explain Internal Rate of Return (IRR) in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not rank mutually exclusive projects only by IRR."
      ]
    },
    "mortgage-arm": {
      "module": "personal",
      "title": "Adjustable-Rate Mortgage (ARM)",
      "vi": "Thế chấp lãi suất điều chỉnh",
      "objective": "Understand how a mortgage payment is recalculated when the rate changes after the first year.",
      "intuition": "An ARM can reset the interest rate while the remaining principal and remaining maturity are different from the original loan.",
      "definition": "For a one-year ARM, the initial rate applies only for the first year; the new payment is based on the remaining balance, new rate, and remaining term.",
      "relationships": [
        "Instructor Q&A: a $100,000, 30-year mortgage at 10.5% APR has a monthly payment of about $914.74 for the first year.",
        "If the rate resets to 12% after year one, the instructor states the new monthly payment for the remaining 29 years is about $1,027.19."
      ],
      "commonMistake": "Do not reuse the original loan principal when recalculating the second-year payment; use the remaining balance.",
      "source": {
        "file": "Q&A 1.pdf",
        "location": "Question 1 / instructor comment",
        "preview": "assets/source-previews-v02/qa1-page-1.png",
        "level": "Instructor-commented clarification"
      },
      "deepExplanation": [
        "Start with the course definition: For a one-year ARM, the initial rate applies only for the first year; the new payment is based on the remaining balance, new rate, and remaining term.",
        "The source then connects this concept to: Instructor Q&A: a $100,000, 30-year mortgage at 10.5% APR has a monthly payment of about $914.74 for the first year. If the rate resets to 12% after year one, the instructor states the new monthly payment for the remaining 29 years is about $1,027.19.",
        "Exam lens: Do not reuse the original loan principal when recalculating the second-year payment; use the remaining balance."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "For a one-year ARM, the initial rate applies only for the first year; the new payment is based on the remaining balance, new rate, and remaining term."
        },
        {
          "label": "2 · Connect",
          "text": "Instructor Q&A: a $100,000, 30-year mortgage at 10.5% APR has a monthly payment of about $914.74 for the first year."
        },
        {
          "label": "3 · Apply",
          "text": "If the rate resets to 12% after year one, the instructor states the new monthly payment for the remaining 29 years is about $1,027.19."
        },
        {
          "label": "4 · Check",
          "text": "Do not reuse the original loan principal when recalculating the second-year payment; use the remaining balance."
        }
      ],
      "examFocus": [
        "Be able to explain Adjustable-Rate Mortgage (ARM) in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not reuse the original loan principal when recalculating the second-year payment; use the remaining balance."
      ]
    },
    "retirement-annuity": {
      "module": "personal",
      "title": "Retirement: Lump Sum vs Annuity",
      "vi": "Nghỉ hưu: nhận một lần hay niên kim",
      "objective": "Compare a retirement lump sum with a stream of annual payments using time value of money.",
      "intuition": "Two retirement options can be compared by bringing both choices to the same point in time.",
      "definition": "The Q&A compares a $400,000 lump sum at retirement with 20 annual $40,000 payments, with the first payment made at retirement.",
      "relationships": [
        "Annuity timing must match the first-payment date.",
        "The indifference rate is the rate at which the present values of the two choices are equal."
      ],
      "commonMistake": "A first payment “at retirement” changes the timing relative to an ordinary annuity.",
      "source": {
        "file": "Q&A 1.pdf",
        "location": "Questions 2–3 / instructor comments",
        "preview": null,
        "level": "Instructor-commented clarification"
      },
      "deepExplanation": [
        "Start with the course definition: The Q&A compares a $400,000 lump sum at retirement with 20 annual $40,000 payments, with the first payment made at retirement.",
        "The source then connects this concept to: Annuity timing must match the first-payment date. The indifference rate is the rate at which the present values of the two choices are equal.",
        "Exam lens: A first payment “at retirement” changes the timing relative to an ordinary annuity."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The Q&A compares a $400,000 lump sum at retirement with 20 annual $40,000 payments, with the first payment made at retirement."
        },
        {
          "label": "2 · Connect",
          "text": "Annuity timing must match the first-payment date."
        },
        {
          "label": "3 · Apply",
          "text": "The indifference rate is the rate at which the present values of the two choices are equal."
        },
        {
          "label": "4 · Check",
          "text": "A first payment “at retirement” changes the timing relative to an ordinary annuity."
        }
      ],
      "examFocus": [
        "Be able to explain Retirement: Lump Sum vs Annuity in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: A first payment “at retirement” changes the timing relative to an ordinary annuity."
      ]
    },
    "loan-consolidation": {
      "module": "personal",
      "title": "Loan Consolidation & Rate Conversion",
      "vi": "Hợp nhất khoản vay và chuyển đổi lãi suất",
      "objective": "Convert an EAR to a monthly rate and consolidate dated obligations into equal monthly payments.",
      "intuition": "Loan consolidation is a timeline problem: value the existing obligations at one date, then replace them with an equivalent annuity.",
      "definition": "Q&A 3 treats an 8% effective annual rate as a monthly effective rate of approximately (1.08)^(1/12) − 1 = 0.643% per month.",
      "relationships": [
        "EAR-to-monthly conversion uses (1+EAR)^(1/12)−1.",
        "The instructor notes that converting EAR to an APR and then dividing by 12 introduces a small rounding difference."
      ],
      "commonMistake": "Do not divide an EAR directly by 12 as if it were an APR.",
      "source": {
        "file": "Q&A 3.pdf",
        "location": "Question d / instructor comment",
        "preview": "assets/source-previews-v02/qa3-page-1.png",
        "level": "Instructor-commented clarification"
      },
      "formula": [
        {
          "label": "Monthly rate from EAR",
          "html": "r<sub>m</sub> = (1 + EAR)<sup>1/12</sup> − 1"
        }
      ],
      "variables": [
        [
          "EAR",
          "Effective annual rate"
        ],
        [
          "rₘ",
          "Effective monthly rate"
        ]
      ],
      "deepExplanation": [
        "Start with the course definition: Q&A 3 treats an 8% effective annual rate as a monthly effective rate of approximately (1.08)^(1/12) − 1 = 0.643% per month.",
        "The source then connects this concept to: EAR-to-monthly conversion uses (1+EAR)^(1/12)−1. The instructor notes that converting EAR to an APR and then dividing by 12 introduces a small rounding difference.",
        "Exam lens: Do not divide an EAR directly by 12 as if it were an APR."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Q&A 3 treats an 8% effective annual rate as a monthly effective rate of approximately (1.08)^(1/12) − 1 = 0.643% per month."
        },
        {
          "label": "2 · Connect",
          "text": "EAR-to-monthly conversion uses (1+EAR)^(1/12)−1."
        },
        {
          "label": "3 · Apply",
          "text": "The instructor notes that converting EAR to an APR and then dividing by 12 introduces a small rounding difference."
        },
        {
          "label": "4 · Check",
          "text": "Do not divide an EAR directly by 12 as if it were an APR."
        }
      ],
      "examFocus": [
        "Be able to explain Loan Consolidation & Rate Conversion in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not divide an EAR directly by 12 as if it were an APR."
      ]
    },
    "mortgage-payoff": {
      "module": "personal",
      "title": "Mortgage Payoff Before a Scheduled Payment",
      "vi": "Tất toán thế chấp trước kỳ trả nợ",
      "objective": "Value the remaining mortgage obligations immediately before a scheduled payment.",
      "intuition": "The payoff amount is the value, at the payoff date, of remaining promised payments, taking the exact timing of the next payment into account.",
      "definition": "In Q&A 3, the instructor confirms a method that values the remaining payments immediately before the 12th annual payment is due.",
      "relationships": [
        "A payment due immediately is not discounted like later payments.",
        "The remaining annuity must use the number of payments still outstanding."
      ],
      "commonMistake": "“Immediately before” a payment date is a timing cue: the imminent payment is due at that date.",
      "source": {
        "file": "Q&A 3.pdf",
        "location": "Question e / instructor comment",
        "preview": "assets/source-previews-v02/qa3-page-2.png",
        "level": "Instructor-commented clarification"
      },
      "deepExplanation": [
        "Start with the course definition: In Q&A 3, the instructor confirms a method that values the remaining payments immediately before the 12th annual payment is due.",
        "The source then connects this concept to: A payment due immediately is not discounted like later payments. The remaining annuity must use the number of payments still outstanding.",
        "Exam lens: “Immediately before” a payment date is a timing cue: the imminent payment is due at that date.",
        "Past papers repeatedly use the same architecture: calculate the regular payment from the original loan, then calculate the payoff as the value of remaining payments immediately after a specified payment.",
        "Be precise about “before” versus “after” a payment. Immediately after payment k, there are n−k scheduled payments left; immediately before payment k, payment k itself is still outstanding."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "In Q&A 3, the instructor confirms a method that values the remaining payments immediately before the 12th annual payment is due."
        },
        {
          "label": "2 · Connect",
          "text": "A payment due immediately is not discounted like later payments."
        },
        {
          "label": "3 · Apply",
          "text": "The remaining annuity must use the number of payments still outstanding."
        },
        {
          "label": "4 · Check",
          "text": "“Immediately before” a payment date is a timing cue: the imminent payment is due at that date."
        }
      ],
      "examFocus": [
        "Be able to explain Mortgage Payoff Before a Scheduled Payment in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: “Immediately before” a payment date is a timing cue: the imminent payment is due at that date."
      ],
      "supporting": [
        "5 bộ đề năm trước LTTC.pdf · loan payoff written questions",
        "LTTC_Time value and money_HKT.pdf · amortization section"
      ]
    },
    "financing-rebate": {
      "module": "personal",
      "title": "Low-Rate Financing vs Cash Rebate",
      "vi": "Lãi suất ưu đãi hay hoàn tiền",
      "objective": "Compare dealer financing with a cash rebate financed at a different interest rate.",
      "intuition": "The two offers are economically comparable only after valuing their payment streams on the same basis.",
      "definition": "The instructor Q&A compares a $23,000 car financed for 3 years at 2.9% with a cash-rebate alternative financed at a 9% bank rate.",
      "relationships": [
        "Instructor comment: the cash rebate must exceed about $3,627.47 to entice the customer away from the 2.9% financing offer in that problem."
      ],
      "commonMistake": "Do not compare “future value minus principal” when the offers have different financing rates and payment streams.",
      "source": {
        "file": "Q&A 1.pdf",
        "location": "Question 5 / instructor comment",
        "preview": null,
        "level": "Instructor-commented clarification"
      },
      "deepExplanation": [
        "Start with the course definition: The instructor Q&A compares a $23,000 car financed for 3 years at 2.9% with a cash-rebate alternative financed at a 9% bank rate.",
        "The source then connects this concept to: Instructor comment: the cash rebate must exceed about $3,627.47 to entice the customer away from the 2.9% financing offer in that problem.",
        "Exam lens: Do not compare “future value minus principal” when the offers have different financing rates and payment streams."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The instructor Q&A compares a $23,000 car financed for 3 years at 2.9% with a cash-rebate alternative financed at a 9% bank rate."
        },
        {
          "label": "2 · Connect",
          "text": "Instructor comment: the cash rebate must exceed about $3,627.47 to entice the customer away from the 2.9% financing offer in that problem."
        },
        {
          "label": "3 · Apply",
          "text": "Compare dealer financing with a cash rebate financed at a different interest rate."
        },
        {
          "label": "4 · Check",
          "text": "Do not compare “future value minus principal” when the offers have different financing rates and payment streams."
        }
      ],
      "examFocus": [
        "Be able to explain Low-Rate Financing vs Cash Rebate in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not compare “future value minus principal” when the offers have different financing rates and payment streams."
      ]
    },
    "interest-only-personal": {
      "module": "personal",
      "title": "Interest-Only Loan Cash Flows",
      "vi": "Dòng tiền khoản vay chỉ trả lãi",
      "objective": "Map the periodic interest and maturity principal for an interest-only loan.",
      "intuition": "Interest-only loans separate periodic interest payments from the principal repayment at maturity.",
      "definition": "The lecture example borrows VND 5 billion for 5 years at 15% and pays VND 750 million interest each year plus VND 5 billion principal at the end of year 5.",
      "relationships": [
        "Annual interest payment = principal × interest rate.",
        "Principal remains outstanding until maturity."
      ],
      "commonMistake": "Do not amortize the principal if the loan is explicitly interest-only.",
      "source": {
        "file": "2023 Time Value of Money.pdf",
        "location": "Slide 41",
        "preview": null,
        "level": "Primary course source"
      },
      "supporting": [
        "Time Value of Money workbook — Loan and Deposits sheet"
      ],
      "deepExplanation": [
        "Start with the course definition: The lecture example borrows VND 5 billion for 5 years at 15% and pays VND 750 million interest each year plus VND 5 billion principal at the end of year 5.",
        "The source then connects this concept to: Annual interest payment = principal × interest rate. Principal remains outstanding until maturity.",
        "Exam lens: Do not amortize the principal if the loan is explicitly interest-only."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The lecture example borrows VND 5 billion for 5 years at 15% and pays VND 750 million interest each year plus VND 5 billion principal at the end of year 5."
        },
        {
          "label": "2 · Connect",
          "text": "Annual interest payment = principal × interest rate."
        },
        {
          "label": "3 · Apply",
          "text": "Principal remains outstanding until maturity."
        },
        {
          "label": "4 · Check",
          "text": "Do not amortize the principal if the loan is explicitly interest-only."
        }
      ],
      "examFocus": [
        "Be able to explain Interest-Only Loan Cash Flows in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not amortize the principal if the loan is explicitly interest-only."
      ]
    },
    "credit-card-mechanics": {
      "module": "personal",
      "title": "Credit-Card Balance Mechanics",
      "vi": "Cơ chế dư nợ thẻ tín dụng",
      "objective": "Understand why a low minimum payment can fail to reduce a high-interest credit-card balance.",
      "intuition": "The workbook illustrates a balance that accrues monthly interest while the required minimum payment is only a small percentage of the balance.",
      "definition": "The uploaded Credit Card sheet uses a 30% annual credit-card rate (2.5% per month) and a 2% required minimum balance/payment setting to illustrate balance dynamics.",
      "relationships": [
        "Interest is added to the outstanding balance before the ending balance is determined.",
        "When the payment is too small relative to interest, the balance can fail to decline."
      ],
      "commonMistake": "Treat this workbook as a learning/practice source, not as an official answer key.",
      "source": {
        "file": "Copy of Time Value of Money.xlsx",
        "location": "Sheet “Credit Card”",
        "preview": null,
        "level": "Practice workbook"
      },
      "deepExplanation": [
        "Start with the course definition: The uploaded Credit Card sheet uses a 30% annual credit-card rate (2.5% per month) and a 2% required minimum balance/payment setting to illustrate balance dynamics.",
        "The source then connects this concept to: Interest is added to the outstanding balance before the ending balance is determined. When the payment is too small relative to interest, the balance can fail to decline.",
        "Exam lens: Treat this workbook as a learning/practice source, not as an official answer key."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The uploaded Credit Card sheet uses a 30% annual credit-card rate (2.5% per month) and a 2% required minimum balance/payment setting to illustrate balance dynamics."
        },
        {
          "label": "2 · Connect",
          "text": "Interest is added to the outstanding balance before the ending balance is determined."
        },
        {
          "label": "3 · Apply",
          "text": "When the payment is too small relative to interest, the balance can fail to decline."
        },
        {
          "label": "4 · Check",
          "text": "Treat this workbook as a learning/practice source, not as an official answer key."
        }
      ],
      "examFocus": [
        "Be able to explain Credit-Card Balance Mechanics in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Treat this workbook as a learning/practice source, not as an official answer key."
      ]
    },
    "growing-savings": {
      "module": "personal",
      "title": "Growing Savings Plan",
      "vi": "Kế hoạch tiết kiệm tăng dần",
      "objective": "Use a growing-annuity framework for deposits that rise at a constant rate.",
      "intuition": "A savings plan can grow each year with income; the cash-flow sequence then matches the course’s growing-annuity structure.",
      "definition": "Q&A 3 describes annual deposits beginning at $500 and increasing 10% each year, with 5% annual compounding, and points students to the growing-annuity approach or a spreadsheet.",
      "relationships": [
        "The first cash flow does not grow; the last cash flow reflects N−1 periods of growth."
      ],
      "commonMistake": "Count the growth periods separately from the investment/discount periods.",
      "source": {
        "file": "Q&A 3.pdf",
        "location": "Question f / instructor comment",
        "preview": null,
        "level": "Instructor-commented clarification"
      },
      "formula": [
        {
          "label": "Future value of growing annuity (Q&A derivation)",
          "html": "FV = C/(r−g) × [(1+r)<sup>n</sup> − (1+g)<sup>n</sup>]"
        }
      ],
      "variables": [
        [
          "C",
          "Initial periodic deposit"
        ],
        [
          "r",
          "Return per period"
        ],
        [
          "g",
          "Deposit growth rate"
        ],
        [
          "n",
          "Number of deposits"
        ]
      ],
      "deepExplanation": [
        "Start with the course definition: Q&A 3 describes annual deposits beginning at $500 and increasing 10% each year, with 5% annual compounding, and points students to the growing-annuity approach or a spreadsheet.",
        "The source then connects this concept to: The first cash flow does not grow; the last cash flow reflects N−1 periods of growth.",
        "Exam lens: Count the growth periods separately from the investment/discount periods."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Q&A 3 describes annual deposits beginning at $500 and increasing 10% each year, with 5% annual compounding, and points students to the growing-annuity approach or a spreadsheet."
        },
        {
          "label": "2 · Connect",
          "text": "The first cash flow does not grow; the last cash flow reflects N−1 periods of growth."
        },
        {
          "label": "3 · Apply",
          "text": "Use a growing-annuity framework for deposits that rise at a constant rate."
        },
        {
          "label": "4 · Check",
          "text": "Count the growth periods separately from the investment/discount periods."
        }
      ],
      "examFocus": [
        "Be able to explain Growing Savings Plan in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Count the growth periods separately from the investment/discount periods."
      ]
    },
    "market-role": {
      "module": "markets",
      "title": "Role of Financial Markets",
      "vi": "Vai trò của thị trường tài chính",
      "objective": "Explain how financial markets move funds between surplus and deficit units.",
      "intuition": "Markets channel available funds from people with excess funds and limited investment opportunities toward people with investment opportunities and insufficient funds.",
      "definition": "Financial markets are markets in which funds are moved from people who have an excess of available funds to people who have investment opportunities and lack funds.",
      "relationships": [
        "Financial markets are structures through which funds flow."
      ],
      "commonMistake": "Do not define a financial market only as a place where stocks trade.",
      "source": {
        "file": "2023 Understanding Financial Markets and Financial Institutions.pdf",
        "location": "Slide 4",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Financial markets help move funds from units with surplus funds toward units that need financing. The market does not merely provide a place to trade; it supports resource allocation by connecting savers and users of funds through financial claims.",
        "The supporting textbook distinguishes direct finance, where borrowers obtain funds by issuing securities to lenders in markets, from indirect finance, where an intermediary stands between saver and borrower.",
        "When solving classification questions, ask first who receives the funds and whether a new financial claim is being issued or an existing claim is simply changing owners."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Financial markets are markets in which funds are moved from people who have an excess of available funds to people who have investment opportunities and lack funds."
        },
        {
          "label": "2 · Connect",
          "text": "Financial markets are structures through which funds flow."
        },
        {
          "label": "3 · Apply",
          "text": "Explain how financial markets move funds between surplus and deficit units."
        },
        {
          "label": "4 · Check",
          "text": "Do not define a financial market only as a place where stocks trade."
        }
      ],
      "examFocus": [
        "Be able to explain Role of Financial Markets in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not define a financial market only as a place where stocks trade."
      ]
    },
    "market-structure": {
      "module": "markets",
      "title": "Debt, Equity, Primary, Secondary, Exchange & OTC",
      "vi": "Cấu trúc thị trường tài chính",
      "objective": "Differentiate the course’s major structural dimensions of financial markets.",
      "intuition": "A market can be classified by the claim being traded, whether the claim is new or existing, and how trading is organized.",
      "definition": "The lecture distinguishes debt versus equity, primary versus secondary markets, and money versus capital markets.",
      "relationships": [
        "Debt instruments promise specified payments and have maturity dates.",
        "Equity is a residual claim on net income and assets and has no maturity date.",
        "Primary markets sell new issues to initial buyers.",
        "Secondary markets trade existing securities among investors.",
        "Exchanges centralize trading; OTC markets connect dealers at different locations."
      ],
      "commonMistake": "Primary versus secondary describes issue status, while exchange versus OTC describes the trading venue/structure.",
      "source": {
        "file": "2023 Understanding Financial Markets and Financial Institutions.pdf",
        "location": "Slides 5–8",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "The course classifies markets along several independent dimensions. Debt versus equity describes the type of claim. Primary versus secondary describes whether the security is newly issued or already outstanding. Exchange versus OTC describes the trading arrangement.",
        "These dimensions should not be collapsed. A debt instrument can trade in a primary or secondary market; equity can trade on an exchange or in another arrangement. The labels answer different questions about the same transaction.",
        "For primary-versus-secondary exam questions, focus on whether the issuer receives funds from the transaction. In a secondary-market trade, ownership changes but the issuing firm does not receive the resale proceeds.",
        "Past papers repeatedly test the economic role of the secondary market: the issuing firm normally does not receive cash from a secondary-market trade, but a liquid/high-priced secondary market can improve future primary financing because investors value tradability and market prices provide information."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The lecture distinguishes debt versus equity, primary versus secondary markets, and money versus capital markets."
        },
        {
          "label": "2 · Connect",
          "text": "Debt instruments promise specified payments and have maturity dates."
        },
        {
          "label": "3 · Apply",
          "text": "Equity is a residual claim on net income and assets and has no maturity date."
        },
        {
          "label": "4 · Check",
          "text": "Primary versus secondary describes issue status, while exchange versus OTC describes the trading venue/structure."
        }
      ],
      "examFocus": [
        "Be able to explain Debt, Equity, Primary, Secondary, Exchange & OTC in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Primary versus secondary describes issue status, while exchange versus OTC describes the trading venue/structure."
      ],
      "supporting": [
        "LTTC_Financial market_HKT.pdf · market structure",
        "5 bộ đề năm trước LTTC.pdf · repeated primary/secondary and OTC classification questions"
      ]
    },
    "money-capital-markets": {
      "module": "markets",
      "title": "Money Markets vs Capital Markets",
      "vi": "Thị trường tiền tệ và thị trường vốn",
      "objective": "Distinguish short-term liquid debt markets from intermediate/long-term debt and equity markets.",
      "intuition": "Money markets warehouse short-term surplus funds and provide temporary financing; capital markets fund longer-horizon borrowing and equity investment.",
      "definition": "Money markets are markets for short-term, highly liquid debt securities; capital markets are markets for intermediate- and long-term debt and corporate stocks.",
      "relationships": [
        "Money-market securities generally mature in one year or less and have high liquidity.",
        "Capital-market instruments have maturities greater than one year or are equity instruments."
      ],
      "commonMistake": "Do not classify corporate stock as a money-market instrument merely because it trades frequently.",
      "source": {
        "file": "2023 Understanding Financial Markets and Financial Institutions.pdf",
        "location": "Slides 9–17",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Money markets are markets for short-term, highly liquid debt securities; capital markets are markets for intermediate- and long-term debt and corporate stocks.",
        "The source then connects this concept to: Money-market securities generally mature in one year or less and have high liquidity. Capital-market instruments have maturities greater than one year or are equity instruments.",
        "Exam lens: Do not classify corporate stock as a money-market instrument merely because it trades frequently."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Money markets are markets for short-term, highly liquid debt securities; capital markets are markets for intermediate- and long-term debt and corporate stocks."
        },
        {
          "label": "2 · Connect",
          "text": "Money-market securities generally mature in one year or less and have high liquidity."
        },
        {
          "label": "3 · Apply",
          "text": "Capital-market instruments have maturities greater than one year or are equity instruments."
        },
        {
          "label": "4 · Check",
          "text": "Do not classify corporate stock as a money-market instrument merely because it trades frequently."
        }
      ],
      "examFocus": [
        "Be able to explain Money Markets vs Capital Markets in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not classify corporate stock as a money-market instrument merely because it trades frequently."
      ]
    },
    "fx-derivatives": {
      "module": "markets",
      "title": "Foreign Exchange & Derivative Markets",
      "vi": "Ngoại hối và thị trường phái sinh",
      "objective": "Define foreign-exchange risk and derivative securities using the course wording.",
      "intuition": "Foreign investments expose cash flows to exchange-rate changes; derivatives link their payoffs to another security or asset/cash flow.",
      "definition": "A derivative security is a financial security whose payoff is linked to another, previously issued security.",
      "relationships": [
        "Foreign exchange risk is the sensitivity of foreign-investment cash flows to changes in currency prices.",
        "Examples of derivatives listed in the lecture include futures, options, swaps, and mortgage-backed securities."
      ],
      "commonMistake": "A derivative is defined by its linked payoff, not by being “high risk” alone.",
      "source": {
        "file": "2023 Understanding Financial Markets and Financial Institutions.pdf",
        "location": "Slides 18–20",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: A derivative security is a financial security whose payoff is linked to another, previously issued security.",
        "The source then connects this concept to: Foreign exchange risk is the sensitivity of foreign-investment cash flows to changes in currency prices. Examples of derivatives listed in the lecture include futures, options, swaps, and mortgage-backed securities.",
        "Exam lens: A derivative is defined by its linked payoff, not by being “high risk” alone."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "A derivative security is a financial security whose payoff is linked to another, previously issued security."
        },
        {
          "label": "2 · Connect",
          "text": "Foreign exchange risk is the sensitivity of foreign-investment cash flows to changes in currency prices."
        },
        {
          "label": "3 · Apply",
          "text": "Examples of derivatives listed in the lecture include futures, options, swaps, and mortgage-backed securities."
        },
        {
          "label": "4 · Check",
          "text": "A derivative is defined by its linked payoff, not by being “high risk” alone."
        }
      ],
      "examFocus": [
        "Be able to explain Foreign Exchange & Derivative Markets in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: A derivative is defined by its linked payoff, not by being “high risk” alone."
      ]
    },
    "market-rates": {
      "module": "markets",
      "title": "Interest Rates & Holding-Period Returns",
      "vi": "Lãi suất và lợi suất nắm giữ",
      "objective": "Separate promised interest rates from realized returns on risky assets.",
      "intuition": "Some financial assets promise an interest rate; risky assets often deliver returns through periodic income plus capital gains or losses.",
      "definition": "A holding period return is the return earned from holding an asset for a single specified period of time.",
      "relationships": [
        "Risky-asset return has two components in the lecture: periodic income and price change."
      ],
      "commonMistake": "Do not treat every asset return as a promised interest rate.",
      "source": {
        "file": "2023 Understanding Financial Markets and Financial Institutions.pdf",
        "location": "Slides 21–22",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: A holding period return is the return earned from holding an asset for a single specified period of time.",
        "The source then connects this concept to: Risky-asset return has two components in the lecture: periodic income and price change.",
        "Exam lens: Do not treat every asset return as a promised interest rate."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "A holding period return is the return earned from holding an asset for a single specified period of time."
        },
        {
          "label": "2 · Connect",
          "text": "Risky-asset return has two components in the lecture: periodic income and price change."
        },
        {
          "label": "3 · Apply",
          "text": "Separate promised interest rates from realized returns on risky assets."
        },
        {
          "label": "4 · Check",
          "text": "Do not treat every asset return as a promised interest rate."
        }
      ],
      "examFocus": [
        "Be able to explain Interest Rates & Holding-Period Returns in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not treat every asset return as a promised interest rate."
      ]
    },
    "international-markets": {
      "module": "markets",
      "title": "Internationalization of Financial Markets",
      "vi": "Quốc tế hóa thị trường tài chính",
      "objective": "Distinguish foreign bonds, Eurobonds, Eurocurrencies, and Eurodollars.",
      "intuition": "The naming convention depends on where a security is sold and the currency in which it is denominated or deposited.",
      "definition": "A foreign bond is sold in a foreign country and denominated in that country’s currency; a Eurobond is denominated in a currency other than that of the country in which it is sold.",
      "relationships": [
        "Eurocurrencies are foreign currencies deposited in banks outside the home country.",
        "Eurodollars are U.S. dollars deposited in foreign banks outside the U.S. or foreign branches of U.S. banks."
      ],
      "commonMistake": "“Euro” in Eurodollar does not mean the euro currency.",
      "source": {
        "file": "2023 Understanding Financial Markets and Financial Institutions.pdf",
        "location": "Slide 23",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: A foreign bond is sold in a foreign country and denominated in that country’s currency; a Eurobond is denominated in a currency other than that of the country in which it is sold.",
        "The source then connects this concept to: Eurocurrencies are foreign currencies deposited in banks outside the home country. Eurodollars are U.S. dollars deposited in foreign banks outside the U.S. or foreign branches of U.S. banks.",
        "Exam lens: “Euro” in Eurodollar does not mean the euro currency."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "A foreign bond is sold in a foreign country and denominated in that country’s currency; a Eurobond is denominated in a currency other than that of the country in which it is sold."
        },
        {
          "label": "2 · Connect",
          "text": "Eurocurrencies are foreign currencies deposited in banks outside the home country."
        },
        {
          "label": "3 · Apply",
          "text": "Eurodollars are U.S. dollars deposited in foreign banks outside the U.S. or foreign branches of U.S. banks."
        },
        {
          "label": "4 · Check",
          "text": "“Euro” in Eurodollar does not mean the euro currency."
        }
      ],
      "examFocus": [
        "Be able to explain Internationalization of Financial Markets in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: “Euro” in Eurodollar does not mean the euro currency."
      ]
    },
    "financial-institutions": {
      "module": "markets",
      "title": "Financial Institutions & Intermediation",
      "vi": "Định chế và trung gian tài chính",
      "objective": "Explain why financial institutions channel funds and what frictions they address.",
      "intuition": "Without intermediaries, monitoring costs, liquidity costs, and price risk would reduce the amount of funds flowing between suppliers and users.",
      "definition": "Financial institutions perform the essential function of channeling funds from those with surplus funds to those with shortages of funds.",
      "relationships": [
        "Depository institutions take deposits and make loans.",
        "Intermediaries can reduce transaction/information costs and help transform maturities and diversify risk."
      ],
      "commonMistake": "Do not think of intermediaries only as banks; the course includes multiple types of financial institutions.",
      "source": {
        "file": "2023 Understanding Financial Markets and Financial Institutions.pdf",
        "location": "Slides 27–31",
        "preview": "assets/source-previews-v02/markets-slide-27.png",
        "level": "Primary course source"
      },
      "supporting": [
        "The Economics of Money, Banking, and Financial Markets — Mishkin & Serletis, Chapters 2 and 8",
        "LTTC_Financial market_HKT.pdf · §4 Types of financial institutions"
      ],
      "deepExplanation": [
        "Financial institutions channel funds and provide services that can make financing possible when direct market transactions would be costly or information-intensive.",
        "Mishkin's supporting framework highlights transaction-cost reduction, risk sharing, and information production. Economies of scale can lower transaction costs per unit, while screening and monitoring can reduce losses associated with asymmetric information.",
        "Do not define an intermediary only by the label 'bank.' The course includes several categories of financial institutions with different contractual forms and services.",
        "A common exam trap is to treat every financial institution as a bank. Start by asking how the institution obtains funds and what it does with them.",
        "Commercial banks commonly transform maturities by funding themselves with relatively short-maturity deposits while making longer-maturity loans, which creates liquidity-management needs."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Financial institutions perform the essential function of channeling funds from those with surplus funds to those with shortages of funds."
        },
        {
          "label": "2 · Connect",
          "text": "Depository institutions take deposits and make loans."
        },
        {
          "label": "3 · Apply",
          "text": "Intermediaries can reduce transaction/information costs and help transform maturities and diversify risk."
        },
        {
          "label": "4 · Check",
          "text": "Do not think of intermediaries only as banks; the course includes multiple types of financial institutions."
        }
      ],
      "examFocus": [
        "Be able to explain Financial Institutions & Intermediation in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not think of intermediaries only as banks; the course includes multiple types of financial institutions."
      ],
      "theory": [
        {
          "title": "Depository institutions",
          "body": "Commercial banks, savings institutions, and credit unions accept deposits or similar funding and use funds to make loans and hold securities."
        },
        {
          "title": "Contractual savings institutions",
          "body": "Insurance companies and pension funds receive funds on a contractual basis and invest to meet future obligations."
        },
        {
          "title": "Investment intermediaries",
          "body": "Finance companies, mutual funds, money-market mutual funds, hedge funds, securities firms, and investment banks perform different funding, pooling, trading, or issuance functions."
        },
        {
          "title": "Investment bank distinction",
          "body": "An investment bank does not perform the classic deposit-and-loan intermediation role. It advises issuers and underwrites securities, purchasing issues for resale and earning fees from issuance and corporate transactions."
        }
      ]
    },
    "insurance-pensions": {
      "module": "markets",
      "title": "Insurance Companies & Pension Funds",
      "vi": "Công ty bảo hiểm và quỹ hưu trí",
      "objective": "Distinguish key insurance and pension-fund functions from the lecture.",
      "intuition": "Contractual savings institutions collect funds at periodic intervals and invest them against promised future obligations.",
      "definition": "Insurance companies provide insurance and investment services for a premium; pension funds accept contributions today in exchange for promised future payments.",
      "relationships": [
        "Life insurers tend to hold longer-maturity assets than property and casualty insurers because their liabilities are longer dated.",
        "Adverse selection and moral hazard create important problems in insurance.",
        "Deductibles and coinsurance make insured parties bear part of losses.",
        "Pension funds pool savings and help diversify risk."
      ],
      "commonMistake": "Match asset maturity to the timing of expected claims; life and property/casualty insurers do not have identical liability timing.",
      "source": {
        "file": "2023 Understanding Financial Markets and Financial Institutions.pdf",
        "location": "Slides 32–43",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Insurance companies provide insurance and investment services for a premium; pension funds accept contributions today in exchange for promised future payments.",
        "The source then connects this concept to: Life insurers tend to hold longer-maturity assets than property and casualty insurers because their liabilities are longer dated. Adverse selection and moral hazard create important problems in insurance. Deductibles and coinsurance make insured parties bear part of losses.",
        "Exam lens: Match asset maturity to the timing of expected claims; life and property/casualty insurers do not have identical liability timing."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Insurance companies provide insurance and investment services for a premium; pension funds accept contributions today in exchange for promised future payments."
        },
        {
          "label": "2 · Connect",
          "text": "Life insurers tend to hold longer-maturity assets than property and casualty insurers because their liabilities are longer dated."
        },
        {
          "label": "3 · Apply",
          "text": "Adverse selection and moral hazard create important problems in insurance."
        },
        {
          "label": "4 · Check",
          "text": "Match asset maturity to the timing of expected claims; life and property/casualty insurers do not have identical liability timing."
        }
      ],
      "examFocus": [
        "Be able to explain Insurance Companies & Pension Funds in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Match asset maturity to the timing of expected claims; life and property/casualty insurers do not have identical liability timing."
      ]
    },
    "finance-companies-securities": {
      "module": "markets",
      "title": "Finance Companies, Mutual Funds & Investment Banks",
      "vi": "Công ty tài chính, quỹ tương hỗ và ngân hàng đầu tư",
      "objective": "Differentiate major nonbank financial institutions in the lecture.",
      "intuition": "Different institutions specialize in screening borrowers, pooling investment funds, providing market access, or raising and restructuring capital.",
      "definition": "Finance companies raise funds in financial markets and make loans; mutual funds sell shares and purchase diversified portfolios; investment banks raise funds and provide securities/trading/advisory services.",
      "relationships": [
        "Finance companies specialize in consumer, business, and sales loans.",
        "Mutual funds pool resources and can lower transaction costs while providing diversification.",
        "Open-end funds can issue/redeem shares; closed-end funds have a fixed number of shares traded in secondary markets.",
        "Investment banking activities include public/private offerings, trading, M&A/restructuring advice, merchant banking, and securities finance."
      ],
      "commonMistake": "Do not confuse a mutual fund share with a direct ownership position in each underlying security.",
      "source": {
        "file": "2023 Understanding Financial Markets and Financial Institutions.pdf",
        "location": "Slides 44–55",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Finance companies raise funds in financial markets and make loans; mutual funds sell shares and purchase diversified portfolios; investment banks raise funds and provide securities/trading/advisory services.",
        "The source then connects this concept to: Finance companies specialize in consumer, business, and sales loans. Mutual funds pool resources and can lower transaction costs while providing diversification. Open-end funds can issue/redeem shares; closed-end funds have a fixed number of shares traded in secondary markets.",
        "Exam lens: Do not confuse a mutual fund share with a direct ownership position in each underlying security."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Finance companies raise funds in financial markets and make loans; mutual funds sell shares and purchase diversified portfolios; investment banks raise funds and provide securities/trading/advisory services."
        },
        {
          "label": "2 · Connect",
          "text": "Finance companies specialize in consumer, business, and sales loans."
        },
        {
          "label": "3 · Apply",
          "text": "Mutual funds pool resources and can lower transaction costs while providing diversification."
        },
        {
          "label": "4 · Check",
          "text": "Do not confuse a mutual fund share with a direct ownership position in each underlying security."
        }
      ],
      "examFocus": [
        "Be able to explain Finance Companies, Mutual Funds & Investment Banks in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not confuse a mutual fund share with a direct ownership position in each underlying security."
      ]
    },
    "asymmetric-information": {
      "module": "markets",
      "title": "Asymmetric Information: Adverse Selection & Moral Hazard",
      "vi": "Thông tin bất cân xứng: lựa chọn bất lợi và rủi ro đạo đức",
      "objective": "Distinguish asymmetric information before and after a transaction and link it to financial intermediation.",
      "intuition": "Information problems can prevent good borrowers/projects from receiving funds and can change borrower behavior after funding.",
      "definition": "Adverse selection is asymmetric information before the transaction takes place; moral hazard is asymmetric information after the transaction takes place.",
      "relationships": [
        "The lemons problem illustrates adverse selection when quality cannot be assessed.",
        "Financial intermediaries can screen and monitor borrowers to reduce information problems.",
        "Collateral and restrictive contracts are responses to information problems."
      ],
      "commonMistake": "Use timing: adverse selection is before the transaction; moral hazard is after.",
      "source": {
        "file": "Asymmetric Infos.pdf",
        "location": "Sections “Asymmetric Information”, “Adverse Selection”, and “Moral Hazard”",
        "preview": null,
        "level": "Supplementary lecture / course reading"
      },
      "supporting": [
        "The Economics of Money, Banking, and Financial Markets — Chapter 8",
        "Original tutorial: Es FOR FM & FIs.docx",
        "5 bộ đề năm trước LTTC.pdf · adverse selection, moral hazard, collateral and principal-agent questions"
      ],
      "deepExplanation": [
        "Asymmetric information exists when one party to a financial transaction has better information than the other. The timing of the information problem determines the key label.",
        "Adverse selection is the before-transaction problem: parties with undesirable characteristics may be more eager to transact, making selection difficult. Moral hazard is the after-transaction problem: once funds or insurance are provided, behavior may change in ways that increase risk to the other party.",
        "The course and supporting textbook connect these problems to screening, monitoring, collateral, contractual restrictions, deductibles, and other mechanisms. In exam questions, first identify whether the problem occurs before or after the contract.",
        "Past papers use unsecured credit and bank financing to test the distinction: adverse selection concerns hidden borrower type or project quality before lending; moral hazard concerns hidden actions after funds are provided.",
        "Collateral can reduce lender loss and borrower incentives, but it is not perfect. If collateral value is volatile or highly correlated with borrower distress, the protection may deteriorate exactly when it is needed."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Adverse selection is asymmetric information before the transaction takes place; moral hazard is asymmetric information after the transaction takes place."
        },
        {
          "label": "2 · Connect",
          "text": "The lemons problem illustrates adverse selection when quality cannot be assessed."
        },
        {
          "label": "3 · Apply",
          "text": "Financial intermediaries can screen and monitor borrowers to reduce information problems."
        },
        {
          "label": "4 · Check",
          "text": "Use timing: adverse selection is before the transaction; moral hazard is after."
        }
      ],
      "examFocus": [
        "Be able to explain Asymmetric Information: Adverse Selection & Moral Hazard in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Use timing: adverse selection is before the transaction; moral hazard is after."
      ]
    },
    "return-measures": {
      "module": "valuation",
      "title": "Required, Expected & Realized Rates of Return",
      "vi": "Tỷ suất sinh lời yêu cầu, kỳ vọng và thực tế",
      "objective": "Differentiate ex ante required/expected returns from ex post realized return.",
      "intuition": "The lecture uses different rate concepts depending on whether the goal is fair valuation, expectation, or measurement after the investment occurs.",
      "definition": "The required rate of return is the interest rate used to find fair present value and reflects the risks associated with the security.",
      "relationships": [
        "Required return is an ex ante rate used in valuation.",
        "Expected return is what a participant expects to earn at the current market price.",
        "Realized return is the rate actually earned after the investment has occurred.",
        "Market efficiency describes the speed with which prices adjust to unexpected news."
      ],
      "commonMistake": "Do not label a realized return as “required” simply because it happened to equal the required return.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 3–6",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: The required rate of return is the interest rate used to find fair present value and reflects the risks associated with the security.",
        "The source then connects this concept to: Required return is an ex ante rate used in valuation. Expected return is what a participant expects to earn at the current market price. Realized return is the rate actually earned after the investment has occurred.",
        "Exam lens: Do not label a realized return as “required” simply because it happened to equal the required return."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The required rate of return is the interest rate used to find fair present value and reflects the risks associated with the security."
        },
        {
          "label": "2 · Connect",
          "text": "Required return is an ex ante rate used in valuation."
        },
        {
          "label": "3 · Apply",
          "text": "Expected return is what a participant expects to earn at the current market price."
        },
        {
          "label": "4 · Check",
          "text": "Do not label a realized return as “required” simply because it happened to equal the required return."
        }
      ],
      "examFocus": [
        "Be able to explain Required, Expected & Realized Rates of Return in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not label a realized return as “required” simply because it happened to equal the required return."
      ]
    },
    "bond-valuation": {
      "module": "valuation",
      "title": "Coupon Bond Valuation",
      "vi": "Định giá trái phiếu coupon",
      "objective": "Price a coupon bond as the present value of coupons plus par value.",
      "intuition": "Coupon payments form an annuity, while face value is a lump sum paid at maturity.",
      "definition": "Fair value of a bond is the present value of all promised/projected cash flows discounted at the required rate of return.",
      "relationships": [
        "Promised bond cash flows come from coupon payments and the maturity value.",
        "Use yield to maturity as the discount rate in the lecture’s bond-pricing steps."
      ],
      "commonMistake": "Use a periodic coupon and periodic required return consistent with the payment frequency.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 7–15",
        "preview": "assets/source-previews-v02/valuation-slide-15.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Coupon Bond Price",
          "html": "P = M/(1+r)<sup>n</sup> + INT × [1/r × (1 − 1/(1+r)<sup>n</sup>)]"
        }
      ],
      "variables": [
        [
          "P",
          "Bond price"
        ],
        [
          "M",
          "Par/face value"
        ],
        [
          "INT",
          "Coupon payment per period"
        ],
        [
          "r",
          "Required return per payment period"
        ],
        [
          "n",
          "Number of payments"
        ]
      ],
      "supporting": [
        "Copy of Time Value of Money.xlsx — Bonds and Bond valuation sheets"
      ],
      "deepExplanation": [
        "A coupon bond is valued as the present value of two cash-flow components: the coupon stream and the repayment of face value at maturity. Both components must be discounted at the required return appropriate to the pricing problem.",
        "The coupon stream is an annuity only when coupons are equal and regularly spaced. The face value is a separate lump-sum cash flow at maturity. Combining the two present values gives the bond price.",
        "Before calculating, match coupon frequency, discount-rate frequency, and number of periods. A semiannual bond typically requires semiannual cash flows and a semiannual periodic rate in the course's standard setup."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Fair value of a bond is the present value of all promised/projected cash flows discounted at the required rate of return."
        },
        {
          "label": "2 · Connect",
          "text": "Promised bond cash flows come from coupon payments and the maturity value."
        },
        {
          "label": "3 · Apply",
          "text": "Use yield to maturity as the discount rate in the lecture’s bond-pricing steps."
        },
        {
          "label": "4 · Check",
          "text": "Use a periodic coupon and periodic required return consistent with the payment frequency."
        }
      ],
      "examFocus": [
        "Be able to explain Coupon Bond Valuation in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Use a periodic coupon and periodic required return consistent with the payment frequency."
      ]
    },
    "zero-coupon-bonds": {
      "module": "valuation",
      "title": "Zero-Coupon (Pure Discount) Bonds",
      "vi": "Trái phiếu không coupon",
      "objective": "Value a bond that promises only one payment at maturity.",
      "intuition": "With no coupons, a pure discount bond is a single future cash flow, so its valuation is a lump-sum present-value problem.",
      "definition": "Pure discount bonds promise a single cash payment at a future maturity date; the difference between purchase price and face value is the investor’s interest.",
      "relationships": [
        "Coupon payment INT = 0 for a zero-coupon bond."
      ],
      "commonMistake": "Do not add an annuity component to a true zero-coupon bond.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 9 and 21",
        "preview": null,
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Zero-Coupon Bond",
          "html": "P = M / (1+r)<sup>n</sup>"
        }
      ],
      "variables": [
        [
          "M",
          "Face value"
        ],
        [
          "r",
          "Required return per period"
        ],
        [
          "n",
          "Periods to maturity"
        ]
      ],
      "workedExample": {
        "title": "Lecture zero-coupon setup",
        "prompt": "A 5-year zero-coupon bond has a $1,000 maturity value and investors require 8%.",
        "steps": [
          "Set INT = 0.",
          "Discount the $1,000 maturity value for 5 years at 8%."
        ],
        "answer": "About $680.58"
      },
      "deepExplanation": [
        "Start with the course definition: Pure discount bonds promise a single cash payment at a future maturity date; the difference between purchase price and face value is the investor’s interest.",
        "The source then connects this concept to: Coupon payment INT = 0 for a zero-coupon bond.",
        "Exam lens: Do not add an annuity component to a true zero-coupon bond."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Pure discount bonds promise a single cash payment at a future maturity date; the difference between purchase price and face value is the investor’s interest."
        },
        {
          "label": "2 · Connect",
          "text": "Coupon payment INT = 0 for a zero-coupon bond."
        },
        {
          "label": "3 · Apply",
          "text": "Value a bond that promises only one payment at maturity."
        },
        {
          "label": "4 · Check",
          "text": "Do not add an annuity component to a true zero-coupon bond."
        }
      ],
      "examFocus": [
        "Be able to explain Zero-Coupon (Pure Discount) Bonds in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not add an annuity component to a true zero-coupon bond."
      ]
    },
    "bond-price-rates": {
      "module": "valuation",
      "title": "Interest Rates & Bond Prices",
      "vi": "Lãi suất và giá trái phiếu",
      "objective": "Explain the inverse relationship between required rates and bond values.",
      "intuition": "Changing the discount rate changes the present value of the bond’s fixed promised cash flows.",
      "definition": "As interest rates increase, present values of bonds and bond prices decrease at a decreasing rate.",
      "relationships": [
        "Higher required return → lower present value of fixed bond cash flows.",
        "Lower required return → higher present value."
      ],
      "commonMistake": "Do not assume bond prices move in the same direction as market interest rates.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 16–17",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Bond prices and required market yields move in opposite directions because the bond's promised cash flows are fixed while the discount rate changes. A higher required return reduces the present value of those fixed cash flows.",
        "The effect is not a new formula; it is the discounting mechanism applied to the same coupons and face value at a different required return. This connection is more useful than memorizing an isolated inverse relationship.",
        "For exam interpretation, separate coupon rate from required return. The coupon rate determines promised coupon cash flows; the required return is used to discount them for valuation.",
        "Past papers also test credit-rating changes. If a firm becomes safer and the required return falls while coupon cash flows are unchanged, the bond price rises. The mechanism is the same inverse price–yield relationship."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "As interest rates increase, present values of bonds and bond prices decrease at a decreasing rate."
        },
        {
          "label": "2 · Connect",
          "text": "Higher required return → lower present value of fixed bond cash flows."
        },
        {
          "label": "3 · Apply",
          "text": "Lower required return → higher present value."
        },
        {
          "label": "4 · Check",
          "text": "Do not assume bond prices move in the same direction as market interest rates."
        }
      ],
      "examFocus": [
        "Be able to explain Interest Rates & Bond Prices in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not assume bond prices move in the same direction as market interest rates."
      ],
      "supporting": [
        "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · written bond repricing question"
      ]
    },
    "ytm-bond-types": {
      "module": "valuation",
      "title": "Yield to Maturity; Premium, Par & Discount Bonds",
      "vi": "YTM; trái phiếu premium, par và discount",
      "objective": "Interpret YTM and the premium/par/discount classifications.",
      "intuition": "YTM is the return earned if the bond is bought at its current market price, promised payments are received, and the bond is held to maturity.",
      "definition": "Yield to maturity is the return the bond holder will earn if the bond is bought at its current price, all promised coupon and principal payments are received, and it is held to maturity.",
      "relationships": [
        "The lecture distinguishes premium, par, and discount bonds based on the relationship between bond price and face value."
      ],
      "commonMistake": "YTM is not simply the coupon rate unless the pricing conditions make them coincide.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 19–20",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Yield to maturity is the rate that equates the present value of a bond's promised cash flows with its current price, under the valuation conventions used in the course.",
        "Premium, par, and discount status can be understood by comparing the coupon rate with the required yield. If the coupon is attractive relative to the required yield, price must adjust upward; if it is unattractive, price adjusts downward.",
        "Do not classify a bond from coupon rate alone. The classification is about market price relative to face value and therefore depends on the market-required return."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Yield to maturity is the return the bond holder will earn if the bond is bought at its current price, all promised coupon and principal payments are received, and it is held to maturity."
        },
        {
          "label": "2 · Connect",
          "text": "The lecture distinguishes premium, par, and discount bonds based on the relationship between bond price and face value."
        },
        {
          "label": "3 · Apply",
          "text": "Interpret YTM and the premium/par/discount classifications."
        },
        {
          "label": "4 · Check",
          "text": "YTM is not simply the coupon rate unless the pricing conditions make them coincide."
        }
      ],
      "examFocus": [
        "Be able to explain Yield to Maturity; Premium, Par & Discount Bonds in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: YTM is not simply the coupon rate unless the pricing conditions make them coincide."
      ]
    },
    "equity-valuation": {
      "module": "valuation",
      "title": "Equity Valuation: Dividend Models",
      "vi": "Định giá cổ phiếu bằng cổ tức",
      "objective": "Use the course’s zero-growth, constant-growth, and supernormal-growth dividend models.",
      "intuition": "The lecture values equity as the present value of the future dividend stream, then applies simplifying assumptions about dividend growth.",
      "definition": "The price of a stock is equal to the present value of its future dividends, whose values are uncertain.",
      "relationships": [
        "Zero growth: dividends remain constant forever.",
        "Constant growth: dividends grow at a constant rate g forever.",
        "Supernormal growth: value the nonconstant period, value the stock at the start of constant growth, discount it back, and add the components."
      ],
      "commonMistake": "For the Gordon growth model, the denominator requires rₛ − g; the source formula assumes a sustainable constant-growth setting.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 22–26",
        "preview": "assets/source-previews-v02/valuation-slide-25.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Zero-Growth Dividend Model",
          "html": "P<sub>0</sub> = Div / r<sub>s</sub>"
        },
        {
          "label": "Constant-Growth (Gordon) Model",
          "html": "P<sub>0</sub> = Div<sub>1</sub> / (r<sub>s</sub> − g)"
        },
        {
          "label": "Required return from Gordon model",
          "html": "r<sub>s</sub> = Div<sub>1</sub>/P<sub>0</sub> + g"
        }
      ],
      "variables": [
        [
          "P₀",
          "Current stock price/value"
        ],
        [
          "Div₁",
          "Dividend one period ahead"
        ],
        [
          "rₛ",
          "Required return on stock"
        ],
        [
          "g",
          "Constant dividend growth rate"
        ]
      ],
      "deepExplanation": [
        "The dividend valuation approach treats a share as a claim on future cash distributions and discounts those expected cash flows to present value. The appropriate model depends on the dividend-growth pattern stated in the problem.",
        "The course distinguishes zero growth, constant growth, and supernormal/nonconstant growth. Constant growth permits the compact Gordon-growth expression only under the model's required relationship between required return and growth.",
        "For supernormal growth, separate the valuation into stages: explicitly value the unusual-growth dividends, compute the terminal stock value when stable growth begins, discount that terminal value, and add the components."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The price of a stock is equal to the present value of its future dividends, whose values are uncertain."
        },
        {
          "label": "2 · Connect",
          "text": "Zero growth: dividends remain constant forever."
        },
        {
          "label": "3 · Apply",
          "text": "Constant growth: dividends grow at a constant rate g forever."
        },
        {
          "label": "4 · Check",
          "text": "For the Gordon growth model, the denominator requires rₛ − g; the source formula assumes a sustainable constant-growth setting."
        }
      ],
      "examFocus": [
        "Be able to explain Equity Valuation: Dividend Models in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: For the Gordon growth model, the denominator requires rₛ − g; the source formula assumes a sustainable constant-growth setting."
      ]
    },
    "money-market-yields": {
      "module": "valuation",
      "title": "Money-Market Yield Conventions",
      "vi": "Quy ước lợi suất thị trường tiền tệ",
      "objective": "Recognize that money-market securities use different quoting conventions.",
      "intuition": "The lecture warns that discount yields and single-payment yields can use different base prices and day-count conventions, making direct comparison difficult.",
      "definition": "The bond equivalent yield is the quoted nominal or stated yield on a security; some money-market securities are quoted on a discount basis using a 360-day year.",
      "relationships": [
        "Discount yields use face value as the base and a 360-day year.",
        "Single-payment instruments such as negotiable CDs and federal funds pay interest once at maturity."
      ],
      "commonMistake": "Do not compare differently quoted money-market yields without first converting them to a common basis.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 29–32",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: The bond equivalent yield is the quoted nominal or stated yield on a security; some money-market securities are quoted on a discount basis using a 360-day year.",
        "The source then connects this concept to: Discount yields use face value as the base and a 360-day year. Single-payment instruments such as negotiable CDs and federal funds pay interest once at maturity.",
        "Exam lens: Do not compare differently quoted money-market yields without first converting them to a common basis.",
        "The workflow for money-market yield questions is more important than memorizing one number: identify quote convention → compute price → compute holding-period return on actual money invested → annualize on the requested basis."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The bond equivalent yield is the quoted nominal or stated yield on a security; some money-market securities are quoted on a discount basis using a 360-day year."
        },
        {
          "label": "2 · Connect",
          "text": "Discount yields use face value as the base and a 360-day year."
        },
        {
          "label": "3 · Apply",
          "text": "Single-payment instruments such as negotiable CDs and federal funds pay interest once at maturity."
        },
        {
          "label": "4 · Check",
          "text": "Do not compare differently quoted money-market yields without first converting them to a common basis."
        }
      ],
      "examFocus": [
        "Be able to explain Money-Market Yield Conventions in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not compare differently quoted money-market yields without first converting them to a common basis."
      ],
      "theory": [
        {
          "title": "From discount quote to price",
          "body": "For a discount instrument quoted on a bank-discount basis, first convert the quoted discount into the dollar discount over the instrument’s remaining days, then subtract from face value. The exact day-count convention must follow the course problem statement."
        },
        {
          "title": "Compare yields on a common basis",
          "body": "Past exams ask for bond-equivalent yield and effective annual return. A quoted discount yield, a simple annualized investment yield, and an EAR are not interchangeable."
        }
      ],
      "supporting": [
        "5 bộ đề năm trước LTTC.pdf · T-bill and commercial-paper yield problems"
      ]
    },
    "money-market-instruments": {
      "module": "valuation",
      "title": "Money-Market Instruments",
      "vi": "Công cụ thị trường tiền tệ",
      "objective": "Identify major instruments covered in the valuation lecture.",
      "intuition": "Different short-term instruments differ by issuer, collateral, trading mechanism, and how their yields are quoted.",
      "definition": "The lecture covers Treasury bills, federal funds, repurchase agreements, commercial paper, negotiable certificates of deposit, banker’s acceptances, and Eurodollar instruments.",
      "relationships": [
        "T-bills are discount securities.",
        "Federal funds are short-term interbank balances.",
        "Repurchase agreements are collateralized arrangements involving the sale and repurchase of securities.",
        "Commercial paper is short-term corporate borrowing."
      ],
      "commonMistake": "Do not assume all money-market instruments pay periodic coupons.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 33–60",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: The lecture covers Treasury bills, federal funds, repurchase agreements, commercial paper, negotiable certificates of deposit, banker’s acceptances, and Eurodollar instruments.",
        "The source then connects this concept to: T-bills are discount securities. Federal funds are short-term interbank balances. Repurchase agreements are collateralized arrangements involving the sale and repurchase of securities.",
        "Exam lens: Do not assume all money-market instruments pay periodic coupons.",
        "A fast classification rule from the course materials is original maturity. Money-market instruments are short-term debt; equity is not a money-market instrument regardless of how quickly it can be sold.",
        "Past papers often mix one long-term government bond into a list of T-bills/CDs/commercial paper/bankers’ acceptances. Do not classify from issuer alone; classify from instrument type and original maturity."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The lecture covers Treasury bills, federal funds, repurchase agreements, commercial paper, negotiable certificates of deposit, banker’s acceptances, and Eurodollar instruments."
        },
        {
          "label": "2 · Connect",
          "text": "T-bills are discount securities."
        },
        {
          "label": "3 · Apply",
          "text": "Federal funds are short-term interbank balances."
        },
        {
          "label": "4 · Check",
          "text": "Do not assume all money-market instruments pay periodic coupons."
        }
      ],
      "examFocus": [
        "Be able to explain Money-Market Instruments in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not assume all money-market instruments pay periodic coupons."
      ],
      "theory": [
        {
          "title": "Treasury bills",
          "body": "Short-term government discount instruments that pay face value at maturity. The supporting notes emphasize high liquidity and low default probability."
        },
        {
          "title": "Negotiable certificates of deposit",
          "body": "Bank-issued time-deposit instruments that can be sold in secondary markets."
        },
        {
          "title": "Commercial paper",
          "body": "Short-term unsecured debt issued by large, well-known firms or financial institutions."
        },
        {
          "title": "Repurchase agreements",
          "body": "Economically short-term collateralized loans in which securities such as Treasury bills are sold with an agreement to repurchase them."
        },
        {
          "title": "Federal funds / interbank funds",
          "body": "Very short-term transfers of reserve balances between banks; they are bank-to-bank loans, not loans made by the federal government."
        },
        {
          "title": "Bankers’ acceptances",
          "body": "Time drafts or payment obligations backed/accepted by a bank, which increases the credibility and marketability of the claim."
        }
      ],
      "supporting": [
        "LTTC_Financial market_HKT.pdf · pp. 6–10",
        "5 bộ đề năm trước LTTC.pdf · money-market instrument MCQs"
      ]
    },
    "treasury-corporate-bonds": {
      "module": "valuation",
      "title": "Treasury, Municipal & Corporate Bonds",
      "vi": "Trái phiếu Kho bạc, đô thị và doanh nghiệp",
      "objective": "Differentiate major long-term bond-market securities and corporate bond contract features.",
      "intuition": "Long-term debt instruments differ in issuer, taxation, collateral, covenants, and embedded options.",
      "definition": "Corporate bonds are long-term obligations issued by corporations; a bond indenture is the legal contract specifying the rights and obligations of issuer and bondholders.",
      "relationships": [
        "Municipal bonds may be general-obligation or revenue bonds.",
        "Corporate bond features include secured/mortgage bonds, debentures, convertibles, warrants, call provisions, and sinking funds."
      ],
      "commonMistake": "Do not infer equal default risk from identical maturity; issuer and contract features matter.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 61–69",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Corporate bonds are long-term obligations issued by corporations; a bond indenture is the legal contract specifying the rights and obligations of issuer and bondholders.",
        "The source then connects this concept to: Municipal bonds may be general-obligation or revenue bonds. Corporate bond features include secured/mortgage bonds, debentures, convertibles, warrants, call provisions, and sinking funds.",
        "Exam lens: Do not infer equal default risk from identical maturity; issuer and contract features matter."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Corporate bonds are long-term obligations issued by corporations; a bond indenture is the legal contract specifying the rights and obligations of issuer and bondholders."
        },
        {
          "label": "2 · Connect",
          "text": "Municipal bonds may be general-obligation or revenue bonds."
        },
        {
          "label": "3 · Apply",
          "text": "Corporate bond features include secured/mortgage bonds, debentures, convertibles, warrants, call provisions, and sinking funds."
        },
        {
          "label": "4 · Check",
          "text": "Do not infer equal default risk from identical maturity; issuer and contract features matter."
        }
      ],
      "examFocus": [
        "Be able to explain Treasury, Municipal & Corporate Bonds in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not infer equal default risk from identical maturity; issuer and contract features matter."
      ]
    },
    "bond-ratings-international": {
      "module": "valuation",
      "title": "Bond Ratings, Spreads & International Bonds",
      "vi": "Xếp hạng tín dụng, chênh lệch lợi suất và trái phiếu quốc tế",
      "objective": "Interpret bond ratings and the lecture’s international bond categories.",
      "intuition": "Ratings summarize perceived default probability, while international bond structures expand issuer financing options and investor exposures.",
      "definition": "Moody’s, S&P, and Fitch rank bonds by perceived default probability; bonds below Baa/BBB are described as speculative grade or high-yield bonds.",
      "relationships": [
        "Eurobonds are issued outside the country of the currency in which they are denominated.",
        "Foreign bonds are issued outside the issuer’s home country and usually in the currency of the country of issue.",
        "Sovereign bonds are government-issued, foreign-currency-denominated debt."
      ],
      "commonMistake": "A high-yield bond is not called “high yield” because it has a high coupon alone; the lecture ties the classification to credit rating/default risk.",
      "source": {
        "file": "2023 Valuation of securities.pdf",
        "location": "Slides 70–78",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Moody’s, S&P, and Fitch rank bonds by perceived default probability; bonds below Baa/BBB are described as speculative grade or high-yield bonds.",
        "The source then connects this concept to: Eurobonds are issued outside the country of the currency in which they are denominated. Foreign bonds are issued outside the issuer’s home country and usually in the currency of the country of issue. Sovereign bonds are government-issued, foreign-currency-denominated debt.",
        "Exam lens: A high-yield bond is not called “high yield” because it has a high coupon alone; the lecture ties the classification to credit rating/default risk."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Moody’s, S&P, and Fitch rank bonds by perceived default probability; bonds below Baa/BBB are described as speculative grade or high-yield bonds."
        },
        {
          "label": "2 · Connect",
          "text": "Eurobonds are issued outside the country of the currency in which they are denominated."
        },
        {
          "label": "3 · Apply",
          "text": "Foreign bonds are issued outside the issuer’s home country and usually in the currency of the country of issue."
        },
        {
          "label": "4 · Check",
          "text": "A high-yield bond is not called “high yield” because it has a high coupon alone; the lecture ties the classification to credit rating/default risk."
        }
      ],
      "examFocus": [
        "Be able to explain Bond Ratings, Spreads & International Bonds in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: A high-yield bond is not called “high yield” because it has a high coupon alone; the lecture ties the classification to credit rating/default risk."
      ]
    },
    "defining-risk": {
      "module": "risk",
      "title": "Defining Risk",
      "vi": "Định nghĩa rủi ro",
      "objective": "Use the course definition of financial/economic risk.",
      "intuition": "For financial decisions, risk is framed around uncertainty in future payoff over a horizon and relative to a benchmark.",
      "definition": "Risk is a measure of uncertainty about the future payoff to an investment, assessed over some time horizon and relative to a benchmark.",
      "relationships": [
        "Risk must be quantified to price financial instruments and transfer risk."
      ],
      "commonMistake": "Do not reduce the course definition to “possibility of loss” alone.",
      "source": {
        "file": "2023 Understanding risk.pdf",
        "location": "Slide 3",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Risk is a measure of uncertainty about the future payoff to an investment, assessed over some time horizon and relative to a benchmark.",
        "The source then connects this concept to: Risk must be quantified to price financial instruments and transfer risk.",
        "Exam lens: Do not reduce the course definition to “possibility of loss” alone."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Risk is a measure of uncertainty about the future payoff to an investment, assessed over some time horizon and relative to a benchmark."
        },
        {
          "label": "2 · Connect",
          "text": "Risk must be quantified to price financial instruments and transfer risk."
        },
        {
          "label": "3 · Apply",
          "text": "Use the course definition of financial/economic risk."
        },
        {
          "label": "4 · Check",
          "text": "Do not reduce the course definition to “possibility of loss” alone."
        }
      ],
      "examFocus": [
        "Be able to explain Defining Risk in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not reduce the course definition to “possibility of loss” alone."
      ]
    },
    "probability-expected-value": {
      "module": "risk",
      "title": "Probabilities & Expected Value",
      "vi": "Xác suất và giá trị kỳ vọng",
      "objective": "Compute expected payoff from possible outcomes and their probabilities.",
      "intuition": "Expected value weights every possible payoff by its probability.",
      "definition": "Expected value is the sum of probability × payoff across possible outcomes.",
      "relationships": [
        "Probabilities range from 0 to 1.",
        "List all possible outcomes and the chance of each before computing the expected value."
      ],
      "commonMistake": "Expected value is not necessarily one of the actual possible outcomes.",
      "source": {
        "file": "2023 Understanding risk.pdf",
        "location": "Slides 5–8",
        "preview": "assets/source-previews-v02/risk-slide-7.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Expected Value",
          "html": "E(X) = Σ p<sub>i</sub>X<sub>i</sub>"
        }
      ],
      "variables": [
        [
          "pᵢ",
          "Probability of outcome i"
        ],
        [
          "Xᵢ",
          "Payoff in outcome i"
        ]
      ],
      "workedExample": {
        "title": "Lecture Example 1",
        "prompt": "A $1,000 investment pays $1,400 with probability 1/2 or $700 with probability 1/2.",
        "steps": [
          "Multiply each payoff by its probability: 1,400×0.5 and 700×0.5.",
          "Add the weighted payoffs."
        ],
        "answer": "Expected payoff = $1,050."
      },
      "deepExplanation": [
        "Risk analysis begins by listing possible outcomes and assigning probabilities. Expected value is the probability-weighted average of those possible outcomes; it is not necessarily the amount that will actually occur.",
        "The expected value summarizes the center of the distribution but says nothing by itself about how spread out the outcomes are. That is why the lecture moves next to variance and standard deviation.",
        "On exams, check that probabilities cover the stated possible outcomes and that each outcome is multiplied by its own probability before summing."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Expected value is the sum of probability × payoff across possible outcomes."
        },
        {
          "label": "2 · Connect",
          "text": "Probabilities range from 0 to 1."
        },
        {
          "label": "3 · Apply",
          "text": "List all possible outcomes and the chance of each before computing the expected value."
        },
        {
          "label": "4 · Check",
          "text": "Expected value is not necessarily one of the actual possible outcomes."
        }
      ],
      "examFocus": [
        "Be able to explain Probabilities & Expected Value in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Expected value is not necessarily one of the actual possible outcomes."
      ]
    },
    "variance-standard-deviation": {
      "module": "risk",
      "title": "Variance & Standard Deviation",
      "vi": "Phương sai và độ lệch chuẩn",
      "objective": "Measure the spread of possible payoffs around expected value.",
      "intuition": "The wider the range and dispersion of outcomes, the greater the risk in the lecture’s variance/standard-deviation framework.",
      "definition": "Variance is the average of squared deviations of possible outcomes from expected value, weighted by their probabilities; standard deviation is the square root of variance.",
      "relationships": [
        "Compute expected value first.",
        "Square each deviation from expected value.",
        "Weight squared deviations by probabilities and add them.",
        "Take the square root for standard deviation."
      ],
      "commonMistake": "Do not average raw deviations; positive and negative deviations cancel, which is why the lecture squares them.",
      "source": {
        "file": "2023 Understanding risk.pdf",
        "location": "Slides 9–13",
        "preview": "assets/source-previews-v02/risk-slide-12.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Variance",
          "html": "Var(X) = Σ p<sub>i</sub>(X<sub>i</sub> − E[X])<sup>2</sup>"
        },
        {
          "label": "Standard Deviation",
          "html": "σ = √Var(X)"
        }
      ],
      "workedExample": {
        "title": "Lecture Example 1 continued",
        "prompt": "With outcomes $1,400 and $700, each with 50% probability, expected value is $1,050.",
        "steps": [
          "Each deviation is ±$350.",
          "Squared deviation is 122,500 for each outcome.",
          "Weighted variance is 122,500.",
          "Square root of variance = 350."
        ],
        "answer": "Standard deviation = $350."
      },
      "deepExplanation": [
        "Variance measures dispersion around expected value by weighting squared deviations by their probabilities. Squaring prevents positive and negative deviations from canceling and places more weight on larger deviations.",
        "Standard deviation is the square root of variance and returns the risk measure to the same unit as the underlying payoff or return. In the lecture, greater standard deviation means greater risk when comparing the described distributions.",
        "A common calculation error is to skip the expected-value step or forget the probability weights. Follow the sequence: expected value → deviations → squared deviations → probability weighting → sum → square root for standard deviation."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Variance is the average of squared deviations of possible outcomes from expected value, weighted by their probabilities; standard deviation is the square root of variance."
        },
        {
          "label": "2 · Connect",
          "text": "Compute expected value first."
        },
        {
          "label": "3 · Apply",
          "text": "Square each deviation from expected value."
        },
        {
          "label": "4 · Check",
          "text": "Do not average raw deviations; positive and negative deviations cancel, which is why the lecture squares them."
        }
      ],
      "examFocus": [
        "Be able to explain Variance & Standard Deviation in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not average raw deviations; positive and negative deviations cancel, which is why the lecture squares them."
      ]
    },
    "leverage-risk": {
      "module": "risk",
      "title": "Leverage, Expected Return & Risk",
      "vi": "Đòn bẩy, lợi suất kỳ vọng và rủi ro",
      "objective": "Explain how borrowing magnifies both expected return and risk in the course.",
      "intuition": "Borrowing increases the amount invested relative to the investor’s own capital, magnifying payoff changes.",
      "definition": "Leverage is the practice of borrowing (using debt) to finance part of an investment.",
      "relationships": [
        "The lecture states leverage increases expected return and increases the standard deviation of returns.",
        "Leverage magnifies the effect of price changes."
      ],
      "commonMistake": "The course does not say leverage only increases return; it also increases risk.",
      "source": {
        "file": "2023 Understanding risk.pdf",
        "location": "Slide 14",
        "preview": "assets/source-previews-v02/risk-slide-14.png",
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Leverage is the practice of borrowing (using debt) to finance part of an investment.",
        "The source then connects this concept to: The lecture states leverage increases expected return and increases the standard deviation of returns. Leverage magnifies the effect of price changes.",
        "Exam lens: The course does not say leverage only increases return; it also increases risk."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Leverage is the practice of borrowing (using debt) to finance part of an investment."
        },
        {
          "label": "2 · Connect",
          "text": "The lecture states leverage increases expected return and increases the standard deviation of returns."
        },
        {
          "label": "3 · Apply",
          "text": "Leverage magnifies the effect of price changes."
        },
        {
          "label": "4 · Check",
          "text": "The course does not say leverage only increases return; it also increases risk."
        }
      ],
      "examFocus": [
        "Be able to explain Leverage, Expected Return & Risk in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: The course does not say leverage only increases return; it also increases risk."
      ]
    },
    "value-at-risk": {
      "module": "risk",
      "title": "Value at Risk (VaR)",
      "vi": "Giá trị chịu rủi ro",
      "objective": "Explain what VaR asks about downside outcomes.",
      "intuition": "Sometimes the key concern is not overall spread but a worst-loss threshold over a chosen horizon and probability.",
      "definition": "Value at Risk is the worst possible loss over a specific horizon at a given probability.",
      "relationships": [
        "VaR focuses attention on downside loss at a stated horizon/probability."
      ],
      "commonMistake": "VaR is not the same measure as standard deviation.",
      "source": {
        "file": "2023 Understanding risk.pdf",
        "location": "Slides 15–16",
        "preview": "assets/source-previews-v02/risk-slide-15.png",
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Value at Risk is the worst possible loss over a specific horizon at a given probability.",
        "The source then connects this concept to: VaR focuses attention on downside loss at a stated horizon/probability.",
        "Exam lens: VaR is not the same measure as standard deviation."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Value at Risk is the worst possible loss over a specific horizon at a given probability."
        },
        {
          "label": "2 · Connect",
          "text": "VaR focuses attention on downside loss at a stated horizon/probability."
        },
        {
          "label": "3 · Apply",
          "text": "Explain what VaR asks about downside outcomes."
        },
        {
          "label": "4 · Check",
          "text": "VaR is not the same measure as standard deviation."
        }
      ],
      "examFocus": [
        "Be able to explain Value at Risk (VaR) in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: VaR is not the same measure as standard deviation."
      ]
    },
    "systematic-idiosyncratic": {
      "module": "risk",
      "title": "Idiosyncratic vs Systematic Risk",
      "vi": "Rủi ro đặc thù và rủi ro hệ thống",
      "objective": "Classify risks by how broadly they affect people, firms, or the economy.",
      "intuition": "Some risks are specific to a small set of firms; others affect everyone or the economy as a whole.",
      "definition": "Idiosyncratic or unique risks affect a small number of people or firms; systematic risks affect everyone.",
      "relationships": [
        "Systemic risk is a threat to the system as a whole.",
        "Idiosyncratic risk can be reduced through diversification in the lecture."
      ],
      "commonMistake": "Do not label a broad recession shock as idiosyncratic risk.",
      "source": {
        "file": "2023 Understanding risk.pdf",
        "location": "Slides 17–18 and 21",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Idiosyncratic risk affects a limited number of people or firms, whereas systematic risk affects the economy or broad system. This distinction matters because the two types respond differently to diversification.",
        "The lecture states that idiosyncratic risk can be reduced by holding more than one risk at a time. Diversification does not make economy-wide shocks disappear, because many holdings can be affected together.",
        "In scenario questions, identify whether the source of uncertainty is specific to one firm/position or common across many firms and markets before choosing the label."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Idiosyncratic or unique risks affect a small number of people or firms; systematic risks affect everyone."
        },
        {
          "label": "2 · Connect",
          "text": "Systemic risk is a threat to the system as a whole."
        },
        {
          "label": "3 · Apply",
          "text": "Idiosyncratic risk can be reduced through diversification in the lecture."
        },
        {
          "label": "4 · Check",
          "text": "Do not label a broad recession shock as idiosyncratic risk."
        }
      ],
      "examFocus": [
        "Be able to explain Idiosyncratic vs Systematic Risk in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not label a broad recession shock as idiosyncratic risk."
      ]
    },
    "risk-aversion-premium": {
      "module": "risk",
      "title": "Risk Aversion & Risk Premium",
      "vi": "Ngại rủi ro và phần bù rủi ro",
      "objective": "Link risk aversion to the compensation investors require for holding risky assets.",
      "intuition": "A risk-averse investor prefers certainty to an uncertain investment with the same expected return, so taking additional risk requires compensation.",
      "definition": "The risk premium is the compensation investors require to hold the risky asset.",
      "relationships": [
        "The riskier an investment, the higher the risk premium in the lecture framing."
      ],
      "commonMistake": "Risk aversion does not mean an investor will never hold a risky asset.",
      "source": {
        "file": "2023 Understanding risk.pdf",
        "location": "Slide 19",
        "preview": "assets/source-previews-v02/risk-slide-19.png",
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: The risk premium is the compensation investors require to hold the risky asset.",
        "The source then connects this concept to: The riskier an investment, the higher the risk premium in the lecture framing.",
        "Exam lens: Risk aversion does not mean an investor will never hold a risky asset."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The risk premium is the compensation investors require to hold the risky asset."
        },
        {
          "label": "2 · Connect",
          "text": "The riskier an investment, the higher the risk premium in the lecture framing."
        },
        {
          "label": "3 · Apply",
          "text": "Link risk aversion to the compensation investors require for holding risky assets."
        },
        {
          "label": "4 · Check",
          "text": "Risk aversion does not mean an investor will never hold a risky asset."
        }
      ],
      "examFocus": [
        "Be able to explain Risk Aversion & Risk Premium in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Risk aversion does not mean an investor will never hold a risky asset."
      ]
    },
    "hedging-diversification": {
      "module": "risk",
      "title": "Hedging, Diversification & Risk Spreading",
      "vi": "Phòng ngừa, đa dạng hóa và phân tán rủi ro",
      "objective": "Distinguish risk-reduction tools and the risk types they address.",
      "intuition": "The lecture treats diversification as holding more than one risk at a time to reduce idiosyncratic risk, while hedging uses offsetting exposures.",
      "definition": "Idiosyncratic risk can be reduced through diversification.",
      "relationships": [
        "Diversification reduces specific/idiosyncratic risk by combining risks.",
        "The course tutorial warns against the statement that hedging reduces all kinds of risk."
      ],
      "commonMistake": "Do not claim diversification eliminates economy-wide systematic risk.",
      "source": {
        "file": "2023 Understanding risk.pdf",
        "location": "Slides 20–22",
        "preview": "assets/source-previews-v02/risk-slide-21.png",
        "level": "Primary course source"
      },
      "supporting": [
        "Tutorial - Return and Risk.docx — original course practice"
      ],
      "deepExplanation": [
        "Hedging and diversification are both risk-management tools but solve different problems. Hedging offsets an exposure with another position or contract whose payoff responds in the opposite direction to the targeted risk. Diversification spreads exposure across multiple risks.",
        "The lecture connects diversification especially with reduction of idiosyncratic risk. Risk spreading can reduce the impact of a single unfavorable outcome when exposures are not perfectly concentrated in the same source of uncertainty.",
        "For exam questions, ask whether the strategy offsets one identified exposure or distributes exposure across multiple positions. That usually separates hedging from diversification."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Idiosyncratic risk can be reduced through diversification."
        },
        {
          "label": "2 · Connect",
          "text": "Diversification reduces specific/idiosyncratic risk by combining risks."
        },
        {
          "label": "3 · Apply",
          "text": "The course tutorial warns against the statement that hedging reduces all kinds of risk."
        },
        {
          "label": "4 · Check",
          "text": "Do not claim diversification eliminates economy-wide systematic risk."
        }
      ],
      "examFocus": [
        "Be able to explain Hedging, Diversification & Risk Spreading in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not claim diversification eliminates economy-wide systematic risk."
      ]
    },
    "financial-statements-overview": {
      "module": "health",
      "title": "The Four Financial Statements",
      "vi": "Bốn báo cáo tài chính cơ bản",
      "objective": "Identify the four statements listed in the lecture and their general purpose.",
      "intuition": "Financial statements provide an accounting-based picture of the firm’s financial position and flows.",
      "definition": "The annual report contains four basic financial statements: balance sheet, income statement, statement of cash flows, and statement of retained earnings.",
      "relationships": [
        "Balance sheet: financial position at a date.",
        "Income statement: accounting performance over a period.",
        "Cash-flow statement: actual cash flows over a period.",
        "Retained-earnings statement: changes in retained earnings."
      ],
      "commonMistake": "Do not substitute accounting profit for cash flow; the lecture explicitly separates them.",
      "source": {
        "file": "2023 Financial Statements.pdf",
        "location": "Slides 13–14",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "The annual report brings together several statements that answer different questions about the firm. The balance sheet is a point-in-time position statement; the income statement reports performance over a period; the cash-flow statement reconciles cash movements; retained earnings explains changes in the accumulated earnings retained in the firm.",
        "The statements are linked rather than independent. Profit affects retained earnings, operating and financing decisions affect cash flows, and ending balances feed the balance sheet.",
        "For exam classification, pay attention to whether the question asks about a stock at a date or a flow over a period. That distinction often identifies the correct statement."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The annual report contains four basic financial statements: balance sheet, income statement, statement of cash flows, and statement of retained earnings."
        },
        {
          "label": "2 · Connect",
          "text": "Balance sheet: financial position at a date."
        },
        {
          "label": "3 · Apply",
          "text": "Income statement: accounting performance over a period."
        },
        {
          "label": "4 · Check",
          "text": "Do not substitute accounting profit for cash flow; the lecture explicitly separates them."
        }
      ],
      "examFocus": [
        "Be able to explain The Four Financial Statements in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not substitute accounting profit for cash flow; the lecture explicitly separates them."
      ]
    },
    "balance-sheet-nwc": {
      "module": "health",
      "title": "Balance Sheet & Net Working Capital",
      "vi": "Bảng cân đối kế toán và vốn lưu động ròng",
      "objective": "Use the accounting identity and compute net working capital.",
      "intuition": "The balance sheet organizes what the firm owns and how those assets are financed.",
      "definition": "Assets = Liabilities + Equity; net working capital = current assets − current liabilities.",
      "relationships": [
        "Positive NWC means current assets exceed current liabilities."
      ],
      "commonMistake": "Use current items only when computing NWC.",
      "source": {
        "file": "2023 Financial Statements.pdf",
        "location": "Slides 15–17",
        "preview": "assets/source-previews-v02/statements-slide-17.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Accounting Identity",
          "html": "Assets = Liabilities + Equity"
        },
        {
          "label": "Net Working Capital",
          "html": "NWC = Current Assets − Current Liabilities"
        }
      ],
      "supporting": [
        "Es FOR FINANCIAL STATEMENT.docx — original tutorial questions"
      ],
      "deepExplanation": [
        "The balance sheet organizes assets against financing claims. Net working capital focuses on short-term financial position by comparing current assets with current liabilities.",
        "NWC = current assets − current liabilities. Positive NWC indicates current assets exceed current liabilities, but interpretation still depends on the composition and quality of those current assets.",
        "Do not confuse the level of current assets with liquidity quality. Inventory and receivables may not be as immediately available as cash, which motivates additional liquidity ratios later in the module."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Assets = Liabilities + Equity; net working capital = current assets − current liabilities."
        },
        {
          "label": "2 · Connect",
          "text": "Positive NWC means current assets exceed current liabilities."
        },
        {
          "label": "3 · Apply",
          "text": "Use the accounting identity and compute net working capital."
        },
        {
          "label": "4 · Check",
          "text": "Use current items only when computing NWC."
        }
      ],
      "examFocus": [
        "Be able to explain Balance Sheet & Net Working Capital in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Use current items only when computing NWC."
      ]
    },
    "book-vs-market": {
      "module": "health",
      "title": "Book Value vs Market Value",
      "vi": "Giá trị sổ sách và giá trị thị trường",
      "objective": "Explain why accounting book values and market values can differ.",
      "intuition": "The balance sheet reports historical/accounting values, while inflation and market forces can change what assets are currently worth.",
      "definition": "Book values can differ widely from market values for the same assets.",
      "relationships": [
        "Book value follows accounting/historical-cost conventions.",
        "Market value reflects current market appraisal."
      ],
      "commonMistake": "Do not treat book equity and market equity as automatically equal.",
      "source": {
        "file": "2023 Financial Statements.pdf",
        "location": "Slides 18–20",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Book values can differ widely from market values for the same assets.",
        "The source then connects this concept to: Book value follows accounting/historical-cost conventions. Market value reflects current market appraisal.",
        "Exam lens: Do not treat book equity and market equity as automatically equal."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Book values can differ widely from market values for the same assets."
        },
        {
          "label": "2 · Connect",
          "text": "Book value follows accounting/historical-cost conventions."
        },
        {
          "label": "3 · Apply",
          "text": "Market value reflects current market appraisal."
        },
        {
          "label": "4 · Check",
          "text": "Do not treat book equity and market equity as automatically equal."
        }
      ],
      "examFocus": [
        "Be able to explain Book Value vs Market Value in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not treat book equity and market equity as automatically equal."
      ]
    },
    "income-taxes-financing": {
      "module": "health",
      "title": "Income Statement, Taxes & Financing Effects",
      "vi": "Báo cáo kết quả kinh doanh, thuế và tài trợ",
      "objective": "Connect operating income, interest expense, taxes, and financing structure.",
      "intuition": "Debt financing creates interest expense before taxable income and can change income available to shareholders without changing operations.",
      "definition": "The income statement reports revenues and expenses; the lecture separately discusses average versus marginal tax rates and the effect of debt versus equity financing on returns.",
      "relationships": [
        "Average tax rate relates total taxes to taxable income.",
        "Marginal tax rate is the additional tax paid on an additional dollar of taxable income.",
        "Debt financing introduces interest expense and financial leverage."
      ],
      "commonMistake": "Do not confuse EBIT with earnings after interest and taxes.",
      "source": {
        "file": "2023 Financial Statements.pdf",
        "location": "Income Statement / tax / debt-vs-equity sections",
        "preview": null,
        "level": "Primary course source"
      },
      "supporting": [
        "Es FOR FINANCIAL STATEMENT.docx — original tutorial questions"
      ],
      "deepExplanation": [
        "Start with the course definition: The income statement reports revenues and expenses; the lecture separately discusses average versus marginal tax rates and the effect of debt versus equity financing on returns.",
        "The source then connects this concept to: Average tax rate relates total taxes to taxable income. Marginal tax rate is the additional tax paid on an additional dollar of taxable income. Debt financing introduces interest expense and financial leverage.",
        "Exam lens: Do not confuse EBIT with earnings after interest and taxes."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The income statement reports revenues and expenses; the lecture separately discusses average versus marginal tax rates and the effect of debt versus equity financing on returns."
        },
        {
          "label": "2 · Connect",
          "text": "Average tax rate relates total taxes to taxable income."
        },
        {
          "label": "3 · Apply",
          "text": "Marginal tax rate is the additional tax paid on an additional dollar of taxable income."
        },
        {
          "label": "4 · Check",
          "text": "Do not confuse EBIT with earnings after interest and taxes."
        }
      ],
      "examFocus": [
        "Be able to explain Income Statement, Taxes & Financing Effects in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not confuse EBIT with earnings after interest and taxes."
      ]
    },
    "cash-flow-fcf": {
      "module": "health",
      "title": "Statement of Cash Flows & Free Cash Flow",
      "vi": "Báo cáo lưu chuyển tiền tệ và dòng tiền tự do",
      "objective": "Explain why investors distinguish accounting profit from cash flow.",
      "intuition": "The lecture emphasizes actual cash flows because profit on the income statement is backward-looking and accounting based.",
      "definition": "The statement of cash flows shows the firm’s cash flows over a given period; free cash flow is cash available for distribution to investors after investments needed to sustain ongoing operations.",
      "relationships": [
        "Cash flows are organized into operating, investing, and financing activities in the statement example."
      ],
      "commonMistake": "Do not infer distributable cash from net income alone.",
      "source": {
        "file": "2023 Financial Statements.pdf",
        "location": "Slides 18–23",
        "preview": "assets/source-previews-v02/statements-slide-22.png",
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: The statement of cash flows shows the firm’s cash flows over a given period; free cash flow is cash available for distribution to investors after investments needed to sustain ongoing operations.",
        "The source then connects this concept to: Cash flows are organized into operating, investing, and financing activities in the statement example.",
        "Exam lens: Do not infer distributable cash from net income alone."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The statement of cash flows shows the firm’s cash flows over a given period; free cash flow is cash available for distribution to investors after investments needed to sustain ongoing operations."
        },
        {
          "label": "2 · Connect",
          "text": "Cash flows are organized into operating, investing, and financing activities in the statement example."
        },
        {
          "label": "3 · Apply",
          "text": "Explain why investors distinguish accounting profit from cash flow."
        },
        {
          "label": "4 · Check",
          "text": "Do not infer distributable cash from net income alone."
        }
      ],
      "examFocus": [
        "Be able to explain Statement of Cash Flows & Free Cash Flow in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not infer distributable cash from net income alone."
      ]
    },
    "retained-earnings": {
      "module": "health",
      "title": "Statement of Retained Earnings",
      "vi": "Báo cáo lợi nhuận giữ lại",
      "objective": "Explain why retained earnings can rise when shareholders allow earnings to remain in the firm.",
      "intuition": "Retained earnings are a financing source for future investment when net income is reinvested instead of distributed as dividends.",
      "definition": "Increases in retained earnings occur because the firm earns net income and common shareholders allow management to reinvest some net income rather than pay it out as dividends.",
      "relationships": [
        "Reinvested earnings can fund plant, equipment, inventory, and other assets."
      ],
      "commonMistake": "Retained earnings are not the same thing as a pile of cash sitting in an account.",
      "source": {
        "file": "2023 Financial Statements.pdf",
        "location": "Slides 24–25",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Start with the course definition: Increases in retained earnings occur because the firm earns net income and common shareholders allow management to reinvest some net income rather than pay it out as dividends.",
        "The source then connects this concept to: Reinvested earnings can fund plant, equipment, inventory, and other assets.",
        "Exam lens: Retained earnings are not the same thing as a pile of cash sitting in an account."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Increases in retained earnings occur because the firm earns net income and common shareholders allow management to reinvest some net income rather than pay it out as dividends."
        },
        {
          "label": "2 · Connect",
          "text": "Reinvested earnings can fund plant, equipment, inventory, and other assets."
        },
        {
          "label": "3 · Apply",
          "text": "Explain why retained earnings can rise when shareholders allow earnings to remain in the firm."
        },
        {
          "label": "4 · Check",
          "text": "Retained earnings are not the same thing as a pile of cash sitting in an account."
        }
      ],
      "examFocus": [
        "Be able to explain Statement of Retained Earnings in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Retained earnings are not the same thing as a pile of cash sitting in an account."
      ]
    },
    "liquidity-ratios": {
      "module": "health",
      "title": "Liquidity Ratios",
      "vi": "Các tỷ số thanh khoản",
      "objective": "Calculate and interpret current, quick, and cash ratios.",
      "intuition": "Liquidity ratios measure the relationship between resources that can meet short-term obligations and current liabilities.",
      "definition": "Liquidity ratios measure how easily the firm can lay its hands on cash and the relationship between current assets and current liabilities.",
      "relationships": [
        "Current ratio uses all current assets.",
        "Quick ratio removes inventory from current assets.",
        "Cash ratio uses cash plus marketable securities.",
        "The lecture cautions that liquidity measures can rapidly become out of date."
      ],
      "commonMistake": "A high liquidity ratio is not automatically “better” without context.",
      "source": {
        "file": "2023 Analyzing Firm Performance.pdf",
        "location": "Slides 5–8",
        "preview": "assets/source-previews-v02/perf-slide-6.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Current Ratio",
          "html": "Current Ratio = Current Assets / Current Liabilities"
        },
        {
          "label": "Quick Ratio",
          "html": "Quick Ratio = (Current Assets − Inventory) / Current Liabilities"
        },
        {
          "label": "Cash Ratio",
          "html": "Cash Ratio = (Cash + Marketable Securities) / Current Liabilities"
        }
      ],
      "supporting": [
        "Financial ratios excersise.xlsx — blank practice template"
      ],
      "deepExplanation": [
        "Liquidity ratios ask whether the firm can meet short-term obligations using resources expected to become cash in the near term. The current ratio uses all current assets, while the quick ratio removes less liquid components such as inventory under the course formula.",
        "A larger ratio is not automatically 'better' without context. Very high current assets can also signal inefficient use of working capital, which is why ratio interpretation must be connected to operations and benchmarks.",
        "In exams, first identify the requested numerator and denominator. Many mistakes are formula-selection errors caused by mixing liquidity ratios with asset-management ratios."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Liquidity ratios measure how easily the firm can lay its hands on cash and the relationship between current assets and current liabilities."
        },
        {
          "label": "2 · Connect",
          "text": "Current ratio uses all current assets."
        },
        {
          "label": "3 · Apply",
          "text": "Quick ratio removes inventory from current assets."
        },
        {
          "label": "4 · Check",
          "text": "A high liquidity ratio is not automatically “better” without context."
        }
      ],
      "examFocus": [
        "Be able to explain Liquidity Ratios in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: A high liquidity ratio is not automatically “better” without context."
      ]
    },
    "asset-management-ratios": {
      "module": "health",
      "title": "Asset-Management Ratios",
      "vi": "Tỷ số quản lý tài sản",
      "objective": "Measure how efficiently the firm uses inventory, receivables, payables, fixed assets, working capital, and total assets.",
      "intuition": "Turnover ratios connect a flow such as sales or cost of goods sold to the asset or liability base used to support that activity.",
      "definition": "Asset management ratios measure how efficiently a firm uses its assets and manages accounts payable.",
      "relationships": [
        "Inventory turnover = cost of goods sold / average inventory.",
        "Days sales in inventory = average inventory × 365 / cost of goods sold.",
        "Accounts receivable turnover = credit sales / average receivables.",
        "Average collection period = average receivables / average daily sales.",
        "Fixed asset turnover = sales / average fixed assets.",
        "Sales to NWC = sales / average net working capital.",
        "Total asset turnover = sales / average total assets."
      ],
      "commonMistake": "Where the lecture specifies average balances, do not silently substitute ending balances unless the exercise directs you to do so.",
      "source": {
        "file": "2023 Analyzing Firm Performance.pdf",
        "location": "Slides 9–15",
        "preview": "assets/source-previews-v02/ratio-slide-10.png",
        "level": "Primary course source"
      },
      "deepExplanation": [
        "Asset-management ratios evaluate how intensively the firm uses inventories, receivables, fixed assets, total assets, or working capital to support sales and operations.",
        "Turnover ratios and days-based measures describe related ideas from different angles. Faster turnover can indicate more efficient use, but extremely high turnover may also reflect insufficient asset levels or operational constraints.",
        "Interpret the ratio with a benchmark and the firm's business context rather than treating a higher number as universally good."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Asset management ratios measure how efficiently a firm uses its assets and manages accounts payable."
        },
        {
          "label": "2 · Connect",
          "text": "Inventory turnover = cost of goods sold / average inventory."
        },
        {
          "label": "3 · Apply",
          "text": "Days sales in inventory = average inventory × 365 / cost of goods sold."
        },
        {
          "label": "4 · Check",
          "text": "Where the lecture specifies average balances, do not silently substitute ending balances unless the exercise directs you to do so."
        }
      ],
      "examFocus": [
        "Be able to explain Asset-Management Ratios in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Where the lecture specifies average balances, do not silently substitute ending balances unless the exercise directs you to do so."
      ]
    },
    "leverage-coverage-ratios": {
      "module": "health",
      "title": "Leverage & Coverage Ratios",
      "vi": "Tỷ số đòn bẩy và khả năng thanh toán",
      "objective": "Interpret debt intensity and the firm’s ability to cover fixed financing charges.",
      "intuition": "Debt creates financial leverage because shareholders receive what remains after debt holders are paid; coverage ratios ask whether operating earnings/cash can meet fixed charges.",
      "definition": "Leverage ratios show how heavily the company is in debt; coverage ratios compare earnings/cash resources with interest or fixed charges.",
      "relationships": [
        "Debt ratio in the lecture uses long-term debt / total capitalization.",
        "Debt-to-equity ratio = long-term debt / equity.",
        "Times interest earned = EBIT / interest.",
        "Cash coverage = (EBIT + depreciation) / fixed charges."
      ],
      "commonMistake": "Leverage and coverage answer different questions: amount of debt versus ability to service it.",
      "source": {
        "file": "2023 Analyzing Firm Performance.pdf",
        "location": "Slides 16–18",
        "preview": "assets/source-previews-v02/perf-slide-18.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "Debt to Equity",
          "html": "Debt-to-Equity = Long-term Debt / Equity"
        },
        {
          "label": "Times Interest Earned",
          "html": "TIE = EBIT / Interest"
        },
        {
          "label": "Cash Coverage",
          "html": "Cash Coverage = (EBIT + Depreciation) / Fixed Charges"
        }
      ],
      "deepExplanation": [
        "Leverage ratios describe the extent to which assets or operations are financed with debt. Coverage ratios ask whether operating earnings or cash-generating ability are sufficient relative to fixed financing charges.",
        "More leverage can magnify returns to equity holders but also increases fixed obligations and financial risk. This connects the financial-health module back to the risk module's leverage logic.",
        "Do not interpret a debt ratio and an interest-coverage ratio in the same direction. A higher debt ratio means more leverage; stronger coverage generally means more ability to meet the relevant charge."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Leverage ratios show how heavily the company is in debt; coverage ratios compare earnings/cash resources with interest or fixed charges."
        },
        {
          "label": "2 · Connect",
          "text": "Debt ratio in the lecture uses long-term debt / total capitalization."
        },
        {
          "label": "3 · Apply",
          "text": "Debt-to-equity ratio = long-term debt / equity."
        },
        {
          "label": "4 · Check",
          "text": "Leverage and coverage answer different questions: amount of debt versus ability to service it."
        }
      ],
      "examFocus": [
        "Be able to explain Leverage & Coverage Ratios in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Leverage and coverage answer different questions: amount of debt versus ability to service it."
      ]
    },
    "profitability-market-ratios": {
      "module": "health",
      "title": "Profitability & Market-Value Ratios",
      "vi": "Tỷ số sinh lời và giá trị thị trường",
      "objective": "Compute major profitability and market-value ratios from the lecture.",
      "intuition": "Profitability ratios relate income to assets, equity, or sales; market-value ratios connect accounting results to investor pricing.",
      "definition": "The lecture uses ROA and ROE as common profitability measures and P/E, dividend yield, and market-to-book as market-value ratios.",
      "relationships": [
        "ROA = net income / total assets (common measure shown in lecture).",
        "ROE = net income / equity.",
        "Payout ratio = dividend per share / earnings per share.",
        "P/E ratio = stock price / earnings per share.",
        "Dividend yield = dividend per share / stock price."
      ],
      "commonMistake": "Check which ROA definition the exercise requests; the lecture shows more than one ROA formulation.",
      "source": {
        "file": "2023 Analyzing Firm Performance.pdf",
        "location": "Slides 19–22",
        "preview": "assets/source-previews-v02/perf-slide-20.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "ROA",
          "html": "ROA = Net Income / Total Assets"
        },
        {
          "label": "ROE",
          "html": "ROE = Net Income / Equity"
        },
        {
          "label": "P/E",
          "html": "P/E = Stock Price / Earnings per Share"
        },
        {
          "label": "Dividend Yield",
          "html": "Dividend Yield = Dividend per Share / Stock Price"
        }
      ],
      "deepExplanation": [
        "Start with the course definition: The lecture uses ROA and ROE as common profitability measures and P/E, dividend yield, and market-to-book as market-value ratios.",
        "The source then connects this concept to: ROA = net income / total assets (common measure shown in lecture). ROE = net income / equity. Payout ratio = dividend per share / earnings per share.",
        "Exam lens: Check which ROA definition the exercise requests; the lecture shows more than one ROA formulation."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The lecture uses ROA and ROE as common profitability measures and P/E, dividend yield, and market-to-book as market-value ratios."
        },
        {
          "label": "2 · Connect",
          "text": "ROA = net income / total assets (common measure shown in lecture)."
        },
        {
          "label": "3 · Apply",
          "text": "ROE = net income / equity."
        },
        {
          "label": "4 · Check",
          "text": "Check which ROA definition the exercise requests; the lecture shows more than one ROA formulation."
        }
      ],
      "examFocus": [
        "Be able to explain Profitability & Market-Value Ratios in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Check which ROA definition the exercise requests; the lecture shows more than one ROA formulation."
      ]
    },
    "dupont-analysis": {
      "module": "health",
      "title": "DuPont Analysis",
      "vi": "Phân tích DuPont",
      "objective": "Decompose ROE into profit margin, asset turnover, and equity multiplier.",
      "intuition": "DuPont analysis separates a single return-on-equity result into operational profitability, asset use, and financial leverage.",
      "definition": "The lecture decomposes ROE into net profit margin × asset turnover × equity multiplier.",
      "relationships": [
        "Net profit margin = net income / sales.",
        "Asset turnover = sales / total assets.",
        "Equity multiplier = total assets / book value of equity."
      ],
      "commonMistake": "Do not interpret a high ROE without checking whether it comes from strong margins, efficient assets, or high leverage.",
      "source": {
        "file": "2023 Analyzing Firm Performance.pdf",
        "location": "Slide 23",
        "preview": "assets/source-previews-v02/perf-slide-23.png",
        "level": "Primary course source"
      },
      "formula": [
        {
          "label": "DuPont ROE",
          "html": "ROE = (Net Income/Sales) × (Sales/Total Assets) × (Total Assets/Book Value of Equity)"
        }
      ],
      "deepExplanation": [
        "DuPont analysis decomposes return on equity into operating profitability, asset-use efficiency, and financial leverage. The course components are net profit margin, total asset turnover, and the equity multiplier.",
        "The value of the decomposition is diagnostic. Two firms can have the same ROE for very different reasons: one may earn high margins, another may use assets rapidly, and another may rely more heavily on leverage.",
        "On exams, do not stop after calculating ROE. Use the components to explain what operational or financing driver is producing the result.",
        "Past papers frequently leave DuPont components blank. Treat the identities as a system of equations, not only as a memorized decomposition. Solve for the missing component and then interpret why firms differ."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "The lecture decomposes ROE into net profit margin × asset turnover × equity multiplier."
        },
        {
          "label": "2 · Connect",
          "text": "Net profit margin = net income / sales."
        },
        {
          "label": "3 · Apply",
          "text": "Asset turnover = sales / total assets."
        },
        {
          "label": "4 · Check",
          "text": "Do not interpret a high ROE without checking whether it comes from strong margins, efficient assets, or high leverage."
        }
      ],
      "examFocus": [
        "Be able to explain DuPont Analysis in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Do not interpret a high ROE without checking whether it comes from strong margins, efficient assets, or high leverage."
      ],
      "theory": [
        {
          "title": "ROA decomposition",
          "body": "ROA = Net profit margin × Asset turnover. This separates operating profitability per dollar of sales from the efficiency with which assets generate sales."
        },
        {
          "title": "ROE decomposition",
          "body": "ROE = Net profit margin × Asset turnover × Equity multiplier = ROA × Equity multiplier."
        },
        {
          "title": "Reverse engineering",
          "body": "If ROE and ROA are given, Equity multiplier = ROE/ROA. If ROA and asset turnover are given, Net profit margin = ROA/Asset turnover."
        },
        {
          "title": "Interpretation",
          "body": "A high ROE can come from high margin, efficient asset use, or high leverage. The decomposition prevents the analyst from attributing performance to the wrong driver."
        }
      ],
      "supporting": [
        "5 bộ đề năm trước LTTC.pdf · repeated DuPont missing-value and comparison problems",
        "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · luxury-company DuPont table"
      ]
    },
    "benchmarking-cautions": {
      "module": "health",
      "title": "Time-Series, Cross-Sectional Analysis & Ratio Cautions",
      "vi": "Phân tích theo thời gian, so sánh chéo và lưu ý",
      "objective": "Use ratios as diagnostic tools rather than automatic answers.",
      "intuition": "Ratios become more informative when compared over time or against similar firms, but historical accounting data and inconsistent definitions limit interpretation.",
      "definition": "Time-series analysis compares a firm over time; cross-sectional analysis compares the firm against one or more companies in the same industry.",
      "relationships": [
        "Financial statement data are historical.",
        "Ratios seldom provide answers but help ask the right questions.",
        "There is no international standard for financial ratios.",
        "Different ratios can tell similar stories; be selective.",
        "The lecture cautions against simply extrapolating past earnings growth."
      ],
      "commonMistake": "Avoid declaring a company “good” or “bad” from one ratio in isolation.",
      "source": {
        "file": "2023 Analyzing Firm Performance.pdf",
        "location": "Slides 24–30",
        "preview": null,
        "level": "Primary course source"
      },
      "deepExplanation": [
        "A ratio has little meaning in isolation. Time-series analysis compares the same firm across periods, while cross-sectional analysis compares the firm with peers or industry benchmarks.",
        "Comparability can be weakened by different accounting choices, seasonal effects, business models, inflation, unusual events, and differences in operating strategy. Therefore a mechanically 'better' ratio may not imply stronger performance.",
        "The exam-ready habit is calculate → benchmark → interpret → state a limitation. This converts ratio computation into financial analysis."
      ],
      "studyFlow": [
        {
          "label": "1 · Identify",
          "text": "Time-series analysis compares a firm over time; cross-sectional analysis compares the firm against one or more companies in the same industry."
        },
        {
          "label": "2 · Connect",
          "text": "Financial statement data are historical."
        },
        {
          "label": "3 · Apply",
          "text": "Ratios seldom provide answers but help ask the right questions."
        },
        {
          "label": "4 · Check",
          "text": "Avoid declaring a company “good” or “bad” from one ratio in isolation."
        }
      ],
      "examFocus": [
        "Be able to explain Time-Series, Cross-Sectional Analysis & Ratio Cautions in your own words, not only recognize the term.",
        "Be able to connect the concept to at least one stated relationship from the source.",
        "Be able to reject the common mistake: Avoid declaring a company “good” or “bad” from one ratio in isolation."
      ]
    },
    "money-functions-payment": {
      "module": "intro",
      "title": "Money: Functions & the Payment System",
      "vi": "Tiền: chức năng và hệ thống thanh toán",
      "objective": "Explain what money is, distinguish it from wealth and income, and trace how payment systems reduce transaction frictions.",
      "intuition": "Money matters because exchange becomes dramatically easier when people do not need to barter. The payment system evolves toward methods that reduce time, transport cost, theft risk, and processing cost.",
      "definition": "Money is anything generally accepted as payment for goods and services or in repayment of debts. In the supporting notes, money is a stock measured at a point in time, while income is a flow measured per unit of time.",
      "relationships": [
        "Medium of exchange lowers the transaction cost created by the double coincidence of wants in barter.",
        "Unit of account reduces the number of relative prices people must compare.",
        "Store of value transfers purchasing power through time, but inflation erodes the real purchasing power of money.",
        "Liquidity is the ease and speed with which an asset can be converted into a medium of exchange without a large loss of value.",
        "Payment systems evolved from commodity money to fiat money, checks, electronic payment, and e-money as technology reduced settlement frictions."
      ],
      "commonMistake": "Do not use money, wealth, and income as synonyms. Money is one asset inside wealth, and income is a flow over time.",
      "source": {
        "file": "LTTC_Financial market_HKT.pdf",
        "location": "pp. 1–4",
        "preview": "assets/source-previews-v05/markets-notes-01.png",
        "level": "Supporting study notes; aligned with course financial-system content"
      },
      "deepExplanation": [
        "The key exam distinction is stock versus flow. Saying someone “has VND 10 million” describes a stock. Saying someone “earns VND 10 million per month” describes an income flow.",
        "The three classic functions answer three different questions: How do we pay? (medium of exchange); how do we quote value? (unit of account); how do we carry purchasing power forward? (store of value).",
        "A barter system can work, but it imposes search costs because both parties must want exactly what the other offers. Money breaks that double coincidence requirement, which is why it supports specialization and economic efficiency."
      ],
      "studyFlow": [
        {
          "label": "1 · Separate",
          "text": "Distinguish money (stock) from income (flow) and broader wealth."
        },
        {
          "label": "2 · Function",
          "text": "Map each scenario to medium of exchange, unit of account, or store of value."
        },
        {
          "label": "3 · Friction",
          "text": "Ask what transaction cost the payment method is reducing."
        },
        {
          "label": "4 · Exam check",
          "text": "If the question mentions inflation, liquidity, barter, or payment technology, identify the exact money function being tested."
        }
      ],
      "examFocus": [
        "Explain the double coincidence of wants and why money reduces transaction costs.",
        "Recognize that money is the most liquid asset but not necessarily the highest-return store of value.",
        "Distinguish fiat money, checks, electronic payments, debit/stored-value cards, and e-cash at a conceptual level."
      ],
      "keyTerms": [
        [
          "Money",
          "Tiền"
        ],
        [
          "Medium of exchange",
          "Phương tiện trao đổi"
        ],
        [
          "Unit of account",
          "Đơn vị tính toán"
        ],
        [
          "Store of value",
          "Phương tiện lưu giữ giá trị"
        ],
        [
          "Liquidity",
          "Tính thanh khoản"
        ],
        [
          "Fiat money",
          "Tiền pháp định"
        ],
        [
          "Transaction cost",
          "Chi phí giao dịch"
        ],
        [
          "Double coincidence of wants",
          "Sự trùng khớp kép về nhu cầu"
        ]
      ],
      "supporting": [
        "LTTC_Financial market_HKT.pdf · pp. 1–4",
        "Mishkin & Serletis · Chapter 3, Functions of Money and Evolution of the Payments System"
      ]
    },
    "financial-instruments-deep": {
      "module": "intro",
      "title": "Financial Instruments: Claims, Value & Design",
      "vi": "Công cụ tài chính: quyền đòi, giá trị và thiết kế",
      "objective": "Define a financial instrument and explain what makes it valuable, useful, and tradable.",
      "intuition": "A financial instrument is not just “a security.” It is an enforceable financial contract that specifies who owes what, when, and under what conditions. Its value therefore depends on the promised cash flows and the risk surrounding those promises.",
      "definition": "A financial instrument is a written legal obligation of one party to transfer something of value, usually money, to another party at a future date or contingent event under specified conditions.",
      "relationships": [
        "Financial instruments can serve as means of payment, stores of value, and mechanisms for transferring risk.",
        "Larger promised payments are more valuable, other things equal.",
        "Earlier payments are more valuable because of the time value of money.",
        "More likely payments are more valuable because default risk is lower.",
        "Payments received in states when the holder needs resources most can be especially valuable for risk management.",
        "Standardization reduces the cost of creating, understanding, and trading contracts; information provisions help reduce monitoring and asymmetric-information problems."
      ],
      "commonMistake": "Do not value an instrument only from its face amount. Timing, probability of payment, contingencies, and marketability matter.",
      "source": {
        "file": "LTTC_Financial market_HKT.pdf",
        "location": "pp. 4–10",
        "preview": "assets/source-previews-v05/markets-notes-01.png",
        "level": "Supporting study notes; course-aligned"
      },
      "deepExplanation": [
        "A useful way to read any instrument is as a contract tree: identify the issuer/counterparty, promised payment, timing, contingencies, collateral or enforcement, and tradability.",
        "Standardization is economically important because bespoke contracts are costly to design and hard to compare. Homogeneous contracts make search, pricing, and trading easier.",
        "Information design matters because the party receiving funds often knows more about the project or behavior than the saver or lender. Financial contracts therefore often embed reporting, collateral, covenants, or other mechanisms that help reduce information problems."
      ],
      "studyFlow": [
        {
          "label": "1 · Contract",
          "text": "Identify the parties and legal obligation."
        },
        {
          "label": "2 · Cash flow",
          "text": "Identify amount, timing, and contingencies."
        },
        {
          "label": "3 · Risk",
          "text": "Assess likelihood of payment and state dependence."
        },
        {
          "label": "4 · Marketability",
          "text": "Ask how standardization and information affect liquidity and transaction cost."
        }
      ],
      "examFocus": [
        "Classify a contract as financial instrument or non-financial asset.",
        "Use size, timing, likelihood, and circumstances to compare instrument value.",
        "Explain why standardized contracts can be cheaper and more liquid than highly customized ones."
      ],
      "keyTerms": [
        [
          "Financial instrument",
          "Công cụ tài chính"
        ],
        [
          "Security",
          "Chứng khoán"
        ],
        [
          "Counterparty",
          "Đối tác hợp đồng"
        ],
        [
          "Standardization",
          "Tiêu chuẩn hóa"
        ],
        [
          "Contingency",
          "Điều kiện/biến cố phát sinh"
        ],
        [
          "Risk transfer",
          "Chuyển giao rủi ro"
        ]
      ],
      "supporting": [
        "LTTC_Financial market_HKT.pdf · pp. 4–10",
        "2024 Introduction to Finance.pdf · six-part financial system",
        "Mishkin & Serletis · Chapter 2, Financial Market Instruments"
      ]
    },
    "market-quality-regulation": {
      "module": "markets",
      "title": "Well-Run Markets, Information & Regulation",
      "vi": "Thị trường vận hành tốt, thông tin và quản lý",
      "objective": "Explain what makes a financial market work well and why regulation targets information and institutional soundness.",
      "intuition": "A market can exist without being efficient or trustworthy. For finance to channel funds well, trading must be reasonably cheap, information must be credible and widely available, and investors must be able to enforce claims.",
      "definition": "The supporting LTTC notes describe well-run financial markets as markets designed to keep transaction costs low, communicate accurate and widely available information, and protect investors’ rights. Regulation aims especially to improve information and the soundness of financial intermediaries.",
      "relationships": [
        "Lower transaction costs support trading and liquidity.",
        "Better information reduces adverse selection before transactions and helps monitoring after transactions.",
        "Investor protection and enforceability make promises to repay more credible.",
        "Entry restrictions, disclosure, supervision, and safety-and-soundness rules are mechanisms regulators can use to reduce failures in intermediation."
      ],
      "commonMistake": "Do not say regulation exists only to control prices. In the uploaded sources, the central reasons are information problems and the safety/soundness of the financial system.",
      "source": {
        "file": "LTTC_Financial market_HKT.pdf",
        "location": "Financial markets §3.3 and regulation §5",
        "preview": "assets/source-previews-v05/markets-notes-01.png",
        "level": "Supporting study notes; cross-checked with Mishkin Chapter 2"
      },
      "deepExplanation": [
        "The recurring logic is information → trust → participation. If investors cannot distinguish good from bad issuers, they may withdraw or demand high compensation; this is an adverse-selection channel.",
        "After financing occurs, borrowers may take actions lenders cannot fully observe. Disclosure, monitoring, covenants, capital requirements, and supervision can address different parts of that post-contract problem.",
        "A well-run market therefore is not defined simply by high trading volume. Low friction, reliable information, enforceable rights, and institutional soundness matter together."
      ],
      "studyFlow": [
        {
          "label": "1 · Cost",
          "text": "Are transactions cheap enough to support liquidity?"
        },
        {
          "label": "2 · Information",
          "text": "Can participants obtain credible information?"
        },
        {
          "label": "3 · Enforcement",
          "text": "Can contractual rights be enforced?"
        },
        {
          "label": "4 · Stability",
          "text": "Are intermediaries supervised so their failure does not undermine the system?"
        }
      ],
      "examFocus": [
        "Explain the two main regulatory objectives emphasized in the sources: information and soundness.",
        "Connect adverse selection and moral hazard to disclosure, supervision, and monitoring.",
        "Explain why investor protection is a condition for financial-market participation."
      ],
      "keyTerms": [
        [
          "Market liquidity",
          "Thanh khoản thị trường"
        ],
        [
          "Investor protection",
          "Bảo vệ nhà đầu tư"
        ],
        [
          "Disclosure",
          "Công bố thông tin"
        ],
        [
          "Soundness",
          "An toàn/lành mạnh tài chính"
        ],
        [
          "Enforcement",
          "Cưỡng chế thực thi"
        ]
      ],
      "supporting": [
        "LTTC_Financial market_HKT.pdf",
        "Mishkin & Serletis · Chapter 2, Regulation of the Financial System"
      ]
    },
    "portfolio-risk-two-assets": {
      "module": "risk",
      "title": "Two-Asset Portfolio Risk",
      "vi": "Rủi ro danh mục hai tài sản",
      "objective": "Calculate and interpret portfolio variance using weights and covariance/correlation.",
      "intuition": "Diversification works because portfolio risk depends not only on each asset’s own volatility but also on how the two assets move together.",
      "definition": "For a two-asset portfolio, variance equals the weighted sum of individual variances plus twice the product of the two weights and the covariance between asset returns.",
      "relationships": [
        "Cov(X,Y) = ρXY·σX·σY connects correlation to covariance.",
        "A lower correlation, other things equal, lowers portfolio variance.",
        "Perfect positive correlation (ρ = +1) provides no diversification benefit beyond the weighted combination of the same-direction risks.",
        "Negative correlation can materially reduce portfolio risk because the cross-product term becomes negative."
      ],
      "commonMistake": "Do not average the two standard deviations. Portfolio variance requires squared weights and the covariance cross term.",
      "source": {
        "file": "5 bộ đề năm trước LTTC.pdf",
        "location": "Past-paper portfolio-risk calculation; principle aligned with risk materials",
        "preview": "assets/source-previews-v05/past-exams-01.png",
        "level": "Past exam pattern + source-supported risk extension"
      },
      "deepExplanation": [
        "Think of portfolio variance as three pieces: contribution from asset X, contribution from asset Y, and the interaction between them. That interaction is why correlation matters.",
        "If a question provides covariance directly, use it directly. If it provides correlation instead, convert correlation to covariance using σXσY.",
        "Always check whether the inputs called “variance” are already squared quantities or whether the table actually reports standard deviations. Past-paper scans can be visually ambiguous, so the normalized v0.5 questions state the units clearly."
      ],
      "studyFlow": [
        {
          "label": "1 · Inputs",
          "text": "Identify weights, standard deviations/variances, and covariance or correlation."
        },
        {
          "label": "2 · Convert",
          "text": "If needed, compute covariance = correlation × σX × σY."
        },
        {
          "label": "3 · Variance",
          "text": "Apply squared weights plus 2wXwYCov."
        },
        {
          "label": "4 · Interpret",
          "text": "Explain the role of correlation rather than reporting a number only."
        }
      ],
      "examFocus": [
        "Calculate two-asset portfolio standard deviation from cleanly stated inputs.",
        "Explain why lower correlation creates diversification benefit.",
        "Recognize that ρ = +1 means the assets move perfectly together and therefore do not offset one another."
      ],
      "formula": [
        {
          "label": "Two-asset variance",
          "html": "σ<sub>p</sub><sup>2</sup> = w<sub>x</sub><sup>2</sup>σ<sub>x</sub><sup>2</sup> + w<sub>y</sub><sup>2</sup>σ<sub>y</sub><sup>2</sup> + 2w<sub>x</sub>w<sub>y</sub>Cov(x,y)"
        },
        {
          "label": "Covariance from correlation",
          "html": "Cov(x,y) = ρ<sub>xy</sub>σ<sub>x</sub>σ<sub>y</sub>"
        }
      ],
      "variables": [
        [
          "wₓ, wᵧ",
          "Portfolio weights"
        ],
        [
          "σₓ, σᵧ",
          "Asset return standard deviations"
        ],
        [
          "Cov(x,y)",
          "Covariance of returns"
        ],
        [
          "ρₓᵧ",
          "Correlation coefficient"
        ]
      ],
      "supporting": [
        "5 bộ đề năm trước LTTC.pdf · portfolio-risk calculation",
        "2023 Understanding risk.pdf · variance/standard deviation and diversification concepts"
      ]
    }
  },
  "formulas": [
    {
      "id": "pv-lump",
      "module": "tvm",
      "name": "Present Value of a Lump Sum",
      "vi": "Giá trị hiện tại của khoản tiền đơn",
      "expression": "PV = FVₜ / (1 + r)ᵗ",
      "variables": "PV, FVₜ, r, t",
      "use": "Translate a single future cash flow back to the present.",
      "source": "2023 Time Value of Money.pdf · Slide 8",
      "lesson": "lump-sum"
    },
    {
      "id": "fv-lump",
      "module": "tvm",
      "name": "Future Value of a Lump Sum",
      "vi": "Giá trị tương lai của khoản tiền đơn",
      "expression": "FVₜ = PV(1 + r)ᵗ",
      "variables": "PV, FVₜ, r, t",
      "use": "Translate a single present value forward in time.",
      "source": "2023 Time Value of Money.pdf · Slide 8",
      "lesson": "lump-sum"
    },
    {
      "id": "ear",
      "module": "tvm",
      "name": "Effective Annual Rate (EAR)",
      "vi": "Lãi suất hiệu dụng năm",
      "expression": "EAR = (1 + APR/m)^m − 1",
      "variables": "APR, m",
      "use": "Convert a quoted APR with periodic compounding into an effective annual rate.",
      "source": "2023 Time Value of Money.pdf · Slide 56",
      "lesson": "apr-ear"
    },
    {
      "id": "pv-annuity",
      "module": "tvm",
      "name": "Present Value of an Annuity",
      "vi": "Giá trị hiện tại của niên kim",
      "expression": "PV = PMT × [(1 − 1/(1+r)^t)/r]",
      "variables": "PMT, r, t",
      "use": "Value equal periodic cash flows at the start of the annuity.",
      "source": "2023 Time Value of Money.pdf · Slide 33",
      "lesson": "annuities"
    },
    {
      "id": "fv-annuity",
      "module": "tvm",
      "name": "Future Value of an Annuity",
      "vi": "Giá trị tương lai của niên kim",
      "expression": "FV = PMT × [((1+r)^t − 1)/r]",
      "variables": "PMT, r, t",
      "use": "Accumulate equal periodic cash flows to the end of the annuity.",
      "source": "2023 Time Value of Money.pdf · Slide 33",
      "lesson": "annuities"
    },
    {
      "id": "perpetuity",
      "module": "tvm",
      "name": "Present Value of a Perpetuity",
      "vi": "Giá trị hiện tại của dòng tiền vĩnh cửu",
      "expression": "PV = C/r",
      "variables": "C, r",
      "use": "Value an equal periodic cash flow that continues forever.",
      "source": "2023 Time Value of Money.pdf · Slide 44",
      "lesson": "perpetuities"
    },
    {
      "id": "growing-perpetuity",
      "module": "tvm",
      "name": "Growing Perpetuity",
      "vi": "Dòng tiền vĩnh cửu tăng trưởng",
      "expression": "PV = C/(r − g)",
      "variables": "C, r, g; course slide states g < r",
      "use": "Value a perpetuity whose cash flow grows at a constant rate.",
      "source": "2023 Time Value of Money.pdf · Slide 49",
      "lesson": "growing-cash-flows"
    },
    {
      "id": "growing-annuity",
      "module": "tvm",
      "name": "Growing Annuity",
      "vi": "Niên kim tăng trưởng",
      "expression": "PV = C/(r−g) × [1 − ((1+g)/(1+r))^N]",
      "variables": "C, r, g, N",
      "use": "Value N regularly spaced cash flows that grow at a constant rate.",
      "source": "2023 Time Value of Money.pdf · Slide 51",
      "lesson": "growing-cash-flows"
    },
    {
      "id": "monthly-ear",
      "module": "personal",
      "name": "Monthly Rate from EAR",
      "vi": "Lãi suất tháng từ EAR",
      "expression": "rₘ = (1 + EAR)^(1/12) − 1",
      "variables": "EAR, rₘ",
      "use": "Convert an effective annual rate to an effective monthly rate.",
      "source": "Q&A 3.pdf · instructor comment",
      "lesson": "loan-consolidation"
    },
    {
      "id": "bond-price",
      "module": "valuation",
      "name": "Coupon Bond Price",
      "vi": "Giá trái phiếu coupon",
      "expression": "P = M/(1+r)^n + INT × [1/r × (1 − 1/(1+r)^n)]",
      "variables": "P, M, INT, r, n",
      "use": "Value a bond as PV of par plus PV of coupon annuity.",
      "source": "2023 Valuation of securities.pdf · Slide 15",
      "lesson": "bond-valuation"
    },
    {
      "id": "zero-bond",
      "module": "valuation",
      "name": "Zero-Coupon Bond Price",
      "vi": "Giá trái phiếu không coupon",
      "expression": "P = M/(1+r)^n",
      "variables": "P, M, r, n",
      "use": "Value a pure discount bond.",
      "source": "2023 Valuation of securities.pdf · Slides 9 and 21",
      "lesson": "zero-coupon-bonds"
    },
    {
      "id": "stock-zero-growth",
      "module": "valuation",
      "name": "Zero-Growth Stock Value",
      "vi": "Giá cổ phiếu cổ tức không tăng trưởng",
      "expression": "P₀ = Div/rₛ",
      "variables": "P₀, Div, rₛ",
      "use": "Value a stock with a constant dividend forever.",
      "source": "2023 Valuation of securities.pdf · Slide 24",
      "lesson": "equity-valuation"
    },
    {
      "id": "gordon",
      "module": "valuation",
      "name": "Constant-Growth Dividend Model",
      "vi": "Mô hình tăng trưởng cổ tức cố định",
      "expression": "P₀ = Div₁/(rₛ − g)",
      "variables": "P₀, Div₁, rₛ, g",
      "use": "Value a stock whose dividends grow at constant rate g.",
      "source": "2023 Valuation of securities.pdf · Slide 25",
      "lesson": "equity-valuation"
    },
    {
      "id": "expected-value",
      "module": "risk",
      "name": "Expected Value",
      "vi": "Giá trị kỳ vọng",
      "expression": "E(X) = Σ pᵢXᵢ",
      "variables": "pᵢ, Xᵢ",
      "use": "Compute probability-weighted expected payoff.",
      "source": "2023 Understanding risk.pdf · Slide 7",
      "lesson": "probability-expected-value"
    },
    {
      "id": "variance",
      "module": "risk",
      "name": "Variance",
      "vi": "Phương sai",
      "expression": "Var(X) = Σ pᵢ(Xᵢ − E[X])²",
      "variables": "pᵢ, Xᵢ, E[X]",
      "use": "Measure probability-weighted squared dispersion around expected payoff.",
      "source": "2023 Understanding risk.pdf · Slides 11–12",
      "lesson": "variance-standard-deviation"
    },
    {
      "id": "stddev",
      "module": "risk",
      "name": "Standard Deviation",
      "vi": "Độ lệch chuẩn",
      "expression": "σ = √Var(X)",
      "variables": "σ, Var(X)",
      "use": "Express payoff dispersion in the original payoff units.",
      "source": "2023 Understanding risk.pdf · Slide 12",
      "lesson": "variance-standard-deviation"
    },
    {
      "id": "accounting-identity",
      "module": "health",
      "name": "Accounting Identity",
      "vi": "Phương trình kế toán",
      "expression": "Assets = Liabilities + Equity",
      "variables": "Assets, Liabilities, Equity",
      "use": "Check or solve balance-sheet totals.",
      "source": "2023 Financial Statements.pdf · Slide 15",
      "lesson": "balance-sheet-nwc"
    },
    {
      "id": "nwc",
      "module": "health",
      "name": "Net Working Capital",
      "vi": "Vốn lưu động ròng",
      "expression": "NWC = Current Assets − Current Liabilities",
      "variables": "Current Assets, Current Liabilities",
      "use": "Measure the excess of current assets over current liabilities.",
      "source": "2023 Financial Statements.pdf · Slide 17",
      "lesson": "balance-sheet-nwc"
    },
    {
      "id": "current-ratio",
      "module": "health",
      "name": "Current Ratio",
      "vi": "Tỷ số thanh toán hiện hành",
      "expression": "Current Ratio = Current Assets / Current Liabilities",
      "variables": "CA, CL",
      "use": "Measure current-asset coverage of current liabilities.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 6",
      "lesson": "liquidity-ratios"
    },
    {
      "id": "quick-ratio",
      "module": "health",
      "name": "Quick Ratio",
      "vi": "Tỷ số thanh toán nhanh",
      "expression": "Quick Ratio = (Current Assets − Inventory) / Current Liabilities",
      "variables": "CA, Inventory, CL",
      "use": "Liquidity measure that excludes inventory.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 6",
      "lesson": "liquidity-ratios"
    },
    {
      "id": "inventory-turnover",
      "module": "health",
      "name": "Inventory Turnover",
      "vi": "Vòng quay hàng tồn kho",
      "expression": "Inventory Turnover = COGS / Average Inventory",
      "variables": "COGS, average inventory",
      "use": "Measure how rapidly inventory is turned over.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 10",
      "lesson": "asset-management-ratios"
    },
    {
      "id": "tie",
      "module": "health",
      "name": "Times Interest Earned",
      "vi": "Khả năng thanh toán lãi vay",
      "expression": "TIE = EBIT / Interest",
      "variables": "EBIT, Interest",
      "use": "Measure how many times operating earnings cover interest.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 18",
      "lesson": "leverage-coverage-ratios"
    },
    {
      "id": "roa",
      "module": "health",
      "name": "Return on Assets (common measure)",
      "vi": "Tỷ suất sinh lời trên tài sản",
      "expression": "ROA = Net Income / Total Assets",
      "variables": "Net Income, Total Assets",
      "use": "Relate net income to the asset base.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 20",
      "lesson": "profitability-market-ratios"
    },
    {
      "id": "roe",
      "module": "health",
      "name": "Return on Equity",
      "vi": "Tỷ suất sinh lời trên vốn chủ sở hữu",
      "expression": "ROE = Net Income / Equity",
      "variables": "Net Income, Equity",
      "use": "Relate net income to shareholders’ equity.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 20",
      "lesson": "profitability-market-ratios"
    },
    {
      "id": "dupont",
      "module": "health",
      "name": "DuPont ROE",
      "vi": "ROE theo DuPont",
      "expression": "ROE = (Net Income/Sales) × (Sales/Total Assets) × (Total Assets/Book Value of Equity)",
      "variables": "Net margin, asset turnover, equity multiplier",
      "use": "Decompose ROE into profitability, efficiency, and leverage.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 23",
      "lesson": "dupont-analysis"
    },
    {
      "id": "continuous-comp",
      "module": "tvm",
      "name": "Continuous Compounding",
      "vi": "Ghép lãi liên tục",
      "expression": "FV = PV·e^(rt); PV = FV·e^(−rt)",
      "variables": "PV, FV, r, t",
      "use": "Use only when the rate is explicitly continuously compounded.",
      "source": "LTTC_Time value and money_HKT.pdf · continuous compounding section",
      "lesson": "apr-ear"
    },
    {
      "id": "loan-balance",
      "module": "tvm",
      "name": "Remaining Balance After k Payments",
      "vi": "Dư nợ sau k kỳ thanh toán",
      "expression": "Bₖ = PMT × [1 − (1+r)^−(n−k)] / r",
      "variables": "Bₖ, PMT, r, n, k",
      "use": "Compute payoff immediately after payment k for a fixed-rate fully amortizing loan.",
      "source": "LTTC_Time value and money_HKT.pdf + past-exam loan-payoff pattern",
      "lesson": "loans"
    },
    {
      "id": "portfolio-var-2",
      "module": "risk",
      "name": "Two-Asset Portfolio Variance",
      "vi": "Phương sai danh mục hai tài sản",
      "expression": "σp² = wx²σx² + wy²σy² + 2wxwyCov(x,y)",
      "variables": "weights, asset variances, covariance",
      "use": "Calculate total portfolio risk from individual risk and co-movement.",
      "source": "5 bộ đề năm trước LTTC.pdf · portfolio-risk pattern; aligned with risk source concepts",
      "lesson": "portfolio-risk-two-assets"
    },
    {
      "id": "cov-corr",
      "module": "risk",
      "name": "Covariance from Correlation",
      "vi": "Hiệp phương sai từ hệ số tương quan",
      "expression": "Cov(x,y) = ρxyσxσy",
      "variables": "ρxy, σx, σy",
      "use": "Convert a correlation coefficient to covariance for portfolio variance.",
      "source": "5 bộ đề năm trước LTTC.pdf · portfolio-risk pattern",
      "lesson": "portfolio-risk-two-assets"
    },
    {
      "id": "dupont-reverse-em",
      "module": "health",
      "name": "DuPont Reverse: Equity Multiplier",
      "vi": "DuPont đảo: hệ số nhân vốn chủ",
      "expression": "Equity Multiplier = ROE / ROA",
      "variables": "ROE, ROA",
      "use": "Recover leverage when ROE and ROA are given.",
      "source": "5 bộ đề năm trước LTTC.pdf · DuPont missing-value problems",
      "lesson": "dupont-analysis"
    },
    {
      "id": "dupont-reverse-margin",
      "module": "health",
      "name": "DuPont Reverse: Net Profit Margin",
      "vi": "DuPont đảo: biên lợi nhuận ròng",
      "expression": "Net Profit Margin = ROA / Asset Turnover",
      "variables": "ROA, Asset Turnover",
      "use": "Recover margin when ROA and asset turnover are given.",
      "source": "5 bộ đề năm trước LTTC.pdf · DuPont missing-value problems",
      "lesson": "dupont-analysis"
    }
  ],
  "questions": [
    {
      "id": "q1",
      "module": "intro",
      "concept": "defining-finance",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which statement best matches the course definition of finance?",
      "options": [
        "The study of accounting statements only",
        "The study of how people allocate scarce resources over time",
        "The study of stock trading only",
        "The study of tax law only"
      ],
      "answer": 1,
      "explanation": "The 2024 Introduction lecture defines finance as the study of how people allocate scarce resources over time.",
      "source": "2024 Introduction to Finance.pdf · Slide 12",
      "skill": "Concept Understanding",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Defining Finance and check the exact wording of the question."
    },
    {
      "id": "q2",
      "module": "intro",
      "concept": "household-decisions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which is NOT one of the four basic household financial decisions in the lecture?",
      "options": [
        "Consumption and saving",
        "Investment",
        "Financing",
        "Production scheduling"
      ],
      "answer": 3,
      "explanation": "The four groups are consumption and saving, investment, financing, and risk management.",
      "source": "2024 Introduction to Finance.pdf · Slide 20",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Financial Decisions of Households and check the exact wording of the question."
    },
    {
      "id": "q3",
      "module": "intro",
      "concept": "firm-decisions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "A firm decides how much debt and equity to use to finance its projects. Which type of decision is this?",
      "options": [
        "Capital budgeting",
        "Capital structure",
        "Inventory management",
        "Dividend timing"
      ],
      "answer": 1,
      "explanation": "Capital structure concerns how projects and the firm are financed.",
      "source": "2024 Introduction to Finance.pdf · Slide 21",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Financial Decisions of Firms and check the exact wording of the question."
    },
    {
      "id": "q4",
      "module": "intro",
      "concept": "business-organization",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which organization is legally distinct from its owners according to the lecture?",
      "options": [
        "Sole proprietorship",
        "General partnership",
        "Corporation",
        "Household"
      ],
      "answer": 2,
      "explanation": "A corporation is a legal entity distinct from its owners.",
      "source": "2024 Introduction to Finance.pdf · Forms of Business Organization",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Forms of Business Organization and check the exact wording of the question."
    },
    {
      "id": "q5",
      "module": "intro",
      "concept": "financial-system",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which item is one of the six parts of the financial system listed in the lecture?",
      "options": [
        "Advertising agencies",
        "Central banks",
        "Manufacturing plants",
        "Universities"
      ],
      "answer": 1,
      "explanation": "Central banks are listed together with money, financial instruments, financial markets, financial institutions, and regulatory agencies.",
      "source": "2024 Introduction to Finance.pdf · Slides 45–46",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to The Financial System and check the exact wording of the question."
    },
    {
      "id": "q6",
      "module": "intro",
      "concept": "real-vs-financial",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "In the course framing, financial assets primarily do what?",
      "options": [
        "Directly generate all net income in the economy",
        "Allocate claims on income or wealth among investors",
        "Eliminate uncertainty",
        "Replace real assets"
      ],
      "answer": 1,
      "explanation": "Financial assets define allocation of income or wealth and represent claims on real assets.",
      "source": "2024 Introduction to Finance.pdf · Real vs Financial Assets",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Real Assets vs Financial Assets and check the exact wording of the question."
    },
    {
      "id": "q10",
      "module": "tvm",
      "concept": "tvm-intuition",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Why is a dollar today worth more than a dollar received in the future according to the lecture?",
      "options": [
        "Because all future money is uncertain",
        "Because today’s dollar can be invested and grow",
        "Because inflation is always positive",
        "Because future cash flows cannot be traded"
      ],
      "answer": 1,
      "explanation": "Today’s dollar can be invested in an interest-bearing account and grow.",
      "source": "2023 Time Value of Money.pdf · Slide 4",
      "skill": "Cause–Effect",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Time Value of Money and check the exact wording of the question."
    },
    {
      "id": "q11",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "What is the present value of $1,000 received in 3 years if r = 8% per year?",
      "answer": 793.8322410201696,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = 1000/(1.08)^3 ≈ 793.83.",
      "source": "2023 Time Value of Money.pdf · Slide 8",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Lump-Sum Valuation and check the exact wording of the question."
    },
    {
      "id": "q12",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "You invest $1,000 today at 5% per year for 2 years. What is the future value?",
      "answer": 1102.5,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "FV = 1000(1.05)^2 = 1,102.50.",
      "source": "2023 Time Value of Money.pdf · Slide 8",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Lump-Sum Valuation and check the exact wording of the question."
    },
    {
      "id": "q13",
      "module": "tvm",
      "concept": "multiple-cash-flows",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "Before adding cash flows that occur on different dates, what should you do?",
      "options": [
        "Add them immediately",
        "Convert each to the same point in time",
        "Ignore the earliest cash flow",
        "Use the largest interest rate"
      ],
      "answer": 1,
      "explanation": "Cash flows must be valued at a common date before they are added.",
      "source": "2023 Time Value of Money.pdf · Multiple Cash Flows",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Multiple Cash Flows & Timelines and check the exact wording of the question."
    },
    {
      "id": "q14",
      "module": "tvm",
      "concept": "annuities",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which description matches an annuity in the course source?",
      "options": [
        "A single payment",
        "N equal cash flows paid at regular intervals",
        "A cash flow that grows forever",
        "A loan with principal due immediately"
      ],
      "answer": 1,
      "explanation": "An annuity is a stream of N equal cash flows paid at regular intervals.",
      "source": "2023 Time Value of Money.pdf · Slide 32",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Annuities and check the exact wording of the question."
    },
    {
      "id": "q15",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "What is the EAR for an 8% APR compounded quarterly? Enter as a percentage, e.g. 8.24.",
      "answer": 8.243216000000004,
      "tolerance": 0.02,
      "unit": "%",
      "explanation": "EAR = (1 + 0.08/4)^4 − 1 ≈ 8.24%.",
      "source": "2023 Time Value of Money.pdf · Slide 56",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to APR, Periodic Rate & EAR and check the exact wording of the question."
    },
    {
      "id": "q16",
      "module": "tvm",
      "concept": "loans",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "For an interest-only loan, when is principal repaid in the lecture description?",
      "options": [
        "Every period in equal amounts",
        "At maturity",
        "Before the first interest payment",
        "Never"
      ],
      "answer": 1,
      "explanation": "Interest is paid during the life of the loan and principal is repaid at maturity.",
      "source": "2023 Time Value of Money.pdf · Slide 41",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Loan Payment Methods & Amortization and check the exact wording of the question."
    },
    {
      "id": "q17",
      "module": "tvm",
      "concept": "perpetuities",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "A perpetuity pays $30,000 per year forever and the discount rate is 8%. What is its present value?",
      "answer": 375000,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = C/r = 30,000/0.08 = 375,000.",
      "source": "2023 Time Value of Money.pdf · Slides 44–45",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Perpetuities and check the exact wording of the question."
    },
    {
      "id": "q18",
      "module": "tvm",
      "concept": "growing-cash-flows",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "A growing perpetuity pays $30,000 next year, grows at 4%, and is discounted at 8%. What is its present value?",
      "answer": 750000,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = C/(r−g) = 30,000/(0.08−0.04) = 750,000.",
      "source": "2023 Time Value of Money.pdf · Slides 49–50",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Growing Perpetuities & Growing Annuities and check the exact wording of the question."
    },
    {
      "id": "q19",
      "module": "tvm",
      "concept": "npv",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "Which expression matches the course definition of NPV?",
      "options": [
        "PV(outflows) − PV(inflows)",
        "FV(inflows) + FV(outflows)",
        "PV(inflows) − PV(outflows)",
        "IRR − cost of capital"
      ],
      "answer": 2,
      "explanation": "NPV equals the present value of cash inflows minus the present value of cash outflows.",
      "source": "2023 Time Value of Money.pdf · Slide 61",
      "skill": "Concept Understanding",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Net Present Value (NPV) and check the exact wording of the question."
    },
    {
      "id": "q20",
      "module": "tvm",
      "concept": "npv",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "When choosing among mutually exclusive alternatives, what rule does the lecture give?",
      "options": [
        "Always choose highest IRR",
        "Always choose shortest project",
        "Choose the highest NPV",
        "Choose the highest accounting profit"
      ],
      "answer": 2,
      "explanation": "The lecture directs students to choose the alternative with the highest NPV.",
      "source": "2023 Time Value of Money.pdf · Slide 64",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Net Present Value (NPV) and check the exact wording of the question."
    },
    {
      "id": "q21",
      "module": "tvm",
      "concept": "irr",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "How does the lecture define IRR?",
      "options": [
        "The interest rate that sets FV to zero",
        "The interest rate that sets NPV to zero",
        "The coupon rate",
        "Net income divided by investment"
      ],
      "answer": 1,
      "explanation": "IRR is the rate that sets NPV equal to zero.",
      "source": "2023 Time Value of Money.pdf · Slide 68",
      "skill": "Concept Understanding",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Internal Rate of Return (IRR) and check the exact wording of the question."
    },
    {
      "id": "q22",
      "module": "tvm",
      "concept": "irr",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice",
      "prompt": "For mutually exclusive investments, which statement is supported by the lecture?",
      "options": [
        "Highest IRR must have highest NPV",
        "IRR and NPV can give different decisions",
        "NPV cannot compare projects",
        "IRR is always preferred"
      ],
      "answer": 1,
      "explanation": "The lecture explicitly warns that the highest IRR may not be the best NPV.",
      "source": "2023 Time Value of Money.pdf · Slides 73–75",
      "skill": "Concept Understanding",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Internal Rate of Return (IRR) and check the exact wording of the question."
    },
    {
      "id": "q30",
      "module": "personal",
      "concept": "loan-consolidation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated from Instructor Q&A",
      "prompt": "What effective monthly rate corresponds to an 8% EAR? Enter as a percentage.",
      "answer": 0.643403011000343,
      "tolerance": 0.003,
      "unit": "%",
      "explanation": "Use (1.08)^(1/12) − 1 ≈ 0.643% per month.",
      "source": "Q&A 3.pdf · Question d / instructor comment",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Loan Consolidation & Rate Conversion and check the exact wording of the question."
    },
    {
      "id": "q31",
      "module": "personal",
      "concept": "mortgage-arm",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated from Instructor Q&A",
      "prompt": "After an ARM resets one year into a 30-year mortgage, which inputs should be used to compute the new payment?",
      "options": [
        "Original principal, original rate, 30 years",
        "Remaining balance, new rate, remaining 29 years",
        "Original principal, new rate, 30 years",
        "Remaining balance, original rate, 29 years"
      ],
      "answer": 1,
      "explanation": "The instructor comment emphasizes that the principal and payment change; recalculate with remaining balance, new rate, and remaining term.",
      "source": "Q&A 1.pdf · Question 1",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Adjustable-Rate Mortgage (ARM) and check the exact wording of the question."
    },
    {
      "id": "q32",
      "module": "personal",
      "concept": "mortgage-arm",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Instructor-Verified Value",
      "prompt": "In the Q&A ARM example, the instructor gives the new monthly payment after the rate resets to 12% for the remaining 29 years. What is it?",
      "answer": 1027.19,
      "tolerance": 0.03,
      "unit": "$",
      "explanation": "The instructor’s commented answer gives approximately $1,027.19.",
      "source": "Q&A 1.pdf · Question 1 / instructor comment",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Adjustable-Rate Mortgage (ARM) and check the exact wording of the question."
    },
    {
      "id": "q33",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated from Instructor Q&A",
      "prompt": "If you pay off a mortgage immediately before a scheduled payment, how should that imminent payment be treated?",
      "options": [
        "Discount it for one full period",
        "It is due at the payoff date, so it is not discounted one full period",
        "Ignore it",
        "Double it"
      ],
      "answer": 1,
      "explanation": "The timing phrase “immediately before” means the scheduled payment is due at that valuation date.",
      "source": "Q&A 3.pdf · Question e",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Mortgage Payoff Before a Scheduled Payment and check the exact wording of the question."
    },
    {
      "id": "q34",
      "module": "personal",
      "concept": "financing-rebate",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated from Instructor Q&A",
      "prompt": "Why is “future value minus principal” not a valid direct comparison between a low-rate loan and a cash-rebate offer?",
      "options": [
        "Because the car has no price",
        "Because the payment streams use different financing rates and must be valued on a common basis",
        "Because rebates are illegal",
        "Because APR cannot be used"
      ],
      "answer": 1,
      "explanation": "The instructor rejects that approach and compares the economic value of the alternative financing/payment streams.",
      "source": "Q&A 1.pdf · Question 5",
      "skill": "Cause–Effect",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Low-Rate Financing vs Cash Rebate and check the exact wording of the question."
    },
    {
      "id": "q35",
      "module": "personal",
      "concept": "credit-card-mechanics",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated from Workbook",
      "prompt": "The uploaded Credit Card sheet uses a 30% annual rate and a 2.5% monthly rate. If minimum payments are too small relative to monthly interest, what can happen?",
      "options": [
        "Balance must fall rapidly",
        "Balance may fail to decline or can grow",
        "Interest becomes zero",
        "Principal is automatically forgiven"
      ],
      "answer": 1,
      "explanation": "The workbook is designed to illustrate how a low minimum payment can be overwhelmed by interest.",
      "source": "Copy of Time Value of Money.xlsx · Credit Card sheet",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Credit-Card Balance Mechanics and check the exact wording of the question."
    },
    {
      "id": "q36",
      "module": "personal",
      "concept": "interest-only-personal",
      "type": "numeric",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "For the lecture interest-only loan of VND 5 billion at 15% per year, what is the annual interest payment? Enter in VND.",
      "answer": 750000000,
      "tolerance": 1,
      "unit": "₫",
      "explanation": "Annual interest = principal × rate = 5,000,000,000 × 15% = 750,000,000.",
      "source": "2023 Time Value of Money.pdf · Slide 41",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Interest-Only Loan Cash Flows and check the exact wording of the question."
    },
    {
      "id": "q40",
      "module": "markets",
      "concept": "market-role",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "What is the basic role of financial markets in the lecture?",
      "options": [
        "Move funds from surplus units to those with investment opportunities and funding needs",
        "Set tax rates",
        "Produce consumer goods",
        "Eliminate all risk"
      ],
      "answer": 0,
      "explanation": "Financial markets channel funds from those with excess funds to those with investment opportunities and insufficient funds.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 4",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Role of Financial Markets and check the exact wording of the question."
    },
    {
      "id": "q41",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Where are new security issues sold to initial buyers?",
      "options": [
        "Secondary market",
        "Primary market",
        "OTC only",
        "Money market only"
      ],
      "answer": 1,
      "explanation": "Primary markets sell new issues to initial buyers.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 7",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Debt, Equity, Primary, Secondary, Exchange & OTC and check the exact wording of the question."
    },
    {
      "id": "q42",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which best describes an OTC market in the lecture?",
      "options": [
        "All traders meet in one central location",
        "Dealers at different locations stand ready to buy and sell from inventory",
        "Only governments trade",
        "Only new securities trade"
      ],
      "answer": 1,
      "explanation": "OTC markets connect dealers at different locations who quote prices and hold securities inventories.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 8",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Debt, Equity, Primary, Secondary, Exchange & OTC and check the exact wording of the question."
    },
    {
      "id": "q43",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which belongs in the money market by the course definition?",
      "options": [
        "Long-term corporate stock",
        "Short-term highly liquid debt security",
        "20-year corporate bond",
        "Real estate"
      ],
      "answer": 1,
      "explanation": "Money markets are for short-term, highly liquid debt securities.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 9",
      "skill": "Concept Understanding",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Money Markets vs Capital Markets and check the exact wording of the question."
    },
    {
      "id": "q44",
      "module": "markets",
      "concept": "fx-derivatives",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "What defines a derivative security in the course?",
      "options": [
        "It always has a fixed coupon",
        "Its payoff is linked to another security or asset/cash flow",
        "It must trade on a stock exchange",
        "It has no risk"
      ],
      "answer": 1,
      "explanation": "The lecture defines derivatives by the linkage of their payoff to another security or asset/cash flow.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 19–20",
      "skill": "Concept Understanding",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Foreign Exchange & Derivative Markets and check the exact wording of the question."
    },
    {
      "id": "q45",
      "module": "markets",
      "concept": "international-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "A U.S.-dollar bond issued and sold in Europe is classified in the lecture as which type?",
      "options": [
        "Domestic bond",
        "Eurobond",
        "Money-market deposit",
        "Equity"
      ],
      "answer": 1,
      "explanation": "A Eurobond is denominated in a currency other than that of the country in which it is sold.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 23",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Internationalization of Financial Markets and check the exact wording of the question."
    },
    {
      "id": "q46",
      "module": "markets",
      "concept": "insurance-pensions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "Why do life insurers tend to hold longer-maturity assets than property and casualty insurers in the lecture?",
      "options": [
        "Life insurers cannot buy short-term assets",
        "Their expected liability payments occur further into the future",
        "They have no liabilities",
        "Property insurers only hold equity"
      ],
      "answer": 1,
      "explanation": "The longer timing of life-insurance payments better matches longer-maturity assets.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 38",
      "skill": "Cause–Effect",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Insurance Companies & Pension Funds and check the exact wording of the question."
    },
    {
      "id": "q47",
      "module": "markets",
      "concept": "finance-companies-securities",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "What do mutual funds do according to the lecture?",
      "options": [
        "Issue only bank loans",
        "Pool investors’ funds to purchase diversified portfolios",
        "Guarantee all returns",
        "Set central-bank policy"
      ],
      "answer": 1,
      "explanation": "Mutual funds sell shares and use the proceeds to buy diversified portfolios of stocks and bonds.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 50",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Finance Companies, Mutual Funds & Investment Banks and check the exact wording of the question."
    },
    {
      "id": "q48",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "When does adverse selection occur relative to a financial transaction?",
      "options": [
        "Before the transaction",
        "Only after default",
        "After the transaction",
        "Only at maturity"
      ],
      "answer": 0,
      "explanation": "The course deep-dive defines adverse selection as asymmetric information before the transaction.",
      "source": "Asymmetric Infos.pdf · Asymmetric Information section",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Asymmetric Information: Adverse Selection & Moral Hazard and check the exact wording of the question."
    },
    {
      "id": "q49",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "When does moral hazard occur relative to a transaction?",
      "options": [
        "Before the transaction",
        "After the transaction",
        "Before a borrower applies",
        "Only in equity markets"
      ],
      "answer": 1,
      "explanation": "The course deep-dive defines moral hazard as asymmetric information after the transaction.",
      "source": "Asymmetric Infos.pdf · Asymmetric Information section",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Asymmetric Information: Adverse Selection & Moral Hazard and check the exact wording of the question."
    },
    {
      "id": "q50",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Original Tutorial — adapted to MCQ",
      "prompt": "A $10 all-you-can-eat buffet finds that most customers are sumo wrestlers. Which information problem does the original tutorial ask you to identify?",
      "options": [
        "Moral hazard",
        "Adverse selection",
        "Systematic risk",
        "Interest-rate risk"
      ],
      "answer": 1,
      "explanation": "People who expect to consume unusually large amounts are more likely to select the buffet before the transaction, matching adverse selection.",
      "source": "Es FOR FM & FIs.docx · original tutorial",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Asymmetric Information: Adverse Selection & Moral Hazard and check the exact wording of the question."
    },
    {
      "id": "q51",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Original Tutorial — adapted to MCQ",
      "prompt": "A borrower promises to pay 20% when the normal lending rate is 10%. What concern does the tutorial highlight?",
      "options": [
        "The high rate can attract or signal very risky borrowers",
        "The borrower must be risk free",
        "The loan has no information problem",
        "The lender should always accept"
      ],
      "answer": 0,
      "explanation": "The tutorial uses this setup to illustrate adverse selection: borrowers willing to accept very high rates may be unusually risky.",
      "source": "Es FOR FM & FIs.docx · original tutorial",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Asymmetric Information: Adverse Selection & Moral Hazard and check the exact wording of the question."
    },
    {
      "id": "q60",
      "module": "valuation",
      "concept": "return-measures",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which return measure is ex post?",
      "options": [
        "Required return",
        "Expected return",
        "Realized return",
        "Discount rate"
      ],
      "answer": 2,
      "explanation": "Realized return is the actual return earned after the investment occurs.",
      "source": "2023 Valuation of securities.pdf · Slide 6",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Required, Expected & Realized Rates of Return and check the exact wording of the question."
    },
    {
      "id": "q61",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "A 5-year zero-coupon bond has face value $1,000 and required return 8% per year. What is its value?",
      "answer": 680.5831970337529,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "This is a single maturity payment: 1000/(1.08)^5 ≈ 680.58.",
      "source": "2023 Valuation of securities.pdf · Slide 9",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Zero-Coupon (Pure Discount) Bonds and check the exact wording of the question."
    },
    {
      "id": "q62",
      "module": "valuation",
      "concept": "bond-price-rates",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "If market required interest rates rise, what happens to the present value of an existing bond’s fixed cash flows?",
      "options": [
        "Rises",
        "Falls",
        "Stays identical",
        "Becomes zero"
      ],
      "answer": 1,
      "explanation": "The lecture states bond prices fall as interest rates rise.",
      "source": "2023 Valuation of securities.pdf · Slide 17",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Interest Rates & Bond Prices and check the exact wording of the question."
    },
    {
      "id": "q63",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "A stock pays a constant dividend of $4 forever and the required return is 8%. What is its zero-growth value?",
      "answer": 50,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "Zero-growth model: P = Div/r = 4/0.08 = 50.",
      "source": "2023 Valuation of securities.pdf · Slide 24",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Equity Valuation: Dividend Models and check the exact wording of the question."
    },
    {
      "id": "q64",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "A stock is expected to pay Div1 = $5 next year, dividends grow at 4%, and required return is 12%. What is P0?",
      "answer": 62.50000000000001,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "Gordon model: P0 = 5/(0.12−0.04) = 62.50.",
      "source": "2023 Valuation of securities.pdf · Slide 25",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Equity Valuation: Dividend Models and check the exact wording of the question."
    },
    {
      "id": "q65",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "Why can a discount yield be hard to compare directly with a bond-equivalent yield?",
      "options": [
        "Discount yields use face value and a 360-day year",
        "Discount yields always include dividends",
        "Bond-equivalent yields are not rates",
        "They are mathematically identical"
      ],
      "answer": 0,
      "explanation": "The lecture notes both the base-price and day-count differences.",
      "source": "2023 Valuation of securities.pdf · Slides 30–31",
      "skill": "Cause–Effect",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Money-Market Yield Conventions and check the exact wording of the question."
    },
    {
      "id": "q66",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which is listed as a money-market instrument in the valuation lecture?",
      "options": [
        "Treasury bill",
        "Common stock",
        "30-year mortgage bond only",
        "Real estate"
      ],
      "answer": 0,
      "explanation": "Treasury bills are among the money-market instruments covered.",
      "source": "2023 Valuation of securities.pdf · Money Market Instruments",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Money-Market Instruments and check the exact wording of the question."
    },
    {
      "id": "q67",
      "module": "valuation",
      "concept": "bond-ratings-international",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "Bonds rated below Baa by Moody’s and BBB by S&P/Fitch are called what in the lecture?",
      "options": [
        "Risk-free",
        "Speculative grade / high-yield",
        "Treasury-only",
        "Municipal-only"
      ],
      "answer": 1,
      "explanation": "The lecture describes these as speculative-grade, junk, or high-yield bonds.",
      "source": "2023 Valuation of securities.pdf · Slide 70",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Bond Ratings, Spreads & International Bonds and check the exact wording of the question."
    },
    {
      "id": "q68",
      "module": "valuation",
      "concept": "bond-ratings-international",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "Which definition matches a foreign bond in the lecture?",
      "options": [
        "Issued and sold only in issuer home country",
        "Issued outside issuer home country and usually denominated in currency of country of issue",
        "Always denominated in U.S. dollars",
        "A stock with foreign dividends"
      ],
      "answer": 1,
      "explanation": "The lecture distinguishes foreign bonds by country of issue and typical currency denomination.",
      "source": "2023 Valuation of securities.pdf · Slide 78",
      "skill": "Concept Understanding",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Bond Ratings, Spreads & International Bonds and check the exact wording of the question."
    },
    {
      "id": "q70",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "numeric",
      "difficulty": "Foundation",
      "origin": "Generated from Lecture Example",
      "prompt": "A $1,000 investment pays $1,400 with probability 0.5 and $700 with probability 0.5. What is expected payoff?",
      "answer": 1050,
      "tolerance": 0.01,
      "unit": "$",
      "explanation": "Expected payoff = 0.5×1400 + 0.5×700 = 1,050.",
      "source": "2023 Understanding risk.pdf · Slides 6–7",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Probabilities & Expected Value and check the exact wording of the question."
    },
    {
      "id": "q71",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated from Lecture Example",
      "prompt": "For the same two-outcome investment ($1,400 or $700, each with 0.5 probability), what is the standard deviation of payoff?",
      "answer": 350,
      "tolerance": 0.01,
      "unit": "$",
      "explanation": "Expected payoff is 1,050; each deviation is ±350, so variance is 122,500 and standard deviation is 350.",
      "source": "2023 Understanding risk.pdf · Slide 12",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Variance & Standard Deviation and check the exact wording of the question."
    },
    {
      "id": "q72",
      "module": "risk",
      "concept": "leverage-risk",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "What does leverage do in the course lecture?",
      "options": [
        "Reduces both expected return and risk",
        "Increases expected return and standard deviation/risk",
        "Eliminates price changes",
        "Guarantees profit"
      ],
      "answer": 1,
      "explanation": "The lecture states leverage increases expected return and also standard deviation, increasing risk.",
      "source": "2023 Understanding risk.pdf · Slide 14",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Leverage, Expected Return & Risk and check the exact wording of the question."
    },
    {
      "id": "q73",
      "module": "risk",
      "concept": "value-at-risk",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "What does VaR focus on?",
      "options": [
        "Average payoff only",
        "Worst possible loss over a horizon at a given probability",
        "Coupon rate",
        "Book value"
      ],
      "answer": 1,
      "explanation": "The lecture defines VaR using a loss threshold, horizon, and probability.",
      "source": "2023 Understanding risk.pdf · Slide 15",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Value at Risk (VaR) and check the exact wording of the question."
    },
    {
      "id": "q74",
      "module": "risk",
      "concept": "systematic-idiosyncratic",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Original Tutorial — adapted to MCQ",
      "prompt": "A recession causes the home construction industry to perform poorly. The tutorial asks whether this is idiosyncratic risk. Which course classification is better?",
      "options": [
        "Purely idiosyncratic",
        "Systematic/economy-wide component",
        "No risk",
        "Only credit risk"
      ],
      "answer": 1,
      "explanation": "A recession is an economy-wide shock, so the course classification points to systematic risk rather than purely idiosyncratic risk.",
      "source": "Tutorial - Return and Risk.docx + 2023 Understanding risk.pdf · Slide 17",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Idiosyncratic vs Systematic Risk and check the exact wording of the question."
    },
    {
      "id": "q75",
      "module": "risk",
      "concept": "risk-aversion-premium",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "A risk-averse investor compares two investments with the same expected return. Which does the lecture say the investor prefers?",
      "options": [
        "The one with more uncertainty",
        "The one with certain return",
        "Either with no preference",
        "The one with more leverage"
      ],
      "answer": 1,
      "explanation": "The lecture states a risk-averse investor prefers certainty when expected return is the same.",
      "source": "2023 Understanding risk.pdf · Slide 19",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Risk Aversion & Risk Premium and check the exact wording of the question."
    },
    {
      "id": "q76",
      "module": "risk",
      "concept": "hedging-diversification",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Original Tutorial — adapted to MCQ",
      "prompt": "Which statement is NOT supported by the risk lecture/tutorial?",
      "options": [
        "Diversification can reduce idiosyncratic risk",
        "Systematic risk affects everyone/economy-wide",
        "Hedging automatically removes every kind of risk",
        "Holding more than one risk can reduce specific risk"
      ],
      "answer": 2,
      "explanation": "The tutorial explicitly challenges the statement that hedging reduces all kinds of risk.",
      "source": "Tutorial - Return and Risk.docx + 2023 Understanding risk.pdf",
      "skill": "Concept Understanding",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Hedging, Diversification & Risk Spreading and check the exact wording of the question."
    },
    {
      "id": "q77",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Original Lecture Exercise",
      "prompt": "Economy probabilities/returns are: high growth 0.2 at +30%, normal 0.7 at +12%, recession 0.1 at −15%. What is the expected rate of return? Enter percent.",
      "answer": 12.9,
      "tolerance": 0.01,
      "unit": "%",
      "explanation": "Expected return = 0.2×30 + 0.7×12 + 0.1×(−15) = 12.9%.",
      "source": "2023 Understanding risk.pdf · Slide 23",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Probabilities & Expected Value and check the exact wording of the question."
    },
    {
      "id": "q78",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Original Lecture Exercise",
      "prompt": "Using the same economy states, if you invest $1,000 today, what is the expected amount next year?",
      "answer": 1129,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "Expected rate is 12.9%, so expected value = 1,000×1.129 = 1,129.",
      "source": "2023 Understanding risk.pdf · Slide 23",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Probabilities & Expected Value and check the exact wording of the question."
    },
    {
      "id": "q80",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "numeric",
      "difficulty": "Foundation",
      "origin": "Original Tutorial — numerical",
      "prompt": "N2Q has cash/marketable securities $400,000, receivables $1,200,000, inventory $2,100,000, accrued wages/taxes $500,000, accounts payable $800,000, notes payable $600,000. What is NWC?",
      "answer": 1800000,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "Current assets = 3,700,000; current liabilities = 1,900,000; NWC = 1,800,000.",
      "source": "Es FOR FINANCIAL STATEMENT.docx + 2023 Financial Statements.pdf · Slide 17",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Balance Sheet & Net Working Capital and check the exact wording of the question."
    },
    {
      "id": "q81",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Original Tutorial — numerical",
      "prompt": "N2K has current assets $435,200, fixed assets $550,800, current liabilities $416,600, and long-term debt $314,500. What is total stockholders’ equity?",
      "answer": 254900,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "Total assets = 986,000; total liabilities = 731,100; equity = 254,900.",
      "source": "Es FOR FINANCIAL STATEMENT.docx + balance-sheet identity",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Balance Sheet & Net Working Capital and check the exact wording of the question."
    },
    {
      "id": "q82",
      "module": "health",
      "concept": "income-taxes-financing",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Original Tutorial — numerical",
      "prompt": "Sunrise reports EBIT = $538,000, interest expense = $63,000, and net income = $435,000. What taxes are reported?",
      "answer": 40000,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "EBT = 538,000−63,000 = 475,000; taxes = 475,000−435,000 = 40,000.",
      "source": "Es FOR FINANCIAL STATEMENT.docx",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Income Statement, Taxes & Financing Effects and check the exact wording of the question."
    },
    {
      "id": "q83",
      "module": "health",
      "concept": "financial-statements-overview",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which is one of the four basic statements listed in the lecture?",
      "options": [
        "Advertising report",
        "Statement of retained earnings",
        "Product roadmap",
        "Tax code"
      ],
      "answer": 1,
      "explanation": "The four include balance sheet, income statement, statement of cash flows, and statement of retained earnings.",
      "source": "2023 Financial Statements.pdf · Slide 14",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to The Four Financial Statements and check the exact wording of the question."
    },
    {
      "id": "q84",
      "module": "health",
      "concept": "book-vs-market",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Why can book and market values differ?",
      "options": [
        "Market forces and inflation can change current value relative to historical accounting cost",
        "Accounting forbids assets",
        "Market values are always lower",
        "Book values are forecasts"
      ],
      "answer": 0,
      "explanation": "The lecture explains that balance sheets show book/historical-cost values while market forces can change current values.",
      "source": "2023 Financial Statements.pdf · Slide 18",
      "skill": "Cause–Effect",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Book Value vs Market Value and check the exact wording of the question."
    },
    {
      "id": "q85",
      "module": "health",
      "concept": "liquidity-ratios",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated from Spreadsheet Practice",
      "prompt": "Financial ratios exercise: cash = 60, receivables = 155, inventory = 128, accounts payable = 108, notes payable = 117. Using AP + notes payable as current liabilities, what is the current ratio?",
      "answer": 1.5244444444444445,
      "tolerance": 0.005,
      "unit": "",
      "explanation": "Current assets = 343; current liabilities = 225; current ratio ≈ 1.524.",
      "source": "Financial ratios excersise.xlsx + 2023 Analyzing Firm Performance.pdf · Slide 6",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Liquidity Ratios and check the exact wording of the question."
    },
    {
      "id": "q86",
      "module": "health",
      "concept": "liquidity-ratios",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated from Spreadsheet Practice",
      "prompt": "Using the same figures, what is the quick ratio?",
      "answer": 0.9555555555555556,
      "tolerance": 0.005,
      "unit": "",
      "explanation": "Quick ratio = (cash + receivables) / current liabilities = 215/225 ≈ 0.956.",
      "source": "Financial ratios excersise.xlsx + 2023 Analyzing Firm Performance.pdf · Slide 6",
      "skill": "Numerical Calculation",
      "examPriority": "Core",
      "mistakeType": "Calculation / setup error",
      "examTip": "Link the answer back to Liquidity Ratios and check the exact wording of the question."
    },
    {
      "id": "q87",
      "module": "health",
      "concept": "asset-management-ratios",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "Which ratio uses cost of goods sold divided by average inventory?",
      "options": [
        "Inventory turnover",
        "Current ratio",
        "P/E ratio",
        "Debt-to-equity"
      ],
      "answer": 0,
      "explanation": "The asset-management lecture defines inventory turnover as COGS / average inventory.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 10",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Asset-Management Ratios and check the exact wording of the question."
    },
    {
      "id": "q88",
      "module": "health",
      "concept": "leverage-coverage-ratios",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "What is times interest earned in the lecture?",
      "options": [
        "Sales / assets",
        "EBIT / interest",
        "Debt / equity",
        "Net income / sales"
      ],
      "answer": 1,
      "explanation": "Times interest earned = EBIT / interest.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 18",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Leverage & Coverage Ratios and check the exact wording of the question."
    },
    {
      "id": "q89",
      "module": "health",
      "concept": "profitability-market-ratios",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice",
      "prompt": "Which formula matches the lecture’s common ROE measure?",
      "options": [
        "Net income / equity",
        "Sales / total assets",
        "Debt / total capitalization",
        "Dividend / stock price"
      ],
      "answer": 0,
      "explanation": "ROE = net income / equity in the common measure shown.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 20",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Profitability & Market-Value Ratios and check the exact wording of the question."
    },
    {
      "id": "q90",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "Which three components make up the lecture’s DuPont ROE decomposition?",
      "options": [
        "Current ratio, quick ratio, cash ratio",
        "Net profit margin, asset turnover, equity multiplier",
        "Coupon, maturity, YTM",
        "EBIT, tax, dividend"
      ],
      "answer": 1,
      "explanation": "The DuPont slide decomposes ROE into net profit margin × asset turnover × equity multiplier.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 23",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to DuPont Analysis and check the exact wording of the question."
    },
    {
      "id": "q91",
      "module": "health",
      "concept": "benchmarking-cautions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice",
      "prompt": "Which caution is stated in the lecture?",
      "options": [
        "Ratios always provide final answers",
        "There is one global standard for ratios",
        "Financial statement data are historical and ratios mainly help ask the right questions",
        "Past earnings growth should always be extrapolated"
      ],
      "answer": 2,
      "explanation": "The lecture stresses historical data, lack of universal standards, and diagnostic rather than definitive use.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 26",
      "skill": "Application / Recognition",
      "examPriority": "Core",
      "mistakeType": "Concept confusion",
      "examTip": "Link the answer back to Time-Series, Cross-Sectional Analysis & Ratio Cautions and check the exact wording of the question."
    },
    {
      "id": "q1000",
      "module": "intro",
      "concept": "real-vs-financial",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Real Assets vs Financial Assets?",
      "options": [
        "Financial assets are the means by which individuals in well-developed economies hold their claims on real assets.",
        "Finance is the study of how people allocate scarce resources over time.",
        "When people choose how to hold their pool of accumulated savings, the lecture calls this personal investing or asset allocation.",
        "The branch of finance dealing with financial decisions of firms is called business finance or corporate finance."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Real Assets vs Financial Assets. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2024 Introduction to Finance.pdf · Slide 7",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1001",
      "module": "intro",
      "concept": "real-vs-financial",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Real Assets vs Financial Assets in the course material?",
      "options": [
        "Real assets generate net income to the economy.",
        "Costs and benefits of financial decisions are spread out over time.",
        "Consumption and saving decisions",
        "Capital budgeting: identify, evaluate, decide on, and implement investment projects."
      ],
      "answer": 0,
      "explanation": "Real assets generate net income to the economy. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2024 Introduction to Finance.pdf · Slide 7",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1002",
      "module": "intro",
      "concept": "real-vs-financial",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Real Assets vs Financial Assets?",
      "options": [
        "Do not classify an item only by whether it has a monetary price; use the lecture distinction between productive assets and financial claims.",
        "Finance is broader than only investing or only corporate finance.",
        "Financing decisions concern borrowing; investment decisions concern how saved money is allocated.",
        "Capital budgeting is an investment decision; capital structure is a financing decision."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not classify an item only by whether it has a monetary price; use the lecture distinction between productive assets and financial claims. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2024 Introduction to Finance.pdf · Slide 7",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1003",
      "module": "intro",
      "concept": "defining-finance",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Defining Finance?",
      "options": [
        "Finance is the study of how people allocate scarce resources over time.",
        "When people choose how to hold their pool of accumulated savings, the lecture calls this personal investing or asset allocation.",
        "The branch of finance dealing with financial decisions of firms is called business finance or corporate finance.",
        "A corporation is a firm that is a legal entity distinct from its owners."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Defining Finance. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2024 Introduction to Finance.pdf · Slide 12",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1004",
      "module": "intro",
      "concept": "defining-finance",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Defining Finance in the course material?",
      "options": [
        "Costs and benefits of financial decisions are spread out over time.",
        "Consumption and saving decisions",
        "Capital budgeting: identify, evaluate, decide on, and implement investment projects.",
        "Sole proprietorship: owned by an individual or family; proprietor has unlimited liability."
      ],
      "answer": 0,
      "explanation": "Costs and benefits of financial decisions are spread out over time. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2024 Introduction to Finance.pdf · Slide 12",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1005",
      "module": "intro",
      "concept": "defining-finance",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Defining Finance?",
      "options": [
        "Finance is broader than only investing or only corporate finance.",
        "Financing decisions concern borrowing; investment decisions concern how saved money is allocated.",
        "Capital budgeting is an investment decision; capital structure is a financing decision.",
        "A corporation can have one owner and still not be a sole proprietorship because the corporation is legally distinct from the owner."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Finance is broader than only investing or only corporate finance. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2024 Introduction to Finance.pdf · Slide 12",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1006",
      "module": "intro",
      "concept": "household-decisions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Financial Decisions of Households?",
      "options": [
        "When people choose how to hold their pool of accumulated savings, the lecture calls this personal investing or asset allocation.",
        "The branch of finance dealing with financial decisions of firms is called business finance or corporate finance.",
        "A corporation is a firm that is a legal entity distinct from its owners.",
        "The manager’s primary commitment is to make decisions which are in the best interests of shareholders."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Financial Decisions of Households. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2024 Introduction to Finance.pdf · Slide 20",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1007",
      "module": "intro",
      "concept": "household-decisions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Financial Decisions of Households in the course material?",
      "options": [
        "Consumption and saving decisions",
        "Capital budgeting: identify, evaluate, decide on, and implement investment projects.",
        "Sole proprietorship: owned by an individual or family; proprietor has unlimited liability.",
        "An owner would want managers to choose the investment project that maximizes the market value of shares."
      ],
      "answer": 0,
      "explanation": "Consumption and saving decisions This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2024 Introduction to Finance.pdf · Slide 20",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1008",
      "module": "intro",
      "concept": "household-decisions",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Financial Decisions of Households?",
      "options": [
        "Financing decisions concern borrowing; investment decisions concern how saved money is allocated.",
        "Capital budgeting is an investment decision; capital structure is a financing decision.",
        "A corporation can have one owner and still not be a sole proprietorship because the corporation is legally distinct from the owner.",
        "Do not automatically equate “profit maximization” with the lecture’s stated goal of maximizing shareholder wealth."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Financing decisions concern borrowing; investment decisions concern how saved money is allocated. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2024 Introduction to Finance.pdf · Slide 20",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1009",
      "module": "intro",
      "concept": "firm-decisions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Financial Decisions of Firms?",
      "options": [
        "The branch of finance dealing with financial decisions of firms is called business finance or corporate finance.",
        "A corporation is a firm that is a legal entity distinct from its owners.",
        "The manager’s primary commitment is to make decisions which are in the best interests of shareholders.",
        "In the course lecture, the financial system is the organized framework made up of money, financial instruments, financial markets, financial institutions, government regulatory agencies, and central banks. Together these components support financial transactions and the allocation of funds across the economy."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Financial Decisions of Firms. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2024 Introduction to Finance.pdf · Slide 21",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1010",
      "module": "intro",
      "concept": "firm-decisions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Financial Decisions of Firms in the course material?",
      "options": [
        "Capital budgeting: identify, evaluate, decide on, and implement investment projects.",
        "Sole proprietorship: owned by an individual or family; proprietor has unlimited liability.",
        "An owner would want managers to choose the investment project that maximizes the market value of shares.",
        "Money supports payment and settlement within the system."
      ],
      "answer": 0,
      "explanation": "Capital budgeting: identify, evaluate, decide on, and implement investment projects. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2024 Introduction to Finance.pdf · Slide 21",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1011",
      "module": "intro",
      "concept": "firm-decisions",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Financial Decisions of Firms?",
      "options": [
        "Capital budgeting is an investment decision; capital structure is a financing decision.",
        "A corporation can have one owner and still not be a sole proprietorship because the corporation is legally distinct from the owner.",
        "Do not automatically equate “profit maximization” with the lecture’s stated goal of maximizing shareholder wealth.",
        "Do not treat 'financial system' as a synonym for 'financial markets.' Markets are only one component. The course explicitly lists six parts, and supporting sources explain how markets and intermediaries perform different but connected functions."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Capital budgeting is an investment decision; capital structure is a financing decision. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2024 Introduction to Finance.pdf · Slide 21",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1012",
      "module": "intro",
      "concept": "business-organization",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Forms of Business Organization?",
      "options": [
        "A corporation is a firm that is a legal entity distinct from its owners.",
        "The manager’s primary commitment is to make decisions which are in the best interests of shareholders.",
        "In the course lecture, the financial system is the organized framework made up of money, financial instruments, financial markets, financial institutions, government regulatory agencies, and central banks. Together these components support financial transactions and the allocation of funds across the economy.",
        "Financial assets are the means by which individuals in well-developed economies hold their claims on real assets."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Forms of Business Organization. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2024 Introduction to Finance.pdf · Slides 30–32",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1013",
      "module": "intro",
      "concept": "business-organization",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Forms of Business Organization in the course material?",
      "options": [
        "Sole proprietorship: owned by an individual or family; proprietor has unlimited liability.",
        "An owner would want managers to choose the investment project that maximizes the market value of shares.",
        "Money supports payment and settlement within the system.",
        "Real assets generate net income to the economy."
      ],
      "answer": 0,
      "explanation": "Sole proprietorship: owned by an individual or family; proprietor has unlimited liability. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2024 Introduction to Finance.pdf · Slides 30–32",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1014",
      "module": "intro",
      "concept": "business-organization",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Forms of Business Organization?",
      "options": [
        "A corporation can have one owner and still not be a sole proprietorship because the corporation is legally distinct from the owner.",
        "Do not automatically equate “profit maximization” with the lecture’s stated goal of maximizing shareholder wealth.",
        "Do not treat 'financial system' as a synonym for 'financial markets.' Markets are only one component. The course explicitly lists six parts, and supporting sources explain how markets and intermediaries perform different but connected functions.",
        "Do not classify an item only by whether it has a monetary price; use the lecture distinction between productive assets and financial claims."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: A corporation can have one owner and still not be a sole proprietorship because the corporation is legally distinct from the owner. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2024 Introduction to Finance.pdf · Slides 30–32",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1015",
      "module": "intro",
      "concept": "goal-management",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches The Goal of Management?",
      "options": [
        "The manager’s primary commitment is to make decisions which are in the best interests of shareholders.",
        "In the course lecture, the financial system is the organized framework made up of money, financial instruments, financial markets, financial institutions, government regulatory agencies, and central banks. Together these components support financial transactions and the allocation of funds across the economy.",
        "Financial assets are the means by which individuals in well-developed economies hold their claims on real assets.",
        "Finance is the study of how people allocate scarce resources over time."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to The Goal of Management. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2024 Introduction to Finance.pdf · Slides 37–40",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1016",
      "module": "intro",
      "concept": "goal-management",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with The Goal of Management in the course material?",
      "options": [
        "An owner would want managers to choose the investment project that maximizes the market value of shares.",
        "Money supports payment and settlement within the system.",
        "Real assets generate net income to the economy.",
        "Costs and benefits of financial decisions are spread out over time."
      ],
      "answer": 0,
      "explanation": "An owner would want managers to choose the investment project that maximizes the market value of shares. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2024 Introduction to Finance.pdf · Slides 37–40",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1017",
      "module": "intro",
      "concept": "goal-management",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on The Goal of Management?",
      "options": [
        "Do not automatically equate “profit maximization” with the lecture’s stated goal of maximizing shareholder wealth.",
        "Do not treat 'financial system' as a synonym for 'financial markets.' Markets are only one component. The course explicitly lists six parts, and supporting sources explain how markets and intermediaries perform different but connected functions.",
        "Do not classify an item only by whether it has a monetary price; use the lecture distinction between productive assets and financial claims.",
        "Finance is broader than only investing or only corporate finance."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not automatically equate “profit maximization” with the lecture’s stated goal of maximizing shareholder wealth. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2024 Introduction to Finance.pdf · Slides 37–40",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1018",
      "module": "intro",
      "concept": "financial-system",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches The Financial System?",
      "options": [
        "In the course lecture, the financial system is the organized framework made up of money, financial instruments, financial markets, financial institutions, government regulatory agencies, and central banks. Together these components support financial transactions and the allocation of funds across the economy.",
        "Financial assets are the means by which individuals in well-developed economies hold their claims on real assets.",
        "Finance is the study of how people allocate scarce resources over time.",
        "When people choose how to hold their pool of accumulated savings, the lecture calls this personal investing or asset allocation."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to The Financial System. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2024 Introduction to Finance.pdf · Slides 45–55",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1019",
      "module": "intro",
      "concept": "financial-system",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with The Financial System in the course material?",
      "options": [
        "Money supports payment and settlement within the system.",
        "Real assets generate net income to the economy.",
        "Costs and benefits of financial decisions are spread out over time.",
        "Consumption and saving decisions"
      ],
      "answer": 0,
      "explanation": "Money supports payment and settlement within the system. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2024 Introduction to Finance.pdf · Slides 45–55",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1020",
      "module": "intro",
      "concept": "financial-system",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on The Financial System?",
      "options": [
        "Do not treat 'financial system' as a synonym for 'financial markets.' Markets are only one component. The course explicitly lists six parts, and supporting sources explain how markets and intermediaries perform different but connected functions.",
        "Do not classify an item only by whether it has a monetary price; use the lecture distinction between productive assets and financial claims.",
        "Finance is broader than only investing or only corporate finance.",
        "Financing decisions concern borrowing; investment decisions concern how saved money is allocated."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not treat 'financial system' as a synonym for 'financial markets.' Markets are only one component. The course explicitly lists six parts, and supporting sources explain how markets and intermediaries perform different but connected functions. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2024 Introduction to Finance.pdf · Slides 45–55",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1021",
      "module": "tvm",
      "concept": "tvm-intuition",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Time Value of Money?",
      "options": [
        "The time value of money refers to a dollar in hand today being worth more than a dollar received in the future.",
        "A lump sum payment is a single cash payment received at the beginning or end of an investment horizon.",
        "When cash flows differ across periods, each cash flow can be valued separately and the values added at a common date.",
        "An annuity is a stream of N equal cash flows paid at regular intervals."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Time Value of Money. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slides 4–7",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1022",
      "module": "tvm",
      "concept": "tvm-intuition",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Time Value of Money in the course material?",
      "options": [
        "Compounding translates a value today into a future value.",
        "Higher r lowers PV for a fixed future value and time horizon.",
        "Cash flows must be brought to the same point in time before they are added.",
        "Most car loans, mortgages, and some bonds are presented as annuities in the lecture."
      ],
      "answer": 0,
      "explanation": "Compounding translates a value today into a future value. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slides 4–7",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1023",
      "module": "tvm",
      "concept": "tvm-intuition",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Time Value of Money?",
      "options": [
        "Compounding moves value forward in time; discounting moves value backward in time.",
        "Match the rate per period with the number of periods.",
        "Do not discount all cash flows by the same number of periods unless they occur at the same date.",
        "Do not silently treat a payment today as an ordinary-annuity payment; the Q&A repeatedly emphasizes payment timing."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Compounding moves value forward in time; discounting moves value backward in time. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slides 4–7",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1024",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Lump-Sum Valuation?",
      "options": [
        "A lump sum payment is a single cash payment received at the beginning or end of an investment horizon.",
        "When cash flows differ across periods, each cash flow can be valued separately and the values added at a common date.",
        "An annuity is a stream of N equal cash flows paid at regular intervals.",
        "The lecture lists three loan payment methods: amortized loan, discount loan, and interest-only loan."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Lump-Sum Valuation. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slide 8",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1025",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Lump-Sum Valuation in the course material?",
      "options": [
        "Higher r lowers PV for a fixed future value and time horizon.",
        "Cash flows must be brought to the same point in time before they are added.",
        "Most car loans, mortgages, and some bonds are presented as annuities in the lecture.",
        "Amortized loan: interest and principal are paid as you go."
      ],
      "answer": 0,
      "explanation": "Higher r lowers PV for a fixed future value and time horizon. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slide 8",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1026",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Lump-Sum Valuation?",
      "options": [
        "Match the rate per period with the number of periods.",
        "Do not discount all cash flows by the same number of periods unless they occur at the same date.",
        "Do not silently treat a payment today as an ordinary-annuity payment; the Q&A repeatedly emphasizes payment timing.",
        "Interest-only does not mean principal disappears; principal is due at maturity."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Match the rate per period with the number of periods. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slide 8",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1027",
      "module": "tvm",
      "concept": "multiple-cash-flows",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Multiple Cash Flows & Timelines?",
      "options": [
        "When cash flows differ across periods, each cash flow can be valued separately and the values added at a common date.",
        "An annuity is a stream of N equal cash flows paid at regular intervals.",
        "The lecture lists three loan payment methods: amortized loan, discount loan, and interest-only loan.",
        "A perpetuity is a stream of equal cash flows that occur at regular intervals and last forever."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Multiple Cash Flows & Timelines. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slides 28–31",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1028",
      "module": "tvm",
      "concept": "multiple-cash-flows",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Multiple Cash Flows & Timelines in the course material?",
      "options": [
        "Cash flows must be brought to the same point in time before they are added.",
        "Most car loans, mortgages, and some bonds are presented as annuities in the lecture.",
        "Amortized loan: interest and principal are paid as you go.",
        "The first payment in the lecture’s standard perpetuity occurs one period from today."
      ],
      "answer": 0,
      "explanation": "Cash flows must be brought to the same point in time before they are added. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slides 28–31",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1029",
      "module": "tvm",
      "concept": "multiple-cash-flows",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Multiple Cash Flows & Timelines?",
      "options": [
        "Do not discount all cash flows by the same number of periods unless they occur at the same date.",
        "Do not silently treat a payment today as an ordinary-annuity payment; the Q&A repeatedly emphasizes payment timing.",
        "Interest-only does not mean principal disappears; principal is due at maturity.",
        "Check the first-payment date before applying the formula."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not discount all cash flows by the same number of periods unless they occur at the same date. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slides 28–31",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1030",
      "module": "tvm",
      "concept": "annuities",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Annuities?",
      "options": [
        "An annuity is a stream of N equal cash flows paid at regular intervals.",
        "The lecture lists three loan payment methods: amortized loan, discount loan, and interest-only loan.",
        "A perpetuity is a stream of equal cash flows that occur at regular intervals and last forever.",
        "A growing perpetuity lasts forever; a growing annuity contains N growing cash flows and eventually ends."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Annuities. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slides 32–36",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1031",
      "module": "tvm",
      "concept": "annuities",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Annuities in the course material?",
      "options": [
        "Most car loans, mortgages, and some bonds are presented as annuities in the lecture.",
        "Amortized loan: interest and principal are paid as you go.",
        "The first payment in the lecture’s standard perpetuity occurs one period from today.",
        "Growing perpetuity assumes g < r in the course formula."
      ],
      "answer": 0,
      "explanation": "Most car loans, mortgages, and some bonds are presented as annuities in the lecture. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slides 32–36",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1032",
      "module": "tvm",
      "concept": "annuities",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Annuities?",
      "options": [
        "Do not silently treat a payment today as an ordinary-annuity payment; the Q&A repeatedly emphasizes payment timing.",
        "Interest-only does not mean principal disappears; principal is due at maturity.",
        "Check the first-payment date before applying the formula.",
        "Do not apply the growing-perpetuity formula when g is not below r."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not silently treat a payment today as an ordinary-annuity payment; the Q&A repeatedly emphasizes payment timing. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slides 32–36",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1033",
      "module": "tvm",
      "concept": "loans",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Loan Payment Methods & Amortization?",
      "options": [
        "The lecture lists three loan payment methods: amortized loan, discount loan, and interest-only loan.",
        "A perpetuity is a stream of equal cash flows that occur at regular intervals and last forever.",
        "A growing perpetuity lasts forever; a growing annuity contains N growing cash flows and eventually ends.",
        "When an interest rate is stated per year but interest is compounded more frequently than once per year, the stated annual rate is the annual percentage rate (APR)."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Loan Payment Methods & Amortization. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slides 37–41",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1034",
      "module": "tvm",
      "concept": "loans",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Loan Payment Methods & Amortization in the course material?",
      "options": [
        "Amortized loan: interest and principal are paid as you go.",
        "The first payment in the lecture’s standard perpetuity occurs one period from today.",
        "Growing perpetuity assumes g < r in the course formula.",
        "Periodic rate = APR/m when the quoted rate is APR with m compounding periods."
      ],
      "answer": 0,
      "explanation": "Amortized loan: interest and principal are paid as you go. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slides 37–41",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1035",
      "module": "tvm",
      "concept": "loans",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Loan Payment Methods & Amortization?",
      "options": [
        "Interest-only does not mean principal disappears; principal is due at maturity.",
        "Check the first-payment date before applying the formula.",
        "Do not apply the growing-perpetuity formula when g is not below r.",
        "Do not use the full APR as the monthly, quarterly, or semiannual periodic rate."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Interest-only does not mean principal disappears; principal is due at maturity. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slides 37–41",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1036",
      "module": "tvm",
      "concept": "perpetuities",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Perpetuities?",
      "options": [
        "A perpetuity is a stream of equal cash flows that occur at regular intervals and last forever.",
        "A growing perpetuity lasts forever; a growing annuity contains N growing cash flows and eventually ends.",
        "When an interest rate is stated per year but interest is compounded more frequently than once per year, the stated annual rate is the annual percentage rate (APR).",
        "NPV is the difference between the present value of cash inflows and the present value of cash outflows."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Perpetuities. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slides 42–46",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1037",
      "module": "tvm",
      "concept": "perpetuities",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Perpetuities in the course material?",
      "options": [
        "The first payment in the lecture’s standard perpetuity occurs one period from today.",
        "Growing perpetuity assumes g < r in the course formula.",
        "Periodic rate = APR/m when the quoted rate is APR with m compounding periods.",
        "A positive NPV increases firm value under the lecture decision rule."
      ],
      "answer": 0,
      "explanation": "The first payment in the lecture’s standard perpetuity occurs one period from today. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slides 42–46",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1038",
      "module": "tvm",
      "concept": "perpetuities",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Perpetuities?",
      "options": [
        "Check the first-payment date before applying the formula.",
        "Do not apply the growing-perpetuity formula when g is not below r.",
        "Do not use the full APR as the monthly, quarterly, or semiannual periodic rate.",
        "For mutually exclusive alternatives, do not simply choose the highest IRR."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Check the first-payment date before applying the formula. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slides 42–46",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1039",
      "module": "tvm",
      "concept": "growing-cash-flows",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Growing Perpetuities & Growing Annuities?",
      "options": [
        "A growing perpetuity lasts forever; a growing annuity contains N growing cash flows and eventually ends.",
        "When an interest rate is stated per year but interest is compounded more frequently than once per year, the stated annual rate is the annual percentage rate (APR).",
        "NPV is the difference between the present value of cash inflows and the present value of cash outflows.",
        "IRR is the interest rate that sets the net present value of the cash flows equal to zero."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Growing Perpetuities & Growing Annuities. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slides 47–52",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1040",
      "module": "tvm",
      "concept": "growing-cash-flows",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Growing Perpetuities & Growing Annuities in the course material?",
      "options": [
        "Growing perpetuity assumes g < r in the course formula.",
        "Periodic rate = APR/m when the quoted rate is APR with m compounding periods.",
        "A positive NPV increases firm value under the lecture decision rule.",
        "Invest if IRR is greater than the cost of capital."
      ],
      "answer": 0,
      "explanation": "Growing perpetuity assumes g < r in the course formula. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slides 47–52",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1041",
      "module": "tvm",
      "concept": "growing-cash-flows",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Growing Perpetuities & Growing Annuities?",
      "options": [
        "Do not apply the growing-perpetuity formula when g is not below r.",
        "Do not use the full APR as the monthly, quarterly, or semiannual periodic rate.",
        "For mutually exclusive alternatives, do not simply choose the highest IRR.",
        "Do not rank mutually exclusive projects only by IRR."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not apply the growing-perpetuity formula when g is not below r. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slides 47–52",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1042",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches APR, Periodic Rate & EAR?",
      "options": [
        "When an interest rate is stated per year but interest is compounded more frequently than once per year, the stated annual rate is the annual percentage rate (APR).",
        "NPV is the difference between the present value of cash inflows and the present value of cash outflows.",
        "IRR is the interest rate that sets the net present value of the cash flows equal to zero.",
        "The time value of money refers to a dollar in hand today being worth more than a dollar received in the future."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to APR, Periodic Rate & EAR. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slides 54–56",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1043",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with APR, Periodic Rate & EAR in the course material?",
      "options": [
        "Periodic rate = APR/m when the quoted rate is APR with m compounding periods.",
        "A positive NPV increases firm value under the lecture decision rule.",
        "Invest if IRR is greater than the cost of capital.",
        "Compounding translates a value today into a future value."
      ],
      "answer": 0,
      "explanation": "Periodic rate = APR/m when the quoted rate is APR with m compounding periods. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slides 54–56",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1044",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on APR, Periodic Rate & EAR?",
      "options": [
        "Do not use the full APR as the monthly, quarterly, or semiannual periodic rate.",
        "For mutually exclusive alternatives, do not simply choose the highest IRR.",
        "Do not rank mutually exclusive projects only by IRR.",
        "Compounding moves value forward in time; discounting moves value backward in time."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not use the full APR as the monthly, quarterly, or semiannual periodic rate. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slides 54–56",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1045",
      "module": "tvm",
      "concept": "npv",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Net Present Value (NPV)?",
      "options": [
        "NPV is the difference between the present value of cash inflows and the present value of cash outflows.",
        "IRR is the interest rate that sets the net present value of the cash flows equal to zero.",
        "The time value of money refers to a dollar in hand today being worth more than a dollar received in the future.",
        "A lump sum payment is a single cash payment received at the beginning or end of an investment horizon."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Net Present Value (NPV). The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slides 61–64",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1046",
      "module": "tvm",
      "concept": "npv",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Net Present Value (NPV) in the course material?",
      "options": [
        "A positive NPV increases firm value under the lecture decision rule.",
        "Invest if IRR is greater than the cost of capital.",
        "Compounding translates a value today into a future value.",
        "Higher r lowers PV for a fixed future value and time horizon."
      ],
      "answer": 0,
      "explanation": "A positive NPV increases firm value under the lecture decision rule. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slides 61–64",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1047",
      "module": "tvm",
      "concept": "npv",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Net Present Value (NPV)?",
      "options": [
        "For mutually exclusive alternatives, do not simply choose the highest IRR.",
        "Do not rank mutually exclusive projects only by IRR.",
        "Compounding moves value forward in time; discounting moves value backward in time.",
        "Match the rate per period with the number of periods."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: For mutually exclusive alternatives, do not simply choose the highest IRR. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slides 61–64",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1048",
      "module": "tvm",
      "concept": "irr",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Internal Rate of Return (IRR)?",
      "options": [
        "IRR is the interest rate that sets the net present value of the cash flows equal to zero.",
        "The time value of money refers to a dollar in hand today being worth more than a dollar received in the future.",
        "A lump sum payment is a single cash payment received at the beginning or end of an investment horizon.",
        "When cash flows differ across periods, each cash flow can be valued separately and the values added at a common date."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Internal Rate of Return (IRR). The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slides 68–75",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1049",
      "module": "tvm",
      "concept": "irr",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Internal Rate of Return (IRR) in the course material?",
      "options": [
        "Invest if IRR is greater than the cost of capital.",
        "Compounding translates a value today into a future value.",
        "Higher r lowers PV for a fixed future value and time horizon.",
        "Cash flows must be brought to the same point in time before they are added."
      ],
      "answer": 0,
      "explanation": "Invest if IRR is greater than the cost of capital. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slides 68–75",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1050",
      "module": "tvm",
      "concept": "irr",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Internal Rate of Return (IRR)?",
      "options": [
        "Do not rank mutually exclusive projects only by IRR.",
        "Compounding moves value forward in time; discounting moves value backward in time.",
        "Match the rate per period with the number of periods.",
        "Do not discount all cash flows by the same number of periods unless they occur at the same date."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not rank mutually exclusive projects only by IRR. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slides 68–75",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1051",
      "module": "personal",
      "concept": "mortgage-arm",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Adjustable-Rate Mortgage (ARM)?",
      "options": [
        "For a one-year ARM, the initial rate applies only for the first year; the new payment is based on the remaining balance, new rate, and remaining term.",
        "The Q&A compares a $400,000 lump sum at retirement with 20 annual $40,000 payments, with the first payment made at retirement.",
        "Q&A 3 treats an 8% effective annual rate as a monthly effective rate of approximately (1.08)^(1/12) − 1 = 0.643% per month.",
        "In Q&A 3, the instructor confirms a method that values the remaining payments immediately before the 12th annual payment is due."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Adjustable-Rate Mortgage (ARM). The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "Q&A 1.pdf · Question 1 / instructor comment",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1052",
      "module": "personal",
      "concept": "mortgage-arm",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Adjustable-Rate Mortgage (ARM) in the course material?",
      "options": [
        "Instructor Q&A: a $100,000, 30-year mortgage at 10.5% APR has a monthly payment of about $914.74 for the first year.",
        "Annuity timing must match the first-payment date.",
        "EAR-to-monthly conversion uses (1+EAR)^(1/12)−1.",
        "A payment due immediately is not discounted like later payments."
      ],
      "answer": 0,
      "explanation": "Instructor Q&A: a $100,000, 30-year mortgage at 10.5% APR has a monthly payment of about $914.74 for the first year. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "Q&A 1.pdf · Question 1 / instructor comment",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1053",
      "module": "personal",
      "concept": "mortgage-arm",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Adjustable-Rate Mortgage (ARM)?",
      "options": [
        "Do not reuse the original loan principal when recalculating the second-year payment; use the remaining balance.",
        "A first payment “at retirement” changes the timing relative to an ordinary annuity.",
        "Do not divide an EAR directly by 12 as if it were an APR.",
        "“Immediately before” a payment date is a timing cue: the imminent payment is due at that date."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not reuse the original loan principal when recalculating the second-year payment; use the remaining balance. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "Q&A 1.pdf · Question 1 / instructor comment",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1054",
      "module": "personal",
      "concept": "retirement-annuity",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Retirement: Lump Sum vs Annuity?",
      "options": [
        "The Q&A compares a $400,000 lump sum at retirement with 20 annual $40,000 payments, with the first payment made at retirement.",
        "Q&A 3 treats an 8% effective annual rate as a monthly effective rate of approximately (1.08)^(1/12) − 1 = 0.643% per month.",
        "In Q&A 3, the instructor confirms a method that values the remaining payments immediately before the 12th annual payment is due.",
        "The instructor Q&A compares a $23,000 car financed for 3 years at 2.9% with a cash-rebate alternative financed at a 9% bank rate."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Retirement: Lump Sum vs Annuity. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "Q&A 1.pdf · Questions 2–3 / instructor comments",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1055",
      "module": "personal",
      "concept": "retirement-annuity",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Retirement: Lump Sum vs Annuity in the course material?",
      "options": [
        "Annuity timing must match the first-payment date.",
        "EAR-to-monthly conversion uses (1+EAR)^(1/12)−1.",
        "A payment due immediately is not discounted like later payments.",
        "Instructor comment: the cash rebate must exceed about $3,627.47 to entice the customer away from the 2.9% financing offer in that problem."
      ],
      "answer": 0,
      "explanation": "Annuity timing must match the first-payment date. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "Q&A 1.pdf · Questions 2–3 / instructor comments",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1056",
      "module": "personal",
      "concept": "retirement-annuity",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Retirement: Lump Sum vs Annuity?",
      "options": [
        "A first payment “at retirement” changes the timing relative to an ordinary annuity.",
        "Do not divide an EAR directly by 12 as if it were an APR.",
        "“Immediately before” a payment date is a timing cue: the imminent payment is due at that date.",
        "Do not compare “future value minus principal” when the offers have different financing rates and payment streams."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: A first payment “at retirement” changes the timing relative to an ordinary annuity. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "Q&A 1.pdf · Questions 2–3 / instructor comments",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1057",
      "module": "personal",
      "concept": "loan-consolidation",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Loan Consolidation & Rate Conversion?",
      "options": [
        "Q&A 3 treats an 8% effective annual rate as a monthly effective rate of approximately (1.08)^(1/12) − 1 = 0.643% per month.",
        "In Q&A 3, the instructor confirms a method that values the remaining payments immediately before the 12th annual payment is due.",
        "The instructor Q&A compares a $23,000 car financed for 3 years at 2.9% with a cash-rebate alternative financed at a 9% bank rate.",
        "The lecture example borrows VND 5 billion for 5 years at 15% and pays VND 750 million interest each year plus VND 5 billion principal at the end of year 5."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Loan Consolidation & Rate Conversion. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "Q&A 3.pdf · Question d / instructor comment",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1058",
      "module": "personal",
      "concept": "loan-consolidation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Loan Consolidation & Rate Conversion in the course material?",
      "options": [
        "EAR-to-monthly conversion uses (1+EAR)^(1/12)−1.",
        "A payment due immediately is not discounted like later payments.",
        "Instructor comment: the cash rebate must exceed about $3,627.47 to entice the customer away from the 2.9% financing offer in that problem.",
        "Annual interest payment = principal × interest rate."
      ],
      "answer": 0,
      "explanation": "EAR-to-monthly conversion uses (1+EAR)^(1/12)−1. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "Q&A 3.pdf · Question d / instructor comment",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1059",
      "module": "personal",
      "concept": "loan-consolidation",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Loan Consolidation & Rate Conversion?",
      "options": [
        "Do not divide an EAR directly by 12 as if it were an APR.",
        "“Immediately before” a payment date is a timing cue: the imminent payment is due at that date.",
        "Do not compare “future value minus principal” when the offers have different financing rates and payment streams.",
        "Do not amortize the principal if the loan is explicitly interest-only."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not divide an EAR directly by 12 as if it were an APR. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "Q&A 3.pdf · Question d / instructor comment",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1060",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Mortgage Payoff Before a Scheduled Payment?",
      "options": [
        "In Q&A 3, the instructor confirms a method that values the remaining payments immediately before the 12th annual payment is due.",
        "The instructor Q&A compares a $23,000 car financed for 3 years at 2.9% with a cash-rebate alternative financed at a 9% bank rate.",
        "The lecture example borrows VND 5 billion for 5 years at 15% and pays VND 750 million interest each year plus VND 5 billion principal at the end of year 5.",
        "The uploaded Credit Card sheet uses a 30% annual credit-card rate (2.5% per month) and a 2% required minimum balance/payment setting to illustrate balance dynamics."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Mortgage Payoff Before a Scheduled Payment. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "Q&A 3.pdf · Question e / instructor comment",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1061",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Mortgage Payoff Before a Scheduled Payment in the course material?",
      "options": [
        "A payment due immediately is not discounted like later payments.",
        "Instructor comment: the cash rebate must exceed about $3,627.47 to entice the customer away from the 2.9% financing offer in that problem.",
        "Annual interest payment = principal × interest rate.",
        "Interest is added to the outstanding balance before the ending balance is determined."
      ],
      "answer": 0,
      "explanation": "A payment due immediately is not discounted like later payments. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "Q&A 3.pdf · Question e / instructor comment",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1062",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Mortgage Payoff Before a Scheduled Payment?",
      "options": [
        "“Immediately before” a payment date is a timing cue: the imminent payment is due at that date.",
        "Do not compare “future value minus principal” when the offers have different financing rates and payment streams.",
        "Do not amortize the principal if the loan is explicitly interest-only.",
        "Treat this workbook as a learning/practice source, not as an official answer key."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: “Immediately before” a payment date is a timing cue: the imminent payment is due at that date. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "Q&A 3.pdf · Question e / instructor comment",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1063",
      "module": "personal",
      "concept": "financing-rebate",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Low-Rate Financing vs Cash Rebate?",
      "options": [
        "The instructor Q&A compares a $23,000 car financed for 3 years at 2.9% with a cash-rebate alternative financed at a 9% bank rate.",
        "The lecture example borrows VND 5 billion for 5 years at 15% and pays VND 750 million interest each year plus VND 5 billion principal at the end of year 5.",
        "The uploaded Credit Card sheet uses a 30% annual credit-card rate (2.5% per month) and a 2% required minimum balance/payment setting to illustrate balance dynamics.",
        "Q&A 3 describes annual deposits beginning at $500 and increasing 10% each year, with 5% annual compounding, and points students to the growing-annuity approach or a spreadsheet."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Low-Rate Financing vs Cash Rebate. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "Q&A 1.pdf · Question 5 / instructor comment",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1064",
      "module": "personal",
      "concept": "financing-rebate",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Low-Rate Financing vs Cash Rebate in the course material?",
      "options": [
        "Instructor comment: the cash rebate must exceed about $3,627.47 to entice the customer away from the 2.9% financing offer in that problem.",
        "Annual interest payment = principal × interest rate.",
        "Interest is added to the outstanding balance before the ending balance is determined.",
        "The first cash flow does not grow; the last cash flow reflects N−1 periods of growth."
      ],
      "answer": 0,
      "explanation": "Instructor comment: the cash rebate must exceed about $3,627.47 to entice the customer away from the 2.9% financing offer in that problem. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "Q&A 1.pdf · Question 5 / instructor comment",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1065",
      "module": "personal",
      "concept": "financing-rebate",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Low-Rate Financing vs Cash Rebate?",
      "options": [
        "Do not compare “future value minus principal” when the offers have different financing rates and payment streams.",
        "Do not amortize the principal if the loan is explicitly interest-only.",
        "Treat this workbook as a learning/practice source, not as an official answer key.",
        "Count the growth periods separately from the investment/discount periods."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not compare “future value minus principal” when the offers have different financing rates and payment streams. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "Q&A 1.pdf · Question 5 / instructor comment",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1066",
      "module": "personal",
      "concept": "interest-only-personal",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Interest-Only Loan Cash Flows?",
      "options": [
        "The lecture example borrows VND 5 billion for 5 years at 15% and pays VND 750 million interest each year plus VND 5 billion principal at the end of year 5.",
        "The uploaded Credit Card sheet uses a 30% annual credit-card rate (2.5% per month) and a 2% required minimum balance/payment setting to illustrate balance dynamics.",
        "Q&A 3 describes annual deposits beginning at $500 and increasing 10% each year, with 5% annual compounding, and points students to the growing-annuity approach or a spreadsheet.",
        "For a one-year ARM, the initial rate applies only for the first year; the new payment is based on the remaining balance, new rate, and remaining term."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Interest-Only Loan Cash Flows. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Time Value of Money.pdf · Slide 41",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1067",
      "module": "personal",
      "concept": "interest-only-personal",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Interest-Only Loan Cash Flows in the course material?",
      "options": [
        "Annual interest payment = principal × interest rate.",
        "Interest is added to the outstanding balance before the ending balance is determined.",
        "The first cash flow does not grow; the last cash flow reflects N−1 periods of growth.",
        "Instructor Q&A: a $100,000, 30-year mortgage at 10.5% APR has a monthly payment of about $914.74 for the first year."
      ],
      "answer": 0,
      "explanation": "Annual interest payment = principal × interest rate. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Time Value of Money.pdf · Slide 41",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1068",
      "module": "personal",
      "concept": "interest-only-personal",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Interest-Only Loan Cash Flows?",
      "options": [
        "Do not amortize the principal if the loan is explicitly interest-only.",
        "Treat this workbook as a learning/practice source, not as an official answer key.",
        "Count the growth periods separately from the investment/discount periods.",
        "Do not reuse the original loan principal when recalculating the second-year payment; use the remaining balance."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not amortize the principal if the loan is explicitly interest-only. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Time Value of Money.pdf · Slide 41",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1069",
      "module": "personal",
      "concept": "credit-card-mechanics",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Credit-Card Balance Mechanics?",
      "options": [
        "The uploaded Credit Card sheet uses a 30% annual credit-card rate (2.5% per month) and a 2% required minimum balance/payment setting to illustrate balance dynamics.",
        "Q&A 3 describes annual deposits beginning at $500 and increasing 10% each year, with 5% annual compounding, and points students to the growing-annuity approach or a spreadsheet.",
        "For a one-year ARM, the initial rate applies only for the first year; the new payment is based on the remaining balance, new rate, and remaining term.",
        "The Q&A compares a $400,000 lump sum at retirement with 20 annual $40,000 payments, with the first payment made at retirement."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Credit-Card Balance Mechanics. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "Copy of Time Value of Money.xlsx · Sheet “Credit Card”",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1070",
      "module": "personal",
      "concept": "credit-card-mechanics",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Credit-Card Balance Mechanics in the course material?",
      "options": [
        "Interest is added to the outstanding balance before the ending balance is determined.",
        "The first cash flow does not grow; the last cash flow reflects N−1 periods of growth.",
        "Instructor Q&A: a $100,000, 30-year mortgage at 10.5% APR has a monthly payment of about $914.74 for the first year.",
        "Annuity timing must match the first-payment date."
      ],
      "answer": 0,
      "explanation": "Interest is added to the outstanding balance before the ending balance is determined. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "Copy of Time Value of Money.xlsx · Sheet “Credit Card”",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1071",
      "module": "personal",
      "concept": "credit-card-mechanics",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Credit-Card Balance Mechanics?",
      "options": [
        "Treat this workbook as a learning/practice source, not as an official answer key.",
        "Count the growth periods separately from the investment/discount periods.",
        "Do not reuse the original loan principal when recalculating the second-year payment; use the remaining balance.",
        "A first payment “at retirement” changes the timing relative to an ordinary annuity."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Treat this workbook as a learning/practice source, not as an official answer key. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "Copy of Time Value of Money.xlsx · Sheet “Credit Card”",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1072",
      "module": "personal",
      "concept": "growing-savings",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Growing Savings Plan?",
      "options": [
        "Q&A 3 describes annual deposits beginning at $500 and increasing 10% each year, with 5% annual compounding, and points students to the growing-annuity approach or a spreadsheet.",
        "For a one-year ARM, the initial rate applies only for the first year; the new payment is based on the remaining balance, new rate, and remaining term.",
        "The Q&A compares a $400,000 lump sum at retirement with 20 annual $40,000 payments, with the first payment made at retirement.",
        "Q&A 3 treats an 8% effective annual rate as a monthly effective rate of approximately (1.08)^(1/12) − 1 = 0.643% per month."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Growing Savings Plan. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "Q&A 3.pdf · Question f / instructor comment",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1073",
      "module": "personal",
      "concept": "growing-savings",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Growing Savings Plan in the course material?",
      "options": [
        "The first cash flow does not grow; the last cash flow reflects N−1 periods of growth.",
        "Instructor Q&A: a $100,000, 30-year mortgage at 10.5% APR has a monthly payment of about $914.74 for the first year.",
        "Annuity timing must match the first-payment date.",
        "EAR-to-monthly conversion uses (1+EAR)^(1/12)−1."
      ],
      "answer": 0,
      "explanation": "The first cash flow does not grow; the last cash flow reflects N−1 periods of growth. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "Q&A 3.pdf · Question f / instructor comment",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1074",
      "module": "personal",
      "concept": "growing-savings",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Growing Savings Plan?",
      "options": [
        "Count the growth periods separately from the investment/discount periods.",
        "Do not reuse the original loan principal when recalculating the second-year payment; use the remaining balance.",
        "A first payment “at retirement” changes the timing relative to an ordinary annuity.",
        "Do not divide an EAR directly by 12 as if it were an APR."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Count the growth periods separately from the investment/discount periods. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "Q&A 3.pdf · Question f / instructor comment",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1075",
      "module": "markets",
      "concept": "market-role",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Role of Financial Markets?",
      "options": [
        "Financial markets are markets in which funds are moved from people who have an excess of available funds to people who have investment opportunities and lack funds.",
        "The lecture distinguishes debt versus equity, primary versus secondary markets, and money versus capital markets.",
        "Money markets are markets for short-term, highly liquid debt securities; capital markets are markets for intermediate- and long-term debt and corporate stocks.",
        "A derivative security is a financial security whose payoff is linked to another, previously issued security."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Role of Financial Markets. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 4",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1076",
      "module": "markets",
      "concept": "market-role",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Role of Financial Markets in the course material?",
      "options": [
        "Financial markets are structures through which funds flow.",
        "Debt instruments promise specified payments and have maturity dates.",
        "Money-market securities generally mature in one year or less and have high liquidity.",
        "Foreign exchange risk is the sensitivity of foreign-investment cash flows to changes in currency prices."
      ],
      "answer": 0,
      "explanation": "Financial markets are structures through which funds flow. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 4",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1077",
      "module": "markets",
      "concept": "market-role",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Role of Financial Markets?",
      "options": [
        "Do not define a financial market only as a place where stocks trade.",
        "Primary versus secondary describes issue status, while exchange versus OTC describes the trading venue/structure.",
        "Do not classify corporate stock as a money-market instrument merely because it trades frequently.",
        "A derivative is defined by its linked payoff, not by being “high risk” alone."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not define a financial market only as a place where stocks trade. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 4",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1078",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Debt, Equity, Primary, Secondary, Exchange & OTC?",
      "options": [
        "The lecture distinguishes debt versus equity, primary versus secondary markets, and money versus capital markets.",
        "Money markets are markets for short-term, highly liquid debt securities; capital markets are markets for intermediate- and long-term debt and corporate stocks.",
        "A derivative security is a financial security whose payoff is linked to another, previously issued security.",
        "A holding period return is the return earned from holding an asset for a single specified period of time."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Debt, Equity, Primary, Secondary, Exchange & OTC. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 5–8",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1079",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Debt, Equity, Primary, Secondary, Exchange & OTC in the course material?",
      "options": [
        "Debt instruments promise specified payments and have maturity dates.",
        "Money-market securities generally mature in one year or less and have high liquidity.",
        "Foreign exchange risk is the sensitivity of foreign-investment cash flows to changes in currency prices.",
        "Risky-asset return has two components in the lecture: periodic income and price change."
      ],
      "answer": 0,
      "explanation": "Debt instruments promise specified payments and have maturity dates. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 5–8",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1080",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Debt, Equity, Primary, Secondary, Exchange & OTC?",
      "options": [
        "Primary versus secondary describes issue status, while exchange versus OTC describes the trading venue/structure.",
        "Do not classify corporate stock as a money-market instrument merely because it trades frequently.",
        "A derivative is defined by its linked payoff, not by being “high risk” alone.",
        "Do not treat every asset return as a promised interest rate."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Primary versus secondary describes issue status, while exchange versus OTC describes the trading venue/structure. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 5–8",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1081",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Money Markets vs Capital Markets?",
      "options": [
        "Money markets are markets for short-term, highly liquid debt securities; capital markets are markets for intermediate- and long-term debt and corporate stocks.",
        "A derivative security is a financial security whose payoff is linked to another, previously issued security.",
        "A holding period return is the return earned from holding an asset for a single specified period of time.",
        "A foreign bond is sold in a foreign country and denominated in that country’s currency; a Eurobond is denominated in a currency other than that of the country in which it is sold."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Money Markets vs Capital Markets. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 9–17",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1082",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Money Markets vs Capital Markets in the course material?",
      "options": [
        "Money-market securities generally mature in one year or less and have high liquidity.",
        "Foreign exchange risk is the sensitivity of foreign-investment cash flows to changes in currency prices.",
        "Risky-asset return has two components in the lecture: periodic income and price change.",
        "Eurocurrencies are foreign currencies deposited in banks outside the home country."
      ],
      "answer": 0,
      "explanation": "Money-market securities generally mature in one year or less and have high liquidity. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 9–17",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1083",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Money Markets vs Capital Markets?",
      "options": [
        "Do not classify corporate stock as a money-market instrument merely because it trades frequently.",
        "A derivative is defined by its linked payoff, not by being “high risk” alone.",
        "Do not treat every asset return as a promised interest rate.",
        "“Euro” in Eurodollar does not mean the euro currency."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not classify corporate stock as a money-market instrument merely because it trades frequently. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 9–17",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1084",
      "module": "markets",
      "concept": "fx-derivatives",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Foreign Exchange & Derivative Markets?",
      "options": [
        "A derivative security is a financial security whose payoff is linked to another, previously issued security.",
        "A holding period return is the return earned from holding an asset for a single specified period of time.",
        "A foreign bond is sold in a foreign country and denominated in that country’s currency; a Eurobond is denominated in a currency other than that of the country in which it is sold.",
        "Financial institutions perform the essential function of channeling funds from those with surplus funds to those with shortages of funds."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Foreign Exchange & Derivative Markets. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 18–20",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1085",
      "module": "markets",
      "concept": "fx-derivatives",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Foreign Exchange & Derivative Markets in the course material?",
      "options": [
        "Foreign exchange risk is the sensitivity of foreign-investment cash flows to changes in currency prices.",
        "Risky-asset return has two components in the lecture: periodic income and price change.",
        "Eurocurrencies are foreign currencies deposited in banks outside the home country.",
        "Depository institutions take deposits and make loans."
      ],
      "answer": 0,
      "explanation": "Foreign exchange risk is the sensitivity of foreign-investment cash flows to changes in currency prices. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 18–20",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1086",
      "module": "markets",
      "concept": "fx-derivatives",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Foreign Exchange & Derivative Markets?",
      "options": [
        "A derivative is defined by its linked payoff, not by being “high risk” alone.",
        "Do not treat every asset return as a promised interest rate.",
        "“Euro” in Eurodollar does not mean the euro currency.",
        "Do not think of intermediaries only as banks; the course includes multiple types of financial institutions."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: A derivative is defined by its linked payoff, not by being “high risk” alone. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 18–20",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1087",
      "module": "markets",
      "concept": "market-rates",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Interest Rates & Holding-Period Returns?",
      "options": [
        "A holding period return is the return earned from holding an asset for a single specified period of time.",
        "A foreign bond is sold in a foreign country and denominated in that country’s currency; a Eurobond is denominated in a currency other than that of the country in which it is sold.",
        "Financial institutions perform the essential function of channeling funds from those with surplus funds to those with shortages of funds.",
        "Insurance companies provide insurance and investment services for a premium; pension funds accept contributions today in exchange for promised future payments."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Interest Rates & Holding-Period Returns. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 21–22",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1088",
      "module": "markets",
      "concept": "market-rates",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Interest Rates & Holding-Period Returns in the course material?",
      "options": [
        "Risky-asset return has two components in the lecture: periodic income and price change.",
        "Eurocurrencies are foreign currencies deposited in banks outside the home country.",
        "Depository institutions take deposits and make loans.",
        "Life insurers tend to hold longer-maturity assets than property and casualty insurers because their liabilities are longer dated."
      ],
      "answer": 0,
      "explanation": "Risky-asset return has two components in the lecture: periodic income and price change. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 21–22",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1089",
      "module": "markets",
      "concept": "market-rates",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Interest Rates & Holding-Period Returns?",
      "options": [
        "Do not treat every asset return as a promised interest rate.",
        "“Euro” in Eurodollar does not mean the euro currency.",
        "Do not think of intermediaries only as banks; the course includes multiple types of financial institutions.",
        "Match asset maturity to the timing of expected claims; life and property/casualty insurers do not have identical liability timing."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not treat every asset return as a promised interest rate. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 21–22",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1090",
      "module": "markets",
      "concept": "international-markets",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Internationalization of Financial Markets?",
      "options": [
        "A foreign bond is sold in a foreign country and denominated in that country’s currency; a Eurobond is denominated in a currency other than that of the country in which it is sold.",
        "Financial institutions perform the essential function of channeling funds from those with surplus funds to those with shortages of funds.",
        "Insurance companies provide insurance and investment services for a premium; pension funds accept contributions today in exchange for promised future payments.",
        "Finance companies raise funds in financial markets and make loans; mutual funds sell shares and purchase diversified portfolios; investment banks raise funds and provide securities/trading/advisory services."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Internationalization of Financial Markets. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 23",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1091",
      "module": "markets",
      "concept": "international-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Internationalization of Financial Markets in the course material?",
      "options": [
        "Eurocurrencies are foreign currencies deposited in banks outside the home country.",
        "Depository institutions take deposits and make loans.",
        "Life insurers tend to hold longer-maturity assets than property and casualty insurers because their liabilities are longer dated.",
        "Finance companies specialize in consumer, business, and sales loans."
      ],
      "answer": 0,
      "explanation": "Eurocurrencies are foreign currencies deposited in banks outside the home country. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 23",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1092",
      "module": "markets",
      "concept": "international-markets",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Internationalization of Financial Markets?",
      "options": [
        "“Euro” in Eurodollar does not mean the euro currency.",
        "Do not think of intermediaries only as banks; the course includes multiple types of financial institutions.",
        "Match asset maturity to the timing of expected claims; life and property/casualty insurers do not have identical liability timing.",
        "Do not confuse a mutual fund share with a direct ownership position in each underlying security."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: “Euro” in Eurodollar does not mean the euro currency. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 23",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1093",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Financial Institutions & Intermediation?",
      "options": [
        "Financial institutions perform the essential function of channeling funds from those with surplus funds to those with shortages of funds.",
        "Insurance companies provide insurance and investment services for a premium; pension funds accept contributions today in exchange for promised future payments.",
        "Finance companies raise funds in financial markets and make loans; mutual funds sell shares and purchase diversified portfolios; investment banks raise funds and provide securities/trading/advisory services.",
        "Adverse selection is asymmetric information before the transaction takes place; moral hazard is asymmetric information after the transaction takes place."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Financial Institutions & Intermediation. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 27–31",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1094",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Financial Institutions & Intermediation in the course material?",
      "options": [
        "Depository institutions take deposits and make loans.",
        "Life insurers tend to hold longer-maturity assets than property and casualty insurers because their liabilities are longer dated.",
        "Finance companies specialize in consumer, business, and sales loans.",
        "The lemons problem illustrates adverse selection when quality cannot be assessed."
      ],
      "answer": 0,
      "explanation": "Depository institutions take deposits and make loans. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 27–31",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1095",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Financial Institutions & Intermediation?",
      "options": [
        "Do not think of intermediaries only as banks; the course includes multiple types of financial institutions.",
        "Match asset maturity to the timing of expected claims; life and property/casualty insurers do not have identical liability timing.",
        "Do not confuse a mutual fund share with a direct ownership position in each underlying security.",
        "Use timing: adverse selection is before the transaction; moral hazard is after."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not think of intermediaries only as banks; the course includes multiple types of financial institutions. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 27–31",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1096",
      "module": "markets",
      "concept": "insurance-pensions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Insurance Companies & Pension Funds?",
      "options": [
        "Insurance companies provide insurance and investment services for a premium; pension funds accept contributions today in exchange for promised future payments.",
        "Finance companies raise funds in financial markets and make loans; mutual funds sell shares and purchase diversified portfolios; investment banks raise funds and provide securities/trading/advisory services.",
        "Adverse selection is asymmetric information before the transaction takes place; moral hazard is asymmetric information after the transaction takes place.",
        "Financial markets are markets in which funds are moved from people who have an excess of available funds to people who have investment opportunities and lack funds."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Insurance Companies & Pension Funds. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 32–43",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1097",
      "module": "markets",
      "concept": "insurance-pensions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Insurance Companies & Pension Funds in the course material?",
      "options": [
        "Life insurers tend to hold longer-maturity assets than property and casualty insurers because their liabilities are longer dated.",
        "Finance companies specialize in consumer, business, and sales loans.",
        "The lemons problem illustrates adverse selection when quality cannot be assessed.",
        "Financial markets are structures through which funds flow."
      ],
      "answer": 0,
      "explanation": "Life insurers tend to hold longer-maturity assets than property and casualty insurers because their liabilities are longer dated. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 32–43",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1098",
      "module": "markets",
      "concept": "insurance-pensions",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Insurance Companies & Pension Funds?",
      "options": [
        "Match asset maturity to the timing of expected claims; life and property/casualty insurers do not have identical liability timing.",
        "Do not confuse a mutual fund share with a direct ownership position in each underlying security.",
        "Use timing: adverse selection is before the transaction; moral hazard is after.",
        "Do not define a financial market only as a place where stocks trade."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Match asset maturity to the timing of expected claims; life and property/casualty insurers do not have identical liability timing. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 32–43",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1099",
      "module": "markets",
      "concept": "finance-companies-securities",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Finance Companies, Mutual Funds & Investment Banks?",
      "options": [
        "Finance companies raise funds in financial markets and make loans; mutual funds sell shares and purchase diversified portfolios; investment banks raise funds and provide securities/trading/advisory services.",
        "Adverse selection is asymmetric information before the transaction takes place; moral hazard is asymmetric information after the transaction takes place.",
        "Financial markets are markets in which funds are moved from people who have an excess of available funds to people who have investment opportunities and lack funds.",
        "The lecture distinguishes debt versus equity, primary versus secondary markets, and money versus capital markets."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Finance Companies, Mutual Funds & Investment Banks. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 44–55",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1100",
      "module": "markets",
      "concept": "finance-companies-securities",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Finance Companies, Mutual Funds & Investment Banks in the course material?",
      "options": [
        "Finance companies specialize in consumer, business, and sales loans.",
        "The lemons problem illustrates adverse selection when quality cannot be assessed.",
        "Financial markets are structures through which funds flow.",
        "Debt instruments promise specified payments and have maturity dates."
      ],
      "answer": 0,
      "explanation": "Finance companies specialize in consumer, business, and sales loans. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 44–55",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1101",
      "module": "markets",
      "concept": "finance-companies-securities",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Finance Companies, Mutual Funds & Investment Banks?",
      "options": [
        "Do not confuse a mutual fund share with a direct ownership position in each underlying security.",
        "Use timing: adverse selection is before the transaction; moral hazard is after.",
        "Do not define a financial market only as a place where stocks trade.",
        "Primary versus secondary describes issue status, while exchange versus OTC describes the trading venue/structure."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not confuse a mutual fund share with a direct ownership position in each underlying security. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slides 44–55",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1102",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Asymmetric Information: Adverse Selection & Moral Hazard?",
      "options": [
        "Adverse selection is asymmetric information before the transaction takes place; moral hazard is asymmetric information after the transaction takes place.",
        "Financial markets are markets in which funds are moved from people who have an excess of available funds to people who have investment opportunities and lack funds.",
        "The lecture distinguishes debt versus equity, primary versus secondary markets, and money versus capital markets.",
        "Money markets are markets for short-term, highly liquid debt securities; capital markets are markets for intermediate- and long-term debt and corporate stocks."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Asymmetric Information: Adverse Selection & Moral Hazard. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "Asymmetric Infos.pdf · Sections “Asymmetric Information”, “Adverse Selection”, and “Moral Hazard”",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1103",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Asymmetric Information: Adverse Selection & Moral Hazard in the course material?",
      "options": [
        "The lemons problem illustrates adverse selection when quality cannot be assessed.",
        "Financial markets are structures through which funds flow.",
        "Debt instruments promise specified payments and have maturity dates.",
        "Money-market securities generally mature in one year or less and have high liquidity."
      ],
      "answer": 0,
      "explanation": "The lemons problem illustrates adverse selection when quality cannot be assessed. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "Asymmetric Infos.pdf · Sections “Asymmetric Information”, “Adverse Selection”, and “Moral Hazard”",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1104",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Asymmetric Information: Adverse Selection & Moral Hazard?",
      "options": [
        "Use timing: adverse selection is before the transaction; moral hazard is after.",
        "Do not define a financial market only as a place where stocks trade.",
        "Primary versus secondary describes issue status, while exchange versus OTC describes the trading venue/structure.",
        "Do not classify corporate stock as a money-market instrument merely because it trades frequently."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Use timing: adverse selection is before the transaction; moral hazard is after. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "Asymmetric Infos.pdf · Sections “Asymmetric Information”, “Adverse Selection”, and “Moral Hazard”",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1105",
      "module": "valuation",
      "concept": "return-measures",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Required, Expected & Realized Rates of Return?",
      "options": [
        "The required rate of return is the interest rate used to find fair present value and reflects the risks associated with the security.",
        "Fair value of a bond is the present value of all promised/projected cash flows discounted at the required rate of return.",
        "Pure discount bonds promise a single cash payment at a future maturity date; the difference between purchase price and face value is the investor’s interest.",
        "As interest rates increase, present values of bonds and bond prices decrease at a decreasing rate."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Required, Expected & Realized Rates of Return. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 3–6",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1106",
      "module": "valuation",
      "concept": "return-measures",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Required, Expected & Realized Rates of Return in the course material?",
      "options": [
        "Required return is an ex ante rate used in valuation.",
        "Promised bond cash flows come from coupon payments and the maturity value.",
        "Coupon payment INT = 0 for a zero-coupon bond.",
        "Higher required return → lower present value of fixed bond cash flows."
      ],
      "answer": 0,
      "explanation": "Required return is an ex ante rate used in valuation. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 3–6",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1107",
      "module": "valuation",
      "concept": "return-measures",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Required, Expected & Realized Rates of Return?",
      "options": [
        "Do not label a realized return as “required” simply because it happened to equal the required return.",
        "Use a periodic coupon and periodic required return consistent with the payment frequency.",
        "Do not add an annuity component to a true zero-coupon bond.",
        "Do not assume bond prices move in the same direction as market interest rates."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not label a realized return as “required” simply because it happened to equal the required return. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 3–6",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1108",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Coupon Bond Valuation?",
      "options": [
        "Fair value of a bond is the present value of all promised/projected cash flows discounted at the required rate of return.",
        "Pure discount bonds promise a single cash payment at a future maturity date; the difference between purchase price and face value is the investor’s interest.",
        "As interest rates increase, present values of bonds and bond prices decrease at a decreasing rate.",
        "Yield to maturity is the return the bond holder will earn if the bond is bought at its current price, all promised coupon and principal payments are received, and it is held to maturity."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Coupon Bond Valuation. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 7–15",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1109",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Coupon Bond Valuation in the course material?",
      "options": [
        "Promised bond cash flows come from coupon payments and the maturity value.",
        "Coupon payment INT = 0 for a zero-coupon bond.",
        "Higher required return → lower present value of fixed bond cash flows.",
        "The lecture distinguishes premium, par, and discount bonds based on the relationship between bond price and face value."
      ],
      "answer": 0,
      "explanation": "Promised bond cash flows come from coupon payments and the maturity value. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 7–15",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1110",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Coupon Bond Valuation?",
      "options": [
        "Use a periodic coupon and periodic required return consistent with the payment frequency.",
        "Do not add an annuity component to a true zero-coupon bond.",
        "Do not assume bond prices move in the same direction as market interest rates.",
        "YTM is not simply the coupon rate unless the pricing conditions make them coincide."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Use a periodic coupon and periodic required return consistent with the payment frequency. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 7–15",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1111",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Zero-Coupon (Pure Discount) Bonds?",
      "options": [
        "Pure discount bonds promise a single cash payment at a future maturity date; the difference between purchase price and face value is the investor’s interest.",
        "As interest rates increase, present values of bonds and bond prices decrease at a decreasing rate.",
        "Yield to maturity is the return the bond holder will earn if the bond is bought at its current price, all promised coupon and principal payments are received, and it is held to maturity.",
        "The price of a stock is equal to the present value of its future dividends, whose values are uncertain."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Zero-Coupon (Pure Discount) Bonds. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 9 and 21",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1112",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Zero-Coupon (Pure Discount) Bonds in the course material?",
      "options": [
        "Coupon payment INT = 0 for a zero-coupon bond.",
        "Higher required return → lower present value of fixed bond cash flows.",
        "The lecture distinguishes premium, par, and discount bonds based on the relationship between bond price and face value.",
        "Zero growth: dividends remain constant forever."
      ],
      "answer": 0,
      "explanation": "Coupon payment INT = 0 for a zero-coupon bond. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 9 and 21",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1113",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Zero-Coupon (Pure Discount) Bonds?",
      "options": [
        "Do not add an annuity component to a true zero-coupon bond.",
        "Do not assume bond prices move in the same direction as market interest rates.",
        "YTM is not simply the coupon rate unless the pricing conditions make them coincide.",
        "For the Gordon growth model, the denominator requires rₛ − g; the source formula assumes a sustainable constant-growth setting."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not add an annuity component to a true zero-coupon bond. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 9 and 21",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1114",
      "module": "valuation",
      "concept": "bond-price-rates",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Interest Rates & Bond Prices?",
      "options": [
        "As interest rates increase, present values of bonds and bond prices decrease at a decreasing rate.",
        "Yield to maturity is the return the bond holder will earn if the bond is bought at its current price, all promised coupon and principal payments are received, and it is held to maturity.",
        "The price of a stock is equal to the present value of its future dividends, whose values are uncertain.",
        "The bond equivalent yield is the quoted nominal or stated yield on a security; some money-market securities are quoted on a discount basis using a 360-day year."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Interest Rates & Bond Prices. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 16–17",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1115",
      "module": "valuation",
      "concept": "bond-price-rates",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Interest Rates & Bond Prices in the course material?",
      "options": [
        "Higher required return → lower present value of fixed bond cash flows.",
        "The lecture distinguishes premium, par, and discount bonds based on the relationship between bond price and face value.",
        "Zero growth: dividends remain constant forever.",
        "Discount yields use face value as the base and a 360-day year."
      ],
      "answer": 0,
      "explanation": "Higher required return → lower present value of fixed bond cash flows. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 16–17",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1116",
      "module": "valuation",
      "concept": "bond-price-rates",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Interest Rates & Bond Prices?",
      "options": [
        "Do not assume bond prices move in the same direction as market interest rates.",
        "YTM is not simply the coupon rate unless the pricing conditions make them coincide.",
        "For the Gordon growth model, the denominator requires rₛ − g; the source formula assumes a sustainable constant-growth setting.",
        "Do not compare differently quoted money-market yields without first converting them to a common basis."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not assume bond prices move in the same direction as market interest rates. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 16–17",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1117",
      "module": "valuation",
      "concept": "ytm-bond-types",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Yield to Maturity; Premium, Par & Discount Bonds?",
      "options": [
        "Yield to maturity is the return the bond holder will earn if the bond is bought at its current price, all promised coupon and principal payments are received, and it is held to maturity.",
        "The price of a stock is equal to the present value of its future dividends, whose values are uncertain.",
        "The bond equivalent yield is the quoted nominal or stated yield on a security; some money-market securities are quoted on a discount basis using a 360-day year.",
        "The lecture covers Treasury bills, federal funds, repurchase agreements, commercial paper, negotiable certificates of deposit, banker’s acceptances, and Eurodollar instruments."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Yield to Maturity; Premium, Par & Discount Bonds. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 19–20",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1118",
      "module": "valuation",
      "concept": "ytm-bond-types",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Yield to Maturity; Premium, Par & Discount Bonds in the course material?",
      "options": [
        "The lecture distinguishes premium, par, and discount bonds based on the relationship between bond price and face value.",
        "Zero growth: dividends remain constant forever.",
        "Discount yields use face value as the base and a 360-day year.",
        "T-bills are discount securities."
      ],
      "answer": 0,
      "explanation": "The lecture distinguishes premium, par, and discount bonds based on the relationship between bond price and face value. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 19–20",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1119",
      "module": "valuation",
      "concept": "ytm-bond-types",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Yield to Maturity; Premium, Par & Discount Bonds?",
      "options": [
        "YTM is not simply the coupon rate unless the pricing conditions make them coincide.",
        "For the Gordon growth model, the denominator requires rₛ − g; the source formula assumes a sustainable constant-growth setting.",
        "Do not compare differently quoted money-market yields without first converting them to a common basis.",
        "Do not assume all money-market instruments pay periodic coupons."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: YTM is not simply the coupon rate unless the pricing conditions make them coincide. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 19–20",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1120",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Equity Valuation: Dividend Models?",
      "options": [
        "The price of a stock is equal to the present value of its future dividends, whose values are uncertain.",
        "The bond equivalent yield is the quoted nominal or stated yield on a security; some money-market securities are quoted on a discount basis using a 360-day year.",
        "The lecture covers Treasury bills, federal funds, repurchase agreements, commercial paper, negotiable certificates of deposit, banker’s acceptances, and Eurodollar instruments.",
        "Corporate bonds are long-term obligations issued by corporations; a bond indenture is the legal contract specifying the rights and obligations of issuer and bondholders."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Equity Valuation: Dividend Models. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 22–26",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1121",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Equity Valuation: Dividend Models in the course material?",
      "options": [
        "Zero growth: dividends remain constant forever.",
        "Discount yields use face value as the base and a 360-day year.",
        "T-bills are discount securities.",
        "Municipal bonds may be general-obligation or revenue bonds."
      ],
      "answer": 0,
      "explanation": "Zero growth: dividends remain constant forever. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 22–26",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1122",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Equity Valuation: Dividend Models?",
      "options": [
        "For the Gordon growth model, the denominator requires rₛ − g; the source formula assumes a sustainable constant-growth setting.",
        "Do not compare differently quoted money-market yields without first converting them to a common basis.",
        "Do not assume all money-market instruments pay periodic coupons.",
        "Do not infer equal default risk from identical maturity; issuer and contract features matter."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: For the Gordon growth model, the denominator requires rₛ − g; the source formula assumes a sustainable constant-growth setting. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 22–26",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1123",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Money-Market Yield Conventions?",
      "options": [
        "The bond equivalent yield is the quoted nominal or stated yield on a security; some money-market securities are quoted on a discount basis using a 360-day year.",
        "The lecture covers Treasury bills, federal funds, repurchase agreements, commercial paper, negotiable certificates of deposit, banker’s acceptances, and Eurodollar instruments.",
        "Corporate bonds are long-term obligations issued by corporations; a bond indenture is the legal contract specifying the rights and obligations of issuer and bondholders.",
        "Moody’s, S&P, and Fitch rank bonds by perceived default probability; bonds below Baa/BBB are described as speculative grade or high-yield bonds."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Money-Market Yield Conventions. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 29–32",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1124",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Money-Market Yield Conventions in the course material?",
      "options": [
        "Discount yields use face value as the base and a 360-day year.",
        "T-bills are discount securities.",
        "Municipal bonds may be general-obligation or revenue bonds.",
        "Eurobonds are issued outside the country of the currency in which they are denominated."
      ],
      "answer": 0,
      "explanation": "Discount yields use face value as the base and a 360-day year. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 29–32",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1125",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Money-Market Yield Conventions?",
      "options": [
        "Do not compare differently quoted money-market yields without first converting them to a common basis.",
        "Do not assume all money-market instruments pay periodic coupons.",
        "Do not infer equal default risk from identical maturity; issuer and contract features matter.",
        "A high-yield bond is not called “high yield” because it has a high coupon alone; the lecture ties the classification to credit rating/default risk."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not compare differently quoted money-market yields without first converting them to a common basis. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 29–32",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1126",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Money-Market Instruments?",
      "options": [
        "The lecture covers Treasury bills, federal funds, repurchase agreements, commercial paper, negotiable certificates of deposit, banker’s acceptances, and Eurodollar instruments.",
        "Corporate bonds are long-term obligations issued by corporations; a bond indenture is the legal contract specifying the rights and obligations of issuer and bondholders.",
        "Moody’s, S&P, and Fitch rank bonds by perceived default probability; bonds below Baa/BBB are described as speculative grade or high-yield bonds.",
        "The required rate of return is the interest rate used to find fair present value and reflects the risks associated with the security."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Money-Market Instruments. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 33–60",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1127",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Money-Market Instruments in the course material?",
      "options": [
        "T-bills are discount securities.",
        "Municipal bonds may be general-obligation or revenue bonds.",
        "Eurobonds are issued outside the country of the currency in which they are denominated.",
        "Required return is an ex ante rate used in valuation."
      ],
      "answer": 0,
      "explanation": "T-bills are discount securities. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 33–60",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1128",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Money-Market Instruments?",
      "options": [
        "Do not assume all money-market instruments pay periodic coupons.",
        "Do not infer equal default risk from identical maturity; issuer and contract features matter.",
        "A high-yield bond is not called “high yield” because it has a high coupon alone; the lecture ties the classification to credit rating/default risk.",
        "Do not label a realized return as “required” simply because it happened to equal the required return."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not assume all money-market instruments pay periodic coupons. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 33–60",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1129",
      "module": "valuation",
      "concept": "treasury-corporate-bonds",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Treasury, Municipal & Corporate Bonds?",
      "options": [
        "Corporate bonds are long-term obligations issued by corporations; a bond indenture is the legal contract specifying the rights and obligations of issuer and bondholders.",
        "Moody’s, S&P, and Fitch rank bonds by perceived default probability; bonds below Baa/BBB are described as speculative grade or high-yield bonds.",
        "The required rate of return is the interest rate used to find fair present value and reflects the risks associated with the security.",
        "Fair value of a bond is the present value of all promised/projected cash flows discounted at the required rate of return."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Treasury, Municipal & Corporate Bonds. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 61–69",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1130",
      "module": "valuation",
      "concept": "treasury-corporate-bonds",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Treasury, Municipal & Corporate Bonds in the course material?",
      "options": [
        "Municipal bonds may be general-obligation or revenue bonds.",
        "Eurobonds are issued outside the country of the currency in which they are denominated.",
        "Required return is an ex ante rate used in valuation.",
        "Promised bond cash flows come from coupon payments and the maturity value."
      ],
      "answer": 0,
      "explanation": "Municipal bonds may be general-obligation or revenue bonds. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 61–69",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1131",
      "module": "valuation",
      "concept": "treasury-corporate-bonds",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Treasury, Municipal & Corporate Bonds?",
      "options": [
        "Do not infer equal default risk from identical maturity; issuer and contract features matter.",
        "A high-yield bond is not called “high yield” because it has a high coupon alone; the lecture ties the classification to credit rating/default risk.",
        "Do not label a realized return as “required” simply because it happened to equal the required return.",
        "Use a periodic coupon and periodic required return consistent with the payment frequency."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not infer equal default risk from identical maturity; issuer and contract features matter. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 61–69",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1132",
      "module": "valuation",
      "concept": "bond-ratings-international",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Bond Ratings, Spreads & International Bonds?",
      "options": [
        "Moody’s, S&P, and Fitch rank bonds by perceived default probability; bonds below Baa/BBB are described as speculative grade or high-yield bonds.",
        "The required rate of return is the interest rate used to find fair present value and reflects the risks associated with the security.",
        "Fair value of a bond is the present value of all promised/projected cash flows discounted at the required rate of return.",
        "Pure discount bonds promise a single cash payment at a future maturity date; the difference between purchase price and face value is the investor’s interest."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Bond Ratings, Spreads & International Bonds. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Valuation of securities.pdf · Slides 70–78",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1133",
      "module": "valuation",
      "concept": "bond-ratings-international",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Bond Ratings, Spreads & International Bonds in the course material?",
      "options": [
        "Eurobonds are issued outside the country of the currency in which they are denominated.",
        "Required return is an ex ante rate used in valuation.",
        "Promised bond cash flows come from coupon payments and the maturity value.",
        "Coupon payment INT = 0 for a zero-coupon bond."
      ],
      "answer": 0,
      "explanation": "Eurobonds are issued outside the country of the currency in which they are denominated. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Valuation of securities.pdf · Slides 70–78",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1134",
      "module": "valuation",
      "concept": "bond-ratings-international",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Bond Ratings, Spreads & International Bonds?",
      "options": [
        "A high-yield bond is not called “high yield” because it has a high coupon alone; the lecture ties the classification to credit rating/default risk.",
        "Do not label a realized return as “required” simply because it happened to equal the required return.",
        "Use a periodic coupon and periodic required return consistent with the payment frequency.",
        "Do not add an annuity component to a true zero-coupon bond."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: A high-yield bond is not called “high yield” because it has a high coupon alone; the lecture ties the classification to credit rating/default risk. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Valuation of securities.pdf · Slides 70–78",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1135",
      "module": "risk",
      "concept": "defining-risk",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Defining Risk?",
      "options": [
        "Risk is a measure of uncertainty about the future payoff to an investment, assessed over some time horizon and relative to a benchmark.",
        "Expected value is the sum of probability × payoff across possible outcomes.",
        "Variance is the average of squared deviations of possible outcomes from expected value, weighted by their probabilities; standard deviation is the square root of variance.",
        "Leverage is the practice of borrowing (using debt) to finance part of an investment."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Defining Risk. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding risk.pdf · Slide 3",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1136",
      "module": "risk",
      "concept": "defining-risk",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Defining Risk in the course material?",
      "options": [
        "Risk must be quantified to price financial instruments and transfer risk.",
        "Probabilities range from 0 to 1.",
        "Compute expected value first.",
        "The lecture states leverage increases expected return and increases the standard deviation of returns."
      ],
      "answer": 0,
      "explanation": "Risk must be quantified to price financial instruments and transfer risk. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding risk.pdf · Slide 3",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1137",
      "module": "risk",
      "concept": "defining-risk",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Defining Risk?",
      "options": [
        "Do not reduce the course definition to “possibility of loss” alone.",
        "Expected value is not necessarily one of the actual possible outcomes.",
        "Do not average raw deviations; positive and negative deviations cancel, which is why the lecture squares them.",
        "The course does not say leverage only increases return; it also increases risk."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not reduce the course definition to “possibility of loss” alone. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding risk.pdf · Slide 3",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1138",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Probabilities & Expected Value?",
      "options": [
        "Expected value is the sum of probability × payoff across possible outcomes.",
        "Variance is the average of squared deviations of possible outcomes from expected value, weighted by their probabilities; standard deviation is the square root of variance.",
        "Leverage is the practice of borrowing (using debt) to finance part of an investment.",
        "Value at Risk is the worst possible loss over a specific horizon at a given probability."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Probabilities & Expected Value. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding risk.pdf · Slides 5–8",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1139",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Probabilities & Expected Value in the course material?",
      "options": [
        "Probabilities range from 0 to 1.",
        "Compute expected value first.",
        "The lecture states leverage increases expected return and increases the standard deviation of returns.",
        "VaR focuses attention on downside loss at a stated horizon/probability."
      ],
      "answer": 0,
      "explanation": "Probabilities range from 0 to 1. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding risk.pdf · Slides 5–8",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1140",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Probabilities & Expected Value?",
      "options": [
        "Expected value is not necessarily one of the actual possible outcomes.",
        "Do not average raw deviations; positive and negative deviations cancel, which is why the lecture squares them.",
        "The course does not say leverage only increases return; it also increases risk.",
        "VaR is not the same measure as standard deviation."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Expected value is not necessarily one of the actual possible outcomes. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding risk.pdf · Slides 5–8",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1141",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Variance & Standard Deviation?",
      "options": [
        "Variance is the average of squared deviations of possible outcomes from expected value, weighted by their probabilities; standard deviation is the square root of variance.",
        "Leverage is the practice of borrowing (using debt) to finance part of an investment.",
        "Value at Risk is the worst possible loss over a specific horizon at a given probability.",
        "Idiosyncratic or unique risks affect a small number of people or firms; systematic risks affect everyone."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Variance & Standard Deviation. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding risk.pdf · Slides 9–13",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1142",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Variance & Standard Deviation in the course material?",
      "options": [
        "Compute expected value first.",
        "The lecture states leverage increases expected return and increases the standard deviation of returns.",
        "VaR focuses attention on downside loss at a stated horizon/probability.",
        "Systemic risk is a threat to the system as a whole."
      ],
      "answer": 0,
      "explanation": "Compute expected value first. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding risk.pdf · Slides 9–13",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1143",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Variance & Standard Deviation?",
      "options": [
        "Do not average raw deviations; positive and negative deviations cancel, which is why the lecture squares them.",
        "The course does not say leverage only increases return; it also increases risk.",
        "VaR is not the same measure as standard deviation.",
        "Do not label a broad recession shock as idiosyncratic risk."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not average raw deviations; positive and negative deviations cancel, which is why the lecture squares them. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding risk.pdf · Slides 9–13",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1144",
      "module": "risk",
      "concept": "leverage-risk",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Leverage, Expected Return & Risk?",
      "options": [
        "Leverage is the practice of borrowing (using debt) to finance part of an investment.",
        "Value at Risk is the worst possible loss over a specific horizon at a given probability.",
        "Idiosyncratic or unique risks affect a small number of people or firms; systematic risks affect everyone.",
        "The risk premium is the compensation investors require to hold the risky asset."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Leverage, Expected Return & Risk. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding risk.pdf · Slide 14",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1145",
      "module": "risk",
      "concept": "leverage-risk",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Leverage, Expected Return & Risk in the course material?",
      "options": [
        "The lecture states leverage increases expected return and increases the standard deviation of returns.",
        "VaR focuses attention on downside loss at a stated horizon/probability.",
        "Systemic risk is a threat to the system as a whole.",
        "The riskier an investment, the higher the risk premium in the lecture framing."
      ],
      "answer": 0,
      "explanation": "The lecture states leverage increases expected return and increases the standard deviation of returns. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding risk.pdf · Slide 14",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1146",
      "module": "risk",
      "concept": "leverage-risk",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Leverage, Expected Return & Risk?",
      "options": [
        "The course does not say leverage only increases return; it also increases risk.",
        "VaR is not the same measure as standard deviation.",
        "Do not label a broad recession shock as idiosyncratic risk.",
        "Risk aversion does not mean an investor will never hold a risky asset."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: The course does not say leverage only increases return; it also increases risk. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding risk.pdf · Slide 14",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1147",
      "module": "risk",
      "concept": "value-at-risk",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Value at Risk (VaR)?",
      "options": [
        "Value at Risk is the worst possible loss over a specific horizon at a given probability.",
        "Idiosyncratic or unique risks affect a small number of people or firms; systematic risks affect everyone.",
        "The risk premium is the compensation investors require to hold the risky asset.",
        "Idiosyncratic risk can be reduced through diversification."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Value at Risk (VaR). The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding risk.pdf · Slides 15–16",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1148",
      "module": "risk",
      "concept": "value-at-risk",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Value at Risk (VaR) in the course material?",
      "options": [
        "VaR focuses attention on downside loss at a stated horizon/probability.",
        "Systemic risk is a threat to the system as a whole.",
        "The riskier an investment, the higher the risk premium in the lecture framing.",
        "Diversification reduces specific/idiosyncratic risk by combining risks."
      ],
      "answer": 0,
      "explanation": "VaR focuses attention on downside loss at a stated horizon/probability. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding risk.pdf · Slides 15–16",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1149",
      "module": "risk",
      "concept": "value-at-risk",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Value at Risk (VaR)?",
      "options": [
        "VaR is not the same measure as standard deviation.",
        "Do not label a broad recession shock as idiosyncratic risk.",
        "Risk aversion does not mean an investor will never hold a risky asset.",
        "Do not claim diversification eliminates economy-wide systematic risk."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: VaR is not the same measure as standard deviation. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding risk.pdf · Slides 15–16",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1150",
      "module": "risk",
      "concept": "systematic-idiosyncratic",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Idiosyncratic vs Systematic Risk?",
      "options": [
        "Idiosyncratic or unique risks affect a small number of people or firms; systematic risks affect everyone.",
        "The risk premium is the compensation investors require to hold the risky asset.",
        "Idiosyncratic risk can be reduced through diversification.",
        "Risk is a measure of uncertainty about the future payoff to an investment, assessed over some time horizon and relative to a benchmark."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Idiosyncratic vs Systematic Risk. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding risk.pdf · Slides 17–18 and 21",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1151",
      "module": "risk",
      "concept": "systematic-idiosyncratic",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Idiosyncratic vs Systematic Risk in the course material?",
      "options": [
        "Systemic risk is a threat to the system as a whole.",
        "The riskier an investment, the higher the risk premium in the lecture framing.",
        "Diversification reduces specific/idiosyncratic risk by combining risks.",
        "Risk must be quantified to price financial instruments and transfer risk."
      ],
      "answer": 0,
      "explanation": "Systemic risk is a threat to the system as a whole. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding risk.pdf · Slides 17–18 and 21",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1152",
      "module": "risk",
      "concept": "systematic-idiosyncratic",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Idiosyncratic vs Systematic Risk?",
      "options": [
        "Do not label a broad recession shock as idiosyncratic risk.",
        "Risk aversion does not mean an investor will never hold a risky asset.",
        "Do not claim diversification eliminates economy-wide systematic risk.",
        "Do not reduce the course definition to “possibility of loss” alone."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not label a broad recession shock as idiosyncratic risk. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding risk.pdf · Slides 17–18 and 21",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1153",
      "module": "risk",
      "concept": "risk-aversion-premium",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Risk Aversion & Risk Premium?",
      "options": [
        "The risk premium is the compensation investors require to hold the risky asset.",
        "Idiosyncratic risk can be reduced through diversification.",
        "Risk is a measure of uncertainty about the future payoff to an investment, assessed over some time horizon and relative to a benchmark.",
        "Expected value is the sum of probability × payoff across possible outcomes."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Risk Aversion & Risk Premium. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding risk.pdf · Slide 19",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1154",
      "module": "risk",
      "concept": "risk-aversion-premium",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Risk Aversion & Risk Premium in the course material?",
      "options": [
        "The riskier an investment, the higher the risk premium in the lecture framing.",
        "Diversification reduces specific/idiosyncratic risk by combining risks.",
        "Risk must be quantified to price financial instruments and transfer risk.",
        "Probabilities range from 0 to 1."
      ],
      "answer": 0,
      "explanation": "The riskier an investment, the higher the risk premium in the lecture framing. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding risk.pdf · Slide 19",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1155",
      "module": "risk",
      "concept": "risk-aversion-premium",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Risk Aversion & Risk Premium?",
      "options": [
        "Risk aversion does not mean an investor will never hold a risky asset.",
        "Do not claim diversification eliminates economy-wide systematic risk.",
        "Do not reduce the course definition to “possibility of loss” alone.",
        "Expected value is not necessarily one of the actual possible outcomes."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Risk aversion does not mean an investor will never hold a risky asset. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding risk.pdf · Slide 19",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1156",
      "module": "risk",
      "concept": "hedging-diversification",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Hedging, Diversification & Risk Spreading?",
      "options": [
        "Idiosyncratic risk can be reduced through diversification.",
        "Risk is a measure of uncertainty about the future payoff to an investment, assessed over some time horizon and relative to a benchmark.",
        "Expected value is the sum of probability × payoff across possible outcomes.",
        "Variance is the average of squared deviations of possible outcomes from expected value, weighted by their probabilities; standard deviation is the square root of variance."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Hedging, Diversification & Risk Spreading. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Understanding risk.pdf · Slides 20–22",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1157",
      "module": "risk",
      "concept": "hedging-diversification",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Hedging, Diversification & Risk Spreading in the course material?",
      "options": [
        "Diversification reduces specific/idiosyncratic risk by combining risks.",
        "Risk must be quantified to price financial instruments and transfer risk.",
        "Probabilities range from 0 to 1.",
        "Compute expected value first."
      ],
      "answer": 0,
      "explanation": "Diversification reduces specific/idiosyncratic risk by combining risks. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Understanding risk.pdf · Slides 20–22",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1158",
      "module": "risk",
      "concept": "hedging-diversification",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Hedging, Diversification & Risk Spreading?",
      "options": [
        "Do not claim diversification eliminates economy-wide systematic risk.",
        "Do not reduce the course definition to “possibility of loss” alone.",
        "Expected value is not necessarily one of the actual possible outcomes.",
        "Do not average raw deviations; positive and negative deviations cancel, which is why the lecture squares them."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not claim diversification eliminates economy-wide systematic risk. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Understanding risk.pdf · Slides 20–22",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1159",
      "module": "health",
      "concept": "financial-statements-overview",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches The Four Financial Statements?",
      "options": [
        "The annual report contains four basic financial statements: balance sheet, income statement, statement of cash flows, and statement of retained earnings.",
        "Assets = Liabilities + Equity; net working capital = current assets − current liabilities.",
        "Book values can differ widely from market values for the same assets.",
        "The income statement reports revenues and expenses; the lecture separately discusses average versus marginal tax rates and the effect of debt versus equity financing on returns."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to The Four Financial Statements. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Financial Statements.pdf · Slides 13–14",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1160",
      "module": "health",
      "concept": "financial-statements-overview",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with The Four Financial Statements in the course material?",
      "options": [
        "Balance sheet: financial position at a date.",
        "Positive NWC means current assets exceed current liabilities.",
        "Book value follows accounting/historical-cost conventions.",
        "Average tax rate relates total taxes to taxable income."
      ],
      "answer": 0,
      "explanation": "Balance sheet: financial position at a date. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Financial Statements.pdf · Slides 13–14",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1161",
      "module": "health",
      "concept": "financial-statements-overview",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on The Four Financial Statements?",
      "options": [
        "Do not substitute accounting profit for cash flow; the lecture explicitly separates them.",
        "Use current items only when computing NWC.",
        "Do not treat book equity and market equity as automatically equal.",
        "Do not confuse EBIT with earnings after interest and taxes."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not substitute accounting profit for cash flow; the lecture explicitly separates them. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Financial Statements.pdf · Slides 13–14",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1162",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Balance Sheet & Net Working Capital?",
      "options": [
        "Assets = Liabilities + Equity; net working capital = current assets − current liabilities.",
        "Book values can differ widely from market values for the same assets.",
        "The income statement reports revenues and expenses; the lecture separately discusses average versus marginal tax rates and the effect of debt versus equity financing on returns.",
        "The statement of cash flows shows the firm’s cash flows over a given period; free cash flow is cash available for distribution to investors after investments needed to sustain ongoing operations."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Balance Sheet & Net Working Capital. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Financial Statements.pdf · Slides 15–17",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1163",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Balance Sheet & Net Working Capital in the course material?",
      "options": [
        "Positive NWC means current assets exceed current liabilities.",
        "Book value follows accounting/historical-cost conventions.",
        "Average tax rate relates total taxes to taxable income.",
        "Cash flows are organized into operating, investing, and financing activities in the statement example."
      ],
      "answer": 0,
      "explanation": "Positive NWC means current assets exceed current liabilities. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Financial Statements.pdf · Slides 15–17",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1164",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Balance Sheet & Net Working Capital?",
      "options": [
        "Use current items only when computing NWC.",
        "Do not treat book equity and market equity as automatically equal.",
        "Do not confuse EBIT with earnings after interest and taxes.",
        "Do not infer distributable cash from net income alone."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Use current items only when computing NWC. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Financial Statements.pdf · Slides 15–17",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1165",
      "module": "health",
      "concept": "book-vs-market",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Book Value vs Market Value?",
      "options": [
        "Book values can differ widely from market values for the same assets.",
        "The income statement reports revenues and expenses; the lecture separately discusses average versus marginal tax rates and the effect of debt versus equity financing on returns.",
        "The statement of cash flows shows the firm’s cash flows over a given period; free cash flow is cash available for distribution to investors after investments needed to sustain ongoing operations.",
        "Increases in retained earnings occur because the firm earns net income and common shareholders allow management to reinvest some net income rather than pay it out as dividends."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Book Value vs Market Value. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Financial Statements.pdf · Slides 18–20",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1166",
      "module": "health",
      "concept": "book-vs-market",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Book Value vs Market Value in the course material?",
      "options": [
        "Book value follows accounting/historical-cost conventions.",
        "Average tax rate relates total taxes to taxable income.",
        "Cash flows are organized into operating, investing, and financing activities in the statement example.",
        "Reinvested earnings can fund plant, equipment, inventory, and other assets."
      ],
      "answer": 0,
      "explanation": "Book value follows accounting/historical-cost conventions. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Financial Statements.pdf · Slides 18–20",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1167",
      "module": "health",
      "concept": "book-vs-market",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Book Value vs Market Value?",
      "options": [
        "Do not treat book equity and market equity as automatically equal.",
        "Do not confuse EBIT with earnings after interest and taxes.",
        "Do not infer distributable cash from net income alone.",
        "Retained earnings are not the same thing as a pile of cash sitting in an account."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not treat book equity and market equity as automatically equal. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Financial Statements.pdf · Slides 18–20",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1168",
      "module": "health",
      "concept": "income-taxes-financing",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Income Statement, Taxes & Financing Effects?",
      "options": [
        "The income statement reports revenues and expenses; the lecture separately discusses average versus marginal tax rates and the effect of debt versus equity financing on returns.",
        "The statement of cash flows shows the firm’s cash flows over a given period; free cash flow is cash available for distribution to investors after investments needed to sustain ongoing operations.",
        "Increases in retained earnings occur because the firm earns net income and common shareholders allow management to reinvest some net income rather than pay it out as dividends.",
        "Liquidity ratios measure how easily the firm can lay its hands on cash and the relationship between current assets and current liabilities."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Income Statement, Taxes & Financing Effects. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Financial Statements.pdf · Income Statement / tax / debt-vs-equity sections",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1169",
      "module": "health",
      "concept": "income-taxes-financing",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Income Statement, Taxes & Financing Effects in the course material?",
      "options": [
        "Average tax rate relates total taxes to taxable income.",
        "Cash flows are organized into operating, investing, and financing activities in the statement example.",
        "Reinvested earnings can fund plant, equipment, inventory, and other assets.",
        "Current ratio uses all current assets."
      ],
      "answer": 0,
      "explanation": "Average tax rate relates total taxes to taxable income. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Financial Statements.pdf · Income Statement / tax / debt-vs-equity sections",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1170",
      "module": "health",
      "concept": "income-taxes-financing",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Income Statement, Taxes & Financing Effects?",
      "options": [
        "Do not confuse EBIT with earnings after interest and taxes.",
        "Do not infer distributable cash from net income alone.",
        "Retained earnings are not the same thing as a pile of cash sitting in an account.",
        "A high liquidity ratio is not automatically “better” without context."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not confuse EBIT with earnings after interest and taxes. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Financial Statements.pdf · Income Statement / tax / debt-vs-equity sections",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1171",
      "module": "health",
      "concept": "cash-flow-fcf",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Statement of Cash Flows & Free Cash Flow?",
      "options": [
        "The statement of cash flows shows the firm’s cash flows over a given period; free cash flow is cash available for distribution to investors after investments needed to sustain ongoing operations.",
        "Increases in retained earnings occur because the firm earns net income and common shareholders allow management to reinvest some net income rather than pay it out as dividends.",
        "Liquidity ratios measure how easily the firm can lay its hands on cash and the relationship between current assets and current liabilities.",
        "Asset management ratios measure how efficiently a firm uses its assets and manages accounts payable."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Statement of Cash Flows & Free Cash Flow. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Financial Statements.pdf · Slides 18–23",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1172",
      "module": "health",
      "concept": "cash-flow-fcf",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Statement of Cash Flows & Free Cash Flow in the course material?",
      "options": [
        "Cash flows are organized into operating, investing, and financing activities in the statement example.",
        "Reinvested earnings can fund plant, equipment, inventory, and other assets.",
        "Current ratio uses all current assets.",
        "Inventory turnover = cost of goods sold / average inventory."
      ],
      "answer": 0,
      "explanation": "Cash flows are organized into operating, investing, and financing activities in the statement example. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Financial Statements.pdf · Slides 18–23",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1173",
      "module": "health",
      "concept": "cash-flow-fcf",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Statement of Cash Flows & Free Cash Flow?",
      "options": [
        "Do not infer distributable cash from net income alone.",
        "Retained earnings are not the same thing as a pile of cash sitting in an account.",
        "A high liquidity ratio is not automatically “better” without context.",
        "Where the lecture specifies average balances, do not silently substitute ending balances unless the exercise directs you to do so."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not infer distributable cash from net income alone. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Financial Statements.pdf · Slides 18–23",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1174",
      "module": "health",
      "concept": "retained-earnings",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Statement of Retained Earnings?",
      "options": [
        "Increases in retained earnings occur because the firm earns net income and common shareholders allow management to reinvest some net income rather than pay it out as dividends.",
        "Liquidity ratios measure how easily the firm can lay its hands on cash and the relationship between current assets and current liabilities.",
        "Asset management ratios measure how efficiently a firm uses its assets and manages accounts payable.",
        "Leverage ratios show how heavily the company is in debt; coverage ratios compare earnings/cash resources with interest or fixed charges."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Statement of Retained Earnings. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Financial Statements.pdf · Slides 24–25",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1175",
      "module": "health",
      "concept": "retained-earnings",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Statement of Retained Earnings in the course material?",
      "options": [
        "Reinvested earnings can fund plant, equipment, inventory, and other assets.",
        "Current ratio uses all current assets.",
        "Inventory turnover = cost of goods sold / average inventory.",
        "Debt ratio in the lecture uses long-term debt / total capitalization."
      ],
      "answer": 0,
      "explanation": "Reinvested earnings can fund plant, equipment, inventory, and other assets. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Financial Statements.pdf · Slides 24–25",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1176",
      "module": "health",
      "concept": "retained-earnings",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Statement of Retained Earnings?",
      "options": [
        "Retained earnings are not the same thing as a pile of cash sitting in an account.",
        "A high liquidity ratio is not automatically “better” without context.",
        "Where the lecture specifies average balances, do not silently substitute ending balances unless the exercise directs you to do so.",
        "Leverage and coverage answer different questions: amount of debt versus ability to service it."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Retained earnings are not the same thing as a pile of cash sitting in an account. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Financial Statements.pdf · Slides 24–25",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1177",
      "module": "health",
      "concept": "liquidity-ratios",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Liquidity Ratios?",
      "options": [
        "Liquidity ratios measure how easily the firm can lay its hands on cash and the relationship between current assets and current liabilities.",
        "Asset management ratios measure how efficiently a firm uses its assets and manages accounts payable.",
        "Leverage ratios show how heavily the company is in debt; coverage ratios compare earnings/cash resources with interest or fixed charges.",
        "The lecture uses ROA and ROE as common profitability measures and P/E, dividend yield, and market-to-book as market-value ratios."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Liquidity Ratios. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 5–8",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1178",
      "module": "health",
      "concept": "liquidity-ratios",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Liquidity Ratios in the course material?",
      "options": [
        "Current ratio uses all current assets.",
        "Inventory turnover = cost of goods sold / average inventory.",
        "Debt ratio in the lecture uses long-term debt / total capitalization.",
        "ROA = net income / total assets (common measure shown in lecture)."
      ],
      "answer": 0,
      "explanation": "Current ratio uses all current assets. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 5–8",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1179",
      "module": "health",
      "concept": "liquidity-ratios",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Liquidity Ratios?",
      "options": [
        "A high liquidity ratio is not automatically “better” without context.",
        "Where the lecture specifies average balances, do not silently substitute ending balances unless the exercise directs you to do so.",
        "Leverage and coverage answer different questions: amount of debt versus ability to service it.",
        "Check which ROA definition the exercise requests; the lecture shows more than one ROA formulation."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: A high liquidity ratio is not automatically “better” without context. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 5–8",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1180",
      "module": "health",
      "concept": "asset-management-ratios",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Asset-Management Ratios?",
      "options": [
        "Asset management ratios measure how efficiently a firm uses its assets and manages accounts payable.",
        "Leverage ratios show how heavily the company is in debt; coverage ratios compare earnings/cash resources with interest or fixed charges.",
        "The lecture uses ROA and ROE as common profitability measures and P/E, dividend yield, and market-to-book as market-value ratios.",
        "The lecture decomposes ROE into net profit margin × asset turnover × equity multiplier."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Asset-Management Ratios. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 9–15",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1181",
      "module": "health",
      "concept": "asset-management-ratios",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Asset-Management Ratios in the course material?",
      "options": [
        "Inventory turnover = cost of goods sold / average inventory.",
        "Debt ratio in the lecture uses long-term debt / total capitalization.",
        "ROA = net income / total assets (common measure shown in lecture).",
        "Net profit margin = net income / sales."
      ],
      "answer": 0,
      "explanation": "Inventory turnover = cost of goods sold / average inventory. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 9–15",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1182",
      "module": "health",
      "concept": "asset-management-ratios",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Asset-Management Ratios?",
      "options": [
        "Where the lecture specifies average balances, do not silently substitute ending balances unless the exercise directs you to do so.",
        "Leverage and coverage answer different questions: amount of debt versus ability to service it.",
        "Check which ROA definition the exercise requests; the lecture shows more than one ROA formulation.",
        "Do not interpret a high ROE without checking whether it comes from strong margins, efficient assets, or high leverage."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Where the lecture specifies average balances, do not silently substitute ending balances unless the exercise directs you to do so. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 9–15",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1183",
      "module": "health",
      "concept": "leverage-coverage-ratios",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Leverage & Coverage Ratios?",
      "options": [
        "Leverage ratios show how heavily the company is in debt; coverage ratios compare earnings/cash resources with interest or fixed charges.",
        "The lecture uses ROA and ROE as common profitability measures and P/E, dividend yield, and market-to-book as market-value ratios.",
        "The lecture decomposes ROE into net profit margin × asset turnover × equity multiplier.",
        "Time-series analysis compares a firm over time; cross-sectional analysis compares the firm against one or more companies in the same industry."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Leverage & Coverage Ratios. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 16–18",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1184",
      "module": "health",
      "concept": "leverage-coverage-ratios",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Leverage & Coverage Ratios in the course material?",
      "options": [
        "Debt ratio in the lecture uses long-term debt / total capitalization.",
        "ROA = net income / total assets (common measure shown in lecture).",
        "Net profit margin = net income / sales.",
        "Financial statement data are historical."
      ],
      "answer": 0,
      "explanation": "Debt ratio in the lecture uses long-term debt / total capitalization. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 16–18",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1185",
      "module": "health",
      "concept": "leverage-coverage-ratios",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Leverage & Coverage Ratios?",
      "options": [
        "Leverage and coverage answer different questions: amount of debt versus ability to service it.",
        "Check which ROA definition the exercise requests; the lecture shows more than one ROA formulation.",
        "Do not interpret a high ROE without checking whether it comes from strong margins, efficient assets, or high leverage.",
        "Avoid declaring a company “good” or “bad” from one ratio in isolation."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Leverage and coverage answer different questions: amount of debt versus ability to service it. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 16–18",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1186",
      "module": "health",
      "concept": "profitability-market-ratios",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Profitability & Market-Value Ratios?",
      "options": [
        "The lecture uses ROA and ROE as common profitability measures and P/E, dividend yield, and market-to-book as market-value ratios.",
        "The lecture decomposes ROE into net profit margin × asset turnover × equity multiplier.",
        "Time-series analysis compares a firm over time; cross-sectional analysis compares the firm against one or more companies in the same industry.",
        "The annual report contains four basic financial statements: balance sheet, income statement, statement of cash flows, and statement of retained earnings."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Profitability & Market-Value Ratios. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 19–22",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1187",
      "module": "health",
      "concept": "profitability-market-ratios",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Profitability & Market-Value Ratios in the course material?",
      "options": [
        "ROA = net income / total assets (common measure shown in lecture).",
        "Net profit margin = net income / sales.",
        "Financial statement data are historical.",
        "Balance sheet: financial position at a date."
      ],
      "answer": 0,
      "explanation": "ROA = net income / total assets (common measure shown in lecture). This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 19–22",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1188",
      "module": "health",
      "concept": "profitability-market-ratios",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Profitability & Market-Value Ratios?",
      "options": [
        "Check which ROA definition the exercise requests; the lecture shows more than one ROA formulation.",
        "Do not interpret a high ROE without checking whether it comes from strong margins, efficient assets, or high leverage.",
        "Avoid declaring a company “good” or “bad” from one ratio in isolation.",
        "Do not substitute accounting profit for cash flow; the lecture explicitly separates them."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Check which ROA definition the exercise requests; the lecture shows more than one ROA formulation. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 19–22",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1189",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches DuPont Analysis?",
      "options": [
        "The lecture decomposes ROE into net profit margin × asset turnover × equity multiplier.",
        "Time-series analysis compares a firm over time; cross-sectional analysis compares the firm against one or more companies in the same industry.",
        "The annual report contains four basic financial statements: balance sheet, income statement, statement of cash flows, and statement of retained earnings.",
        "Assets = Liabilities + Equity; net working capital = current assets − current liabilities."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to DuPont Analysis. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 23",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1190",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with DuPont Analysis in the course material?",
      "options": [
        "Net profit margin = net income / sales.",
        "Financial statement data are historical.",
        "Balance sheet: financial position at a date.",
        "Positive NWC means current assets exceed current liabilities."
      ],
      "answer": 0,
      "explanation": "Net profit margin = net income / sales. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 23",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1191",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on DuPont Analysis?",
      "options": [
        "Do not interpret a high ROE without checking whether it comes from strong margins, efficient assets, or high leverage.",
        "Avoid declaring a company “good” or “bad” from one ratio in isolation.",
        "Do not substitute accounting profit for cash flow; the lecture explicitly separates them.",
        "Use current items only when computing NWC."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Do not interpret a high ROE without checking whether it comes from strong margins, efficient assets, or high leverage. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 23",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1192",
      "module": "health",
      "concept": "benchmarking-cautions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · Source-derived",
      "skill": "Definition Recall",
      "examPriority": "Core",
      "prompt": "Which definition best matches Time-Series, Cross-Sectional Analysis & Ratio Cautions?",
      "options": [
        "Time-series analysis compares a firm over time; cross-sectional analysis compares the firm against one or more companies in the same industry.",
        "The annual report contains four basic financial statements: balance sheet, income statement, statement of cash flows, and statement of retained earnings.",
        "Assets = Liabilities + Equity; net working capital = current assets − current liabilities.",
        "Book values can differ widely from market values for the same assets."
      ],
      "answer": 0,
      "explanation": "The correct option reproduces the course-grounded definition attached to Time-Series, Cross-Sectional Analysis & Ratio Cautions. The other options are definitions of different concepts from the same module, so the task is to distinguish closely related terminology.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 24–30",
      "mistakeType": "Definition gap",
      "examTip": "Translate the label into its economic meaning before looking at the options; do not rely on keyword matching alone."
    },
    {
      "id": "q1193",
      "module": "health",
      "concept": "benchmarking-cautions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Relationship / Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Which relationship is most directly associated with Time-Series, Cross-Sectional Analysis & Ratio Cautions in the course material?",
      "options": [
        "Financial statement data are historical.",
        "Balance sheet: financial position at a date.",
        "Positive NWC means current assets exceed current liabilities.",
        "Book value follows accounting/historical-cost conventions."
      ],
      "answer": 0,
      "explanation": "Financial statement data are historical. This relationship is explicitly linked to the lesson. The distractors are valid statements elsewhere in the same module but do not answer this concept-specific question.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 24–30",
      "mistakeType": "Relationship confusion",
      "examTip": "When several options are true in finance, choose the one that answers the exact concept named in the stem."
    },
    {
      "id": "q1194",
      "module": "health",
      "concept": "benchmarking-cautions",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Exam Trap",
      "examPriority": "Frequent",
      "prompt": "Which warning is specifically important when solving questions on Time-Series, Cross-Sectional Analysis & Ratio Cautions?",
      "options": [
        "Avoid declaring a company “good” or “bad” from one ratio in isolation.",
        "Do not substitute accounting profit for cash flow; the lecture explicitly separates them.",
        "Use current items only when computing NWC.",
        "Do not treat book equity and market equity as automatically equal."
      ],
      "answer": 0,
      "explanation": "The lesson flags this issue: Avoid declaring a company “good” or “bad” from one ratio in isolation. Recognizing the error pattern is part of exam preparation because many distractors are built from exactly these confusions.",
      "source": "2023 Analyzing Firm Performance.pdf · Slides 24–30",
      "mistakeType": "Exam trap / misclassification",
      "examTip": "After calculating or classifying, perform a one-line sanity check against the lesson’s common mistake."
    },
    {
      "id": "q1195",
      "module": "intro",
      "concept": "financial-system",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Scenario / Application",
      "examPriority": "Frequent",
      "prompt": "A household places savings in a bank, and the bank uses pooled funds to make loans. Which financing channel best describes the household-to-borrower path?",
      "options": [
        "Direct finance",
        "Indirect finance",
        "A secondary-market trade",
        "A real-asset exchange"
      ],
      "answer": 1,
      "explanation": "A financial intermediary stands between the saver and ultimate borrower, so this is indirect finance.",
      "source": "2024 Introduction to Finance.pdf · Financial System / Flow of Funds",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1196",
      "module": "intro",
      "concept": "firm-decisions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Classification",
      "examPriority": "Frequent",
      "prompt": "A firm evaluates whether to build a new production facility. Which financial decision is being made?",
      "options": [
        "Capital budgeting",
        "Capital structure",
        "Working-capital collection policy",
        "Household asset allocation"
      ],
      "answer": 0,
      "explanation": "Choosing whether to undertake a long-term investment project is a capital-budgeting decision.",
      "source": "2024 Introduction to Finance.pdf · Financial Decisions of Firms",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1197",
      "module": "tvm",
      "concept": "multiple-cash-flows",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis / Timeline",
      "examPriority": "Frequent",
      "prompt": "A student discounts cash flows received in years 1, 2, and 3 all by (1+r)^3. What is the main error?",
      "options": [
        "Using present value instead of future value",
        "Using the same number of discount periods for cash flows that occur at different dates",
        "Adding cash flows after discounting",
        "Using a positive discount rate"
      ],
      "answer": 1,
      "explanation": "Each cash flow must be discounted by the number of periods between its own date and the valuation date.",
      "source": "2023 Time Value of Money.pdf · Multiple Cash Flows",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1198",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Interpretation",
      "examPriority": "Frequent",
      "prompt": "Two loans quote the same APR, but one compounds more frequently. Which measure is designed to compare the actual one-year effect of compounding?",
      "options": [
        "Periodic rate only",
        "EAR",
        "Face value",
        "Coupon rate"
      ],
      "answer": 1,
      "explanation": "EAR incorporates the effect of compounding within the year and is therefore the effective annual comparison measure.",
      "source": "2023 Time Value of Money.pdf · APR / EAR",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1199",
      "module": "tvm",
      "concept": "npv",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Decision Rule",
      "examPriority": "Frequent",
      "prompt": "An investment has an NPV of +$8,000 at the required discount rate. Which conclusion matches the course NPV rule?",
      "options": [
        "Discounted benefits exceed discounted costs by $8,000",
        "IRR must equal zero",
        "The project has no time value of money",
        "All future cash flows are guaranteed"
      ],
      "answer": 0,
      "explanation": "A positive NPV means the present value of benefits exceeds the present value of costs on the stated discount-rate basis.",
      "source": "2023 Time Value of Money.pdf · NPV",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1200",
      "module": "personal",
      "concept": "mortgage-arm",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Timeline / Recalculation",
      "examPriority": "Frequent",
      "prompt": "After an adjustable-rate mortgage resets, what must be updated before computing the remaining payment schedule?",
      "options": [
        "Only the original loan amount",
        "The remaining balance, remaining term, and new applicable rate",
        "Only the number of payments originally scheduled",
        "The original home price"
      ],
      "answer": 1,
      "explanation": "ARM recalculation uses the remaining balance and remaining periods under the new rate; the Q&A emphasizes timing and reset mechanics.",
      "source": "Q&A 1.pdf · ARM clarification",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1201",
      "module": "personal",
      "concept": "retirement-annuity",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "prompt": "When comparing a retirement lump sum today with a stream of future payments, what must be done before the two alternatives are comparable?",
      "options": [
        "Add the nominal future payments",
        "Convert the alternatives to values at a common date",
        "Ignore the timing if total dollars are equal",
        "Compare only the first payment"
      ],
      "answer": 1,
      "explanation": "Cash flows at different dates must be valued at a common date using time-value-of-money logic.",
      "source": "2023 Time Value of Money.pdf + instructor Q&A",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1202",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Scenario / Classification",
      "examPriority": "Frequent",
      "prompt": "A company sells newly issued shares to investors and receives the proceeds. Which market is involved?",
      "options": [
        "Secondary market",
        "Primary market",
        "Only an OTC market by definition",
        "Foreign-exchange market"
      ],
      "answer": 1,
      "explanation": "The primary market is where newly issued securities are sold and the issuer obtains financing.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Market Structure",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1203",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Scenario / Classification",
      "examPriority": "Frequent",
      "prompt": "An investor buys an already outstanding share from another investor. Does the issuing company receive the resale proceeds?",
      "options": [
        "Yes, because every stock trade finances the issuer",
        "No, this is a secondary-market transfer between investors",
        "Yes, but only on an exchange",
        "No, because equity can never trade after issuance"
      ],
      "answer": 1,
      "explanation": "A secondary-market trade transfers ownership of an existing security; the issuer does not receive the resale proceeds.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Primary/Secondary Markets",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1204",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Scenario / Application",
      "examPriority": "Frequent",
      "prompt": "Before granting a loan, a lender worries that the borrowers most eager to accept the loan may be the riskiest applicants. Which problem is this?",
      "options": [
        "Moral hazard",
        "Adverse selection",
        "Diversification",
        "Liquidity transformation"
      ],
      "answer": 1,
      "explanation": "Adverse selection is the asymmetric-information problem that arises before the transaction when undesirable types may be more likely to seek financing.",
      "source": "Asymmetric Infos.pdf + Mishkin & Serletis Chapter 2",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1205",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Scenario / Application",
      "examPriority": "Frequent",
      "prompt": "After receiving financing, a borrower takes actions that increase project risk because the lender cannot perfectly observe behavior. Which problem is this?",
      "options": [
        "Adverse selection",
        "Moral hazard",
        "Primary-market issuance",
        "Economies of scale"
      ],
      "answer": 1,
      "explanation": "Moral hazard is the after-transaction information/incentive problem.",
      "source": "Asymmetric Infos.pdf + Mishkin & Serletis Chapter 2",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1206",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Setup / Application",
      "examPriority": "Frequent",
      "prompt": "A coupon bond pays regular coupons and face value at maturity. Which valuation setup is correct?",
      "options": [
        "Discount only the face value",
        "Value the coupon stream and face value separately, then add their present values",
        "Add all nominal payments without discounting",
        "Use the coupon rate as the bond price"
      ],
      "answer": 1,
      "explanation": "Coupon bond value is the PV of coupon cash flows plus the PV of face value at maturity.",
      "source": "2023 Valuation of securities.pdf · Bond Valuation",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1207",
      "module": "valuation",
      "concept": "bond-price-rates",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "prompt": "Holding a bond’s promised cash flows fixed, what happens to its price when the market-required return rises?",
      "options": [
        "Price rises",
        "Price falls",
        "Price must equal face value",
        "Coupon payments increase"
      ],
      "answer": 1,
      "explanation": "A higher discount rate lowers the present value of fixed promised cash flows, so price falls.",
      "source": "2023 Valuation of securities.pdf · Interest Rates and Bond Prices",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1208",
      "module": "valuation",
      "concept": "ytm-bond-types",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Interpretation",
      "examPriority": "Frequent",
      "prompt": "A bond’s coupon rate is below the market-required yield. Which price relationship is consistent with the course?",
      "options": [
        "Price above face value",
        "Price equal to face value by definition",
        "Price below face value",
        "Coupon cash flow becomes zero"
      ],
      "answer": 2,
      "explanation": "When the coupon is low relative to the required yield, price adjusts below face value: a discount bond.",
      "source": "2023 Valuation of securities.pdf · Premium/Par/Discount Bonds",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1209",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Calculation Setup",
      "examPriority": "Frequent",
      "prompt": "An investment has two possible payoffs. What is the first required step in computing expected value?",
      "options": [
        "Square each payoff",
        "Multiply each possible payoff by its probability and sum the weighted outcomes",
        "Take the square root of the largest payoff",
        "Subtract the risk-free rate from every payoff"
      ],
      "answer": 1,
      "explanation": "Expected value is the probability-weighted average of possible outcomes.",
      "source": "2023 Understanding risk.pdf · Expected Value",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1210",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Error Diagnosis",
      "examPriority": "Frequent",
      "prompt": "A student computes deviations from expected value and simply adds them, obtaining zero. Why is this not a variance calculation?",
      "options": [
        "Variance requires discounted cash flows",
        "Variance uses squared deviations weighted by probabilities",
        "Variance ignores expected value",
        "Variance is always equal to expected value"
      ],
      "answer": 1,
      "explanation": "Variance squares the deviations and weights them by probabilities; simple signed deviations can cancel.",
      "source": "2023 Understanding risk.pdf · Variance and Standard Deviation",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1211",
      "module": "risk",
      "concept": "systematic-idiosyncratic",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Scenario / Classification",
      "examPriority": "Frequent",
      "prompt": "A shock affects only one company because of a firm-specific event. Which risk category best fits?",
      "options": [
        "Systematic risk",
        "Idiosyncratic risk",
        "Risk-free return",
        "Market-wide inflation by definition"
      ],
      "answer": 1,
      "explanation": "Firm-specific or unique risk is idiosyncratic risk in the lecture classification.",
      "source": "2023 Understanding risk.pdf · Idiosyncratic and Systematic Risk",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1212",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · Source-derived",
      "skill": "Numerical Interpretation",
      "examPriority": "Frequent",
      "prompt": "A firm has current assets of 500 and current liabilities of 350. What is net working capital?",
      "options": [
        "150",
        "850",
        "0.70",
        "1.43"
      ],
      "answer": 0,
      "explanation": "NWC = current assets − current liabilities = 500 − 350 = 150.",
      "source": "2023 Financial Statements.pdf · Net Working Capital",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1213",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Interpretation",
      "examPriority": "Frequent",
      "prompt": "Two firms have the same ROE, but one has a higher equity multiplier and lower profit margin. What is the main value of DuPont analysis here?",
      "options": [
        "It proves the firms have identical risk",
        "It reveals different drivers behind the same ROE",
        "It eliminates the need to calculate ROE",
        "It converts all ratios into cash flows"
      ],
      "answer": 1,
      "explanation": "DuPont decomposition shows whether ROE is driven by margin, asset turnover, or leverage, so equal ROE can arise from different structures.",
      "source": "2023 Analyzing Firm Performance.pdf · DuPont Analysis",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1214",
      "module": "health",
      "concept": "benchmarking-cautions",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · Source-derived",
      "skill": "Analysis / Judgment",
      "examPriority": "Frequent",
      "prompt": "A firm’s current ratio is higher than last year. What is the strongest exam-style conclusion?",
      "options": [
        "The firm is definitely healthier",
        "The ratio should be benchmarked and interpreted with composition/context before concluding",
        "Higher current ratio always means higher profitability",
        "No other ratio can now be relevant"
      ],
      "answer": 1,
      "explanation": "The lecture cautions against isolated ratio interpretation; use time-series/cross-sectional benchmarks and consider limitations.",
      "source": "2023 Analyzing Firm Performance.pdf · Time-Series/Cross-Sectional Analysis and Cautions",
      "mistakeType": "Application / reasoning error",
      "examTip": "Identify the concept first, then use the course relationship or formula; do not answer from surface wording."
    },
    {
      "id": "q1215",
      "module": "intro",
      "concept": "money-functions-payment",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · New Notes",
      "prompt": "Which function of money is illustrated when a restaurant lists a meal at 120,000 VND?",
      "answer": 1,
      "explanation": "Posting a price uses money as a common unit for measuring and comparing value.",
      "source": "LTTC_Financial market_HKT.pdf · Unit of account",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Medium of exchange",
        "Unit of account",
        "Store of value",
        "Risk transfer"
      ]
    },
    {
      "id": "q1216",
      "module": "intro",
      "concept": "money-functions-payment",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "Why does money reduce transaction costs relative to barter?",
      "answer": 2,
      "explanation": "Money removes the need to find a counterparty who simultaneously wants what you offer and offers what you want—the double coincidence of wants.",
      "source": "LTTC_Financial market_HKT.pdf · Medium of exchange",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "It guarantees zero inflation",
        "It always earns interest",
        "It removes the double coincidence of wants",
        "It eliminates all default risk"
      ]
    },
    {
      "id": "q1217",
      "module": "intro",
      "concept": "money-functions-payment",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "A person says “I earn 18 million VND per month.” This statement describes:",
      "answer": 2,
      "explanation": "Income is a flow measured per unit of time; money/wealth are stocks at a point in time.",
      "source": "LTTC_Financial market_HKT.pdf · Money–wealth–income",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Money only",
        "Wealth",
        "Income",
        "Liquidity"
      ]
    },
    {
      "id": "q1218",
      "module": "intro",
      "concept": "money-functions-payment",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "During very high inflation, which money function is most directly weakened?",
      "answer": 2,
      "explanation": "Rapidly rising prices reduce the purchasing power that money carries into the future, weakening its store-of-value function.",
      "source": "LTTC_Financial market_HKT.pdf · Store of value",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Medium of exchange only",
        "Unit of account only",
        "Store of value",
        "Legal enforceability"
      ]
    },
    {
      "id": "q1219",
      "module": "intro",
      "concept": "financial-instruments-deep",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Which description best captures a financial instrument?",
      "answer": 2,
      "explanation": "The supporting notes define it as an enforceable written obligation specifying a transfer of value at a future date/event under stated conditions.",
      "source": "LTTC_Financial market_HKT.pdf · Financial instruments; past-final pattern",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Any physical asset used by a firm",
        "Only a promise with a specified calendar date",
        "An enforceable obligation to transfer value under specified future conditions",
        "Any asset with a market price"
      ]
    },
    {
      "id": "q1220",
      "module": "intro",
      "concept": "financial-instruments-deep",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "Holding all else constant, which change should make a promised payment more valuable?",
      "answer": 1,
      "explanation": "Receiving the same payment sooner increases value because waiting has an opportunity cost.",
      "source": "LTTC_Financial market_HKT.pdf · What makes a financial instrument valuable",
      "skill": "Relationship Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "A later payment date",
        "An earlier payment date",
        "A lower probability of payment",
        "A smaller promised payment"
      ]
    },
    {
      "id": "q1221",
      "module": "intro",
      "concept": "financial-instruments-deep",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "Why can standardization increase the usability of financial instruments?",
      "answer": 2,
      "explanation": "Standardization lowers complexity and contracting/search costs and makes instruments easier to compare.",
      "source": "LTTC_Financial market_HKT.pdf · Standardization",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "It removes every financial risk",
        "It prevents secondary trading",
        "It lowers complexity and contracting costs",
        "It makes every issuer equally safe"
      ]
    },
    {
      "id": "q1222",
      "module": "intro",
      "concept": "financial-instruments-deep",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "An insurance contract pays only if a specified accident occurs. Which element of a financial instrument is most clearly illustrated?",
      "answer": 3,
      "explanation": "The payment depends on a stated contingency/event rather than occurring unconditionally.",
      "source": "LTTC_Financial market_HKT.pdf · Financial instrument conditions",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Standardization",
        "Unit of account",
        "Maturity only",
        "Contingency"
      ]
    },
    {
      "id": "q1223",
      "module": "intro",
      "concept": "financial-instruments-deep",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "Which instrument feature most directly addresses the problem that a borrower may know more about its project than the lender?",
      "answer": 2,
      "explanation": "Information provisions, reporting, screening, and monitoring are designed to reduce the cost of asymmetric information.",
      "source": "LTTC_Financial market_HKT.pdf · Information characteristic",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Large denomination",
        "Long maturity",
        "Information and monitoring provisions",
        "Physical weight"
      ]
    },
    {
      "id": "q1224",
      "module": "intro",
      "concept": "money-functions-payment",
      "type": "mcq",
      "difficulty": "Challenge",
      "origin": "Generated Practice · New Notes",
      "prompt": "Which statement is most accurate?",
      "answer": 3,
      "explanation": "Money is the most liquid asset because it is already the medium of exchange, but other assets may offer higher expected returns as stores of value.",
      "source": "LTTC_Financial market_HKT.pdf · Store of value and liquidity",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Money is the only asset that can store value",
        "The most liquid asset must always have the highest expected return",
        "Inflation increases money’s real purchasing power",
        "Money can be the most liquid asset without being the highest-return store of value"
      ]
    },
    {
      "id": "q1225",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "You deposit 2,000,000 VND today for 3 years at 5.6% APR compounded monthly. What is the future value?",
      "answer": 2364948.85,
      "explanation": "Use the monthly periodic rate 0.056/12 and 36 compounding periods: FV = 2,000,000(1+0.056/12)^36.",
      "source": "5 bộ đề năm trước LTTC.pdf · monthly compounding pattern",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Rate/period mismatch",
      "examTip": "Convert APR to the rate per compounding period and convert years to the matching number of periods.",
      "unit": "₫",
      "tolerance": 2
    },
    {
      "id": "q1226",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A bank quotes 4.00% APR compounded quarterly. What is the EAR (in percent)?",
      "answer": 4.0604,
      "explanation": "EAR = (1 + APR/4)^4 − 1.",
      "source": "5 bộ đề năm trước LTTC.pdf · APR/EAR recognition pattern",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "APR/EAR confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.001
    },
    {
      "id": "q1227",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "A 10,000 deposit earns a continuously compounded annual rate of 5% for six months. What is its future value?",
      "answer": 10253.15,
      "explanation": "For continuous compounding, FV = PV·e^(rt) = 10,000e^(0.05×0.5).",
      "source": "LTTC_Time value and money_HKT.pdf · continuous compounding",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Compounding convention error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.02
    },
    {
      "id": "q1228",
      "module": "tvm",
      "concept": "multiple-cash-flows",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "You deposit $2,000 today, $3,000 at the end of year 1, $4,000 at the end of year 2, and $5,000 at the end of year 3. At 5%, how much is in the account at the end of year 4?",
      "answer": 15563.89,
      "explanation": "Compound each cash flow from its own date to year 4 and then add the four year-4 values.",
      "source": "LTTC_Time value and money_HKT.pdf · multiple cash-flow example",
      "skill": "Timeline Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Cash-flow timing error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.02
    },
    {
      "id": "q1229",
      "module": "tvm",
      "concept": "annuities",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "An insurer promises $1,000 at the end of each year for 15 years. At an 8% discount rate, what is the present value of the payments?",
      "answer": 8559.48,
      "explanation": "This is an ordinary annuity: PV = 1,000[1 − (1.08)^−15]/0.08.",
      "source": "LTTC_Time value and money_HKT.pdf · annuity example",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Annuity timing error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.02
    },
    {
      "id": "q1230",
      "module": "tvm",
      "concept": "annuities",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "You will deposit $1,000 monthly for 60 months, with the first deposit one month later than a standard ordinary annuity (first deposit at month 2). At 12% APR compounded monthly, what is the present value today?",
      "answer": 44509.94,
      "explanation": "Value the 60-payment ordinary annuity at month 1, one period before its first payment, then discount that value one more month to today.",
      "source": "5 bộ đề năm trước LTTC.pdf · deferred-annuity pattern",
      "skill": "Timeline Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Deferred-annuity timing error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.05
    },
    {
      "id": "q1231",
      "module": "tvm",
      "concept": "loans",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A 5 billion VND loan is amortized with monthly payments over 10 years at 12% APR compounded monthly. What is the monthly payment?",
      "answer": 71735474.2,
      "explanation": "Set the loan amount equal to the PV of 120 monthly payments at 1% per month.",
      "source": "5 bộ đề năm trước LTTC.pdf · loan-payment question",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Loan payment setup error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "₫",
      "tolerance": 5
    },
    {
      "id": "q1232",
      "module": "tvm",
      "concept": "loans",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Using the same 5 billion VND, 10-year, 12% APR monthly loan, what is the payoff immediately after the 12th payment?",
      "answer": 4724339782.95,
      "explanation": "Immediately after payment 12, 108 payments remain. Discount those remaining payments at 1% per month.",
      "source": "5 bộ đề năm trước LTTC.pdf · loan-payoff question",
      "skill": "Multi-step Problem",
      "examPriority": "Frequent",
      "mistakeType": "Remaining-balance timing error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "₫",
      "tolerance": 20
    },
    {
      "id": "q1233",
      "module": "tvm",
      "concept": "loans",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A $100,000 mortgage has a 30-year term and 8.25% APR with monthly payments. What is the interest portion of the 25th payment?",
      "answer": 676.1,
      "explanation": "Compute the monthly payment, then the balance immediately after payment 24. Interest in payment 25 equals the monthly rate times that balance.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · mortgage amortization pattern",
      "skill": "Multi-step Problem",
      "examPriority": "Frequent",
      "mistakeType": "Interest/principal split error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.03
    },
    {
      "id": "q1234",
      "module": "tvm",
      "concept": "loans",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "For the same $100,000, 30-year, 8.25% APR mortgage, what is the principal portion of the 25th payment?",
      "answer": 75.16,
      "explanation": "Principal repaid in payment 25 equals PMT minus the interest charged on the balance after payment 24.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · mortgage amortization pattern",
      "skill": "Multi-step Problem",
      "examPriority": "Frequent",
      "mistakeType": "Interest/principal split error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.03
    },
    {
      "id": "q1235",
      "module": "tvm",
      "concept": "loans",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "Why is “total interest over the year ÷ original loan principal” generally not the true annual borrowing rate for an amortizing loan?",
      "answer": 1,
      "explanation": "Because principal is repaid throughout the year, the lender does not have the full original principal outstanding for the whole year.",
      "source": "LTTC_Time value and money_HKT.pdf · amortization fallacy example",
      "skill": "Error Diagnosis",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Because interest is never paid on loans",
        "Because the outstanding principal declines as payments are made",
        "Because APR can only be used for bonds",
        "Because principal repayments are interest"
      ]
    },
    {
      "id": "q1236",
      "module": "tvm",
      "concept": "npv",
      "type": "numeric",
      "difficulty": "Challenge",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Projects A–G require investments [124, 54, 94, 84, 184, 74, 54] and have NPVs [174, 104, 99, −44, 64, 66, 44], all in millions. If the capital budget is 346 million, what maximum total NPV can be achieved?",
      "answer": 443,
      "explanation": "Under a binding capital budget, compare feasible project combinations and choose the combination with the largest total NPV.",
      "source": "5 bộ đề năm trước LTTC.pdf · capital-rationing question",
      "skill": "Multi-step Problem",
      "examPriority": "Frequent",
      "mistakeType": "Capital-rationing selection error",
      "examTip": "Do not rank only by individual NPV. Test feasible combinations under the budget constraint.",
      "unit": "$",
      "tolerance": 0.01
    },
    {
      "id": "q1237",
      "module": "tvm",
      "concept": "npv",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "If two mutually exclusive investments have positive NPVs at the correct opportunity cost of capital, which rule is consistent with value maximization?",
      "answer": 2,
      "explanation": "For mutually exclusive projects, choose the project with the higher NPV when both are measured at the appropriate opportunity cost of capital.",
      "source": "LTTC_Time value and money_HKT.pdf · NPV decision rule",
      "skill": "Decision Rule",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Accept both automatically",
        "Choose the lower initial cost",
        "Choose the higher NPV",
        "Choose the project with the longest life"
      ]
    },
    {
      "id": "q1238",
      "module": "tvm",
      "concept": "irr",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "The IRR of a conventional investment is the discount rate that:",
      "answer": 1,
      "explanation": "IRR is the rate that makes NPV equal to zero, equivalently making the PV of benefits equal the PV of costs.",
      "source": "5 bộ đề năm trước LTTC.pdf · IRR question",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Maximizes the initial investment",
        "Makes NPV equal to zero",
        "Always equals the coupon rate",
        "Makes future value equal zero"
      ]
    },
    {
      "id": "q1239",
      "module": "tvm",
      "concept": "tvm-intuition",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A one-year loan has a 7% nominal rate based on expected inflation of 3%. Actual inflation turns out to be 2%. Who benefits from the unexpected inflation outcome?",
      "answer": 0,
      "explanation": "Actual inflation is lower than expected, so the realized real interest rate is higher than anticipated. The lender receives more purchasing power than expected and benefits; the borrower is disadvantaged.",
      "source": "5 bộ đề năm trước LTTC.pdf · unexpected-inflation essay",
      "skill": "Interpretation",
      "examPriority": "Frequent",
      "mistakeType": "Nominal/real rate confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "The lender",
        "The borrower",
        "Both equally",
        "Neither because the nominal rate is fixed"
      ]
    },
    {
      "id": "q1240",
      "module": "tvm",
      "concept": "annuities",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "A stream of equal annual payments begins today rather than one year from today. Relative to an otherwise identical ordinary annuity, its present value is:",
      "answer": 0,
      "explanation": "Each payment in the annuity-due timing occurs one period earlier, so each is discounted for one fewer period and the PV is higher.",
      "source": "LTTC_Time value and money_HKT.pdf · annuity timing",
      "skill": "Relationship Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Higher",
        "Lower",
        "Exactly the same",
        "Zero"
      ]
    },
    {
      "id": "q1241",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "When comparing a two-year CD with rolling over one-year CDs, which extra input is required for the rollover strategy?",
      "answer": 2,
      "explanation": "The second year’s reinvestment rate determines the value of the proceeds reinvested after year 1.",
      "source": "LTTC_Time value and money_HKT.pdf · reinvestment-rate example",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "The original face value of money",
        "The inflation rate only",
        "The expected one-year reinvestment rate next year",
        "The accounting tax rate only"
      ]
    },
    {
      "id": "q1242",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "John borrows 10 billion VND for 20 years at 8% with equal annual end-of-year payments. What is the annual payment?",
      "answer": 1018522088.23,
      "explanation": "Use the ordinary-annuity loan formula with PV = 10 billion, r = 8%, n = 20.",
      "source": "5 bộ đề năm trước LTTC.pdf · written loan problem",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Loan payment setup error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "₫",
      "tolerance": 5
    },
    {
      "id": "q1243",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "For the 10 billion VND, 20-year, 8% annual-payment loan, what is the remaining balance immediately after the 10th payment?",
      "answer": 6834366118.65,
      "explanation": "Immediately after payment 10, ten annual payments remain. The payoff is the PV of those remaining payments at year 10.",
      "source": "5 bộ đề năm trước LTTC.pdf · written loan payoff",
      "skill": "Multi-step Problem",
      "examPriority": "Frequent",
      "mistakeType": "Remaining-balance timing error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "₫",
      "tolerance": 10
    },
    {
      "id": "q1244",
      "module": "personal",
      "concept": "credit-card-mechanics",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A credit-card balance is due on May 5 and no interest is charged if paid by the due date. From a pure cash-cycle perspective, when is payment usually best?",
      "answer": 2,
      "explanation": "Holding cash until near the due date preserves liquidity/interest without creating a late fee, provided operational risk is controlled.",
      "source": "5 bộ đề năm trước LTTC.pdf · cash-cycle essay",
      "skill": "Application / Judgment",
      "examPriority": "Frequent",
      "mistakeType": "Cash-cycle timing error",
      "examTip": "State both the economic benefit of delaying payment and the operational danger of paying too late.",
      "options": [
        "Immediately on statement date in every case",
        "After the due date",
        "Near the due date but early enough to avoid processing/late-payment risk",
        "Never pay the balance"
      ]
    },
    {
      "id": "q1245",
      "module": "personal",
      "concept": "credit-card-mechanics",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "What is the main danger of deliberately waiting until the last possible day to pay a credit-card bill?",
      "answer": 1,
      "explanation": "Processing delays, forgotten payments, or operational errors can cause late fees or interest even if delaying payment improves cash management in principle.",
      "source": "5 bộ đề năm trước LTTC.pdf · cash-cycle essay",
      "skill": "Risk Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "The card issuer must reduce the credit limit",
        "A processing delay can make the payment late",
        "The nominal APR automatically becomes zero",
        "The balance becomes an asset"
      ]
    },
    {
      "id": "q1246",
      "module": "personal",
      "concept": "interest-only-personal",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · New Notes",
      "prompt": "On a 5-year interest-only loan, what happens to principal during years 1–4 if the contract requires only annual interest before maturity?",
      "answer": 2,
      "explanation": "Interest-only payments do not amortize principal; the original principal remains outstanding until the final repayment unless the contract states otherwise.",
      "source": "LTTC_Time value and money_HKT.pdf · interest-only loan example",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "It falls to zero evenly",
        "It rises by the coupon amount",
        "It remains outstanding",
        "It is converted into equity"
      ]
    },
    {
      "id": "q1247",
      "module": "personal",
      "concept": "retirement-annuity",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "An annuity costs $10,000 and pays $1,000 at each year-end for 15 years. If your opportunity cost is 8%, the PV of payments is about $8,559. Based only on NPV, should you buy it?",
      "answer": 1,
      "explanation": "NPV ≈ 8,559 − 10,000 = −1,441, so the investment is unattractive at an 8% opportunity cost, ignoring insurance/utility features outside the calculation.",
      "source": "LTTC_Time value and money_HKT.pdf · insurance annuity example",
      "skill": "Decision Rule",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Yes, because total nominal payments are $15,000",
        "No, because NPV is negative",
        "Yes, because 15 years is long",
        "Indifferent because PV is always equal to price"
      ]
    },
    {
      "id": "q1248",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Immediately after the 12th payment on a 120-payment mortgage, how many scheduled payments remain?",
      "answer": 1,
      "explanation": "After 12 payments have actually been made, 120 − 12 = 108 payments remain.",
      "source": "5 bộ đề năm trước LTTC.pdf · payoff timing pattern",
      "skill": "Timeline Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "107",
        "108",
        "109",
        "120"
      ]
    },
    {
      "id": "q1249",
      "module": "personal",
      "concept": "financing-rebate",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "When comparing two financing plans with different payment dates and rates, what is the safest common comparison basis?",
      "answer": 3,
      "explanation": "Bring all cash flows to a common valuation date using the appropriate opportunity/financing rate before comparing economic cost.",
      "source": "LTTC_Time value and money_HKT.pdf · financing comparisons",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Total nominal dollars only",
        "Number of payments only",
        "Largest advertised APR only",
        "Present value at a common date"
      ]
    },
    {
      "id": "q1250",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Which set contains only classic money-market instruments?",
      "answer": 3,
      "explanation": "Bankers’ acceptances, negotiable CDs, and Treasury bills are short-term debt instruments associated with the money market.",
      "source": "5 bộ đề năm trước LTTC.pdf · money-market classification",
      "skill": "Classification",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Common stock, T-bills, CDs",
        "Corporate bonds, repos, common stock",
        "Government long-term bonds, commercial paper, CDs",
        "Bankers’ acceptances, negotiable CDs, Treasury bills"
      ]
    },
    {
      "id": "q1251",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "FPT issues new common shares to raise operating capital. This transaction occurs in the:",
      "answer": 2,
      "explanation": "New securities are sold in the primary market; common shares are capital-market instruments.",
      "source": "5 bộ đề năm trước LTTC.pdf · primary/capital classification",
      "skill": "Classification",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Secondary money market",
        "Secondary capital market",
        "Primary capital market",
        "Primary money market"
      ]
    },
    {
      "id": "q1252",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A dealer network in which securities are traded without a centralized exchange floor is best described as:",
      "answer": 0,
      "explanation": "An OTC market is organized through dealers who stand ready to buy/sell rather than through a centralized exchange floor.",
      "source": "LTTC_Financial market_HKT.pdf + past-paper OTC questions",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Over-the-counter market",
        "Primary market only",
        "Money supply market",
        "Capital budgeting market"
      ]
    },
    {
      "id": "q1253",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Why can a higher secondary-market share price help a firm raise more capital in a future primary issue?",
      "answer": 1,
      "explanation": "Secondary-market prices provide valuation information and affect the price investors may be willing to pay in a new issue; the firm does not receive cash from ordinary secondary trades themselves.",
      "source": "5 bộ đề năm trước LTTC.pdf · secondary-market role",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Because the firm receives every secondary-market trade directly",
        "Because investors may pay a higher price in a future new issue",
        "Because secondary markets convert debt into money supply",
        "Because a high secondary price removes all issuance costs"
      ]
    },
    {
      "id": "q1254",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "When one investor sells existing shares to another investor on an exchange, who normally receives the purchase cash?",
      "answer": 2,
      "explanation": "The seller receives the cash. The issuing company raised funds when it sold securities in the primary market, not in this secondary transaction.",
      "source": "5 bộ đề năm trước LTTC.pdf · role of secondary market",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "The issuing company only",
        "The central bank",
        "The selling investor",
        "The securities regulator"
      ]
    },
    {
      "id": "q1255",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Which statement best describes a commercial bank?",
      "answer": 0,
      "explanation": "A commercial bank accepts deposits/raises deposit funding and uses funds for loans and securities.",
      "source": "LTTC_Financial market_HKT.pdf · commercial banks",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "A depository intermediary that takes deposits and makes loans",
        "A regulator that licenses all firms",
        "A market where stocks are traded",
        "An institution that only underwrites new securities and takes no deposits"
      ]
    },
    {
      "id": "q1256",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "What distinguishes an investment bank from a traditional deposit-taking commercial bank in the supporting notes?",
      "answer": 2,
      "explanation": "Investment banks advise on securities issuance and underwrite/distribute securities rather than primarily taking deposits and making loans.",
      "source": "LTTC_Financial market_HKT.pdf · Investment bank",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "It issues the national currency",
        "It only sells insurance",
        "It advises/underwrites securities rather than primarily taking deposits and lending",
        "It is the same as a credit union"
      ]
    },
    {
      "id": "q1257",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Small or informationally opaque firms are often more likely than large well-known firms to rely on bank financing because banks can:",
      "answer": 1,
      "explanation": "Banks specialize in screening and monitoring borrowers, which helps when public-market investors face larger information problems.",
      "source": "5 bộ đề năm trước LTTC.pdf · bank-financing written question; Mishkin intermediation logic",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Eliminate every business risk",
        "Screen and monitor borrowers",
        "Guarantee all projects earn profits",
        "Issue common stock on behalf of the government"
      ]
    },
    {
      "id": "q1258",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A lender cannot distinguish a safe borrower from a very risky borrower before making a loan. This is primarily:",
      "answer": 0,
      "explanation": "Hidden borrower type before the transaction is the classic adverse-selection problem.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · adverse-selection MCQ",
      "skill": "Classification",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Adverse selection",
        "Moral hazard",
        "Diversification",
        "Market liquidity"
      ]
    },
    {
      "id": "q1259",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "After receiving a loan, a borrower uses the money for a much riskier project than promised. This is primarily:",
      "answer": 1,
      "explanation": "The hidden action occurs after financing, so it is a moral-hazard problem.",
      "source": "LTTC_Financial market_HKT.pdf + past papers",
      "skill": "Classification",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Adverse selection",
        "Moral hazard",
        "Unit of account",
        "Primary-market pricing"
      ]
    },
    {
      "id": "q1260",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Which action most directly reduces adverse selection before a loan is made?",
      "answer": 2,
      "explanation": "Screening and requiring information before lending helps the lender distinguish borrower quality.",
      "source": "5 bộ đề năm trước LTTC.pdf · adverse-selection solutions",
      "skill": "Mitigation Strategy",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Ignoring borrower information",
        "Paying dividends after the loan",
        "Screening applicants and verifying information",
        "Allowing the borrower to change projects freely"
      ]
    },
    {
      "id": "q1261",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Why can collateral reduce an asymmetric-information problem?",
      "answer": 1,
      "explanation": "Collateral gives the borrower more value at risk and gives the lender an asset to seize if repayment fails, improving incentives and loss protection.",
      "source": "5 bộ đề năm trước LTTC.pdf · collateral essay",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "It makes all borrowers identical",
        "It raises the borrower’s stake and protects the lender if default occurs",
        "It eliminates the need for a contract",
        "It guarantees the collateral price never falls"
      ]
    },
    {
      "id": "q1262",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Challenge",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Why might collateral become a weak solution exactly during a crisis?",
      "answer": 3,
      "explanation": "If collateral values fall sharply or are correlated with borrower distress, the lender’s recovery value can disappear when default risk is highest.",
      "source": "5 bộ đề năm trước LTTC.pdf · collateral limitation essay",
      "skill": "Application / Judgment",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Because collateral cannot be legally owned",
        "Because collateral always increases moral hazard",
        "Because collateral is never marketable",
        "Because collateral value can fall when borrower default risk rises"
      ]
    },
    {
      "id": "q1263",
      "module": "markets",
      "concept": "market-quality-regulation",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · New Notes",
      "prompt": "According to the supporting notes, two central reasons for financial regulation are to:",
      "answer": 1,
      "explanation": "The notes emphasize increasing information available to investors and ensuring the soundness of the financial system/intermediaries.",
      "source": "LTTC_Financial market_HKT.pdf · §5 Regulation",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Set every market price and eliminate competition",
        "Increase investor information and promote financial-system soundness",
        "Guarantee every security has positive returns",
        "Replace all private financial institutions"
      ]
    },
    {
      "id": "q1264",
      "module": "markets",
      "concept": "market-quality-regulation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "Which feature is LEAST consistent with a well-run financial market in the uploaded notes?",
      "answer": 3,
      "explanation": "Well-run markets aim for low transaction cost, widely available accurate information, and enforceable investor rights—not deliberately high trading friction.",
      "source": "LTTC_Financial market_HKT.pdf · §3.3",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Low transaction costs",
        "Accurate and widely available information",
        "Credible and enforceable repayment rights",
        "Deliberately high costs of buying and selling"
      ]
    },
    {
      "id": "q1265",
      "module": "markets",
      "concept": "finance-companies-securities",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A corporation wants to raise capital without giving common shareholders additional voting control. Which financing choices can achieve that most directly?",
      "answer": 3,
      "explanation": "Debt and preferred stock can raise funds without granting the same ordinary voting rights as common stock; exact rights depend on contract terms.",
      "source": "5 bộ đề năm trước LTTC.pdf · financing/control MCQ",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Common stock only",
        "Common stock and retained earnings only",
        "Only cash",
        "Debt or preferred stock"
      ]
    },
    {
      "id": "q1266",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "Why do corporations often use money markets for temporary surplus cash?",
      "answer": 0,
      "explanation": "Money-market instruments are short term and usually liquid, which fits temporary cash management needs.",
      "source": "LTTC_Financial market_HKT.pdf · Why money markets",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "They provide short-term liquid instruments for temporary funds",
        "They guarantee the highest return in finance",
        "They contain only common stocks",
        "They have maturities longer than ten years"
      ]
    },
    {
      "id": "q1267",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "What is “maturity transformation” in commercial banking?",
      "answer": 2,
      "explanation": "Banks can fund with relatively short-term deposits and make longer-term loans, transforming the maturity profile of funds.",
      "source": "LTTC_Financial market_HKT.pdf · depository institutions",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Turning equity into currency",
        "Changing coupon bonds into stocks",
        "Funding with shorter-term liabilities and holding longer-term assets",
        "Converting all loans into cash immediately"
      ]
    },
    {
      "id": "q1268",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "Which statement about OTC markets is most accurate in the supporting Mishkin/notes framing?",
      "answer": 3,
      "explanation": "OTC markets use geographically dispersed dealers connected by communications systems; they can still be highly competitive.",
      "source": "Mishkin & Serletis Chapter 2; LTTC_Financial market_HKT.pdf",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "OTC means securities are illegal",
        "OTC has no dealers or quoted prices",
        "OTC is necessarily less competitive than an exchange",
        "OTC can be a competitive dealer market without a centralized floor"
      ]
    },
    {
      "id": "q1269",
      "module": "markets",
      "concept": "market-quality-regulation",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "A disclosure rule that forces issuers to publish reliable financial information most directly targets:",
      "answer": 0,
      "explanation": "Better pre-transaction information helps investors distinguish issuer quality and therefore reduces adverse-selection problems.",
      "source": "LTTC_Financial market_HKT.pdf · regulation and information",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Adverse selection",
        "Compounding frequency",
        "Currency denomination",
        "Annuity timing"
      ]
    },
    {
      "id": "q1270",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Which instrument is an overnight or very short-term loan of reserve balances between banks rather than a loan from the government?",
      "answer": 2,
      "explanation": "Federal funds/interbank funds are loans between banks, not loans made by the federal government or central bank itself.",
      "source": "LTTC_Financial market_HKT.pdf · Federal funds",
      "skill": "Classification",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Treasury bond",
        "Commercial paper",
        "Federal funds",
        "Preferred stock"
      ]
    },
    {
      "id": "q1271",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice · New Notes",
      "prompt": "A repurchase agreement is economically closest to:",
      "answer": 1,
      "explanation": "A repo is effectively a short-term collateralized loan: securities are sold with an agreement to repurchase them.",
      "source": "LTTC_Financial market_HKT.pdf · Repos",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "A perpetual equity claim",
        "A short-term collateralized loan",
        "A common-stock dividend",
        "An unsecured long-term mortgage"
      ]
    },
    {
      "id": "q1272",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "Which statement best describes commercial paper?",
      "answer": 3,
      "explanation": "Commercial paper is short-term unsecured debt issued by large, well-known corporations or financial institutions.",
      "source": "LTTC_Financial market_HKT.pdf · Commercial paper",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Long-term secured government debt",
        "Common stock issued by banks",
        "A retail savings deposit only",
        "Short-term unsecured corporate debt"
      ]
    },
    {
      "id": "q1273",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "What makes a bankers’ acceptance more marketable than an unsupported trade obligation?",
      "answer": 0,
      "explanation": "Bank acceptance adds the bank’s commitment/credit to the payment obligation, improving credibility.",
      "source": "LTTC_Financial market_HKT.pdf · Banker’s acceptance",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "A bank guarantees/accepts the payment obligation",
        "It becomes common stock",
        "Its maturity becomes infinite",
        "It cannot be traded"
      ]
    },
    {
      "id": "q1274",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A $1,000 par bond pays a 6% annual coupon, matures in 10 years, and has an 8% YTM. What is its price?",
      "answer": 865.8,
      "explanation": "Discount the ten $60 coupons and the $1,000 principal at 8%. Because coupon rate < YTM, the price is below par.",
      "source": "5 bộ đề năm trước LTTC.pdf · bond valuation written problem",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Bond cash-flow setup error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.02
    },
    {
      "id": "q1275",
      "module": "valuation",
      "concept": "ytm-bond-types",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A bond’s coupon rate is 6% and its YTM is 8%. All else equal, the bond should trade:",
      "answer": 1,
      "explanation": "When YTM exceeds coupon rate, investors require more return than the coupon provides, so price must fall below par.",
      "source": "5 bộ đề năm trước LTTC.pdf · bond valuation pattern",
      "skill": "Relationship Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Above par",
        "Below par",
        "Exactly at par",
        "At zero"
      ]
    },
    {
      "id": "q1276",
      "module": "valuation",
      "concept": "bond-price-rates",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "If required market yields rise while a bond’s promised cash flows are unchanged, its price will generally:",
      "answer": 1,
      "explanation": "Discounting unchanged future cash flows at a higher rate produces a lower present value.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · bond-price MCQ",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Rise",
        "Fall",
        "Remain fixed",
        "Become equal to coupon payment"
      ]
    },
    {
      "id": "q1277",
      "module": "valuation",
      "concept": "bond-price-rates",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A company’s credit rating improves and investors lower the required return on its existing bond. What happens to the bond price, other things equal?",
      "answer": 0,
      "explanation": "Lower required return means less discounting of the same promised cash flows, so price rises.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · rating-upgrade written problem",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "It rises",
        "It falls",
        "It must equal zero",
        "It becomes unrelated to YTM"
      ]
    },
    {
      "id": "q1278",
      "module": "valuation",
      "concept": "bond-ratings-international",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Under the common S&P convention used in the course questions, speculative-grade bonds are generally rated:",
      "answer": 2,
      "explanation": "Investment grade is BBB−/BBB or above depending on notation; ratings below BBB category are speculative grade in the simplified course framing.",
      "source": "5 bộ đề năm trước LTTC.pdf · credit-rating MCQ",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "AAA only",
        "Above AA",
        "Below BBB category",
        "Exactly A"
      ]
    },
    {
      "id": "q1279",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "An 18-year coupon bond pays coupons semiannually and is stripped into separate zero-coupon claims for every payment, including principal. How many separate claims result?",
      "answer": 3,
      "explanation": "There are 18×2 = 36 coupon payments plus one principal payment = 37 separate cash-flow claims.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · STRIPS MCQ",
      "skill": "Numerical Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "18",
        "19",
        "36",
        "37"
      ]
    },
    {
      "id": "q1280",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "For a bond dealer quote, the bid price is the price at which the dealer is willing to:",
      "answer": 1,
      "explanation": "Bid is the dealer’s purchase price—the amount the dealer bids to buy the security from an investor.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · bid-price MCQ",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Sell the bond to an investor",
        "Buy the bond from an investor",
        "Pay the coupon to the issuer",
        "Redeem the bond at maturity"
      ]
    },
    {
      "id": "q1281",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A $10,000 Treasury bill has 180 days to maturity. Using a 360-day bank-discount convention, the ask discount quote is 2.65%. What price does an investor pay to buy the T-bill?",
      "answer": 9867.5,
      "explanation": "Price = Face × [1 − d × days/360] = 10,000[1 − 0.0265×180/360].",
      "source": "5 bộ đề năm trước LTTC.pdf · T-bill bid/ask question",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Money-market quote convention error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.02
    },
    {
      "id": "q1282",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "The same $10,000, 180-day T-bill has a 2.75% bid discount quote. Using the 360-day bank-discount convention, what price would the dealer pay to buy the bill from the investor?",
      "answer": 9862.5,
      "explanation": "Use the bid discount quote in the same discount-price formula. A higher discount quote means a lower dollar price.",
      "source": "5 bộ đề năm trước LTTC.pdf · T-bill bid/ask question",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Bid/ask direction error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.02
    },
    {
      "id": "q1283",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Commercial paper has face value $10.0 million, price $9.55 million, and 270 days to maturity. Using a 365-day bond-equivalent/simple investment-yield convention, what annualized yield (%) is earned if held to maturity?",
      "answer": 6.37,
      "explanation": "First compute holding-period return = (10.0−9.55)/9.55, then annualize by 365/270.",
      "source": "5 bộ đề năm trước LTTC.pdf · commercial-paper BEY question",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Yield denominator/day-count error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.01
    },
    {
      "id": "q1284",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "numeric",
      "difficulty": "Challenge",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A 28-day T-bill has a 0.25% bank-discount quote on a 360-day basis. What is its bond-equivalent/simple annualized yield on a 365-day basis (in %)?",
      "answer": 0.2535,
      "explanation": "Convert the discount quote to price, compute the holding-period return on price, then annualize HPR by 365/28.",
      "source": "5 bộ đề năm trước LTTC.pdf · 28-day T-bill yield question",
      "skill": "Multi-step Problem",
      "examPriority": "Frequent",
      "mistakeType": "Yield-convention conversion error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.005
    },
    {
      "id": "q1285",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "numeric",
      "difficulty": "Challenge",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "For the same 28-day T-bill with a 0.25% bank-discount quote, what is the effective annual return (in %), assuming repeated investment at the same 28-day holding-period return?",
      "answer": 0.2538,
      "explanation": "EAR = (1 + HPR)^(365/28) − 1 after converting the discount quote to the actual 28-day HPR on invested price.",
      "source": "5 bộ đề năm trước LTTC.pdf · 28-day T-bill yield question",
      "skill": "Multi-step Problem",
      "examPriority": "Frequent",
      "mistakeType": "Simple annualization vs compounding error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.005
    },
    {
      "id": "q1286",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "Why are Treasury bills commonly described as especially liquid money-market instruments?",
      "answer": 2,
      "explanation": "They are actively traded short-term government instruments, so investors can generally buy or sell them with relatively low trading friction.",
      "source": "LTTC_Financial market_HKT.pdf · Treasury bills",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "They have no maturity date",
        "They are equity claims",
        "They are actively traded short-term government instruments",
        "They always offer the highest yield"
      ]
    },
    {
      "id": "q1287",
      "module": "valuation",
      "concept": "money-market-instruments",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "Which statement about negotiable CDs is most accurate?",
      "answer": 0,
      "explanation": "A negotiable CD is a bank debt/time-deposit instrument that can be sold in a secondary market.",
      "source": "LTTC_Financial market_HKT.pdf · Negotiable CDs",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "It is a bank-issued debt/time-deposit instrument that can be traded",
        "It is common stock issued by a bank",
        "It is a Treasury bill issued by the government",
        "It is an insurance policy"
      ]
    },
    {
      "id": "q1288",
      "module": "valuation",
      "concept": "bond-ratings-international",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Other things equal, which bond should normally offer the higher yield?",
      "answer": 1,
      "explanation": "Greater default risk generally requires a higher promised yield to compensate investors.",
      "source": "5 bộ đề năm trước LTTC.pdf · risk/yield relationship",
      "skill": "Relationship Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "A less risky bond with the same maturity and tax treatment",
        "A more default-risky bond with the same maturity and tax treatment",
        "A more liquid bond with identical risk",
        "A tax-advantaged bond with identical risk and liquidity"
      ]
    },
    {
      "id": "q1289",
      "module": "valuation",
      "concept": "bond-ratings-international",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Other things equal, greater bond liquidity should generally be associated with:",
      "answer": 0,
      "explanation": "Investors value liquidity, so they normally accept a lower required yield for a more liquid otherwise-comparable bond.",
      "source": "5 bộ đề năm trước LTTC.pdf · determinants of yields",
      "skill": "Relationship Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "A lower required yield",
        "A higher required yield",
        "No value to investors",
        "A mandatory coupon increase"
      ]
    },
    {
      "id": "q1290",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "mcq",
      "difficulty": "Challenge",
      "origin": "Generated Practice · New Notes",
      "prompt": "A bond’s market price is above par. Which relationship is most likely if default risk and optionality are ignored?",
      "answer": 3,
      "explanation": "A premium bond has a coupon rate above the market-required YTM for comparable risk and maturity.",
      "source": "2023 Valuation of securities.pdf + past-paper bond patterns",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Coupon rate = 0",
        "YTM > coupon rate",
        "Price must equal accrued interest",
        "Coupon rate > YTM"
      ]
    },
    {
      "id": "q1291",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A project payoff is $0 with probability 25% and $1,000 with probability 75%. What is the expected payoff?",
      "answer": 750,
      "explanation": "Expected payoff is the probability-weighted average: 0.25×0 + 0.75×1,000.",
      "source": "5 bộ đề năm trước LTTC.pdf · discrete-risk pattern (normalized to payoff, not net profit)",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Expected-value setup error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.01
    },
    {
      "id": "q1292",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "For the same payoff distribution ($0 with 25%, $1,000 with 75%), what is the standard deviation of payoff?",
      "answer": 433.01,
      "explanation": "Compute EV = 750, then variance = 0.25(0−750)^2 + 0.75(1000−750)^2 and take the square root.",
      "source": "5 bộ đề năm trước LTTC.pdf · discrete-risk pattern (normalized)",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Variance/standard-deviation error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "$",
      "tolerance": 0.02
    },
    {
      "id": "q1293",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "A portfolio invests 30% in X (σ=20%) and 70% in Y (σ=10%). Correlation is −0.50. What is portfolio standard deviation (in %)?",
      "answer": 6.5574,
      "explanation": "Cov = −0.50×0.20×0.10 = −0.01. Then apply the two-asset variance formula and take the square root.",
      "source": "5 bộ đề năm trước LTTC.pdf · portfolio-risk pattern, normalized inputs",
      "skill": "Multi-step Problem",
      "examPriority": "Frequent",
      "mistakeType": "Portfolio covariance error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.01
    },
    {
      "id": "q1294",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "If two risky assets have perfectly positive correlation (+1), combining them generally provides:",
      "answer": 2,
      "explanation": "With perfect positive correlation, returns move together exactly; there is no offsetting co-movement to create diversification benefit.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · diversification MCQ",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Maximum possible diversification",
        "A guaranteed higher expected return",
        "No diversification benefit from imperfect co-movement",
        "Zero portfolio risk"
      ]
    },
    {
      "id": "q1295",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "Holding weights and individual volatilities fixed, portfolio variance falls when correlation moves from +0.8 to +0.2 because:",
      "answer": 1,
      "explanation": "The covariance cross term 2wXwYρσXσY becomes smaller.",
      "source": "Two-asset portfolio relation derived from past-paper pattern + risk concepts",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Expected returns automatically become zero",
        "The covariance contribution becomes smaller",
        "The weights disappear",
        "Each asset’s variance becomes negative"
      ]
    },
    {
      "id": "q1296",
      "module": "risk",
      "concept": "leverage-risk",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Which statement about financial leverage is most consistently supported by the course risk logic?",
      "answer": 1,
      "explanation": "More debt increases fixed obligations and therefore raises default/financial-distress risk, even though equity outcomes may also become more amplified.",
      "source": "5 bộ đề năm trước LTTC.pdf · leverage-risk MCQ",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Leverage always reduces default risk",
        "Leverage increases default risk",
        "Leverage guarantees a higher realized profit",
        "Leverage eliminates business risk"
      ]
    },
    {
      "id": "q1297",
      "module": "risk",
      "concept": "risk-aversion-premium",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Why do risk-averse investors still hold risky assets?",
      "answer": 2,
      "explanation": "Risk aversion does not mean avoiding all risk; investors may accept risk when expected compensation/risk premium is sufficient.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · risk-aversion MCQ",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "They secretly prefer losses",
        "Risky assets have zero variance",
        "They may be compensated with a sufficient risk premium",
        "Treasury securities cannot be purchased"
      ]
    },
    {
      "id": "q1298",
      "module": "risk",
      "concept": "defining-risk",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "The measure that focuses on the worst potential loss over a specified horizon and confidence framework is:",
      "answer": 2,
      "explanation": "Value at Risk is designed to summarize potential loss over a horizon at a stated confidence level.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · risk-measure pattern",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Expected return",
        "Dividend yield",
        "Value at Risk",
        "Asset turnover"
      ]
    },
    {
      "id": "q1299",
      "module": "risk",
      "concept": "systematic-idiosyncratic",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "Which risk is most directly reduced by holding many unrelated firms in a diversified portfolio?",
      "answer": 0,
      "explanation": "Firm-specific/idiosyncratic risk can be diversified away; broad systematic risk remains.",
      "source": "2023 Understanding risk.pdf · diversification concepts",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Idiosyncratic risk",
        "Systematic market risk",
        "Inflation in every asset simultaneously",
        "Risk-free rate"
      ]
    },
    {
      "id": "q1300",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "Asset X has σ=15%, asset Y has σ=25%, and their correlation is 0.40. What is their covariance in decimal units?",
      "answer": 0.015,
      "explanation": "Cov(X,Y) = ρσXσY = 0.40×0.15×0.25.",
      "source": "Portfolio-risk extension from past-paper pattern",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Correlation/covariance conversion error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "tolerance": 1e-06
    },
    {
      "id": "q1301",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "mcq",
      "difficulty": "Challenge",
      "origin": "Generated Practice · New Notes",
      "prompt": "A portfolio’s expected return can remain unchanged while its risk falls through diversification because:",
      "answer": 3,
      "explanation": "Expected return is a weighted average of expected returns, while variance also depends on covariance/correlation. Changing co-movement can lower risk without changing the weighted expected-return inputs.",
      "source": "Risk diversification relation; past-paper portfolio pattern",
      "skill": "Interpretation",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Expected return and variance are the same formula",
        "Diversification always raises each asset’s return",
        "Correlation changes the face value of each asset",
        "Portfolio variance depends on covariance in addition to individual expected returns"
      ]
    },
    {
      "id": "q1302",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice · New Notes",
      "prompt": "Why is standard deviation often easier to interpret than variance?",
      "answer": 0,
      "explanation": "Standard deviation is in the same units as the underlying payoff/return, whereas variance is in squared units.",
      "source": "2023 Understanding risk.pdf · variance and standard deviation",
      "skill": "Interpretation",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "It is expressed in the original units",
        "It can never be zero",
        "It ignores probabilities",
        "It is always smaller than expected value"
      ]
    },
    {
      "id": "q1303",
      "module": "risk",
      "concept": "leverage-risk",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "Why can leverage amplify equity return variability?",
      "answer": 1,
      "explanation": "Debt creates fixed claims. After those claims are paid, a given change in firm asset value is absorbed by a smaller equity base, magnifying percentage changes in equity outcomes.",
      "source": "2023 Understanding risk.pdf · leverage and risk",
      "skill": "Cause–Effect",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Debt makes asset cash flows risk-free",
        "Fixed debt claims concentrate residual variability in equity",
        "Debt converts all liabilities into equity",
        "Debt removes default risk"
      ]
    },
    {
      "id": "q1304",
      "module": "risk",
      "concept": "hedging-diversification",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "Which statement best distinguishes hedging from diversification?",
      "answer": 2,
      "explanation": "Hedging offsets a specific exposure using an opposing position/contract; diversification spreads exposure across imperfectly related risks.",
      "source": "2023 Understanding risk.pdf · risk management concepts",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Both require perfect positive correlation",
        "Diversification always uses derivatives",
        "Hedging offsets an exposure; diversification spreads across risks",
        "Hedging is identical to insurance premiums"
      ]
    },
    {
      "id": "q1305",
      "module": "health",
      "concept": "leverage-coverage-ratios",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "The debt-to-equity ratio is defined as:",
      "answer": 2,
      "explanation": "Debt-to-equity compares total debt with total equity.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · ratio MCQ",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Equity minus debt",
        "Equity divided by debt",
        "Debt divided by equity",
        "Debt plus equity divided by equity"
      ]
    },
    {
      "id": "q1306",
      "module": "health",
      "concept": "profitability-market-ratios",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Net income divided by sales is the firm’s:",
      "answer": 0,
      "explanation": "Net profit margin = net income / sales.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · ratio MCQ",
      "skill": "Definition Recall",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Net profit margin",
        "Return on assets",
        "Return on equity",
        "Asset turnover"
      ]
    },
    {
      "id": "q1307",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Company ABC reports ROE 19.8%, ROA 8.1%, and asset turnover 2.0 in 2020. What is the equity multiplier?",
      "answer": 2.4444,
      "explanation": "Use ROE = ROA × Equity Multiplier, so Equity Multiplier = ROE/ROA.",
      "source": "5 bộ đề năm trước LTTC.pdf · DuPont missing-value table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "tolerance": 0.001
    },
    {
      "id": "q1308",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Company ABC reports ROA 8.1% and asset turnover 2.0 in 2020. What is net profit margin (in %)?",
      "answer": 4.05,
      "explanation": "Use ROA = Net Profit Margin × Asset Turnover, so margin = ROA/Asset Turnover.",
      "source": "5 bộ đề năm trước LTTC.pdf · DuPont missing-value table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.01
    },
    {
      "id": "q1309",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Company ABC reports ROE 20.0%, ROA 8.0%, and asset turnover 2.0 in 2021. What is the equity multiplier?",
      "answer": 2.5,
      "explanation": "Use ROE = ROA × Equity Multiplier, so Equity Multiplier = ROE/ROA.",
      "source": "5 bộ đề năm trước LTTC.pdf · DuPont missing-value table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "tolerance": 0.001
    },
    {
      "id": "q1310",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Company ABC reports ROA 8.0% and asset turnover 2.0 in 2021. What is net profit margin (in %)?",
      "answer": 4,
      "explanation": "Use ROA = Net Profit Margin × Asset Turnover, so margin = ROA/Asset Turnover.",
      "source": "5 bộ đề năm trước LTTC.pdf · DuPont missing-value table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.01
    },
    {
      "id": "q1311",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Company ABC reports ROE 22.0%, ROA 7.9%, and asset turnover 2.1 in 2022. What is the equity multiplier?",
      "answer": 2.7848,
      "explanation": "Use ROE = ROA × Equity Multiplier, so Equity Multiplier = ROE/ROA.",
      "source": "5 bộ đề năm trước LTTC.pdf · DuPont missing-value table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "tolerance": 0.001
    },
    {
      "id": "q1312",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Company ABC reports ROA 7.9% and asset turnover 2.1 in 2022. What is net profit margin (in %)?",
      "answer": 3.7619,
      "explanation": "Use ROA = Net Profit Margin × Asset Turnover, so margin = ROA/Asset Turnover.",
      "source": "5 bộ đề năm trước LTTC.pdf · DuPont missing-value table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.01
    },
    {
      "id": "q1313",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Hermès has ROA 23.14% and asset turnover 1.09. Using DuPont, what is its net profit margin (in %)?",
      "answer": 21.229,
      "explanation": "Net profit margin = ROA / asset turnover.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · luxury-company DuPont table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.02
    },
    {
      "id": "q1314",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Burberry has ROA 15.93% and asset turnover 1.23. Using DuPont, what is its net profit margin (in %)?",
      "answer": 12.951,
      "explanation": "Net profit margin = ROA / asset turnover.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · luxury-company DuPont table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.02
    },
    {
      "id": "q1315",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Kering has ROA 4.19% and asset turnover 0.39. Using DuPont, what is its net profit margin (in %)?",
      "answer": 10.744,
      "explanation": "Net profit margin = ROA / asset turnover.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · luxury-company DuPont table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.02
    },
    {
      "id": "q1316",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "LVMH has ROA 6.94% and asset turnover 0.57. Using DuPont, what is its net profit margin (in %)?",
      "answer": 12.175,
      "explanation": "Net profit margin = ROA / asset turnover.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · luxury-company DuPont table",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "DuPont reverse-engineering error",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "unit": "%",
      "tolerance": 0.02
    },
    {
      "id": "q1317",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Using the reported ROA and asset-turnover values for Hermès, Burberry, Kering, and LVMH in the past-paper table, which company has the highest implied net profit margin?",
      "answer": 0,
      "explanation": "Net margin = ROA/asset turnover. The implied margins are highest for Hermès among the four reported firms.",
      "source": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf · DuPont table",
      "skill": "Interpretation",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Hermès",
        "Burberry",
        "Kering",
        "LVMH"
      ]
    },
    {
      "id": "q1318",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "A firm’s ROE rises while ROA is unchanged. In the DuPont identity, which component must have increased?",
      "answer": 2,
      "explanation": "Since ROE = ROA × Equity Multiplier, if ROA is unchanged and ROE rises, the equity multiplier must rise.",
      "source": "2023 Analyzing Firm Performance.pdf + past-paper DuPont pattern",
      "skill": "Relationship Reasoning",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Net income must be zero",
        "Asset turnover must fall",
        "Equity multiplier",
        "Current ratio"
      ]
    },
    {
      "id": "q1319",
      "module": "health",
      "concept": "benchmarking-cautions",
      "type": "mcq",
      "difficulty": "Challenge",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "Why is comparing one company’s debt ratio with another company’s ratio potentially misleading without further analysis?",
      "answer": 3,
      "explanation": "Accounting policies, business models, asset risk, off-balance-sheet obligations, and book-versus-market measurement can make superficially identical ratios economically different.",
      "source": "5 bộ đề năm trước LTTC.pdf · leverage-measurement essay",
      "skill": "Application / Judgment",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Ratios never use accounting numbers",
        "Debt has no economic meaning",
        "All industries use identical capital structures",
        "Measurement basis and off-balance-sheet obligations can differ"
      ]
    },
    {
      "id": "q1320",
      "module": "health",
      "concept": "benchmarking-cautions",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Past Exam — normalized/adapted",
      "prompt": "When measuring leverage for a market-value analysis, why might market equity be more informative than book equity?",
      "answer": 1,
      "explanation": "Market equity reflects current investor valuation, while book equity is an accounting measure based on historical transactions and rules. The appropriate measure depends on the purpose of analysis.",
      "source": "5 bộ đề năm trước LTTC.pdf · leverage-measurement essay",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Book equity is always zero",
        "Market equity reflects current market valuation",
        "Market equity cannot change",
        "Book equity is a cash-flow measure"
      ]
    },
    {
      "id": "q1321",
      "module": "health",
      "concept": "profitability-market-ratios",
      "type": "mcq",
      "difficulty": "Advanced",
      "origin": "Generated Practice · New Notes",
      "prompt": "Two firms have the same ROA, but Firm A has a much higher ROE. A likely explanation is that Firm A has:",
      "answer": 2,
      "explanation": "ROE = ROA × equity multiplier. With the same ROA, a higher ROE is consistent with greater financial leverage/higher equity multiplier.",
      "source": "DuPont identity; 2023 Analyzing Firm Performance.pdf",
      "skill": "Interpretation",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the concept first, then apply the relationship stated in the source.",
      "options": [
        "Lower equity multiplier",
        "Lower sales",
        "Higher equity multiplier",
        "Zero debt"
      ]
    },
    {
      "id": "v06_intro_01",
      "module": "intro",
      "concept": "real-vs-financial",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A machine used in production is best classified as:",
      "options": [
        "A financial asset",
        "A real asset",
        "A liability",
        "A derivative"
      ],
      "answer": 1,
      "explanation": "A machine is a productive physical resource, so it is a real asset.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_02",
      "module": "intro",
      "concept": "real-vs-financial",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A corporate bond held by an investor is best classified as:",
      "options": [
        "A real asset",
        "A financial asset",
        "A physical liability",
        "Inventory"
      ],
      "answer": 1,
      "explanation": "A bond is a financial claim on the issuer.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_03",
      "module": "intro",
      "concept": "defining-finance",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which decision is most central to finance?",
      "options": [
        "Allocating scarce resources over time under uncertainty",
        "Recording historical transactions only",
        "Choosing tax forms only",
        "Designing production machinery"
      ],
      "answer": 0,
      "explanation": "Finance focuses on allocating resources over time, often under uncertainty.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_04",
      "module": "intro",
      "concept": "household-decisions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A household deciding how much income to save is making which financial decision?",
      "options": [
        "Consumption and saving",
        "Production",
        "Auditing",
        "Inventory control"
      ],
      "answer": 0,
      "explanation": "The course groups this under consumption and saving decisions.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_05",
      "module": "intro",
      "concept": "firm-decisions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A firm choosing whether to build a new factory is primarily making a:",
      "options": [
        "Financing decision",
        "Investment decision",
        "Dividend bookkeeping decision",
        "Tax filing decision"
      ],
      "answer": 1,
      "explanation": "Selecting real investment projects is an investment decision.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_06",
      "module": "intro",
      "concept": "firm-decisions",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A firm deciding between issuing debt and equity is making a:",
      "options": [
        "Financing decision",
        "Production decision",
        "Consumption decision",
        "Inventory decision"
      ],
      "answer": 0,
      "explanation": "Debt versus equity is a financing choice.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_07",
      "module": "intro",
      "concept": "business-organization",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which form generally provides limited liability to owners?",
      "options": [
        "Sole proprietorship only",
        "Corporation",
        "Informal partnership only",
        "None"
      ],
      "answer": 1,
      "explanation": "A corporation is a separate legal entity and shareholders generally have limited liability.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_08",
      "module": "intro",
      "concept": "goal-management",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which action is most consistent with value maximization?",
      "options": [
        "Accept every project with positive accounting income",
        "Choose projects that increase owners’ wealth after considering timing and risk",
        "Maximize sales regardless of cost",
        "Avoid all risky projects"
      ],
      "answer": 1,
      "explanation": "Value maximization requires considering cash-flow timing, risk, and opportunity cost.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_09",
      "module": "intro",
      "concept": "financial-system",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "The main economic role of the financial system is to:",
      "options": [
        "Eliminate all risk",
        "Channel funds from surplus units to deficit units",
        "Fix all market prices",
        "Replace all banks with markets"
      ],
      "answer": 1,
      "explanation": "The financial system channels funds from savers to users of funds.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_10",
      "module": "intro",
      "concept": "financial-system",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "In direct finance, funds move from savers to borrowers primarily through:",
      "options": [
        "A financial market",
        "Only a commercial bank balance sheet",
        "A tax authority",
        "A payment processor only"
      ],
      "answer": 0,
      "explanation": "Direct finance uses financial markets rather than an intermediary standing between saver and borrower.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_11",
      "module": "intro",
      "concept": "money-functions-payment",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which function of money is illustrated when prices are quoted in VND?",
      "options": [
        "Medium of exchange",
        "Unit of account",
        "Store of value only",
        "Risk transfer"
      ],
      "answer": 1,
      "explanation": "Quoting prices uses money as a unit of account.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_12",
      "module": "intro",
      "concept": "money-functions-payment",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Why does barter create high transaction costs?",
      "options": [
        "It requires a double coincidence of wants",
        "Money earns interest",
        "Assets are standardized",
        "Prices never change"
      ],
      "answer": 0,
      "explanation": "Barter requires finding a counterparty whose wants match yours.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_13",
      "module": "intro",
      "concept": "money-functions-payment",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which property makes money especially useful as a store of value for transactions?",
      "options": [
        "Liquidity",
        "Illiquidity",
        "Non-divisibility",
        "High default risk"
      ],
      "answer": 0,
      "explanation": "Money is the most liquid asset because it is already the medium of exchange.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_14",
      "module": "intro",
      "concept": "financial-instruments-deep",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A financial instrument is valuable partly because of all EXCEPT:",
      "options": [
        "Size of promised payment",
        "Timing of payment",
        "Likelihood of payment",
        "The color of the contract"
      ],
      "answer": 3,
      "explanation": "Value depends on size, timing, likelihood, and circumstances—not irrelevant physical features.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_15",
      "module": "intro",
      "concept": "financial-instruments-deep",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Holding everything else constant, a promised payment becomes more valuable when it is:",
      "options": [
        "Paid later",
        "Less likely",
        "Paid sooner",
        "More uncertain"
      ],
      "answer": 2,
      "explanation": "Earlier and more certain payments are more valuable.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_16",
      "module": "intro",
      "concept": "financial-instruments-deep",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Standardization of financial instruments mainly helps by:",
      "options": [
        "Increasing complexity",
        "Reducing creation and understanding costs",
        "Eliminating all default risk",
        "Making every instrument identical in risk"
      ],
      "answer": 1,
      "explanation": "Standardization reduces complexity and transaction costs.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_17",
      "module": "intro",
      "concept": "financial-system",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A bank deposit is best viewed from the bank’s perspective as a:",
      "options": [
        "Liability",
        "Real asset",
        "Equity claim",
        "Revenue"
      ],
      "answer": 0,
      "explanation": "The bank owes the depositor, so the deposit is the bank’s liability.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_18",
      "module": "intro",
      "concept": "financial-system",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A loan already advanced to a borrower is best viewed by the lender as a:",
      "options": [
        "Liability",
        "Asset",
        "Expense only",
        "Equity"
      ],
      "answer": 1,
      "explanation": "The lender has a claim on future repayment, so the loan is an asset.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_19",
      "module": "intro",
      "concept": "goal-management",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Why can separation of ownership and management create an agency problem?",
      "options": [
        "Managers may have objectives different from owners",
        "Owners always know more than managers",
        "Debt cannot be issued",
        "Markets stop trading"
      ],
      "answer": 0,
      "explanation": "Managers may pursue actions that do not fully align with owners’ interests.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_intro_20",
      "module": "intro",
      "concept": "financial-instruments-deep",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which example most clearly illustrates risk transfer by a financial instrument?",
      "options": [
        "Insurance contract",
        "Cash in a wallet",
        "A price tag",
        "A receipt"
      ],
      "answer": 0,
      "explanation": "Insurance transfers specified risks in exchange for a premium.",
      "source": "2024 Introduction to Finance.pdf + LTTC_Financial market_HKT.pdf · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c01",
      "module": "tvm",
      "concept": "tvm-intuition",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Why is $1 today generally worth more than $1 one year from now?",
      "options": [
        "Today’s dollar can earn a return before next year",
        "Future money is always illegal",
        "Inflation can never occur",
        "Risk is always zero"
      ],
      "answer": 0,
      "explanation": "Current money can be invested; inflation and uncertainty also contribute.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c02",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compounding moves a cash flow:",
      "options": [
        "From future to present",
        "From present to future",
        "Between currencies only",
        "From equity to debt"
      ],
      "answer": 1,
      "explanation": "Compounding translates present value into future value.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c03",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Discounting moves a cash flow:",
      "options": [
        "From future to present",
        "From present to future",
        "Only between accounts",
        "Only between firms"
      ],
      "answer": 0,
      "explanation": "Discounting translates future cash flow into present value.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c04",
      "module": "tvm",
      "concept": "multiple-cash-flows",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Before adding cash flows at different dates, you should:",
      "options": [
        "Convert them to a common date",
        "Add them directly",
        "Ignore timing",
        "Use different discount rates randomly"
      ],
      "answer": 0,
      "explanation": "Cash flows must be expressed at the same point in time before aggregation.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c05",
      "module": "tvm",
      "concept": "annuities",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An ordinary annuity has payments occurring:",
      "options": [
        "At the beginning of each period",
        "At the end of each period",
        "At random dates",
        "Only once"
      ],
      "answer": 1,
      "explanation": "Ordinary annuity payments occur at period-end.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c06",
      "module": "tvm",
      "concept": "annuities",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An annuity due differs from an ordinary annuity because payments occur:",
      "options": [
        "One period earlier",
        "One period later",
        "At maturity only",
        "At irregular intervals"
      ],
      "answer": 0,
      "explanation": "Annuity-due payments are shifted one period earlier.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c07",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "If APR is fixed, more frequent compounding generally makes EAR:",
      "options": [
        "Lower",
        "Higher",
        "Always zero",
        "Unrelated to compounding"
      ],
      "answer": 1,
      "explanation": "More frequent compounding raises the effective annual rate for a positive APR.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c08",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "To discount monthly cash flows quoted with a nominal APR, use:",
      "options": [
        "APR directly as monthly rate",
        "APR/12 per month, if monthly compounding",
        "EAR/365 always",
        "A random annual rate"
      ],
      "answer": 1,
      "explanation": "Rate and cash-flow period must match.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c09",
      "module": "tvm",
      "concept": "loans",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "In a fully amortizing fixed-payment loan, the interest component generally:",
      "options": [
        "Rises over time",
        "Falls over time",
        "Is constant in dollars",
        "Is always zero"
      ],
      "answer": 1,
      "explanation": "As outstanding principal falls, interest charged on that balance falls.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c10",
      "module": "tvm",
      "concept": "loans",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Immediately after a scheduled loan payment, the payoff balance equals:",
      "options": [
        "PV of remaining payments at the loan rate",
        "Original principal",
        "Total future payments without discounting",
        "Only next period interest"
      ],
      "answer": 0,
      "explanation": "The remaining balance is the present value of remaining contractual payments.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c11",
      "module": "tvm",
      "concept": "perpetuities",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A perpetuity is a stream of:",
      "options": [
        "Equal payments forever",
        "One payment only",
        "Payments for exactly 10 years",
        "Random equity prices"
      ],
      "answer": 0,
      "explanation": "A level perpetuity pays equal cash flows indefinitely.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c12",
      "module": "tvm",
      "concept": "growing-cash-flows",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "For a growing perpetuity formula C1/(r-g), a necessary condition is:",
      "options": [
        "g>r",
        "r>g",
        "r=0 always",
        "C1=0"
      ],
      "answer": 1,
      "explanation": "The standard growing perpetuity requires discount rate greater than growth rate.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c13",
      "module": "tvm",
      "concept": "npv",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A project with NPV > 0 should generally be:",
      "options": [
        "Accepted",
        "Rejected automatically",
        "Ignored",
        "Accepted only if accounting profit is zero"
      ],
      "answer": 0,
      "explanation": "Positive NPV means value created relative to the opportunity cost of capital.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c14",
      "module": "tvm",
      "concept": "npv",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "When comparing mutually exclusive projects with similar risk, the primary decision rule is generally to choose:",
      "options": [
        "Highest NPV",
        "Highest initial cost",
        "Lowest cash inflow",
        "Shortest name"
      ],
      "answer": 0,
      "explanation": "NPV directly measures value added.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c15",
      "module": "tvm",
      "concept": "irr",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "IRR is the discount rate that makes:",
      "options": [
        "NPV equal to zero",
        "Future value equal to zero always",
        "Coupon equal face value",
        "Accounting profit maximum"
      ],
      "answer": 0,
      "explanation": "IRR solves the rate at which discounted inflows equal discounted outflows.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c16",
      "module": "tvm",
      "concept": "irr",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A multiple-IRR problem can arise when project cash flows:",
      "options": [
        "Change sign more than once",
        "Are all positive after one initial negative cash flow",
        "Are constant forever",
        "Have no time dimension"
      ],
      "answer": 0,
      "explanation": "Non-conventional cash-flow sign changes can create multiple IRRs.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c17",
      "module": "tvm",
      "concept": "tvm-intuition",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Inflation matters for TVM because it can:",
      "options": [
        "Change purchasing power over time",
        "Guarantee higher real wealth",
        "Eliminate opportunity cost",
        "Make discounting unnecessary"
      ],
      "answer": 0,
      "explanation": "Inflation changes the real purchasing power of nominal money.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c18",
      "module": "tvm",
      "concept": "multiple-cash-flows",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A timeline is most useful because it:",
      "options": [
        "Makes timing and signs of cash flows explicit",
        "Eliminates all calculations",
        "Converts debt to equity",
        "Sets market prices"
      ],
      "answer": 0,
      "explanation": "A timeline helps prevent timing and sign errors.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c19",
      "module": "tvm",
      "concept": "loans",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Total scheduled interest on a fixed fully amortizing loan equals:",
      "options": [
        "Total payments minus original principal",
        "Original principal minus total payments",
        "Payment times interest rate only",
        "Original principal"
      ],
      "answer": 0,
      "explanation": "Total interest is total cash paid less the amount borrowed.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_c20",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "EAR is best described as:",
      "options": [
        "Equivalent annual rate with annual compounding",
        "Monthly rate multiplied by 12 in all cases",
        "Nominal rate before compounding",
        "Coupon rate"
      ],
      "answer": 0,
      "explanation": "EAR is the annual rate equivalent after accounting for compounding frequency.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Exam Trap",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_tvm_n01",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You invest $500 today at 6.0% per year for 4 years. What is the future value?",
      "answer": 631.2384800000002,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "FV = 500(1+0.0600)^4 = 631.24.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n02",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You invest $1,200 today at 7.0% per year for 6 years. What is the future value?",
      "answer": 1800.8764222188006,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "FV = 1,200(1+0.0700)^6 = 1,800.88.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n03",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You invest $2,500 today at 4.5% per year for 8 years. What is the future value?",
      "answer": 3555.2515320915186,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "FV = 2,500(1+0.0450)^8 = 3,555.25.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n04",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You invest $10,000 today at 5.5% per year for 3 years. What is the future value?",
      "answer": 11742.413749999998,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "FV = 10,000(1+0.0550)^3 = 11,742.41.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n05",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You invest $750 today at 9.0% per year for 10 years. What is the future value?",
      "answer": 1775.5227559440893,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "FV = 750(1+0.0900)^10 = 1,775.52.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n06",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "What is the present value of $5,000 received in 5 years if the discount rate is 8.0%?",
      "answer": 3402.9159851687646,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = 5,000/(1+0.0800)^5 = 3,402.92.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n07",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "What is the present value of $20,000 received in 7 years if the discount rate is 6.0%?",
      "answer": 13301.142272446723,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = 20,000/(1+0.0600)^7 = 13,301.14.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n08",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "What is the present value of $1,500 received in 3 years if the discount rate is 10.0%?",
      "answer": 1126.9722013523663,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = 1,500/(1+0.1000)^3 = 1,126.97.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n09",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "What is the present value of $100,000 received in 12 years if the discount rate is 5.0%?",
      "answer": 55683.74181775592,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = 100,000/(1+0.0500)^12 = 55,683.74.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n10",
      "module": "tvm",
      "concept": "lump-sum",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "What is the present value of $8,000 received in 4 years if the discount rate is 7.2%?",
      "answer": 6057.743015884822,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = 8,000/(1+0.0720)^4 = 6,057.74.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n11",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute the EAR for an APR of 6.00% compounded 12 times per year. Enter a percentage.",
      "answer": 6.167781186449828,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "EAR = (1+APR/m)^m−1 = 6.1678%.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n12",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute the EAR for an APR of 9.00% compounded 4 times per year. Enter a percentage.",
      "answer": 9.308331878906229,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "EAR = (1+APR/m)^m−1 = 9.3083%.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n13",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute the EAR for an APR of 12.00% compounded 12 times per year. Enter a percentage.",
      "answer": 12.682503013196978,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "EAR = (1+APR/m)^m−1 = 12.6825%.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n14",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute the EAR for an APR of 7.50% compounded 2 times per year. Enter a percentage.",
      "answer": 7.640625000000023,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "EAR = (1+APR/m)^m−1 = 7.6406%.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n15",
      "module": "tvm",
      "concept": "apr-ear",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute the EAR for an APR of 5.20% compounded 365 times per year. Enter a percentage.",
      "answer": 5.337184107191573,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "EAR = (1+APR/m)^m−1 = 5.3372%.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n16",
      "module": "tvm",
      "concept": "annuities",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An ordinary annuity pays $1,000 at the end of each year for 5 years. If r=8.0%, what is its present value?",
      "answer": 3992.7100370780886,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = PMT[1−(1+r)^−n]/r = 3,992.71.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n17",
      "module": "tvm",
      "concept": "annuities",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An ordinary annuity pays $2,500 at the end of each year for 8 years. If r=6.0%, what is its present value?",
      "answer": 15524.484527423898,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = PMT[1−(1+r)^−n]/r = 15,524.48.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n18",
      "module": "tvm",
      "concept": "annuities",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You deposit $500 at the end of each year for 10 years at 5.0%. What is the future value immediately after the final deposit?",
      "answer": 6288.9462677744195,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "FV = PMT[(1+r)^n−1]/r = 6,288.95.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n19",
      "module": "tvm",
      "concept": "annuities",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You deposit $1,200 at the end of each year for 6 years at 7.0%. What is the future value immediately after the final deposit?",
      "answer": 8583.948888840008,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "FV = PMT[(1+r)^n−1]/r = 8,583.95.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n20",
      "module": "tvm",
      "concept": "annuities",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An ordinary annuity pays $3,000 at the end of each year for 4 years. If r=4.0%, what is its present value?",
      "answer": 10889.68567277057,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV = PMT[1−(1+r)^−n]/r = 10,889.69.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n21",
      "module": "tvm",
      "concept": "loans",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A loan of 100,000 is repaid with equal annual payments for 30 years at 8.0% per year. What is the annual payment?",
      "answer": 8882.743338727227,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "PMT = PV·r/[1−(1+r)^−n] = 8,882.74.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n22",
      "module": "tvm",
      "concept": "loans",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A loan of 500,000 is repaid with equal annual payments for 15 years at 9.0% per year. What is the annual payment?",
      "answer": 62029.44132515502,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "PMT = PV·r/[1−(1+r)^−n] = 62,029.44.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n23",
      "module": "tvm",
      "concept": "loans",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A loan of 3,000,000,000 is repaid with equal annual payments for 20 years at 15.0% per year. What is the annual payment?",
      "answer": 479284411.21723163,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "PMT = PV·r/[1−(1+r)^−n] = 479,284,411.22.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n24",
      "module": "tvm",
      "concept": "loans",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A loan of 10,000,000,000 is repaid with equal annual payments for 20 years at 8.0% per year. What is the annual payment?",
      "answer": 1018522088.2315058,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "PMT = PV·r/[1−(1+r)^−n] = 1,018,522,088.23.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n25",
      "module": "tvm",
      "concept": "loans",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A loan of 250,000 is repaid with equal annual payments for 10 years at 7.0% per year. What is the annual payment?",
      "answer": 35594.37568184116,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "PMT = PV·r/[1−(1+r)^−n] = 35,594.38.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n26",
      "module": "tvm",
      "concept": "npv",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A project costs $5,000 today and pays $2,000, $2,200, $2,500 at the ends of years 1 through 3. At 10.0%, what is NPV?",
      "answer": 514.6506386175797,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "NPV = Σ CFt/(1+r)^t − initial cost = 514.65.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n27",
      "module": "tvm",
      "concept": "npv",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A project costs $10,000 today and pays $4,000, $4,000, $4,000 at the ends of years 1 through 3. At 8.0%, what is NPV?",
      "answer": 308.38794899151435,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "NPV = Σ CFt/(1+r)^t − initial cost = 308.39.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n28",
      "module": "tvm",
      "concept": "npv",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A project costs $25,000 today and pays $9,000, $10,000, $11,000 at the ends of years 1 through 3. At 12.0%, what is NPV?",
      "answer": -1162.7642128279913,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "NPV = Σ CFt/(1+r)^t − initial cost = -1,162.76.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n29",
      "module": "tvm",
      "concept": "npv",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A project costs $8,000 today and pays $3,000, $3,500, $4,000 at the ends of years 1 through 3. At 9.0%, what is NPV?",
      "answer": 786.9074746588667,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "NPV = Σ CFt/(1+r)^t − initial cost = 786.91.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_tvm_n30",
      "module": "tvm",
      "concept": "npv",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A project costs $12,000 today and pays $5,000, $5,000, $5,000 at the ends of years 1 through 3. At 7.0%, what is NPV?",
      "answer": 1121.5802220819987,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "NPV = Σ CFt/(1+r)^t − initial cost = 1,121.58.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_c01",
      "module": "personal",
      "concept": "mortgage-arm",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "When an ARM resets after one year, the new payment should be based on:",
      "options": [
        "Original principal and original maturity",
        "Remaining balance, new rate, remaining maturity",
        "Original principal and new rate only",
        "Remaining balance and original full maturity"
      ],
      "answer": 1,
      "explanation": "Recalculate using the remaining loan balance, reset rate, and remaining term.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_c02",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A borrower repays a mortgage immediately after the 60th payment. The payoff is best measured as:",
      "options": [
        "PV at month 60 of payments 61 onward",
        "Original principal",
        "Sum of all remaining payments without discounting",
        "Payment 60 only"
      ],
      "answer": 0,
      "explanation": "The payoff immediately after payment 60 is the present value of remaining payments at that date.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_c03",
      "module": "personal",
      "concept": "financing-rebate",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "To compare a low-rate financing offer with a cash rebate, you should primarily compare:",
      "options": [
        "Present values of the alternatives",
        "Advertised APR only",
        "Monthly payments only",
        "Sticker prices only"
      ],
      "answer": 0,
      "explanation": "The alternatives must be valued on a common-date basis.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_c04",
      "module": "personal",
      "concept": "interest-only-personal",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "For an interest-only loan, the periodic payment before maturity usually consists of:",
      "options": [
        "Interest only",
        "Principal only",
        "Equal principal plus interest",
        "No cash flow"
      ],
      "answer": 0,
      "explanation": "Periodic payments cover interest; principal is due at maturity.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_c05",
      "module": "personal",
      "concept": "retirement-annuity",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A retirement annuity starting one period from now is valued as:",
      "options": [
        "Ordinary annuity",
        "Annuity due",
        "Perpetuity always",
        "Zero-coupon bond"
      ],
      "answer": 0,
      "explanation": "First payment one period from now implies an ordinary annuity.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_c06",
      "module": "personal",
      "concept": "retirement-annuity",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A retirement annuity with first payment today is valued as:",
      "options": [
        "Annuity due",
        "Ordinary annuity",
        "Perpetuity always",
        "Zero-coupon bond"
      ],
      "answer": 0,
      "explanation": "First payment today implies annuity due.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_c07",
      "module": "personal",
      "concept": "credit-card-mechanics",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "If no new purchases are made, a credit-card balance grows when:",
      "options": [
        "Interest charged exceeds payment",
        "Payment exceeds interest",
        "APR is zero",
        "Balance is zero"
      ],
      "answer": 0,
      "explanation": "If the payment is smaller than interest plus fees, the balance can rise.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_c08",
      "module": "personal",
      "concept": "loan-consolidation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "When converting an EAR to a monthly rate, the correct relationship is:",
      "options": [
        "(1+rm)^12=1+EAR",
        "rm=EAR/12 exactly in all cases",
        "rm=APR×12",
        "rm=EAR"
      ],
      "answer": 0,
      "explanation": "Effective rates convert through compounding equivalence.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_c09",
      "module": "personal",
      "concept": "growing-savings",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A growing savings plan differs from a level annuity because:",
      "options": [
        "Deposits change over time",
        "There is only one cash flow",
        "The discount rate is always zero",
        "It has no timing"
      ],
      "answer": 0,
      "explanation": "Deposits grow rather than remain equal.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_c10",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A loan payoff quoted immediately before a scheduled payment generally includes:",
      "options": [
        "That imminent scheduled payment plus value of later payments",
        "Only later payments after skipping the imminent payment",
        "Original principal only",
        "No interest component"
      ],
      "answer": 0,
      "explanation": "Timing relative to the scheduled payment matters.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_personal_n01",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A mortgage of 100,000 has an APR of 8.25% with monthly payments over 30 years. What is the monthly payment?",
      "answer": 751.2666040509247,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Monthly rate=0.006875; n=360; PMT = 751.27.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n02",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A mortgage of 300,000 has an APR of 7.00% with monthly payments over 25 years. What is the monthly payment?",
      "answer": 2120.337591825272,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Monthly rate=0.005833; n=300; PMT = 2,120.34.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n03",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A mortgage of 2,000,000,000 has an APR of 9.00% with monthly payments over 20 years. What is the monthly payment?",
      "answer": 17994519.117003407,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Monthly rate=0.007500; n=240; PMT = 17,994,519.12.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n04",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A mortgage of 500,000 has an APR of 6.50% with monthly payments over 15 years. What is the monthly payment?",
      "answer": 4355.5368264868275,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Monthly rate=0.005417; n=180; PMT = 4,355.54.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n05",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A mortgage of 150,000 has an APR of 7.50% with monthly payments over 30 years. What is the monthly payment?",
      "answer": 1048.8217628291648,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Monthly rate=0.006250; n=360; PMT = 1,048.82.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n06",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A 30-year mortgage of 100,000 at 8.25% APR has monthly payments. What is the remaining balance immediately after payment 24?",
      "answer": 98342.27772868313,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "First compute PMT=751.27. Then remaining balance = PV of 336 remaining payments = 98,342.28.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n07",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A 25-year mortgage of 300,000 at 7.00% APR has monthly payments. What is the remaining balance immediately after payment 60?",
      "answer": 273486.45721185434,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "First compute PMT=2,120.34. Then remaining balance = PV of 240 remaining payments = 273,486.46.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n08",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A 15-year mortgage of 500,000 at 6.50% APR has monthly payments. What is the remaining balance immediately after payment 36?",
      "answer": 434718.55005994625,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "First compute PMT=4,355.54. Then remaining balance = PV of 144 remaining payments = 434,718.55.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n09",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A 30-year mortgage of 150,000 at 7.50% APR has monthly payments. What is the remaining balance immediately after payment 120?",
      "answer": 130192.48067439414,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "First compute PMT=1,048.82. Then remaining balance = PV of 240 remaining payments = 130,192.48.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n10",
      "module": "personal",
      "concept": "mortgage-payoff",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A 20-year mortgage of 2,000,000,000 at 9.00% APR has monthly payments. What is the remaining balance immediately after payment 48?",
      "answer": 1827753130.9619823,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "First compute PMT=17,994,519.12. Then remaining balance = PV of 192 remaining payments = 1,827,753,130.96.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n11",
      "module": "personal",
      "concept": "interest-only-personal",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An interest-only loan has principal 200,000 and annual rate 9.0%. What is the annual interest payment before maturity?",
      "answer": 18000.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Interest-only payment = principal × rate = 18,000.00.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n12",
      "module": "personal",
      "concept": "interest-only-personal",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An interest-only loan has principal 500,000 and annual rate 7.5%. What is the annual interest payment before maturity?",
      "answer": 37500.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Interest-only payment = principal × rate = 37,500.00.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n13",
      "module": "personal",
      "concept": "retirement-annuity",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You need $30,000 at the end of each year for 20 years in retirement. If the retirement discount rate is 6.0%, how much is needed at retirement?",
      "answer": 344097.6365569579,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV of ordinary annuity = 344,097.64.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n14",
      "module": "personal",
      "concept": "retirement-annuity",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You need $50,000 at the end of each year for 15 years in retirement. If the retirement discount rate is 7.0%, how much is needed at retirement?",
      "answer": 455395.7002554575,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "PV of ordinary annuity = 455,395.70.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_personal_n15",
      "module": "personal",
      "concept": "loan-consolidation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "What effective monthly rate corresponds to an 8% EAR? Enter a percentage.",
      "answer": 0.643403011000343,
      "tolerance": 0.003,
      "unit": "%",
      "explanation": "rm=(1.08)^(1/12)−1=0.6434%.",
      "source": "2023 Time Value of Money.pdf + LTTC_Time value and money_HKT.pdf · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_markets_c01",
      "module": "markets",
      "concept": "market-role",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Financial markets improve economic efficiency mainly by:",
      "options": [
        "Channeling funds toward productive uses",
        "Eliminating all borrowing",
        "Fixing all prices by law",
        "Preventing saving"
      ],
      "answer": 0,
      "explanation": "Markets channel funds from surplus units to users with productive opportunities.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c02",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A newly issued corporate bond is sold in the:",
      "options": [
        "Primary market",
        "Secondary market",
        "Only OTC secondary market",
        "Foreign exchange market"
      ],
      "answer": 0,
      "explanation": "New securities are sold in primary markets.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c03",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An investor sells existing shares to another investor. This occurs in the:",
      "options": [
        "Secondary market",
        "Primary market",
        "Money creation market",
        "Insurance market"
      ],
      "answer": 0,
      "explanation": "Existing securities trade in secondary markets.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c04",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which statement about secondary markets is correct?",
      "options": [
        "They provide liquidity and price discovery",
        "Issuers receive proceeds from every secondary trade",
        "They only trade government bonds",
        "They eliminate primary markets"
      ],
      "answer": 0,
      "explanation": "Secondary markets support liquidity and market pricing even though issuers do not receive trade proceeds.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c05",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A 90-day Treasury bill belongs to the:",
      "options": [
        "Money market",
        "Capital market",
        "Equity market only",
        "Real asset market"
      ],
      "answer": 0,
      "explanation": "Short-term debt instruments trade in money markets.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c06",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Common stock belongs to the:",
      "options": [
        "Capital market",
        "Money market",
        "Interbank overnight market",
        "Repo market"
      ],
      "answer": 0,
      "explanation": "Equity is a long-term claim and belongs to capital markets.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c07",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A dealer market is characterized by:",
      "options": [
        "Dealers standing ready to buy and sell",
        "Only face-to-face auctions",
        "No bid-ask spread",
        "No intermediaries"
      ],
      "answer": 0,
      "explanation": "Dealers quote bid and ask prices and trade from inventory.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c08",
      "module": "markets",
      "concept": "market-structure",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An exchange differs from OTC mainly because an exchange:",
      "options": [
        "Provides a centralized organized trading venue",
        "Never uses brokers",
        "Only trades debt",
        "Has no regulation"
      ],
      "answer": 0,
      "explanation": "Exchanges centralize trading; OTC markets are decentralized dealer networks.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c09",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Financial intermediaries are important partly because they can:",
      "options": [
        "Reduce transaction costs and information problems",
        "Eliminate all credit risk",
        "Guarantee all investments",
        "Set government taxes"
      ],
      "answer": 0,
      "explanation": "Economies of scale, expertise, screening, and monitoring support intermediation.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c10",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Economies of scale help intermediaries by:",
      "options": [
        "Reducing transaction cost per transaction",
        "Increasing cost per transaction",
        "Eliminating information",
        "Making assets illiquid"
      ],
      "answer": 0,
      "explanation": "Large-scale operations spread fixed costs over many transactions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c11",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Adverse selection occurs primarily:",
      "options": [
        "Before a transaction",
        "After a transaction",
        "Only after default",
        "Only in equity markets"
      ],
      "answer": 0,
      "explanation": "Adverse selection is a pre-contract information problem.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c12",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Moral hazard occurs primarily:",
      "options": [
        "After a transaction",
        "Before a transaction",
        "Only before screening",
        "Only in primary markets"
      ],
      "answer": 0,
      "explanation": "Moral hazard concerns actions after financing is obtained.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c13",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Collateral can reduce adverse selection because it:",
      "options": [
        "Protects the lender if repayment fails",
        "Guarantees the borrower a profit",
        "Eliminates interest",
        "Raises information asymmetry"
      ],
      "answer": 0,
      "explanation": "Collateral reduces loss severity and improves borrower incentives.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c14",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Restrictive covenants are mainly designed to:",
      "options": [
        "Limit borrower behavior that can increase lender risk",
        "Set stock prices",
        "Eliminate taxes",
        "Create money"
      ],
      "answer": 0,
      "explanation": "Covenants restrict actions that could increase moral hazard.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c15",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Why may banks have an advantage over dispersed bondholders in monitoring borrowers?",
      "options": [
        "Private loans reduce the free-rider problem",
        "Banks never face costs",
        "Bondholders know everything",
        "Banks cannot make loans"
      ],
      "answer": 0,
      "explanation": "Private lending lets the intermediary capture benefits of monitoring.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c16",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which institution primarily pools funds from many investors into diversified portfolios?",
      "options": [
        "Mutual fund",
        "Central bank",
        "Tax authority",
        "Manufacturing firm"
      ],
      "answer": 0,
      "explanation": "Mutual funds pool investor resources and diversify holdings.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c17",
      "module": "markets",
      "concept": "insurance-pensions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Insurance companies primarily help transfer:",
      "options": [
        "Risk",
        "Money supply only",
        "Taxes",
        "Equity ownership"
      ],
      "answer": 0,
      "explanation": "Insurance contracts transfer specified risks for premiums.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c18",
      "module": "markets",
      "concept": "insurance-pensions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Pension funds primarily accumulate assets to finance:",
      "options": [
        "Retirement benefits",
        "Current tax bills only",
        "Inventory purchases",
        "Foreign exchange intervention"
      ],
      "answer": 0,
      "explanation": "Pension funds invest contributions to meet future retirement obligations.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c19",
      "module": "markets",
      "concept": "finance-companies-securities",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An investment bank is most directly associated with:",
      "options": [
        "Helping issuers sell new securities",
        "Accepting retail checking deposits as its only function",
        "Setting central-bank policy",
        "Providing property insurance only"
      ],
      "answer": 0,
      "explanation": "Investment banks assist with underwriting and issuance.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c20",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which instrument is NOT a money-market instrument?",
      "options": [
        "18-year Treasury bond",
        "Treasury bill",
        "Commercial paper",
        "Negotiable CD"
      ],
      "answer": 0,
      "explanation": "Long-term Treasury bonds are capital-market instruments.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c21",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Commercial paper is best described as:",
      "options": [
        "Short-term unsecured debt of large firms",
        "Equity of small firms",
        "Long-term government debt",
        "A mortgage"
      ],
      "answer": 0,
      "explanation": "Commercial paper is short-term corporate debt issued by strong borrowers.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c22",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A negotiable certificate of deposit is:",
      "options": [
        "A bank-issued time-deposit instrument that can trade",
        "Common stock",
        "A government tax receipt",
        "A perpetual bond"
      ],
      "answer": 0,
      "explanation": "Negotiable CDs are bank debt instruments and may trade in secondary markets.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c23",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A repo is economically closest to:",
      "options": [
        "A short-term collateralized loan",
        "An equity issuance",
        "A perpetual annuity",
        "A dividend payment"
      ],
      "answer": 0,
      "explanation": "Repo transactions function as short-term secured borrowing.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c24",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Federal funds are primarily:",
      "options": [
        "Overnight loans between banks",
        "Loans from the federal government to households",
        "Corporate bonds",
        "Municipal securities"
      ],
      "answer": 0,
      "explanation": "Federal funds are interbank reserve loans.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c25",
      "module": "markets",
      "concept": "money-capital-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A banker’s acceptance is strengthened by:",
      "options": [
        "A bank guarantee",
        "A stock split",
        "A tax refund",
        "A coupon reset"
      ],
      "answer": 0,
      "explanation": "Bank acceptance increases credibility of the payment obligation.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c26",
      "module": "markets",
      "concept": "market-quality-regulation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A well-run financial market should have:",
      "options": [
        "Liquidity, low transaction costs, and reliable information",
        "Zero trading",
        "No disclosure",
        "Only one investor"
      ],
      "answer": 0,
      "explanation": "Good markets facilitate trading, information, and low-cost transactions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c27",
      "module": "markets",
      "concept": "market-quality-regulation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Disclosure regulation primarily addresses:",
      "options": [
        "Information asymmetry",
        "Compounding frequency",
        "Coupon dates",
        "Currency denominations"
      ],
      "answer": 0,
      "explanation": "Disclosure improves information available to investors.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c28",
      "module": "markets",
      "concept": "market-rates",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Other things equal, a debt instrument with higher default risk should offer:",
      "options": [
        "Higher required yield",
        "Lower required yield",
        "Zero yield",
        "The same yield by definition"
      ],
      "answer": 0,
      "explanation": "Investors demand compensation for greater default risk.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c29",
      "module": "markets",
      "concept": "market-rates",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Other things equal, a more liquid debt instrument should generally have:",
      "options": [
        "Lower required yield",
        "Higher required yield",
        "No market price",
        "Infinite duration"
      ],
      "answer": 0,
      "explanation": "Liquidity is valuable, so investors accept a lower yield.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c30",
      "module": "markets",
      "concept": "international-markets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A Eurobond is best defined by:",
      "options": [
        "Being issued outside the country whose currency denominates it",
        "Being issued only in Europe",
        "Always being denominated in euros",
        "Always being government debt"
      ],
      "answer": 0,
      "explanation": "Eurobonds are issued outside the jurisdiction of the currency of denomination.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c31",
      "module": "markets",
      "concept": "fx-derivatives",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A forward contract is mainly useful for:",
      "options": [
        "Locking in a future transaction price",
        "Receiving dividends automatically",
        "Creating legal tender",
        "Measuring ROE"
      ],
      "answer": 0,
      "explanation": "Forwards can hedge future prices or exchange rates.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c32",
      "module": "markets",
      "concept": "market-role",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Why can a liquid secondary market help firms raise funds in the primary market?",
      "options": [
        "Investors value the ability to resell securities",
        "The issuer receives every secondary-market trade",
        "It eliminates risk entirely",
        "It fixes issue price forever"
      ],
      "answer": 0,
      "explanation": "Resale liquidity can make new securities more attractive.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c33",
      "module": "markets",
      "concept": "financial-institutions",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Small or less-known firms are often more reliant on banks because:",
      "options": [
        "Information and issuance costs make public markets harder to access",
        "Banks never screen them",
        "They cannot borrow",
        "Public markets are illegal"
      ],
      "answer": 0,
      "explanation": "Intermediaries can screen and monitor borrowers that face higher market-access frictions.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Compare & Contrast",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c34",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A borrower taking much greater risk after receiving a loan is an example of:",
      "options": [
        "Moral hazard",
        "Adverse selection",
        "Diversification",
        "Liquidity"
      ],
      "answer": 0,
      "explanation": "The risky action occurs after the loan is made.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_c35",
      "module": "markets",
      "concept": "asymmetric-information",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A lender being unable to distinguish safe from risky applicants before lending is an example of:",
      "options": [
        "Adverse selection",
        "Moral hazard",
        "Hedging",
        "Arbitrage"
      ],
      "answer": 0,
      "explanation": "The information problem exists before contracting.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Application / Recognition",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_markets_n01",
      "module": "markets",
      "concept": "market-rates",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An asset is bought for 95.00, pays cash income of 3.00, and is sold for 100.00. What is the holding-period return in percent?",
      "answer": 8.421052631578947,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "HPR = (income + price change)/initial price = (3.00+5.00)/95.00 = 8.42%.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_markets_n02",
      "module": "markets",
      "concept": "market-rates",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An asset is bought for 1000.00, pays cash income of 60.00, and is sold for 980.00. What is the holding-period return in percent?",
      "answer": 4.0,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "HPR = (income + price change)/initial price = (60.00+-20.00)/1000.00 = 4.00%.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_markets_n03",
      "module": "markets",
      "concept": "market-rates",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An asset is bought for 50.00, pays cash income of 1.00, and is sold for 54.00. What is the holding-period return in percent?",
      "answer": 10.0,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "HPR = (income + price change)/initial price = (1.00+4.00)/50.00 = 10.00%.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_markets_n04",
      "module": "markets",
      "concept": "market-rates",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An asset is bought for 200.00, pays cash income of 8.00, and is sold for 210.00. What is the holding-period return in percent?",
      "answer": 9.0,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "HPR = (income + price change)/initial price = (8.00+10.00)/200.00 = 9.00%.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_markets_n05",
      "module": "markets",
      "concept": "market-rates",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "An asset is bought for 102.00, pays cash income of 5.00, and is sold for 99.00. What is the holding-period return in percent?",
      "answer": 1.9607843137254901,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "HPR = (income + price change)/initial price = (5.00+-3.00)/102.00 = 1.96%.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf + Mishkin & Serletis Ch. 2 · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_c01",
      "module": "valuation",
      "concept": "bond-price-rates",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "If market yields rise, the price of an existing fixed-coupon bond generally:",
      "options": [
        "Falls",
        "Rises",
        "Does not change",
        "Becomes zero"
      ],
      "answer": 0,
      "explanation": "Bond prices and market yields move inversely.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_c02",
      "module": "valuation",
      "concept": "ytm-bond-types",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A bond with coupon rate below YTM generally sells:",
      "options": [
        "Below par",
        "Above par",
        "Exactly at par",
        "Without a price"
      ],
      "answer": 0,
      "explanation": "When required return exceeds coupon rate, price is below face value.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_c03",
      "module": "valuation",
      "concept": "ytm-bond-types",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A bond with coupon rate above YTM generally sells:",
      "options": [
        "Above par",
        "Below par",
        "Exactly at zero",
        "Only in primary markets"
      ],
      "answer": 0,
      "explanation": "High coupons relative to required return create a premium price.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_c04",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A zero-coupon bond provides return mainly through:",
      "options": [
        "Purchase at discount and redemption at face value",
        "Periodic coupon payments",
        "Dividends",
        "Insurance claims"
      ],
      "answer": 0,
      "explanation": "Pure discount bonds pay face value at maturity with no coupons.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_c05",
      "module": "valuation",
      "concept": "return-measures",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Required return is best described as:",
      "options": [
        "Minimum return investors demand for the risk",
        "Return already realized",
        "Coupon rate only",
        "Accounting ROA"
      ],
      "answer": 0,
      "explanation": "Required return is the market compensation demanded for time and risk.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_c06",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "In the Gordon growth model, value increases when:",
      "options": [
        "Expected dividend rises, all else equal",
        "Required return rises, all else equal",
        "Growth rate falls, all else equal",
        "Dividend becomes zero"
      ],
      "answer": 0,
      "explanation": "Higher expected dividends increase present value.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_c07",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "The Gordon growth model requires:",
      "options": [
        "r > g",
        "g > r",
        "r = 0",
        "D1 = 0"
      ],
      "answer": 0,
      "explanation": "A stable-growth perpetuity requires discount rate greater than growth.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_c08",
      "module": "valuation",
      "concept": "money-market-yields",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A discount security yield convention can differ from a bond-equivalent yield because:",
      "options": [
        "They use different denominators/day-count conventions",
        "They are always identical",
        "One ignores maturity",
        "One is always negative"
      ],
      "answer": 0,
      "explanation": "Money-market yield conventions differ in price base and annualization.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_c09",
      "module": "valuation",
      "concept": "bond-ratings-international",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A lower credit rating generally implies:",
      "options": [
        "Higher required yield",
        "Lower default risk",
        "Lower required yield",
        "No spread"
      ],
      "answer": 0,
      "explanation": "Lower ratings imply greater default risk and typically higher yields.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_c10",
      "module": "valuation",
      "concept": "treasury-corporate-bonds",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A corporate bond usually yields more than a comparable Treasury because of:",
      "options": [
        "Default and liquidity risk premiums",
        "Guaranteed higher liquidity",
        "No credit risk",
        "No taxes ever"
      ],
      "answer": 0,
      "explanation": "Corporate securities generally carry additional credit/liquidity risk.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_val_n01",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A bond has face value 1,000, annual coupon rate 6.00%, 10 years to maturity, and YTM 8.00%. What is its price?",
      "answer": 865.7983720211706,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Price = PV(coupons)+PV(face) = 865.80.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n02",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A bond has face value 1,000, annual coupon rate 8.00%, 8 years to maturity, and YTM 6.00%. What is its price?",
      "answer": 1124.1958762193908,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Price = PV(coupons)+PV(face) = 1,124.20.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n03",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A bond has face value 1,500, annual coupon rate 9.00%, 10 years to maturity, and YTM 8.10%. What is its price?",
      "answer": 1590.1789299837856,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Price = PV(coupons)+PV(face) = 1,590.18.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n04",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A bond has face value 1,000, annual coupon rate 6.75%, 10 years to maturity, and YTM 8.20%. What is its price?",
      "answer": 903.5754513834536,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Price = PV(coupons)+PV(face) = 903.58.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n05",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A bond has face value 2,000, annual coupon rate 5.00%, 5 years to maturity, and YTM 7.00%. What is its price?",
      "answer": 1835.9921025620959,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Price = PV(coupons)+PV(face) = 1,835.99.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n06",
      "module": "valuation",
      "concept": "bond-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A bond has face value 1,000, annual coupon rate 10.00%, 7 years to maturity, and YTM 10.00%. What is its price?",
      "answer": 999.9999999999995,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "Price = PV(coupons)+PV(face) = 1,000.00.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n07",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A zero-coupon bond pays 1,000 in 5 years. If YTM is 7.00%, what is its price?",
      "answer": 712.9861794836683,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "P=F/(1+y)^n = 712.99.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n08",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A zero-coupon bond pays 10,000 in 2 years. If YTM is 5.50%, what is its price?",
      "answer": 8984.524157139329,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "P=F/(1+y)^n = 8,984.52.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n09",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A zero-coupon bond pays 5,000 in 10 years. If YTM is 8.00%, what is its price?",
      "answer": 2315.9674404234206,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "P=F/(1+y)^n = 2,315.97.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n10",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A zero-coupon bond pays 1,000 in 3 years. If YTM is 4.50%, what is its price?",
      "answer": 876.2966040549094,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "P=F/(1+y)^n = 876.30.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n11",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A zero-coupon bond pays 1,000 in 5 years and sells for 800. What is its annual YTM in percent?",
      "answer": 4.563955259127317,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "y=(F/P)^(1/n)−1 = 4.5640%.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n12",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A zero-coupon bond pays 10,000 in 2 years and sells for 9,000. What is its annual YTM in percent?",
      "answer": 5.409255338945984,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "y=(F/P)^(1/n)−1 = 5.4093%.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n13",
      "module": "valuation",
      "concept": "zero-coupon-bonds",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A zero-coupon bond pays 5,000 in 8 years and sells for 3,200. What is its annual YTM in percent?",
      "answer": 5.737126344056409,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "y=(F/P)^(1/n)−1 = 5.7371%.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n14",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A stock is expected to pay D1=2.50 next year, with constant growth g=4.0% and required return r=10.0%. What is the value?",
      "answer": 41.666666666666664,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "P0=D1/(r−g)=41.67.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n15",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A stock is expected to pay D1=4.00 next year, with constant growth g=5.0% and required return r=12.0%. What is the value?",
      "answer": 57.142857142857146,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "P0=D1/(r−g)=57.14.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n16",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A stock is expected to pay D1=1.80 next year, with constant growth g=3.0% and required return r=9.0%. What is the value?",
      "answer": 30.000000000000004,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "P0=D1/(r−g)=30.00.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n17",
      "module": "valuation",
      "concept": "equity-valuation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A stock is expected to pay D1=5.00 next year, with constant growth g=6.0% and required return r=11.0%. What is the value?",
      "answer": 100.0,
      "tolerance": 0.02,
      "unit": "$",
      "explanation": "P0=D1/(r−g)=100.00.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n18",
      "module": "valuation",
      "concept": "return-measures",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You buy a stock for 40.00, receive dividend 1.00, and sell for 44.00 one year later. What is the realized return in percent?",
      "answer": 12.5,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "Return=(D1+P1−P0)/P0=12.50%.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n19",
      "module": "valuation",
      "concept": "return-measures",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You buy a stock for 25.00, receive dividend 0.50, and sell for 26.00 one year later. What is the realized return in percent?",
      "answer": 6.0,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "Return=(D1+P1−P0)/P0=6.00%.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_val_n20",
      "module": "valuation",
      "concept": "return-measures",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "You buy a stock for 100.00, receive dividend 2.00, and sell for 108.00 one year later. What is the realized return in percent?",
      "answer": 10.0,
      "tolerance": 0.03,
      "unit": "%",
      "explanation": "Return=(D1+P1−P0)/P0=10.00%.",
      "source": "2023 Valuation of securities.pdf + past-exam patterns · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_c01",
      "module": "risk",
      "concept": "defining-risk",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "In finance, risk is most closely associated with:",
      "options": [
        "Uncertainty about future outcomes",
        "Guaranteed loss",
        "Only negative returns",
        "Accounting errors"
      ],
      "answer": 0,
      "explanation": "Risk concerns dispersion/uncertainty of possible outcomes.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_c02",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Expected value is:",
      "options": [
        "Probability-weighted average outcome",
        "Worst possible outcome",
        "Best possible outcome",
        "Median only"
      ],
      "answer": 0,
      "explanation": "Expected value weights outcomes by probabilities.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_c03",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Standard deviation measures:",
      "options": [
        "Dispersion around expected value",
        "Expected return only",
        "Liquidity only",
        "Leverage only"
      ],
      "answer": 0,
      "explanation": "Standard deviation is a common measure of payoff/return dispersion.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_c04",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Diversification benefit is greatest when asset returns are:",
      "options": [
        "Less positively correlated",
        "Perfectly positively correlated",
        "Identical",
        "Guaranteed equal"
      ],
      "answer": 0,
      "explanation": "Lower correlation reduces portfolio variance, all else equal.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_c05",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "If two assets are perfectly positively correlated, diversification generally:",
      "options": [
        "Provides little or no risk reduction from correlation",
        "Eliminates all risk",
        "Creates negative variance",
        "Guarantees higher return"
      ],
      "answer": 0,
      "explanation": "With correlation +1, co-movement limits diversification benefit.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_c06",
      "module": "risk",
      "concept": "systematic-idiosyncratic",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Firm-specific product failure is primarily:",
      "options": [
        "Idiosyncratic risk",
        "Systematic risk",
        "Risk-free return",
        "Inflation index"
      ],
      "answer": 0,
      "explanation": "Firm-specific shocks are idiosyncratic and diversifiable.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_c07",
      "module": "risk",
      "concept": "systematic-idiosyncratic",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A broad recession is primarily:",
      "options": [
        "Systematic risk",
        "Idiosyncratic risk",
        "No risk",
        "Only accounting risk"
      ],
      "answer": 0,
      "explanation": "Economy-wide shocks affect many assets and are systematic.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_c08",
      "module": "risk",
      "concept": "risk-aversion-premium",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A risk-averse investor generally requires:",
      "options": [
        "A positive risk premium to bear more risk",
        "Zero compensation for risk",
        "Lower expected return for higher risk always",
        "No diversification"
      ],
      "answer": 0,
      "explanation": "Risk aversion implies compensation is required for bearing risk.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_c09",
      "module": "risk",
      "concept": "leverage-risk",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Higher financial leverage generally:",
      "options": [
        "Raises equity risk and default risk",
        "Eliminates default risk",
        "Guarantees profits",
        "Reduces return volatility to zero"
      ],
      "answer": 0,
      "explanation": "Debt magnifies sensitivity of equity outcomes and fixed obligations raise default risk.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_c10",
      "module": "risk",
      "concept": "hedging-diversification",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Hedging differs from diversification because hedging:",
      "options": [
        "Uses an offsetting position against a particular exposure",
        "Always increases exposure",
        "Requires only cash holdings",
        "Cannot use derivatives"
      ],
      "answer": 0,
      "explanation": "Hedging targets an exposure with an offsetting position; diversification spreads risk.",
      "source": "2023 Understanding risk.pdf + Tutorial - Return and Risk.docx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_risk_n01",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [0, 1000] with probabilities [0.25, 0.75]. What is the expected value?",
      "answer": 750.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "E(X)=Σpᵢxᵢ=750.0000.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n02",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [0, 1000] with probabilities [0.25, 0.75]. What is the standard deviation?",
      "answer": 433.0127018922193,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "σ = √Σpᵢ(xᵢ−E[X])² = 433.0127.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n03",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [100, 300] with probabilities [0.4, 0.6]. What is the expected value?",
      "answer": 220.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "E(X)=Σpᵢxᵢ=220.0000.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n04",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [100, 300] with probabilities [0.4, 0.6]. What is the standard deviation?",
      "answer": 97.97958971132712,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "σ = √Σpᵢ(xᵢ−E[X])² = 97.9796.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n05",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [-200, 500, 900] with probabilities [0.2, 0.5, 0.3]. What is the expected value?",
      "answer": 480.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "E(X)=Σpᵢxᵢ=480.0000.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n06",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [-200, 500, 900] with probabilities [0.2, 0.5, 0.3]. What is the standard deviation?",
      "answer": 381.57568056677826,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "σ = √Σpᵢ(xᵢ−E[X])² = 381.5757.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n07",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [5, 10, 20] with probabilities [0.2, 0.5, 0.3]. What is the expected value?",
      "answer": 12.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "E(X)=Σpᵢxᵢ=12.0000.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n08",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [5, 10, 20] with probabilities [0.2, 0.5, 0.3]. What is the standard deviation?",
      "answer": 5.5677643628300215,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "σ = √Σpᵢ(xᵢ−E[X])² = 5.5678.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n09",
      "module": "risk",
      "concept": "probability-expected-value",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [0, 50, 150] with probabilities [0.1, 0.6, 0.3]. What is the expected value?",
      "answer": 75.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "E(X)=Σpᵢxᵢ=75.0000.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n10",
      "module": "risk",
      "concept": "variance-standard-deviation",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Outcomes are [0, 50, 150] with probabilities [0.1, 0.6, 0.3]. What is the standard deviation?",
      "answer": 51.234753829797995,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "σ = √Σpᵢ(xᵢ−E[X])² = 51.2348.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n11",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A two-asset portfolio has wx=30%, wy=70%, σx=20%, σy=15%, and correlation ρ=-0.50. What is portfolio standard deviation in percent?",
      "answer": 9.12414379544733,
      "tolerance": 0.04,
      "unit": "%",
      "explanation": "σp²=wx²σx²+wy²σy²+2wxwyρσxσy; σp=9.1241%.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n12",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A two-asset portfolio has wx=50%, wy=50%, σx=18%, σy=12%, and correlation ρ=0.20. What is portfolio standard deviation in percent?",
      "answer": 11.772850122209148,
      "tolerance": 0.04,
      "unit": "%",
      "explanation": "σp²=wx²σx²+wy²σy²+2wxwyρσxσy; σp=11.7729%.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n13",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A two-asset portfolio has wx=60%, wy=40%, σx=25%, σy=10%, and correlation ρ=0.00. What is portfolio standard deviation in percent?",
      "answer": 15.524174696260024,
      "tolerance": 0.04,
      "unit": "%",
      "explanation": "σp²=wx²σx²+wy²σy²+2wxwyρσxσy; σp=15.5242%.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n14",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A two-asset portfolio has wx=40%, wy=60%, σx=20%, σy=20%, and correlation ρ=1.00. What is portfolio standard deviation in percent?",
      "answer": 20.0,
      "tolerance": 0.04,
      "unit": "%",
      "explanation": "σp²=wx²σx²+wy²σy²+2wxwyρσxσy; σp=20.0000%.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_risk_n15",
      "module": "risk",
      "concept": "portfolio-risk-two-assets",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A two-asset portfolio has wx=70%, wy=30%, σx=15%, σy=25%, and correlation ρ=-0.30. What is portfolio standard deviation in percent?",
      "answer": 10.920164833920778,
      "tolerance": 0.04,
      "unit": "%",
      "explanation": "σp²=wx²σx²+wy²σy²+2wxwyρσxσy; σp=10.9202%.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_c01",
      "module": "health",
      "concept": "financial-statements-overview",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Which statement reports assets, liabilities, and equity at a point in time?",
      "options": [
        "Balance sheet",
        "Income statement",
        "Cash flow statement",
        "Retained earnings statement only"
      ],
      "answer": 0,
      "explanation": "The balance sheet is a point-in-time statement of financial position.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_health_c02",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Net working capital equals:",
      "options": [
        "Current assets − current liabilities",
        "Total assets − total debt",
        "Sales − expenses",
        "Cash − equity"
      ],
      "answer": 0,
      "explanation": "NWC measures short-term net operating liquidity.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_health_c03",
      "module": "health",
      "concept": "book-vs-market",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Book value is primarily based on:",
      "options": [
        "Accounting records",
        "Current market trading price only",
        "Future stock price only",
        "Investor sentiment only"
      ],
      "answer": 0,
      "explanation": "Book values come from accounting measurement, whereas market values come from market pricing.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_health_c04",
      "module": "health",
      "concept": "cash-flow-fcf",
      "type": "mcq",
      "difficulty": "Foundation",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Free cash flow is intended to measure cash available after:",
      "options": [
        "Operating needs and necessary investment expenditures",
        "Ignoring investment completely",
        "Paying only dividends",
        "Issuing equity"
      ],
      "answer": 0,
      "explanation": "FCF reflects cash generated after operating and investment needs, per course definitions.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_health_c05",
      "module": "health",
      "concept": "liquidity-ratios",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A current ratio below 1 means:",
      "options": [
        "Current liabilities exceed current assets",
        "Current assets exceed current liabilities",
        "No debt exists",
        "ROE is negative"
      ],
      "answer": 0,
      "explanation": "Current ratio = current assets/current liabilities.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_health_c06",
      "module": "health",
      "concept": "leverage-coverage-ratios",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Debt-to-equity ratio measures primarily:",
      "options": [
        "Financial leverage",
        "Profit margin",
        "Inventory efficiency",
        "Liquidity"
      ],
      "answer": 0,
      "explanation": "Debt relative to equity is a leverage measure.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_health_c07",
      "module": "health",
      "concept": "profitability-market-ratios",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Net profit margin equals:",
      "options": [
        "Net income / sales",
        "Sales / assets",
        "Assets / equity",
        "EBIT / interest"
      ],
      "answer": 0,
      "explanation": "Net profit margin measures profit earned per unit of sales.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_health_c08",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "mcq",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "The three-step DuPont identity expresses ROE as:",
      "options": [
        "Net profit margin × asset turnover × equity multiplier",
        "Current ratio × quick ratio",
        "Debt ratio × interest coverage",
        "Sales × cash"
      ],
      "answer": 0,
      "explanation": "DuPont decomposes ROE into margin, efficiency, and leverage.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Concept Understanding",
      "examPriority": "Frequent",
      "mistakeType": "Concept confusion",
      "examTip": "Identify the tested relationship before looking at the answer choices."
    },
    {
      "id": "v06_health_n01",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Current assets are 500 and current liabilities are 300. What is net working capital?",
      "answer": 200.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "NWC=CA−CL=200.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n02",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Current assets are 1200 and current liabilities are 800. What is net working capital?",
      "answer": 400.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "NWC=CA−CL=400.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n03",
      "module": "health",
      "concept": "balance-sheet-nwc",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Current assets are 750 and current liabilities are 900. What is net working capital?",
      "answer": -150.0,
      "tolerance": 0.02,
      "unit": "",
      "explanation": "NWC=CA−CL=-150.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n04",
      "module": "health",
      "concept": "liquidity-ratios",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute Current ratio: numerator=800, denominator=400. Enter the ratio as a decimal.",
      "answer": 2.0,
      "tolerance": 0.003,
      "unit": "",
      "explanation": "Current ratio = current assets/current liabilities. Result=2.0000.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n05",
      "module": "health",
      "concept": "liquidity-ratios",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute Quick ratio: numerator=600, denominator=450. Enter the ratio as a decimal.",
      "answer": 1.3333333333333333,
      "tolerance": 0.003,
      "unit": "",
      "explanation": "Quick ratio = (current assets−inventory)/current liabilities. Result=1.3333.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n06",
      "module": "health",
      "concept": "leverage-coverage-ratios",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute Debt-to-equity: numerator=600, denominator=400. Enter the ratio as a decimal.",
      "answer": 1.5,
      "tolerance": 0.003,
      "unit": "",
      "explanation": "Debt-to-equity = total debt/equity. Result=1.5000.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n07",
      "module": "health",
      "concept": "profitability-market-ratios",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute Net profit margin: numerator=120, denominator=1000. Enter the ratio as a decimal.",
      "answer": 0.12,
      "tolerance": 0.003,
      "unit": "",
      "explanation": "Net profit margin = net income/sales. Result=0.1200.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n08",
      "module": "health",
      "concept": "asset-management-ratios",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "Compute Asset turnover: numerator=1500, denominator=750. Enter the ratio as a decimal.",
      "answer": 2.0,
      "tolerance": 0.003,
      "unit": "",
      "explanation": "Asset turnover = sales/total assets. Result=2.0000.",
      "source": "2023 Analyzing Firm Performance.pdf + Financial ratios excersise.xlsx · source-aligned generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n09",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A firm has ROE=22.00% and ROA=7.90%. What is the equity multiplier?",
      "answer": 2.7848101265822787,
      "tolerance": 0.004,
      "unit": "",
      "explanation": "Equity multiplier=ROE/ROA=2.7848.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n10",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A firm has ROE=19.80% and ROA=8.10%. What is the equity multiplier?",
      "answer": 2.4444444444444446,
      "tolerance": 0.004,
      "unit": "",
      "explanation": "Equity multiplier=ROE/ROA=2.4444.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n11",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A firm has ROE=25.00% and ROA=15.93%. What is the equity multiplier?",
      "answer": 1.569365976145637,
      "tolerance": 0.004,
      "unit": "",
      "explanation": "Equity multiplier=ROE/ROA=1.5694.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    },
    {
      "id": "v06_health_n12",
      "module": "health",
      "concept": "dupont-analysis",
      "type": "numeric",
      "difficulty": "Standard",
      "origin": "Generated Practice — Exam-Style Variant",
      "prompt": "A firm has ROE=13.81% and ROA=6.94%. What is the equity multiplier?",
      "answer": 1.9899135446685878,
      "tolerance": 0.004,
      "unit": "",
      "explanation": "Equity multiplier=ROE/ROA=1.9899.",
      "source": "5 bộ đề năm trước LTTC.pdf · recurring exam pattern; generated variant",
      "skill": "Numerical Calculation",
      "examPriority": "Frequent",
      "mistakeType": "Calculation / setup error",
      "examTip": "Write the timeline/formula first, then substitute values with consistent periods and rates."
    }
  ],
  "flashcards": [
    {
      "id": "f1",
      "module": "intro",
      "front": "Finance",
      "vi": "Tài chính",
      "back": "The study of how people allocate scarce resources over time.",
      "source": "2024 Introduction to Finance.pdf · Slide 12"
    },
    {
      "id": "f2",
      "module": "intro",
      "front": "Four household financial decisions",
      "vi": "Bốn nhóm quyết định tài chính hộ gia đình",
      "back": "Consumption and saving; investment; financing; risk management.",
      "source": "2024 Introduction to Finance.pdf · Slide 20"
    },
    {
      "id": "f3",
      "module": "intro",
      "front": "Capital budgeting vs capital structure",
      "vi": "Đầu tư dự án và cấu trúc vốn",
      "back": "Capital budgeting chooses investment projects; capital structure determines how the firm finances them.",
      "source": "2024 Introduction to Finance.pdf · Slide 21"
    },
    {
      "id": "f4",
      "module": "intro",
      "front": "Six parts of the financial system",
      "vi": "Sáu bộ phận của hệ thống tài chính",
      "back": "Money; financial instruments; financial markets; financial institutions; regulatory agencies; central banks.",
      "source": "2024 Introduction to Finance.pdf · Slides 45–46"
    },
    {
      "id": "f5",
      "module": "tvm",
      "front": "Compounding vs discounting",
      "vi": "Ghép lãi và chiết khấu",
      "back": "Compounding moves value forward in time; discounting moves future value back to the present.",
      "source": "2023 Time Value of Money.pdf · Slides 6–8"
    },
    {
      "id": "f6",
      "module": "tvm",
      "front": "Annuity",
      "vi": "Niên kim",
      "back": "A stream of N equal cash flows paid at regular intervals.",
      "source": "2023 Time Value of Money.pdf · Slide 32"
    },
    {
      "id": "f7",
      "module": "tvm",
      "front": "Perpetuity",
      "vi": "Dòng tiền vĩnh cửu",
      "back": "Equal cash flows at regular intervals that last forever.",
      "source": "2023 Time Value of Money.pdf · Slide 43"
    },
    {
      "id": "f8",
      "module": "tvm",
      "front": "Growing perpetuity",
      "vi": "Dòng tiền vĩnh cửu tăng trưởng",
      "back": "Cash flows at regular intervals that grow at constant rate forever; course formula assumes g < r.",
      "source": "2023 Time Value of Money.pdf · Slides 48–49"
    },
    {
      "id": "f9",
      "module": "tvm",
      "front": "NPV",
      "vi": "Giá trị hiện tại ròng",
      "back": "PV(cash inflows) − PV(cash outflows).",
      "source": "2023 Time Value of Money.pdf · Slide 61"
    },
    {
      "id": "f10",
      "module": "tvm",
      "front": "IRR",
      "vi": "Tỷ suất hoàn vốn nội bộ",
      "back": "The interest rate that sets NPV equal to zero.",
      "source": "2023 Time Value of Money.pdf · Slide 68"
    },
    {
      "id": "f11",
      "module": "personal",
      "front": "ARM reset payment",
      "vi": "Khoản trả ARM sau điều chỉnh",
      "back": "Recalculate using remaining principal, new interest rate, and remaining maturity.",
      "source": "Q&A 1.pdf · Question 1"
    },
    {
      "id": "f12",
      "module": "personal",
      "front": "EAR to monthly rate",
      "vi": "EAR sang lãi suất tháng",
      "back": "r_month = (1+EAR)^(1/12) − 1.",
      "source": "Q&A 3.pdf · Question d"
    },
    {
      "id": "f13",
      "module": "markets",
      "front": "Primary vs secondary market",
      "vi": "Thị trường sơ cấp và thứ cấp",
      "back": "Primary: new issues to initial buyers. Secondary: existing securities traded among investors.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 7"
    },
    {
      "id": "f14",
      "module": "markets",
      "front": "Money market",
      "vi": "Thị trường tiền tệ",
      "back": "Market for short-term, highly liquid debt securities.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 9"
    },
    {
      "id": "f15",
      "module": "markets",
      "front": "Derivative security",
      "vi": "Chứng khoán phái sinh",
      "back": "A security whose payoff is linked to another security or asset/cash flow.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 19"
    },
    {
      "id": "f16",
      "module": "markets",
      "front": "Adverse selection vs moral hazard",
      "vi": "Lựa chọn bất lợi và rủi ro đạo đức",
      "back": "Adverse selection: before transaction. Moral hazard: after transaction.",
      "source": "Asymmetric Infos.pdf"
    },
    {
      "id": "f17",
      "module": "markets",
      "front": "Mutual fund",
      "vi": "Quỹ tương hỗ",
      "back": "Pools funds from many individuals to buy a diversified portfolio of stocks and bonds.",
      "source": "2023 Understanding Financial Markets and Financial Institutions.pdf · Slide 50"
    },
    {
      "id": "f18",
      "module": "valuation",
      "front": "Required rate of return",
      "vi": "Tỷ suất sinh lời yêu cầu",
      "back": "The rate used to find fair present value; reflects security risk and is ex ante.",
      "source": "2023 Valuation of securities.pdf · Slide 3"
    },
    {
      "id": "f19",
      "module": "valuation",
      "front": "Bond cash flows",
      "vi": "Dòng tiền trái phiếu",
      "back": "Coupon payments over life plus face/par value at maturity.",
      "source": "2023 Valuation of securities.pdf · Slide 7"
    },
    {
      "id": "f20",
      "module": "valuation",
      "front": "Interest rate vs bond price",
      "vi": "Lãi suất và giá trái phiếu",
      "back": "As required interest rates rise, bond present values/prices fall.",
      "source": "2023 Valuation of securities.pdf · Slide 17"
    },
    {
      "id": "f21",
      "module": "valuation",
      "front": "Zero-growth stock value",
      "vi": "Định giá cổ tức không tăng trưởng",
      "back": "P0 = Div / r_s.",
      "source": "2023 Valuation of securities.pdf · Slide 24"
    },
    {
      "id": "f22",
      "module": "valuation",
      "front": "Gordon growth model",
      "vi": "Mô hình Gordon",
      "back": "P0 = Div1 / (r_s − g).",
      "source": "2023 Valuation of securities.pdf · Slide 25"
    },
    {
      "id": "f23",
      "module": "risk",
      "front": "Risk",
      "vi": "Rủi ro",
      "back": "Uncertainty about future payoff, assessed over a time horizon and relative to a benchmark.",
      "source": "2023 Understanding risk.pdf · Slide 3"
    },
    {
      "id": "f24",
      "module": "risk",
      "front": "Expected value",
      "vi": "Giá trị kỳ vọng",
      "back": "Sum of probability × payoff across outcomes.",
      "source": "2023 Understanding risk.pdf · Slide 7"
    },
    {
      "id": "f25",
      "module": "risk",
      "front": "Variance",
      "vi": "Phương sai",
      "back": "Probability-weighted average of squared deviations from expected value.",
      "source": "2023 Understanding risk.pdf · Slide 11"
    },
    {
      "id": "f26",
      "module": "risk",
      "front": "Leverage",
      "vi": "Đòn bẩy",
      "back": "Borrowing to finance part of an investment; increases expected return and risk in the lecture.",
      "source": "2023 Understanding risk.pdf · Slide 14"
    },
    {
      "id": "f27",
      "module": "risk",
      "front": "Idiosyncratic vs systematic risk",
      "vi": "Rủi ro đặc thù và hệ thống",
      "back": "Idiosyncratic affects a small set; systematic affects everyone/economy-wide.",
      "source": "2023 Understanding risk.pdf · Slide 17"
    },
    {
      "id": "f28",
      "module": "health",
      "front": "Net working capital",
      "vi": "Vốn lưu động ròng",
      "back": "Current assets − current liabilities.",
      "source": "2023 Financial Statements.pdf · Slide 17"
    },
    {
      "id": "f29",
      "module": "health",
      "front": "Four financial statements",
      "vi": "Bốn báo cáo tài chính",
      "back": "Balance sheet; income statement; statement of cash flows; statement of retained earnings.",
      "source": "2023 Financial Statements.pdf · Slide 14"
    },
    {
      "id": "f30",
      "module": "health",
      "front": "Current ratio",
      "vi": "Tỷ số thanh toán hiện hành",
      "back": "Current assets / current liabilities.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 6"
    },
    {
      "id": "f31",
      "module": "health",
      "front": "Inventory turnover",
      "vi": "Vòng quay hàng tồn kho",
      "back": "Cost of goods sold / average inventory.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 10"
    },
    {
      "id": "f32",
      "module": "health",
      "front": "Times interest earned",
      "vi": "Khả năng thanh toán lãi vay",
      "back": "EBIT / interest expense.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 18"
    },
    {
      "id": "f33",
      "module": "health",
      "front": "ROE",
      "vi": "Tỷ suất sinh lời trên vốn chủ sở hữu",
      "back": "Net income / equity.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 20"
    },
    {
      "id": "f34",
      "module": "health",
      "front": "DuPont ROE",
      "vi": "ROE theo DuPont",
      "back": "Net profit margin × asset turnover × equity multiplier.",
      "source": "2023 Analyzing Firm Performance.pdf · Slide 23"
    },
    {
      "id": "fc-money",
      "module": "intro",
      "front": "Money",
      "vi": "Tiền",
      "back": "Anything generally accepted as payment for goods/services or repayment of debt.",
      "source": "LTTC_Financial market_HKT.pdf"
    },
    {
      "id": "fc-double-coincidence",
      "module": "intro",
      "front": "Double coincidence of wants",
      "vi": "Sự trùng khớp kép về nhu cầu",
      "back": "In barter, each trader must want exactly what the other offers; money removes this matching requirement.",
      "source": "LTTC_Financial market_HKT.pdf"
    },
    {
      "id": "fc-counterparty",
      "module": "intro",
      "front": "Counterparty",
      "vi": "Đối tác hợp đồng",
      "back": "The person or institution on the other side of a financial contract.",
      "source": "LTTC_Financial market_HKT.pdf"
    },
    {
      "id": "fc-standardization",
      "module": "intro",
      "front": "Standardization",
      "vi": "Tiêu chuẩn hóa",
      "back": "Making financial contracts more homogeneous so they are cheaper to create, understand, compare, and trade.",
      "source": "LTTC_Financial market_HKT.pdf"
    },
    {
      "id": "fc-banker-acceptance",
      "module": "valuation",
      "front": "Banker’s acceptance",
      "vi": "Hối phiếu được ngân hàng chấp nhận/bảo lãnh",
      "back": "A payment obligation accepted by a bank, improving the claim’s credibility and marketability.",
      "source": "LTTC_Financial market_HKT.pdf"
    },
    {
      "id": "fc-repo",
      "module": "valuation",
      "front": "Repurchase agreement (repo)",
      "vi": "Hợp đồng mua lại",
      "back": "A short-term collateralized financing transaction involving sale and agreed repurchase of securities.",
      "source": "LTTC_Financial market_HKT.pdf"
    },
    {
      "id": "fc-portfolio-cov",
      "module": "risk",
      "front": "Covariance",
      "vi": "Hiệp phương sai",
      "back": "A measure of how two returns move together; in a two-asset portfolio it enters the cross term of portfolio variance.",
      "source": "Past-exam portfolio pattern + risk concepts"
    },
    {
      "id": "fc-capital-rationing",
      "module": "tvm",
      "front": "Capital rationing",
      "vi": "Giới hạn ngân sách đầu tư",
      "back": "A situation in which a firm cannot fund every positive-NPV project and must choose the feasible combination that maximizes total value.",
      "source": "5 bộ đề năm trước LTTC.pdf"
    }
  ],
  "sources": [
    {
      "id": "s-intro-2024",
      "name": "2024 Introduction to Finance.pdf",
      "type": "Official lecture slides",
      "priority": "Governing source",
      "pages": 65,
      "mapped": "Module 1",
      "note": "Latest overlapping Introduction deck; governs overlapping 2023 material."
    },
    {
      "id": "s-tvm",
      "name": "2023 Time Value of Money.pdf",
      "type": "Official lecture slides",
      "priority": "Primary",
      "pages": 81,
      "mapped": "Modules 2–3",
      "note": "Primary source for TVM, annuities, loans, perpetuities, NPV and IRR."
    },
    {
      "id": "s-qa1",
      "name": "Q&A 1.pdf",
      "type": "Instructor-commented Q&A",
      "priority": "High-priority clarification",
      "mapped": "Module 3",
      "note": "Instructor corrections and verified answers for ARM, retirement timing and financing comparisons."
    },
    {
      "id": "s-qa3",
      "name": "Q&A 3.pdf",
      "type": "Instructor-commented Q&A",
      "priority": "High-priority clarification",
      "mapped": "Modules 2–3",
      "note": "Clarifies annuity timing, EAR conversion, loan consolidation, mortgage payoff and growing savings."
    },
    {
      "id": "s-markets",
      "name": "2023 Understanding Financial Markets and Financial Institutions.pdf",
      "type": "Official lecture slides",
      "priority": "Primary",
      "pages": 55,
      "mapped": "Module 4",
      "note": "Primary lecture source for market structure and financial institutions."
    },
    {
      "id": "s-asym",
      "name": "Asymmetric Infos.pdf",
      "type": "Supplementary lecture / reading",
      "priority": "Supporting deep dive",
      "mapped": "Module 4",
      "note": "Detailed treatment of intermediation, transaction costs, adverse selection and moral hazard."
    },
    {
      "id": "s-mishkin",
      "name": "The Economics of Money, Banking, and Financial Markets — Mishkin & Serletis",
      "type": "Supporting textbook",
      "priority": "Supporting",
      "pages": 780,
      "mapped": "Module 4 and selected valuation context",
      "note": "Uploaded full textbook; Chapters 2 and 8 align strongly with the financial-markets/intermediation lecture. It does not override lecture wording. v0.5 uses it to deepen mapped Financial Markets/Institutions concepts and question design without overriding lecture wording."
    },
    {
      "id": "s-valuation",
      "name": "2023 Valuation of securities.pdf",
      "type": "Official lecture slides",
      "priority": "Primary",
      "pages": 78,
      "mapped": "Module 5",
      "note": "Primary source for returns, bond/stock valuation, money-market yields and bond markets."
    },
    {
      "id": "s-risk",
      "name": "2023 Understanding risk.pdf",
      "type": "Official lecture slides",
      "priority": "Primary",
      "pages": 23,
      "mapped": "Module 6",
      "note": "Primary source for probabilities, variance, leverage, VaR, risk classes and diversification."
    },
    {
      "id": "s-risk-tutorial",
      "name": "Tutorial - Return and Risk.docx",
      "type": "Original course practice",
      "priority": "Practice",
      "mapped": "Module 6",
      "note": "Original true/false and numerical practice. Answers are derived only where supported by lecture material."
    },
    {
      "id": "s-statements",
      "name": "2023 Financial Statements.pdf",
      "type": "Official lecture slides",
      "priority": "Primary",
      "mapped": "Module 7",
      "note": "Primary source for financial statements, NWC, book/market values, cash flow and retained earnings."
    },
    {
      "id": "s-ratios",
      "name": "2023 Analyzing Firm Performance.pdf",
      "type": "Official lecture slides",
      "priority": "Primary",
      "pages": 30,
      "mapped": "Module 7",
      "note": "Primary source for liquidity, asset management, leverage, profitability, DuPont and benchmarking."
    },
    {
      "id": "s-fin-tutorial",
      "name": "Es FOR FINANCIAL STATEMENT.docx",
      "type": "Original course practice",
      "priority": "Practice",
      "mapped": "Module 7",
      "note": "Original numerical tutorial questions. The separate “Copy of” file is treated as working notes, not an official answer key."
    },
    {
      "id": "s-fm-tutorial",
      "name": "Es FOR FM & FIs.docx",
      "type": "Original course practice",
      "priority": "Practice",
      "mapped": "Module 4",
      "note": "Original financial-markets/institutions tutorial questions. The “Copy of” version is working notes."
    },
    {
      "id": "s-ratio-xlsx",
      "name": "Financial ratios excersise.xlsx",
      "type": "Practice workbook",
      "priority": "Practice",
      "mapped": "Module 7",
      "note": "Input data plus blank output area for ratio calculations; used as an interactive lab source, not a theory source."
    },
    {
      "id": "s-tvm-xlsx",
      "name": "Copy of Time Value of Money.xlsx",
      "type": "Practice workbook",
      "priority": "Practice",
      "mapped": "Modules 2–5",
      "note": "Contains Credit Card, Loan amortisation, Loan and Deposits, Multiple IRR, NPV, Bonds, Bond valuation and Mortgage sheets."
    },
    {
      "id": "s-bodie",
      "name": "Financial Economics — Bodie, Merton & Cleeton (partial scan)",
      "type": "Supporting textbook",
      "priority": "Supporting",
      "pages": 150,
      "mapped": "Modules 1–2 and early Chapter 3/4 support",
      "note": "Partial 150-page scan only; later chapters shown in the book table of contents are not treated as available content."
    },
    {
      "id": "s-lttc-finmarket-hkt",
      "name": "LTTC_Financial market_HKT.pdf",
      "type": "Consolidated study notes",
      "priority": "Supporting",
      "pages": 25,
      "mapped": "Modules 1, 4 and 5",
      "note": "Newly uploaded structured notes covering money, financial instruments, money/capital markets, intermediary types, regulation, and money-market instruments. Treated as supporting notes and cross-checked against the official lecture and Mishkin where overlapping.",
      "preview": "assets/source-previews-v05/markets-notes-01.png"
    },
    {
      "id": "s-lttc-tvm-hkt",
      "name": "LTTC_Time value and money_HKT.pdf",
      "type": "Consolidated study notes",
      "priority": "Supporting",
      "pages": 24,
      "mapped": "Modules 2 and 3",
      "note": "Newly uploaded TVM notes with worked examples on compounding, discounting, APR/EAR, multiple cash flows, annuities, loans, NPV/IRR, and financing decisions. Used to deepen explanations, not to override instructor material.",
      "preview": "assets/source-previews-v05/tvm-notes-01.png"
    },
    {
      "id": "s-past-exams-5",
      "name": "5 bộ đề năm trước LTTC.pdf",
      "type": "Past exam archive",
      "priority": "Exam practice",
      "mapped": "Modules 1–7",
      "note": "Five prior-paper sets used to identify recurring exam formats: TVM/loan payoff, money-market yields, bond valuation/YTM, financial markets and asymmetric information, risk/portfolio calculations, and DuPont/ratio analysis. Questions in v0.5 are normalized or adapted and labeled Past Exam.",
      "preview": "assets/source-previews-v05/past-exams-01.png"
    },
    {
      "id": "s-past-final-scan",
      "name": "b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf",
      "type": "Past final exam scan",
      "priority": "Exam practice",
      "pages": 9,
      "mapped": "Modules 2, 4, 5, 6 and 7",
      "note": "Scanned prior final containing both MCQ and written problems. Used as an exam-pattern source; wording is normalized where image quality or translation is unclear.",
      "preview": "assets/source-previews-v05/final-scan-2.png"
    }
  ]
};
