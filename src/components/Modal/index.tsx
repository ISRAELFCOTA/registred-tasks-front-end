import { IconX } from "@tabler/icons-react";
import * as S from "./styles";

export const Modal = () => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.Header>Adcionar Tarefa</S.Header>
        <S.Button>
          <IconX />
        </S.Button>
      </S.HeaderWrapper>
      <S.Content>
        <S.WrapperTask>
          <S.InputHeaderWrapper>
            <S.InputHeaderTitle>Tarefa</S.InputHeaderTitle>
          </S.InputHeaderWrapper>
          <S.InputWrapper>
            <S.Input placeholder="Digite qual tarefa a ser adicionada" />
          </S.InputWrapper>
          <S.ButtonSaveWrapper>
            <S.ButtonSave>
              <S.ButtonText>Salvar</S.ButtonText>
            </S.ButtonSave>
          </S.ButtonSaveWrapper>
        </S.WrapperTask>
      </S.Content>
    </S.Container>
  );
};
