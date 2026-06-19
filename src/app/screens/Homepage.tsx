import { useNavigate } from "react-router";
import { Homepage } from "../App";

export default function HomepageScreen() {
  const navigate = useNavigate();
  return <Homepage onNavigate={(s) => navigate(`/${s}`)} />;
}
