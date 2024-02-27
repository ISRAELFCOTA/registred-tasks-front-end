import React, { useCallback, useEffect, useState } from "react";
import { ShowTask } from "../../components/ShowTask";
import logo from "../../assets/logo.png";
import * as S from "./styles";
import { IconPlus } from "@tabler/icons-react";
import { TaskDto } from "../../dto/task";
import { HttpService } from "../../service/httpService";
import { Modal } from "../../components/Modal";

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDto[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (showModal) {
      console.log("Modal renderizado!");
    }
  }, [showModal]);

  const handleFetch = useCallback(async () => {
    try {
      const response = await HttpService.get("get");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
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
          <S.Button onClick={() => setShowModal(true)}>
            <IconPlus />
          </S.Button>
        </S.ShowTasksHeader>
        {tasks.map((item) => (
          <ShowTask item={item} />
        ))}
      </S.ShowTasksWrapper>
      {showModal && <Modal />}
    </S.Container>
  );
};
