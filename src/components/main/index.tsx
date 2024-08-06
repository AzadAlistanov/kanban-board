import './styles.css';
import { Routes, Route } from 'react-router-dom'
import Backlog from "./backlog";
import Finished from "./finished";
import InProgress from "./inProgress";
import Ready from "./ready";
import Description from './description';

function Main() {

  return (
    <main>
      <div className="container">
        <section className='board'>
          <Routes>
            <Route path="/" element={
              <>
                <Backlog />
                <Ready />
                <InProgress />
                <Finished />
              </>
            } />
            <Route path="/:id" element={<Description />} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default Main;