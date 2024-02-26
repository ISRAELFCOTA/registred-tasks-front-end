import React, { useCallback, useState } from "react";
import { ShowTask } from "../../components/ShowTask";
import logo from "../../assets/logo.png";
import * as S from "./styles";
import { IconPlus } from "@tabler/icons-react";
import { TaskDto } from "../../dto/task";

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDto[]>([]);

  const handleFetch = useCallback(async () => {});
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderTitle>Lista de tarefas</S.HeaderTitle>
      </S.HeaderWrapper>
      <S.ShowTasksWrapper>
        <S.ShowTasksHeader>
          <S.WrapperLogoTaskTitle>
            <S.Logo src={logo} />
            <S.ShowTasksHeaderTitle>Tarefas</S.ShowTasksHeaderTitle>
          </S.WrapperLogoTaskTitle>
          <S.Button>
            <IconPlus />
          </S.Button>
        </S.ShowTasksHeader>
        {tasks.map((item) => (
          <ShowTask item={item} />
        ))}
      </S.ShowTasksWrapper>
    </S.Container>
  );
};
