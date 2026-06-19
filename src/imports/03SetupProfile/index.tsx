import { useState } from "react";
import svgPaths from "./svg-8qtpc8tm8o";
import imgImage2 from "./f6c7d15e822568d48a2cf5e92862782e0430765a.png";
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

function ProgressBar() {
  return (
    <div className="h-[5px] relative shrink-0 w-[116px]" data-name="Progress Bar">
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-0 rounded-[11px] top-0 w-[25px]" data-name="Progress Segment" />
      <div className="absolute bg-[#dd692c] h-[5px] left-[30px] rounded-[11px] top-0 w-[25px]" data-name="Progress Segment" />
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-[60px] rounded-[11px] top-0 w-[26px]" data-name="Progress Segment" />
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-[90px] rounded-[11px] top-0 w-[26px]" data-name="Progress Segment" />
    </div>
  );
}

function Next() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="next">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="next">
          <rect fill="var(--fill-0, #DD692C)" height="37" rx="18.5" width="37" x="0.5" y="0.5" />
          <rect height="37" rx="18.5" stroke="var(--stroke-0, #FDFDFD)" width="37" x="0.5" y="0.5" />
          <path d={svgPaths.p2dad00} fill="var(--stroke-0, #FDFDFD)" id="Line 2" />
        </g>
      </svg>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[81px] items-center justify-center left-1/2 top-0 w-[353px]" data-name="topNavBar">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Back />
        </div>
      </div>
      <ProgressBar />
      <Next />
    </div>
  );
}

function Question1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="question">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-[1_0_0] flex-col font-['Urbanist:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] min-w-px relative text-[#434343] text-[32px]">
        <p className="leading-[33.657px]">What is your biological sex?</p>
      </div>
    </div>
  );
}

const OPTIONS = ["Male", "Female", "Non Binary"] as const;
type Option = typeof OPTIONS[number];

function Question() {
  const [selected, setSelected] = useState<Option | null>(null);
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-1/2 top-[calc(50%-95px)] w-[353px]" data-name="question">
      <Question1 />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="menu">
        {OPTIONS.map((opt) => (
          <OptionButton
            key={opt}
            label={opt}
            property1={selected === opt ? "Variant2" : "Default"}
            className={`relative rounded-[41px] w-full ${selected === opt ? "bg-[rgba(221,105,44,0.2)]" : ""}`}
            onClick={() => setSelected(opt)}
          />
        ))}
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

function AppleHealth() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[4px] items-center justify-center left-[calc(50%-0.5px)] top-[650px]" data-name="appleHealth">
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

function ContentArea({ onContinue }: { onContinue?: () => void }) {
  return (
    <div className="h-[745px] relative shrink-0 w-full" data-name="ContentArea">
      <TopNavBar />
      <Question />
      <PairingButton onClick={onContinue} />
      <AppleHealth />
    </div>
  );
}

export default function Component03SetupProfile({ onContinue }: { onContinue?: () => void } = {}) {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[44px] size-full" data-name="03 · Setup - Profile">
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