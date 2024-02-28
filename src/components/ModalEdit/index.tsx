import { useState, useCallback } from "react";
import { IconX } from "@tabler/icons-react";
import { HttpService } from "../../service/httpService";
import { TaskDto } from "../../dto/task";
import * as S from "./styles";

type Props = {
  item: TaskDto;
};

export const ModalEdit = ({ item }: Props) => {
  const [task, setTask] = useState(item.taskName); // Define o estado inicial com o nome da tarefa
  const [isLoading, setIsLoading] = useState(false);

  const handleEditTask = useCallback(async () => {
    setIsLoading(true);
    try {
      // Faça uma solicitação PUT para atualizar os dados da tarefa no servidor
      await HttpService.patch(`tasks/${item.task_id}`, {
        taskName: task,
        taskStatus: 0,
      });
      console.log("Tarefa editada com sucesso!");
    } catch (error) {
      console.error("Erro ao editar tarefa:", error);
      // Aqui você pode lidar com erros, talvez exibir uma mensagem de erro para o usuário
    } finally {
      setIsLoading(false);
    }
  }, [item.task_id, task]);

  return (
    <S.Container>
      <S.ContentModal>
        <S.HeaderWrapper>
          <S.Header>Editar Tarefa</S.Header>
          <S.Button>
            <IconX />
          </S.Button>
        </S.HeaderWrapper>
        <S.Content>
          <S.WrapperTask>
            <S.InputHeaderTitle>Tarefa</S.InputHeaderTitle>
            <S.Input
              placeholder="Digite qual tarefa a ser adicionada"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </S.WrapperTask>
        </S.Content>
        <S.Footer>
          <S.ButtonSave onClick={handleEditTask} disabled={isLoading}>
            <S.ButtonText>Salvar</S.ButtonText>
          </S.ButtonSave>
        </S.Footer>
      </S.ContentModal>
    </S.Container>
  );
};
