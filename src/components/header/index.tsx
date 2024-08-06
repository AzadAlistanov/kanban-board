import { MouseEvent, RefObject, useRef } from 'react';
import './styles.css';

function Header() {
  let dropListRef = useRef() as RefObject<HTMLUListElement> | null;


  const dropOpen = (e: MouseEvent<HTMLElement>) => {
    (e.target as Element).classList.toggle('drop-active');

    dropListRef?.current?.classList.toggle('d-none');
  }

  return (
    <div className="header">
      <div className='container'>
        <div className="header__wrap">
          <p className='logo'>Awesome Kanban Board</p>
          <div className="user__wrap">
            <div className='avatar'>
              <img src="/images/ava.png" alt="Avatar" />
              <ul
                ref={dropListRef}
                className='drop-down-list d-none'>
                <li onClick={() => window.location.reload()}>Profile</li>
                <li onClick={() => window.location.reload()}>Log Out</li>
              </ul>
            </div>
            <div onClick={dropOpen}
              className='drop'>
              <img src="/images/drop.png" alt="drop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
