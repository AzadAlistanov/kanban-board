import { IState, useAppSelector } from '../../../store/types';
import ChangeCard from '../buttonsSub/changeCard';
import Task from '../task';
import './styles.css';


function Ready() {
  const tasks = useAppSelector((state: { tasks: IState }) => state.tasks.ready);

  return (
    <div className='ready task-block'>
      <p>Ready</p>
      <div className='ready__wrap task-list'>

        {tasks?.map((task, i) => (
          <Task key={i} task={task} />
        ))}
      </div>
      <ChangeCard nameBlock='ready' />
    </div>
  );
}

export default Ready;