"use strict";
(() => {
  const H=window.FM_DEEP;if(!H)return;const {S,P,E,R,T,register}=H;
  register({
    "tvm/timeline":{
      deepDive:[
        S("Focal date","A timeline is an equation before it has numbers",["Every TVM calculation chooses a focal date—the date at which all values are compared. Arrows to the right compound amounts forward; arrows to the left discount amounts backward. The exponent equals the number of rate periods crossed.","A timeline exposes missing cash flows, incorrect payment timing and mismatched rates before those errors enter a calculator. Write dates or period numbers, place each cash flow, state the perspective, then mark the focal date."],[],"If today is immediately after a monthly payment, when is the next payment placed?"),
        S("Sign convention","Signs encode perspective, not moral value",["Cash received by the decision maker is usually positive and cash paid is negative. The same loan therefore has opposite signs for borrower and lender. Financial calculators require a sign change between PV and PMT/FV because the equation describes exchanges of value.","Do not change signs halfway through a problem. State 'borrower perspective' or 'investor perspective' above the timeline and preserve it."],[],"Draw the signs for a bank that lends VND 100 million and receives installments."),
        S("Rate-period match","One tick equals one effective rate period",["If cash flows are monthly, each tick must use a monthly effective rate. A nominal APR compounded monthly is divided by 12; an EAR must be converted by taking the twelfth root. The number of periods is years multiplied by payments per year.","Irregular dates may require day-count conventions or fractional periods. Do not force an annual formula onto monthly cash flows by merely multiplying the final answer."],[],"What rate and n belong to a 3-year monthly loan quoted at 12% APR compounded monthly?")
      ],
      timelines:[
        T("Borrower's five-payment loan","The ring is received today and five equal repayments occur at year-end.",[
          R("Origination",[E("t = 0","+ Loan proceeds","Cash received today","inflow")]),
          R("Payments 1–3",[E("t = 1","− PMT","First year-end payment","outflow"),E("t = 2","− PMT","Second payment","outflow"),E("t = 3","− PMT","Third payment","outflow")]),
          R("Payments 4–5",[E("t = 4","− PMT","Fourth payment","outflow"),E("t = 5","− PMT","Final payment","outflow")])
        ],"For the lender, reverse every sign but keep the dates unchanged.","Borrower perspective"),
        T("Mortgage already in progress","Today is immediately after the most recent monthly payment.",[
          R("Valuation date",[E("Today","Outstanding balance","PV of all remaining payments","focal")]),
          R("Early remaining payments",[E("Month 1","− PMT","Next payment; not today","outflow"),E("Month 2","− PMT","Second remaining payment","outflow"),E("Month 3","− PMT","Continue monthly","outflow")]),
          R("Final segment",[E("…","− PMT","Same monthly spacing","outflow"),E("Month 312","− PMT","Last payment for 26 years remaining","outflow")])
        ],"Balance immediately after a payment is the PV of 312 future payments discounted at the monthly rate.","Homeowner perspective")
      ],
      termsExtra:[["Focal date","Mốc quy đổi"],["Cash-flow sign convention","Quy ước dấu dòng tiền"],["Rate-period consistency","Sự nhất quán giữa lãi suất và kỳ hạn"]],
      guidedPractice:[
        P("Easy","Place four cash flows","You invest 1,000 today and receive 1,331 in three years. Draw the investor timeline and signs.","Use investor perspective; investment is paid, maturity value is received.",["At t=0 place −1,000.","At t=1 and t=2 place no cash flow.","At t=3 place +1,331."],"t0: −1,000; t3: +1,331.","Correct signs let the same TVM equation solve for return."),
        P("Intermediate","Convert the clock","A 4-year loan has monthly payments and 9.6% nominal APR compounded monthly. Identify periodic rate and number of payments.","One timeline tick is one month.",["Monthly rate = 9.6%/12 = 0.8%.","Number of months = 4×12 = 48.","Place the loan at t=0 and payments at months 1 through 48."],"r = 0.8% per month; n = 48.","Rate and cash-flow frequency must match exactly."),
        P("Advanced","Before versus after payment","A borrower wants the loan balance immediately before payment 25. Explain how it differs from the balance immediately after payment 24.","Those two moments are the same instant just before payment 25; then separate before and after payment 25.",["Immediately after payment 24, interest accrues for one month.","Immediately before payment 25, balance = after-payment-24 balance ×(1+r).","Immediately after payment 25, subtract PMT from the before-payment balance."],"B25,before = B24,after(1+r); B25,after = B25,before−PMT.","Timing words change which cash flow is included at the focal date.")
      ]
    },
    "tvm/lump-sum":{
      deepDive:[
        S("Compounding","Growth is multiplicative",["Simple interest applies the rate only to original principal. Compound interest applies the rate to the entire accumulated balance, so each period's ending value becomes the next period's beginning principal.","FV=PV(1+r)^n can be read as repeated multiplication by the one-period growth factor 1+r. This makes sensitivity nonlinear: rate differences become more important as n grows."],[],"Which term represents interest-on-interest after two periods?"),
        S("Discounting","Present value is the inverse operation",["PV=FV/(1+r)^n asks what amount today would grow to the future cash flow at the required return. A higher required return means a lower present value because less money is needed today to reach the same future target.","The discount factor 1/(1+r)^n is a price today for one unit of certain future value under the stated opportunity cost."],[],"Without calculation, what happens to PV when maturity moves farther away at a positive rate?"),
        S("Solving unknowns","The same equation answers four questions",["If PV, r and n are known, solve FV. If FV, r and n are known, solve PV. If PV, FV and n are known, take the nth root to solve r. If PV, FV and r are known, logarithms solve n.","Always interpret the result: a computed periodic r must be annualized using the appropriate convention before comparing with an annual quote."],[],"Why is (FV/PV−1)/n not the compound annual growth rate?")
      ],
      timelines:[T("Move one lump sum across time","Each column crosses one annual 10% growth period.",[
        R("Years 0–2",[E("t = 0","PV = 1,000","Starting principal","focal"),E("t = 1","1,000×1.10","First growth factor","inflow"),E("t = 2","1,000×1.10²","Interest now earns interest","inflow")]),
        R("Years 3–5",[E("t = 3","1,000×1.10³","Continue compounding","inflow"),E("t = 4","1,000×1.10⁴","One more period","inflow"),E("t = 5","FV = 1,610.51","End value","inflow")])
      ],"To discount, read the same timeline backward and divide by 1.10 for every step to the left.","Investor perspective")],
      formulaKeys:["Future value","Present value"],
      termsExtra:[["Growth factor","Hệ số tăng trưởng"],["Discount factor","Hệ số chiết khấu"],["Compound annual growth rate","Tốc độ tăng trưởng kép hằng năm"]],
      guidedPractice:[
        P("Easy","Future value","Invest 5,000 at 8% annually for 3 years. Find FV.","Use FV=PV(1+r)^n.",["r=0.08 and n=3.","FV=5,000(1.08)^3.","(1.08)^3=1.259712."],"FV = 6,298.56.","The growth factor is applied once per year."),
        P("Intermediate","Required return","An investment grows from 10,000 to 14,641 in 4 years. Find the annual compound return.","Rearrange to r=(FV/PV)^(1/n)−1.",["FV/PV=1.4641.","Fourth root of 1.4641 is 1.10.","Subtract 1."],"r = 10% per year.","The geometric rate exactly links beginning and ending wealth."),
        P("Advanced","Two-stage reinvestment","Invest 10,000 for two years: 6% in year 1 and 9% in year 2. Find FV and explain why using 7.5% once per year is not exact.","Multiply the distinct annual growth factors.",["After year 1: 10,000×1.06=10,600.","After year 2: 10,600×1.09=11,554.","Exact two-year equivalent rate solves (1+r)^2=1.06×1.09, giving about 7.4895%, not the arithmetic 7.5%."],"FV = 11,554; equivalent annual rate ≈ 7.49%.","Compound returns combine geometrically, not arithmetically.")
      ]
    },
    "tvm/multiple-cashflows":{
      deepDive:[
        S("Cash-flow additivity","Values add only at the same date",["The value of a stream equals the sum of the values of its individual cash flows at one focal date. Each amount receives its own exponent because each is a different distance from that date.","Adding nominal future cash flows before discounting is generally wrong unless they occur on the same date. First move, then add."],[],"Can year-1 and year-4 cash flows share the same discount exponent?"),
        S("Two valid methods","PV now or FV later",["Method 1 discounts every cash flow to t=0. Method 2 compounds every cash flow to a common future date. If the same rate and dates are used, the answers are equivalent after moving between focal dates.","Choose the method that matches the question: project valuation usually favors t=0; a savings target favors the target date."],[],"Which focal date is most natural for determining a retirement account balance on retirement day?"),
        S("Growing and irregular streams","Recognition determines the shortcut",["Equal, equally spaced cash flows may use an annuity formula. Constant-growth, equally spaced flows may use a growing annuity. Otherwise, value each cash flow separately.","Do not force a shortcut when one payment is missing, delayed or different. A split approach is acceptable: value the regular portion with a formula and the exception separately."],[],"How would you value five equal payments if the third payment is doubled?")
      ],
      timelines:[T("Irregular three-payment stream","Discount each receipt across its own number of years.",[
        R("Early cash flows",[E("t = 0","PV total","Add discounted values here","focal"),E("t = 1","+32,049","Discount one period","inflow")]),
        R("Later cash flows",[E("t = 2","+64,098","Discount two periods","inflow"),E("t = 3","+96,147","Discount three periods","inflow")])
      ],"PV = 32,049/(1+r) + 64,098/(1+r)^2 + 96,147/(1+r)^3.","Receiver perspective")],
      formulaKeys:["Present value","Future value"],
      termsExtra:[["Cash-flow additivity","Tính cộng được của giá trị dòng tiền"],["Irregular cash-flow stream","Chuỗi dòng tiền không đều"]],
      guidedPractice:[
        P("Easy","PV of two payments","Receive 1,000 in year 1 and 2,000 in year 2. Find PV at 10%.","Discount each payment separately.",["PV1=1,000/1.10=909.09.","PV2=2,000/1.10²=1,652.89.","Add the present values."],"PV = 2,561.98.","Different dates require different discount exponents."),
        P("Intermediate","Future value of deposits","Deposit 500 today, 800 at the end of year 1 and 1,000 at the end of year 2. Find value at end of year 3 at 6%.","Compound each deposit from its date to t=3.",["500 grows 3 years: 500(1.06)^3=595.51.","800 grows 2 years: 800(1.06)^2=898.88.","1,000 grows 1 year: 1,060.","Add them."],"FV at t=3 = 2,554.39.","The earliest deposit earns interest for the most periods."),
        P("Advanced","Missing annuity payment","A 5-year year-end annuity pays 2,000 annually, except no payment at t=3. Find PV at 8%.","Value a complete 5-payment annuity, then subtract the missing t=3 payment's PV.",["PV complete=2,000[1−(1.08)^−5]/0.08=7,985.42.","PV missing=2,000/(1.08)^3=1,587.66.","Subtract."],"PV = 6,397.76.","Decompose a nearly regular stream into a standard block plus an adjustment.")
      ]
    },
    "tvm/annuities":{
      deepDive:[
        S("Recognition","Three tests before the formula",["An annuity has equal payments, equal spacing and a finite number of payments. An ordinary annuity pays at period-end; an annuity due pays at period-beginning. The difference is one period of timing for every payment.","Words such as rent paid at the beginning, first deposit today or payment immediately usually signal an annuity due. Loan payments starting one month from origination are normally ordinary."],[],"If the first of six payments is today, how many payments remain after today?"),
        S("Formula logic","An annuity factor is a packaged sum",["The PV annuity factor equals 1/(1+r)+...+1/(1+r)^n. The FV annuity factor equals 1+(1+r)+...+(1+r)^(n−1) when valued immediately after the final deposit.","The annuity-due value equals the matching ordinary-annuity value multiplied by 1+r because every payment is shifted one period earlier and therefore has one less discount period or one more compounding period."],[],"Why is an annuity due more valuable than an ordinary annuity when r>0?"),
        S("Deferred annuity","Separate value date from first-payment date",["For a deferred annuity, first value the annuity one period before its first payment. Then discount that single annuity value back to the required focal date.","A common mistake is to discount by the number of payments. The delay exponent depends on the gap between the focal date and the annuity's own valuation date."],[],"If first payment is at t=5, on what date does the ordinary-annuity formula initially give value?")
      ],
      timelines:[
        T("Ordinary annuity","Five equal payments occur at each year-end.",[
          R("Value date",[E("t = 0","PV","One period before first payment","focal")]),
          R("Payments 1–3",[E("t = 1","+C","First payment","inflow"),E("t = 2","+C","Second payment","inflow"),E("t = 3","+C","Third payment","inflow")]),
          R("Payments 4–5",[E("t = 4","+C","Fourth payment","inflow"),E("t = 5","+C and FV","Final payment; FV is immediately after it","inflow")])
        ],"PV sits one full period before the first payment; FV sits immediately after the last payment.","Receiver perspective"),
        T("Annuity due","The same five payments are shifted one period earlier.",[
          R("Immediate payment",[E("t = 0","+C","First payment occurs today","inflow")]),
          R("Middle payments",[E("t = 1","+C","Second payment","inflow"),E("t = 2","+C","Third payment","inflow"),E("t = 3","+C","Fourth payment","inflow")]),
          R("Final payment",[E("t = 4","+C","Fifth and final payment","inflow")])
        ],"Relative to the ordinary annuity, every payment is one period earlier, so value_due=value_ordinary(1+r).","Receiver perspective")
      ],
      formulaKeys:["PV ordinary annuity","FV ordinary annuity","Annuity due"],
      termsExtra:[["Deferred annuity","Niên kim hoãn lại"],["Annuity factor","Hệ số niên kim"],["Valuation date","Ngày định giá"]],
      guidedPractice:[
        P("Easy","PV ordinary annuity","Receive 1,000 at each year-end for 4 years; r=6%. Find PV.","Use the PV ordinary-annuity factor.",["PV=1,000[1−(1.06)^−4]/0.06.","The factor is about 3.4651."],"PV ≈ 3,465.11.","All four equal payments are valued one period before the first."),
        P("Intermediate","Annuity due savings","Deposit 2,000 at the beginning of each year for 5 years at 7%. Find FV immediately after the fifth year of growth.","Compute ordinary-annuity FV, then multiply by 1.07.",["Ordinary FV=2,000[(1.07)^5−1]/0.07=11,501.48.","Due FV=11,501.48×1.07."],"FV due ≈ 12,306.58.","Beginning payments earn one extra period."),
        P("Advanced","Deferred scholarship","A scholarship pays 20,000 annually for 6 years, first payment at t=5. Required return is 8%. Find PV at t=0.","The annuity value is first found at t=4.",["PV at t=4=20,000[1−(1.08)^−6]/0.08≈92,457.59.","Discount t=4 value four years to t=0: 92,457.59/(1.08)^4."],"PV0 ≈ 67,959.09.","The ordinary-annuity formula values one period before the first cash flow, then the deferred block is moved to today.")
      ]
    },
    "tvm/perpetuity-growth":{
      deepDive:[
        S("Perpetuity","An infinite stream can have finite value",["At a positive discount rate, distant cash flows contribute progressively less present value. The infinite geometric series of equal payments therefore converges to C/r when the first payment is one period from now.","Perpetuity value is highly sensitive to r because there is no maturity date to limit duration."],[],"What happens to C/r as r approaches zero from above?"),
        S("Growth","The denominator is a net discount force",["For a growing perpetuity, PV=C1/(r−g). Growth offsets part of discounting, so value increases as g rises. The model requires r>g for convergence.","C1 is the next payment. If the most recent payment C0 is given, first compute C1=C0(1+g)."],[],"Why is a formula result with g≥r economically unstable?"),
        S("Finite versus infinite","Terminal value is dated",["A growing annuity ends after n payments; a growing perpetuity does not. In multi-stage valuation, a terminal value represents all cash flows after the explicit forecast and is located one period before the first terminal-stage cash flow.","Always place terminal value on the timeline before discounting it to today."],[],"If stable growth begins with a dividend at t=6, where is the Gordon terminal value located?")
      ],
      timelines:[T("Growing cash-flow stream","The first cash flow is C1, not C0.",[
        R("Valuation and first flows",[E("t = 0","PV","Value one period before C1","focal"),E("t = 1","C1","First payment","inflow"),E("t = 2","C1(1+g)","Second payment","inflow")]),
        R("Continuing growth",[E("t = 3","C1(1+g)²","Third payment","inflow"),E("…","Continue forever","Requires r > g","inflow")])
      ],"The denominator r−g summarizes the difference between discounting and permanent growth.","Investor perspective")],
      formulaKeys:["Level perpetuity","Growing perpetuity","Growing annuity"],
      termsExtra:[["Terminal value","Giá trị cuối kỳ dự báo"],["Convergence condition","Điều kiện hội tụ"],["Growing annuity","Niên kim tăng trưởng"]],
      guidedPractice:[
        P("Easy","Level perpetuity","A preferred share pays 6 every year forever. Required return is 8%. Find value.","Use PV=C/r.",["PV=6/0.08."],"PV = 75.","A constant infinite stream has a finite discounted value."),
        P("Intermediate","Growing perpetuity from D0","A company just paid dividend D0=4. Dividends grow 3% forever; r=9%. Find P0.","Compute D1 before using Gordon growth.",["D1=4×1.03=4.12.","P0=4.12/(0.09−0.03)."],"P0 ≈ 68.67.","The formula requires next period's cash flow."),
        P("Advanced","Two-stage cash flows","Cash flow is 100 at t=1 and grows 10% through t=3; from t=4 onward it grows 4% forever. r=9%. Outline valuation.","Value explicit t=1 to t=3 cash flows, then terminal value at t=3.",["Explicit cash flows: C1=100, C2=110, C3=121.","C4=121×1.04=125.84.","Terminal value at t=3=125.84/(0.09−0.04)=2,516.80.","Discount C1, C2, C3 and terminal value to t=0; avoid double-counting C3."],"PV ≈ 2,221.19.","A terminal value is a dated cash-flow block, not a value that already sits at t=0.")
      ]
    },
    "tvm/apr-ear":{
      deepDive:[
        S("Quote versus economic rate","APR and EAR answer different questions",["A nominal APR states an annualized periodic rate without intra-year compounding. EAR measures actual one-year growth after compounding. When compounding occurs more than once per year and APR is positive, EAR exceeds APR.","APR is convenient for contracts and periodic calculations; EAR is the correct one-year comparison across different compounding frequencies."],[],"Can a 12% APR compounded monthly be compared directly with an 11.8% EAR?"),
        S("Conversion discipline","Start from a growth factor",["From APR, periodic rate=APR/m and EAR=(1+APR/m)^m−1. From EAR, periodic rate=(1+EAR)^(1/m)−1. If another nominal APR is required, multiply that effective periodic rate by its m.","Do not divide EAR by m. EAR already includes compounding and must be decomposed using a root."],[],"What monthly rate is consistent with an 8% EAR?"),
        S("Payment frequency mismatch","Cash-flow frequency controls the rate",["A semiannual cash flow with a monthly-compounded quote can be handled by converting to an effective six-month rate. Either compound six monthly rates or convert through EAR.","The safest method is to write the gross growth factor over exactly one cash-flow interval."],[],"How many monthly compounding periods belong to one semiannual payment interval?")
      ],
      timelines:[T("One year under monthly compounding","APR is divided into 12 periodic rates; EAR measures the full path.",[
        R("Months 0–4",[E("0","1.0000","Starting growth factor","focal"),E("1","×(1+APR/12)","First monthly credit","inflow"),E("2–4","Repeat factor","Continue monthly","inflow")]),
        R("Months 5–8",[E("5–8","Repeat factor","Four more monthly periods","inflow")]),
        R("Months 9–12",[E("9–11","Repeat factor","Approach year-end","inflow"),E("12","(1+APR/12)^12","One-year gross factor","inflow")])
      ],"EAR equals the year-end growth factor minus 1.","Rate-conversion view")],
      formulaKeys:["Periodic rate from APR","Periodic rate from EAR","EAR from APR"],
      termsExtra:[["Nominal rate","Lãi suất danh nghĩa"],["Effective periodic rate","Lãi suất hiệu dụng theo kỳ"],["Compounding frequency","Tần suất ghép lãi"]],
      guidedPractice:[
        P("Easy","APR to EAR","Find EAR for 12% APR compounded monthly.","Use (1+0.12/12)^12−1.",["Monthly rate=1%.","EAR=(1.01)^12−1=0.126825."],"EAR ≈ 12.68%.","Monthly interest itself earns interest during the year."),
        P("Intermediate","EAR to monthly APR","An account has 10% EAR. Find the equivalent nominal APR compounded monthly.","Take the twelfth root first, then multiply monthly rate by 12.",["Monthly rate=(1.10)^(1/12)−1≈0.7974%.","Nominal APR=12×0.7974%≈9.5689%."],"Monthly-compounded APR ≈ 9.57%.","Different quotation conventions can represent the same economic annual return."),
        P("Advanced","Six-month cash flows with monthly quote","A payment arrives every six months. Discount rate is 9% APR compounded monthly. Find the effective six-month rate.","Six months contains six monthly compounding periods.",["Monthly rate=0.09/12=0.0075.","Six-month growth factor=(1.0075)^6.","Subtract 1."],"Six-month effective rate ≈ 4.5848%.","The discount rate must match the six-month spacing of the cash flows.")
      ]
    },
    "tvm/loans":{
      deepDive:[
        S("Amortization","Each payment has two economic jobs",["Interest for a period equals the opening balance times the periodic rate. The remainder of the level payment reduces principal. Early in a long loan, the balance is high, so interest consumes a larger share; later, principal reduction accelerates.","Payment is not principal divided by n plus a constant interest amount. Interest changes as the balance changes."],[],"Why does principal reduction usually rise over time in a level-payment loan?"),
        S("Outstanding balance","Value the payments that remain",["Immediately after a payment, the balance equals the present value of all remaining scheduled payments at the contractual periodic rate. This prospective method is usually faster and less error-prone than rebuilding the full amortization table.","Immediately before a payment, include that imminent payment or compound the preceding after-payment balance one period."],[],"After 20 of 360 payments, how many payments remain?"),
        S("Loan comparison","Compare complete cash-flow packages",["APR alone may omit fees, down payments, balloon payments or penalties. Compare the present value or IRR/EAR of all borrower cash flows using consistent timing.","A lower monthly payment can result from a longer term rather than a lower cost. Report payment affordability and total economic cost as separate dimensions."],[],"Can a 30-year loan have a lower payment but higher total interest than a 15-year loan?")
      ],
      timelines:[T("Fully amortizing monthly loan","The balance declines after each payment until it reaches zero.",[
        R("Origination",[E("Month 0","+ Loan amount","Borrower receives principal","inflow")]),
        R("Early payments",[E("Month 1","− PMT","Interest 1 + principal 1","outflow"),E("Month 2","− PMT","Interest falls slightly","outflow"),E("Month 3","− PMT","Principal share rises","outflow")]),
        R("Later payments",[E("…","− PMT","Continue using same payment","outflow"),E("Month n","− Final PMT","Balance becomes zero","outflow")])
      ],"At any after-payment date, the remaining balance is the PV of the payments shown to its right.","Borrower perspective")],
      formulaKeys:["Loan payment","PV ordinary annuity","Outstanding loan balance","Periodic rate from APR","Periodic rate from EAR"],
      termsExtra:[["Amortization schedule","Bảng khấu hao khoản vay"],["Principal component","Phần hoàn trả gốc"],["Balloon payment","Khoản thanh toán lớn cuối kỳ"]],
      guidedPractice:[
        P("Easy","Monthly payment","Borrow 12,000 for 2 years at 12% APR with monthly payments. Find PMT.","Monthly r=1%; n=24.",["PMT=12,000×0.01/[1−(1.01)^−24]."],"PMT ≈ 564.88 per month.","The loan amount is the PV of 24 end-of-month payments."),
        P("Intermediate","First payment split","Using the 12,000 loan above, split the first payment into interest and principal.","Interest equals opening balance times 1%.",["First-month interest=12,000×0.01=120.","Principal repaid=564.88−120=444.88.","New balance=12,000−444.88=11,555.12."],"Interest 120; principal 444.88; ending balance 11,555.12.","Only the principal component reduces the debt."),
        P("Advanced","Payoff after 18 payments","A 60-month loan has PMT=500 and monthly rate 0.6%. Find balance immediately after payment 18.","There are 42 remaining payments; value them at month 18.",["Remaining n=60−18=42.","B18=500[1−(1.006)^−42]/0.006."],"Balance ≈ 18,514.15.","Prospective balance valuation avoids reconstructing 18 past rows.")
      ]
    },
    "tvm/npv-irr":{
      deepDive:[
        S("NPV rule","Value creation is measured in currency today",["NPV discounts all incremental project cash flows at the opportunity cost of capital and adds them, including the usually negative t=0 investment. Positive NPV means the project is worth more than the resources it consumes under the stated assumptions.","For mutually exclusive projects, choose the feasible project with the highest NPV, not automatically the highest percentage return."],[],"Why is t=0 normally not discounted?"),
        S("IRR rule","IRR is a break-even discount rate",["IRR solves NPV=0. For a conventional investment with one initial outflow followed by inflows, accept if IRR exceeds the opportunity cost of capital. For a financing pattern with cash received first and repayments later, lower IRR is preferable to the borrower.","IRR is a rate summary; NPV is a value measure. When they conflict for mutually exclusive projects, NPV is the reliable objective if the discount rate is appropriate."],[],"Why does the direction of the IRR rule reverse for borrowing?"),
        S("Failure modes","Cash-flow signs matter more than formula familiarity",["Nonconventional cash flows with multiple sign changes can produce multiple IRRs or no economically meaningful IRR. IRR can also mis-rank projects of different scale or timing.","When in doubt, draw the NPV profile or compute NPV directly at the opportunity cost. Do not force one IRR from calculator output into a decision it cannot support."],[],"How many potential positive IRRs can a stream with two sign changes have at most?")
      ],
      timelines:[T("Conventional project cash flows","One initial investment is followed by operating benefits.",[
        R("Investment date",[E("t = 0","− I₀","Initial project outlay","outflow")]),
        R("Operating stage",[E("t = 1","+ CF₁","First operating cash flow","inflow"),E("t = 2","+ CF₂","Second operating cash flow","inflow"),E("t = 3","+ CF₃","Continue to project end","inflow")]),
        R("Terminal stage",[E("t = N","+ CFN + terminal effects","Include salvage and working-capital recovery","inflow")])
      ],"NPV moves every amount to t=0. IRR is the rate that makes their signed sum equal zero.","Project perspective")],
      formulaKeys:["NPV"],
      termsExtra:[["Conventional cash flow","Dòng tiền thông thường"],["Mutually exclusive projects","Các dự án loại trừ lẫn nhau"],["NPV profile","Đồ thị NPV theo lãi suất"]],
      guidedPractice:[
        P("Easy","One-period NPV","Invest 1,000 today and receive 1,100 in one year. Required return is 8%. Find NPV.","Discount the future receipt and subtract the initial cost.",["PV inflow=1,100/1.08=1,018.52.","NPV=1,018.52−1,000."],"NPV = 18.52; accept if assumptions hold.","The project earns more than the 8% opportunity cost."),
        P("Intermediate","IRR and decision","Invest 5,000 today and receive 6,050 in two years. Find IRR and decide at 8% required return.","Solve 5,000=6,050/(1+IRR)^2.",["(1+IRR)^2=6,050/5,000=1.21.","1+IRR=1.10, so IRR=10%.","Because 10%>8% for a conventional investment, accept."],"IRR=10%; accept.","The same result would appear as positive NPV at 8%."),
        P("Advanced","Scale conflict","Project A costs 1,000 and pays 1,500 in one year. Project B costs 100,000 and pays 135,000. Required return is 10%; only one can be chosen. Compare IRR and NPV.","Calculate both metrics and let the objective be value created.",["IRR A=50%; NPV A=1,500/1.10−1,000=363.64.","IRR B=35%; NPV B=135,000/1.10−100,000=22,727.27.","A has higher IRR, but B creates much more value."],"Choose B by NPV if capital and risk assumptions permit.","Percentage return ignores project scale.")
      ]
    }
  });
})();
