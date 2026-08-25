"use strict";

/* Direct, question-specific model answers for all 144 section self-checks. */
(() => {
  const D=window.FM_DATA;
  if(!D)return;
  D.sectionAnswers={
    "intro/what-is-finance":[
      "A larger future amount is not automatically better because the amounts occur at different dates and may carry different risk. Discount both to the same focal date using an opportunity-cost rate that matches the risk; only then is the comparison economically valid.",
      "For two equally safe one-year alternatives, 5% is the observable opportunity cost. Discounting at 3% overstates the present value of the alternative cash flow because it ignores the 5% return that can be earned elsewhere at comparable risk.",
      "A valuation issue is whether the present value of housing services and resale value exceeds the price and ownership costs. An implementation issue is whether the buyer can fund the deposit and monthly payments while preserving liquidity and meeting loan conditions."
    ],
    "intro/financial-decisions":[
      "No. A fee paid last year is a sunk cost: accepting or rejecting the project today cannot change it. It belongs in historical reporting, not in today's incremental project cash flows, unless some portion is refundable or affects a current tax cash flow.",
      "More debt creates fixed interest and principal claims ahead of equity. With the project's operating cash flows unchanged, a larger share of their variability is absorbed by the residual equity claim, so equity cash flows and required return become more volatile.",
      "Growth can increase receivables and inventory before customers pay. Suppliers, employees and lenders may require cash earlier, so profit and sales rise while the cash conversion cycle creates a temporary funding gap."
    ],
    "intro/real-financial-assets":[
      "A patent is a real asset because it is a productive resource that can generate goods, services or licensing cash flows. Physical form is irrelevant; a financial asset is instead a contractual claim against another party.",
      "The depositor records a financial asset: a claim to withdraw cash and receive any agreed interest. The bank records the same deposit as a liability because it owes those amounts to the depositor.",
      "Debt issuance is a financing cash flow that creates a repayment obligation; it does not arise from selling the project's output. Counting it as project revenue would confuse funding with operating benefit and could make a negative-NPV project appear attractive."
    ],
    "intro/financial-system":[
      "A payment system verifies instructions and transfers settlement balances so obligations can be discharged safely and quickly. That is an execution and settlement function, not a decision about whether a project creates value.",
      "A broker can merely match the investor with the issuer or current holder; the investor still owns the security directly. Finance becomes indirect when an intermediary issues its own claim to the saver and holds a different claim on the ultimate borrower.",
      "Maturity transformation is useful because an intermediary can fund long-term loans with claims that savers can access sooner. It is fragile because many short-term withdrawals can arrive before illiquid long-term assets can be sold or repaid, creating run and rollover risk."
    ],
    "intro/business-organization":[
      "No. The personal guarantee is a separate contractual promise by the shareholder. Limited liability protects the shareholder from ordinary corporate obligations, but it does not cancel liabilities the shareholder voluntarily guarantees.",
      "Transferability gives an investor an exit route without forcing the business to repay the capital immediately. That liquidity and easier price discovery reduce the investor's commitment cost and can broaden the pool of available funding.",
      "Administrative simplicity is usually more important for a one-person, low-risk consultancy that does not need outside equity. Public-market access has little current benefit but substantial legal, reporting and governance cost."
    ],
    "intro/agency-goal":[
      "Yes. A manager whose job, reputation or human capital is concentrated in the firm may reject positive-NPV risky projects to protect personal security, even when diversified shareholders would prefer the value-increasing investment.",
      "The cut raises current accounting profit by postponing expense, but it may cause breakdowns, lost sales, safety costs and lower future cash flows. Firm value falls if the present value of those future losses exceeds the cash saved today.",
      "A revenue-only bonus rewards volume without charging for margin, credit risk or capital employed. Managers may discount excessively, sell to weak customers, overinvest in inventory or accept negative-NPV business simply to raise reported sales."
    ],
    "tvm/timeline":[
      "If t=0 is immediately after a payment, the next monthly payment is at t=1, one full month later. The after-payment balance at t=0 equals the present value of payments from t=1 onward.",
      "From the bank's perspective, the VND 100 million loan disbursement is a negative cash flow at t=0. Each installment received later is positive. The borrower would use the exact opposite signs.",
      "Use the monthly periodic rate r=12%/12=1% and n=3×12=36 monthly periods. The rate period, payment interval and timeline tick all match."
    ],
    "tvm/lump-sum":[
      "After two periods, FV=PV(1+r)^2=PV(1+2r+r²). The r² term is interest earned on the first period's interest; that is the interest-on-interest component.",
      "PV falls. At a positive rate, moving the same future amount farther away increases the discount exponent, lowers the discount factor and therefore reduces today's equivalent value.",
      "That expression calculates an arithmetic average growth rate, not the constant rate that compounds from PV to FV. CAGR must satisfy FV=PV(1+r)^n, so r=(FV/PV)^(1/n)−1."
    ],
    "tvm/multiple-cashflows":[
      "No. Each cash flow must be discounted for its own distance from the focal date: a year-1 cash flow uses exponent 1 and a year-4 cash flow uses exponent 4 when valuing at t=0.",
      "Retirement day is the natural focal date. Compound every pre-retirement contribution forward to that date, or value the withdrawal need at that same date, so all amounts are directly comparable.",
      "Value the five equal payments as an ordinary annuity, then add one extra payment discounted from the third payment date. The doubled third cash flow equals the regular annuity payment plus that extra amount."
    ],
    "tvm/annuities":[
      "Five payments remain after today. The payment at t=0 is handled separately, and the remaining ordinary-annuity stream occurs at t=1 through t=5.",
      "Every annuity-due payment occurs one period earlier than the matching ordinary-annuity payment. At r>0, earlier cash flows have higher present value, so PV(due)=PV(ordinary)×(1+r).",
      "The ordinary-annuity formula initially gives value one period before the first payment. If the first payment is at t=5, the annuity value is located at t=4 and must then be discounted to any earlier focal date."
    ],
    "tvm/perpetuity-growth":[
      "C/r increases without bound as r approaches zero from above. A nearly zero discount rate assigns very large present value to an infinite stream because distant payments are barely discounted.",
      "When g≥r, cash flows do not shrink in present-value terms, so the infinite sum does not converge under the constant-growth model. The denominator r−g is zero or negative, signalling that the assumptions are not a stable valuation state.",
      "Place the Gordon terminal value at t=5, one period before D6, the first dividend in the stable-growth phase. Compute P5=D6/(r−g), then discount P5 back to the valuation date."
    ],
    "tvm/apr-ear":[
      "No. APR is a nominal quote while EAR includes intra-year compounding. Convert the APR to EAR: (1+0.12/12)^12−1, then compare the two effective annual rates.",
      "The consistent monthly effective rate is (1.08)^(1/12)−1, approximately 0.6434% per month. Dividing 8% by 12 would not exactly reproduce 8% annual growth.",
      "There are six monthly compounding periods in one semiannual payment interval. Either compound the monthly rate for six months or convert it to an effective six-month rate before valuing the payment stream."
    ],
    "tvm/loans":[
      "The payment is level, but interest each period equals rate×opening balance. As the balance declines, interest falls, so the fixed payment leaves a larger remainder to reduce principal.",
      "There are 360−20=340 payments remaining immediately after payment 20. The outstanding balance at that point is the present value of those 340 payments using the periodic loan rate.",
      "Yes. Extending the term spreads principal over more payments and lowers each payment, but interest accrues over many more periods. The total interest can therefore be higher even when the periodic burden is lower."
    ],
    "tvm/npv-irr":[
      "A t=0 cash flow already occurs at the valuation date, so its discount factor is 1/(1+r)^0=1. Discounting it again would move it to an earlier date that the problem did not choose.",
      "For an investment, a higher IRR than the required return creates value because inflows are earned on an initial outflow. For borrowing, the IRR is the financing cost, so a lower borrowing IRR is preferable and acceptance comparisons reverse.",
      "At most two positive IRRs. Descartes' rule of signs sets the maximum number of positive roots equal to the number of cash-flow sign changes, though fewer positive IRRs may actually exist."
    ],
    "markets/market-map":[
      "It is a primary-market transaction because the bond is newly issued, a capital-market instrument because original maturity is ten years, and a debt security because it promises contractual interest and principal payments.",
      "Secondary prices reveal the return investors require and the price at which comparable claims trade. If outstanding bonds fall, a future primary issue usually needs a higher yield or lower issue price, raising the issuer's funding cost.",
      "No. Classification uses the instrument's original economic maturity, not one investor's holding plan. Common stock has no contractual maturity and belongs to the capital market even if sold after one month."
    ],
    "markets/transaction-costs":[
      "A pre-contract cost is searching for counterparties or verifying information before agreement. A post-contract cost is monitoring compliance, collecting payments, enforcing collateral or resolving disputes after the contract is signed.",
      "The fund pools many investors, pays research, trading and custody costs once at scale, and divides those fixed costs across a larger asset base. One small investor would face high per-security commissions, spreads and monitoring effort.",
      "Standard clauses reduce the time and legal work needed to negotiate recurring issues such as payment dates, collateral, default and remedies. Parties then negotiate only case-specific risks, lowering drafting and comparison cost."
    ],
    "markets/asymmetric-info":[
      "No. If both sides have the same information and the same uncertainty, the problem is risk rather than asymmetric information. Asymmetry requires one side to possess relevant information the other side does not.",
      "Credit scoring mainly targets the pre-contract screening stage and adverse selection. It estimates borrower risk before approval, although updated scores can also support later monitoring.",
      "Once the research is publicly revealed, non-payers can trade on it too. Because the information becomes non-excludable, the researcher may not capture enough private benefit to cover the cost of producing it."
    ],
    "markets/lemons":[
      "High-quality sellers suffer the largest loss when all assets receive an average price because their true value lies farthest above that price. They exit first, lowering average quality and pushing the pooled price down again.",
      "A higher offered rate may signal hidden risk and can encourage risky projects after lending. Beyond some point, the extra promised interest does not compensate for a lower probability of repayment, so the lender rations credit instead.",
      "A promise anyone can make at almost no cost does not separate high quality from low quality. Auditing, warranties, collateral or reputation are stronger because false claims become costly to the low-quality seller."
    ],
    "markets/moral-hazard":[
      "Limited liability caps owners' downside while preserving much of the upside. After borrowing, owners may prefer a riskier project because creditors absorb part of the loss if it fails, while owners gain if it succeeds.",
      "Debt can reduce free cash flow and force managers to justify spending, limiting waste. But once debt exists, shareholders may prefer high-risk projects that transfer value from creditors to equity through risk shifting.",
      "A rigid covenant can block a sensible action when circumstances change. A waiver process lets the lender evaluate the exception, price or condition it, and preserve flexibility without abandoning creditor protection."
    ],
    "markets/intermediaries":[
      "The original saver holds a claim issued by the bank, while the bank originates and holds the borrower's claim. Later securitization changes who ultimately holds the loan but does not make the initial bank-mediated funding transaction direct finance.",
      "Bank loans can be solvent in the long run yet illiquid today. If many depositors demand cash simultaneously, the bank may be forced to sell long-term assets quickly at losses, creating a run even when most borrowers will eventually repay.",
      "It would duplicate screening, contracting and monitoring thousands of times, creating enormous information and coordination cost. Depositors would also struggle to diversify and to enforce many small claims."
    ],
    "markets/money-instruments":[
      "A negotiable certificate of deposit is the bank deposit instrument. A banker's acceptance is a trade draft accepted or guaranteed by a bank, making the bank responsible for payment at maturity.",
      "The haircut requires collateral value to exceed the cash lent. If collateral prices fall or the borrower defaults, that excess value gives the cash lender a buffer against sale costs and market loss.",
      "Liquidity also depends on issue size, dealer support, credit quality, standardization, investor base, information transparency and trading infrastructure. Equal maturity alone does not create equal ease or cost of resale."
    ],
    "markets/money-yields":[
      "The bond-equivalent or investment yield uses the actual amount invested—the purchase price—in the denominator. A bank-discount yield instead divides the discount by face value.",
      "The yield based on the higher ask price is lower because the buyer pays more for the same maturity cash flow. Thus ask yield is normally below bid yield.",
      "Simple annualization ignores earnings on reinvested interim gains. With a positive holding-period return and more than one period per year, compounding makes (1+HPR)^m−1 exceed m×HPR."
    ],
    "valuation/valuation-principle":[
      "Value falls. The same forecast cash flows are divided by larger discount factors, reflecting a higher opportunity cost or required compensation for risk.",
      "Use the current market-required return for cash flows of comparable timing and risk. The coupon rate determines promised coupon cash flows; it is not automatically the correct discount rate.",
      "Transaction costs, taxes, bid–ask spread, estimation error and model risk may exceed the 1% apparent mispricing. A trade is attractive only when expected benefit remains positive after those frictions and a margin of safety."
    ],
    "valuation/zero-bond":[
      "Normally no. With a positive yield and a single face-value payment, price=Face/(1+y)^n must be below face. A price above face would require a negative yield or another special cash-flow feature.",
      "Four dated components: three annual coupon payments plus the face-value repayment on the third coupon date. The final date contains both a coupon and principal, but they are economically distinct cash-flow components.",
      "Before maturity, its market price changes when required yields change. Selling after yields rise can produce a capital loss even though default never occurs and the bond would pay face value at maturity."
    ],
    "valuation/coupon-bond":[
      "The holder receives both the final coupon and repayment of face value on the maturity date. They occur together but should be included as two components in the valuation.",
      "Below par. The bond's 4% coupon payments are less attractive than the 6% return required in the market, so price must fall until the total promised cash flows provide the required yield.",
      "The quoted clean price excludes interest accrued since the last coupon. Settlement uses the dirty price—clean price plus accrued interest—because the seller earned the accrued portion of the next coupon."
    ],
    "valuation/ytm-return":[
      "YTM is the rate y that solves Price=Σ[C/(1+y)^t]+Face/(1+y)^n for all promised coupon and principal cash flows at their dates.",
      "No. Holding to maturity removes uncertainty about the maturity sale price for a default-free bond, but coupons received before maturity may be reinvested at rates different from the original YTM.",
      "YTM is generally above current yield for a discount bond because YTM includes both coupon income and the capital gain as price moves toward par, while current yield includes only coupon divided by price."
    ],
    "valuation/bond-risk":[
      "The old bond's fixed 4% coupons are below the 6% return now available on comparable bonds. Its price must fall so the discounted value of its fixed cash flows yields about 6% to a new buyer.",
      "The 2% coupon bond is generally more rate-sensitive because more of its value arrives in the distant principal payment. Its duration is higher than that of the otherwise comparable 8% coupon bond.",
      "Corporate spreads can change because of issuer credit quality, liquidity, sector conditions, optionality or covenant differences even when Treasury yields do not move. Different duration and convexity also create different price responses."
    ],
    "valuation/stock-ddm":[
      "Its value reflects expected future cash ultimately distributable to shareholders. Current earnings may be reinvested now to create larger dividends, buybacks or liquidation value later; zero dividends today do not imply zero lifetime distributions.",
      "Model value rises without bound as g approaches r from below because r−g approaches zero. That extreme sensitivity warns that the stable-growth assumptions are no longer economically credible.",
      "Place P5 at t=5, immediately before D6, the first stable-growth dividend. Compute P5=D6/(r−g) and discount P5 along with explicit dividends to today."
    ],
    "valuation/preferred-perpetuity":[
      "The fixed, indefinite dividend stream resembles a perpetuity for valuation. But preferred dividends are corporate distributions, not contractual interest; omission may not be legal default, and preferred holders remain equity claimants behind creditors.",
      "Accumulated preferred arrears must be satisfied first before common dividends can be paid. Cumulative status preserves the preferred distribution priority across omitted periods.",
      "The call feature caps upside. When yields fall and the preferred's price would otherwise rise strongly, the issuer can redeem at the call price, so investors cannot fully capture the perpetuity's price appreciation."
    ],
    "personal/personal-balance":[
      "Yes. A household can own valuable property, retirement accounts or a private business yet hold little cash and have large near-term bills. Net worth measures solvency at a date; liquidity measures ability to meet upcoming cash needs.",
      "Purchase price is historical and may differ greatly from what the asset can be sold for today after selling costs, taxes and restrictions. Usable wealth should be based on realistic current net proceeds, not sunk cost.",
      "Salary saving is usually more repeatable because it comes from recurring income and controlled spending. An unrealized one-time gain may reverse and does not provide cash unless the asset is sold."
    ],
    "personal/saving-goals":[
      "The four-year nominal target is 500×(1.05)^4≈607.75 in the same currency units. That inflated target belongs at t=4; savings contributions are then accumulated or discounted relative to that date.",
      "Each deposit earns one additional month of return. Moving the whole stream earlier converts an ordinary annuity toward an annuity due, multiplying its future value by one extra monthly growth factor.",
      "No. A payment due next month requires capital preservation and high liquidity. Depending on a volatile equity rebound creates horizon mismatch and an unacceptable chance that funds are unavailable when tuition is due."
    ],
    "personal/borrowing-credit":[
      "No. The borrower receives face amount minus the fee, although interest or repayment may still be calculated on the face amount. The effective borrowing cost must use actual net proceeds received.",
      "Total payments ignores when each payment occurs and how much cash the borrower actually received. Compare complete cash flows with an effective rate or present value, while also considering fees, flexibility and risk.",
      "The payment rises because the same remaining principal must be amortized over the unchanged number of periods at a higher periodic rate. If payment were fixed instead, maturity or residual balance would have to change."
    ],
    "personal/buy-lease":[
      "The purchase alternative receives the resale or salvage-value inflow at the comparison date because the buyer owns the asset. A lease includes such value only if the contract grants purchase or sale rights that are explicitly priced.",
      "A lease transfers some residual-value and horizon risk to the lessor and can reduce the cost of exiting early. That flexibility is valuable when the user may relocate, change needs or stop using the asset.",
      "Hold constant the service horizon, usage, asset quality, maintenance responsibility, taxes, timing and comparison date. Only then can present value or equivalent periodic cost support a fair cheaper-versus-costlier conclusion."
    ],
    "personal/insurance-risk":[
      "Catastrophic house loss is low-frequency but could destroy household wealth, so transferring it protects consumption and solvency. A small repair is affordable, frequent and costly to insure once administration, profit and moral hazard are included.",
      "The policyholder retains the loss above the coverage limit, plus any deductible, exclusions or coinsurance. That tail exposure must be compared with available emergency wealth and supplemental coverage.",
      "A deductible makes the insured bear the first part of a loss, preserving an incentive to prevent small losses and avoid unnecessary claims. It also lowers claim-processing cost and reduces the insurer's expected payout."
    ],
    "personal/retirement":[
      "The PV of withdrawals is located one period before the first retirement withdrawal. If the first withdrawal is on the retirement date, treat it separately or value the remaining stream from that date using annuity-due logic.",
      "No. They form a growing nominal annuity because the currency amount rises with inflation. They are level only in real purchasing-power terms, so use real cash flows with a real rate or nominal growing cash flows with a nominal rate.",
      "Withdrawals make losses early in retirement especially damaging because assets are sold after declines and cannot participate in recovery. Different return sequences can therefore produce different ending wealth despite the same arithmetic average return."
    ],
    "risk/risk-return":[
      "Stock holding-period return contains income return from dividends and capital-gain return from the change in price: HPR=(P1−P0+D1)/P0.",
      "No. Standard deviation measures variability of returns, not market liquidity. An asset can have stable reported prices yet be difficult or costly to sell quickly because of thin trading or wide spreads.",
      "Expected return is a probability-weighted forward-looking mean, not a promise. One realized period can fall below zero because an unfavorable state occurred even when the ex ante expected return was positive."
    ],
    "risk/probability":[
      "Yes. With 50% probability on 0% and 50% on 20%, expected return is 10%. An expectation is a probability-weighted average and need not be an outcome that can actually occur.",
      "Double counting. Mutually overlapping states violate the requirement that states be mutually exclusive, so total probability and expected return are distorted. Define a joint state structure or conditional probabilities instead.",
      "The probability p attached to the success return changes first. The return outcomes may stay the same; new evidence updates their weights through conditional probability."
    ],
    "risk/variance-sd":[
      "Signed deviations always sum to zero around the arithmetic mean, so their average cannot measure dispersion. Squaring prevents cancellation and gives more weight to larger deviations; standard deviation then restores the original return unit.",
      "CV=σ/E(R) becomes extremely large, sign-sensitive or undefined as expected return approaches zero. Small estimation changes in the denominator can therefore reverse or explode the ratio.",
      "Not necessarily. Standard deviation treats upside and downside deviations symmetrically, but many investors dislike negative surprises more than equally large positive surprises. Downside measures may better reflect that preference."
    ],
    "risk/risk-aversion":[
      "Risk aversion is sensitive to stakes and consequences. A catastrophic home loss threatens essential wealth and consumption, while small investment volatility may be affordable, diversified and compensated by expected return.",
      "For a risk-neutral person, certainty equivalent equals expected value, so the risk premium is zero. Only the probability-weighted payoff matters, not dispersion around it.",
      "No. Capacity and horizon constrain willingness. Money needed for next month's tuition cannot tolerate a large short-term loss even if a questionnaire indicates high general risk tolerance."
    ],
    "risk/diversification":[
      "No. Fifty firms in one narrow industry may share demand, regulation, input prices and technology shocks, so their returns can remain highly correlated. Number of holdings is not a substitute for low co-movement.",
      "A recession is usually systematic because it affects many firms and households together and cannot be diversified away within the broad market. Firm-specific events are idiosyncratic.",
      "If the stock earns foreign-currency revenue and the bond is denominated in the same foreign currency, both can fall in domestic-currency value when that currency weakens. The hidden common factor creates correlation."
    ],
    "risk/insurance-info":[
      "A nationwide disaster creates highly correlated losses at the same time, so pooling does not average them out and the insurer needs very large capital or reinsurance. Independent accidents are more predictable in aggregate by the law of large numbers.",
      "A higher premium causes safer customers to leave first because coverage is less valuable to them. The remaining pool becomes riskier, forcing another premium increase and potentially repeating the cycle.",
      "Full reimbursement weakens prevention and encourages frequent low-value claims. Beyond claim amounts, the insurer bears verification, processing and fraud-control costs, which can exceed the value of transferring small losses."
    ],
    "health/statements":[
      "The statement of cash flows explains the change in cash by operating, investing and financing activities and reconciles opening cash to closing cash.",
      "Cash is lower than it would be if customers had paid. Under the indirect cash-flow method, an increase in receivables is subtracted from net income because recognized revenue has not yet produced cash.",
      "Market capitalization reflects investors' expectations of future cash flows and unrecorded intangibles. Book equity records historical recognized transactions under accounting rules, so valuable brand, network or growth options may be absent or understated."
    ],
    "health/common-size":[
      "Use net sales or revenue as the base. Common-size COGS equals COGS divided by sales, expressed as a percentage.",
      "A single percentage has no benchmark or trend. Compare prior years, peers, seasonality, sales growth, write-downs and turnover to distinguish planned inventory from overstocking.",
      "An acquisition can add assets and revenue for only part of the year, create goodwill, change consolidation scope and introduce purchase-price measurement. Those effects can move percentages even without comparable organic change."
    ],
    "health/liquidity":[
      "The current ratio includes inventory and other less-liquid current assets; the quick ratio excludes them. Two firms can have the same current ratio while one depends heavily on slow or obsolete inventory.",
      "CA rises to 120 and CL rises to 70, so the current ratio falls from 2.00 to 120/70≈1.71. Adding equal amounts to numerator and denominator lowers a ratio that begins above 1.",
      "No. The assets may be slow, restricted or uncollectible while tomorrow's obligation requires immediately available cash. Ratios are snapshots and do not replace a dated cash forecast."
    ],
    "health/profitability":[
      "Net profit margin is most directly affected because interest expense is deducted after operating profit. Gross and operating margins generally exclude capital-structure interest under standard presentation.",
      "Yes. ROA can be decomposed into profit margin×asset turnover. If the proportional turnover increase more than offsets the margin decline, the product—and therefore ROA—improves.",
      "Yes. Debt-funded repurchase reduces equity and may mechanically raise ROE, while interest and financial risk rise. Operations may be unchanged, so analyze margins, asset efficiency, cash flow and leverage alongside ROE."
    ],
    "health/asset-mgmt":[
      "A seasonal ending date may capture an unusually high or low inventory level and misstate resources used across the year. Average or monthly balances better match the period's COGS.",
      "Falling receivables turnover means collection is slower or credit sales have grown faster than receivables are converted to cash. It may indicate looser credit, customer stress, disputes or weak collection.",
      "The firm may be carrying too little safety stock, causing stockouts, lost sales, emergency shipping and lower service quality. Higher turnover is valuable only if availability and margin remain acceptable."
    ],
    "health/leverage":[
      "Debt holders receive fixed promised payments, leaving equity with the residual operating cash flow. With the asset risk unchanged, fixed debt claims amplify percentage gains and losses borne by the smaller equity base.",
      "Market D/E uses equity market value in the denominator. A higher share price increases that denominator, so the ratio falls even though the debt amount has not changed.",
      "You need earnings and cash-flow stability, interest and principal schedules, coverage ratios, liquidity, covenant headroom, asset quality, maturity concentration and stress scenarios. D/E alone does not show whether payments can be made."
    ],
    "health/cash-cycle":[
      "CCC=DIO+DSO−DPO. A higher DPO means the firm pays suppliers later, so cash remains available longer and fewer days of the operating cycle need company financing.",
      "Yes. The cycle still ties up roughly 30 days of a much larger sales and cost base. Funding need can rise substantially in currency terms even though the number of days is unchanged.",
      "Yes. Paying early lowers DPO and lengthens CCC, but the discount return may exceed the financing cost and operational value of retaining cash. Maximize value, not the CCC metric in isolation."
    ]
  };
  D.sectionAnswerCount=Object.values(D.sectionAnswers).reduce((sum,answers)=>sum+answers.length,0);
  D.sectionSelfCheckCount=D.sectionAnswerCount;
  D.version="3.0";
})();
