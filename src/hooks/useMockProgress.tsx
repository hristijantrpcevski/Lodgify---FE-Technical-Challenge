import { ProgressService } from "@/services/ProgressService";
import { useQuery } from "@tanstack/react-query";

export default function useMockProgress() {
  return useQuery({
    queryKey: ["mock-progress"],
    queryFn: () => ProgressService.getMockProgress().then(({ data }) => data),
  });
}
