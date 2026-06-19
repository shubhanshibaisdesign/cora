import { useNavigate } from "react-router";
import { CaregiverHome } from "../../../caregiver-home";

export default function CaregiverHomeScreen() {
  const navigate = useNavigate();
  return <CaregiverHome onSwitchToPatient={() => navigate("/homepage")} />;
}
