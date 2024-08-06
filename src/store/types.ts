import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TTask } from "../types";
import store from "./store";



export interface IAction {
  payload: TTask;
  type?: string;
}

export interface IState {
  backlog: TTask[],
  ready: TTask[],
  inProgress: TTask[],
  finished: TTask[],
  activeTasks: number,
  finishedTasks: number
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;