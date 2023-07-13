import { type Group, ProgressService } from "@/services/ProgressService";
import { useQuery } from "@tanstack/react-query";

export default function useMockProgress(onSuccess: (groups: Group[]) => void) {
  return useQuery({
    queryKey: ["mock-progress"],
    queryFn: () => ProgressService.getMockProgress().then(({ data }) => data),
    onSuccess: onSuccess,
  });
}
