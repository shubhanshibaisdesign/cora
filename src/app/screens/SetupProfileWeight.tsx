import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Component06SetupProfile from "../../imports/06SetupProfile";

const FRAME_W = 393;
const FRAME_H = 852;

export default function SetupProfileWeight() {
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);

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
    <div
      className="w-screen h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      <div
        style={{
          width: FRAME_W,
          height: FRAME_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <Component06SetupProfile
          onContinue={() => navigate("/setup-profile-focus")}
          onNext={() => navigate("/setup-profile-focus")}
          onBack={() => navigate("/setup-profile-height")}
        />
      </div>
    </div>
  );
}
