import { useState, useRef, useEffect, useCallback } from "react";
import svgPaths from "./svg-am5rnsvcvf";
import imgImage2 from "./f6c7d15e822568d48a2cf5e92862782e0430765a.png";

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

function Arrowicon() {
  return (
    <div className="relative size-[38px]" data-name="arrowicon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="arrowicon">
          <circle cx="19" cy="19" fill="var(--fill-0, #DD692C)" id="Ellipse 3" r="18.5" stroke="var(--stroke-0, #FDFDFD)" />
          <path d={svgPaths.p1fb6a80} fill="var(--stroke-0, #FDFDFD)" id="Line 2" />
        </g>
      </svg>
    </div>
  );
}

function Arrowicon1() {
  return (
    <div className="absolute left-[315px] size-[38px] top-0" data-name="arrowicon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="arrowicon">
          <circle cx="19" cy="19" fill="var(--fill-0, #DD692C)" id="Ellipse 3" r="18.5" stroke="var(--stroke-0, #FDFDFD)" />
          <path d={svgPaths.p1fb6a80} fill="var(--stroke-0, #FDFDFD)" id="Line 2" />
        </g>
      </svg>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="-translate-x-1/2 absolute h-[5px] left-[calc(50%-0.5px)] top-[19px] w-[116px]" data-name="Progress Bar">
      <div className="absolute bg-[#dd692c] h-[5px] left-0 rounded-[11px] top-0 w-[25px]" data-name="Progress Segment" />
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-[30px] rounded-[11px] top-0 w-[25px]" data-name="Progress Segment" />
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-[60px] rounded-[11px] top-0 w-[26px]" data-name="Progress Segment" />
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-[90px] rounded-[11px] top-0 w-[26px]" data-name="Progress Segment" />
    </div>
  );
}

function DeviceVideo() {
  return (
    <div className="absolute h-[503px] left-0 overflow-clip top-0 w-[353px]" data-name="DeviceVideo">
      <div className="absolute flex items-center justify-center left-0 size-[38px] top-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Arrowicon />
        </div>
      </div>
      <Arrowicon1 />
      <ProgressBar />
    </div>
  );
}

const ITEM_HEIGHT = 42;
const VISIBLE_ITEMS = 7;
const CENTER_INDEX = 3;

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 100 }, (_, i) => 2010 - i);

function ScrollColumn({ items, initial }: { items: (string | number)[]; initial: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initial);
  const snapTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTop = initial * ITEM_HEIGHT;
  }, [initial]);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const center = Math.round(el.scrollTop / ITEM_HEIGHT);
    setSelectedIndex(Math.max(0, Math.min(center, items.length - 1)));

    if (snapTimeout.current) clearTimeout(snapTimeout.current);
    snapTimeout.current = setTimeout(() => {
      const target = Math.round(el.scrollTop / ITEM_HEIGHT) * ITEM_HEIGHT;
      el.scrollTo({ top: target, behavior: "smooth" });
    }, 80);
  }, [items.length]);

  return (
    <div className="relative" style={{ height: VISIBLE_ITEMS * ITEM_HEIGHT }}>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-auto scrollbar-hide"
        style={{
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <div style={{ height: CENTER_INDEX * ITEM_HEIGHT }} />
        {items.map((item, i) => {
          const distance = Math.abs(i - selectedIndex);
          const isCenter = distance === 0;
          const opacity = Math.max(0.2, 1 - distance * 0.25);
          return (
            <div
              key={i}
              className="flex items-center justify-center text-[16px] select-none"
              style={{
                height: ITEM_HEIGHT,
                scrollSnapAlign: "start",
                fontFamily: "'Urbanist', sans-serif",
                opacity,
                fontWeight: 500,
                color: isCenter ? "#434343" : "rgba(0,0,0,0.35)",
                transition: "all 0.1s ease",
              }}
            >
              {item}
            </div>
          );
        })}
        <div style={{ height: CENTER_INDEX * ITEM_HEIGHT }} />
      </div>
      <div
        className="absolute left-0 right-0 pointer-events-none z-10"
        style={{
          top: CENTER_INDEX * ITEM_HEIGHT,
          height: ITEM_HEIGHT,
          borderTop: "1px solid rgba(0,0,0,0.08)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-10"
        style={{
          height: CENTER_INDEX * ITEM_HEIGHT,
          background: "linear-gradient(to bottom, rgba(253,253,253,0.95), rgba(253,253,253,0))",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
        style={{
          height: CENTER_INDEX * ITEM_HEIGHT,
          background: "linear-gradient(to top, rgba(253,253,253,0.95), rgba(253,253,253,0))",
        }}
      />
    </div>
  );
}

function DatePicker() {
  return (
    <div className="absolute inset-x-0 flex justify-center" style={{ top: 240 }}>
      <div className="flex gap-[24px] items-start" style={{ width: 300 }}>
        <div className="flex-1">
          <ScrollColumn items={DAYS} initial={3} />
        </div>
        <div className="flex-[1.5]">
          <ScrollColumn items={MONTHS} initial={3} />
        </div>
        <div className="flex-1">
          <ScrollColumn items={YEARS} initial={7} />
        </div>
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

function HealthImport() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[4px] items-center left-[calc(50%-0.5px)] top-[650px]">
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
      <DeviceVideo />
      <div className="-translate-y-1/2 [text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute flex flex-col font-['Urbanist:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] left-[calc(50%-176.5px)] text-[#434343] text-[32px] top-[calc(50%-209px)] w-[353px]">
        <p className="leading-[33.657px]">What is your birth date?</p>
      </div>
      <DatePicker />
      <PairingButton onClick={onContinue} />
      <HealthImport />
    </div>
  );
}

export default function Component02SetupProfile({ onContinue }: { onContinue?: () => void } = {}) {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[44px] size-full" data-name="02 · Setup - Profile">
      <div className="content-stretch flex flex-col gap-[13px] items-center overflow-hidden px-[20px] relative rounded-[inherit] size-full">
        <div className="h-[47px] overflow-hidden relative shrink-0 w-[393px]" data-name="Status Bar">
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
