import Motto from "./components/Motto"
import Objective from "./components/Objective"
import Features from "./components/Features"

export default function App() {
  return (
    <div className="bg-purple-200 h-[300vh] text-lg font-poppins">
      <Motto />
      <div className="px-28 py-28">
        <Features />
        <Objective />
      </div>
    </div>
  )
}