import onboardingBg from "./onboarding-bg.png";

export const OnboardingIntro = (): JSX.Element => {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[44px] size-full overflow-hidden">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[44px] size-full"
        style={{ mixBlendMode: "multiply" }}
        src={onboardingBg}
      />

      <div className="absolute left-0 size-[481px] top-[calc(100%-260px)] pointer-events-none">
        <div className="rotate-180 size-full">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover size-full"
            style={{ mixBlendMode: "multiply" }}
            src={onboardingBg}
          />
        </div>
      </div>

      <p className="absolute left-1/2 -translate-x-1/2 bottom-[160px] font-['Urbanist',sans-serif] font-medium text-[72px] leading-none text-[#dd692c] whitespace-nowrap">
        Cora
      </p>

    </div>
  );
};
