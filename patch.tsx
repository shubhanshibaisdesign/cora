import deviceRender from "./device-render.png";
import syncIcon from "./sync-icon.svg?url";
import arrowIcon from "./arrow-icon.svg?url";
import bgGradient from "./bg-gradient.png";

function ConnectionStatus() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 rounded-[20px] w-full">
      <div className="px-[22px] pt-[22px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#2f8a0e] leading-[16px]">CONNECTED</p>
            <p className="font-['Urbanist',sans-serif] font-normal text-[12px] text-[#ADAAAA] leading-[16px] mt-[4px]">Last synced 6 mins ago</p>
          </div>
          <img alt="" className="size-[39px]" src={syncIcon} />
        </div>
      </div>
      <div className="px-[7px] pb-[7px] mt-[16px]">
        <div className="rounded-[18px] overflow-hidden h-[320px]">
          <img alt="" className="size-full object-cover" src={deviceRender} />
        </div>
      </div>
    </div>
  );
}

function CurrentPatch() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 rounded-[20px] w-full">
      <div className="px-[22px] pt-[22px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[16px]">CURRENT PATCH</p>
            <p className="font-['Urbanist',sans-serif] font-normal text-[12px] text-[#ADAAAA] leading-[16px] mt-[4px]">Applied Tue, 11 Jun . 9:20 AM</p>
          </div>
          <img alt="" className="size-[39px]" src={arrowIcon} />
        </div>
      </div>
      <div className="px-[7px] pb-[7px] mt-[16px]">
        <div className="bg-[#fdfdfd] rounded-[18px] px-[15px] py-[20px]">
          <div className="flex items-end justify-between">
            <p className="font-['Urbanist',sans-serif] font-medium text-[32px] text-[#434343] leading-[36px]">Day 4/14</p>
            <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#434343] leading-[16px]">10 days left</p>
          </div>
          <div className="h-px bg-[rgba(0,0,0,0.08)] w-full my-[16px]" />
          <div className="flex items-center justify-between">
            <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#434343] leading-[16px]">Adhesion</p>
            <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#2f8a0e] leading-[16px]">Strong</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Supply() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex flex-col gap-[8px] pb-[6px] pt-[16px] px-[5px] rounded-[24px] w-full">
      <div className="flex items-center justify-between px-[12px]">
        <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[16px]">SUPPLY</p>
        <img alt="" className="size-[39px]" src={arrowIcon} />
      </div>
      <div className="bg-[#fdfdfd] rounded-[20px] w-full p-[20px]">
        <p className="font-['Urbanist',sans-serif] font-medium text-[32px] text-[#434343] leading-[36px]">2 patches left</p>
        <p className="font-['Urbanist',sans-serif] font-medium text-[12px] text-[#ADAAAA] leading-[20.8px] mt-[8px]">Your next reorder is due around 25 June.</p>
        <div className="bg-[#dd692c] flex items-center justify-center h-[44px] rounded-[38px] mt-[16px] w-full">
          <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#fdfdfd] leading-[16px]">Reorder Patches</p>
        </div>
      </div>
    </div>
  );
}

function Device() {
  return (
    <div className="bg-[rgba(217,217,217,0.3)] backdrop-blur-[40px] border border-white/30 flex flex-col gap-[8px] pb-[6px] pt-[16px] px-[5px] rounded-[24px] w-full">
      <div className="px-[12px]">
        <p className="font-['Urbanist',sans-serif] font-semibold text-[16px] text-[#3f2815] leading-[16px]">DEVICE</p>
      </div>
      <div className="bg-[#fdfdfd] rounded-[20px] w-full">
        {[
          { label: "Firmware", value: "v2.3.1", color: "#2f8a0e", arrow: false },
          { label: "Sensor Health", value: "Excellent", color: "#2f8a0e", arrow: false },
          { label: "Re-sync sensors", value: "", color: "", arrow: true },
          { label: "Reset Patch", value: "", color: "", arrow: true },
        ].map((item, i, arr) => (
          <div key={item.label}>
            <div className="flex items-center justify-between px-[19px] h-[52px]">
              <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#434343] leading-[16px]">{item.label}</p>
              {item.value ? (
                <p className={`font-['Urbanist',sans-serif] font-normal text-[16px] leading-[16px]`} style={{ color: item.color }}>{item.value}</p>
              ) : item.arrow ? (
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 4H13M13 4L10 1M13 4L10 7" stroke="#434343" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : null}
            </div>
            {i < arr.length - 1 && <div className="h-px bg-[rgba(0,0,0,0.08)] mx-[19px]" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export const PatchPage = (): JSX.Element => {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden px-[20px] relative z-[1] scrollbar-hide">
      <div className="relative w-full pb-[100px]">
        <div className="pt-[16px]">
          <p className="font-['Urbanist',sans-serif] font-medium text-[36px] text-[#3f2815] leading-[42px]">Your Patch</p>
        </div>
        <div className="flex flex-col gap-[16px] items-start mt-[32px] w-full">
          <ConnectionStatus />
          <CurrentPatch />
          <Supply />
          <Device />
        </div>
      </div>
    </div>
  );
};
