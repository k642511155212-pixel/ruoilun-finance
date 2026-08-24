"use strict";
(() => {
  const H=window.FM_DEEP;if(!H)return;const {S,P,E,R,T,register}=H;
  register({
    "valuation/valuation-principle":{
      deepDive:[
        S("Law of one price","Value comes from comparable cash flows",["The fundamental valuation principle is to discount expected cash flows at a return appropriate for their timing and risk. The resulting intrinsic or fair value is compared with market price to identify whether the security offers sufficient compensation.","A valuation is conditional on forecasts and required return. It is not an observable fact independent of assumptions."],[],"If forecast cash flows stay unchanged but required return rises, what happens to value?"),
        S("Three rates","Coupon, required return and realized return are different",["Coupon rate determines contractual coupon cash. Required return is the discount rate investors demand today for the security's risk. Expected return reflects current price and expected future cash flows. Realized return is calculated after outcomes occur.","Confusing these rates causes the most common bond-valuation errors. The coupon rate does not change merely because market yields change."],[],"Which rate belongs in the discount denominator when pricing today?"),
        S("Decision versus price","Mispricing must exceed frictions and model risk",["If estimated value exceeds price, the security appears attractive under the model. But trading cost, taxes, liquidity, short-sale constraints and estimation uncertainty may prevent a profitable trade.","A sensitivity analysis should vary required return and key cash-flow assumptions rather than report one precise number without context."],[],"Why might a 1% estimated undervaluation be too small to act on?")
      ],
      timelines:[T("Generic security valuation","Every promised or expected cash flow is discounted to the purchase date.",[
        R("Valuation date",[E("t = 0","− Market price or + fair value","Common focal date","focal")]),
        R("Interim cash flows",[E("t = 1","+ CF₁","Coupon, dividend or other cash","inflow"),E("t = 2","+ CF₂","Discount two periods","inflow"),E("…","+ CFt","Continue by date","inflow")]),
        R("Horizon",[E("t = N","+ CFN + sale/redemption","Include terminal amount","inflow")])
      ],"Fair value is the sum of each cash flow's PV. If using a sale horizon, do not also include cash flows after the sale except through the sale price.","Investor perspective")],
      formulaKeys:["Present value","Holding-period return"],
      termsExtra:[["Intrinsic value","Giá trị nội tại"],["Required return","Suất sinh lợi yêu cầu"],["Realized return","Suất sinh lợi thực tế"]],
      guidedPractice:[
        P("Easy","Discount one payoff","A security pays 1,100 in one year with required return 10%. Find fair value.","Discount the payoff one period.",["PV=1,100/1.10."],"Fair value = 1,000.","Required return is the opportunity cost for the payoff's risk."),
        P("Intermediate","Buy decision","A security is priced at 925. You expect 100 at each year-end for four years and sale price 960 at t=4. Required return is 11.25%. Outline value and decision.","Discount four coupons and the sale price to t=0.",["PV coupons=100×[1−(1.1125)^−4]/0.1125.","PV sale=960/(1.1125)^4.","Total fair value≈935.31.","Compare 935.31 with price 925."],"Model value exceeds price by about 10.31; buy under assumptions and ignoring frictions.","Price is judged against discounted future cash flows, not historical purchase price."),
        P("Advanced","Sensitivity range","A perpetuity pays 8 annually. Value it at required returns of 7%, 8% and 9%; interpret sensitivity.","Use C/r three times.",["At 7%: 8/0.07=114.29.","At 8%: 100.00.","At 9%: 88.89."],"Values: 114.29, 100.00 and 88.89.","Long-duration cash flows are highly sensitive to small discount-rate changes.")
      ]
    },
    "valuation/zero-bond":{
      deepDive:[
        S("Cash-flow structure","One maturity payment, no periodic coupon",["A zero-coupon bond is a single promised redemption cash flow. Its price is below face value for a positive yield, and the investor's return comes from accretion toward face value.","The absence of coupon simplifies valuation but concentrates cash flow at maturity, increasing sensitivity to yield for a given maturity."],[],"At positive yield, can an ordinary zero-coupon bond price exceed face value without special features?"),
        S("Strip interpretation","Coupon bonds can be decomposed",["Each coupon and principal payment of a standard bond can be viewed as a separate zero-coupon cash flow. This strip logic explains why a coupon bond price is the sum of discounted individual payments.","A 10-year annual coupon bond has ten coupon payment claims plus one principal claim at t=10; the final date contains two components even though they occur together."],[],"How many distinct dated cash-flow components does a 3-year annual coupon bond have?"),
        S("Yield and accretion","Holding to maturity does not remove interim price risk",["If required yield remains constant and no default occurs, a zero's price grows toward face value as maturity approaches. If market yield changes, its price changes immediately.","An investor forced to sell early can realize a gain or loss relative to the planned accretion path."],[],"Why can a default-free zero still produce a loss over a short holding period?")
      ],
      timelines:[T("Five-year zero-coupon bond","Only the redemption value is paid by the issuer.",[
        R("Purchase",[E("t = 0","− Price P","Investor buys at discount","outflow")]),
        R("No coupon years",[E("t = 1","No coupon","Price accretes if yield unchanged","neutral"),E("t = 2–4","No coupon","Market value remains rate-sensitive","neutral")]),
        R("Maturity",[E("t = 5","+ Face value F","Single contractual payment","inflow")])
      ],"Price today equals F/(1+y)^5 when y is the annual effective yield.","Bondholder perspective")],
      formulaKeys:["Zero-coupon bond"],
      termsExtra:[["Redemption value","Mệnh giá hoàn trả"],["Accretion","Sự tăng dần về mệnh giá"],["Strip","Trái phiếu tách dòng tiền"]],
      guidedPractice:[
        P("Easy","Price a zero","Face value 1,000, 4 years, annual yield 6%. Find price.","PV one maturity payment.",["P=1,000/(1.06)^4."],"P ≈ 792.09.","No coupon annuity is included."),
        P("Intermediate","Solve yield","A 5-year zero with face 1,000 sells for 747.26. Find annual yield.","Use y=(F/P)^(1/n)−1.",["F/P≈1.33822.","Take fifth root and subtract 1."],"Yield ≈ 6.00%.","The yield is the compound rate linking price to redemption."),
        P("Advanced","One-year holding return under yield change","Buy a 5-year zero with face 1,000 at 6% yield. One year later it has 4 years left and yield is 7%. Find one-year HPR.","Price at t0 with 5 periods; price at t1 with 4 periods and new yield.",["P0=1,000/(1.06)^5≈747.26.","P1=1,000/(1.07)^4≈762.90.","HPR=(762.90−747.26)/747.26≈2.09%."],"One-year HPR ≈ 2.09%, below original 6% yield.","The rate increase offsets much of the planned price accretion.")
      ]
    },
    "valuation/coupon-bond":{
      deepDive:[
        S("Two valuation blocks","Coupon annuity plus principal lump sum",["A level-coupon bond price equals the PV of coupon payments plus the PV of face value. The final period includes both the last coupon and principal repayment.","For semiannual bonds, divide annual coupon and nominal YTM by two and double the number of years. Every input must use a half-year period."],[],"What cash flow occurs on the maturity coupon date?"),
        S("Premium and discount","Compare coupon rate with YTM",["If coupon rate equals YTM and face value matches redemption, price equals par on a coupon date. If coupon rate exceeds YTM, generous coupons make the bond sell above par. If coupon rate is below YTM, price is below par.","This relationship is a diagnostic check, not a substitute for calculation."],[],"A 4% coupon bond has 6% YTM. Should price be above or below par?"),
        S("Between coupons","Timing can require accrued interest",["Quoted clean price may exclude accrued interest; invoice or dirty price includes it. The simple course formula usually assumes valuation on a coupon date unless stated otherwise.","If settlement occurs between coupon dates, cash-flow timing uses fractional periods and the market's accrued-interest convention."],[],"Why can the amount paid differ from the quoted clean price?")
      ],
      timelines:[T("Three-year annual coupon bond","Coupons are separated into rows so the final principal is unmistakable.",[
        R("Purchase",[E("t = 0","− Bond price P","Investor pays market value","outflow")]),
        R("Coupons",[E("t = 1","+ Coupon C","First annual coupon","inflow"),E("t = 2","+ Coupon C","Second coupon","inflow")]),
        R("Maturity",[E("t = 3","+ Coupon C","Final coupon","inflow"),E("t = 3","+ Face value F","Principal redemption on same date","inflow")])
      ],"Price is PV(C at t1, t2, t3) plus PV(F at t3).","Bondholder perspective")],
      formulaKeys:["Coupon bond","Current yield"],
      termsExtra:[["Par value","Mệnh giá"],["Premium bond","Trái phiếu cao hơn mệnh giá"],["Clean/dirty price","Giá sạch/giá thanh toán"]],
      guidedPractice:[
        P("Easy","Annual coupon bond","Face 1,000, 5% annual coupon, 3 years, YTM 6%. Find price.","Coupon=50; discount three coupons and face at 6%.",["PV coupons=50[1−(1.06)^−3]/0.06≈133.65.","PV face=1,000/(1.06)^3≈839.62.","Add."],"Price ≈ 973.27.","Coupon rate below YTM correctly produces a discount price."),
        P("Intermediate","Semiannual conversion","10-year bond, face 1,000, 5% coupon paid semiannually, YTM 5.5%. State C, r and n before pricing.","Convert every input to half-year units.",["C=1,000×0.05/2=25.","r=0.055/2=0.0275.","n=10×2=20.","Price=25 annuity PV for 20 periods + face PV."],"C=25; r=2.75% per half-year; n=20; price ≈ 961.93.","Mixed annual and semiannual inputs are a major exam trap."),
        P("Advanced","Price after four coupons","A 10-year annual 5% coupon bond initially has YTM 5.32%. Immediately after the fourth coupon, YTM is unchanged. Find conceptual pricing inputs.","Immediately after coupon 4, six coupons remain.",["Remaining periods=10−4=6.","Coupon=50; face=1,000; periodic yield=5.32%.","Price=50[1−(1.0532)^−6]/0.0532+1,000/(1.0532)^6."],"Price ≈ 983.92.","Revalue only the cash flows still to come at the sale date.")
      ]
    },
    "valuation/ytm-return":{
      deepDive:[
        S("Definition","YTM is an internal rate of return on promised cash flows",["YTM is the single rate that equates current bond price with the PV of promised coupons and principal if the bond is held to maturity. It summarizes price, coupon and maturity in one annualized quote.","YTM is calculated from promised rather than guaranteed cash flows unless default adjustments are explicitly modeled."],[],"What equation defines YTM for a coupon bond?"),
        S("Assumptions","Promised yield is not guaranteed realized return",["Realizing YTM requires receiving promised payments, holding to maturity and reinvesting interim coupons at the YTM under the standard interpretation. If coupons are reinvested at lower rates, realized compound return is lower.","Selling before maturity introduces sale-price risk. A bond's one-period return equals coupon income plus price change divided by beginning price."],[],"Does holding to maturity eliminate coupon reinvestment risk?"),
        S("Yield measures","Current yield is only one component",["Current yield equals annual coupon divided by current price. YTM also includes capital gain or loss as price moves toward face value. Holding-period return uses actual purchase price, cash income and sale price over the investor's actual horizon.","Use the measure named in the question; they are not interchangeable."],[],"For a discount bond, is YTM generally above or below current yield, all else equal?")
      ],
      timelines:[T("YTM versus realized holding return","The promised path and actual sale path can diverge.",[
        R("Purchase",[E("t = 0","− P₀","YTM is solved from promised remaining cash flows","outflow")]),
        R("Holding period",[E("t = 1","+ Coupon","Reinvest at actual available rate","inflow"),E("t = 2","+ Coupon","Actual reinvestment may differ from YTM","inflow")]),
        R("Exit",[E("Sale date","+ P_sale","Depends on remaining maturity and market yield","inflow")])
      ],"Realized HPR uses actual coupon and sale price; original YTM is not mechanically earned after an early sale.","Bondholder perspective")],
      formulaKeys:["Holding-period return","Current yield"],
      termsExtra:[["Reinvestment risk","Rủi ro tái đầu tư"],["Capital-gain yield","Lợi suất tăng giá vốn"],["Promised yield","Lợi suất cam kết"]],
      guidedPractice:[
        P("Easy","Current yield","A bond pays 60 annually and sells for 950. Find current yield.","Coupon divided by price.",["60/950=0.0631579."],"Current yield ≈ 6.32%.","This ignores price movement toward face value."),
        P("Intermediate","One-year HPR","Buy a bond for 980, receive coupon 50 and sell for 990 after one year. Find HPR.","Add income and price change, divide by beginning price.",["Gain=990−980=10.","Total return amount=50+10=60.","HPR=60/980."],"HPR ≈ 6.12%.","Realized return contains both income and capital gain."),
        P("Advanced","Reinvestment shortfall","A two-year bond costs 1,000, pays 100 at t=1 and 1,100 at t=2. Its YTM is 10%. If the t=1 coupon is reinvested at only 4%, find terminal wealth and realized annual compound return.","Compound the first coupon one year at 4%, add final cash, then solve a two-year CAGR.",["Coupon terminal value=100×1.04=104.","Final coupon+principal=1,100.","Terminal wealth=1,204.","Realized annual return=(1,204/1,000)^(1/2)−1."],"Terminal wealth 1,204; realized annual return ≈ 9.73%.","Lower coupon reinvestment reduces realized compound return below YTM.")
      ]
    },
    "valuation/bond-risk":{
      deepDive:[
        S("Inverse price-yield relation","Old cash flows compete with new market rates",["When required yields rise, fixed promised cash flows are discounted more heavily and bond price falls. When yields fall, price rises. The coupon amount does not change for a fixed-rate bond.","This is the same opportunity-cost logic used throughout TVM."],[],"Why would an investor pay less for an old 4% bond after comparable new bonds yield 6%?"),
        S("Maturity and coupon effects","Later weighted cash flows create more sensitivity",["Longer maturity generally increases sensitivity because more value arrives farther in the future. Lower coupons generally increase sensitivity because more of the bond's value is concentrated in the final principal payment.","A zero-coupon bond has duration equal to maturity under simple assumptions and is especially sensitive for a given maturity."],[],"Between equal-maturity 2% and 8% coupon bonds, which is generally more rate-sensitive?"),
        S("Convexity and approximation","Price changes are curved, not perfectly linear",["For a given size yield move, the price gain from a yield decrease is usually larger than the price loss from an equal yield increase. This positive convexity means linear sensitivity measures are local approximations.","Credit spread, liquidity and embedded options can also change price independently of risk-free rates."],[],"Why can two corporate bonds fall differently when Treasury yields are unchanged?")
      ],
      timelines:[T("Why long bonds move more","Cash flows farther from t=0 receive more repeated discounting.",[
        R("Near cash flows",[E("t = 1","Coupon","One discount period","inflow"),E("t = 2","Coupon","Two periods","inflow")]),
        R("Distant cash flows",[E("t = 10","Coupon","Many discount periods","inflow"),E("t = 10","Principal","Large distant amount","inflow")]),
        R("Yield shock",[E("Today","Required yield changes","Every distant discount factor changes repeatedly","focal")])
      ],"A longer distance magnifies the effect of changing each period's discount factor.","Valuation perspective")],
      termsExtra:[["Interest-rate risk","Rủi ro lãi suất"],["Duration","Thời hạn hoàn vốn bình quân có trọng số"],["Convexity","Độ lồi"]],
      guidedPractice:[
        P("Easy","Direction check","Market yield rises from 5% to 6% for a fixed-rate bond. What happens to price?", "Discount factors become smaller.",["Promised cash flows are unchanged.","A higher denominator reduces their PV."],"Bond price falls.","Price adjusts so the old fixed cash flows offer the new required return."),
        P("Intermediate","Compare zeros","Which is more price-sensitive to a 1% yield change: a 2-year zero or a 10-year zero? Explain.","Count how many periods the yield affects.",["2-year price=F/(1+y)^2.","10-year price=F/(1+y)^10.","The yield factor is repeated much more for the 10-year zero."],"The 10-year zero is more sensitive.","Longer maturity concentrates value farther away."),
        P("Advanced","Symmetric yield moves","A bond is priced at 1,000 at 5% yield. A model estimates price 1,085 at 4% and 925 at 6%. Interpret convexity.","Compare gain and loss for equal 1% yield changes.",["Yield decrease gain=85.","Yield increase loss=75.","Gain exceeds loss by 10 for equal opposite yield moves."],"The bond displays positive convexity around 5%.","The price-yield curve bends outward; linear duration alone would predict symmetric changes.")
      ]
    },
    "valuation/stock-ddm":{
      deepDive:[
        S("Equity cash flows","A share is a residual claim with no maturity",["The dividend discount model values all expected future dividends because dividends are cash distributed to shareholders. Even if a shareholder plans to sell, the future sale price itself reflects dividends expected after the sale.","Forecasting dividends is more uncertain than reading contractual bond coupons, so required return and growth assumptions require careful sensitivity analysis."],[],"Why does a no-dividend growth company still have value under dividend logic?"),
        S("Gordon growth","Stable growth is a mature-state model",["P0=D1/(r−g) applies when dividends grow at constant g forever and r>g. It is appropriate for a stable stage, not automatically for a young firm with rapidly changing payout.","Because r−g can be small, modest assumption changes can create large valuation changes."],[],"What happens to model value as g approaches r from below?"),
        S("Multi-stage valuation","Explicit forecast plus terminal value",["Forecast high-growth dividends individually, estimate a terminal price when stable growth begins, and discount both explicit dividends and terminal price to today.","Terminal value at t=N uses D(N+1), the first dividend after the explicit period. It is located at t=N, not at t=0."],[],"If stable growth starts with D6, where is P5 placed?")
      ],
      timelines:[T("Two-stage dividend valuation","Explicit dividends and terminal value are placed on separate rows.",[
        R("Today",[E("t = 0","P₀","PV of all future shareholder cash flows","focal")]),
        R("Explicit stage",[E("t = 1","D₁","Forecast individually","inflow"),E("t = 2","D₂","High growth may vary","inflow"),E("t = 3","D₃","Last explicit dividend in example","inflow")]),
        R("Stable stage",[E("t = 3","P₃=D₄/(r−g)","Value of dividends from t=4 onward","inflow"),E("t = 4…∞","Stable dividends","Captured inside P₃","neutral")])
      ],"Discount D1, D2, D3 and P3 to today; do not separately add stable-stage dividends already inside P3.","Shareholder perspective")],
      formulaKeys:["Gordon growth","Holding-period return"],
      termsExtra:[["Dividend payout","Chi trả cổ tức"],["Terminal price","Giá cuối kỳ dự báo"],["Stable-growth stage","Giai đoạn tăng trưởng ổn định"]],
      guidedPractice:[
        P("Easy","Gordon value","D1=5, r=9%, g=3%. Find P0.","Use D1/(r−g).",["P0=5/(0.09−0.03)."],"P0 = 83.33.","The first dividend occurs one period after valuation."),
        P("Intermediate","Use D0 correctly","A stock just paid D0=2.50. Growth 4%, r=10%. Find value.","Compute D1 first.",["D1=2.50×1.04=2.60.","P0=2.60/(0.10−0.04)."],"P0 ≈ 43.33.","Using D0 directly would understate value."),
        P("Advanced","Two-stage dividends","D1=2, D2=3, D3=4; from D4 onward growth is 3% forever; r=10%. Find P0.","Compute D4, terminal P3, then discount D1–D3 and P3.",["D4=4×1.03=4.12.","P3=4.12/(0.10−0.03)=58.8571.","P0=2/1.10+3/1.10²+(4+58.8571)/1.10³."],"P0 ≈ 51.53.","The terminal price captures all dividends beginning at t=4.")
      ]
    },
    "valuation/preferred-perpetuity":{
      deepDive:[
        S("Hybrid features","Preferred stock combines equity form with bond-like cash flow",["Traditional preferred stock often promises a fixed dividend without a maturity date. That cash-flow pattern resembles a perpetuity, but dividends are generally not a legal debt obligation in the same way as bond interest.","Priority is above common equity but below debt, and contract features such as cumulative dividends or callability matter."],[],"Why can a fixed preferred dividend be valued like a perpetuity but still not be a bond coupon?"),
        S("Cumulative rights","Omitted dividends may accumulate",["Cumulative preferred shares require skipped dividends to be paid before common dividends resume. Noncumulative preferred may lose skipped dividends. The valuation impact depends on probability, timing and legal terms.","Do not add arrears mechanically without reading the contract and payment expectations."],[],"Who is paid first when cumulative preferred arrears exist and common dividends are proposed?"),
        S("Required return","Perpetual duration creates sensitivity",["For fixed dividend D and required return r, price=D/r. Because payments continue indefinitely, a small required-return change can materially change value.","Call provisions can cap upside when yields fall because the issuer may redeem the shares under contract terms."],[],"What happens to a callable preferred's upside if market yields fall sharply?")
      ],
      timelines:[T("Fixed preferred dividend stream","No maturity payment is assumed in the basic perpetuity model.",[
        R("Purchase",[E("t = 0","− P₀","Investor buys preferred share","outflow")]),
        R("Dividends",[E("t = 1","+ D","First fixed dividend","inflow"),E("t = 2","+ D","Second dividend","inflow"),E("t = 3","+ D","Continue","inflow")]),
        R("No fixed end",[E("…∞","+ D forever","Subject to issuer and contract risk","inflow")])
      ],"Basic value is D/r one period before the first expected fixed dividend.","Preferred shareholder perspective")],
      formulaKeys:["Level perpetuity","Holding-period return"],
      termsExtra:[["Cumulative preferred","Cổ phiếu ưu đãi tích lũy"],["Dividend arrears","Cổ tức ưu đãi còn nợ"],["Call provision","Điều khoản mua lại"]],
      guidedPractice:[
        P("Easy","Preferred value","Fixed annual dividend 7.50; required return 8%. Find value.","Use D/r.",["P=7.50/0.08."],"P = 93.75.","No maturity value is added in the basic perpetuity model."),
        P("Intermediate","Solve required return","Preferred pays 6 annually and sells for 75. Find required return implied by price.","Rearrange r=D/P.",["r=6/75."],"r = 8%.","Price and fixed dividend reveal the market's required return under the perpetuity assumption."),
        P("Advanced","Required-return shock","Preferred pays 5 forever. Price it at 6% and 8%; compute percentage price change.","Use D/r at both rates.",["P at 6%=83.3333.","P at 8%=62.50.","Percentage change=(62.50−83.3333)/83.3333=−25%."],"Price falls 25% when required return rises from 6% to 8%.","Perpetual cash flows are highly exposed to discount-rate changes.")
      ]
    }
  });
})();
