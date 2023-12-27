import Format from "@/components/format";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Dashboard() {

// greet user with their email address
const { data: session} = useSession();
  return (
    <Format>
      <div className="font-normal">Hey <b>{session?.user?.name || "Stranger"}</b>!</div>
    </Format>
  );

}
