import { TaskStatus } from "../../dto/task";
import { Button } from "./styles";

type Props = {
  taskStatus: TaskStatus;
};

export const ButtonStatus = ({ taskStatus }: Props) => {
  const colors: Record<TaskStatus, string> = {
    active: "green",
    idle: "yellow",
    success: "red",
  };

  const color = colors[taskStatus];

  return (
    <>
      <Button color={color} />
    </>
  );
};
