import React from "react";
import { ShowTask } from "../../components/ShowTask";
import { IconList } from "@tabler/icons-react";
import { useTheme } from "styled-components";
import * as S from "./styles";

export const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderTitle>Lista de tarefas</S.HeaderTitle>
      </S.HeaderWrapper>
      <S.ShowTasksWrapper>
        <S.ShowTasksHeader>
          <IconList color={theme.colors.lightMain} />
          <S.ShowTasksHeaderTitle>Tarefas</S.ShowTasksHeaderTitle>
        </S.ShowTasksHeader>
        <ShowTask />
      </S.ShowTasksWrapper>
    </S.Container>
  );
};
