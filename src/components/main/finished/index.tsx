import { IState, useAppSelector } from '../../../store/types';
import ChangeCard from '../buttonsSub/changeCard';
import Task from '../task';
import './styles.css';

function Finished() {
  const tasks = useAppSelector((state: { tasks: IState }) => state.tasks.finished);

  return (
    <div className='finished task-block'>
      <p>Finished</p>
      <div className='finished__wrap task-list'>
        {tasks?.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </div>
      <ChangeCard nameBlock='finished' />
    </div>
  );
}

export default Finished;