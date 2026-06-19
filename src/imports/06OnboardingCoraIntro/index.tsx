import svgPaths from "./svg-pzdgdy2mal";
import imgImage3 from "./9b4af6ee93152b2587069dc6a50708bc3c8c18ee.png";

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
  return <div className="absolute h-[819px] left-[-20px] top-[-28px] w-[394px]" data-name="DeviceVideo" />;
}

function Frame1() {
  return (
    <div className="h-[13px] relative shrink-0 w-[9px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 13">
        <g id="Frame 10">
          <path d={svgPaths.p272e6670} fill="var(--fill-0, #020202)" id="ô¡" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[3px] items-center left-[calc(50%+7.5px)] top-[20px]">
      <Frame1 />
      <div className="[word-break:break-word] flex flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#020202] text-[17px] tracking-[0.51px] whitespace-nowrap">
        <p className="leading-none">accounts.google.com</p>
      </div>
    </div>
  );
}

function OcticonX() {
  return (
    <div className="absolute left-[353px] size-[24px] top-[18px]" data-name="octicon:x-24">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="octicon:x-24">
          <path d={svgPaths.p3fd40e00} fill="var(--fill-0, #3278FB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AdressBar() {
  return (
    <div className="absolute h-[59px] left-0 top-0 w-[393px]" data-name="adress bar">
      <Frame />
      <OcticonX />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[15px] not-italic text-[#3278fb] text-[16px] top-[20px] tracking-[-0.64px] whitespace-nowrap">Cancel</p>
      <p className="[word-break:break-word] absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[0] left-[calc(50%+118.5px)] text-[#3278fb] text-[0px] top-[19px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        <span className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[11px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          A
        </span>
        <span className="leading-[normal] text-[16px]">A</span>
      </p>
    </div>
  );
}

function FlatColorIconsGoogle() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="flat-color-icons:google">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="flat-color-icons:google">
          <path d={svgPaths.p2872a400} fill="var(--fill-0, #FFC107)" id="Vector" />
          <path d={svgPaths.p3a7b2b00} fill="var(--fill-0, #FF3D00)" id="Vector_2" />
          <path d={svgPaths.p3194fa80} fill="var(--fill-0, #4CAF50)" id="Vector_3" />
          <path d={svgPaths.pc339a00} fill="var(--fill-0, #1976D2)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function SignInWithGoogle() {
  return (
    <div className="absolute h-[22px] left-[14px] top-[14px] w-[165px]" data-name="Sign in with google">
      <FlatColorIconsGoogle />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[normal] left-[30px] not-italic text-[#737373] text-[14px] top-[2px] tracking-[-0.56px] w-[135px]">Sign in with Google</p>
    </div>
  );
}

function SignInWGoogleProgressBar() {
  return (
    <div className="absolute h-[41px] left-0 top-[55px] w-[393px]" data-name="sign in w google & progress bar">
      <SignInWithGoogle />
      <div className="absolute h-0 left-0 top-[41px] w-[393px]" data-name="Line bottom">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 1">
            <line id="Line bottom" stroke="var(--stroke-0, #CFCFCF)" x2="393" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[4px] w-[393px]" data-name="Line top">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 1">
            <line id="Line bottom" stroke="var(--stroke-0, #CFCFCF)" x2="393" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#3479f3] h-[4px] left-0 top-0 w-[134px]" data-name="progress loading bar" />
    </div>
  );
}

function SolarAltArrowDownBold() {
  return (
    <div className="absolute left-[172px] size-[16px] top-px" data-name="solar:alt-arrow-down-bold">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="solar:alt-arrow-down-bold">
          <path d={svgPaths.p10d84b80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LanguageAndFooterLinks() {
  return (
    <div className="absolute h-[66px] left-[25px] top-[599px] w-[188px]" data-name="language and footer links">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+39px)] not-italic text-[#626465] text-[12px] top-[51px] tracking-[-0.24px] whitespace-nowrap">Terms</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-35px)] not-italic text-[#626465] text-[12px] top-[51px] tracking-[-0.24px] whitespace-nowrap">Privacy</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-93px)] not-italic text-[#626465] text-[12px] top-[51px] tracking-[-0.24px] whitespace-nowrap">Help</p>
      <SolarAltArrowDownBold />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-94px)] not-italic text-[#626465] text-[12px] top-0 tracking-[0.12px] whitespace-nowrap">English (United states)</p>
    </div>
  );
}

function UseAnotherAccount() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[25px] items-center left-[calc(50%-74px)] py-[8px] top-[58px]" data-name="use another account">
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <div className="absolute inset-[-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path d={svgPaths.p1e5fa180} id="Vector" stroke="var(--stroke-0, #636564)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3d3f3e] text-[14px] tracking-[-0.14px] whitespace-nowrap">Use another account</p>
    </div>
  );
}

function Pfp() {
  return (
    <div className="absolute left-[5px] size-[24px] top-[7px]" data-name="pfp">
      <div className="absolute left-[-0.04px] size-[24px] top-0" data-name="bg">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #4394A4)" id="bg" r="12" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] left-[7.14px] not-italic text-[12.8px] text-white top-[4.8px] tracking-[-0.256px] whitespace-nowrap">O</p>
    </div>
  );
}

function NameAndMail() {
  return (
    <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-start leading-[normal] left-[49px] not-italic top-1/2 whitespace-nowrap" data-name="name and mail">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#3f3f3f] text-[14px] tracking-[-0.14px]">Ash Ketchum</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#616463] text-[12px] tracking-[-0.12px]">contact@ashketchum.com</p>
    </div>
  );
}

function AccountInfo() {
  return (
    <div className="-translate-x-1/2 absolute h-[38px] left-[calc(50%-75.5px)] top-0 w-[192px]" data-name="account info">
      <Pfp />
      <NameAndMail />
    </div>
  );
}

function AccountAndAlternativeAccGrouyp({ onAccountClick }: { onAccountClick?: () => void }) {
  return (
    <div onClick={onAccountClick} className="absolute h-[99px] left-[25px] top-[288px] w-[343px] cursor-pointer" data-name="account and alternative acc grouyp">
      <div className="-translate-x-1/2 absolute h-0 left-1/2 top-[99px] w-[343px]" data-name="Line 2">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
            <line id="Line 2 " stroke="var(--stroke-0, #D9DCDB)" x2="343" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <UseAnotherAccount />
      <div className="-translate-x-1/2 absolute h-0 left-1/2 top-[50px] w-[343px]" data-name="Line 1">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 1">
            <line id="Line 2 " stroke="var(--stroke-0, #D9DCDB)" x2="343" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%+171.5px)] not-italic text-[#626465] text-[12px] text-right top-[4px] tracking-[0.12px] whitespace-nowrap">Signed out</p>
      <AccountInfo />
    </div>
  );
}

function ChooseAccountText() {
  return (
    <div className="[word-break:break-word] absolute h-[56px] left-[91px] not-italic top-[166px] w-[212px] whitespace-nowrap" data-name="choose account text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-106px)] text-[#1f1f1f] text-[24px] top-0 tracking-[-0.48px]">Choose an account</p>
      <p className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[calc(50%+63px)] text-[#366fe2] text-[14px] text-right top-[39px] tracking-[-0.28px]">
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#1f1f1f]">to continue to</span>
        <span className="leading-[normal]">{` `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal]">Cora</span>
      </p>
    </div>
  );
}

function Body({ onAccountClick }: { onAccountClick?: () => void }) {
  return (
    <div className="absolute bg-white h-[815px] left-[-20px] rounded-tl-[8px] rounded-tr-[8px] top-[-11px] w-[393px]" data-name="body">
      <div aria-hidden className="absolute border-[#b1b1b1] border-b border-solid inset-[0_0_-1px_0] pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <AdressBar />
      <SignInWGoogleProgressBar />
      <LanguageAndFooterLinks />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[calc(50%-171.5px)] not-italic text-[#626465] text-[0px] top-[436px] tracking-[-0.13px] w-[312px]">
        <p className="mb-0 text-[13px]">
          <span className="leading-[1.498]">{`To continue, Google share your name email address, `}</span>
          <span className="leading-[1.498]">language</span>
          <span className="leading-[1.498]">{` preference, and profile picture with `}</span>
          <span className="leading-[1.498]">Sapp</span>
          <span className="leading-[1.498]">{`. Before using this app, you can review `}</span>
          <span className="leading-[1.498]">Sapp</span>
          <span className="leading-[1.498]">{`’s `}</span>
          <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.498] not-italic text-[#366fe2]">privacy policy</span>
          <span className="leading-[1.498]">{` and `}</span>
          <span className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.498] not-italic text-[#366fe2]">terms of service.</span>
        </p>
        <p className="leading-[1.498] text-[13px]">​</p>
      </div>
      <AccountAndAlternativeAccGrouyp onAccountClick={onAccountClick} />
      <ChooseAccountText />
      <div className="-translate-x-1/2 absolute h-[38px] left-1/2 rounded-[8px] top-[109px] w-[43px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function ContentArea({ onAccountClick }: { onAccountClick?: () => void }) {
  return (
    <div className="h-[781px] relative shrink-0 w-full" data-name="ContentArea">
      <DeviceVideo />
      <Body onAccountClick={onAccountClick} />
    </div>
  );
}

export default function Component06OnboardingCoraIntro({ onAccountClick }: { onAccountClick?: () => void } = {}) {
  return (
    <div className="bg-white relative rounded-[44px] size-full" data-name="06 · Onboarding — Cora intro">
      <div className="content-stretch flex flex-col gap-[13px] items-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
        <div className="h-[47px] opacity-0 overflow-clip relative shrink-0 w-[393px]" data-name="Status Bar">
          <Notch />
          <LeftSide />
          <RightSide />
        </div>
        <ContentArea onAccountClick={onAccountClick} />
      </div>
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[44px]" />
    </div>
  );
}