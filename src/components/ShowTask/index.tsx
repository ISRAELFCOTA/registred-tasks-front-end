import { memo } from "react";
import { IconSettings, IconTrash } from "@tabler/icons-react";
import { TaskDto } from "../../dto/task";
import * as S from "./style";

type Props = {
  item: TaskDto;
};

export const ShowTask = memo(({ item }: Props) => {
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
});
