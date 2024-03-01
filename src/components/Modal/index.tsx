import { useState, useCallback } from "react";
import { IconX } from "@tabler/icons-react";
import { ButtonStatus } from "../ButtonStatus";
import { HttpService } from "../../service/httpService";
import { TaskStatus, TaskStatusType } from "../../dto/task";
import * as S from "./styles";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

type Props = {
  onClose: () => void;
  fetchData: () => Promise<void>;
};

export const Modal = ({ onClose, fetchData }: Props) => {
  const [task, setTask] = useState("");
  const [taskStatus, setTaskStatus] = useState<TaskStatus>(2);
  const [isLoading, setIsLoading] = useState(false);
  const tasksStatusOptions: TaskStatusType[] = [
    { label: "Parado", status: 3 },
    { label: "Atuando", status: 2 },
    { label: "Sucesso", status: 1 },
  ];
  const handleSave = useCallback(async () => {
    if (task.trim().length === 0) {
      toast.error("Não é possivel cadastrar uma tarefa vazia");
      return;
    }
    setIsLoading(true);
    try {
      await HttpService.post("tasks", {
        taskName: task,
        taskStatus: taskStatus,
      });
      await fetchData();
      setTask("");
      setTaskStatus(2);
      onClose();
      toast.success("Tarefa criada com sucesso!");
    } catch (error) {
      toast.error("Erro ao adcionar tarefa!");
    } finally {
      setIsLoading(false);
    }
  }, [fetchData, onClose, task, taskStatus]);

  const handleChangeStatus = useCallback((status: TaskStatus) => {
    setTaskStatus(status);
  }, []);

  return (
    <S.Container>
      <S.ContentModal>
        <S.HeaderWrapper>
          <S.Header>Adicionar Tarefa</S.Header>
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
