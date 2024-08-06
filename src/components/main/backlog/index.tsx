import { IState, useAppSelector } from '../../../store/types';
import AddCard from '../buttonsSub/addCard';
import Task from '../task';
import './styles.css';


function Backlog() {
  const tasks = useAppSelector((state: { tasks: IState }) => state.tasks.backlog);

  return (
    <div className='backlog task-block'>
      <p>Backlog</p>

      <div className='backlog__wrap task-list'>

        {tasks?.map((task, i) => (
          <Task key={i} task={task} />
        ))}

      </div>
      <AddCard />
    </div>
  );
}

export default Backlog;