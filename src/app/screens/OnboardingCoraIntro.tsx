import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Component02OnboardingCoraIntro from "../../imports/02OnboardingCoraIntro";

const FRAME_W = 393;
const FRAME_H = 852;

export default function OnboardingCoraIntro() {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => navigate("/onboarding-beyond"), 2000);
    return () => clearTimeout(t);
  }, [navigate]);

  useEffect(() => {
    function update() {
      const s = Math.min(window.innerWidth / FRAME_W, window.innerHeight / FRAME_H, 1);
      setScale(s);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
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
        <Component02OnboardingCoraIntro onGoogleClick={() => navigate("/pairing")} />
      </div>
    </motion.div>
  );
}
