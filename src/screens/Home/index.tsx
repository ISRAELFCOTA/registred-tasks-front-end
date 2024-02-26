import React from "react";
import { ShowTask } from "../../components/ShowTask";
import logo from "../../assets/logo.png";
import * as S from "./styles";
import { IconPlus } from "@tabler/icons-react";

export const Home: React.FC = () => {
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
        <ShowTask />
      </S.ShowTasksWrapper>
    </S.Container>
  );
};
