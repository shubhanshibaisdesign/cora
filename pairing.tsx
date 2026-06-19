import deviceFront from "./device-front.png";
import gradient from "./gradient.png";

export const Pairing = ({ onStartPairing }: { onStartPairing?: () => void }): JSX.Element => {
  return (
    <div className="bg-[#fafafa] relative rounded-[44px] size-full overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute blur-[58px] h-[457px] left-[23px] rounded-[89px] top-[204px] w-[344px] pointer-events-none">
        <div className="absolute inset-0 overflow-hidden rounded-[89px]">
          <img alt="" className="absolute h-full left-[-56.92%] max-w-none top-0 w-[220.82%]" src={gradient} />
        </div>
      </div>

      {/* Device image */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[280px] w-[260px] h-[260px] pointer-events-none">
        <img alt="" className="size-full object-contain" src={deviceFront} />
      </div>

      {/* Content */}
      <div className="absolute left-[20px] right-[20px] bottom-[60px]">
        <p className="font-['Urbanist',sans-serif] font-normal text-[16px] leading-[21.8px] text-black text-center mb-[16px]">
          Supporting someone
        </p>
        <button className="bg-[#dd692c] rounded-[41px] h-[64px] w-full flex items-center justify-center cursor-pointer" onClick={onStartPairing}>
          <p className="font-['Urbanist',sans-serif] font-normal text-[16px] leading-[21.8px] text-[#fdfdfd]">
            Start Pairing
          </p>
        </button>
      </div>
    </div>
  );
};
