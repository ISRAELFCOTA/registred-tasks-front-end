import React from "react";
import { ShowTask } from "../../components/ShowTask";
import * as S from "./styles";

export const Home: React.FC = () => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderTitle>Lista de tarefas</S.HeaderTitle>
      </S.HeaderWrapper>
      <S.ShowTasksWrapper>
        <S.ShowTasksHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-notes"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#9f1faa"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
            <path d="M9 7l6 0" />
            <path d="M9 11l6 0" />
            <path d="M9 15l4 0" />
          </svg>
          <S.ShowTasksHeaderTitle>Tarefas</S.ShowTasksHeaderTitle>
        </S.ShowTasksHeader>
        <ShowTask />
      </S.ShowTasksWrapper>
    </S.Container>
  );
};
