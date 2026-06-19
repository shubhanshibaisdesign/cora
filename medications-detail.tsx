import { useState, useEffect } from "react";
import iconDropdown from "./icon-dropdown.svg?url";
import bgGradient from "./bg-gradient.png";

const FRAME_W = 393;
const FRAME_H = 852;

const MEDS = [
  { name: "AMLODIPINE 5MG", doctor: "Dr. Sarah Mitchell", reason: "Lowers blood pressure by relaxing blood vessels", summary: "Lowers blood pressure by relaxing blood vessels" },
  { name: "RAMIPRIL 5MG", doctor: "Dr. James Patel", reason: "Protects heart and kidneys by reducing strain", summary: "Protects heart and kidneys by reducing strain" },
];

function MedCard({ name, doctor, reason, summary }: { name: string; doctor: string; reason: string; summary: string }) {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex flex-col gap-[16px] items-start pb-[8px] pt-[24px] px-[8px] rounded-[20px] w-full">
      <div className="flex items-center justify-between px-[12px] w-full">
        <div className="flex flex-col gap-[4px]">
          <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[21.8px]">{name}</p>
        </div>
        <img alt="" className="size-[29px]" src={iconDropdown} />
      </div>
      <div
        className="flex flex-col justify-between rounded-[18px] w-full px-[14px] py-[24px]"
        style={{
          backgroundImage:
            "linear-gradient(127deg, rgba(255,255,255,0) 47%, rgba(255,255,255,0.28) 12%, rgba(255,255,255,0) 71%), linear-gradient(119deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 53%, rgba(255,255,255,0) 118%), linear-gradient(90deg, rgb(249,248,247) 0%, rgb(249,248,247) 100%)",
        }}
      >
        <div className="flex flex-col gap-[16px]">
          <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#434343] leading-[16px]">Prescribed by : {doctor}</p>
          <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#434343] leading-[16px]">{reason}</p>
        </div>
        <div className="bg-[#dd692c] flex items-center justify-center h-[44px] rounded-[30px] w-full mt-[48px]">
          <p className="font-['Urbanist',sans-serif] font-medium text-[12px] text-[#fdfdfd] leading-[16px]">Check the corresponding prescription</p>
        </div>
      </div>
    </div>
  );
}

export const MedicationsDetail = ({ onBack }: { onBack: () => void }): JSX.Element => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    function update() { setScale(Math.min(window.innerWidth / FRAME_W, window.innerHeight / FRAME_H, 1)); }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <div style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale})`, transformOrigin: "center center" }}>
      <div className="bg-[#fdfdfd] relative rounded-[44px] w-full h-full overflow-hidden shadow-2xl flex flex-col">
        <div className="h-[48px] shrink-0" />

        <div className="-translate-x-1/2 absolute blur-[200px] h-[457px] left-1/2 rounded-[89px] top-[180px] w-[344px] pointer-events-none z-0">
          <div className="absolute inset-0 overflow-hidden rounded-[89px]">
            <img alt="" className="absolute h-full left-[-56.92%] max-w-none top-0 w-[220.82%]" src={bgGradient} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden px-[20px] relative z-[1] scrollbar-hide">
          <div className="relative w-full pb-[40px]">
            <div className="flex items-center gap-[12px]">
              <div className="size-[38px] rounded-full bg-[#dd692c] flex items-center justify-center cursor-pointer shrink-0" onClick={onBack}>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M8.5 1L1.5 8L8.5 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-['Urbanist',sans-serif] font-medium text-[36px] text-[#3f2815] leading-[42px]">Medications</p>
            </div>

            <div className="flex flex-col gap-[16px] mt-[48px]">
              {MEDS.map((med) => (
                <MedCard key={med.name} {...med} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
