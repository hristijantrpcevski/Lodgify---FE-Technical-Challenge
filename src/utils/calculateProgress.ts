import { type Group } from "@/services/ProgressService";

export function calculateProgress(groups: Group[]) {
  let sum = 0;
  let progress = 0;

  groups.forEach((group) =>
    group.tasks.forEach((task) => {
      sum = sum + task.value;
      if (task.checked) {
        progress = progress + task.value;
      }
    })
  );

  return (progress * 100) / sum;
}
