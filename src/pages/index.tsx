import { GroupsProvider } from "@/context/GroupsContext";
import Groups from "@/features/Groups";

export default function Home() {
  return (
    <GroupsProvider>
      <Groups />
    </GroupsProvider>
  );
}
