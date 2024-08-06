import { RefObject, useEffect, useRef, useState } from 'react';
import './styles.css';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../../../store/types';
import { addBacklog, } from '../../../store/boardSlice';


function AddCard() {
  const [isSubmit, setIsSubmit] = useState(false);
  const inputRef = useRef() as RefObject<HTMLInputElement> | null;

  const dispatch = useAppDispatch();

  const addCard = () => {
    setIsSubmit(prev => !prev);
  }

  const addCardSubmit = () => {
    let id = uuidv4();

    setIsSubmit(prev => !prev);
    if (typeof inputRef?.current?.value === 'string') {
      if (inputRef.current.value.length > 0) {
        dispatch(
          addBacklog({
            id,
            name: inputRef.current.value,
          })
        )
      }
    }
  }

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [isSubmit])


  return (
    <>
      {isSubmit ?
        <>
          <div className='task'>
            <input
              ref={inputRef}
              type="text"
            />
          </div>
          <div className='add-card submit'>
            <button
              onClick={addCardSubmit}
            >
              <p>Submit</p>
            </button>
          </div>
        </>
        :
        <div className='add-card'>
          <button
            className='add-card-btn'
            onClick={addCard}
          >
            <img src="/images/plus.svg" alt="add card" />
            <p>Add card</p>
          </button>
        </div>
      }
    </>
  );
}

export default AddCard;