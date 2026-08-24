"use strict";
(() => {
  const H=window.FM_DEEP;if(!H)return;const {S,P,E,R,T,register}=H;
  register({
    "risk/risk-return":{
      deepDive:[
        S("Return definition","Measure wealth change relative to capital committed",["Holding-period return combines cash income and price change, divided by beginning value. A high currency gain is not necessarily a high return if the initial investment was large.","Returns must use a consistent horizon and reinvestment assumption before comparison. A monthly return is not directly comparable with an annual expected return."],[],"What two components make up stock holding-period return?"),
        S("Risk has several dimensions","One number cannot describe every danger",["Total uncertainty includes market-price volatility, default risk, liquidity risk, inflation risk, horizon risk and model risk. Standard deviation measures dispersion, not every form of loss.","A safe nominal payoff can still have purchasing-power risk. A low-volatility asset can be illiquid. Match the risk measure to the decision."],[],"Does low standard deviation guarantee that an asset can be sold quickly?"),
        S("Risk-return trade-off","Required compensation is prospective",["Risk-averse investors generally require higher expected return to bear greater nondiversifiable risk. This does not mean every risky investment will realize a high return; if it did, it would not be risky.","Expected return is a forecast or probability-weighted average, while realized return is one outcome from the distribution."],[],"Why is a realized loss consistent with a positive expected return?")
      ],
      termsExtra:[["Holding-period return","Suất sinh lợi kỳ nắm giữ"],["Purchasing-power risk","Rủi ro sức mua"],["Tail risk","Rủi ro đuôi phân phối"]],
      formulaKeys:["Holding-period return"],
      guidedPractice:[
        P("Easy","Compute holding return","Buy for 100, receive dividend 4, sell for 108. Find HPR.","Income plus price change over beginning price.",["HPR=(108−100+4)/100."],"HPR = 12%.","Return includes both cash income and capital gain."),
        P("Intermediate","Nominal versus real","Investment earns 8% nominal while inflation is 5%. Find exact real return.","Use (1+real)=(1+nominal)/(1+inflation).",["1+real=1.08/1.05=1.028571."],"Real return ≈ 2.86%.","Subtracting gives 3% only as an approximation."),
        P("Advanced","Choose the risk measure","Asset A has low daily volatility but cannot be sold for six months; Asset B is liquid but volatile. Explain why standard deviation alone cannot select the safer asset for an emergency fund.","Match risk to the required use of cash.",["Emergency funds need immediate liquidity and capital reliability.","A's low observed volatility does not solve sale restriction.","B's price volatility creates value-at-sale uncertainty.","Evaluate liquidity and downside over the needed horizon together."],"Neither is 'safer' without the emergency horizon and loss tolerance; use multidimensional risk analysis.","Risk is decision-specific.")
      ]
    },
    "risk/probability":{
      deepDive:[
        S("Distribution","List outcomes and probabilities before averaging",["A discrete probability distribution assigns a return or value to each mutually exclusive state and probabilities that sum to one. Expected return is the probability-weighted average.","The expected value need not be an outcome that can actually occur. It is a long-run center or decision input, not a promise."],[],"Can a two-state investment with returns 0% and 20% have expected return 10% even though 10% never occurs?"),
        S("Scenario quality","Numbers are only as good as the states",["States should be collectively exhaustive and avoid overlap. Probabilities may be historical, model-based or judgmental; each source has limitations.","Scenario analysis is most useful when it explains causal drivers rather than inventing precise probabilities without support."],[],"What error occurs if recession and low-sales states overlap but are counted separately?"),
        S("Conditional information","Probabilities update with evidence",["New information can change the probability of states without changing the payoff within each state. Expected value should be recalculated using the updated distribution.","This distinguishes information risk from payoff sensitivity: news can shift beliefs, outcomes or both."],[],"If good news raises the probability of success, which term in ΣpR changes first?")
      ],
      timelines:[T("Expected-return workflow","Calculate in a fixed sequence to avoid skipped weights.",[
        R("Define",[E("1","List states","Mutually exclusive and exhaustive","focal"),E("2","Assign pᵢ","Check Σpᵢ=1","neutral")]),
        R("Calculate",[E("3","Pair each Rᵢ","Keep signs and units","neutral"),E("4","Compute pᵢRᵢ","One weighted contribution per state","inflow")]),
        R("Conclude",[E("5","Sum contributions","E(R)=ΣpᵢRᵢ","inflow"),E("6","Interpret","Expected, not guaranteed","neutral")])
      ],"Do not average returns unless the states are equally likely.","Calculation process")],
      formulaKeys:["Expected return"],
      termsExtra:[["Mutually exclusive states","Các trạng thái loại trừ nhau"],["Expected value","Giá trị kỳ vọng"],["Conditional probability","Xác suất có điều kiện"]],
      guidedPractice:[
        P("Easy","Two-state expectation","Return is 20% with probability 0.6 and −10% with probability 0.4. Find E(R).","Weight each return by its probability.",["E(R)=0.6×20%+0.4×(−10%).","=12%−4%."],"E(R)=8%.","Probabilities, not the number of states, determine weights."),
        P("Intermediate","Three-state value","Ending wealth is 1,400 with p=.3, 1,000 with p=.5 and 500 with p=.2. Find expected ending wealth and expected return on 1,000 initial investment.","Compute expected ending wealth first.",["E(W)=.3×1,400+.5×1,000+.2×500=1,020.","Expected return=(1,020−1,000)/1,000."],"Expected wealth=1,020; expected return=2%.","Expected wealth and expected return are consistent when based on the same initial capital."),
        P("Advanced","Update probabilities","A project pays 50% if successful and −20% if unsuccessful. Initial success probability is 0.4; new evidence raises it to 0.65. Compare expected returns.","Recalculate with p and 1−p.",["Initial E=.4×50%+.6×(−20%)=8%.","Updated E=.65×50%+.35×(−20%)=25.5%."],"Expected return rises from 8% to 25.5%.","Information changes value by changing beliefs about states.")
      ]
    },
    "risk/variance-sd":{
      deepDive:[
        S("Dispersion","Variance measures squared distance from the mean",["Subtract expected return from each state return, square the deviation, weight by probability and sum. Squaring prevents positive and negative deviations from canceling and emphasizes large surprises.","Standard deviation is the square root of variance and returns to the original return units, making interpretation easier."],[],"Why not simply average signed deviations from the mean?"),
        S("Scale","Use coefficient of variation cautiously",["Standard deviation is absolute dispersion. When comparing investments with very different expected returns, the coefficient of variation σ/E(R) can describe risk per unit of expected return, provided E(R) is positive and meaningful.","A low coefficient does not solve liquidity, tail or estimation risk."],[],"Why is coefficient of variation unstable when expected return is near zero?"),
        S("Downside and distribution shape","Equal σ does not mean equal risk experience",["Two distributions can share the same mean and standard deviation but differ in skewness, tail loss or probability of failing a target. Standard deviation treats upside and downside deviations symmetrically.","Use scenario losses, shortfall probability or stress tests when downside is the real concern."],[],"Would an investor necessarily dislike an unexpectedly high return as much as an equal negative surprise?")
      ],
      timelines:[T("Variance calculation sequence","Keep one row per step instead of compressing the calculation.",[
        R("Center",[E("Step 1","Compute E(R)","Probability-weighted mean","focal"),E("Step 2","Find Rᵢ−E(R)","Deviation in each state","neutral")]),
        R("Square and weight",[E("Step 3","Square deviations","Remove sign; emphasize extremes","neutral"),E("Step 4","Multiply by pᵢ","Probability weight","neutral")]),
        R("Aggregate",[E("Step 5","Sum = variance","Units are return squared","inflow"),E("Step 6","Square root = σ","Back to return units","inflow")])
      ],"Write a small state table on paper even if a calculator is used.","Calculation process")],
      formulaKeys:["Variance"],
      termsExtra:[["Deviation","Độ lệch"],["Coefficient of variation","Hệ số biến thiên"],["Shortfall probability","Xác suất thiếu hụt"]],
      guidedPractice:[
        P("Easy","Two equally likely returns","Returns are 0% and 20%, each with probability .5. Find σ.","Mean is 10%; deviations are −10% and +10%.",["Variance=.5(−.10)^2+.5(.10)^2=.01.","σ=√.01."],"σ=10%.","Symmetric two-state dispersion equals the distance from the mean."),
        P("Intermediate","Unequal probabilities","Returns −10%, 10%, 30% with probabilities .2, .5, .3. Find E(R) and σ.","Compute mean, then weighted squared deviations.",["E=.2(−.10)+.5(.10)+.3(.30)=.12.","Variance=.2(−.22)^2+.5(−.02)^2+.3(.18)^2=.0196.","σ=√.0196."],"E(R)=12%; σ=14%.","Use decimal returns consistently."),
        P("Advanced","Same σ, different downside","Portfolio A returns −20% or +20% equally. Portfolio B returns 0% most of the time but has a small crash and compensating upside; suppose both have equal mean and σ. What additional metric would you request?", "Focus on target failure and tail loss.",["Request probability and size of loss below an essential threshold.","Examine worst-case/stress scenarios, skewness or expected shortfall.","Standard deviation alone cannot show how risk is distributed across tails."],"Use a downside or tail-risk measure in addition to σ.","Risk measurement should match the decision consequence.")
      ]
    },
    "risk/risk-aversion":{
      deepDive:[
        S("Preference","Risk aversion concerns utility, not fear alone",["A risk-averse person prefers a certain payoff to a risky payoff with the same expected value. Diminishing marginal utility of wealth means a loss hurts more than an equal gain helps at the margin.","Risk tolerance depends on wealth, horizon, goals, labor income and psychology; it is not fixed across all decisions."],[],"Why might the same person insure a home but accept small investment volatility?"),
        S("Certainty equivalent","Translate preference into money",["The certainty equivalent is the guaranteed amount that provides the same utility as a risky prospect. For a risk-averse investor it is below expected value. The difference between expected value and certainty equivalent is the risk premium demanded to avoid the risk.","This risk premium is preference-based and distinct from an insurance company's quoted premium."],[],"For a risk-neutral person, how does certainty equivalent compare with expected value?"),
        S("Capacity versus willingness","A suitable choice needs both",["Risk willingness is psychological comfort; risk capacity is financial ability to bear loss without failing important obligations. A young investor may have long horizon but low capacity if income is unstable and emergency savings are absent.","Portfolio choice should be constrained by the lower of willingness and capacity for essential goals."],[],"Can a high risk-tolerance questionnaire score justify risking next month's tuition?")
      ],
      termsExtra:[["Certainty equivalent","Giá trị tương đương chắc chắn"],["Risk premium","Phần bù rủi ro"],["Risk capacity","Khả năng chịu rủi ro"]],
      guidedPractice:[
        P("Easy","Classify preference","Choose between certain 100 and a gamble with expected value 100. A person chooses certain 100. What preference is shown?", "Same expected value, different uncertainty.",["Preference for certainty at equal expected value indicates risk aversion."],"Risk aversion.","The comparison holds expected value constant."),
        P("Intermediate","Risk premium","A gamble has expected payoff 1,000; the investor's certainty equivalent is 920. Find risk premium.","Expected value minus certainty equivalent.",["Risk premium=1,000−920."],"Risk premium = 80.","This is the amount of expected value the person would give up to remove risk."),
        P("Advanced","Capacity conflict","An investor is comfortable with volatility but needs the entire portfolio for a fixed payment in six months. Explain allocation implication.","Separate willingness from capacity and horizon.",["Psychological willingness is high.","Capacity is low because a loss would cause goal failure and recovery time is short.","Essential six-month funds should be matched with stable, liquid assets; only surplus funds can bear more risk."],"Risk capacity constrains the portfolio despite high willingness.","Suitability is goal-specific, not a personality label alone.")
      ]
    },
    "risk/diversification":{
      deepDive:[
        S("Covariance","Portfolio risk depends on co-movement",["Expected portfolio return is a weighted average, but portfolio variance includes covariance. Combining assets whose returns are less than perfectly positively correlated can reduce variance without proportionally reducing expected return.","Diversification works through different responses to common economic states, not through the number of holdings alone."],[],"Would holding 50 firms in the same narrow industry guarantee strong diversification?"),
        S("Idiosyncratic and systematic risk","Some risk can be pooled away",["Firm-specific events can offset across many holdings and are diversifiable. Economy-wide shocks affect many assets together and cannot be eliminated simply by adding more securities.","Investors should not expect compensation for avoidable idiosyncratic risk in a competitive market framework."],[],"Is a recession shock usually idiosyncratic or systematic?"),
        S("Correlation limits","Diversification can weaken in crises",["Historical correlations are estimates and may rise during stress. Concentration can hide in common factors such as currency, interest rate, geography or funding source even when security names differ.","Test factor exposures and crisis scenarios rather than relying only on a normal-period correlation matrix."],[],"How could a stock and a bond share the same hidden currency risk?")
      ],
      formulaKeys:["Portfolio expected return","Two-asset portfolio variance"],
      termsExtra:[["Covariance","Hiệp phương sai"],["Correlation","Tương quan"],["Idiosyncratic risk","Rủi ro riêng lẻ"]],
      guidedPractice:[
        P("Easy","Portfolio expected return","60% in A with E(R)=10%, 40% in B with E(R)=5%. Find portfolio E(R).","Weight expected returns.",["E(Rp)=.6×10%+.4×5%."],"E(Rp)=8%.","Expected return is linear in portfolio weights."),
        P("Intermediate","Perfect negative correlation","Two equal-weight assets each have σ=10% and correlation −1. If their return movements are equal size and opposite, find portfolio σ.","Use two-asset variance formula.",["Variance=.5²(.10²)+.5²(.10²)+2(.5)(.5)(−1)(.10)(.10).","The positive and negative terms cancel."],"Portfolio σ=0 under these exact assumptions.","Perfectly offsetting returns can eliminate variance, though such relationships are rare and unstable."),
        P("Advanced","Correlation change","Equal weights, σA=12%, σB=8%. Compare portfolio σ when correlation is .8 versus 0.","Use the two-asset variance formula twice.",["At ρ=.8: variance=.25(.12²)+.25(.08²)+.5(.8)(.12)(.08)=.00904; σ≈9.51%.","At ρ=0: variance=.0036+.0016=.0052; σ≈7.21%."],"Lower correlation reduces σ from about 9.51% to 7.21%.","Diversification benefit comes from covariance, not just smaller individual volatilities.")
      ]
    },
    "risk/insurance-info":{
      deepDive:[
        S("Pooling condition","Insurance works best with many similar, independent exposures",["Pooling makes aggregate claims more predictable when individual losses are not perfectly correlated. Catastrophic common shocks are harder to diversify and may require reinsurance, capital or exclusions.","Insurance prices uncertainty; it does not make the underlying loss disappear."],[],"Why is a single nationwide disaster harder to pool than many independent household accidents?"),
        S("Adverse selection","Hidden risk affects who buys",["If one premium is charged to all, high-risk customers value coverage more and enroll disproportionately. The pool becomes costlier than expected, causing price increases and possible exit by low-risk customers.","Underwriting, waiting periods, group coverage and mandatory participation can broaden or sort the risk pool."],[],"How can a premium increase trigger an adverse-selection spiral?"),
        S("Moral hazard","Coverage changes prevention and claiming",["After coverage, the insured may take less care or file more claims because part of loss is shifted. Deductibles, coinsurance, exclusions, monitoring and experience rating preserve incentives.","Contract design should reduce behavior distortion while still protecting against severe loss."],[],"Why can full reimbursement of every small loss be expensive beyond the claims themselves?")
      ],
      timelines:[T("Insurance information cycle","Information problems occur on both sides of policy inception.",[
        R("Before policy",[E("Application","Applicant knows risk type","Adverse selection","outflow"),E("Underwriting","Insurer screens","Price and terms set","focal")]),
        R("During coverage",[E("Behavior","Care and exposure may change","Moral hazard","outflow"),E("Monitoring","Deductibles / conditions","Incentives maintained","neutral")]),
        R("After loss",[E("Claim","Verify event and amount","Fraud and settlement controls","inflow")])
      ],"Screening addresses hidden type; contract design and claims control address hidden action.","Insurer perspective")],
      termsExtra:[["Risk pool","Nhóm rủi ro được bảo hiểm"],["Experience rating","Định phí theo lịch sử tổn thất"],["Reinsurance","Tái bảo hiểm"]],
      guidedPractice:[
        P("Easy","Independent pooling","Why does an insurer prefer 10,000 independent small risks to one equally large concentrated risk?", "Think about predictability of the average.",["Independent losses offset across policyholders.","Aggregate actual claims tend to be closer to expected claims as pool size grows."],"Diversification makes total claims more predictable.","Pooling reduces variance of average loss, not expected total loss."),
        P("Intermediate","Adverse-selection spiral","Explain the sequence when low-risk customers leave after a premium increase.","Track average risk and premium feedback.",["Premium rises.","Low-risk customers find coverage less attractive and exit.","Remaining pool has higher average risk.","Expected claims rise, prompting another premium increase."],"A self-reinforcing deterioration in the insured pool.","Pricing affects participation, which changes the risk being priced."),
        P("Advanced","Contract design","A policy covers 100% of small frequent losses and has no deductible. Propose a redesign that preserves catastrophe protection and reduces moral hazard/administration.","Let the household retain the predictable first-loss layer.",["Introduce a deductible or coinsurance for small losses.","Maintain a high limit for severe losses.","Use preventive discounts or experience rating where observable.","The insured now has incentive to prevent and avoid trivial claims."],"First-loss sharing plus catastrophic coverage.","Efficient insurance transfers severe uncertainty rather than every routine expense.")
      ]
    }
  });
})();
