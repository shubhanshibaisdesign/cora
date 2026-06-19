import { useState } from "react";
import svgPaths from "./svg-oz6cu53x48";
import imgImage2 from "./f6c7d15e822568d48a2cf5e92862782e0430765a.png";
import WheelPicker from "../../app/components/WheelPicker";

const KG = Array.from({ length: 181 }, (_, i) => 20 + i);
const LB = Array.from({ length: 401 }, (_, i) => 50 + i);

type Units = "imperial" | "metric";

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

function PairingButton({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#dd692c] flex items-center justify-center h-[52px] left-0 overflow-clip rounded-[41px] top-[693px] w-[353px] cursor-pointer" data-name="Pairing Button">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[21.8px]">Continue</p>
      </div>
    </div>
  );
}

function Back({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative size-[38px] cursor-pointer"
      data-name="back"
      aria-label="Back"
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="back">
          <rect fill="var(--fill-0, #DD692C)" height="37" rx="18.5" width="37" x="0.5" y="0.5" />
          <rect height="37" rx="18.5" stroke="var(--stroke-0, #FDFDFD)" width="37" x="0.5" y="0.5" />
          <path d={svgPaths.p2dad00} fill="var(--stroke-0, #FDFDFD)" id="Line 2" />
        </g>
      </svg>
    </button>
  );
}

function ProgressBar() {
  return (
    <div className="h-[5px] relative shrink-0 w-[116px]" data-name="Progress Bar">
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-0 rounded-[11px] top-0 w-[25px]" data-name="Progress Segment" />
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-[30px] rounded-[11px] top-0 w-[25px]" data-name="Progress Segment" />
      <div className="absolute bg-[#dd692c] h-[5px] left-[60px] rounded-[11px] top-0 w-[26px]" data-name="Progress Segment" />
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-[90px] rounded-[11px] top-0 w-[26px]" data-name="Progress Segment" />
    </div>
  );
}

function Next({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative shrink-0 size-[38px] cursor-pointer"
      data-name="next"
      aria-label="Next"
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="next">
          <rect fill="var(--fill-0, #DD692C)" height="37" rx="18.5" width="37" x="0.5" y="0.5" />
          <rect height="37" rx="18.5" stroke="var(--stroke-0, #FDFDFD)" width="37" x="0.5" y="0.5" />
          <path d={svgPaths.p2dad00} fill="var(--stroke-0, #FDFDFD)" id="Line 2" />
        </g>
      </svg>
    </button>
  );
}

function TopNavBar({ onBack, onNext }: { onBack?: () => void; onNext?: () => void }) {
  return (
    <div className="content-stretch flex gap-[81px] items-center justify-center relative shrink-0 w-[353px]" data-name="topNavBar">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Back onClick={onBack} />
        </div>
      </div>
      <ProgressBar />
      <Next onClick={onNext} />
    </div>
  );
}

function Question() {
  return (
    <div className="relative shrink-0 w-full" data-name="question">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] relative size-full">
          <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Urbanist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#434343] text-[32px] w-[353px]">
            <p className="leading-[33.657px]">What is your current weight?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UnitToggle({
  units,
  onChange,
}: {
  units: Units;
  onChange: (u: Units) => void;
}) {
  const Pill = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className={`h-[36px] w-[163px] rounded-[41px] flex items-center justify-center transition-colors font-['Inter:Medium',sans-serif] font-medium text-[12px] ${
        active ? "border border-[#434343] text-[#434343]" : "text-[#434343]"
      }`}
    >
      {label}
    </button>
  );
  return (
    <div
      className="content-stretch flex h-[52px] items-center justify-between pl-[10px] pr-[9px] py-[8px] relative rounded-[41px] shrink-0 w-[353px]"
      data-name="measurements"
    >
      <div aria-hidden className="absolute border border-[rgba(217,217,217,0.4)] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <Pill label="Imperial" active={units === "imperial"} onClick={() => onChange("imperial")} />
      <Pill label="Metric" active={units === "metric"} onClick={() => onChange("metric")} />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LeftMeaurements() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="leftMeaurements">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function M() {
  return (
    <div className="relative shrink-0 w-full" data-name="m1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434343] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">63 kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[82px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434343] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">64 kg</p>
      </div>
    </div>
  );
}

function M1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="m2">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative rounded-[23px] shrink-0 w-[82px]">
      <div aria-hidden className="absolute border border-[#434343] border-solid inset-0 pointer-events-none rounded-[23px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434343] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">65 kg</p>
      </div>
    </div>
  );
}

function M2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="m3">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[82px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434343] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">66 kg</p>
      </div>
    </div>
  );
}

function M3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="m4">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[82px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#434343] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">67 kg</p>
      </div>
    </div>
  );
}

function M4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="m5">
      <Frame17 />
    </div>
  );
}

function Sizes() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[82px]" data-name="sizes">
      <M />
      <M1 />
      <M2 />
      <M3 />
      <M4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-[14px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 1">
            <line id="Line 2" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="13.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
            <line id="Line 1" stroke="var(--stroke-0, #434343)" strokeLinecap="round" x1="0.5" x2="39.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightMeasurements() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="rightMeasurements">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <Frame7 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <Frame8 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <Frame9 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <Frame10 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <Frame11 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <Frame12 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function TickColumn({ flip = false }: { flip?: boolean }) {
  const rows = 27;
  return (
    <div
      className="flex flex-col items-start gap-[7px] pointer-events-none"
      style={{ width: 40, transform: flip ? "scaleX(-1)" : undefined }}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="bg-[#434343]"
          style={{
            width: i % 6 === 0 ? 40 : 14,
            height: 1,
            opacity: i % 6 === 0 ? 0.8 : 0.55,
          }}
        />
      ))}
    </div>
  );
}

function WeightPicker({
  units,
  kg,
  lb,
  onKg,
  onLb,
}: {
  units: Units;
  kg: number;
  lb: number;
  onKg: (v: number) => void;
  onLb: (v: number) => void;
}) {
  const items = units === "metric" ? KG.map((v) => `${v} kg`) : LB.map((v) => `${v} lb`);
  const value = units === "metric" ? `${kg} kg` : `${lb} lb`;
  return (
    <div className="relative content-stretch flex gap-[60px] items-center justify-center shrink-0 w-[353px]">
      <TickColumn />
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[36px] w-[82px] rounded-[24px] border border-[#434343] pointer-events-none"
        />
        <WheelPicker
          items={items}
          value={value}
          onChange={(v) => {
            const n = parseInt(String(v), 10);
            if (units === "metric") onKg(n);
            else onLb(n);
          }}
          width={120}
          itemHeight={44}
          ariaLabel={units === "metric" ? "Kilograms" : "Pounds"}
        />
      </div>
      <TickColumn flip />
    </div>
  );
}

function Questionarea({
  units,
  setUnits,
  kg,
  lb,
  setKg,
  setLb,
}: {
  units: Units;
  setUnits: (u: Units) => void;
  kg: number;
  lb: number;
  setKg: (v: number) => void;
  setLb: (v: number) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-center relative shrink-0 w-full" data-name="questionarea">
      <Question />
      <UnitToggle units={units} onChange={setUnits} />
      <WeightPicker units={units} kg={kg} lb={lb} onKg={setKg} onLb={setLb} />
    </div>
  );
}

function Frame18({
  onBack,
  onNext,
  ...props
}: {
  onBack?: () => void;
  onNext?: () => void;
  units: Units;
  setUnits: (u: Units) => void;
  kg: number;
  lb: number;
  setKg: (v: number) => void;
  setLb: (v: number) => void;
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[115px] items-center left-[-10px] top-0 w-[373px]">
      <TopNavBar onBack={onBack} onNext={onNext} />
      <Questionarea {...props} />
    </div>
  );
}

function AppleHealth() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[4px] items-center left-[calc(50%-0.5px)] top-[650px]" data-name="appleHealth">
      <div className="pointer-events-none relative rounded-[4px] shrink-0 size-[20px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full" src={imgImage2} />
        <div aria-hidden className="absolute border-[0.2px] border-[rgba(217,217,217,0.4)] border-solid inset-0 rounded-[4px]" />
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[21.8px]">Import from Health</p>
      </div>
    </div>
  );
}

function ContentArea({
  onContinue,
  onBack,
  onNext,
  ...rest
}: {
  onContinue?: () => void;
  onBack?: () => void;
  onNext?: () => void;
  units: Units;
  setUnits: (u: Units) => void;
  kg: number;
  lb: number;
  setKg: (v: number) => void;
  setLb: (v: number) => void;
}) {
  return (
    <div className="h-[756px] relative shrink-0 w-full" data-name="ContentArea">
      <PairingButton onClick={onContinue} />
      <Frame18 onBack={onBack} onNext={onNext} {...rest} />
      <AppleHealth />
    </div>
  );
}

export default function Component06SetupProfile({
  onContinue,
  onBack,
  onNext,
}: { onContinue?: () => void; onBack?: () => void; onNext?: () => void } = {}) {
  const [units, setUnits] = useState<Units>("metric");
  const [kg, setKg] = useState(65);
  const [lb, setLb] = useState(143);

  return (
    <div className="bg-[#fdfdfd] relative rounded-[44px] size-full" data-name="06 · Setup - Profile">
      <div className="content-stretch flex flex-col gap-[13px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <div className="h-[47px] overflow-clip relative shrink-0 w-[393px]" data-name="Status Bar">
          <Notch />
          <LeftSide />
          <RightSide />
        </div>
        <ContentArea
          onContinue={onContinue}
          onBack={onBack}
          onNext={onNext}
          units={units}
          setUnits={setUnits}
          kg={kg}
          lb={lb}
          setKg={setKg}
          setLb={setLb}
        />
      </div>
      <div aria-hidden className="absolute border border-[#fdfdfd] border-solid inset-0 pointer-events-none rounded-[44px]" />
    </div>
  );
}