import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import coraFrontVideo from "./cora-device.mp4";
import coraBackVideo from "./cora-device-back.mp4";
import coraPatchVideo from "./cora-patch.mp4";
import togetherBg from "./together-bg.png";
import googleLogo from "./google-logo.png";
import appleLogo from "./apple-logo.png";

const STEPS = [
  {
    title: "This is Cora",
    description: "A soft patch that quietly reads your body all day.",
    descWidth: "w-[225px]",
    descColor: "text-[#434343]",
    headerLeft: "left-1/2",
    headerWidth: "w-[343px]",
    video: coraFrontVideo,
  },
  {
    title: "Beyond the checkup",
    description: "Reading your body continuously, catching changes as they happen.",
    descWidth: "w-[293px]",
    descColor: "text-[#434343]",
    headerLeft: "left-[calc(50%-11.5px)]",
    headerWidth: "w-[320px]",
    video: coraBackVideo,
  },
  {
    title: "Made to be worn",
    description: "It stays put all day and goes wherever you do. No wires, no charging",
    descWidth: "w-[293px]",
    descColor: "text-[#fdfdfd]",
    headerLeft: "left-[calc(50%-11.5px)]",
    headerWidth: "w-[320px]",
    video: coraPatchVideo,
    duration: 4000,
  },
  {
    title: "In it together",
    description: "Follow your loved one's readings in\nreal time and know they're okay.",
    descWidth: "w-[302px]",
    descColor: "text-[#434343]",
    headerLeft: "left-[calc(50%-11.5px)]",
    headerWidth: "w-[320px]",
    image: togetherBg,
  },
];

const VIDEOS = [coraFrontVideo, coraBackVideo, coraPatchVideo];

export const OnboardingCora = ({ onGoogleClick }: { onGoogleClick?: () => void }): JSX.Element => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < STEPS.length - 1) {
      const duration = STEPS[step].duration ?? 2000;
      const timer = setTimeout(() => setStep(step + 1), duration);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const current = STEPS[step];

  return (
    <div className="bg-[#fdfdfd] relative rounded-[44px] size-full overflow-hidden">

      {/* Pre-render all videos, show the active one */}
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          style={{
            opacity: current.video === src ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
          }}
        />
      ))}

      {/* Together background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
        src={togetherBg}
        style={{
          opacity: current.image ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
        }}
        alt=""
      />

      <div className="absolute left-[20px] right-[20px] top-[60px] bottom-[47px]">
        {/* Progress dots */}
        <div className="absolute h-[5px] left-[5px] top-[479px] w-[116px]">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute h-[5px] rounded-[11px]"
              style={{ left: i * 30, width: i < 2 ? 25 : 26 }}
              animate={{ backgroundColor: i === step ? "#dd692c" : "rgba(221,105,44,0.2)" }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>

        {/* Animated text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className={`-translate-x-1/2 absolute flex flex-col gap-[24px] items-start ${current.headerLeft} top-[509px] ${current.headerWidth}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="font-['Urbanist',sans-serif] font-medium text-[36px] leading-[42px] text-[#dd692c]">
              {current.title}
            </p>
            <p className={`font-['Urbanist',sans-serif] font-normal text-[16px] leading-[21.8px] whitespace-pre-line ${current.descColor} ${current.descWidth}`}>
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Apple button */}
        <div className="absolute bg-[#0b0a0a] flex items-center justify-center gap-px left-0 overflow-clip px-[94px] py-[13px] rounded-[41px] top-[634px] w-[353px]">
          <img alt="" className="h-[24px] w-[23px] object-cover" src={appleLogo} />
          <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#fdfdfd] whitespace-nowrap">
            Continue with Apple
          </p>
        </div>

        {/* Google button */}
        <motion.div
          className="absolute bg-[#fdfdfd] flex items-center justify-center gap-[4px] left-0 overflow-clip px-[96px] py-[17px] rounded-[41px] top-[694px] w-[353px] cursor-pointer"
          whileHover={{ backgroundColor: "#f0f0f0" }}
          whileTap={{ backgroundColor: "#e8e8e8" }}
          transition={{ duration: 0.15 }}
          onClick={onGoogleClick}
        >
          <div className="size-[16px] relative overflow-hidden shrink-0">
            <img alt="" className="absolute h-[128.57%] left-[-10.94%] top-[-21.43%] w-[121.43%] max-w-none" src={googleLogo} />
          </div>
          <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[16px] text-[#0b0a0a] whitespace-nowrap">
            Continue with Google
          </p>
        </motion.div>
      </div>
    </div>
  );
};
