import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BloodPressureWave } from "./blood-pressure-wave";
import { EcgWave } from "./ecg-wave";
import { FluidWave } from "./fluid-wave";
import { LdlWave } from "./ldl-wave";
import { VitalParticles } from "./vital-particles";
import { MovementWave } from "./movement-wave";
import { SleepWave } from "./sleep-wave";
import { TempRing } from "./temp-ring";
import bgGradient from "./bg-gradient.png";
import arrowIcon from "./arrow-icon.svg?url";
import lockIcon from "./icon-lock.svg?url";
import ashAvatar from "./profile-ash-avatar.jpg";
import coraAvatar from "./cora-avatar.png";
import svgPaths from "./src/imports/01Homepage/svg-bf1xpow9k5";
import { TodaysTasks, CareTeam, WeeklySchedule, Medications, Documents } from "./care";
import navHome from "./nav-home.svg?url";
import navHomeInactive from "./nav-home-inactive.svg?url";
import navHeart from "./nav-heart.svg?url";
import navHeartActive from "./nav-heart-active.svg?url";
import navScan from "./nav-scan.svg?url";
import navScanActive from "./nav-scan-active.svg?url";
import navUser from "./nav-user.svg?url";
import navUserActive from "./nav-user-active.svg?url";

function CaregiverGreeting() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex gap-[8px] items-center overflow-clip pl-[8px] pr-[12px] py-[12px] rounded-[20px] w-full">
      <div className="relative rounded-[31.5px] shrink-0 size-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31.5px] size-full" src={ashAvatar} />
      </div>
      <div className="flex flex-col gap-[2px] flex-1">
        <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#434343] leading-[21.8px]">You are viewing Ash's report.</p>
        <p className="font-['Urbanist',sans-serif] font-medium text-[12px] text-[#ADAAAA] tracking-[0.24px] leading-[15px]">Click here to change view</p>
      </div>
      <img alt="" className="size-[39px] shrink-0" src={arrowIcon} />
    </div>
  );
}

function WeeklyUpdate() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex flex-col items-start pb-[8px] pt-[18px] px-[8px] rounded-[20px] w-full">
      <div className="px-[12px] mb-[16px]">
        <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[16px]">WEEKLY UPDATE</p>
      </div>
      <div className="bg-[#fdfdfd] rounded-[18px] w-full px-[14px] py-[24px]">
        <div className="flex gap-[10px] items-center">
          <div className="relative rounded-[31.5px] shrink-0 size-[63px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31.5px] size-full" src={coraAvatar} />
          </div>
          <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#434343] leading-[21.8px] flex-1">Ash had a good week. Blood pressure ran a bit high in the evenings, so we've nudged him for a walk after dinner.</p>
        </div>
      </div>
    </div>
  );
}

function Focus() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[18px] px-[8px] relative size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] relative shrink-0 w-full">
          <div className="flex flex-col gap-[4px] items-start w-[122px]">
            <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[16px]">FOCUS</p>
            <p className="font-['Urbanist',sans-serif] font-normal text-[12px] text-[#ADAAAA] leading-[16px]">Last synced 6 mins ago</p>
          </div>
        </div>
        <div className="mt-[16px] relative rounded-[18px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(122deg, rgba(255,255,255,0) 47%, rgba(255,255,255,0.28) 12%, rgba(255,255,255,0) 71%), linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 53%, rgba(255,255,255,0) 118%), linear-gradient(90deg, rgb(249,248,247) 0%, rgb(249,248,247) 100%)" }}>
          <div className="flex flex-col items-end pb-[20px] pt-[19px] px-[14px] text-[#434343]">
            <div className="flex items-center justify-between text-[12px] w-full whitespace-nowrap">
              <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">BLOOD PRESSURE</p>
              <p className="font-['Urbanist',sans-serif] font-medium leading-[16px]">Target: ≤ 130/80</p>
            </div>
            <div className="w-[calc(100%+28px)] -mx-[14px] h-[90px] mt-2">
              <BloodPressureWave />
            </div>
            <div className="flex font-['Urbanist',sans-serif] font-medium items-end justify-between w-full mt-2">
              <p className="leading-[12px] text-[12px] text-[#5E8F5B]">In Range</p>
              <div className="flex flex-col gap-[4px] items-end w-[91px]">
                <p className="leading-[32px] text-[32px] text-[#5E8F5B]">122/78</p>
                <p className="leading-[12px] text-[12px] text-right text-[#5E8F5B]">mmHg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcgCard() {
  return (
    <div className="bg-[#fdfdfd] h-[218px] relative rounded-[18px] shrink-0 w-full overflow-visible">
      <div className="flex flex-col items-start justify-between pb-[20px] pt-[19px] px-[14px] size-full text-[#434343]">
        <div className="flex items-center justify-between text-[12px] w-full whitespace-nowrap z-10">
          <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">ECG</p>
          <p className="font-['Urbanist',sans-serif] font-medium leading-[16px]">Afib risk : Low</p>
        </div>
        <div className="w-[calc(100%+28px)] -mx-[14px] h-[90px] overflow-visible relative">
          <div className="absolute -top-[30px] -bottom-[30px] -left-[30px] -right-[30px]"><EcgWave /></div>
        </div>
        <div className="flex font-['Urbanist',sans-serif] font-medium items-end justify-between w-full whitespace-nowrap">
          <p className="leading-[12px] text-[12px] text-[#5E8F5B]">Sinus Rhythm in range</p>
          <div className="flex flex-col gap-[4px] items-end">
            <p className="leading-[32px] text-[32px] text-[#5E8F5B]">72</p>
            <p className="leading-[12px] text-[12px] text-[#5E8F5B]">bpm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FluidCard() {
  return (
    <div className="bg-[#fdfdfd] h-[218px] relative rounded-[18px] shrink-0 w-full overflow-visible">
      <div className="flex flex-col items-start justify-between pb-[20px] pt-[19px] px-[14px] size-full text-[#434343] whitespace-nowrap">
        <div className="flex items-center justify-between text-[12px] w-full z-10">
          <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">FLUID RETENTION</p>
          <p className="font-['Urbanist',sans-serif] font-medium leading-[16px]">Target: ≤ +2.0 kg / day</p>
        </div>
        <div className="w-[calc(100%+28px)] -mx-[14px] h-[90px] overflow-visible relative">
          <div className="absolute -top-[30px] -bottom-[20px] inset-x-0"><FluidWave /></div>
        </div>
        <div className="flex font-['Urbanist',sans-serif] font-medium items-end justify-between w-full">
          <p className="leading-[12px] text-[12px] text-[#5E8F5B]">In Range</p>
          <div className="flex flex-col gap-[4px] items-end text-right">
            <p className="leading-[32px] text-[32px] text-[#5E8F5B]">+1.2</p>
            <p className="leading-[12px] text-[12px] text-[#5E8F5B]">kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LdlCard() {
  return (
    <div className="bg-[#fdfdfd] h-[218px] relative rounded-[18px] shrink-0 w-full">
      <div className="flex flex-col items-start justify-between pb-[20px] pt-[19px] px-[14px] size-full text-[#434343] whitespace-nowrap">
        <div className="flex items-center justify-between text-[12px] w-full">
          <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">LDL CHOLESTEROL</p>
          <p className="font-['Urbanist',sans-serif] font-medium leading-[16px] text-right">Last panel : 9 May</p>
        </div>
        <div className="w-[calc(100%+28px)] -mx-[14px] h-[90px]"><LdlWave /></div>
        <div className="flex font-['Urbanist',sans-serif] font-medium items-end justify-between w-full">
          <p className="leading-[12px] text-[12px] text-[#5E8F5B]">In Range</p>
          <div className="flex flex-col gap-[4px] items-end text-right">
            <p className="leading-[32px] text-[32px] text-[#5E8F5B]">72</p>
            <p className="leading-[12px] text-[12px] text-[#5E8F5B]">mg/d</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollapsibleSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 rounded-[20px] w-full overflow-hidden">
      <div className="flex flex-col items-start pt-[23px] px-[8px]" style={{ paddingBottom: open ? 8 : 23 }}>
        <div className="flex items-center justify-between px-[12px] w-full cursor-pointer" onClick={() => setOpen(!open)}>
          <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[16px]">{title}</p>
          <motion.img
            alt=""
            className="size-[39px]"
            src={lockIcon}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0, marginTop: open ? 16 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden w-full"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

function HealthMarkers() {
  return (
    <CollapsibleSection title="HEALTH MARKERS">
      <div className="flex flex-col gap-[8px] w-full">
        <EcgCard />
        <FluidCard />
        <LdlCard />
      </div>
    </CollapsibleSection>
  );
}

function HalfVitalCard({ label, value, unit, chart }: { label: string; value: string; unit: string; chart: React.ReactNode }) {
  return (
    <div className="bg-[#fdfdfd] flex-[1_0_0] h-[218px] min-w-px relative rounded-[18px]">
      <div className="flex flex-col items-start justify-between pb-[20px] pt-[19px] px-[19px] size-full">
        <p className="font-['Urbanist',sans-serif] font-normal text-[12px] text-[#434343] leading-[16px]">{label}</p>
        <div className="w-full h-[90px]">{chart}</div>
        <div className="flex items-end justify-end w-full">
          <div className="flex flex-col gap-[4px] items-end font-['Urbanist',sans-serif] font-medium text-[#434343]">
            <p className="leading-[32px] text-[32px] text-[#5E8F5B]">{value}</p>
            <p className="leading-[12px] text-[12px] text-right text-[#5E8F5B]">{unit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DailyVitals() {
  return (
    <CollapsibleSection title="DAILY VITALS">
      <div className="flex flex-col gap-[8px] w-full">
        <div className="flex gap-[8px] w-full">
          <HalfVitalCard label="HRV" value="48" unit="ms" chart={<VitalParticles type="hrv" />} />
          <HalfVitalCard label="RHR" value="64" unit="bpm" chart={<VitalParticles type="rhr" />} />
        </div>
        <div className="flex gap-[8px] w-full">
          <HalfVitalCard label="SpO₂" value="98" unit="%" chart={<VitalParticles type="spo2" />} />
          <HalfVitalCard label="RESP RATE" value="14" unit="br/min" chart={<VitalParticles type="resp" />} />
        </div>
      </div>
    </CollapsibleSection>
  );
}

function LifestyleCard({ label, target, status, value, unit, chart }: { label: string; target: string; status: string; value: string; unit: string; chart: React.ReactNode }) {
  return (
    <div className="bg-[#fdfdfd] h-[218px] relative rounded-[18px] shrink-0 w-full overflow-visible">
      <div className="flex flex-col items-start justify-between pb-[20px] pt-[19px] px-[19px] size-full text-[#434343] whitespace-nowrap overflow-visible">
        <div className="flex items-center justify-between text-[12px] w-full z-10">
          <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">{label}</p>
          <p className="font-['Urbanist',sans-serif] font-medium leading-[16px]">{target}</p>
        </div>
        <div className="w-full h-[90px] overflow-visible">{chart}</div>
        <div className="flex font-['Urbanist',sans-serif] font-medium items-end justify-between w-full z-10">
          <p className="leading-[12px] text-[12px] text-[#5E8F5B]">{status}</p>
          <div className="flex flex-col gap-[4px] items-end text-right">
            <p className="leading-[32px] text-[32px] text-[#5E8F5B]">{value}</p>
            <p className="leading-[12px] text-[12px] text-[#5E8F5B]">{unit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lifestyle() {
  return (
    <CollapsibleSection title="LIFESTYLE">
      <div className="flex flex-col gap-[8px] w-full">
        <LifestyleCard label="MOVEMENT" target="Target: 8,000 steps" status="In Range" value="6,200" unit="steps" chart={<MovementWave />} />
        <LifestyleCard label="SLEEP" target="Target: ≥ 7 hr" status="In Range" value="7.1" unit="hr" chart={<SleepWave />} />
        <LifestyleCard label="TEMPERATURE" target="Last panel : 9 May" status="In Range" value="36.8" unit="C" chart={<TempRing />} />
      </div>
    </CollapsibleSection>
  );
}

const NAV_TABS = [
  { id: "home" as const, label: "Home", icon: navHomeInactive, activeIcon: navHome },
  { id: "care" as const, label: "Care", icon: navHeart, activeIcon: navHeartActive },
  { id: "scan" as const, label: "Patch", icon: navScan, activeIcon: navScanActive },
  { id: "profile" as const, label: "Profile", icon: navUser, activeIcon: navUserActive },
];

export const CaregiverHome = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"home" | "care" | "scan" | "profile">("home");

  return (
    <div className="min-h-screen bg-[#F0EAE3] flex items-center justify-center py-8">
      <div className="bg-[#fdfdfd] relative rounded-[44px] w-[393px] h-[852px] overflow-hidden shadow-2xl flex flex-col">
        <div className="h-[48px] shrink-0" />

        <div className="-translate-x-1/2 absolute blur-[200px] h-[457px] left-1/2 rounded-[89px] top-[252px] w-[344px] pointer-events-none z-0">
          <div className="absolute inset-0 overflow-hidden rounded-[89px]">
            <img alt="" className="absolute h-full left-[-56.92%] max-w-none top-0 w-[220.82%]" src={bgGradient} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="flex-1 flex flex-col overflow-hidden relative z-[1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {activeTab === "home" ? (
              <div className="flex-1 overflow-y-auto overflow-x-hidden px-[20px] scrollbar-hide">
                <div className="relative w-full pb-[100px]">
                  <div className="[word-break:break-word] content-stretch flex flex-col font-['Urbanist',sans-serif] font-medium gap-[16px] items-start leading-[0] pt-[40px] w-full">
                    <p className="text-[#434343] text-[12px] tracking-[0.24px] leading-none">12 Jun, Thursday</p>
                    <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] text-[#3f2815] text-[36px]">
                      <p className="leading-[42px] mb-0">Good Morning,</p>
                      <p className="leading-[42px]">Emma</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start mt-[48px] w-full">
                    <CaregiverGreeting />
                    <WeeklyUpdate />
                    <Focus />
                    <HealthMarkers />
                    <DailyVitals />
                    <Lifestyle />
                  </div>
                </div>
              </div>
            ) : activeTab === "care" ? (
              <div className="flex-1 overflow-y-auto overflow-x-hidden px-[20px] scrollbar-hide">
                <div className="relative w-full pb-[100px]">
                  <div className="pt-[16px]">
                    <p className="font-['Urbanist',sans-serif] font-medium text-[36px] text-[#3f2815] leading-[42px]">Under Your Care</p>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start mt-[32px] w-full">
                    <CaregiverGreeting />
                    <TodaysTasks />
                    <WeeklySchedule />
                    <Medications />
                    <Documents />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center px-[20px]">
                <p className="font-['Urbanist',sans-serif] font-medium text-[20px] text-[#434343]">
                  {activeTab === "scan" ? "Patch" : "Profile"}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navbar */}
        <div className="absolute bottom-[16px] left-[20px] right-[20px] z-[2]" style={{ backdropFilter: "blur(80px) saturate(180%)", WebkitBackdropFilter: "blur(80px) saturate(180%)", backgroundColor: "rgba(253, 253, 253, 0.75)", borderRadius: 556 }}>
          <div className="bg-[rgba(221,105,44,0.05)] flex h-[66px] items-center p-[8px] rounded-[60px] w-full">
            {NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div key={tab.id} className="flex-1 flex items-center justify-center h-[50px] cursor-pointer" onClick={() => setActiveTab(tab.id)}>
                  <div className={`flex items-center h-[50px] px-[12px] py-[8px] rounded-[100px] ${isActive ? "bg-[rgba(221,105,44,0.2)] gap-[6px]" : ""}`}>
                    <img alt="" className="shrink-0 size-[24px]" src={isActive ? tab.activeIcon : tab.icon} />
                    {isActive && <p className="font-['Poppins',sans-serif] font-medium leading-[16px] text-[#dd692c] text-[12px] whitespace-nowrap">{tab.label}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div aria-hidden className="absolute border border-[#fdfdfd] border-solid inset-0 pointer-events-none rounded-[44px]" />
      </div>
    </div>
  );
};
