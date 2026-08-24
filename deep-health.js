"use strict";
(() => {
  const H=window.FM_DEEP;if(!H)return;const {S,P,E,R,T,register}=H;
  register({
    "health/statements":{
      deepDive:[
        S("Four linked statements","Each statement answers a different question",["The balance sheet reports assets, liabilities and equity at a date. The income statement reports revenue and expenses over a period. The statement of cash flows explains cash movements over the period. The retained-earnings statement reconciles beginning retained earnings, profit and dividends.","No single statement gives a complete view. Profitability, liquidity and financing structure must be connected."],[],"Which statement explains why cash changed during the year?"),
        S("Accrual versus cash","Recognition and collection have different clocks",["Credit revenue can increase profit and receivables before cash is collected. Depreciation reduces accounting profit without a current cash payment. Buying equipment uses cash but is not immediately expensed in full under accrual accounting.","Reconcile profit to operating cash by identifying noncash expenses and changes in working-capital accounts."],[],"What happens to cash when receivables rise because customers have not paid?"),
        S("Book and market values","Statements measure recorded transactions, not complete market value",["Balance-sheet assets are recorded under accounting rules and may differ from current market value. Intangible capabilities, growth options and risk may not be fully captured.","Financial analysis therefore uses statements as structured evidence, not as a complete valuation of the firm."],[],"Why can market capitalization exceed book equity?")
      ],
      timelines:[T("How the statements connect across a year","Opening balances become closing balances through activity during the period.",[
        R("Beginning",[E("Start of year","Opening balance sheet","Assets = liabilities + equity","focal")]),
        R("During year",[E("Operations","Revenue and expenses","Produce net income","inflow"),E("Cash movements","Operating / investing / financing","Explain cash change","neutral")]),
        R("End of year",[E("Retained earnings","Beginning RE + NI − dividends","Updates equity","inflow"),E("End of year","Closing balance sheet","Includes ending cash and equity","focal")])
      ],"Net income links into retained earnings; ending cash from the cash-flow statement links to cash on the closing balance sheet.","Firm reporting cycle")],
      sourceCorrections:[{title:"Retained earnings is not cash",body:"Retained earnings is an equity account accumulating accounting profit not distributed as dividends. It may be invested in inventory, receivables, equipment or other assets. To find cash, read the cash account on the balance sheet and reconcile changes through the statement of cash flows."}],
      termsExtra:[["Accrual accounting","Kế toán dồn tích"],["Noncash expense","Chi phí không bằng tiền"],["Free cash flow","Dòng tiền tự do"]],
      guidedPractice:[
        P("Easy","Credit sale link","A firm records a 100 credit sale with no immediate payment. What changes initially?", "Use accrual timing.",["Revenue and profit increase, subject to related expenses.","Accounts receivable increases.","Cash does not increase at the sale date."],"Profit/receivables rise; cash unchanged initially.","Recognition and collection occur on different dates."),
        P("Intermediate","Retained earnings roll-forward","Beginning retained earnings 500, net income 120, dividends 30. Find ending retained earnings.","Beginning + profit − dividends.",["Ending RE=500+120−30."],"Ending retained earnings = 590.","This does not imply cash increased by 90."),
        P("Advanced","Profit to operating cash intuition","Net income is 200, depreciation 40, receivables rise 30 and inventory rises 20, ignoring other changes. Estimate operating cash flow using these adjustments.","Add noncash expense; subtract working-capital uses of cash.",["Start net income 200.","Add depreciation 40.","Subtract receivables increase 30.","Subtract inventory increase 20."],"Estimated operating cash flow = 190.","Accrual profit is converted to cash by reversing noncash items and timing changes.")
      ]
    },
    "health/common-size":{
      deepDive:[
        S("Denominator discipline","Structure depends on the statement",["A common-size balance sheet expresses each account as a percentage of total assets. A common-size income statement expresses each line as a percentage of sales. Using one base for both destroys interpretation.","The percentages reveal composition, not absolute size."],[],"What is the correct base for cost of goods sold on a common-size income statement?"),
        S("Cross-sectional and trend analysis","Comparison creates meaning",["Common-size statements allow comparison across firms and years despite scale differences. Rising inventory share may signal growth preparation, weak demand or supply-chain strategy; context decides.","Combine vertical structure with trend data and turnover ratios to distinguish plausible explanations."],[],"Why is a one-year inventory percentage not enough to diagnose overstocking?"),
        S("Accounting consistency","Comparable labels may hide different measurement",["Firms can classify expenses differently and use different accounting estimates. Currency, fiscal year, acquisition effects and business model also affect comparisons.","Normalize definitions where possible and treat unexplained differences as questions, not conclusions."],[],"How could a recent acquisition distort a year-to-year common-size comparison?")
      ],
      formulaKeys:["Common-size percentage"],
      termsExtra:[["Vertical analysis","Phân tích theo chiều dọc"],["Trend analysis","Phân tích xu hướng"],["Normalization","Chuẩn hóa số liệu"]],
      guidedPractice:[
        P("Easy","Balance-sheet percentage","Inventory is 996 and total assets 6,274. Find common-size inventory.","Inventory divided by total assets.",["996/6,274×100."],"Inventory ≈ 15.88% of assets.","The base is total assets for balance-sheet accounts."),
        P("Intermediate","Income-statement comparison","Firm A has sales 1,000 and EBIT 80; Firm B sales 4,000 and EBIT 240. Compare common-size EBIT.","Compute EBIT/sales for each.",["A:80/1,000=8%.","B:240/4,000=6%."],"A has higher operating margin despite lower absolute EBIT.","Common sizing separates operating structure from company scale."),
        P("Advanced","Joint diagnosis","Inventory rises from 12% to 18% of assets while inventory turnover falls from 6× to 3×. Give two interpretations and one follow-up check.","Combine composition and flow efficiency.",["Concern: inventory is accumulating due to weak demand or obsolescence.","Alternative: deliberate stock build before growth or supply disruption.","Check sales forecast, aging/markdown data, industry conditions and subsequent turnover."],"The joint movement is a warning signal, not proof of failure.","Ratios generate hypotheses that operating evidence must test.")
      ]
    },
    "health/profitability":{
      deepDive:[
        S("Margin ladder","Each profit level isolates different decisions",["Gross margin reflects pricing and product/input cost. Operating margin incorporates operating overhead and asset use before financing and tax. Net margin includes interest, taxes and nonoperating items.","Use the numerator named by the course. Substituting net income for EBIT changes the economic question."],[],"Which margin is most directly affected by capital-structure interest expense?"),
        S("ROA decomposition","Margin and turnover jointly create operating return",["Operating return on assets can be viewed as operating margin multiplied by sales-to-assets. A low-margin retailer can produce strong asset return through rapid turnover; a high-margin infrastructure business may have slow turnover.","The decomposition identifies whether performance changes arise from profit per sale or sales generated per asset."],[],"If margin falls but turnover rises enough, can ROA improve?"),
        S("ROE and leverage","Equity return can rise for risky reasons",["ROE reflects profitability, asset efficiency and leverage. Debt can raise ROE when operating return exceeds after-cost debt, but it also makes equity outcomes more volatile and can reduce resilience.","Compare ROE with leverage, cash flow and risk; do not reward the ratio mechanically."],[],"Could repurchasing shares with debt raise ROE without improving operations?")
      ],
      formulaKeys:["Operating margin","Sales-to-assets","Return on assets","Return on equity"],
      termsExtra:[["Gross margin","Biên lợi nhuận gộp"],["DuPont decomposition","Phân tích DuPont"],["Operating ROA","Tỷ suất sinh lợi hoạt động trên tài sản"]],
      guidedPractice:[
        P("Easy","Operating margin","EBIT 90, sales 1,200. Find operating margin.","EBIT divided by sales.",["90/1,200=0.075."],"Operating margin = 7.5%.","It measures operating profit per sales unit."),
        P("Intermediate","Operating ROA decomposition","Operating margin 5%; sales-to-assets 2.0×. Find operating ROA.","Multiply the two components.",["0.05×2.0=0.10."],"Operating ROA = 10%.","Sales cancel algebraically, leaving EBIT/assets."),
        P("Advanced","ROE quality","Firm X and Y both have ROE 18%. X has low debt and 12% ROA; Y has high debt and 5% ROA. What additional conclusion is justified?", "Do not rank on ROE alone.",["X appears to generate stronger return from its asset base.","Y's ROE likely relies more on leverage.","Assess interest coverage, cash flow, debt definitions and risk before ranking."],"Equal ROE does not imply equal operating quality or risk.","Decomposition prevents leverage from masquerading as operating improvement.")
      ]
    },
    "health/liquidity":{
      deepDive:[
        S("Coverage ratios","Current and quick ratios measure different asset pools",["Current ratio includes all current assets; quick ratio focuses on cash, marketable securities and receivables, normally excluding inventory and prepaid items. Quick ratio is stricter when inventory is slow or uncertain.","Both are point-in-time ratios and can be altered near reporting date."],[],"Why might two firms with the same current ratio have very different quick ratios?"),
        S("Direction rules","Equal changes can move a ratio unexpectedly",["When current ratio is above 1, adding equal amounts to current assets and current liabilities lowers the ratio; paying current liabilities with current assets raises it. When the starting ratio is below 1, directions reverse.","Analyze numerator and denominator algebraically rather than relying on 'more cash is always better.'"],[],"If CA=100 and CL=50, what happens after borrowing 20 short term and holding cash?"),
        S("Quality and timing","A ratio is not a cash forecast",["Receivables may be overdue and inventory may be obsolete. Current liabilities can cluster before current assets convert to cash. Seasonal businesses can look different depending on measurement date.","Pair ratios with aging schedules, operating cash flow, credit lines and cash-flow timing."],[],"Can a current ratio above 2 prevent a payment default tomorrow?")
      ],
      formulaKeys:["Current ratio","Quick ratio"],
      termsExtra:[["Cash ratio","Tỷ số tiền mặt"],["Window dressing","Làm đẹp báo cáo tạm thời"],["Aging schedule","Bảng tuổi nợ"]],
      guidedPractice:[
        P("Easy","Current and quick ratios","Cash 20, receivables 30, inventory 50, current liabilities 40. Find current and quick ratios.","Current assets include all three; quick assets exclude inventory.",["CA=20+30+50=100; current ratio=100/40=2.5.","Quick assets=50; quick ratio=50/40=1.25."],"Current ratio 2.50; quick ratio 1.25.","The gap measures reliance on inventory and other excluded assets."),
        P("Intermediate","Transaction effect","Starting CA=100, CL=60. Borrow 20 short term and keep cash. Find new current ratio and direction.","Both numerator and denominator rise by 20.",["Old ratio=100/60=1.667.","New ratio=120/80=1.50."],"Current ratio falls to 1.50.","When the starting ratio exceeds 1, equal additions pull it toward 1."),
        P("Advanced","Pay current liability","Starting CA=100, CL=60. Use 20 cash to pay accounts payable. Find new ratio and explain.","Subtract 20 from both CA and CL.",["New CA=80; new CL=40.","New ratio=80/40=2.00."],"Current ratio rises from 1.67 to 2.00.","When ratio exceeds 1, equal reductions move it away from 1; liquidity quality still depends on remaining assets.")
      ]
    },
    "health/asset-mgmt":{
      deepDive:[
        S("Flow-stock matching","Use average balances when possible",["Sales and COGS cover a period; receivables, inventory and assets are measured at dates. Average beginning and ending balance better approximates resources used during the year.","Year-end balances can mislead seasonal firms, so monthly averages may be superior when available."],[],"Why is ending inventory alone a weak denominator for a strongly seasonal retailer?"),
        S("Turnover and days","Two forms tell the same story differently",["Inventory turnover=COGS/average inventory; DIO≈365/turnover. Receivables turnover=credit sales/average receivables; DSO≈365/turnover. Turnover emphasizes frequency; days emphasizes time.","Use COGS for inventory because inventory is recorded at cost, and credit sales for receivables when available."],[],"What operational interpretation follows when receivables turnover falls?"),
        S("Efficiency has an optimum","Higher is not always better",["Very low turnover can signal excess or obsolete assets. Extremely high turnover can signal stockouts, underinvestment or credit terms so strict that sales are lost.","Benchmark against strategy, capacity, service quality and industry rather than maximizing every ratio."],[],"How could inventory turnover rise while customer service worsens?")
      ],
      formulaKeys:["Inventory turnover","Average collection period","Sales-to-assets","Days inventory outstanding"],
      termsExtra:[["Receivables turnover","Vòng quay khoản phải thu"],["Days sales outstanding","Số ngày thu tiền bình quân"],["Capacity utilization","Mức sử dụng công suất"]],
      guidedPractice:[
        P("Easy","Inventory turnover","COGS 600, beginning inventory 100, ending inventory 140. Find turnover.","Average inventory=(100+140)/2.",["Average inventory=120.","Turnover=600/120."],"Inventory turnover = 5.0×.","Average balance matches the period flow better than ending inventory."),
        P("Intermediate","Days inventory","Using turnover 5.0×, estimate DIO.","365 divided by turnover.",["DIO=365/5."],"DIO = 73 days.","This translates frequency into holding time."),
        P("Advanced","Recover sales from DSO","Average receivables are 3,000 and DSO is 20 days. Estimate annual credit sales using 365 days; total assets 75,000. Find sales-to-assets.","Daily credit sales=receivables/DSO.",["Daily sales=3,000/20=150.","Annual sales=150×365=54,750.","Sales-to-assets=54,750/75,000."],"Estimated sales=54,750; sales-to-assets=0.73×.","Days ratios can be rearranged to recover implied flows.")
      ]
    },
    "health/leverage":{
      deepDive:[
        S("Claim priority","Debt adds fixed obligations",["Debt holders have contractual claims for interest and principal; equity is residual. Leverage can amplify equity return because a smaller equity base supports the assets, but fixed claims also amplify downside and distress risk.","Operating risk and financial risk should be separated: a stable business may safely support more debt than a volatile one, all else equal."],[],"Why does equity become more volatile when debt is added to unchanged operating assets?"),
        S("Multiple definitions","State the numerator and denominator",["Debt ratio may use total liabilities or interest-bearing debt. Debt-to-equity may use book or market values. Debt-to-capital normally compares debt with debt plus equity.","A correct answer states the course definition and applies it consistently across firms and periods."],[],"Why might market debt-to-equity fall after share price rises even if debt is unchanged?"),
        S("Coverage and cash flow","Balance ratios do not show payment capacity",["Leverage ratios measure financing structure; coverage ratios compare operating earnings or cash flow with required payments. A firm with moderate debt can still face stress if earnings are volatile or debt matures soon.","Review interest coverage, maturity schedule, covenant headroom and liquidity alongside D/E."],[],"What additional information is needed to judge whether D/E=1.5 is safe?")
      ],
      formulaKeys:["Debt-to-equity"],
      termsExtra:[["Interest-bearing debt","Nợ chịu lãi"],["Debt-to-capital","Tỷ lệ nợ trên tổng vốn dài hạn"],["Interest coverage","Khả năng thanh toán lãi"]],
      guidedPractice:[
        P("Easy","Debt-to-equity","Interest-bearing debt 300, equity 200. Find D/E.","Debt divided by equity.",["300/200."],"D/E = 1.50×.","The firm has 1.5 units of debt for each equity unit under this definition."),
        P("Intermediate","Debt-to-capital","Using debt 300 and equity 200, find debt-to-capital.","Denominator is debt+equity.",["300/(300+200)."],"Debt-to-capital = 60%.","D/E and debt-to-capital express the same structure on different scales."),
        P("Advanced","Leverage effect on ROE","Assets 1,000 earn EBIT 120. Compare all-equity financing with debt 500 at 8% interest, ignoring tax. Find ROE in each case.","Net income before tax=EBIT−interest; equity=assets−debt.",["All equity: income=120; equity=1,000; ROE=12%.","Levered: interest=40; income=80; equity=500; ROE=16%."],"ROE rises from 12% to 16%, while fixed payment risk increases.","Leverage is favorable here because operating return on assets exceeds debt cost.")
      ]
    },
    "health/cash-cycle":{
      deepDive:[
        S("Operating clock","CCC measures days from cash commitment to cash recovery",["DIO measures time inventory is held, DSO measures time to collect customers, and DPO measures time before suppliers are paid. CCC=DIO+DSO−DPO.","The subtraction reflects supplier financing: later payment delays the firm's cash outflow."],[],"Why does an increase in DPO reduce CCC?"),
        S("Working-capital financing","Longer cycles tie up more funds",["A longer positive CCC means cash is committed to inventory and receivables for more days before collection. Rapid sales growth can increase the currency amount financed even if cycle days are unchanged.","Estimate cash tied up by multiplying daily operating cost or sales components by relevant day changes, using consistent bases."],[],"If sales double but CCC stays 30 days, can working-capital funding need still rise?"),
        S("Optimization","Shorter is helpful only within operating constraints",["Reducing inventory too far can cause stockouts; aggressive collection can lose customers; stretching payables can sacrifice discounts or supplier trust. The objective is value-maximizing working capital, not the mathematically smallest CCC.","Compare financing benefit with margin, service and relationship costs."],[],"Could taking an early-payment discount increase value even though it reduces DPO and lengthens CCC?")
      ],
      timelines:[T("Cash conversion cycle","The timeline is broken into operating stages rather than squeezed into one line.",[
        R("Inventory stage",[E("Day 0","Inventory acquired","DIO clock begins","focal"),E("Day DIO","Sale occurs","Receivable may be created","inflow")]),
        R("Supplier-payment stage",[E("Day DPO","Cash paid to supplier","Operating cash leaves","outflow")]),
        R("Customer-collection stage",[E("Day DIO + DSO","Cash collected","Operating cash returns","inflow")]),
        R("Financing gap",[E("From DPO","Cash out","Gap begins","outflow"),E("To DIO + DSO","Cash in","Gap ends","inflow")])
      ],"CCC=(DIO+DSO)−DPO is the length of the cash financing gap shown in the final row.","Firm operating perspective")],
      formulaKeys:["Cash conversion cycle","Days inventory outstanding","Days payable outstanding","Average collection period"],
      termsExtra:[["Days payable outstanding","Số ngày phải trả"],["Operating cycle","Chu kỳ hoạt động"],["Working-capital funding gap","Khoảng tài trợ vốn lưu động"]],
      guidedPractice:[
        P("Easy","Compute CCC","DIO=50 days, DSO=30, DPO=25. Find CCC.","Add inventory and receivable days, subtract payable days.",["CCC=50+30−25."],"CCC = 55 days.","Supplier credit finances the first 25 days of the operating cycle."),
        P("Intermediate","Proposal effect","Collection falls 20 days, inventory rises 5 days, and suppliers are paid 15 days sooner. Find change in CCC.","Paying sooner means DPO decreases by 15.",["ΔCCC=ΔDIO+ΔDSO−ΔDPO.","=+5−20−(−15)."],"ΔCCC=0 days.","The DSO improvement is exactly offset by inventory increase and earlier supplier payment."),
        P("Advanced","Value of a five-day reduction","Annual operating cash cost is 36.5 million and a process change reduces CCC by 5 days without other effects. Estimate cash released and annual financing saving at 10%.","Use daily cost, then multiply by days and financing rate.",["Daily operating cash cost=36.5m/365=0.1m.","Cash released=0.1m×5=0.5m.","Annual financing saving=0.5m×10%=0.05m."],"Cash released 500,000; annual financing saving about 50,000.","Cycle improvements create value through reduced funding, but implementation costs must also be considered.")
      ]
    }
  });
})();
