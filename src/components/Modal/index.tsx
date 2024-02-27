import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import * as S from "./styles";
import { ButtonStatus } from "../ButtonStatus";

export const Modal = () => {
  const [showModal, setShowModal] = useState(true);

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
            <S.InputHeaderTitle>Tarefa</S.InputHeaderTitle>
            <S.Input placeholder="Digite qual tarefa a ser adicionada" />
            <ButtonStatus taskStatus="active" />
            <ButtonStatus taskStatus="idle" />
            <ButtonStatus taskStatus="success" />
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
