import svgPaths from "./svg-xw8iteglky";
import imgGooglelogo from "./0cf3d1dcb6edaa10ff3c188e3016b53a6fab4a22.png";
import imgApplelogo from "./d0f42334eaff6cef63d1c9c1acf22eaea8eaa37f.png";
import patchVideo from "../patch.mp4";

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

function DeviceVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute object-cover"
      style={{ height: 819, left: -20, top: -28, width: 394 }}
      src={patchVideo}
      data-name="DeviceVideo"
    />
  );
}

function ProgressBar() {
  return (
    <div className="absolute h-[8px] left-[5px] top-[479px] w-[173px]" data-name="Progress Bar">
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-0 rounded-[11px] top-0 w-[25px]" data-name="Progress Segment" />
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-[30px] rounded-[11px] top-0 w-[25px]" data-name="Progress Segment" />
      <div className="absolute bg-[#dd692c] h-[5px] left-[60px] rounded-[11px] top-0 w-[26px]" data-name="Progress Segment" />
      <div className="absolute bg-[rgba(221,105,44,0.2)] h-[5px] left-[90px] rounded-[11px] top-0 w-[26px]" data-name="Progress Segment" />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[24px] items-start justify-center leading-[0] left-[calc(50%-11.5px)] top-[509px] w-[320px]" data-name="Header Section">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Urbanist:Medium',sans-serif] font-medium h-[27px] justify-center min-w-full relative shrink-0 text-[#dd692c] text-[36px] w-[min-content]">
        <p className="leading-[42px]">Made to be worn</p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Urbanist:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#fdfdfd] text-[16px] w-[293px]">
        <p className="leading-[21.8px]">It stays put all day and goes wherever you do. No wires, no charging</p>
      </div>
    </div>
  );
}

function ContinueWithGoogleContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Continue with Google Container">
      <div className="relative shrink-0 size-[16px]" data-name="googlelogo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.57%] left-[-10.94%] max-w-none top-[-21.43%] w-[121.43%]" src={imgGooglelogo} />
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0b0a0a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Continue with Google</p>
      </div>
    </div>
  );
}

function ContinueWithGoogle({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#fdfdfd] content-stretch flex flex-col items-center justify-center left-0 overflow-clip px-[96px] py-[17px] rounded-[41px] top-[694px] w-[353px] cursor-pointer" data-name="Continue with Google">
      <ContinueWithGoogleContainer />
    </div>
  );
}

function ContinueWithAppleContainer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Continue with Apple Container">
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center ml-[24px] mt-[5px] not-italic relative row-1 text-[#fdfdfd] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Continue with Apple</p>
      </div>
      <div className="col-1 h-[24px] ml-0 mt-0 relative row-1 w-[23px]" data-name="applelogo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgApplelogo} />
      </div>
    </div>
  );
}

function ContinueWithApple() {
  return (
    <div className="bg-[#0b0a0a] relative rounded-[41px] shrink-0 w-full" data-name="Continue with Apple">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[94px] py-[13px] relative size-full">
          <ContinueWithAppleContainer />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-10px] p-[10px] top-[624px] w-[373px]">
      <ContinueWithApple />
    </div>
  );
}

function ContentArea({ onGoogleClick }: { onGoogleClick?: () => void }) {
  return (
    <div className="h-[745px] relative shrink-0 w-full" data-name="ContentArea">
      <ProgressBar />
      <HeaderSection />
      <ContinueWithGoogle onClick={onGoogleClick} />
      <Frame />
    </div>
  );
}

export default function Component04OnboardingCoraIntro({ onGoogleClick }: { onGoogleClick?: () => void } = {}) {
  return (
    <div className="relative rounded-[44px] size-full" data-name="04 · Onboarding — Cora intro">
      <video autoPlay muted loop playsInline className="absolute inset-0 size-full object-cover rounded-[44px] pointer-events-none" src={patchVideo} />
      <div className="absolute inset-0 overflow-hidden rounded-[44px]" />
      <div className="content-stretch flex flex-col gap-[13px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <div className="h-[47px] overflow-clip relative shrink-0 w-[393px]" data-name="Status Bar">
          <Notch />
          <LeftSide />
          <RightSide />
        </div>
        <ContentArea onGoogleClick={onGoogleClick} />
      </div>
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[44px]" />
    </div>
  );
}