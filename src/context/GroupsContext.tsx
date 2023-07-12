import useMockProgress from "@/hooks/useMockProgress";
import { Group } from "@/services/ProgressService";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface Context {
  groups: Group[];
  isLoading: boolean;
  setGroups(checked: boolean, id: string): void;
}

const GroupsContext = createContext<Context>({
  groups: [],
  isLoading: false,
  setGroups: (checked: boolean, id: string) => {},
});

export function GroupsProvider({ children }: React.PropsWithChildren<unknown>) {
  const { data: groups = [], isLoading, isSuccess } = useMockProgress();

  const [groupState, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    if (isSuccess) {
      setGroups(groups);
    }
  }, [groups, isSuccess]);

  const value = useMemo(
    () => ({
      groups: groupState,
      isLoading: isLoading,
      setGroups: (checked: boolean, id: string) => {
        setGroups((groups) =>
          groups.map((group) => ({
            ...group,
            tasks: group.tasks.map((task, index) => {
              const uniqueId = `${group.name}-${task.description}-${index}`;

              return {
                ...task,
                checked: uniqueId === id ? checked : task.checked,
              };
            }),
          }))
        );
      },
    }),
    [groupState, isLoading]
  );

  return (
    <GroupsContext.Provider value={value}>{children}</GroupsContext.Provider>
  );
}

export default function useGroupsContext() {
  return useContext(GroupsContext);
}
