import AnalyticsIcon from '@mui/icons-material/Analytics';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import CodeIcon from '@mui/icons-material/Code';

export default function Features() {
  return (
    <div className="mt-10">
      <h1 className="mb-8 text-3xl font-semibold"><span className="underline">Fea</span>tures</h1>
      <div className="flex gap-3">
        <div className='hover:scale-110 duration-300'>
          <p className="text-xl font-semibold mb-2"><AnalyticsIcon fontSize='medium' />Market Analysis</p>
          <p>
            • Data Sources: Integrates with multiple APIs to fetch real-time and historical data
             (e.g., stock prices, crypto markets, forex rates).
          </p>
          <p>
            •	Analysis Methods: Uses technical indicators and 
            fundamental data for decision-making.
          </p>
        </div>
        <div className='hover:scale-110 duration-300'>
          <p className="text-xl font-semibold mb-2"><PsychologyAltIcon fontSize='medium' />2. Strategy Implementation</p>
          <p>
          •	Algorithms: Employs rule-based strategies, machine learning models, or reinforcement learning for trading decisions.
          </p>
          <p>
          •	Risk Management: Implements stop-loss orders, take-profit thresholds, and portfolio diversification to reduce risk.
          </p>
        </div>
        <div className='hover:scale-110 duration-300'>
          <p className="text-xl font-semibold mb-2"><CodeIcon /> 3. Execution Engine</p>
          <p>
            •	Trade Placement: Interfaces with broker APIs for executing buy/sell orders.
          </p>
          <p>
            •	Latency Optimization: Ensures low-latency execution for high-frequency trading strategies.
          </p>
        </div>
      </div>
    </div>
  )
}