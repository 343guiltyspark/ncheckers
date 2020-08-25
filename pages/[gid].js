import Home from "./index";
import { useRouter } from "next/router";

export default function game() {
  const router = useRouter();
  let sessionId = router.asPath;
  sessionId = sessionId.replace("/", "");
  console.log(sessionId);
  return <Home sessionId={sessionId} />;
}
