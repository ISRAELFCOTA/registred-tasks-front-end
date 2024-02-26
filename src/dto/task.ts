export type TaskDto = {
  task_id: string;
  taskName: string;
  taskStatus: "success" | "idle" | "active";
  createDateTask: string;
  updateDateTask: string;
};
