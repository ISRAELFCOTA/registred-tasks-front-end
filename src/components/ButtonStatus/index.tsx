import { TaskStatus, TaskStatusType } from "../../dto/task";
import * as S from "./styles";

type Props = {
  taskStatus: TaskStatusType;
  onClick: () => void;
  isSelected: boolean;
};

export const ButtonStatus = ({ taskStatus, onClick, isSelected }: Props) => {
  const colors: Record<TaskStatus, { bgColor: string; color: string }> = {
    2: { bgColor: "#FFEA00", color: "#120016" },
    3: { bgColor: "#BD0000", color: "#D0D0D0" },
    1: { bgColor: "#18B600", color: "#021600" },
    4: { bgColor: "", color: "" },
  };

  const taskColor = colors[taskStatus.status];

  return (
    <S.Button
      bgColor={taskColor.bgColor}
      onClick={onClick}
      disabled={isSelected}
      isSelect={isSelected}
    >
      <S.Label color={taskColor.color}>{taskStatus.label}</S.Label>
    </S.Button>
  );
};
