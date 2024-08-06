import { RefObject, useRef } from 'react';
import { TBlock } from '../../../types';
import { useChangeCard } from '../../hooks/useChangeCard';
import './styles.css';


function ChangeCard({ nameBlock }: { nameBlock: TBlock }) {
  const refBtn = useRef() as RefObject<HTMLButtonElement> | null;
  const { isSubmit, tasks, addCard, getIdNewTask, activeBtn } = useChangeCard(nameBlock);

  const focusAddCard = () => {
    addCard();
  }

  const handleMouseEnter = () => {
    if (refBtn?.current) {
      refBtn.current.style.background = 'white';
      refBtn.current.style.cursor = 'pointer';
    }
  }

  const handleMouseLeave = () => {
    if (refBtn?.current) {
      refBtn.current.style.background = 'none';
    }
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
            style={{ cursor: activeBtn === 0 ? 'not-allowed' : 'pointer' }}
            ref={refBtn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            disabled={activeBtn === 0 ? true : false}
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