import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "motion/react";
import { OnboardingIntro } from "./pages/onboarding-intro.tsx";
import { OnboardingCora } from "./pages/onboarding-cora.tsx";
import { GoogleAuth } from "./pages/google-auth.tsx";

import Component01PairingCoraIntro from "./imports/01PairingCoraIntro";
import Component02PairingCoraIntro from "./imports/02PairingCoraIntro";
import Component01SetupProfile from "./imports/01SetupProfile";
import Component02SetupProfile from "./imports/02SetupProfile";
import Component03SetupProfile from "./imports/03SetupProfile";
import Component04SetupProfile from "./imports/04SetupProfile";
import Component06SetupProfile from "./imports/06SetupProfile";
import Component07SetupProfile from "./imports/07SetupProfile";
import Component09SetupProfile from "./imports/09SetupProfile";
import App from "./app/App.tsx";
import { BloodPressureDetail } from "./pages/blood-pressure-detail.tsx";
import { MedicationsDetail } from "./pages/medications-detail.tsx";
import { CaregiverCode } from "./pages/caregiver-code.tsx";
import { CaregiverWelcome } from "./pages/caregiver-welcome.tsx";
import { CaregiverHome } from "./pages/caregiver-home.tsx";
import "./styles/index.css";

type Screen =
  | "intro"
  | "cora"
  | "google-auth"
  | "pairing"
  | "pairing-connected"
  | "setup-profile"
  | "setup-profile-dob"
  | "setup-profile-sex"
  | "setup-profile-height"
  | "setup-profile-weight"
  | "setup-profile-focus"
  | "setup-complete"
  | "homepage"
  | "homepage-care"
  | "bp-detail"
  | "meds-detail"
  | "caregiver-code"
  | "caregiver-welcome"
  | "caregiver-home";

const Root = (): JSX.Element => {
  const [screen, setScreen] = useState<Screen>("intro");

  useEffect(() => {
    if (screen === "intro") {
      const timer = setTimeout(() => setScreen("cora"), 2000);
      return () => clearTimeout(timer);
    }
    if (screen === "pairing-connected") {
      const timer = setTimeout(() => setScreen("setup-profile"), 2000);
      return () => clearTimeout(timer);
    }
    if (screen === "setup-complete") {
      const timer = setTimeout(() => setScreen("homepage"), 2000);
      return () => clearTimeout(timer);
    }
    if (screen === "caregiver-welcome") {
      const timer = setTimeout(() => setScreen("caregiver-home"), 2000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  if (screen === "bp-detail") {
    return <BloodPressureDetail onBack={() => setScreen("homepage")} />;
  }

  if (screen === "meds-detail") {
    return <MedicationsDetail onBack={() => setScreen("homepage-care")} />;
  }

  if (screen === "caregiver-code") {
    return <CaregiverCode onBack={() => setScreen("pairing")} onSubmit={() => setScreen("caregiver-welcome")} />;
  }

  if (screen === "caregiver-welcome") {
    return <CaregiverWelcome />;
  }

  if (screen === "caregiver-home") {
    return <CaregiverHome />;
  }

  if (screen === "homepage" || screen === "homepage-care") {
    return <App onNavigate={(s: string) => setScreen(s as Screen)} defaultTab={screen === "homepage-care" ? "care" : "home"} />;
  }

  return (
    <div className="min-h-screen bg-[#F0EAE3] flex items-center justify-center py-8">
      <div className="relative w-[393px] h-[852px] rounded-[44px] overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          {screen === "intro" && (
            <motion.div
              key="intro"
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <OnboardingIntro />
            </motion.div>
          )}
          {screen === "cora" && (
            <motion.div
              key="cora"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <OnboardingCora onGoogleClick={() => setScreen("google-auth")} />
            </motion.div>
          )}
          {screen === "google-auth" && (
            <motion.div
              key="google-auth"
              className="absolute inset-0"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <GoogleAuth onAccountClick={() => setScreen("pairing")} />
            </motion.div>
          )}
          {screen === "pairing" && (
            <motion.div
              key="pairing"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Component01PairingCoraIntro onComplete={() => setScreen("setup-profile")} onSupportingClick={() => setScreen("caregiver-code")} />
            </motion.div>
          )}
          {screen === "pairing-connected" && (
            <motion.div
              key="pairing-connected"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Component02PairingCoraIntro />
            </motion.div>
          )}
          {screen === "setup-profile" && (
            <motion.div
              key="setup-profile"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Component01SetupProfile onStartJourney={() => setScreen("setup-profile-dob")} />
            </motion.div>
          )}
          {screen === "setup-profile-dob" && (
            <motion.div
              key="setup-profile-dob"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Component02SetupProfile onContinue={() => setScreen("setup-profile-sex")} />
            </motion.div>
          )}
          {screen === "setup-profile-sex" && (
            <motion.div
              key="setup-profile-sex"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Component03SetupProfile onContinue={() => setScreen("setup-profile-height")} />
            </motion.div>
          )}
          {screen === "setup-profile-height" && (
            <motion.div
              key="setup-profile-height"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Component04SetupProfile onContinue={() => setScreen("setup-profile-weight")} />
            </motion.div>
          )}
          {screen === "setup-profile-weight" && (
            <motion.div
              key="setup-profile-weight"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Component06SetupProfile onContinue={() => setScreen("setup-profile-focus")} />
            </motion.div>
          )}
          {screen === "setup-profile-focus" && (
            <motion.div
              key="setup-profile-focus"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Component07SetupProfile onContinue={() => setScreen("setup-complete")} />
            </motion.div>
          )}
          {screen === "setup-complete" && (
            <motion.div
              key="setup-complete"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Component09SetupProfile />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);
