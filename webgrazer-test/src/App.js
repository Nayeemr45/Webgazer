import {useState, React} from 'react';
import HomePage from './pages/HomePage';
import Grazer_test from './pages/Grazer_test';
import ThankYou from './pages/ThankYou';
import './App.css';
import {Route} from 'react-router-dom';

const App = () => {
  const [time, setTesttime] = useState(0);
  const addTime = (value) => {
    console.log(value);
    setTesttime(value)
  }

  return (
    <div className="App">
      <Route path={'/'} exact>
        <HomePage addTime={addTime}/>
      </Route>
      <Route path={'/test'}>
        <Grazer_test time={time}/>
      </Route>
      <Route path={'/thankyou'}>
        <ThankYou />
      </Route>
    </div>
  );
};

export default App;
