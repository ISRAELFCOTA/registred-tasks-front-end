import { memo, useCallback, useState } from "react";
import { IconEdit, IconTrash, IconZoomInArea } from "@tabler/icons-react";
import { TaskDto, TaskStatus } from "../../dto/task";
import { HttpService } from "../../service/httpService";
import { toast } from "react-toastify";
import * as S from "./style";
import { ClipLoader } from "react-spinners";

type Props = {
  item: TaskDto;
  fetchData: () => Promise<void>;
  onClose: () => void;
  onShowModalEdit: () => void;
  onShowModalInfo: () => void;
};

export const ShowTask = memo(
  ({ item, fetchData, onClose, onShowModalEdit, onShowModalInfo }: Props) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = useCallback(async () => {
      setIsLoading(true);
      try {
        await HttpService.delete(`tasks/${item.task_id}`);
        await fetchData();
        onClose();
        toast.success("Tarefa excluída com sucesso!");
      } catch (error) {
        toast.error("Não foi possivel excluir a tarefa.");
      } finally {
        setIsLoading(false);
      }
    }, [fetchData, item.task_id, onClose]);

    const statusColors: Record<TaskStatus, string> = {
      1: "#18B600",
      2: "#FFEA00",
      3: "#BD0000",
      4: "",
    };

    const color = statusColors[item.taskStatus];

    return (
      <>
        <S.Container>
          <S.TaskWrapper>
            <S.TaskHeader>
              <S.TaskStatusColor bgColor={color} />
              <S.TaskTitle>{item.taskName}</S.TaskTitle>
            </S.TaskHeader>
            <S.ButtonWrapper>
              <S.Button onClick={onShowModalInfo}>
                <IconZoomInArea />
              </S.Button>
              <S.Button onClick={onShowModalEdit}>
                <IconEdit />
              </S.Button>

              <S.Button onClick={handleDelete} disabled={isLoading}>
                {isLoading ? (
                  <ClipLoader color="#fff" size={20} />
                ) : (
                  <IconTrash />
                )}
              </S.Button>
            </S.ButtonWrapper>
          </S.TaskWrapper>
          <S.TaskSeparator />
        </S.Container>
      </>
    );
  }
);
