import { memo, useCallback, useState } from "react";
import { IconSettings, IconTrash } from "@tabler/icons-react";
import { TaskDto } from "../../dto/task";
import * as S from "./style";
import { HttpService } from "../../service/httpService";
import { ModalEdit } from "../ModalEdit";

type Props = {
  item: TaskDto;
};

export const ShowTask = memo(({ item }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = useCallback(async () => {
    setIsLoading(true);
    try {
      await HttpService.delete(`tasks/${item.task_id}`);
      console.log("deletou");
    } catch (error) {
      console.log("Erro ao excluir a tarefa:", error);
    } finally {
      setIsLoading(false);
    }
  }, [item.task_id]);

  return (
    <>
      <S.Container>
        <S.TaskWrapper>
          <S.TaskTitle>{item.taskName}</S.TaskTitle>
          <S.ButtonWrapper>
            <S.Button onClick={() => setShowModal(true)}>
              <IconSettings />
            </S.Button>
            <S.Button onClick={handleDelete}>
              <IconTrash />
            </S.Button>
          </S.ButtonWrapper>
        </S.TaskWrapper>
        <S.TaskSeparator />
      </S.Container>
      {showModal && <ModalEdit item={item} />}
    </>
  );
});
