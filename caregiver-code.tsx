import { useState, useEffect } from "react";

export const CaregiverCode = ({ onBack, onSubmit }: { onBack: () => void; onSubmit?: () => void }): JSX.Element => {
  const [code, setCode] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setCode("A00-B11"), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0EAE3] flex items-center justify-center py-8">
      <div className="bg-[#fdfdfd] relative rounded-[44px] w-[393px] h-[852px] overflow-hidden shadow-2xl flex flex-col">
        <div className="h-[48px] shrink-0" />

        <div className="flex-1 px-[20px] flex flex-col">
          {/* Back button */}
          <div className="flex items-center gap-[12px]">
            <div className="size-[38px] rounded-full bg-[#dd692c] flex items-center justify-center cursor-pointer shrink-0" onClick={onBack}>
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                <path d="M8.5 1L1.5 8L8.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <p className="font-['Urbanist',sans-serif] font-medium text-[32px] text-[#434343] leading-[33.657px] mt-[80px]">Enter the code</p>

          {/* Input */}
          <div className="border border-[rgba(217,217,217,0.4)] rounded-[41px] h-[52px] mt-[24px] px-[25px] flex items-center">
            <p className="font-['Urbanist',sans-serif] font-normal text-[16px] leading-[21.8px]" style={{ color: code ? "#434343" : "rgba(217,217,217,0.4)" }}>
              {code || "XXX - XXX"}
            </p>
          </div>

          <div className="flex-1" />

          {/* Submit button */}
          <div className="bg-[#dd692c] h-[52px] rounded-[41px] w-full flex items-center justify-center cursor-pointer mb-[40px]" onClick={onSubmit}>
            <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#fdfdfd] leading-[21.8px]">Submit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
