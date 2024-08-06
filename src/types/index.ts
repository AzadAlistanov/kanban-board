export type TTask = {
  id?: string,
  name?: string,
  description?: string
};

export interface ITasks {
  title: string,
  tasks: TTask[]
}

export enum ActionType {
  GETBACKLOG = 'GET-BACKLOG',
  ADDTASKBACKLOG = 'ADD-TASK-BACKLOG',
  GETREADY = 'GET-READY',
  GETINPROGRESS = 'GET-IN-PROGRESS',
  GETFINISHED = 'GET-FINISHED',
  REMUVESTATE = 'REMUVE-STATE',
};

export type TBlock = 'backlog' | 'ready' | 'inProgress' | 'finished';
