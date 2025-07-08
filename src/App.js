import logo from './logo.svg';
import './App.css';
import ExampleCar from './ObjectUpdate/exampleCar';
import ProfileEditor from './ObjectUpdate/project';

import Example from './ArrayUpdate/example';

import Lifting from './SharingState/liftingState/example';
import Contextapi from './SharingState/contextAPI/practice';

import CounterApp from './Assignments/CounterApp';
import TodoApp from './Assignments/Todo';

import PreservedComponent from './preservingResetting/preserving';
import Reserving from './preservingResetting/Resetting';

import UserForm from './Extractingstate/example';


function App() {
  return (
    <div className="App">
      {/* <ExampleCar /> */}
      {/* <ProfileEditor /> */}

      {/* <Example /> */}

     {/* <Lifting /> */}
      {/* <Contextapi /> */}

      {/* <CounterApp /> */}
      <TodoApp />
      {/* <Rought /> */}
      
      {/* <PreservedComponent /> */}
      {/* <Reserving /> */}
      {/* <UserForm /> */}
     
    </div>
  );
}

export default App;
