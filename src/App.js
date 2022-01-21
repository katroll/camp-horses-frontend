import "./App.css";
import { Route, Switch } from "react-router-dom";
import SideBar from './components/SideBar';
import NewHorseForm from "./components/NewHorseForm";

function App() {
  
  
  return (
    <div className="App">
      <SideBar />
      <Switch>
        <Route path="/newhorse">
          <NewHorseForm/>
        </Route>
      </Switch>
    </div>

    
  );
}

export default App;



