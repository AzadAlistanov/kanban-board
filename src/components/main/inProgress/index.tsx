import { IState, useAppSelector } from '../../../store/types';
import ChangeCard from '../buttonsSub/changeCard';
import Task from '../task';
import './styles.css';

function InProgress() {
  const tasks = useAppSelector((state: { tasks: IState }) => state.tasks.inProgress);

  return (
    <div className='in-progress task-block'>
      <p>In Progress</p>
      <div className='inprogress__wrap task-list'>
        {tasks?.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </div>
      <ChangeCard nameBlock='inProgress' />
    </div>
  );
}

export default InProgress;