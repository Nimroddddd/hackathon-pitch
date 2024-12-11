import Motto from "./components/Motto"
import Objective from "./components/Objective"
import Features from "./components/Features"

export default function App() {
  return (
    <div className="bg-slate-300 h-[300vh] text-lg">
      <Motto />
      <div className="px-28">
        <Features />
        <Objective />
      </div>
    </div>
  )
}