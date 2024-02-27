import { IconX } from "@tabler/icons-react";
import * as S from "./styles";

export const Modal = () => {
  return (
    <S.Container>
      <S.ContentModal>
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
          </S.WrapperTask>
        </S.Content>
        <S.Footer>
          <S.ButtonSave>
            <S.ButtonText>Salvar</S.ButtonText>
          </S.ButtonSave>
        </S.Footer>
      </S.ContentModal>
    </S.Container>
  );
};
