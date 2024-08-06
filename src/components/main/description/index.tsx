import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { changeDescriptionById } from '../../../store/boardSlice';
import { useAppDispatch } from '../../../store/types';
import { useDescription } from '../../hooks/useDescription';
import './styles.css';


function Description() {
  const id = useParams().id;
  const refDesc = useRef<HTMLParagraphElement | null>(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useAppDispatch();
  const task = useDescription(id);

  const focusDescription = () => {
    setIsSubmit(true)
  }

  const changeDescription = () => {
    let description = refDesc.current?.innerText;
    dispatch(changeDescriptionById({ id, description }))
    setIsSubmit(false)
  }

  return (
    <div className='description-wrap'>
      <div className='description-btn'>
        <Link to={'/'}>
          <button className='description-close'>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.35355" y1="0.646447" x2="24.3536" y2="23.6464" stroke="black" />
              <line y1="-0.5" x2="32.5269" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 24 1)" stroke="black" />
            </svg>
          </button>
        </Link>
      </div>
      <h1>{task?.name}</h1>
      <p
        className='description'
        ref={refDesc}
        onFocus={focusDescription}
        contentEditable={true}
        suppressContentEditableWarning={true}
      >{task?.description}
      </p>
      {isSubmit &&
        <button className='save-description'
          onClick={changeDescription}>SAVE</button>
      }
    </div>
  );
}

export default Description;