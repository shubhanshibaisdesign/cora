import onboardingBg from "./onboarding-bg.png";
import onboardingDown from "./onboarding-down.png";

export const OnboardingIntro = (): JSX.Element => {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[44px] size-full overflow-hidden">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[44px] size-full"
        src={onboardingBg}
      />

      <div className="absolute left-0 bottom-0 w-full pointer-events-none">
        <img
          alt=""
          className="w-full object-contain"
          src={onboardingDown}
        />
      </div>

      <p className="absolute left-1/2 -translate-x-1/2 bottom-[160px] font-['Urbanist',sans-serif] font-medium text-[72px] leading-none text-[#dd692c] whitespace-nowrap">
        Cora
      </p>

    </div>
  );
};
