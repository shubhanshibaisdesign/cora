import { useState } from "react";
import svgPaths from "./svg-93hpf2yj19";
import OptionButton from "../Frame2";

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

function PairingButton({ onClick, label }: { onClick?: () => void; label?: string }) {
  return (
    <div onClick={onClick} className="absolute bg-[#dd692c] flex items-center justify-center h-[52px] left-0 overflow-clip rounded-[41px] top-[694px] w-[353px] cursor-pointer" data-name="Pairing Button">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#fdfdfd] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[21.8px]">{label ?? "Skip for now"}</p>
      </div>
    </div>
  );
}

function Question() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#434343] w-full" data-name="question">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Urbanist:Medium',sans-serif] font-medium h-[55px] justify-center relative shrink-0 text-[32px] w-full">
        <p className="leading-[33.657px]">What would you like Cora to focus on?</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
        <p className="leading-[21.8px]">You can change this anytime.</p>
      </div>
    </div>
  );
}

const FOCUS_OPTIONS = ["Blood Pressure", "Heart Rhythm", "ECG", "Something Else"] as const;
type FocusOption = typeof FOCUS_OPTIONS[number];

function Options({ selected, onToggle }: { selected: Set<FocusOption>; onToggle: (opt: FocusOption) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="options">
      {FOCUS_OPTIONS.map(opt => (
        <OptionButton
          key={opt}
          label={opt}
          property1={selected.has(opt) ? "Variant2" : "Default"}
          className={`relative rounded-[41px] w-full ${selected.has(opt) ? "bg-[rgba(221,105,44,0.2)]" : ""}`}
          onClick={() => onToggle(opt)}
        />
      ))}
    </div>
  );
}

function Questionarea({ selected, onToggle }: { selected: Set<FocusOption>; onToggle: (opt: FocusOption) => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-[153px] w-[353px]" data-name="questionarea">
      <Question />
      <Options selected={selected} onToggle={onToggle} />
    </div>
  );
}

function Back() {
  return (
    <div className="relative size-[38px]" data-name="back">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="back">
          <rect fill="var(--fill-0, #DD692C)" height="37" rx="18.5" width="37" x="0.5" y="0.5" />
          <rect height="37" rx="18.5" stroke="var(--stroke-0, #FDFDFD)" width="37" x="0.5" y="0.5" />
          <path d={svgPaths.p2dad00} fill="var(--stroke-0, #FDFDFD)" id="Line 2" />
        </g>
      </svg>
    </div>
  );
}

function ContentArea({ onContinue }: { onContinue?: () => void }) {
  const [selected, setSelected] = useState<Set<FocusOption>>(new Set());
  const toggle = (opt: FocusOption) =>
    setSelected(prev => {
      const next = new Set(prev);
      next.has(opt) ? next.delete(opt) : next.add(opt);
      return next;
    });
  return (
    <div className="h-[745px] relative shrink-0 w-full" data-name="ContentArea">
      <PairingButton onClick={onContinue} label={selected.size > 0 ? "Continue" : "Skip for now"} />
      <Questionarea selected={selected} onToggle={toggle} />
      <div className="absolute flex items-center justify-center left-0 size-[38px] top-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Back />
        </div>
      </div>
    </div>
  );
}

export default function Component07SetupProfile({ onContinue }: { onContinue?: () => void } = {}) {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[44px] size-full" data-name="07 · Setup - Profile">
      <div className="content-stretch flex flex-col gap-[13px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <div className="h-[47px] overflow-clip relative shrink-0 w-[393px]" data-name="Status Bar">
          <Notch />
          <LeftSide />
          <RightSide />
        </div>
        <ContentArea onContinue={onContinue} />
      </div>
      <div aria-hidden className="absolute border border-[#fdfdfd] border-solid inset-0 pointer-events-none rounded-[44px]" />
    </div>
  );
}