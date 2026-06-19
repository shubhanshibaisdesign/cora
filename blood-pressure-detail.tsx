import { useState } from "react";
import { BloodPressureWave } from "./blood-pressure-wave";
import svgPaths from "./src/imports/01Homepage/svg-bf1xpow9k5";
import bgGradient from "./bg-gradient.png";

function Notch() {
  return (
    <div className="-translate-x-1/2 absolute h-[32px] left-[calc(50%+0.5px)] top-0 w-[172px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 32">
        <path d={svgPaths.p29d69840} fill="black" />
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="-translate-x-1/2 absolute h-[21px] left-[calc(16.67%-10.5px)] rounded-[24px] top-[14px] w-[54px]">
      <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[21px] left-[27px] text-[16px] text-black text-center top-px tracking-[-0.32px] w-[54px]">9:41</p>
    </div>
  );
}

function RightSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(83.33%+0.2px)] top-[19px]">
      <div className="-translate-x-1/2 absolute h-[13px] left-[calc(83.33%+25.2px)] top-[19px] w-[27.401px]">
        <div className="-translate-y-1/2 absolute h-[13px] left-0 right-[2.4px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p3f827980} opacity="0.35" stroke="black" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[4.22px] right-0 top-[calc(50%+0.61px)] w-[1.401px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40119 4.22034">
            <path d={svgPaths.p237cb000} fill="black" opacity="0.4" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[9px] left-[2px] right-[4.4px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
            <path d={svgPaths.pa544c00} fill="black" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[11.834px] left-[calc(83.33%-4px)] top-[20px] w-[17px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11.8339">
          <path d={svgPaths.p2bfb00} fill="black" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[12px] left-[calc(83.33%-29.5px)] top-[20px] w-[18px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <path d={svgPaths.p1ec31400} fill="black" />
          <path d={svgPaths.p19f8d480} fill="black" />
          <path d={svgPaths.p13f4aa00} fill="black" />
          <path d={svgPaths.p1bfb7500} fill="black" />
        </svg>
      </div>
    </div>
  );
}

const TABS = ["Today", "Daily", "Weekly", "Monthly"] as const;

export const BloodPressureDetail = ({ onBack }: { onBack: () => void }): JSX.Element => {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]>("Weekly");

  return (
    <div className="min-h-screen bg-[#F0EAE3] flex items-center justify-center py-8">
      <div className="bg-[#fdfdfd] relative rounded-[44px] w-[393px] h-[852px] overflow-hidden shadow-2xl flex flex-col">
        <div className="h-[48px] shrink-0" />

        {/* Background gradient */}
        <div className="-translate-x-1/2 absolute blur-[200px] h-[457px] left-1/2 rounded-[89px] top-[180px] w-[344px] pointer-events-none z-0">
          <div className="absolute inset-0 overflow-hidden rounded-[89px]">
            <img alt="" className="absolute h-full left-[-56.92%] max-w-none top-0 w-[220.82%]" src={bgGradient} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-[20px] relative z-[1] scrollbar-hide">
          <div className="relative w-full pb-[40px]">
            {/* Header */}
            <div className="flex items-center gap-[12px] pt-[16px]">
              <div className="size-[38px] rounded-full bg-[#dd692c] flex items-center justify-center cursor-pointer shrink-0" onClick={onBack}>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M8.5 1L1.5 8L8.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-['Urbanist',sans-serif] font-medium text-[36px] text-[#3f2815] leading-[42px]">Blood Pressure</p>
            </div>

            {/* Focus card */}
            <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 rounded-[20px] w-full mt-[24px]">
              <div className="flex flex-col items-start pb-[8px] pt-[18px] px-[8px]">
                {/* Focus header */}
                <div className="flex items-center justify-between pl-[12px] w-full">
                  <div className="flex flex-col gap-[4px] items-start w-[122px]">
                    <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[16px]">FOCUS</p>
                    <p className="font-['Urbanist',sans-serif] font-normal text-[12px] text-[#434343] leading-[16px]">Last synced 6 mins ago</p>
                  </div>
                  <div className="relative shrink-0 size-[39px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
                      <circle cx="19.5" cy="19.5" fill="#FDFDFD" r="19.5" />
                    </svg>
                    <svg
                      className="absolute"
                      style={{ left: 7.5, top: 7.5, width: 24, height: 24 }}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={svgPaths.p5d4a380}
                        stroke="#434343"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* BP body */}
                <div
                  className="mt-[16px] relative rounded-[18px] w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(122.197deg, rgba(255,255,255,0) 47.059%, rgba(255,255,255,0.28) 11.765%, rgba(255,255,255,0) 70.588%), linear-gradient(114.938deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 52.941%, rgba(255,255,255,0) 117.65%), linear-gradient(90deg, rgb(249,248,247) 0%, rgb(249,248,247) 100%)",
                  }}
                >
                  <div className="flex flex-col items-end pb-[20px] pt-[19px] px-[14px] text-[#434343]">
                    <div className="flex items-center justify-between text-[12px] w-full whitespace-nowrap">
                      <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">BLOOD PRESSURE</p>
                      <p className="font-['Urbanist',sans-serif] font-medium leading-[16px]">Target: ≤ 130/80</p>
                    </div>

                    <div className="w-[calc(100%+28px)] -mx-[14px] h-[90px] mt-2">
                      <BloodPressureWave />
                    </div>

                    <div className="flex font-['Urbanist',sans-serif] font-medium items-end justify-between w-full mt-2">
                      <p className="leading-[12px] text-[12px] text-[#5E8F5B]">In Range</p>
                      <div className="flex flex-col gap-[4px] items-end w-[91px]">
                        <p className="leading-[32px] text-[32px] text-[#5E8F5B]">122/78</p>
                        <p className="leading-[12px] text-[12px] text-right text-[#5E8F5B]">mmHg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-[4px] mt-[24px] bg-[rgba(217,217,217,0.3)] rounded-full h-[52px] p-[4px]">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 rounded-full font-['Urbanist',sans-serif] font-medium text-[13px] leading-[16px] transition-all ${
                    activeTab === tab
                      ? "bg-[#fdfdfd] text-[#3f2815] shadow-sm"
                      : "text-[#434343]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Blood Pressure explainer */}
            <div className="mt-[32px]">
              <p className="font-['Urbanist',sans-serif] font-semibold text-[20px] text-[#3f2815] leading-[26px]">Blood Pressure</p>
              <p className="font-['Urbanist',sans-serif] font-normal text-[14px] text-[#434343] leading-[22px] mt-[16px]">
                Blood pressure measures the force of blood pushing against your artery walls with each heartbeat. It is one of the most important indicators of cardiovascular health and overall wellbeing.
              </p>
              <p className="font-['Urbanist',sans-serif] font-normal text-[14px] text-[#434343] leading-[22px] mt-[16px]">
                The two numbers represent systolic (when the heart pumps) and diastolic (when the heart rests between beats). A reading of 122/78 means your heart is working efficiently and your arteries are in good shape.
              </p>
              <p className="font-['Urbanist',sans-serif] font-normal text-[14px] text-[#434343] leading-[22px] mt-[16px]">
                Cora tracks your blood pressure continuously through optical sensors in the patch that detect pulse wave velocity across your skin. This gives you a real time picture instead of a single snapshot at the clinic.
              </p>
              <p className="font-['Urbanist',sans-serif] font-normal text-[14px] text-[#434343] leading-[22px] mt-[16px]">
                Consistent readings in the normal range like yours are a strong sign that your lifestyle choices are supporting your heart. Regular movement, good sleep, and staying hydrated all help keep your numbers steady over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
