import React from "react";
import { IconSettings, IconTrash } from "@tabler/icons-react";
import * as S from "./style";
import { TaskDto } from "../../dto/task";

type Props = {
  item: TaskDto;
};

export const ShowTask = ({ item }: Props) => {
  // const tasks = ["Task 1", "Task 2", "Task 3"];

  /* const renderTasks = memo(() => {
    return tasks.map((task, index) => (
      <S.TaskWrapper key={index}>
        <S.TaskTitle>{task}</S.TaskTitle>
      </S.TaskWrapper>
    ));
  }); */

  return (
    <S.Container>
      <S.TaskWrapper>
        <S.TaskTitle>{item.taskName}</S.TaskTitle>
        <S.ButtonWrapper>
          <S.Button>
            <IconSettings />
          </S.Button>
          <S.Button>
            <IconTrash />
          </S.Button>
        </S.ButtonWrapper>
      </S.TaskWrapper>
      <S.TaskSeparator />
    </S.Container>
  );
};
