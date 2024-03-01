import { IconCalendar, IconFile, IconX } from "@tabler/icons-react";

import { TaskDto } from "../../dto/task";

import * as S from "./styles";
import { format } from "date-fns";

type Props = {
  taskData: TaskDto;
  onClose: () => void;
};

export const ModalInfo = ({ taskData, onClose }: Props) => {
  const tasksStatusOptions = {
    1: "Finalizado",
    2: "Atuando",
    3: "parado",
  };
  const createDate = format(taskData.createDateTask, "dd/MM/yyyy");
  const updateDate = format(taskData.updateDateTask, "dd/MM/yyyy");
  return (
    <S.Container>
      <S.ContentModal>
        <S.HeaderWrapper>
          <S.Header>Visualizar Tarefa</S.Header>
          <S.Button>
            <IconX onClick={onClose} />
          </S.Button>
        </S.HeaderWrapper>
        <S.Content>
          <S.WrapperTask>
            <S.WrapperSubTitleTask>
              <IconFile color="#9f1faa" />
              <S.InputHeaderTitle>Tarefa</S.InputHeaderTitle>
            </S.WrapperSubTitleTask>
            <S.SubTitleTask>{taskData.taskName}</S.SubTitleTask>
          </S.WrapperTask>
          <S.WrapperTask>
            <S.InputHeaderTitle>Status</S.InputHeaderTitle>
            <S.SubTitleTask>
              {tasksStatusOptions[taskData.taskStatus]}
            </S.SubTitleTask>
          </S.WrapperTask>
          <S.WrapperTask>
            <S.WrapperSubTitleTask>
              <IconCalendar color="#9f1faa" />
              <S.InputHeaderTitle>Data da criação da tarefa</S.InputHeaderTitle>
            </S.WrapperSubTitleTask>
            <S.SubTitleTask>{createDate}</S.SubTitleTask>
          </S.WrapperTask>
          <S.WrapperTask>
            <S.WrapperSubTitleTask>
              <IconCalendar color="#9f1faa" />
              <S.InputHeaderTitle>
                Data que a tarefa foi editada
              </S.InputHeaderTitle>
            </S.WrapperSubTitleTask>
            <S.SubTitleTask>{updateDate}</S.SubTitleTask>
          </S.WrapperTask>
        </S.Content>
        <S.Footer></S.Footer>
      </S.ContentModal>
    </S.Container>
  );
};
