import { createBrowserRouter } from "react-router";
import OnboardingIntro from "./screens/OnboardingIntro";
import OnboardingCoraIntro from "./screens/OnboardingCoraIntro";
import OnboardingBeyond from "./screens/OnboardingBeyond";
import OnboardingWorn from "./screens/OnboardingWorn";
import OnboardingTogether from "./screens/OnboardingTogether";
import PairingCoraIntro from "./screens/PairingCoraIntro";
import PairingConnected from "./screens/PairingConnected";
import SetupProfile from "./screens/SetupProfile";
import SetupProfileDob from "./screens/SetupProfileDob";
import SetupProfileSex from "./screens/SetupProfileSex";
import SetupProfileHeight from "./screens/SetupProfileHeight";
import SetupProfileWeight from "./screens/SetupProfileWeight";
import SetupProfileFocus from "./screens/SetupProfileFocus";
import SetupComplete from "./screens/SetupComplete";

export const router = createBrowserRouter([
  { path: "/", Component: OnboardingIntro },
  { path: "/onboarding-cora", Component: OnboardingCoraIntro },
  { path: "/onboarding-beyond", Component: OnboardingBeyond },
  { path: "/onboarding-worn", Component: OnboardingWorn },
  { path: "/onboarding-together", Component: OnboardingTogether },
  { path: "/pairing", Component: PairingCoraIntro },
  { path: "/pairing-connected", Component: PairingConnected },
  { path: "/setup-profile", Component: SetupProfile },
  { path: "/setup-profile-dob", Component: SetupProfileDob },
  { path: "/setup-profile-sex", Component: SetupProfileSex },
  { path: "/setup-profile-height", Component: SetupProfileHeight },
  { path: "/setup-profile-weight", Component: SetupProfileWeight },
  { path: "/setup-profile-focus", Component: SetupProfileFocus },
  { path: "/setup-complete", Component: SetupComplete },
  {
    path: "*",
    Component: () => (
      <div className="flex items-center justify-center h-screen">
        <p>Screen not found</p>
      </div>
    ),
  },
]);
