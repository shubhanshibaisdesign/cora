import { useState, useEffect } from "react";
import onboardingBg from "./onboarding-bg.png";

const FRAME_W = 393;
const FRAME_H = 852;

export const CaregiverWelcome = (): JSX.Element => {
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
      <div className="bg-[#fdfdfd] relative rounded-[44px] w-full h-full overflow-hidden shadow-2xl">
        <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={onboardingBg} />
        <div className="absolute left-0 bottom-0 w-full h-[300px] pointer-events-none rotate-180">
          <img alt="" className="size-full object-cover" src={onboardingBg} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-['Urbanist',sans-serif] font-medium text-[32px] text-[#434343] leading-[33.657px]">Welcome Emma!</p>
        </div>
      </div>
      </div>
    </div>
  );
};
