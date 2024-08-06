import { createSlice } from '@reduxjs/toolkit';
import { IAction, IState } from './types';

export const taskListSlice = createSlice({
  name: "boadr",
  initialState: {
    backlog: [],
    ready: [],
    inProgress: [],
    finished: [],
    activeTasks: 0,
    finishedTasks: 0
  },
  reducers: {
    addBacklog(state: IState, action: IAction) {
      let newTask = {
        id: action.payload.id,
        name: action.payload.name,
        description: '',
      };
      state.backlog = [...state.backlog, newTask];
    },
    addReady(state: IState, action: IAction) {
      let { id } = action.payload;
      state.ready = [...state.ready, ...state.backlog.filter(task => task.id === id)];
      state.backlog = [...state.backlog.filter(task => task.id !== id)];
    },
    addInProgress(state: IState, action: IAction) {
      let { id } = action.payload;
      state.inProgress = [...state.inProgress, ...state.ready.filter(task => task.id === id)];
      state.ready = [...state.ready.filter(task => task.id !== id)];
    },
    addFinished(state: IState, action: IAction) {
      let { id } = action.payload;
      state.finished = [...state.finished, ...state.inProgress.filter(task => task.id === id)];
      state.inProgress = [...state.inProgress.filter(task => task.id !== id)];
    },
    getStatusTasks(state: IState) {
      state.activeTasks = state.backlog.length;
      state.finishedTasks = state.finished.length;
    },
    changeDescriptionById(state: IState, action: IAction) {
      let { id, description } = action.payload;

      state.backlog = [...state.backlog.map((task) =>
        task.id === id ?
          { ...task, description } : { ...task }
      )];

      state.ready = [...state.ready.map((task) =>
        task.id === id ?
          { ...task, description } : { ...task }
      )];

      state.inProgress = [...state.inProgress.map((task) =>
        task.id === id ?
          { ...task, description } : { ...task }
      )];

      state.finished = [...state.finished.map((task) =>
        task.id === id ?
          { ...task, description } : { ...task }
      )];
    }
  },
});

export const {
  addBacklog,
  addReady,
  addInProgress,
  addFinished,
  getStatusTasks,
  changeDescriptionById } = taskListSlice.actions;