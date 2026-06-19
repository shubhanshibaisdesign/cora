import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const FRAME_W = 393;
const FRAME_H = 852;

export default function CaregiverCode() {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);
  const [code, setCode] = useState("");

  useEffect(() => {
    function update() {
      const s = Math.min(window.innerWidth / FRAME_W, window.innerHeight / FRAME_H, 1);
      setScale(s);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setCode("A00-B11"), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-screen h-screen flex items-center justify-center bg-gray-100 overflow-hidden"
    >
      <div
        style={{
          width: FRAME_W,
          height: FRAME_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <div className="bg-[#fdfdfd] relative rounded-[44px] size-full overflow-hidden flex flex-col">
          <div className="h-[48px] shrink-0" />
          <div className="flex-1 px-[20px] flex flex-col">
            <div className="flex items-center gap-[12px]">
              <div
                className="size-[38px] rounded-full bg-[#dd692c] flex items-center justify-center cursor-pointer shrink-0"
                onClick={() => navigate("/pairing")}
              >
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
                  <path d="M8.5 1L1.5 8L8.5 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <p className="font-['Urbanist',sans-serif] font-medium text-[32px] text-[#434343] leading-[33.657px] mt-[80px]">Enter the code</p>
            <div className="border border-[rgba(217,217,217,0.4)] rounded-[41px] h-[52px] mt-[24px] px-[25px] flex items-center">
              <p className="font-['Urbanist',sans-serif] font-normal text-[16px] leading-[21.8px]" style={{ color: code ? "#434343" : "rgba(217,217,217,0.4)" }}>
                {code || "XXX - XXX"}
              </p>
            </div>
            <div className="flex-1" />
            <div
              className="bg-[#dd692c] h-[52px] rounded-[41px] w-full flex items-center justify-center cursor-pointer mb-[40px]"
              onClick={() => navigate("/caregiver-welcome")}
            >
              <p className="font-['Urbanist',sans-serif] font-normal text-[16px] text-[#fdfdfd] leading-[21.8px]">Submit</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
