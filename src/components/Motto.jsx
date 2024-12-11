import { SplitText } from "./stylish/Split"

export default function Motto() {
  return (
    <div className="relative">
      <img src="/images/landing.jpg" className="w-screen"/>
      <div className="absolute top-[30%] left-[20%] max-w-[30%]">
        <SplitText
         text="Tradegent" className="text-7xl font-lobster h-20" delay={100} />
        <p className="text-2xl mt-5">Unlock Limitless Opportunities: Your Gateway to Seamless Trade, Trusted Partnerships, and Global Growth.</p>
      </div>
    </div>
  )
}