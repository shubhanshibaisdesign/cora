import notch from "./notch.svg?url";
import rightSide from "./right-side.svg?url";

export const StatusBar = (): JSX.Element => {
  return (
    <div className="h-[54px] overflow-clip relative w-full">
      <div className="-translate-x-1/2 absolute h-[36px] left-[calc(50%+0.5px)] top-0 w-[190px]">
        <img alt="" className="absolute inset-0 size-full" src={notch} />
      </div>
      <div className="absolute left-[32px] top-[16px]">
        <p className="font-['SF_Pro_Text',sans-serif] font-bold text-[16px] leading-[21px] text-black tracking-[-0.32px]">
          9:41
        </p>
      </div>
      <div className="absolute right-[25px] top-[20px] h-[13px] w-[77.4px]">
        <img alt="" className="absolute inset-0 size-full" src={rightSide} />
      </div>
    </div>
  );
};
