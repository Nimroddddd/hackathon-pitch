export default function Objective() {
  return (
    <div className="mt-10">
      <h3 className="mb-8 text-3xl font-semibold"><span className="underline">Obj</span>ectives</h3>
      <p>The autonomous trading agent is designed to analyze financial markets, execute trades, and optimize portfolio performance
         without human intervention. The goal is to leverage advanced algorithms and data-driven insights to achieve consistent
         profitability while minimizing risk. It also has primary objectives of solving 2 main problems traders often face:
      </p>
      <div className="flex mt-5 gap-6">
        <img src="/images/meme.png" />
        <div>
          <p className="mt-2">
            • <span className="underline">Emotional Trading</span>: Emotional trading occurs when traders make decisions based on their 
            emotions rather than logical analysis. This can lead to impulsive trades, excessive risk-taking, and ultimately, losses.
            The Tradegent Agent is here to fix that major problem by prompting users for their desired trading behaviours, and makes
            relevant trades on behalf of them using the collected data.
          </p>
        </div>
      </div>
    </div>
  )
}