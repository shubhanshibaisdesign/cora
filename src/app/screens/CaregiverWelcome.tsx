import { motion } from "motion/react";
import { useState, useEffect } from "react";
import svgPaths from "../../imports/09SetupProfile/svg-01uh8bv0zi";
import imgFrame8217 from "../../imports/09SetupProfile/f602ce354977b09d0217706dbe5610bd8b993ccd.png";

const FRAME_W = 393;
const FRAME_H = 852;

function Notch() {
  return (
    <div className="-translate-x-1/2 absolute h-[32px] left-[calc(50%+0.5px)] top-0 w-[172px]" data-name="Notch">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 32">
        <g id="Notch">
          <path d={svgPaths.p29d69840} fill="var(--fill-0, black)" id="notch" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(16.67%-10.5px)] top-[14px]" data-name="Left Side">
      <div className="-translate-x-1/2 absolute h-[21px] left-[calc(16.67%-10.5px)] rounded-[24px] top-[14px] w-[54px]" data-name="_StatusBar-time">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[21px] left-[27px] not-italic text-[16px] text-black text-center top-px tracking-[-0.32px] w-[54px]">9:41</p>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(83.33%+0.2px)] top-[19px]" data-name="Right Side">
      <div className="-translate-x-1/2 absolute h-[13px] left-[calc(83.33%+25.2px)] top-[19px] w-[27.401px]" data-name="_StatusBar-battery">
        <div className="-translate-y-1/2 absolute h-[13px] left-0 right-[2.4px] top-1/2" data-name="Outline">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p3f827980} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[4.22px] right-0 top-[calc(50%+0.61px)] w-[1.401px]" data-name="Battery End">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40119 4.22034">
            <path d={svgPaths.p237cb000} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[9px] left-[2px] right-[4.4px] top-1/2" data-name="Fill">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
            <path d={svgPaths.pa544c00} fill="var(--fill-0, black)" id="Fill" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[11.834px] left-[calc(83.33%-4px)] top-[20px] w-[17px]" data-name="Wifi">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11.8339">
          <path d={svgPaths.p2bfb00} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[12px] left-[calc(83.33%-29.5px)] top-[20px] w-[18px]" data-name="Icon / Mobile Signal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function CaregiverWelcome() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      const s = Math.min(window.innerWidth / FRAME_W, window.innerHeight / FRAME_H, 1);
      setScale(s);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-screen h-screen flex items-center justify-center bg-gray-100 overflow-hidden"
    >
      <div
        style={{
          width: FRAME_W,
          height: FRAME_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <div className="bg-[#fafafa] relative rounded-[44px] size-full">
          <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
            <div className="h-[852px] overflow-clip relative shrink-0 w-[393px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame8217} />
              <div className="absolute h-[47px] left-0 overflow-clip top-0 w-[393px]">
                <Notch />
                <LeftSide />
                <RightSide />
              </div>
              <div className="absolute h-[745px] left-[20px] top-[60px] w-[353px]">
                <div className="-translate-x-1/2 -translate-y-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#434343] text-[32px] text-center top-[calc(50%+0.5px)] w-[353px]">
                  <p className="leading-[33.657px]">
                    Welcome Emma!
                    <br aria-hidden />
                    Get your journey started.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[44px]" />
        </div>
      </div>
    </motion.div>
  );
}
