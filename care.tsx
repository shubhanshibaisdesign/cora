import { useState } from "react";
import arrowIcon from "./arrow-icon.svg?url";
import profileMark from "./profile-mark.jpg";
import profileEmma from "./profile-emma.jpg";
import pillGraphic from "./pill-default.svg?url";
import iconMedicine from "./icon-medicine.svg?url";
import iconDoctor from "./icon-doctor.svg?url";
import iconNote from "./icon-note.svg?url";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-[12px] w-full">
      <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[16px]">{title}</p>
      <img alt="" className="size-[39px]" src={arrowIcon} />
    </div>
  );
}

export function TodaysTasks() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex flex-col gap-[8px] items-end pb-[6px] pt-[16px] px-[5px] rounded-[20px] w-full">
      <SectionHeader title="TODAY'S TASKS" />
      <div className="bg-[#fdfdfd] rounded-[18px] w-full p-[20px]">
        <p className="font-['Urbanist',sans-serif] font-medium text-[32px] text-[#434343] leading-[36px]">Dr. Shane Douglas</p>
        <p className="font-['Urbanist',sans-serif] font-medium text-[12px] text-[#ADAAAA] leading-[20.8px] mt-[8px]">General Practitioner</p>
        <div className="flex gap-[40px] mt-[24px]">
          <div>
            <p className="font-['Urbanist',sans-serif] font-medium text-[12px] text-[#434343] leading-[20.8px] text-[#ADAAAA]">Last Session</p>
            <p className="font-['Urbanist',sans-serif] font-medium text-[16px] text-[#434343] leading-[20.8px]">16 Apr '26</p>
          </div>
          <div className="w-px bg-[rgba(0,0,0,0.08)] self-stretch" />
          <div>
            <p className="font-['Urbanist',sans-serif] font-medium text-[12px] text-[#434343] leading-[20.8px] text-[#ADAAAA]">Next Session</p>
            <p className="font-['Urbanist',sans-serif] font-medium text-[16px] text-[#434343] leading-[20.8px]">In 2 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CareTeam() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex flex-col gap-[8px] items-start pb-[6px] pt-[16px] pl-[5px] rounded-[24px] w-full overflow-hidden">
      <SectionHeader title="YOUR CARE TEAM" />
      <div className="flex gap-[8px] overflow-x-auto w-full scrollbar-hide">
        {[
          { name: "Mark Todd", role: "Brother", image: profileMark },
          { name: "Emma Green", role: "Sister", image: profileEmma },
        ].map((person) => (
          <div key={person.name} className="shrink-0 w-[173px] h-[231px] rounded-[25px] relative overflow-hidden border-[1.5px] border-[rgba(124,139,137,0.27)]">
            <img alt="" className="absolute inset-0 size-full object-cover" src={person.image} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(182deg, rgba(71,71,71,0) 18%, rgba(16,16,16,0.65) 82%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-[20px]">
              <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#fdfdfd] leading-[1.5]">{person.name}</p>
              <p className="font-['Urbanist',sans-serif] font-normal text-[13px] text-[#434343] leading-[1.1] tracking-[-0.26px]">{person.role}</p>
            </div>
          </div>
        ))}
        <div className="shrink-0 w-[173px] h-[231px] rounded-[25px] relative overflow-hidden border-[1.5px] border-[rgba(215,217,217,0.27)] bg-[rgba(255,255,255,0.2)] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#ADAAAA] text-[24px] font-light">+</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-[20px] flex justify-center">
            <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#ADAAAA] leading-[1.5]">Add New</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WEEKS = [
  { dates: [18, 19, 20, 21, 22, 23, 24], selected: 2, note: "Appointment with Dr. Shane Douglas at 3:30PM, Apollo Hospitals." },
  { dates: [25, 26, 27, 28, 29, 30, 31], selected: 0, note: "No appointments for today." },
];

export function WeeklySchedule() {
  const [week, setWeek] = useState(0);
  const current = WEEKS[week];

  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex flex-col gap-[8px] items-end pb-[6px] pt-[16px] px-[5px] rounded-[20px] w-full">
      <SectionHeader title="WEEKLY SCHEDULE" />
      <div className="bg-[#fdfdfd] rounded-[18px] w-full px-[18px] py-[16px] h-[160px] flex flex-col">
        <div className="flex items-center">
          <div className="shrink-0 w-[7px] flex items-center justify-center cursor-pointer" onClick={() => setWeek(Math.max(0, week - 1))}>
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none"><path d="M6 1L1 7L6 13" stroke="#434343" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="flex-1 flex items-center justify-between px-[8px]">
            {current.dates.map((date, i) => (
              <div key={date} className={`flex flex-col items-center gap-[4px] w-[39px] py-[6px] rounded-[8px] ${i === current.selected ? "bg-[rgba(221,105,44,0.2)]" : ""}`}>
                <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#3f2815] text-center leading-[16px]">{date}</p>
                <p className="font-['Urbanist',sans-serif] font-normal text-[12px] text-[#3f2815] text-center leading-[16px]">{DAYS[i]}</p>
              </div>
            ))}
          </div>
          <div className="shrink-0 w-[7px] flex items-center justify-center cursor-pointer" onClick={() => setWeek(Math.min(WEEKS.length - 1, week + 1))}>
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none"><path d="M1 1L6 7L1 13" stroke="#434343" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        <div className="h-px bg-[rgba(0,0,0,0.08)] w-full mt-[12px]" />
        <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#ADAAAA] leading-[24px] mt-[12px]">
          {current.note}
        </p>
      </div>
    </div>
  );
}

export function Medications({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex flex-col gap-[8px] items-end pb-[6px] pt-[16px] px-[5px] rounded-[20px] w-full cursor-pointer" onClick={onClick}>
      <SectionHeader title="MEDICATIONS" />
      <div className="flex flex-col gap-[8px] w-full">
        <div className="bg-[#fdfdfd] rounded-[20px] w-full p-[15px] pt-[24px] relative overflow-hidden flex flex-col" style={{ height: 492 }}>
          <div>
            {[
              { name: "Amlodipine 5 mg", dosage: "1 tablet . before food" },
              { name: "Ramipril 5 mg", dosage: "1 tablet . after food" },
              { name: "Clopidogrel 75 mg", dosage: "1 tablet . after food" },
            ].map((med) => (
              <div key={med.name} className="mb-[12px] last:mb-0">
                <p className="font-['Urbanist',sans-serif] font-normal text-[32px] text-[#434343] leading-[36px]">{med.name}</p>
                <p className="font-['Urbanist',sans-serif] font-normal text-[13px] text-[#ADAAAA] leading-[20px]">{med.dosage}</p>
              </div>
            ))}
          </div>
          <div className="flex-1" />
          <div className="flex justify-center pb-[6px]">
            <img alt="" className="h-[71px] w-[191px]" src={pillGraphic} />
          </div>
        </div>
        <div className="bg-[#fdfdfd] rounded-[18px] w-full p-[15px]">
          <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#434343] leading-[24px]">
            Amlodipine is running low with about 4 days left, good time to order a refill.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Documents() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex flex-col gap-[8px] items-start pt-[16px] px-[5px] pb-[6px] rounded-[24px] w-full">
      <SectionHeader title="DOCUMENTS" />
      <div className="flex gap-[6px] w-full">
        {[
          { icon: iconMedicine, title: "Prescription", date: "12 June", source: "Dr. Shaun G" },
          { icon: iconDoctor, title: "CT Scan", date: "10 May", source: "Apollo Hospitals" },
          { icon: iconNote, title: "Lipid Panel", date: "10 May", source: "Apollo Hospitals" },
        ].map((doc) => (
          <div key={doc.title} className="bg-[#fdfdfd] rounded-[20px] flex-1 h-[138px] p-[13px] flex flex-col justify-between">
            <img alt="" className="size-[18px]" src={doc.icon} />
            <div>
              <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#434343] leading-[24px]">{doc.title}</p>
              <div className="mt-[8px]">
                <p className="font-['Urbanist',sans-serif] font-normal text-[12px] text-[#434343] leading-[16px]">{doc.date}</p>
                <p className="font-['Urbanist',sans-serif] font-normal text-[12px] text-[#434343] leading-[16px]">{doc.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const CarePage = ({ onNavigate }: { onNavigate?: (screen: string) => void }): JSX.Element => {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden px-[20px] relative z-[1] scrollbar-hide">
      <div className="relative w-full pb-[100px]">
        <div className="pt-[16px]">
          <p className="font-['Urbanist',sans-serif] font-medium text-[36px] text-[#3f2815] leading-[42px]">Your Care</p>
        </div>
        <div className="flex flex-col gap-[16px] items-start mt-[32px] w-full">
          <TodaysTasks />
          <CareTeam />
          <WeeklySchedule />
          <Medications onClick={() => onNavigate?.("meds-detail")} />
          <Documents />
        </div>
      </div>
    </div>
  );
};
