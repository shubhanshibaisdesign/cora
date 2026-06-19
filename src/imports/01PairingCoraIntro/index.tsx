import { useState, useEffect } from "react";
import svgPaths from "./svg-deyk69li3x";
import imgGradient from "./6dc825a935a2c433db96cfa6d9120388c0579d36.png";
import imgGlowEffect from "./eba8ff0db2ae2e3a63bcbe928795e6e7b13679f5.png";
import AnimatedDial from "../Component1";

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

function AppleButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#dd692c] flex items-center justify-center h-[52px] left-0 overflow-clip rounded-[41px] top-[693px] w-[353px] cursor-pointer" data-name="Apple Button">
      <div className="-translate-x-1/2 -translate-y-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.5px)] text-[#fdfdfd] text-[16px] text-center top-[calc(50%+0.5px)] whitespace-nowrap">
        <p className="leading-[21.8px]">{label}</p>
      </div>
    </div>
  );
}

function Gradient() {
  return (
    <div className="absolute blur-[58px] h-[457px] left-[3px] rounded-[89px] top-[144px] w-[344px]" data-name="Gradient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[89px]">
        <img alt="" className="absolute h-full left-[-56.92%] max-w-none top-0 w-[220.82%]" src={imgGradient} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[343px] left-[calc(50%-0.5px)] top-1/2 w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8215">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8216">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8217">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8218">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8219">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8220">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8221">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8222">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8223">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8224">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8225">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8226">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8227">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8228">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8229">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8230">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8231">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8232">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8233">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8234">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8235">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8236">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="h-[343.131px] relative w-[0.991px]">
      <div className="absolute inset-[0_-100.89%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.99142 343.131">
          <g id="Group 8237">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="1.49142" x2="1.49142" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.631" y2="342.631" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="h-[343px] relative w-0">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 343">
          <g id="Group 8238">
            <line id="Line 7" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="0.5" y2="9.5" />
            <line id="Line 8" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="round" x1="0.5" x2="0.5" y1="333.5" y2="342.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DeviceImage() {
  return (
    <div className="absolute h-[318px] left-[7px] overflow-clip top-[214px] w-[336.706px]" data-name="Device image">
      <div className="absolute h-[318px] left-0 rounded-[18px] top-0 w-[336.706px]" data-name="Glow effect">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-90 pointer-events-none rounded-[18px] size-full" src={imgGlowEffect} />
      </div>
      <div className="absolute left-[32px] size-[274px] top-[22px]" data-name="deviceRadius">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 274 274">
          <circle cx="137" cy="137" id="deviceRadius" r="136.5" stroke="var(--stroke-0, #FFD8C3)" />
        </svg>
      </div>
    </div>
  );
}

const DIAL_STATES = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","35","36","37","38","39","40","41","42","43","44","45","46","47"] as const;
type DialState = typeof DIAL_STATES[number];

function ContentArea({ onComplete, onSupportingClick }: { onComplete?: () => void; onSupportingClick?: () => void }) {
  const [pairing, setPairing] = useState(false);
  const [dialState, setDialState] = useState<DialState>("1");

  useEffect(() => {
    if (!pairing) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      if (i >= DIAL_STATES.length) {
        clearInterval(id);
        onComplete?.();
        return;
      }
      setDialState(DIAL_STATES[i]);
    }, 80);
    return () => clearInterval(id);
  }, [pairing, onComplete]);

  return (
    <div className="h-[774px] relative shrink-0 w-full" data-name="ContentArea">
      <AppleButton
        label={pairing ? "Device Pairing" : "Start Pairing"}
        onClick={() => { if (!pairing) setPairing(true); }}
      />
      <div className="-translate-x-1/2 -translate-y-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 text-[16px] text-black text-center top-[calc(50%+275.5px)] whitespace-nowrap cursor-pointer" onClick={onSupportingClick}>
        <p className="leading-[21.8px]">Supporting someone</p>
      </div>
      <Gradient />
      <div className="absolute left-[5px] top-[201px]" data-name="Component 1">
        <AnimatedDial property1={dialState} />
      </div>
      <DeviceImage />
    </div>
  );
}

export default function Component01PairingCoraIntro({ onComplete, onSupportingClick }: { onComplete?: () => void; onSupportingClick?: () => void } = {}) {
  return (
    <div className="bg-[#fafafa] relative rounded-[44px] size-full" data-name="01 · Pairing — Cora intro">
      <div className="content-stretch flex flex-col gap-[13px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <div className="h-[47px] overflow-clip relative shrink-0 w-[393px]" data-name="Status Bar">
          <Notch />
          <LeftSide />
          <RightSide />
        </div>
        <p className="shrink-0 mt-[24px] font-['Urbanist:Regular',sans-serif] text-[16px] text-[#dd692c] text-center">
          Please turn on your Bluetooth device
        </p>
        <ContentArea onComplete={onComplete} onSupportingClick={onSupportingClick} />
      </div>
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[44px]" />
    </div>
  );
}