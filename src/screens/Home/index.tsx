import React, { useCallback, useEffect, useState } from "react";
import { ShowTask } from "../../components/ShowTask";
import logo from "../../assets/logo.png";
import * as S from "./styles";
import { IconPlus } from "@tabler/icons-react";
import { TaskDto } from "../../dto/task";
import { HttpService } from "../../service/httpService";
import { Modal } from "../../components/Modal";
import { toast } from "react-toastify";
import { ModalEdit } from "../../components/ModalEdit";
import { ModalInfo } from "../../components/ModalInfo";

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDto[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [taskSelected, setSelectedTask] = useState({} as TaskDto);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);
  const handleCloseModalEdit = useCallback(() => {
    setShowModalEdit(false);
  }, []);

  const handleOpenModalEdit = useCallback(() => {
    setShowModalEdit(true);
  }, []);

  const handleEditTask = useCallback(
    (task: TaskDto) => {
      setSelectedTask(task);
      handleOpenModalEdit();
    },
    [handleOpenModalEdit]
  );
  const handleCloseModalInfo = useCallback(() => {
    setShowModalInfo(false);
  }, []);

  const handleOpenModalInfo = useCallback(() => {
    setShowModalInfo(true);
  }, []);

  const handleShowInfo = useCallback(
    (task: TaskDto) => {
      setSelectedTask(task);
      handleOpenModalInfo();
    },
    [handleOpenModalInfo]
  );

  const fetchData = useCallback(async () => {
    const response = await HttpService.get("tasks");
    setTasks(response.data);
  }, []);

  const handleFetch = useCallback(async () => {
    setIsLoading(true);
    try {
      await fetchData();
    } catch (error) {
      toast.error("Não foi possivel carregar as tarefas.");
    } finally {
      setIsLoading(false);
    }
  }, [fetchData]);
  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <>
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
            <S.Button onClick={handleOpenModal}>
              <IconPlus />
            </S.Button>
          </S.ShowTasksHeader>
          {tasks.map((item) => (
            <ShowTask
              fetchData={fetchData}
              key={item.task_id}
              item={item}
              onClose={handleCloseModalEdit}
              onShowModalEdit={() => handleEditTask(item)}
              onShowModalInfo={() => handleShowInfo(item)}
            />
          ))}
        </S.ShowTasksWrapper>
      </S.Container>
      {showModal && <Modal fetchData={fetchData} onClose={handleCloseModal} />}
      {showModalEdit && (
        <ModalEdit
          fetchData={fetchData}
          taskData={taskSelected}
          onClose={handleCloseModalEdit}
          isOpen={showModalEdit}
        />
      )}
      {showModalInfo && (
        <ModalInfo taskData={taskSelected} onClose={handleCloseModalInfo} />
      )}
    </>
  );
};
