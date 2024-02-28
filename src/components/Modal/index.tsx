import { useState, useCallback } from "react";
import { IconX } from "@tabler/icons-react";
import * as S from "./styles";
import { ButtonStatus } from "../ButtonStatus";
import { HttpService } from "../../service/httpService";
import { TaskDto } from "../../dto/task";

export const Modal = () => {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = useCallback(async () => {
    setIsLoading(true);
    try {
      // Faça uma solicitação POST para enviar os dados da nova tarefa para o servidor
      const response = await HttpService.post("tasks", {
        taskName: task,
        taskStatus: 1,
      });
      setTask(response.data);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      // Aqui você pode lidar com erros, talvez exibir uma mensagem de erro para o usuário
    } finally {
      setIsLoading(false);
    }
  }, [task]);

  return (
    <S.Container>
      <S.ContentModal>
        <S.HeaderWrapper>
          <S.Header>Adicionar Tarefa</S.Header>
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
          <S.ButtonSave onClick={handleSave} disabled={isLoading}>
            <S.ButtonText>Salvar</S.ButtonText>
          </S.ButtonSave>
        </S.Footer>
      </S.ContentModal>
    </S.Container>
  );
};
