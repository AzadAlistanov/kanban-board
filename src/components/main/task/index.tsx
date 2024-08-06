import './styles.css';
import { Link } from 'react-router-dom'
import { TTask } from '../../../types';


function Task({ task }: { task: TTask }) {
  let { id, name } = task;


  return (
    <div className='task'>
      <Link
        className='link'
        to={`${id}`}>
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default Task;