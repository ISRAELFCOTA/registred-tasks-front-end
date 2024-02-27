export type TaskDto = {
  task_id: string;
  taskName: string;
  taskStatus: TaskStatus;
  createDateTask: string;
  updateDateTask: string;
};

export type TaskStatus = "success" | "idle" | "active";
