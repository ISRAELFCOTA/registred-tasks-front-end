export type TaskDto = {
  task_id: string;
  taskName: string;
  taskStatus: TaskStatus;
  createDateTask: string;
  updateDateTask: string;
};
// 1 = SUCCESS
// 2 = ACTING
// 3 = STOPPED
export type TaskStatus = 1 | 2 | 3 | 4;

export type TaskStatusType = {
  status: TaskStatus;
  label: string;
};
