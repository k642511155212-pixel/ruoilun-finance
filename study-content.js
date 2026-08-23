"use strict";

/*
  Finance Mastery — rich study layer
  ------------------------------------------------------------
  This file intentionally sits on top of data.js. It does NOT replace
  the existing key principles or question bank. It adds:
  - properly typeset formula metadata
  - deeper explanations
  - step-by-step real-world worked examples
  - explicit priority links to the supplied Hoàng Kim Thanh notes
*/

(() => {
  const D = window.FM_DATA;
  if (!D) return;

  D.formulaDetails = {
    "Future value": {
      latex: "FV = PV(1+r)^n",
      variables: [["PV","present value today"],["r","effective rate per period"],["n","number of matching periods"],["FV","value at the end of period n"]],
      useWhen: "One lump sum is moved forward through time.",
      trap: "r and n must use the same period."
    },
    "Present value": {
      latex: "PV = \\frac{FV}{(1+r)^n}",
      variables: [["FV","future cash flow"],["r","effective discount rate per period"],["n","number of periods"],["PV","equivalent value at the focal date"]],
      useWhen: "A single future cash flow is converted to today’s value.",
      trap: "A larger positive discount rate produces a lower PV."
    },
    "PV ordinary annuity": {
      latex: "PV = C\\left[\\frac{1-(1+r)^{-n}}{r}\\right]",
      variables: [["C","equal payment each period"],["r","periodic rate"],["n","number of payments"]],
      useWhen: "Equal payments occur at the END of each period.",
      trap: "If the first payment is today, this is an annuity due instead."
    },
    "FV ordinary annuity": {
      latex: "FV = C\\left[\\frac{(1+r)^n-1}{r}\\right]",
      variables: [["C","equal periodic deposit"],["r","periodic rate"],["n","number of deposits"]],
      useWhen: "Equal end-of-period deposits are accumulated to the final payment date.",
      trap: "The focal date is immediately after the last payment."
    },
    "Annuity due": {
      latex: "V_{due}=V_{ordinary}(1+r)",
      variables: [["Vdue","PV or FV of an annuity due"],["Vordinary","matching ordinary-annuity value"],["r","periodic rate"]],
      useWhen: "The same payment stream occurs one period earlier.",
      trap: "Do not multiply by (1+r) unless payment count and focal date are unchanged."
    },
    "Growing perpetuity": {
      latex: "PV = \\frac{C_1}{r-g}",
      variables: [["C₁","cash flow one period from now"],["r","required return"],["g","constant growth rate"]],
      useWhen: "Cash flows grow at constant g forever and r > g.",
      trap: "C₁ is NEXT period’s cash flow, not the cash flow just paid."
    },
    "EAR from APR": {
      latex: "EAR = \\left(1+\\frac{APR}{m}\\right)^m-1",
      variables: [["APR","nominal annual percentage rate"],["m","compounding periods per year"],["EAR","effective one-year return"]],
      useWhen: "Comparing quoted rates with different compounding frequencies.",
      trap: "Do not divide EAR by m to obtain a periodic rate."
    },
    "Loan payment": {
      latex: "PMT = PV\\left[\\frac{r}{1-(1+r)^{-n}}\\right]",
      variables: [["PV","amount borrowed"],["r","loan rate per payment period"],["n","number of payments"],["PMT","equal end-of-period payment"]],
      useWhen: "A fully amortizing loan has equal end-of-period payments.",
      trap: "For monthly loans, use monthly r and number of months."
    },
    "NPV": {
      latex: "NPV = \\sum_{t=0}^{N}\\frac{CF_t}{(1+r)^t}",
      variables: [["CFₜ","cash flow at time t"],["r","opportunity cost / required return"],["t","time index"]],
      useWhen: "Evaluating whether a project creates value at the required return.",
      trap: "Initial investment at t=0 is usually a negative cash flow and is not discounted."
    },
    "T-bill discount yield": {
      latex: "DY = \\frac{F-P}{F}\\times\\frac{360}{d}",
      variables: [["F","face value"],["P","purchase price"],["d","days to maturity"]],
      useWhen: "A T-bill or discount instrument is quoted on bank-discount basis.",
      trap: "The denominator is FACE value and the convention uses 360 days."
    },
    "Bond-equivalent yield": {
      latex: "BEY = \\frac{F-P}{P}\\times\\frac{365}{d}",
      variables: [["F−P","holding-period dollar return"],["P","amount actually invested"],["d","days to maturity"]],
      useWhen: "Converting a discount instrument to an investment-price, 365-day annualized yield.",
      trap: "BEY uses P in the denominator, unlike discount yield."
    },
    "Effective annual return": {
      latex: "EAR = \\left(\\frac{F}{P}\\right)^{365/d}-1",
      variables: [["F/P","gross holding-period growth factor"],["d","holding period in days"]],
      useWhen: "Annualizing a pure-discount holding-period return with compounding.",
      trap: "EAR is not the same as simply multiplying the holding-period return by 365/d."
    },
    "Coupon bond": {
      latex: "P = \\sum_{t=1}^{n}\\frac{C}{(1+y)^t}+\\frac{F}{(1+y)^n}",
      variables: [["C","coupon per period"],["F","face/redemption value"],["y","yield per coupon period"],["n","remaining coupon periods"]],
      useWhen: "Pricing a fixed-coupon bond from its promised cash flows.",
      trap: "Semiannual bonds require half-year coupon, half-year yield, and twice the years."
    },
    "Zero-coupon bond": {
      latex: "P = \\frac{F}{(1+y)^n}",
      variables: [["F","redemption value"],["y","yield per period"],["n","periods to maturity"]],
      useWhen: "The security pays no coupon and only one maturity cash flow.",
      trap: "Do not add coupon cash flows to a zero-coupon bond."
    },
    "Gordon growth": {
      latex: "P_0 = \\frac{D_1}{r-g}",
      variables: [["D₁","dividend expected one period from now"],["r","required return on equity"],["g","constant dividend growth"]],
      useWhen: "Dividends grow forever at a stable rate below the required return.",
      trap: "Use D₁, not D₀."
    },
    "Expected return": {
      latex: "E(R)=\\sum_{i=1}^{k}p_iR_i",
      variables: [["pᵢ","probability of state i"],["Rᵢ","return in state i"]],
      useWhen: "A discrete probability distribution of possible returns is given.",
      trap: "Probabilities must sum to 1."
    },
    "Variance": {
      latex: "\\sigma^2=\\sum_{i=1}^{k}p_i\\left[R_i-E(R)\\right]^2",
      variables: [["σ²","variance"],["E(R)","expected return"],["Rᵢ","state return"],["pᵢ","state probability"]],
      useWhen: "Measuring probability-weighted dispersion around expected return.",
      trap: "Square deviations before weighting and summing."
    },
    "Current ratio": {
      latex: "Current\\ Ratio = \\frac{Current\\ Assets}{Current\\ Liabilities}",
      variables: [["Current assets","cash and assets expected to become cash/use within the operating cycle"],["Current liabilities","short-term obligations"]],
      useWhen: "Assessing broad short-term coverage.",
      trap: "A higher ratio is not automatically better; inventory quality and operating context matter."
    },
    "Quick ratio": {
      latex: "Quick\\ Ratio = \\frac{Cash+Marketable\\ Securities+Receivables}{Current\\ Liabilities}",
      variables: [["Quick assets","most liquid current assets"],["Current liabilities","short-term obligations"]],
      useWhen: "A stricter liquidity test is needed.",
      trap: "Inventory is normally excluded."
    },
    "Inventory turnover": {
      latex: "Inventory\\ Turnover = \\frac{COGS}{Average\\ Inventory}",
      variables: [["COGS","cost of goods sold"],["Average inventory","average stock held over the period"]],
      useWhen: "Evaluating how efficiently inventory supports sales.",
      trap: "Use average inventory when beginning and ending balances are available."
    },
    "Average collection period": {
      latex: "ACP = \\frac{Average\\ Receivables}{Annual\\ Credit\\ Sales/365}",
      variables: [["Average receivables","mean receivable balance"],["Daily credit sales","annual credit sales divided by day convention"]],
      useWhen: "Estimating how many days customers take to pay.",
      trap: "Use credit sales when available rather than total sales."
    },
    "Operating margin": {
      latex: "Operating\\ Margin = \\frac{EBIT}{Sales}",
      variables: [["EBIT","earnings before interest and taxes"],["Sales","revenue"]],
      useWhen: "Measuring operating profit generated per sales dollar.",
      trap: "Do not substitute net income when the requested measure is operating margin."
    },
    "Sales-to-assets": {
      latex: "Sales\\text{-}to\\text{-}Assets = \\frac{Sales}{Average\\ Total\\ Assets}",
      variables: [["Sales","revenue"],["Average total assets","average asset base used during the year"]],
      useWhen: "Measuring asset utilization.",
      trap: "Use average assets for a period flow/stock comparison when possible."
    },
    "Debt-to-equity": {
      latex: "Debt\\text{-}to\\text{-}Equity = \\frac{Debt}{Equity}",
      variables: [["Debt","defined interest-bearing or total debt according to the course question"],["Equity","shareholders’ equity"]],
      useWhen: "Describing financial leverage.",
      trap: "State clearly what counts as debt; different texts use different definitions."
    },
    "Cash conversion cycle": {
      latex: "CCC = DIO + DSO - DPO",
      variables: [["DIO","days inventory outstanding"],["DSO","days sales outstanding"],["DPO","days payables outstanding"]],
      useWhen: "Measuring how long operating cash is tied up from supplier payment to customer collection.",
      trap: "Increasing DPO shortens CCC because payables days are subtracted."
    }
  };

  const E = D.lessonEnhancements = {
    /* ---------------- Introduction — Hoàng Kim Thanh priority ---------------- */
    "intro/what-is-finance": {
      prioritySource: "Hoàng Kim Thanh — Chapter 0: Introduction to Finance",
      moreExplanation: [
        "The Hoàng Kim Thanh notes frame finance around allocation across time: costs and benefits are spread across dates and are often uncertain. That is why cash-flow timing and risk repeatedly reappear in every later module.",
        "Finance theory is not only a collection of formulas. It is a decision framework: identify alternatives, map their cash flows, make them comparable at a common date, then evaluate uncertainty and constraints.",
        "For households, the notes distinguish consumption/saving, investment, financing and risk-management decisions. The same logic reappears at firm level as investment, financing and working-capital choices."
      ],
      examples: [
        {title:"Household decision: cash now or later",scenario:"You can receive $10,000 today or $10,500 one year from now. Your safe one-year opportunity cost is 4%.",steps:["Convert $10,500 next year to today: PV = 10,500/1.04.","PV ≈ $10,096.15, which is greater than $10,000.","Purely financially, the delayed payment is worth more today."],result:"Choose the $10,500 future payment if risk and liquidity needs are comparable.",takeaway:"A finance decision compares economically equivalent values, not raw nominal amounts."},
        {title:"Profit is not cash",scenario:"A small firm records a $50,000 credit sale today but allows the customer to pay in 90 days.",steps:["Revenue and accounting profit can increase immediately.","Cash has not yet entered the business.","If payroll is due tomorrow, the firm can still face a cash shortage despite reporting profit."],result:"Profitability and liquidity answer different questions.",takeaway:"This distinction is emphasized in the supplied Hoàng Kim Thanh notes and matters later in working-capital analysis."}
      ]
    },
    "intro/financial-decisions": {
      prioritySource: "Hoàng Kim Thanh — Chapter 0: Introduction to Finance",
      moreExplanation: [
        "At firm level, capital budgeting asks WHICH real assets or projects to accept; capital structure asks HOW those assets are financed; working-capital management handles the day-to-day timing of collections, inventory and payments.",
        "The Hoàng Kim Thanh notes also highlight the pecking-order intuition: firms often prefer internal funds, then debt, then new equity because financing choices involve information and issuance costs.",
        "Net working capital is current assets minus current liabilities. A firm can be profitable and still fail if it cannot meet cash obligations when they fall due."
      ],
      examples: [
        {title:"Coffee chain expansion",scenario:"A coffee chain is considering a VND 4 billion roasting machine and can finance it with retained earnings or a bank loan.",steps:["Investment decision: estimate incremental cash inflows/outflows and NPV of the machine.","Financing decision: compare debt cost, flexibility and leverage implications.","Working-capital decision: forecast additional inventory, receivables and supplier credit needed after expansion."],result:"Treat the three decisions separately before combining them.",takeaway:"A good financing choice cannot turn a negative-NPV asset into a value-creating investment."}
      ]
    },
    "intro/real-financial-assets": {
      prioritySource: "Hoàng Kim Thanh — Chapter 0: Introduction to Finance",
      moreExplanation: [
        "A real asset produces or supports goods and services; a financial asset reallocates claims to cash flows generated by real activity.",
        "The distinction is balance-sheet symmetric: a corporate bond is an asset to the investor and a liability to the issuer. A share is an asset to the holder and an equity claim on the corporation."
      ],
      examples: [
        {title:"Factory financed by bonds",scenario:"A manufacturer buys a VND 20 billion production line and issues bonds to finance it.",steps:["The production line is a real asset because it contributes to productive capacity.","The bond certificate is a financial asset for investors.","The same bond is a financial liability for the manufacturer."],result:"Real asset: machine. Financial claim: bond.",takeaway:"Do not classify an item by whether it is tangible alone; classify it by economic function."}
      ]
    },
    "intro/financial-system": {
      prioritySource: "Hoàng Kim Thanh — Chapter 0: Introduction to Finance; Chapter 3: Financial markets",
      moreExplanation: [
        "The financial system channels funds from surplus units to deficit units and provides mechanisms to transfer risk, information and liquidity.",
        "Direct finance uses securities markets: the borrower issues a claim directly to investors. Indirect finance inserts an intermediary that transforms denomination, maturity, liquidity or risk.",
        "Transaction and information costs explain why intermediaries remain valuable even when securities markets exist."
      ],
      examples: [
        {title:"Two ways to finance a company",scenario:"A company needs VND 100 billion for a new plant.",steps:["Direct finance: issue bonds to investors through the securities market.","Indirect finance: borrow from a commercial bank that gathers funds from depositors.","The economic funding need is the same, but information production and contracting are organized differently."],result:"Market financing and intermediary financing solve the same transfer problem through different structures.",takeaway:"This is the bridge between Introduction and Financial Markets & Institutions."}
      ]
    },

    /* ---------------- TVM — Hoàng Kim Thanh priority ---------------- */
    "tvm/timeline": {
      prioritySource: "Hoàng Kim Thanh — Chapter 2 / Chapter 2.1 Time Value of Money",
      moreExplanation: [
        "The Hoàng Kim Thanh TVM notes repeatedly solve problems by first locating cash flows in time. This is not cosmetic: the exponent in every TVM formula comes directly from the distance between a cash flow and the focal date.",
        "Perspective controls the signs. A loan is +PV to the borrower at origination and −PMT later; the bank sees the exact opposite pattern.",
        "When payment frequency changes, convert the rate before drawing the final timeline. A 12% nominal APR with monthly compounding means 1% per monthly period, not 12% per month."
      ],
      examples: [
        {title:"Engagement-ring loan",scenario:"Borrow $4,000 today and repay $1,250 at the end of each year for five years.",steps:["Borrower timeline: +4,000 at t=0.","Place −1,250 at t=1,2,3,4,5.","Bank timeline reverses every sign."],result:"The two timelines are mirror images.",takeaway:"Write the perspective before assigning signs."},
        {title:"Mortgage already in progress",scenario:"A mortgage has 26 years remaining and you just made the monthly payment.",steps:["Today is immediately AFTER a payment, so the next payment is one month from now.","Remaining number of payments = 26×12 = 312.","The outstanding balance today is the PV of those 312 remaining payments."],result:"Treat the remaining mortgage as a new annuity starting one month from today.",takeaway:"The timing phrase 'just made a payment' changes the focal date."}
      ]
    },
    "tvm/lump-sum": {
      prioritySource: "Hoàng Kim Thanh — Chapter 2.1: Time value of money",
      formulaKeys: ["Future value","Present value"],
      moreExplanation: [
        "Compounding answers: 'If I leave this amount invested, what will it grow to?' Discounting reverses the same economic relationship: 'What amount today is equivalent to a known future amount?'",
        "Compound interest includes interest earned on previously credited interest. This is why small changes in r have increasingly large effects as n becomes large.",
        "The Hoàng Kim Thanh notes explicitly decompose future value into original principal, simple-interest component and compound-interest-on-interest. That decomposition is useful for building intuition before using a calculator."
      ],
      examples: [
        {title:"Hoàng Kim Thanh example — five-year deposit",scenario:"Deposit $1,000 at 10% annually for five years.",formula:"FV = PV(1+r)^n",steps:["PV = 1,000; r = 0.10; n = 5.","FV = 1,000(1.10)^5.","FV = $1,610.51.","Total interest = 1,610.51 − 1,000 = $610.51; simple-interest portion would be $500, so $110.51 is interest-on-interest."],result:"$1,610.51",takeaway:"Compounding becomes economically important because interest itself earns interest."},
        {title:"Long horizon: 8% vs 9%",scenario:"Invest $100 from age 20 to age 65.",steps:["At 8%: FV = 100(1.08)^45 ≈ $3,192.04.","At 9%: FV = 100(1.09)^45 ≈ $4,832.73.","One percentage point adds about $1,640.68 over the long horizon."],result:"The 9% account ends roughly 51% above the 8% account.",takeaway:"Compounding amplifies small rate differences when the horizon is long."}
      ]
    },
    "tvm/multiple-cashflows": {
      prioritySource: "Hoàng Kim Thanh — Time Value of Money notes; Time Value of Money 2 tutorial",
      formulaKeys: ["Present value","Future value"],
      moreExplanation: [
        "For irregular cash flows, there is no single annuity shortcut. Value each dated amount separately and then add them at one focal date.",
        "You can choose any focal date, but all terms must be moved to that SAME date. Present value at t=0 is usually the cleanest choice for investment decisions."
      ],
      examples: [
        {title:"Three-payment windfall",scenario:"Receive $32,049 in year 1, $64,098 in year 2, and $96,147 in year 3. Discount rate = 12.9%.",steps:["PV₁ = 32,049/1.129.","PV₂ = 64,098/1.129².","PV₃ = 96,147/1.129³.","Add the three present values."],result:"PV ≈ $145,486.08",takeaway:"Never add $32,049 + $64,098 + $96,147 and call that today's value."}
      ]
    },
    "tvm/annuities": {
      prioritySource: "Hoàng Kim Thanh — Chapter 2.1 TVM; Time Value of Money 1 & 2 tutorials",
      formulaKeys: ["PV ordinary annuity","FV ordinary annuity","Annuity due"],
      moreExplanation: [
        "Recognition comes before algebra. Ask whether payments are equal, equally spaced, and whether the first payment occurs today or one period later.",
        "An annuity due is worth more than the otherwise identical ordinary annuity at a positive rate because every cash flow is shifted one period earlier.",
        "Mortgages and installment loans are ordinarily end-of-period annuities; tuition or rent can be annuity-due structures when payment is required at the beginning of each period."
      ],
      examples: [
        {title:"Lottery headline vs economic value",scenario:"A $1 million lottery pays $50,000 at the end of each year for 20 years. Required return = 8%.",formula:"PV = C[1-(1+r)^{-n}]/r",steps:["C = 50,000; r = 0.08; n = 20.","PV = 50,000[1−1.08⁻²⁰]/0.08."],result:"PV ≈ $490,907.37",takeaway:"The advertised total of $1,000,000 is not the same as economic value today."},
        {title:"Tuition paid at the beginning",scenario:"School tuition is paid at the beginning of every academic year.",steps:["The first payment is at t=0.","That timing makes the stream an annuity due if tuition is level.","Value the matching ordinary annuity, then multiply by (1+r)."],result:"Annuity-due PV > ordinary-annuity PV for the same payments and positive r.",takeaway:"Timing words such as 'beginning' are formula-selection signals."}
      ]
    },
    "tvm/perpetuity-growth": {
      prioritySource: "Hoàng Kim Thanh — Chapter 2.1 TVM; Time Value of Money tutorials",
      formulaKeys: ["Growing perpetuity"],
      moreExplanation: [
        "A level perpetuity is the special case g=0, so PV=C/r. Growing perpetuity extends the logic when the cash flow rises at a constant rate forever.",
        "The denominator r−g is economically intuitive: faster sustainable growth offsets part of the discounting. If g approaches r, the value becomes extremely sensitive and the constant-growth assumption deserves scrutiny.",
        "Finite growing streams are growing annuities, not growing perpetuities."
      ],
      examples: [
        {title:"Bank perpetuity advertisement",scenario:"Deposit $4,000 and receive $280 every year forever, starting one year from now.",steps:["For a level perpetuity, r=C/PV.","r=280/4,000=0.07."],result:"Implied annual return = 7%",takeaway:"Perpetuity problems can be rearranged to solve for price, payment or return."},
        {title:"Drug patent profits",scenario:"A drug earns $4m next year and profits grow 6% annually for 17 years before falling to zero.",steps:["This is NOT a perpetuity because the patent creates a finite 17-year horizon.","Use a finite growing-annuity valuation or discount each projected cash flow.","The terminal cash flow after year 17 is zero under the stated assumption."],result:"Use a growing annuity, not C₁/(r−g).",takeaway:"Recognizing the horizon prevents a major formula-selection error."}
      ]
    },
    "tvm/apr-ear": {
      prioritySource: "Hoàng Kim Thanh — Chapter 2.1 TVM; Time Value of Money 1 & 2 tutorials",
      formulaKeys: ["EAR from APR"],
      moreExplanation: [
        "APR is a quotation convention. EAR is an economic one-year growth rate. Two products with different compounding frequencies should be compared using EAR.",
        "For a nominal APR with m compounding periods, periodic rate = APR/m. To reverse from EAR, use periodic rate = (1+EAR)^(1/m)−1.",
        "The distinction becomes critical in mortgages, CDs, bank deposits and credit products where payment frequency and compounding frequency may differ."
      ],
      examples: [
        {title:"Three deposit advertisements",scenario:"Compare 9% APR monthly, 10% APR annually, and 8% APR daily.",steps:["9% monthly: EAR=(1+.09/12)^12−1 ≈ 9.38%.","10% annual: EAR=10%.","8% daily: EAR=(1+.08/365)^365−1 ≈ 8.33%."],result:"10% compounded annually is highest among the three.",takeaway:"Never rank accounts using APR alone when compounding frequencies differ."},
        {title:"Bank A vs Bank B",scenario:"Bank A pays 7% compounded annually; Bank B pays 6% compounded quarterly.",steps:["EAR_A=7%.","EAR_B=(1+.06/4)^4−1≈6.14%."],result:"Bank A offers the larger effective return.",takeaway:"More frequent compounding does not automatically overcome a lower nominal rate."}
      ]
    },
    "tvm/loans": {
      prioritySource: "Hoàng Kim Thanh — TVM notes; Time Value of Money 1 & 2 tutorials",
      formulaKeys: ["Loan payment","PV ordinary annuity"],
      moreExplanation: [
        "An amortizing payment is chosen so that the present value of all scheduled payments equals the amount borrowed. Each payment contains interest on the opening balance plus principal repayment.",
        "The outstanding balance immediately after a payment is simply the PV of the remaining payments at that date. This avoids reconstructing the entire amortization table.",
        "Quoted APR must be converted to the payment-period rate before using the loan formula."
      ],
      examples: [
        {title:"25-year mortgage",scenario:"Borrow $100,000 for 25 years at 16% APR with monthly payments.",steps:["Monthly r=.16/12.","n=25×12=300.","PMT=100,000·r/[1−(1+r)^−300]."],result:"Monthly payment ≈ $1,358.89",takeaway:"Match monthly payment timing with monthly r and n."},
        {title:"Motorcycle loan",scenario:"Borrow $11,000 for 60 months at 6.61% APR.",steps:["r=.0661/12; n=60.","Apply the amortizing-loan formula."],result:"Monthly payment ≈ $215.79",takeaway:"The same annuity logic works across mortgages, cars and consumer loans."}
      ]
    },
    "tvm/npv-irr": {
      prioritySource: "Hoàng Kim Thanh — Time Value of Money notes; Time Value of Money 1 & 2 tutorials",
      formulaKeys: ["NPV"],
      moreExplanation: [
        "NPV converts every project cash flow to the same focal date and measures how much value is created beyond the required return.",
        "IRR asks for the rate that makes NPV exactly zero. With conventional cash flows it gives an intuitive percentage return, but NPV remains the primary value-creation criterion when rankings conflict.",
        "The Hoàng Kim Thanh exercises emphasize that cash-flow timing matters even when total nominal inflows are the same."
      ],
      examples: [
        {title:"Government construction contract",scenario:"Invest $9.78m today and another $5m in one year; receive $22.5m in one year. Risk-free rate=11%.",steps:["Net year-1 inflow = 22.5−5 = $17.5m.","PV of year-1 net inflow = 17.5/1.11 ≈ $15.7658m.","NPV = −9.78 + 15.7658."],result:"NPV ≈ +$5.986m",takeaway:"A positive NPV is value available today after compensating for time value."},
        {title:"One-year IRR",scenario:"Invest $9,500 today and receive $10,500 in one year.",steps:["Set 9,500=10,500/(1+IRR).","IRR=10,500/9,500−1."],result:"IRR ≈ 10.53%",takeaway:"For a one-period conventional project, IRR is simply the holding-period return."}
      ]
    },

    /* ---------------- Financial markets — Hoàng Kim Thanh priority ---------------- */
    "markets/market-map": {
      prioritySource: "Hoàng Kim Thanh — Chapter 3: Financial markets",
      moreExplanation: [
        "Classify markets along more than one dimension: primary vs secondary describes whether the security is newly issued; money vs capital describes maturity/type; exchange vs OTC describes trading organization.",
        "A single security can therefore have several labels at once. For example, a newly issued 90-day commercial paper note is a primary-market money-market transaction."
      ],
      examples: [
        {title:"Classify a new corporate bond",scenario:"A company sells newly created 10-year bonds to investors.",steps:["New issue → primary market.","10-year maturity → capital market.","Funds from investors go to the issuer."],result:"Primary capital-market transaction.",takeaway:"Do not treat market classifications as mutually exclusive categories."}
      ]
    },
    "markets/transaction-costs": {
      prioritySource: "Hoàng Kim Thanh — Chapter 3: Financial markets",
      moreExplanation: [
        "Transaction costs include search, information acquisition, contracting, documentation, brokerage, monitoring and enforcement costs—not just an explicit trading commission.",
        "Large established firms can spread fixed issuance and disclosure costs over large funding amounts and usually have more public information, which is why direct securities-market access is easier for them.",
        "Financial intermediaries exploit economies of scale and expertise to reduce these costs for smaller savers and borrowers."
      ],
      examples: [
        {title:"Why a small bakery does not issue bonds",scenario:"A neighborhood bakery needs VND 2 billion for equipment.",steps:["Preparing audited disclosure, legal documents and placement would create large fixed costs relative to VND 2b.","Investors would also need costly information about a little-known borrower.","A bank can evaluate the borrower and pool many loans using specialist staff."],result:"Bank financing can be cheaper than direct bond issuance despite the bank’s intermediation margin.",takeaway:"Intermediaries exist partly because they economize on transaction and information costs."}
      ]
    },
    "markets/asymmetric-info": {
      prioritySource: "Hoàng Kim Thanh — Chapter 3: Financial markets; Asymmetric Information materials",
      moreExplanation: [
        "Asymmetric information means one party possesses economically relevant information the other party does not. The key exam distinction is WHEN the information problem operates.",
        "Before contracting, hidden type creates adverse selection. After contracting, hidden action creates moral hazard.",
        "Screening, signaling, collateral, covenants and monitoring are responses to information frictions; they are not free, which links information problems back to transaction costs."
      ],
      examples: [
        {title:"Borrower knows more than lender",scenario:"Two firms request identical loans, but one privately knows its project is extremely risky.",steps:["The bank cannot perfectly distinguish risk types before lending.","If it charges one pooled rate, safer borrowers may leave while risky borrowers remain.","The applicant pool deteriorates."],result:"This is adverse selection arising from asymmetric information.",takeaway:"Ask whether the hidden information concerns TYPE before the contract or ACTION after the contract."}
      ]
    },
    "markets/lemons": {
      prioritySource: "Hoàng Kim Thanh — Chapter 3: Financial markets",
      moreExplanation: [
        "The lemons logic explains why uncertainty about quality can shrink a market. Buyers rationally lower the price they are willing to pay when they cannot distinguish high-quality from low-quality assets.",
        "That pooled price can drive high-quality sellers out, worsening average quality and causing further price declines. In credit markets, a similar mechanism can make lenders ration credit rather than simply raise rates."
      ],
      examples: [
        {title:"Used-car analogy → securities market",scenario:"Investors cannot distinguish firms with strong projects from firms with weak projects.",steps:["Investors offer a price reflecting average quality.","High-quality firms view the price as too low and avoid issuing.","The remaining issuer pool becomes worse on average."],result:"Adverse selection can reduce market participation and financing.",takeaway:"The lemons problem is a mechanism, not merely a synonym for 'bad information'."}
      ]
    },
    "markets/moral-hazard": {
      prioritySource: "Hoàng Kim Thanh — Chapter 3: Financial markets",
      moreExplanation: [
        "Moral hazard arises after financing when the borrower can take actions that increase private benefit while shifting downside risk to the lender or outside investors.",
        "Contract design addresses it using collateral, net-worth requirements, restrictive covenants, reporting requirements and monitoring. Equity finance has a parallel principal–agent problem when managers control shareholders’ resources."
      ],
      examples: [
        {title:"Risk shifting after a loan",scenario:"A firm receives a bank loan for a stable project, then considers switching the funds into a much riskier project with higher upside for owners.",steps:["The lender’s promised upside is limited to interest and principal.","Owners capture much of the extra upside if the gamble succeeds.","The lender bears more default risk if it fails."],result:"Post-contract risk shifting is moral hazard.",takeaway:"A covenant restricting asset substitutions is one possible control."}
      ]
    },
    "markets/intermediaries": {
      prioritySource: "Hoàng Kim Thanh — Chapter 3: Financial markets",
      moreExplanation: [
        "Depository institutions, investment funds, insurance companies and pension funds transform different combinations of maturity, denomination, liquidity and risk.",
        "Banks are particularly important in information-intensive lending because repeated relationships and monitoring can make private information production economical."
      ],
      examples: [
        {title:"Maturity transformation",scenario:"Households want liquid deposits while a business needs a five-year loan.",steps:["The bank issues short-term/liquid claims to depositors.","It uses pooled funds to hold longer-term loans.","Risk management and liquidity reserves are needed because asset and liability maturities differ."],result:"The bank transforms maturity and liquidity.",takeaway:"Intermediation creates value but also creates balance-sheet risks that must be managed."}
      ]
    },
    "markets/money-instruments": {
      prioritySource: "Hoàng Kim Thanh — Money market; Comparison — Money market securities; Treasury bill auctions",
      moreExplanation: [
        "Money-market instruments are short-term claims used for liquidity management and short-term funding. The important exam dimensions are issuer, typical maturity, collateral, negotiability and quotation convention.",
        "Treasury bills are government discount securities; commercial paper is unsecured short-term corporate debt; negotiable CDs are bank time deposits that can trade; federal funds are very short-term interbank loans; repos are collateralized financing structured as sale and repurchase; bankers’ acceptances support trade finance.",
        "Do not infer 'money market' from where an instrument happens to be traded. Classification is based primarily on the short-term nature of the claim."
      ],
      examples: [
        {title:"Choose the instrument",scenario:"A highly rated corporation needs unsecured funding for 60 days to cover seasonal working capital.",steps:["Issuer is a corporation, not Treasury or bank.","Funding is short term.","No collateral is intended."],result:"Commercial paper is the natural classification.",takeaway:"Issuer + maturity + collateral structure usually identifies the instrument faster than memorizing names."},
        {title:"Repo is not corporate paper",scenario:"A dealer sells Treasury securities today and agrees to repurchase them next week at a higher price.",steps:["Economically, the price difference is financing interest.","Treasuries serve as collateral.","The legal form is sale + repurchase, but economic substance is short-term secured borrowing."],result:"Repurchase agreement (repo).",takeaway:"This directly addresses a common true/false trap in the supplied tutorial."}
      ]
    },
    "markets/money-yields": {
      prioritySource: "Hoàng Kim Thanh — Money market / Comparison notes; Money Market Securities tutorial",
      formulaKeys: ["T-bill discount yield","Bond-equivalent yield","Effective annual return"],
      moreExplanation: [
        "Three yield measures can describe the same discount instrument yet produce different numbers because they use different denominators, day-count conventions and compounding assumptions.",
        "Discount yield divides the discount by face value and annualizes on 360 days. BEY divides by the actual amount invested and commonly annualizes on 365 days. EAR compounds the holding-period growth to one year.",
        "The correct comparison metric depends on the question. For cross-product economic comparison, EAR is often the cleanest; for market quotation conventions, use the convention explicitly requested."
      ],
      examples: [
        {title:"T-bill: $10,000 face, $9,875 price, 68 days",scenario:"Compute the three common yield measures.",steps:["DY=(10,000−9,875)/10,000×360/68 ≈ 6.62%.","BEY=(10,000−9,875)/9,875×365/68 ≈ 6.79%.","EAR=(10,000/9,875)^(365/68)−1 ≈ 6.99%."],result:"DY 6.62% · BEY 6.79% · EAR 6.99%",takeaway:"Same cash flows, different quotation conventions."},
        {title:"Repo maturity effect",scenario:"Buy securities for $24,995,000 and receive $25,000,000 at repurchase.",steps:["Holding-period return is fixed by the $5,000 price difference.","Annualizing over 7 days gives about 1.03% on a 360-day simple basis.","Annualizing the same dollar gain over 21 days gives about 0.34%."],result:"A longer maturity lowers the annualized yield when the dollar gain is unchanged.",takeaway:"Always identify both the return numerator and the time scaling."}
      ]
    },

    /* ---------------- Valuation — Hoàng Kim Thanh priority ---------------- */
    "valuation/valuation-principle": {
      prioritySource: "Hoàng Kim Thanh — Chapter 4: Valuation of Securities",
      formulaKeys: ["Present value"],
      moreExplanation: [
        "The Hoàng Kim Thanh valuation notes distinguish required return from expected return. Required return is the compensation demanded for risk and is used to compute fair present value; expected return is the return implied by current market price and projected cash flows.",
        "Decision rule: if fair PV exceeds market price, the security is undervalued relative to your required return. Equivalently, the expected return implied by price is above the required return.",
        "Price, required return and cash-flow expectations interact. A change in any one of them can change the valuation conclusion."
      ],
      examples: [
        {title:"Walmart bond example from the Hoàng Kim Thanh notes",scenario:"A bond sells for $925, pays $100 annually for four more years, is expected to sell for $960 at year 4, and required return is 11.25%.",steps:["Discount each $100 coupon at 11.25%.","Add the $960 terminal sale value to the year-4 coupon before discounting year 4.","The fair PV is approximately $935.31."],result:"PV ≈ $935.31 > market price $925 → undervalued under the assumptions.",takeaway:"Valuation is a comparison between fair PV and market price, not a statement that price is objectively 'wrong'."}
      ]
    },
    "valuation/zero-bond": {
      prioritySource: "Hoàng Kim Thanh — Chapter 4: Valuation of Securities; Time Value of Money 1",
      formulaKeys: ["Zero-coupon bond"],
      moreExplanation: [
        "A zero-coupon bond concentrates all promised cash flow at maturity. Its price is therefore a pure lump-sum present-value problem.",
        "For a fixed redemption value, longer maturity or higher yield lowers current price. Because there are no intermediate coupons, zero-coupon bonds are especially sensitive to yield changes."
      ],
      examples: [
        {title:"10-year zero",scenario:"Redemption value=100, annual yield=6%, maturity=10 years.",steps:["P=100/(1.06)^10."],result:"P ≈ 55.84",takeaway:"The discount from par compensates the investor because no periodic coupon is paid."}
      ]
    },
    "valuation/coupon-bond": {
      prioritySource: "Hoàng Kim Thanh — Chapter 4: Valuation of Securities; 2023 Valuation slides",
      formulaKeys: ["Coupon bond"],
      moreExplanation: [
        "A coupon bond is the sum of two valuation components: an annuity of coupon payments and the present value of principal at maturity.",
        "If coupon rate equals YTM under matching compounding conventions, price is at par. If coupon rate is below YTM, price is below par; if coupon rate is above YTM, price is above par.",
        "Semiannual coupon bonds require consistent half-year cash flows, half-year yield and number of half-year periods."
      ],
      examples: [
        {title:"15-year semiannual bond",scenario:"Face value=100, 5% annual coupon paid semiannually, YTM=5.5% annual with semiannual compounding.",steps:["Coupon per half-year = 100×5%/2 = 2.5.","Periodic yield = 5.5%/2 = 2.75%.","n=15×2=30.","Discount 30 coupons of 2.5 and face value 100."],result:"Price ≈ 94.94",takeaway:"Coupon rate below YTM → discount bond."}
      ]
    },
    "valuation/ytm-return": {
      prioritySource: "Hoàng Kim Thanh — Chapter 4: Valuation of Securities",
      moreExplanation: [
        "YTM is the discount rate that equates CURRENT price with promised bond cash flows if held to maturity under the standard assumptions. It is therefore price-implied, not simply the coupon rate.",
        "Realized holding-period return can differ from initial YTM because the bond may be sold early, coupons may be reinvested at different rates, or default may occur.",
        "Expected return over a shorter horizon should include expected coupon income plus the expected sale price at the horizon."
      ],
      examples: [
        {title:"Coupon rate vs YTM",scenario:"A 5% coupon bond trades below par while similar-risk market yields are 7%.",steps:["The coupon cash flow is fixed by the contract.","Investors demand 7%, so the price must fall until discounted promised cash flows yield approximately 7%."],result:"YTM > coupon rate and price < par.",takeaway:"Yield changes work primarily through price because contractual coupons do not adjust."}
      ]
    },
    "valuation/bond-risk": {
      prioritySource: "Hoàng Kim Thanh — Chapter 4: Valuation of Securities",
      moreExplanation: [
        "Bond prices move inversely with yields because a higher discount rate reduces the present value of fixed promised cash flows.",
        "Longer maturity generally increases interest-rate sensitivity because more of the bond’s value is received farther in the future. Lower coupon also tends to increase sensitivity because more value is concentrated in the maturity payment."
      ],
      examples: [
        {title:"Which bond moves more?",scenario:"Compare two 10-year bonds with the same YTM: one is zero-coupon, the other has a high coupon.",steps:["The zero receives all cash at year 10.","The coupon bond recovers part of value earlier through coupons.","Distant cash flows are more sensitive to discount-rate changes."],result:"The zero-coupon bond generally has greater price sensitivity.",takeaway:"Timing of cash flows, not just maturity label, drives interest-rate exposure."}
      ]
    },
    "valuation/stock-ddm": {
      prioritySource: "Hoàng Kim Thanh — Chapter 4: Valuation of Securities; Time Value of Money 1",
      formulaKeys: ["Gordon growth"],
      moreExplanation: [
        "Equity value can be framed as the present value of cash ultimately distributed to shareholders. Under stable perpetual dividend growth, the infinite stream collapses to the Gordon formula.",
        "The model is highly sensitive to r−g. Small changes in required return or long-run growth can create large valuation changes, so assumptions need economic justification."
      ],
      examples: [
        {title:"Growing-dividend share",scenario:"Next dividend D₁=6.5, perpetual growth g=3%, required return r=7%.",steps:["P₀=D₁/(r−g).","P₀=6.5/(.07−.03)."],result:"P₀=162.50",takeaway:"Use next dividend D₁. If 6.5 were D₀, it would first need to be grown by 3%."}
      ]
    },
    "valuation/preferred-perpetuity": {
      prioritySource: "Hoàng Kim Thanh — Chapter 4: Valuation of Securities",
      formulaKeys: ["Growing perpetuity"],
      moreExplanation: [
        "Traditional preferred stock with a fixed dividend and no maturity resembles a level perpetuity. Set g=0, giving P=D/r.",
        "Preferred stock is legally equity, but its fixed promised-like dividend pattern makes its valuation resemble fixed-income logic more than common equity growth valuation."
      ],
      examples: [
        {title:"Fixed preferred dividend",scenario:"Preferred stock pays $6 every year indefinitely and investors require 8%.",steps:["Use level perpetuity: P=D/r.","P=6/.08."],result:"P=$75",takeaway:"Do not apply Gordon growth unless the preferred dividend itself is expected to grow."}
      ]
    },

    /* ---------------- Foundations — Hoàng Kim Thanh priority expansion ---------------- */
    "intro/business-organization": {
      prioritySource: "Hoàng Kim Thanh — Chapter 0: Introduction to Finance",
      moreExplanation: [
        "Business form is not merely a legal label. It changes who owns the residual claim, who controls operating decisions, whether owners can lose more than their investment, how easily ownership can be transferred, how the firm is taxed, and how broadly it can raise external capital.",
        "A sole proprietorship concentrates ownership and control in one person, but the owner normally bears unlimited liability. A partnership pools resources from more than one owner; general partners commonly retain management rights and broad liability, while limited-partner structures can separate investment from control. A corporation is a separate legal entity: it can own property, contract, borrow, sue and be sued independently of its shareholders.",
        "The corporate form becomes especially important when a business must pool capital from many investors. Transferable shares give investors an exit mechanism, limited liability caps their direct loss at the amount invested, and standardized securities can be issued to a broad capital market. These features make large-scale financing easier than in a typical sole proprietorship or traditional partnership.",
        "The financing advantage is not free. Corporations face governance costs because ownership and management are separated, and in some tax systems corporate earnings may be taxed at the company level and distributions taxed again at the investor level. The exam logic is therefore a trade-off: scale and access to capital versus legal, tax and agency complexity."
      ],
      examples: [
        {title:"From family café to national chain",scenario:"A profitable family café needs VND 60 billion to open 25 new locations. The founder can contribute only VND 5 billion and does not want personal assets exposed to all business debts.",steps:["Under a sole proprietorship, ownership is simple but external equity is difficult to standardize and the owner may face unlimited liability.","A corporate form can issue shares to multiple investors and borrow in the company’s own name.","Limited liability means shareholders normally risk their invested capital rather than all personal wealth."],result:"The corporate form is usually more suitable for large-scale external financing.",takeaway:"Choose the legal form by matching ownership, liability and capital needs—not by assuming one form is universally superior."},
        {title:"Why transferable ownership matters",scenario:"An outside investor is willing to fund a business only if she can later sell her claim without requiring the founder to dissolve the firm.",steps:["A non-transferable ownership claim creates an exit problem.","Corporate shares can generally be transferred to another investor subject to law and company rules.","Transferability increases liquidity of the investor’s claim and can lower the required return demanded for committing capital."],result:"Transferable shares can improve access to external equity.",takeaway:"Capital-market access is partly a consequence of the legal design of the claim itself."}
      ]
    },
    "intro/agency-goal": {
      prioritySource: "Hoàng Kim Thanh — Chapter 0: Introduction to Finance",
      moreExplanation: [
        "Separation of ownership and management lets a firm hire professional managers, pool the savings of many households, and allow shareholders to diversify across companies rather than manage every business they own. Those are major efficiency gains of the corporate form.",
        "The same separation creates an agency problem. Managers control corporate resources but do not capture every dollar of value created or destroyed. They may prefer private benefits, lower personal effort, excessive expansion, prestige projects or unusually low risk even when those choices reduce shareholder value.",
        "Finance therefore uses shareholder wealth maximization as a decision rule: choose actions that increase the market value of owners’ claims after considering cash-flow amount, timing and risk. Accounting profit by itself is incomplete because two projects can report the same profit while delivering cash at different dates or with very different risk.",
        "Governance mechanisms reduce—not eliminate—agency costs. Performance-linked compensation, an independent board, monitoring by large investors, debt covenants and the threat of takeover can make value-destroying behavior more costly to managers. A strong answer explains both the conflict and the mechanism that changes incentives.",
        "Stakeholder and sustainability considerations can matter financially when they affect customer loyalty, employee retention, regulatory exposure, financing access or risk. The analytical discipline is to trace those effects into expected cash flows, required returns or risk rather than treating them as slogans disconnected from valuation."
      ],
      examples: [
        {title:"The empire-building project",scenario:"A CEO can invest VND 200 billion in a prestigious headquarters. The project has NPV = −VND 25 billion but would increase the size of the organization and the CEO’s visibility.",steps:["From the shareholders’ perspective, a negative NPV means the project destroys market value.","The CEO may still prefer it because personal prestige and control rise with firm size.","Independent board review and compensation tied to long-run value can reduce this incentive conflict."],result:"Reject the negative-NPV project unless omitted strategic cash flows can justify a positive value.",takeaway:"Agency conflict appears when the manager’s private payoff differs from the owners’ value change."},
        {title:"Profit is not enough",scenario:"Project A earns VND 12 billion one year from now with low risk. Project B reports the same total accounting profit but most cash arrives five years later and is highly uncertain.",steps:["Accounting profit does not fully encode timing.","Discount the expected cash flows at risk-appropriate required returns.","Compare present values rather than simply comparing reported profit."],result:"The project with the higher value today should be preferred, even if reported profit looks similar.",takeaway:"Shareholder wealth maximization forces timing and risk into the decision."}
      ]
    },

    /* ---------------- Personal finance — application expansion ---------------- */
    "personal/personal-balance": {
      prioritySource: "Course personal-finance framework; Hoàng Kim Thanh — Chapter 0 household decisions",
      moreExplanation: [
        "A household needs both a stock statement and a flow statement. Net worth is measured at a point in time as assets minus liabilities, while monthly or annual cash flow records income received and payments made over a period.",
        "A household can have positive net worth but still face a liquidity crisis if most assets are illiquid and near-term debt payments exceed available cash. Conversely, a young household can have modest or even negative net worth while maintaining healthy cash flow if debt is manageable and income is stable.",
        "Personal financial analysis should therefore separate solvency, liquidity and affordability. Solvency asks whether assets ultimately cover obligations; liquidity asks whether near-term payments can be met; affordability asks whether recurring debt service fits sustainable cash flow."
      ],
      examples: [
        {title:"Asset-rich, cash-poor household",scenario:"A household owns a VND 3.5 billion apartment, has VND 80 million cash and owes VND 1.8 billion on a mortgage. Monthly debt service is VND 28 million while disposable income is VND 32 million.",steps:["Net worth is strongly positive because assets exceed liabilities.","But cash reserves cover only a few months of payments.","The debt-service burden consumes most monthly income, creating liquidity risk despite positive net worth."],result:"Solvent does not automatically mean liquid or comfortable.",takeaway:"Always read the balance-sheet position together with cash-flow capacity."}
      ]
    },
    "personal/saving-goals": {
      prioritySource: "Time Value of Money 1 & 2 tutorials",
      formulaKeys: ["Future value","FV ordinary annuity","Present value"],
      moreExplanation: [
        "Goal-based saving starts at the future date, not with a random monthly contribution. Define the amount needed at the goal date, then translate that future target into either a lump-sum deposit today or a sequence of periodic contributions.",
        "Contribution timing matters. Deposits at the beginning of each period earn one extra period of return compared with end-of-period deposits. Inflation also matters because a future tuition bill or house deposit is usually a nominal amount that can grow over time.",
        "A robust plan separates assumptions: expected nominal return, expected inflation, contribution frequency and time horizon. Mixing a real target with a nominal discount rate produces an internally inconsistent answer."
      ],
      examples: [
        {title:"Build a tuition fund",scenario:"You want VND 500 million in 10 years. The account earns 7% effective annually and you will deposit the same amount at each year-end.",steps:["Use the FV ordinary-annuity factor because deposits occur at year-end.","FV=C[(1.07^10−1)/.07].","Solve C=500,000,000 / FVIFA(7%,10)."],result:"Required annual deposit ≈ VND 36.19 million.",takeaway:"The target is a future value; solve backward for the contribution that accumulates to it."},
        {title:"Beginning-of-year deposits",scenario:"Use the same VND 500 million target but make each deposit at the beginning of the year.",steps:["Compute the ordinary-annuity contribution first.","An annuity due earns one additional period: FVdue=FVordinary(1+r).","Therefore the required beginning-of-year contribution is smaller."],result:"Required contribution ≈ VND 33.82 million per year.",takeaway:"Moving each contribution one period earlier increases its accumulation time."}
      ]
    },
    "personal/borrowing-credit": {
      prioritySource: "Time Value of Money 1 & 2 tutorials",
      formulaKeys: ["EAR from APR","Loan payment"],
      moreExplanation: [
        "Borrowing cost is determined by the cash actually received and the cash actually repaid. The headline APR can be useful, but fees, points, payment frequency and compounding can make the effective cost materially different.",
        "In an amortizing loan, interest each period is charged on the outstanding balance, not permanently on the original principal. That is why dividing total interest by original principal is not a valid measure of the true annual rate when principal is being repaid over time.",
        "Affordability and cost are different questions. Extending maturity can lower the monthly payment while increasing the total interest paid. A good borrowing decision therefore checks payment capacity, effective rate, fees, total cash cost and prepayment flexibility."
      ],
      examples: [
        {title:"Mortgage points change the true rate",scenario:"A mortgage has face amount $100,000, quoted APR 10.5%, but two points are deducted so the borrower receives only $98,000 while payments are based on $100,000.",steps:["Compute the monthly payment using the contractual $100,000 principal and quoted monthly rate.","For the borrower’s true financing cost, the initial cash inflow is only $98,000.","Solve the monthly IRR that equates $98,000 received with the contractual payments, then annualize consistently."],result:"The true borrowing rate is higher than the quoted 10.5% APR.",takeaway:"Up-front fees reduce net proceeds and therefore raise the effective financing cost."},
        {title:"Low monthly payment trap",scenario:"Two loans finance the same VND 300 million purchase. Loan A runs 3 years; Loan B runs 6 years at the same rate.",steps:["The longer loan spreads principal over more payments, lowering each payment.","But interest is charged for more periods.","Compare PV/effective rate and total payments—not monthly payment alone."],result:"Loan B can feel more affordable monthly while costing more in total.",takeaway:"Payment size is a cash-flow constraint, not a complete cost measure."}
      ]
    },
    "personal/buy-lease": {
      prioritySource: "Time Value of Money tutorials — dealer financing and cash-rebate problems",
      formulaKeys: ["Present value","Loan payment","NPV"],
      moreExplanation: [
        "Buy, finance and lease alternatives often package price, financing and residual value differently. The only defensible comparison is to map every relevant cash flow to a timeline and value all alternatives at the same focal date.",
        "Include cash price, down payment, periodic payments, fees, foregone rebates, maintenance obligations and expected resale/residual value when they differ between alternatives. A subsidized low APR can be economically equivalent to giving up a cash rebate.",
        "The discount rate should reflect the opportunity cost relevant to the household’s financing alternative. Comparing only stated APRs ignores the purchase-price concessions embedded in the offers."
      ],
      examples: [
        {title:"2.9% financing versus cash rebate",scenario:"A car costs $23,000. Dealer A offers a 3-year 2.9% loan; Dealer B offers a cash rebate, but the remaining balance would be financed at a 9% bank rate.",steps:["Compute the monthly payment under Dealer A’s 2.9% loan.","Discount Dealer A’s payments at the 9% alternative financing rate to find their economic value.","The difference between $23,000 and that value is the rebate that makes the buyer indifferent, subject to identical taxes/fees."],result:"The required rebate is the value of the financing subsidy.",takeaway:"A promotional interest rate is part of the product price; compare whole cash-flow packages."}
      ]
    },
    "personal/insurance-risk": {
      prioritySource: "Understanding Risk materials; course personal-finance framework",
      moreExplanation: [
        "Insurance converts an uncertain, potentially severe loss into a known premium. The household is paying not only for expected claim dollars but also for risk transfer, pooling, administration and insurer capital.",
        "Deductibles and co-insurance intentionally leave some risk with the policyholder. This can reduce premiums and also limit moral hazard because the insured person still bears part of the loss.",
        "Insurance is most valuable for losses that could materially damage household wealth or consumption capacity. Small predictable expenses are often cheaper to self-insure because frequent claims would add administrative cost to the premium."
      ],
      examples: [
        {title:"Choosing a deductible",scenario:"Policy A costs $900 with a $250 deductible. Policy B costs $620 with a $1,000 deductible. The household has a strong emergency fund.",steps:["The higher deductible saves $280 in certain premium cost.","The household accepts up to $750 more out-of-pocket loss if a claim occurs.","Evaluate whether the emergency fund can absorb that extra loss and whether the premium saving fairly compensates for the retained risk."],result:"A higher deductible can be rational for a household able to self-insure moderate losses.",takeaway:"Insurance design is a risk-retention decision, not merely a search for the lowest premium."}
      ]
    },
    "personal/retirement": {
      prioritySource: "Time Value of Money 1 & 2 tutorials",
      formulaKeys: ["PV ordinary annuity","FV ordinary annuity","Present value"],
      moreExplanation: [
        "Retirement is naturally a two-stage TVM problem. First value the retirement withdrawals at the retirement date; then determine how present savings and future contributions must grow to reach that retirement-date target.",
        "The first withdrawal date changes the mathematics. A withdrawal one year after retirement is an ordinary annuity; a withdrawal immediately at retirement is an annuity due. Inflation can also make withdrawals a growing stream rather than a level annuity.",
        "Longevity and return uncertainty mean the deterministic annuity calculation is a planning baseline, not a guarantee. A practical plan adds a safety margin or tests several return, inflation and lifespan scenarios."
      ],
      examples: [
        {title:"How much must exist at retirement?",scenario:"You want $40,000 annually for 20 years, with the first payment one year after retirement. The retirement portfolio is assumed to earn 6% annually.",steps:["Value the 20 withdrawals at the retirement date using a PV ordinary annuity.","PVret=40,000[1−(1.06)^−20]/.06."],result:"Required balance at retirement ≈ $458,797.",takeaway:"Do not solve the accumulation phase until the retirement-date liability has been valued."},
        {title:"First payment immediately",scenario:"Use the same withdrawals, but the first $40,000 is paid on the retirement date.",steps:["This is an annuity due.","Multiply the ordinary-annuity PV by 1.06."],result:"Required retirement balance ≈ $486,325.",takeaway:"One-period timing changes can materially alter a long-horizon plan."}
      ]
    },

    /* ---------------- Risk — deeper intuition and numerical application ---------------- */
    "risk/risk-return": {
      prioritySource: "2023 Understanding Risk; Cecchetti — Understanding Risk Chapter 5",
      moreExplanation: [
        "Return measures how wealth changes relative to the amount invested. Risk is not synonymous with a loss; it is uncertainty about which return will occur. A risky investment can generate a high gain, a low gain or a loss.",
        "Historical realized return describes what happened. Expected return is a probability-weighted forward-looking average. Neither one by itself measures dispersion, which is why risk analysis adds variance, standard deviation and—at the portfolio level—co-movement between assets.",
        "A finance decision compares expected compensation with the risk borne. Higher expected return is not automatically a better investment if it requires disproportionately more risk."
      ],
      examples: [
        {title:"Same average, different risk",scenario:"Investment A pays exactly 10%. Investment B pays −10% or +30% with equal probability.",steps:["Expected return of A=10%.","Expected return of B=.5(−10%)+.5(30%)=10%.","A has no dispersion in this simplified case; B has substantial dispersion."],result:"Same expected return, very different risk.",takeaway:"Expected return measures the center of outcomes, not uncertainty around the center."}
      ]
    },
    "risk/probability": {
      prioritySource: "2023 Understanding Risk; Cecchetti — Understanding Risk Chapter 5",
      formulaKeys: ["Expected return"],
      moreExplanation: [
        "A probability distribution lists possible states, the probability of each state and the return conditional on that state. Probabilities must sum to one, and expected return is the weighted average across all states.",
        "Expected return should be interpreted as a long-run or probability-weighted center, not as the return most likely to occur in a single period. In an asymmetric distribution, the expected value might not even be one of the possible outcomes."
      ],
      examples: [
        {title:"Three-state stock",scenario:"A stock returns −10% in recession (p=.20), 10% in normal conditions (p=.50), and 30% in a boom (p=.30).",steps:["Multiply each return by its probability.","E(R)=.20(−10%)+.50(10%)+.30(30%)."],result:"E(R)=12%",takeaway:"Probability weights—not a simple unweighted average—determine expected return."}
      ]
    },
    "risk/variance-sd": {
      prioritySource: "2023 Understanding Risk; Cecchetti — Understanding Risk Chapter 5",
      formulaKeys: ["Variance"],
      moreExplanation: [
        "Variance measures how far possible returns lie from expected return, with larger deviations receiving more weight because they are squared. Standard deviation is the square root of variance and is easier to interpret because it returns to the same units as the original returns.",
        "The calculation sequence matters: first find expected return, then compute each state’s deviation from that expected return, square the deviation, weight by probability, sum, and finally take the square root for standard deviation.",
        "Standard deviation describes total stand-alone volatility. It does not reveal whether the risk can be diversified away; that requires information about how the asset co-moves with the rest of the portfolio."
      ],
      examples: [
        {title:"Standard deviation of the three-state stock",scenario:"Use returns −10%, 10%, 30% with probabilities .20, .50, .30 and E(R)=12%.",steps:["Deviations are −22%, −2%, and +18%.","Variance=.20(.22²)+.50(.02²)+.30(.18²).","Take the square root."],result:"Variance ≈ 0.0196; standard deviation ≈ 14.0%.",takeaway:"The expected return of 12% does not show the substantial spread of possible outcomes."}
      ]
    },
    "risk/risk-aversion": {
      prioritySource: "2023 Understanding Risk; Cecchetti — Understanding Risk Chapter 5",
      moreExplanation: [
        "Risk aversion means the investor values an extra dollar less when already wealthy than when wealth is low. Because losses reduce utility more than equal-sized gains increase it around the same wealth level, a risk-averse investor can prefer certainty to a fair gamble.",
        "The risk premium is the extra expected return or compensation required to accept risk. The certainty equivalent expresses the same preference in money terms: it is the sure amount the investor considers equally attractive as the risky payoff.",
        "Risk aversion does not imply avoiding all risky assets. A rational risk-averse investor will still accept risk when expected compensation is sufficient and when diversification makes the overall portfolio attractive."
      ],
      examples: [
        {title:"Why buy insurance above expected loss?",scenario:"There is a 1% chance of a $20,000 loss. The actuarial expected loss is only $200, yet a household is willing to pay a $350 premium.",steps:["The expected loss is $200.","The additional $150 can be interpreted partly as compensation to transfer severe downside risk plus insurer costs.","A risk-averse household may prefer the certain premium to a small chance of a financially disruptive loss."],result:"Paying more than expected loss can still be rational.",takeaway:"Utility and risk-bearing capacity matter, not expected dollars alone."}
      ]
    },
    "risk/diversification": {
      prioritySource: "2023 Understanding Risk; Cecchetti — Understanding Risk Chapter 5",
      moreExplanation: [
        "Diversification works because portfolio risk depends on co-movement, not only on each asset’s individual volatility. Combining assets whose returns are not perfectly positively correlated allows favorable outcomes in one position to offset unfavorable outcomes in another.",
        "Firm-specific or idiosyncratic risk can be reduced substantially by holding many different exposures. Economy-wide systematic shocks cannot be eliminated merely by adding more securities that respond to the same underlying shock.",
        "This is why a portfolio of 20 highly similar companies can be less diversified than a smaller set spanning genuinely different economic drivers."
      ],
      examples: [
        {title:"Airline plus oil producer",scenario:"An airline is hurt by unexpectedly high fuel prices, while an oil producer may benefit from higher oil prices.",steps:["Each company can be risky on its own.","Their returns may respond differently to the same oil-price shock.","Combining them can reduce portfolio sensitivity to that specific shock, although other market risks remain."],result:"Imperfect co-movement can reduce portfolio volatility.",takeaway:"Diversification comes from different risk drivers, not from merely counting ticker symbols."}
      ]
    },
    "risk/insurance-info": {
      prioritySource: "Asymmetric Information materials; 2023 Understanding Risk",
      moreExplanation: [
        "Insurance markets are especially sensitive to asymmetric information. Before a contract is written, high-risk customers may know more about their type than the insurer; this is adverse selection. After coverage begins, insurance can change behavior or care taken; this is moral hazard.",
        "Insurers respond through screening, pricing by observable risk characteristics, deductibles, co-insurance, exclusions, monitoring and claim verification. Each tool reduces one information problem but can create administrative cost or reduce coverage value.",
        "Exam questions often describe a behavior and ask for the label. Use timing: hidden risk type before contracting points toward adverse selection; hidden action after contracting points toward moral hazard."
      ],
      examples: [
        {title:"Adverse selection versus moral hazard",scenario:"Drivers who privately know they have repeated near-accidents are more eager to buy generous insurance. After buying full coverage, some drivers become less careful about minor damage.",steps:["Private risk type influencing who buys the policy occurs before contract → adverse selection.","Reduced care because losses are insured occurs after contract → moral hazard.","Risk-based pricing helps the first; deductibles can help the second."],result:"One market can contain both information problems at different stages.",takeaway:"Always identify WHEN the hidden information or action matters."}
      ]
    },

    /* ---------------- Financial statements — conceptual expansion ---------------- */
    "health/statements": {
      prioritySource: "2023 Financial Statements; Financial Statement 2 tutorial; Hoàng Kim Thanh — Chapter 0 profit vs cash discussion",
      moreExplanation: [
        "Financial statements answer different questions. The balance sheet shows resources and claims at a date. The income statement measures revenues and expenses over a period. The cash-flow statement explains actual cash inflows and outflows over the period. Changes in equity connect profits, distributions and owner transactions.",
        "Accounting profit and cash are not interchangeable. A credit sale can create revenue and profit before the customer pays cash; purchasing a long-lived asset can use cash immediately while expense is recognized gradually through depreciation. A firm can therefore be profitable yet face a cash shortage.",
        "Ratio analysis frequently divides a flow by a stock, such as sales/total assets or net income/total assets. When beginning and ending balance-sheet values are available, an average stock often matches the period flow better than a single year-end snapshot."
      ],
      examples: [
        {title:"Profitable but short of cash",scenario:"A company sells VND 1 billion of services on credit near year-end, earning a VND 300 million margin, but customers will not pay for 90 days. Supplier payroll and bills are due next week.",steps:["The income statement can already recognize revenue and profit if recognition conditions are met.","Accounts receivable increases on the balance sheet.","Cash has not yet arrived, so the company may still need short-term financing to meet bills."],result:"Positive accounting profit can coexist with a liquidity shortage.",takeaway:"Working-capital management bridges the timing gap between earning revenue and collecting cash."},
        {title:"Why use average assets?",scenario:"Assets rise from $100 million at the start of the year to $180 million at year-end after a major midyear investment; annual sales are $210 million.",steps:["Year-end asset turnover would be 210/180=1.17×.","Using simple average assets gives 210/140=1.50×.","The average better represents the asset base available over the full period when the timing is not more precisely known."],result:"Denominator choice materially changes the ratio.",takeaway:"Match period flows with representative stock balances."}
      ]
    },
    "health/common-size": {
      prioritySource: "2023 Financial Statements; Financial Statement 2 tutorial",
      moreExplanation: [
        "Common-size analysis removes scale so structure can be compared across years or across firms of different size. On a balance sheet, each line is normally divided by total assets; on an income statement, each line is normally divided by sales or revenue.",
        "A common-size percentage does not say whether an item is good or bad. It shows composition. Interpretation requires comparison with prior periods, competitors, strategy and business model.",
        "The technique is especially useful for diagnosing why ratios changed. For example, rising inventory as a percentage of assets together with slowing inventory turnover is more concerning than either observation in isolation."
      ],
      examples: [
        {title:"Estée Lauder common-size inventory",scenario:"The tutorial reports year-end inventory of 996 and total assets of 6,274 (same units).",steps:["Use total assets as the balance-sheet denominator.","Inventory percentage=996/6,274×100."],result:"Inventory ≈ 15.88% of total assets.",takeaway:"Common-size statements turn absolute amounts into comparable structural percentages."},
        {title:"Income-statement comparison",scenario:"Firm A has sales of 1,000 and operating profit of 80. Firm B has sales of 4,000 and operating profit of 240.",steps:["A operating margin=80/1,000=8%.","B operating margin=240/4,000=6%.","B earns more absolute profit because it is larger, but A converts each sales dollar into operating profit more efficiently."],result:"Scale and margin answer different questions.",takeaway:"Common-size analysis separates size from operating structure."}
      ]
    },

    /* ---------------- Firm health — tutorial-driven expansion ---------------- */
    "health/liquidity": {
      prioritySource: "Financial Statement 2 tutorial; 2023 Analyzing Firm Performance",
      formulaKeys: ["Current ratio","Quick ratio"],
      moreExplanation: [
        "Liquidity ratios are stock measures at a point in time, so window-dressing transactions can change the ratio without necessarily improving underlying operating strength.",
        "Current ratio includes inventory and other current assets; quick ratio deliberately removes less-liquid components to focus on near-cash coverage.",
        "When a question asks how a transaction changes the current ratio, analyze the numerator and denominator separately before deciding direction."
      ],
      examples: [
        {title:"Borrow short term and hold cash",scenario:"Current assets=100, current liabilities=60. The firm borrows 20 short term and keeps the proceeds in cash.",steps:["Before: current ratio=100/60=1.67.","After: current assets=120 and current liabilities=80.","New ratio=120/80=1.50."],result:"Liquidity measured by current ratio appears worse even though cash increased.",takeaway:"When current ratio is above 1, equal increases to numerator and denominator reduce the ratio."}
      ]
    },
    "health/profitability": {
      prioritySource: "Financial Statement 2 tutorial; 2023 Analyzing Firm Performance",
      formulaKeys: ["Operating margin","Sales-to-assets"],
      moreExplanation: [
        "Profitability must be interpreted together with asset utilization. A high margin business can still produce modest return on assets if it requires a very large asset base.",
        "Operating ROA can be decomposed conceptually as operating margin × sales-to-assets, making clear whether performance comes from margin or turnover."
      ],
      examples: [
        {title:"Magic Flutes tutorial logic",scenario:"Receivables of $3,000 represent 20 days of sales; total assets=$75,000; operating margin=5%.",steps:["Daily sales=3,000/20=$150.","Annual sales≈150×365=$54,750.","Sales-to-assets≈54,750/75,000=0.73.","Operating ROA≈5%×0.73≈3.65%."],result:"Asset turnover ≈0.73×; operating ROA ≈3.65%.",takeaway:"A ratio chain can recover missing operating information from days-sales data."}
      ]
    },
    "health/asset-mgmt": {
      prioritySource: "Financial Statement 2 tutorial; 2023 Analyzing Firm Performance",
      formulaKeys: ["Inventory turnover","Average collection period","Sales-to-assets"],
      moreExplanation: [
        "Asset-management ratios connect income-statement flows to balance-sheet stocks. Because the numerator covers a period while the denominator is measured at a date, average balances are generally preferable when available.",
        "Higher turnover often signals efficiency, but excessively high turnover can also indicate insufficient inventory or overly tight credit policies. Interpretation requires operational context."
      ],
      examples: [
        {title:"Receivables days",scenario:"Average receivables are $400,000 and annual credit sales are $7.3 million.",steps:["Average daily credit sales=7.3m/365=$20,000.","ACP=400,000/20,000."],result:"Average collection period=20 days",takeaway:"Days ratios translate turnover into an intuitive operating timeline."}
      ]
    },
    "health/leverage": {
      prioritySource: "Financial Statement 2 tutorial; 2023 Analyzing Firm Performance",
      formulaKeys: ["Debt-to-equity"],
      moreExplanation: [
        "Leverage increases the proportion of assets financed by fixed contractual claims. It can magnify returns to equity when operating returns exceed financing cost, but it also increases financial distress exposure.",
        "Book-value and market-value leverage answer different questions. Tutorial-style discussion questions often reward stating the measurement choice and its limitation rather than presenting one ratio as universally correct."
      ],
      examples: [
        {title:"Debt-to-equity interpretation",scenario:"A firm has $280 long-term debt, $70 other liabilities, and $190 equity.",steps:["If the course defines debt narrowly as interest-bearing long-term debt, D/E=280/190=1.47.","If total liabilities are used, the ratio is different.","State the definition before comparing firms."],result:"The numerical ratio depends on the debt definition.",takeaway:"Consistency of measurement is essential in ratio comparison."}
      ]
    },
    "health/cash-cycle": {
      prioritySource: "Financial Statement 2 tutorial",
      formulaKeys: ["Cash conversion cycle"],
      moreExplanation: [
        "Cash-cycle management is a timing problem: shorten the time cash is tied in inventory and receivables, and—without damaging supplier relationships or losing valuable discounts—extend payment timing.",
        "A lower CCC generally releases financing capacity, but aggressively minimizing inventory or receivable days can hurt sales/service, while stretching payables can sacrifice discounts or supplier trust."
      ],
      examples: [
        {title:"Consultant proposal from the tutorial",scenario:"Collection time falls 20 days, inventory time rises 5 days, and the firm pays suppliers 15 days sooner.",steps:["ΔDSO=−20.","ΔDIO=+5.","Paying 15 days sooner means ΔDPO=−15.","ΔCCC=+5−20−(−15)=0."],result:"Cash conversion cycle is unchanged.",takeaway:"The proposal may still have operational benefits/costs, but it does not improve CCC from the stated timing changes alone."}
      ]
    }
  };

  const hktSources = [
    {name:"Hoàng Kim Thanh — Chapter 0: Introduction to Finance",type:"Priority study notes",coverage:"Finance definition; household/firm/government decisions; financial system; working capital; profit vs cash"},
    {name:"Hoàng Kim Thanh — Chapter 2.1: Time value of money",type:"Priority study notes",coverage:"TVM intuition; compounding; discounting; lump sums; annuities; practical numerical examples"},
    {name:"Hoàng Kim Thanh — Chapter 2: Time value and Money",type:"Priority study notes",coverage:"Expanded TVM applications and decision problems"},
    {name:"Hoàng Kim Thanh — Chapter 3: Financial markets",type:"Priority study notes",coverage:"Market structure; transaction costs; asymmetric information; intermediaries; instruments"},
    {name:"Hoàng Kim Thanh — Money market",type:"Priority study notes",coverage:"Money-market institutions, instruments, conventions and market mechanics"},
    {name:"Hoàng Kim Thanh — Comparison: Money market securities",type:"Priority study notes",coverage:"Comparison of money-market instruments and quotation conventions"},
    {name:"Hoàng Kim Thanh — Treasury bill auctions",type:"Priority study notes",coverage:"Competitive/noncompetitive bids; stop-out yields; Treasury auction mechanics"},
    {name:"Hoàng Kim Thanh — Chapter 4: Valuation of securities",type:"Priority study notes",coverage:"Required vs expected return; fair value; bonds; equity valuation; market efficiency"}
  ];
  const existing = new Set((D.sources || []).map(s => s.name));
  hktSources.forEach(s => { if (!existing.has(s.name)) D.sources.unshift(s); });
})();
