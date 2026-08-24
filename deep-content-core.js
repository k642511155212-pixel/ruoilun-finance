"use strict";

/*
  Finance Mastery v2.0 — deep-learning content helpers
  ----------------------------------------------------
  This layer extends, rather than replaces, data.js and study-content.js.
  Original key principles, the 600-question bank, routing and LocalStorage
  utilities remain untouched.
*/
(() => {
  const D = window.FM_DATA;
  if (!D) return;

  const formulaAdditions = {
    "Level perpetuity": {
      latex: "PV = \\frac{C}{r}",
      variables: [["C","constant cash flow starting one period from now"],["r","required return per matching period"],["PV","value one period before the first cash flow"]],
      useWhen: "Equal cash flows continue forever and the first payment is one period after the valuation date.",
      trap: "A perpetuity beginning today includes an immediate cash flow plus the value of payments from next period onward."
    },
    "Growing annuity": {
      latex: "PV = \\frac{C_1}{r-g}\\left[1-\\left(\\frac{1+g}{1+r}\\right)^n\\right]",
      variables: [["C₁","first payment, one period from now"],["g","constant growth rate per period"],["r","discount rate per period"],["n","number of payments"]],
      useWhen: "A finite stream begins one period from now and grows at a constant rate.",
      trap: "Do not use the growing-perpetuity formula when the cash-flow stream ends after n payments."
    },
    "Periodic rate from APR": {
      latex: "r_{period}=\\frac{APR}{m}",
      variables: [["APR","nominal annual percentage rate"],["m","compounding or payment periods per year"],["rperiod","rate used for one period"]],
      useWhen: "The APR convention states nominal annual rate with m equal compounding periods.",
      trap: "This division does not convert an EAR to a periodic rate. For EAR, take the matching root."
    },
    "Periodic rate from EAR": {
      latex: "r_{period}=(1+EAR)^{1/m}-1",
      variables: [["EAR","effective annual rate"],["m","periods per year"],["rperiod","equivalent effective periodic rate"]],
      useWhen: "An effective annual rate must be converted to a monthly, quarterly, or other effective periodic rate.",
      trap: "EAR/m is only an approximation and is wrong for exact TVM work."
    },
    "Outstanding loan balance": {
      latex: "B_k=PMT\\left[\\frac{1-(1+r)^{-(n-k)}}{r}\\right]",
      variables: [["Bk","balance immediately after payment k"],["PMT","level periodic payment"],["r","rate per payment period"],["n-k","payments remaining"]],
      useWhen: "Finding a payoff balance immediately after a scheduled payment on a fully amortizing loan.",
      trap: "Immediately before a payment, include that payment or grow the after-payment balance by one period."
    },
    "Holding-period return": {
      latex: "HPR=\\frac{P_1-P_0+CF_1}{P_0}",
      variables: [["P₀","purchase price"],["P₁","sale or ending price"],["CF₁","cash income received, such as coupon or dividend"],["HPR","return over the actual holding period"]],
      useWhen: "Measuring realized return over a stated holding period.",
      trap: "YTM is not automatically the realized return when the bond is sold early or coupons are reinvested at another rate."
    },
    "Current yield": {
      latex: "Current\\ Yield=\\frac{Annual\\ Coupon}{Bond\\ Price}",
      variables: [["Annual coupon","cash coupon paid over one year"],["Bond price","current market price"]],
      useWhen: "Measuring annual coupon income relative to current price.",
      trap: "Current yield ignores capital gain or loss toward face value and is therefore not YTM."
    },
    "Portfolio expected return": {
      latex: "E(R_p)=\\sum_{i=1}^{N}w_iE(R_i)",
      variables: [["wi","portfolio weight in asset i"],["E(Ri)","expected return of asset i"],["E(Rp)","portfolio expected return"]],
      useWhen: "Combining asset expected returns using investment weights.",
      trap: "Expected return is weighted-average linear; portfolio risk generally is not."
    },
    "Two-asset portfolio variance": {
      latex: "\\sigma_p^2=w_A^2\\sigma_A^2+w_B^2\\sigma_B^2+2w_Aw_B\\rho_{AB}\\sigma_A\\sigma_B",
      variables: [["wA, wB","portfolio weights"],["σA, σB","asset standard deviations"],["ρAB","correlation between asset returns"],["σp²","portfolio variance"]],
      useWhen: "Quantifying diversification for a two-asset portfolio.",
      trap: "Taking a weighted average of standard deviations ignores covariance and is generally wrong."
    },
    "Common-size percentage": {
      latex: "Common\\text{-}size\\ \\%=\\frac{Line\\ Item}{Base\\ Amount}\\times100",
      variables: [["Line item","account being analyzed"],["Base amount","total assets for balance sheet or sales for income statement"]],
      useWhen: "Comparing statement composition across firms or years of different size.",
      trap: "Balance-sheet and income-statement bases are different."
    },
    "Return on assets": {
      latex: "ROA=\\frac{Net\\ Income}{Average\\ Total\\ Assets}",
      variables: [["Net income","profit after expenses and taxes"],["Average total assets","average resources employed during the period"]],
      useWhen: "Assessing accounting profit earned per unit of assets.",
      trap: "Some courses use EBIT-based operating ROA. State and apply the assigned numerator consistently."
    },
    "Return on equity": {
      latex: "ROE=\\frac{Net\\ Income}{Average\\ Equity}",
      variables: [["Net income","earnings available under the course definition"],["Average equity","average shareholders' equity"]],
      useWhen: "Measuring accounting return generated for shareholders.",
      trap: "Leverage can raise ROE while also raising financial risk; ROE alone does not prove value creation."
    },
    "Days inventory outstanding": {
      latex: "DIO=\\frac{Average\\ Inventory}{COGS/365}",
      variables: [["Average inventory","average inventory balance"],["COGS/365","average daily cost of goods sold"]],
      useWhen: "Estimating days inventory remains before sale.",
      trap: "Use COGS, not sales, when inventory is measured at cost."
    },
    "Days payable outstanding": {
      latex: "DPO=\\frac{Average\\ Payables}{Purchases/365}",
      variables: [["Average payables","average accounts payable"],["Purchases/365","average daily credit purchases"]],
      useWhen: "Estimating how long the firm takes to pay suppliers.",
      trap: "If purchases are unavailable, COGS may be used only as a stated approximation."
    }
  };
  Object.assign(D.formulaDetails, formulaAdditions);

  const formulaRows = [
    ["Level perpetuity","PV=C/r","Equal forever cash flow starting next period","TVM"],
    ["Growing annuity","PV=C1/(r-g)[1-((1+g)/(1+r))^n]","Finite growing payment stream","TVM"],
    ["Periodic rate from APR","r=APR/m","Nominal APR conversion","Rates"],
    ["Periodic rate from EAR","r=(1+EAR)^(1/m)-1","Effective-rate conversion","Rates"],
    ["Outstanding loan balance","Bk=PMT[1-(1+r)^-(n-k)]/r","PV of remaining payments","Loans"],
    ["Holding-period return","HPR=(P1-P0+CF1)/P0","Realized holding-period return","Valuation"],
    ["Current yield","Current yield=annual coupon/price","Coupon-income yield","Valuation"],
    ["Portfolio expected return","E(Rp)=ΣwiE(Ri)","Weighted expected return","Risk"],
    ["Two-asset portfolio variance","σp²=wA²σA²+wB²σB²+2wAwBρABσAσB","Two-asset diversification","Risk"],
    ["Common-size percentage","Line item/base amount ×100","Statement structure","Firm health"],
    ["Return on assets","ROA=Net income/Average assets","Accounting asset return","Firm health"],
    ["Return on equity","ROE=Net income/Average equity","Accounting equity return","Firm health"],
    ["Days inventory outstanding","DIO=Average inventory/(COGS/365)","Inventory days","Firm health"],
    ["Days payable outstanding","DPO=Average payables/(Purchases/365)","Supplier-payment days","Firm health"]
  ];
  const knownFormulas = new Set((D.formulas || []).map(x => x[0]));
  formulaRows.forEach(row => { if (!knownFormulas.has(row[0])) D.formulas.push(row); });

  const S = (kicker,title,paragraphs,bullets=[],check='') => ({kicker,title,paragraphs,bullets,check});
  const P = (level,title,prompt,hint,steps,answer,why='') => ({level,title,prompt,hint,steps,answer,why});
  const E = (time,cash,note='',kind='neutral') => ({time,cash,note,kind});
  const R = (label,events) => ({label,events});
  const T = (title,intro,rows,caption,perspective='',kicker='Cash-flow map') => ({title,intro,rows,caption,perspective,kicker});

  function register(records){
    D.lessonEnhancements = D.lessonEnhancements || {};
    Object.entries(records).forEach(([key,extra]) => {
      const base = D.lessonEnhancements[key] || {};
      D.lessonEnhancements[key] = {
        ...base,
        ...extra,
        formulaKeys:[...new Set([...(base.formulaKeys||[]),...(extra.formulaKeys||[])])],
        moreExplanation:[...(base.moreExplanation||[]),...(extra.moreExplanation||[])],
        examples:[...(base.examples||[]),...(extra.examples||[])],
        termsExtra:[...(base.termsExtra||[]),...(extra.termsExtra||[])]
      };
    });
  }

  window.FM_DEEP = {S,P,E,R,T,register};
  D.version = "2.0";
  D.deepPracticeCount = 144;
})();
