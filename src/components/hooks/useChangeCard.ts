import { ChangeEvent, useState } from "react";
import { addBacklog, addReady, addInProgress, addFinished } from "../../store/boardSlice";
import { IState, useAppDispatch, useAppSelector } from "../../store/types";
import { TBlock, TTask } from "../../types";


export const useChangeCard = (block: TBlock) => {
  const [isSubmit, setIsSubmit] = useState(false);
  let [newTask, setNewTask] = useState('');
  const dispatch = useAppDispatch();
  const { backlog, ready, inProgress } = useAppSelector((state: { tasks: IState }) => state.tasks);
  let tasks: TTask[] | [] = [];
  let addTask: () => void;
  let activeBtn = 0;

  if (block === 'backlog') {
    tasks = backlog;
    addTask = () => dispatch(addBacklog({ id: newTask }));
  }

  if (block === 'ready') {
    tasks = backlog;
    addTask = () => dispatch(addReady({ id: newTask }));
    activeBtn = backlog.length;
  }

  if (block === 'inProgress') {
    tasks = ready;
    addTask = () => dispatch(addInProgress({ id: newTask }));
    activeBtn = ready.length;

  }

  if (block === 'finished') {
    tasks = inProgress;
    addTask = () => dispatch(addFinished({ id: newTask }));
    activeBtn = inProgress.length;
  }

  const addCard = () => {
    setIsSubmit(prev => !prev);
    addTask()
  }

  const getIdNewTask = (e: ChangeEvent<HTMLSelectElement>) => {
    setNewTask(e.target.value);
  }

  return {
    isSubmit,
    tasks,
    addCard,
    getIdNewTask,
    activeBtn
  }

}

