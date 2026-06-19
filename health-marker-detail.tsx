import { useState } from "react";
import svgPaths from "./src/imports/01Homepage/svg-bf1xpow9k5";
import bgGradient from "./bg-gradient.png";

const TABS = ["Today", "Daily", "Weekly", "Monthly"] as const;

interface HealthMarkerDetailProps {
  onBack: () => void;
  title: string;
  label: string;
  target: string;
  value: string;
  unit: string;
  status: string;
  chart: React.ReactNode;
  paragraphs: string[];
}

export const HealthMarkerDetail = ({ onBack, title, label, target, value, unit, status, chart, paragraphs }: HealthMarkerDetailProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]>("Weekly");

  return (
    <div className="min-h-screen bg-[#F0EAE3] flex items-center justify-center py-8">
      <div className="bg-[#fdfdfd] relative rounded-[44px] w-[393px] h-[852px] overflow-hidden shadow-2xl flex flex-col">
        <div className="h-[48px] shrink-0" />

        <div className="-translate-x-1/2 absolute blur-[200px] h-[457px] left-1/2 rounded-[89px] top-[180px] w-[344px] pointer-events-none z-0">
          <div className="absolute inset-0 overflow-hidden rounded-[89px]">
            <img alt="" className="absolute h-full left-[-56.92%] max-w-none top-0 w-[220.82%]" src={bgGradient} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden px-[20px] relative z-[1] scrollbar-hide">
          <div className="relative w-full pb-[40px]">
            <div className="flex items-center gap-[12px] pt-[16px]">
              <div className="size-[38px] rounded-full bg-[#dd692c] flex items-center justify-center cursor-pointer shrink-0" onClick={onBack}>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M8.5 1L1.5 8L8.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-['Urbanist',sans-serif] font-medium text-[36px] text-[#3f2815] leading-[42px]">{title}</p>
            </div>

            <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 rounded-[20px] w-full mt-[24px]">
              <div className="flex flex-col items-start pb-[5px] pt-[18px] px-[5px]">
                <div className="flex items-center justify-between px-[12px] w-full">
                  <div className="flex flex-col gap-[4px]">
                    <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[16px]">FOCUS</p>
                    <p className="font-['Urbanist',sans-serif] font-normal text-[12px] text-[#434343] leading-[16px]">Last synced 6 mins ago</p>
                  </div>
                  <div className="relative shrink-0 size-[39px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
                      <circle cx="19.5" cy="19.5" fill="#FDFDFD" r="19.5" />
                    </svg>
                    <svg className="absolute" style={{ left: 7.5, top: 7.5, width: 24, height: 24 }} fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p5d4a380} stroke="#434343" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div
                  className="mt-[16px] rounded-[18px] w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(122.197deg, rgba(255,255,255,0) 47.059%, rgba(255,255,255,0.28) 11.765%, rgba(255,255,255,0) 70.588%), linear-gradient(114.938deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 52.941%, rgba(255,255,255,0) 117.65%), linear-gradient(90deg, rgb(249,248,247) 0%, rgb(249,248,247) 100%)",
                  }}
                >
                  <div className="flex flex-col items-end py-[24px] px-[14px] text-[#434343]">
                    <div className="flex items-center justify-between text-[12px] w-full whitespace-nowrap">
                      <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">{label}</p>
                      <p className="font-['Urbanist',sans-serif] font-medium leading-[16px]">{target}</p>
                    </div>
                    <div className="w-[calc(100%+28px)] -mx-[14px] h-[90px] mt-2 overflow-hidden">{chart}</div>
                    <div className="flex font-['Urbanist',sans-serif] font-medium items-end justify-between w-full mt-2">
                      <p className="leading-[12px] text-[12px] text-[#5E8F5B]">{status}</p>
                      <div className="flex flex-col gap-[4px] items-end">
                        <p className="leading-[32px] text-[32px] text-[#5E8F5B]">{value}</p>
                        <p className="leading-[12px] text-[12px] text-right text-[#5E8F5B]">{unit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-[4px] mt-[24px] bg-[rgba(217,217,217,0.3)] rounded-full h-[52px] p-[4px]">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 rounded-full font-['Urbanist',sans-serif] font-medium text-[13px] leading-[16px] transition-all ${
                    activeTab === tab ? "bg-[#fdfdfd] text-[#3f2815] shadow-sm" : "text-[#434343]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-[32px]">
              <p className="font-['Urbanist',sans-serif] font-semibold text-[20px] text-[#3f2815] leading-[26px]">{title}</p>
              {paragraphs.map((text, i) => (
                <p key={i} className="font-['Urbanist',sans-serif] font-normal text-[14px] text-[#434343] leading-[22px] mt-[16px]">{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
