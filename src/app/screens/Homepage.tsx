import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { CarePage } from "../../../care";
import { PatchPage } from "../../../patch";
import svgPaths from "../../imports/01Homepage/svg-bf1xpow9k5";
import imgGreetingImage from "figma:asset/1d520688a3700bec3d7bb993450f9232e944ee19.png";
import { BloodPressureWave } from "../../../blood-pressure-wave";
import { EcgWave } from "../../../ecg-wave";
import { FluidWave } from "../../../fluid-wave";
import { LdlWave } from "../../../ldl-wave";
import { VitalParticles } from "../../../vital-particles";
import { MovementWave } from "../../../movement-wave";
import { SleepWave } from "../../../sleep-wave";
import { TempRing } from "../../../temp-ring";
import bgGradient from "../../../bg-gradient.png";
import arrowIcon from "../../../arrow-icon.svg?url";
import ReloadIcon from "../../imports/Icon";
import navHome from "../../../nav-home.svg?url";
import navHomeInactive from "../../../nav-home-inactive.svg?url";
import navHeart from "../../../nav-heart.svg?url";
import navHeartActive from "../../../nav-heart-active.svg?url";
import navScan from "../../../nav-scan.svg?url";
import navScanActive from "../../../nav-scan-active.svg?url";
import navUser from "../../../nav-user.svg?url";
import navUserActive from "../../../nav-user-active.svg?url";
import { BloodPressureDetail } from "../../../blood-pressure-detail";
import { HealthMarkerDetail } from "../../../health-marker-detail";
import { MedicationsDetail } from "../../../medications-detail";

const FRAME_W = 393;
const FRAME_H = 852;

function useFrameScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    function update() {
      setScale(Math.min(window.innerWidth / FRAME_W, window.innerHeight / FRAME_H, 1));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

function Greeting() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 relative rounded-[20px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-[22px] py-[16px] relative size-full">
          <div className="relative rounded-[31.5px] shrink-0 size-[63px]">
            <img alt="Profile" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[31.5px] size-full" src={imgGreetingImage} />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Urbanist',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#434343] text-[16px] w-[252px]">
            <p className="leading-[21.8px]">Good week! Your blood pressure was a bit high in the evenings. Try a walk after dinner tonight?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Focus({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 relative rounded-[20px] shrink-0 w-full cursor-pointer" onClick={onClick}>
      <div className="flex flex-col gap-[16px] items-start pb-[5px] pt-[18px] px-[5px]">
        <div className="flex items-center justify-between px-[12px] w-full">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Urbanist',sans-serif] font-semibold leading-[16px] text-[#3f2815] text-[16px]">FOCUS</p>
            <p className="font-['Urbanist',sans-serif] font-normal leading-[16px] text-[#434343] text-[12px]">Last synced 6 mins ago</p>
          </div>
          <div className="shrink-0 size-[39px]">
            <ReloadIcon />
          </div>
        </div>
        <div className="rounded-[18px] w-full" style={{ backgroundImage: "linear-gradient(122.197deg, rgba(255,255,255,0) 47.059%, rgba(255,255,255,0.28) 11.765%, rgba(255,255,255,0) 70.588%), linear-gradient(114.938deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 52.941%, rgba(255,255,255,0) 117.65%), linear-gradient(90deg, rgb(249,248,247) 0%, rgb(249,248,247) 100%)" }}>
          <div className="flex flex-col justify-between py-[24px] px-[14px] w-full text-[#434343]" style={{ minHeight: 218 }}>
            <div className="flex items-center justify-between text-[12px] w-full whitespace-nowrap">
              <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">BLOOD PRESSURE</p>
              <p className="font-['Urbanist',sans-serif] font-medium leading-none">Target: ≤ 130/80</p>
            </div>
            <div className="w-[calc(100%+28px)] -mx-[14px] h-[90px]"><BloodPressureWave /></div>
            <div className="flex font-['Urbanist',sans-serif] font-medium items-end justify-between w-full">
              <p className="leading-[12px] text-[12px] text-[#5E8F5B]">In Range</p>
              <div className="flex flex-col gap-[4px] items-end">
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

function EcgCard({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#fdfdfd] h-[218px] relative rounded-[18px] shrink-0 w-full overflow-visible cursor-pointer" onClick={onClick}>
      <div className="flex flex-col items-start justify-between py-[24px] px-[14px] size-full text-[#434343]">
        <div className="flex items-center justify-between text-[12px] w-full whitespace-nowrap z-10">
          <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">ECG</p>
          <p className="font-['Urbanist',sans-serif] font-medium leading-none">Afib risk : Low</p>
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

function FluidRetentionCard({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#fdfdfd] h-[218px] relative rounded-[18px] shrink-0 w-full overflow-visible cursor-pointer" onClick={onClick}>
      <div className="flex flex-col items-start justify-between py-[24px] px-[14px] size-full text-[#434343] whitespace-nowrap">
        <div className="flex items-center justify-between text-[12px] w-full z-10">
          <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">FLUID RETENTION</p>
          <p className="font-['Urbanist',sans-serif] font-medium leading-none">Target: ≤ +2.0 kg / day</p>
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

function LdlCholesterolCard({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#fdfdfd] h-[218px] relative rounded-[18px] shrink-0 w-full cursor-pointer" onClick={onClick}>
      <div className="flex flex-col items-start justify-between py-[24px] px-[14px] size-full text-[#434343] whitespace-nowrap">
        <div className="flex items-center justify-between text-[12px] w-full">
          <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">LDL CHOLESTEROL</p>
          <p className="font-['Urbanist',sans-serif] font-medium leading-none text-right">Last panel : 9 May</p>
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

function HealthMarkers({ onNavigate }: { onNavigate: (s: string) => void }) {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 relative rounded-[20px] shrink-0 w-full overflow-hidden">
      <div className="flex flex-col gap-[16px] items-start pb-[5px] pt-[18px] px-[5px]">
        <div className="flex items-center justify-between px-[12px] w-full">
          <p className="font-['Urbanist',sans-serif] font-semibold leading-[16px] text-[#3f2815] text-[16px]">HEALTH MARKERS</p>
          <img alt="" className="size-[39px]" src={arrowIcon} />
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <EcgCard onClick={() => onNavigate("ecg-detail")} />
          <FluidRetentionCard onClick={() => onNavigate("fluid-detail")} />
          <LdlCholesterolCard onClick={() => onNavigate("ldl-detail")} />
        </div>
      </div>
    </div>
  );
}

function HalfVitalCard({ label, value, unit, chart }: { label: string; value: string; unit: string; chart: React.ReactNode }) {
  return (
    <div className="bg-[#fdfdfd] flex-[1_0_0] h-[218px] min-w-px relative rounded-[18px]">
      <div className="flex flex-col items-start justify-between py-[24px] px-[14px] size-full">
        <p className="font-['Urbanist',sans-serif] font-normal leading-[16px] text-[#434343] text-[12px] whitespace-nowrap">{label}</p>
        <div className="w-full h-[90px]">{chart}</div>
        <div className="flex items-end justify-end w-full">
          <div className="flex flex-col font-['Urbanist',sans-serif] font-medium gap-[4px] items-end text-[#434343] whitespace-nowrap">
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
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 relative rounded-[20px] shrink-0 w-full">
      <div className="flex flex-col gap-[16px] items-start pb-[5px] pt-[18px] px-[5px]">
        <div className="flex items-center justify-between px-[12px] w-full">
          <p className="font-['Urbanist',sans-serif] font-semibold leading-[16px] text-[#3f2815] text-[16px]">DAILY VITALS</p>
          <img alt="" className="size-[39px]" src={arrowIcon} />
        </div>
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
      </div>
    </div>
  );
}

function FullLifestyleCard({ label, target, status, value, unit, chart, targetRight }: { label: string; target: string; status: string; value: string; unit: string; chart: React.ReactNode; targetRight?: boolean }) {
  return (
    <div className="bg-[#fdfdfd] h-[218px] relative rounded-[18px] shrink-0 w-full overflow-hidden">
      <div className="flex flex-col items-start justify-between py-[24px] px-[14px] size-full text-[#434343] whitespace-nowrap">
        <div className="flex items-center justify-between text-[12px] w-full z-10">
          <p className="font-['Urbanist',sans-serif] font-normal leading-[16px]">{label}</p>
          <p className={`font-['Urbanist',sans-serif] font-medium leading-none${targetRight ? " text-right" : ""}`}>{target}</p>
        </div>
        <div className="w-full h-[90px]">{chart}</div>
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
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 relative rounded-[20px] shrink-0 w-full overflow-hidden">
      <div className="flex flex-col gap-[16px] items-start pb-[5px] pt-[18px] px-[5px]">
        <div className="flex items-center justify-between px-[12px] w-full">
          <p className="font-['Urbanist',sans-serif] font-semibold leading-[16px] text-[#3f2815] text-[16px]">LIFESTYLE</p>
          <img alt="" className="size-[39px]" src={arrowIcon} />
        </div>
        <div className="flex flex-col gap-[8px] w-full">
          <FullLifestyleCard label="MOVEMENT" target="Target: 8,000 steps" status="In Range" value="6,200" unit="steps" chart={<MovementWave />} />
          <FullLifestyleCard label="SLEEP" target="Target: ≥ 7 hr" status="In Range" value="7.1" unit="hr" chart={<SleepWave />} />
          <FullLifestyleCard label="TEMPERATURE" target="Last panel : 9 May" status="In Range" value="36.8" unit="C" chart={<TempRing />} targetRight />
        </div>
      </div>
    </div>
  );
}

type DetailScreen = "bp-detail" | "ecg-detail" | "fluid-detail" | "ldl-detail" | "meds-detail" | null;

export default function HomepageScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"home" | "care" | "scan" | "profile">("home");
  const [detail, setDetail] = useState<DetailScreen>(null);
  const scale = useFrameScale();

  if (detail === "bp-detail") return <BloodPressureDetail onBack={() => setDetail(null)} />;
  if (detail === "ecg-detail") return <HealthMarkerDetail onBack={() => setDetail(null)} title="ECG" label="ECG" target="Afib risk : Low" value="72" unit="bpm" status="Sinus Rhythm in range" chart={<EcgWave />} paragraphs={["An electrocardiogram (ECG) measures the electrical activity of your heart with each beat. It reveals the rhythm, rate, and timing of electrical impulses as they travel through the heart muscle.","Cora uses optical and impedance sensors in the patch to reconstruct a single-lead ECG continuously throughout the day, giving you a real-time window into your heart rhythm without needing electrodes or a clinic visit.","A sinus rhythm at 72 bpm means your heart's natural pacemaker is firing normally and your heart rate is comfortably within the healthy range. This is a strong indicator that your cardiac electrical system is functioning well.","Cora also monitors for atrial fibrillation (AFib), an irregular rhythm that can increase stroke risk. Your current AFib risk is low, which means no irregular patterns have been detected in your recent readings."]} />;
  if (detail === "fluid-detail") return <HealthMarkerDetail onBack={() => setDetail(null)} title="Fluid Retention" label="FLUID RETENTION" target="Target: ≤ +2.0 kg / day" value="+1.2" unit="kg" status="In Range" chart={<FluidWave />} paragraphs={["Fluid retention measures how much extra fluid your body is holding compared to your baseline. For people managing heart conditions, tracking fluid balance is critical because excess fluid can signal that the heart is struggling to pump effectively.","Cora estimates fluid retention through bioimpedance sensors in the patch, which measure how electrical signals pass through your tissue. Higher fluid levels change the impedance pattern, allowing Cora to detect shifts before they become symptomatic.","Your current reading of +1.2 kg is within the healthy target of ≤ +2.0 kg per day. This means your body is managing fluid balance well and there are no signs of concerning fluid buildup.","Sudden increases in fluid retention can be an early warning sign of heart failure exacerbation. By catching these trends early, you and your care team can adjust medications or lifestyle before symptoms like swelling or shortness of breath appear."]} />;
  if (detail === "ldl-detail") return <HealthMarkerDetail onBack={() => setDetail(null)} title="LDL Cholesterol" label="LDL CHOLESTEROL" target="Last panel : 9 May" value="72" unit="mg/dL" status="In Range" chart={<LdlWave />} paragraphs={["LDL cholesterol, often called 'bad' cholesterol, is a key marker for cardiovascular risk. High levels of LDL can lead to plaque buildup in your arteries, narrowing them and increasing the risk of heart attack or stroke.","Unlike continuous metrics, LDL cholesterol is measured through periodic blood panels. Your most recent panel on 9 May showed a reading of 72 mg/dL, which is well within the optimal range for cardiovascular health.","For people with existing heart conditions, guidelines recommend keeping LDL below 100 mg/dL, with some cardiologists targeting below 70 mg/dL for high-risk patients. Your current level puts you in an excellent position.","Cora tracks your LDL trend over time so you can see how diet, exercise, and medications are affecting your levels. Consistent readings in the healthy range like yours suggest your current approach is working well."]} />;
  if (detail === "meds-detail") return <MedicationsDetail onBack={() => setDetail(null)} />;

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <div style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale})`, transformOrigin: "center center" }}>
      <div className="bg-[#fdfdfd] relative rounded-[44px] w-full h-full overflow-hidden shadow-2xl flex flex-col">
        <div className="h-[48px] shrink-0" />
        <div className="-translate-x-1/2 absolute blur-[200px] h-[457px] left-1/2 rounded-[89px] top-[252px] w-[344px] pointer-events-none z-0">
          <div className="absolute inset-0 overflow-hidden rounded-[89px]">
            <img alt="" className="absolute h-full left-[-56.92%] max-w-none top-0 w-[220.82%]" src={bgGradient} />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} className="flex-1 flex flex-col overflow-hidden relative z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            {activeTab === "home" ? (
              <div className="flex-1 overflow-y-auto overflow-x-hidden px-[20px] scrollbar-hide" style={{ scrollBehavior: "smooth" }}>
                <div className="relative w-full pb-[100px]">
                  <div className="[word-break:break-word] content-stretch flex flex-col font-['Urbanist',sans-serif] font-medium gap-[16px] items-start leading-[0] pt-[40px] w-full">
                    <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] text-[#434343] text-[12px] tracking-[0.24px] leading-none">12 Jun, Thursday</p>
                    <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] text-[#3f2815] text-[36px]">
                      <p className="leading-[42px] mb-0">Good Morning,</p>
                      <p className="leading-[42px]">Ash</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start mt-[48px] w-full">
                    <Greeting />
                    <Focus onClick={() => setDetail("bp-detail")} />
                    <HealthMarkers onNavigate={(s) => setDetail(s as DetailScreen)} />
                    <DailyVitals />
                    <Lifestyle />
                  </div>
                </div>
              </div>
            ) : activeTab === "care" ? (
              <CarePage onNavigate={(s) => setDetail(s as DetailScreen)} />
            ) : activeTab === "scan" ? (
              <PatchPage />
            ) : (
              <div className="flex-1 flex items-center justify-center px-[20px]">
                <p className="font-['Urbanist',sans-serif] font-medium text-[20px] text-[#434343]">Profile</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-[16px] left-[20px] right-[20px] z-[2]" style={{ backdropFilter: "blur(80px) saturate(180%)", WebkitBackdropFilter: "blur(80px) saturate(180%)", backgroundColor: "rgba(253, 253, 253, 0.75)", borderRadius: 556 }}>
          <LayoutGroup>
            <div className="bg-[rgba(221,105,44,0.05)] flex h-[66px] items-center p-[8px] rounded-[60px] w-full">
              {([
                { id: "home" as const, label: "Home", icon: navHomeInactive, activeIcon: navHome },
                { id: "care" as const, label: "Care", icon: navHeart, activeIcon: navHeartActive },
                { id: "scan" as const, label: "Patch", icon: navScan, activeIcon: navScanActive },
                { id: "profile" as const, label: "Profile", icon: navUser, activeIcon: navUserActive },
              ]).map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <div key={tab.id} className="flex-1 flex items-center justify-center h-[50px] cursor-pointer relative" onClick={() => setActiveTab(tab.id)}>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 m-auto h-[50px] rounded-[100px] bg-[rgba(221,105,44,0.2)]"
                        style={{ width: "auto", left: 0, right: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <div className={`flex items-center h-[50px] px-[12px] py-[8px] rounded-[100px] relative z-[1] ${isActive ? "gap-[6px]" : ""}`}>
                      <img alt="" className="shrink-0 size-[24px]" src={isActive ? tab.activeIcon : tab.icon} />
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className="font-['Poppins',sans-serif] font-medium leading-[16px] text-[#dd692c] text-[12px] whitespace-nowrap overflow-hidden"
                          >
                            {tab.label}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </LayoutGroup>
        </div>
        <div aria-hidden className="absolute border border-[#fdfdfd] border-solid inset-0 pointer-events-none rounded-[44px]" />
      </div>
      </div>
    </div>
  );
}
