// Importe useState
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
import CustomSelect from "../../components/InputSearchBar";
import { AxiosResponse } from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { EmpityTask } from "../../components/EmpityTask";

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

  const renderTasks = useCallback(() => {
    if (isLoading) {
      return (
        <SkeletonTheme
          baseColor="#303030"
          highlightColor="#484848"
          borderRadius={10}
        >
          <Skeleton
            style={{ display: "flex", flex: 1, height: 24, width: "60%" }}
            count={5}
          />
        </SkeletonTheme>
      );
    }
    if (tasks.length === 0) {
      return <EmpityTask />;
    }
    return tasks.map((item) => (
      <ShowTask
        fetchData={fetchData}
        key={item.task_id}
        item={item}
        onClose={handleCloseModalEdit}
        onShowModalEdit={() => handleEditTask(item)}
        onShowModalInfo={() => handleShowInfo(item)}
      />
    ));
  }, [
    fetchData,
    handleCloseModalEdit,
    handleEditTask,
    handleShowInfo,
    isLoading,
    tasks,
  ]);

  const handleChangeStatus = useCallback(async (status: number) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<TaskDto[]> = await HttpService.get(
        status === 4 ? `tasks` : `tasks/status/${status}`
      );
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      toast.error("Não foi possível filtrar as tarefas.");
    } finally {
      setIsLoading(false);
    }
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
            <CustomSelect onChange={handleChangeStatus} />
            <S.Button onClick={handleOpenModal}>
              <S.ButtonText>Adcionar</S.ButtonText>
              <IconPlus />
            </S.Button>
          </S.ShowTasksHeader>
          <S.TasksWrapper>{renderTasks()}</S.TasksWrapper>
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
