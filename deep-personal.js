"use strict";
(() => {
  const H=window.FM_DEEP;if(!H)return;const {S,P,E,R,T,register}=H;
  register({
    "personal/personal-balance":{
      deepDive:[
        S("Stock versus flow","A balance sheet is a snapshot",["Personal net worth equals assets minus liabilities at one date. Income and expenses are flows over a period; cash balance and debt are stocks at a date. Mixing these measures creates false conclusions.","Liquidity and net worth are also different. A household may have positive net worth concentrated in a home but insufficient cash for a near-term bill."],[],"Can a household have high net worth and low liquidity at the same time?"),
        S("Economic value","Use realistic values and obligations",["For planning, assets should be measured at realistic current values and debts at payoff amounts, including obligations that are easy to overlook. Future earning capacity matters to decisions but is not normally entered as a tradeable balance-sheet asset.","Classify assets by liquidity and purpose: emergency cash, short-term goal assets, long-term investments and personal-use property."],[],"Why is original purchase price often a poor measure of today's usable wealth?"),
        S("Diagnosis","Change in net worth needs explanation",["Net worth rises through saving, debt repayment and asset gains; it falls through dissaving, new debt and asset losses. A rising figure is not automatically healthy if it comes from volatile asset appreciation while liquid reserves shrink.","Pair the balance sheet with a cash-flow budget and stress scenarios."],[],"Which is more repeatable: salary saving or an unrealized one-time asset gain?")
      ],
      timelines:[T("Household financial-position review","Organize obligations by when cash may be needed.",[
        R("Now",[E("Today","Cash and near-cash","Emergency liquidity","inflow"),E("Today","Current bills","Immediate obligations","outflow")]),
        R("Next 12 months",[E("Months 1–12","Income and living costs","Budget flows","focal"),E("Months 1–12","Debt installments","Contractual outflows","outflow")]),
        R("Long term",[E("Years","Investments and property","Long-horizon assets","inflow"),E("Years","Mortgage / long debt","Long-horizon liabilities","outflow")])
      ],"Net worth is the snapshot; the rows explain whether the household can survive the timing of cash needs.","Household perspective")],
      termsExtra:[["Net worth","Giá trị tài sản ròng"],["Liquidity reserve","Dự phòng thanh khoản"],["Payoff amount","Số tiền tất toán"]],
      guidedPractice:[
        P("Easy","Compute net worth","Cash 50, investments 200, home 1,500; credit-card debt 30 and mortgage 900. Find net worth.","Add assets, add liabilities, subtract.",["Assets=50+200+1,500=1,750.","Liabilities=30+900=930.","Net worth=1,750−930."],"Net worth = 820 (same units).","Net worth is a stock measured at one date."),
        P("Intermediate","Liquidity diagnosis","Using the household above, a 100 emergency bill arrives. Explain why positive net worth is not enough.","Identify assets available without costly sale or new borrowing.",["Cash is only 50.","Investments may be saleable but can fluctuate or carry transaction/tax effects.","The home is valuable but not immediately spendable.","A separate liquidity reserve is required."],"The household has positive net worth but an immediate 50 cash shortfall.","Solvency and liquidity answer different questions."),
        P("Advanced","Explain a change","Net worth rises by 120: saving contributed 30, debt repayment 20 and market gains 70. Evaluate quality of improvement.","Separate controllable recurring sources from volatile valuation changes.",["Saving and debt repayment contribute 50 through repeatable behavior.","Market gains contribute 70 but can reverse.","Planning should not treat all 120 as permanent spendable income."],"Improvement is real, but 58.3% came from volatile gains.","Source decomposition makes a headline net-worth change meaningful.")
      ]
    },
    "personal/saving-goals":{
      deepDive:[
        S("Goal architecture","Define amount, date and certainty",["A useful savings goal specifies a target amount at a target date, the starting balance, contribution timing, expected return and tolerance for shortfall. Inflation may require converting today's target into future nominal currency first.","The target date is the natural focal date: compound existing funds and contributions to that date, then solve the remaining gap."],[],"If tuition costs 500 today and inflation is 5%, what target belongs on a four-year timeline?"),
        S("Contribution timing","Earlier money works longer",["Beginning-of-period contributions form an annuity due and earn one extra period compared with end-of-period contributions. Increasing contribution rate can be more controllable than chasing a higher return.","For irregular bonuses, value regular monthly savings as an annuity and add each bonus separately."],[],"Why does moving every deposit one month earlier raise FV?"),
        S("Risk matching","Return assumption must fit the horizon",["A long horizon can tolerate more short-term volatility if the saver has capacity and willingness to bear risk. A near-term mandatory goal needs more stable assets because there is less time to recover from loss.","Do not use an optimistic risky expected return as if it were guaranteed. Stress test lower returns and missed contributions."],[],"Should a tuition payment due next month depend on a volatile equity rebound?")
      ],
      timelines:[T("Five-year savings plan","Deposits occur at each year-end and accumulate to the goal date.",[
        R("Start and early deposits",[E("t = 0","Existing balance","Compounds five years","inflow"),E("t = 1","+ PMT","First saving deposit","inflow"),E("t = 2","+ PMT","Second deposit","inflow")]),
        R("Later deposits",[E("t = 3","+ PMT","Third deposit","inflow"),E("t = 4","+ PMT","Fourth deposit","inflow"),E("t = 5","+ PMT and target","Final deposit at goal date","focal")])
      ],"At t=5, existing balance FV plus annuity FV must equal the target.","Saver perspective")],
      formulaKeys:["Future value","FV ordinary annuity","Annuity due","Periodic rate from EAR"],
      termsExtra:[["Funding gap","Khoảng thiếu hụt cần tích lũy"],["Target-date value","Giá trị tại ngày mục tiêu"],["Stress test","Kiểm tra sức chịu đựng kịch bản"]],
      guidedPractice:[
        P("Easy","Future goal from lump sum","Deposit 20,000 today at 6% for 5 years. Find future value.","Use lump-sum FV.",["FV=20,000(1.06)^5."],"FV ≈ 26,764.51.","The whole deposit compounds for five years."),
        P("Intermediate","Required annual saving","Need 100,000 in 5 years; save at each year-end; return 7%. Find annual deposit with no starting balance.","Divide target by the FV annuity factor.",["FV factor=[(1.07)^5−1]/0.07≈5.75074.","PMT=100,000/5.75074."],"PMT ≈ 17,389.07 per year.","The last deposit earns no interest before the target date."),
        P("Advanced","Inflation-adjusted target","A goal costs 300,000 today and will be paid in 8 years. Inflation is 4%; savings return is 7% EAR. You already have 80,000. Find the year-end annual contribution.","First inflate the target, then subtract the existing balance's FV at t=8.",["Future target=300,000(1.04)^8≈410,570.72.","Existing balance FV=80,000(1.07)^8≈137,454.89.","Gap≈273,115.83.","FV annuity factor at 7% for 8 years≈10.2598; PMT=gap/factor."],"PMT ≈ 26,620 per year.","Inflation sets the future goal; investment return funds it.")
      ]
    },
    "personal/borrowing-credit":{
      deepDive:[
        S("True borrowing cost","Collect every borrower cash flow",["The amount financed may differ from the price because of down payment, fees, insurance or withheld charges. The effective cost is the IRR of cash actually received versus all required payments.","A headline 'flat rate' applied to original principal can understate the effective rate when principal is repaid throughout the loan."],[],"If a fee is deducted before disbursement, does the borrower receive the face amount?"),
        S("Affordability versus cost","A smaller payment can hide a longer obligation",["Affordability asks whether payments fit the cash budget under stress. Cost asks the present value or effective annual rate of all payments. A longer term often improves the first while worsening the second.","Compare alternatives using the same financed amount and the same focal date, then separately test the payment against a realistic income buffer."],[],"Why is total payments alone also an incomplete cost measure?"),
        S("Credit risk","Contract flexibility has value",["Variable rates, late fees, prepayment penalties, collateral and cross-default terms change risk even when initial APR is similar. Borrowing reduces future flexibility because promised payments take priority over discretionary spending.","Stress test income loss and rate increases before choosing the maximum affordable payment."],[],"What happens to a variable-rate loan's payment when periodic rate rises and term is unchanged?")
      ],
      timelines:[T("Borrower cash-flow package","Include fees and down payment instead of looking only at installments.",[
        R("Purchase date",[E("t = 0","+ Net loan proceeds","Amount actually available","inflow"),E("t = 0","− Down payment / fees","Immediate cash cost","outflow")]),
        R("Repayment stage",[E("Month 1","− PMT","First installment","outflow"),E("Months 2…n−1","− PMT","Repeated obligation","outflow"),E("Month n","− PMT / balloon","Final contractual cash flow","outflow")])
      ],"The effective rate is the rate that equates net proceeds with the PV of every borrower payment.","Borrower perspective")],
      formulaKeys:["Loan payment","EAR from APR","Periodic rate from APR","Outstanding loan balance"],
      termsExtra:[["Net proceeds","Số tiền thực nhận"],["Flat rate","Lãi suất phẳng"],["Prepayment penalty","Phí trả nợ trước hạn"]],
      guidedPractice:[
        P("Easy","Total payment check","Borrow 24,000 and repay 1,100 monthly for 24 months. Find total payments and nominal finance charge before TVM adjustment.","Multiply payment by count, then subtract principal.",["Total payments=1,100×24=26,400.","Nominal finance charge=26,400−24,000."],"Total payments 26,400; finance charge 2,400.","This is a screening calculation, not the effective interest rate."),
        P("Intermediate","Fee changes cost","A 12,000 stated loan deducts a 300 fee and requires 12 monthly payments of 1,050. What amount should be used as borrower PV when solving the rate?", "Use cash actually received.",["Net cash received=12,000−300=11,700.","Payments remain 1,050 for 12 months.","Solve 11,700=1,050×PV annuity factor at monthly IRR."],"Use PV=11,700, not 12,000; monthly IRR is about 1.158% and EAR about 14.81%.","Fees reduce proceeds and therefore raise effective borrowing cost."),
        P("Advanced","Term trade-off","Compare a 100,000 loan at 8% APR monthly for 3 years versus 5 years. Explain payment and total interest effects.","Compute PMT for n=36 and n=60 at r=0.08/12.",["3-year PMT≈3,133.64; total≈112,811; interest≈12,811.","5-year PMT≈2,027.64; total≈121,658; interest≈21,658.","The longer term cuts payment but keeps principal outstanding longer."],"Five years improves monthly affordability but increases total interest by about 8,847.","Cost and affordability should be reported separately.")
      ]
    },
    "personal/buy-lease":{
      deepDive:[
        S("Comparable cash flows","Compare the same service horizon",["Buying, financing and leasing must be compared over a common period and with consistent treatment of deposits, taxes, maintenance, insurance and resale value. A lease payment alone is not directly comparable with a loan payment because ownership and terminal value differ.","Use incremental after-decision cash flows from the household's perspective."],[],"Which alternative receives a resale-value inflow at the comparison date?"),
        S("Residual value and options","Uncertainty can change the preferred contract",["Ownership exposes the household to resale-value risk but also gives upside and flexibility. A lease may transfer some residual-value risk to the lessor while imposing mileage, condition or early-termination limits.","Contract options have value. A lease purchase option should be evaluated as a future choice, not automatically added as a required payment."],[],"Why might a lease be valuable to someone uncertain about how long the asset is needed?"),
        S("Decision rule","Use equivalent cost, then add nonfinancial constraints",["Discount each alternative's cash flows to today or convert them to equivalent periodic cost. The lower cost is financially preferred if service quality and risk are comparable.","Then consider liquidity, usage limits, maintenance responsibility and flexibility. Finance informs the choice but does not erase preferences."],[],"What must be held constant before saying one option is cheaper?")
      ],
      timelines:[T("Three-year buy-versus-lease comparison","Place all cash flows and terminal effects on the same dates.",[
        R("At signing",[E("t = 0","Buy: down payment + fees","Immediate ownership cost","outflow"),E("t = 0","Lease: deposit + first payment","Check refundable portion","outflow")]),
        R("During use",[E("Months 1–36","Buy: loan + owner costs","Insurance and maintenance differences","outflow"),E("Months 1–36","Lease: rent + contract charges","Apply exact payment timing","outflow")]),
        R("End of year 3",[E("t = 3","Buy: + resale value","Net of selling costs","inflow"),E("t = 3","Lease: return / option","Include penalties or refund","focal")])
      ],"Discount both columns to t=0; do not omit the buyer's residual value or lease-end charges.","Household perspective")],
      formulaKeys:["Present value","PV ordinary annuity","Loan payment","NPV"],
      termsExtra:[["Residual value","Giá trị còn lại"],["Equivalent annual cost","Chi phí thường niên tương đương"],["Early-termination charge","Phí chấm dứt sớm"]],
      guidedPractice:[
        P("Easy","Identify terminal cash flow","A purchased car is expected to sell for 200 at year 3. How is this entered on the buyer timeline?", "It is cash received by the owner at the comparison date.",["Place +200 at t=3.","Discount it to t=0 if comparing present costs.","Subtract its PV from ownership costs."],"A positive t=3 inflow that reduces net ownership cost.","Residual value is part of the economic package."),
        P("Intermediate","PV of lease","Lease requires 5,000 today and 1,000 at each month-end for 24 months. Monthly discount rate is 0.5%. Find PV cost.","Immediate payment is not discounted; installments form an ordinary annuity.",["PV installments=1,000[1−(1.005)^−24]/0.005≈22,562.87.","Add immediate 5,000."],"PV cost ≈ 27,562.87.","Separate t=0 cash from end-of-month payments."),
        P("Advanced","Ownership PV cost","Buy for 60,000 today, spend 4,000 at end of each year for 3 years, and sell for 25,000 at end of year 3. r=7%. Find PV net cost.","Costs are positive in a cost comparison; subtract PV of resale.",["PV operating costs=4,000×[1−(1.07)^−3]/0.07≈10,497.26.","PV resale=25,000/(1.07)^3≈20,407.45.","PV net cost=60,000+10,497.26−20,407.45."],"PV net cost ≈ 50,089.81.","A complete comparison includes recurring costs and terminal value.")
      ]
    },
    "personal/insurance-risk":{
      deepDive:[
        S("Risk transfer","Insurance exchanges uncertain loss for certain premium",["Insurance is most valuable for losses that are severe relative to household wealth and reasonably insurable. The premium includes expected claims, expenses, capital cost and profit; buying insurance is not expected to generate wealth.","The benefit is smoothing consumption and protecting solvency in bad states."],[],"Why insure a house against catastrophe but often self-insure a small repair?"),
        S("Deductible and limit","Coverage design shares the loss",["A deductible keeps the first layer of loss with the household and usually reduces premium. A policy limit caps insurer payment and leaves tail risk with the household. Coinsurance shares a percentage.","Choose these terms by modeling the loss that the emergency fund can absorb without disrupting essential goals."],[],"What risk remains when loss exceeds the policy limit?"),
        S("Information problems","Adverse selection and moral hazard affect price",["People with higher hidden risk may be more likely to buy coverage, creating adverse selection. Behavior may become less cautious after coverage, creating moral hazard.","Underwriting, exclusions, deductibles, monitoring and experience rating are contract responses. They reduce but do not eliminate information problems."],[],"Why can a deductible improve incentives after insurance is purchased?")
      ],
      timelines:[T("Insurance event sequence","Separate the certain premium from state-dependent loss and reimbursement.",[
        R("Policy start",[E("t = 0","− Premium","Certain cost for coverage","outflow")]),
        R("If no loss",[E("During term","No claim payment","Protection existed even if unused","neutral")]),
        R("If covered loss",[E("Loss date","− Economic loss","Damage occurs","outflow"),E("Claim settlement","+ Insurer payment","After deductible and subject to limit","inflow")])
      ],"The household retains deductible, excluded and above-limit losses.","Household perspective")],
      termsExtra:[["Deductible","Mức khấu trừ/bồi thường tự chịu"],["Policy limit","Giới hạn bảo hiểm"],["Coinsurance","Đồng bảo hiểm"]],
      guidedPractice:[
        P("Easy","Insurance payoff","A covered loss is 20, deductible is 3, and limit is 25. Find insurer payment.","Payment is loss minus deductible, capped by the limit.",["Loss after deductible=20−3=17.","17 is below the 25 limit."],"Insurer pays 17; household bears 3 plus premium.","Coverage terms determine risk sharing."),
        P("Intermediate","Expected loss","Loss of 100 occurs with 2% probability; otherwise zero. Find expected loss before expenses and risk loading.","Probability-weight each outcome.",["Expected loss=0.02×100+0.98×0."],"Expected loss = 2.","A fair premium under a simple expected-value model begins with expected claims, but real premiums include additional costs."),
        P("Advanced","Choose deductible","Plan A premium is 8 with deductible 1; Plan B premium is 5 with deductible 5. A covered loss of 20 has 10% probability. Compare expected household cost, ignoring risk aversion.","Expected cost=premium+probability×deductible because loss exceeds both deductibles.",["Plan A expected cost=8+0.10×1=8.1.","Plan B expected cost=5+0.10×5=5.5.","Plan B has lower expected cost but larger bad-state cash burden."],"Expected-cost choice: B; risk-averse or liquidity-constrained household may still prefer A.","Expected value and ability to absorb loss are distinct.")
      ]
    },
    "personal/retirement":{
      deepDive:[
        S("Two phases","Accumulation and decumulation use different focal dates",["During accumulation, current balance and contributions grow to the retirement date. During decumulation, retirement withdrawals are valued back to the retirement date. The required nest egg links the two phases.","Solve backward from desired withdrawals, then solve forward for the required contributions."],[],"Where is the PV of retirement withdrawals located?"),
        S("Real versus nominal","Inflation must match the rate and cash flows",["A constant nominal withdrawal buys less each year. To maintain purchasing power, model growing nominal withdrawals or use real cash flows with a real return.","Never discount nominal cash flows with a real rate or real cash flows with a nominal rate. The approximate Fisher relation is useful, but exact consistency uses (1+nominal)=(1+real)(1+inflation)."],[],"If withdrawals grow with inflation, are they a level annuity in nominal currency?"),
        S("Longevity and sequence risk","Average return is not enough",["Retirement duration is uncertain, and poor returns early in decumulation can cause lasting damage because withdrawals lock in losses. A plan should stress test life length, inflation, fees and return sequences.","An annuity can transfer longevity risk; liquid investments preserve flexibility. The trade-off depends on pricing, guarantees and preferences."],[],"Why can two retirees with the same average return have different outcomes when return order differs?")
      ],
      timelines:[T("Retirement bridge","First value withdrawals at retirement, then fund that target.",[
        R("Accumulation",[E("Today","Current savings","Compounds to retirement","inflow"),E("Years 1…N","+ Contributions","Regular saving stream","inflow"),E("Retirement date","Required nest egg","Common focal date","focal")]),
        R("Decumulation",[E("Retirement + 1","− Withdrawal 1","First retirement spending","outflow"),E("Following years","− Withdrawals","May grow with inflation","outflow"),E("Final planned year","− Final withdrawal","Longevity assumption","outflow")])
      ],"The nest egg equals the PV, at retirement, of all planned withdrawals.","Retiree perspective")],
      formulaKeys:["PV ordinary annuity","FV ordinary annuity","Growing annuity","Annuity due","Periodic rate from EAR"],
      termsExtra:[["Decumulation","Giai đoạn rút và sử dụng tài sản"],["Longevity risk","Rủi ro sống lâu hơn dự kiến"],["Sequence-of-returns risk","Rủi ro thứ tự lợi suất"]],
      guidedPractice:[
        P("Easy","Nest egg for level withdrawals","Need 40,000 at each year-end for 20 years after retirement; return during retirement 5%. Find nest egg at retirement.","PV ordinary annuity at retirement.",["PV=40,000[1−(1.05)^−20]/0.05."],"Nest egg ≈ 498,488.42.","Value sits one period before the first withdrawal."),
        P("Intermediate","Monthly retirement saving","Need 500,000 in 15 years. Save monthly at 6% APR compounded monthly; no starting balance. Find monthly deposit.","Use r=0.06/12 and n=180 with FV annuity.",["FV factor=[(1.005)^180−1]/0.005≈290.8187.","PMT=500,000/290.8187."],"PMT ≈ 1,719.28 per month.","Monthly rate and payment count must match."),
        P("Advanced","Growing retirement income","First annual withdrawal is 50,000 one year after retirement, grows 3% for 25 years, and nominal return is 7%. Find required nest egg.","Use a finite growing annuity, not a perpetuity.",["PV=50,000/(0.07−0.03)×[1−(1.03/1.07)^25].","The bracket limits the stream to 25 withdrawals."],"Required nest egg ≈ 767,778.92.","Growth preserves spending power while finite horizon prevents perpetuity overvaluation.")
      ]
    }
  });
})();
