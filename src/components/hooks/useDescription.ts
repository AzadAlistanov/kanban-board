import { IState, useAppSelector } from "../../store/types";


export const useDescription = (id: string | undefined) => {

  const { ready, inProgress, backlog, finished } = useAppSelector((state: { tasks: IState }) => state.tasks);

  if (backlog.find(el => el.id === id)) {
    return backlog.find(el => el.id === id)
  }
  if (ready.find(el => el.id === id)) {
    return ready.find(el => el.id === id)
  }
  if (inProgress.find(el => el.id === id)) {
    return inProgress.find(el => el.id === id)
  }
  if (finished.find(el => el.id === id)) {
    return finished.find(el => el.id === id)
  }
}