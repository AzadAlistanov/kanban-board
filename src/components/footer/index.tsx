import { memo, useEffect } from 'react';
import { getStatusTasks } from '../../store/boardSlice';
import { IState, useAppDispatch, useAppSelector } from '../../store/types';
import './styles.css';

function Footer() {

  const { backlog, finished, activeTasks, finishedTasks } = useAppSelector((state: { tasks: IState }) => state.tasks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStatusTasks());
  }, [dispatch, backlog, finished])

  return (
    <div className="footer">
      <div className='container'>
        <div className="footer__wrap">
          <div className='footer__tasks-wrap'>
            <p className='active-tasks'>Active tasks: {activeTasks}</p>
            <p className='finished-tasks'>Finished tasks: {finishedTasks}</p>
          </div>
          <div>
            <p>Kanban board by Azad, 34 year old</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
