import onboardingBg from "./onboarding-bg.png";

export const CaregiverWelcome = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#F0EAE3] flex items-center justify-center py-8">
      <div className="bg-[#fdfdfd] relative rounded-[44px] w-[393px] h-[852px] overflow-hidden shadow-2xl">
        <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={onboardingBg} />
        <div className="absolute left-0 bottom-0 w-full h-[300px] pointer-events-none rotate-180">
          <img alt="" className="size-full object-cover" src={onboardingBg} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-['Urbanist',sans-serif] font-medium text-[32px] text-[#434343] leading-[33.657px]">Welcome Emma!</p>
        </div>
      </div>
    </div>
  );
};
