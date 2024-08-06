import { TBlock } from '../../../types';
import { useChangeCard } from '../../hooks/useChangeCard';
import './styles.css';


function ChangeCard({ nameBlock }: { nameBlock: TBlock }) {

  const { isSubmit, tasks, addCard, getIdNewTask } = useChangeCard(nameBlock);
  const focusAddCard = () => {
    addCard();
  }
  return (
    <>
      {isSubmit ?
        <>
          <select
            className='task-drop'
            onChange={getIdNewTask}
          >
            <option value=""></option>
            {tasks.map((task) => (
              <option key={task.id} value={task.id}>
                {task.name}
              </option>
            ))}
          </select>
          <div className='add-card submit'>
            <button
              onClick={addCard}
            >
              <p>Submit</p>
            </button>
          </div>
        </>
        :
        <div className='add-card'>
          <button
            onClick={() => focusAddCard()}
          >
            <img src="/images/plus.svg" alt="add card" />
            <p>Add card</p>
          </button>
        </div>
      }
    </>
  );
}

export default ChangeCard;