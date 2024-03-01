import { useState, useCallback, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import { ButtonStatus } from "../ButtonStatus";
import { HttpService } from "../../service/httpService";
import { TaskDto, TaskStatus, TaskStatusType } from "../../dto/task";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import * as S from "./styles";

type Props = {
  taskData: TaskDto;
  onClose: () => void;
  fetchData: () => Promise<void>;
  isOpen: boolean;
};

export const ModalEdit = ({ taskData, onClose, fetchData, isOpen }: Props) => {
  const [task, setTask] = useState(taskData.taskName);
  const [taskStatus, setTaskStatus] = useState(taskData.taskStatus);
  const [isLoading, setIsLoading] = useState(false);
  const tasksStatusOptions: TaskStatusType[] = [
    { label: "Parado", status: 3 },
    { label: "Atuando", status: 2 },
    { label: "Sucesso", status: 1 },
  ];
  const handleSave = useCallback(async () => {
    if (task.trim().length === 0) {
      toast.error("Não é possivel Editar uma tarefa com nome vazio.");
      return;
    }
    setIsLoading(true);
    try {
      await HttpService.put(`tasks/${taskData.task_id}`, {
        taskName: task,
        taskStatus: taskStatus,
      });
      console.log({
        taskName: task,
        taskStatus: taskStatus,
      });
      await fetchData();
      setTask("");
      // setTaskStatus(2);
      onClose();
      toast.success("Tarefa editada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar tarefa!");
    } finally {
      setIsLoading(false);
    }
  }, [fetchData, onClose, task, taskData.task_id, taskStatus]);

  const handleChangeStatus = useCallback((status: TaskStatus) => {
    setTaskStatus(status);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTask(taskData.taskName);
      setTaskStatus(taskData.taskStatus);
      console.log(taskData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <S.Container>
      <S.ContentModal>
        <S.HeaderWrapper>
          <S.Header>Editar Tarefa</S.Header>
          <S.Button>
            <IconX onClick={onClose} />
          </S.Button>
        </S.HeaderWrapper>
        <S.Content>
          <S.WrapperTask>
            <S.InputHeaderTitle>Tarefa</S.InputHeaderTitle>
            <S.Input
              placeholder="Nome da tarefa"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  await handleSave();
                }
              }}
            />
          </S.WrapperTask>
          <S.WrapperTask>
            <S.InputHeaderTitle>Status</S.InputHeaderTitle>
            <S.WrapperSelectStatus>
              {tasksStatusOptions.map((item) => (
                <ButtonStatus
                  onClick={() => handleChangeStatus(item.status)}
                  taskStatus={item}
                  key={item.label}
                  isSelected={item.status === taskStatus}
                />
              ))}
            </S.WrapperSelectStatus>
          </S.WrapperTask>
        </S.Content>
        <S.Footer>
          <S.ButtonSave onClick={handleSave} disabled={isLoading}>
            {isLoading ? (
              <ClipLoader
                color="#fff"
                size={24}
                cssOverride={{ marginInline: "0.75rem" }}
              />
            ) : (
              <S.ButtonText>Salvar</S.ButtonText>
            )}
          </S.ButtonSave>
        </S.Footer>
      </S.ContentModal>
    </S.Container>
  );
};
