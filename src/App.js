import "./App.css";
import { Route, Switch } from "react-router-dom";
import SideBar from './components/SideBar';
import NewHorseForm from "./components/NewHorseForm";
import HorseList from "./components/HorseList";
import { useEffect, useState } from "react";

function App() {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/horses")
    .then(resp => resp.json())
    .then(data => setHorses(data))
  }, [])
  
  function handleFormSubmit(formData, e) {
    e.preventDefault();

    const data = {
      ...formData,
      year_born: new Date().getFullYear() - formData.age
    }

    fetch("http://localhost:9292/horses", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(newHorse => setHorses([...horses, newHorse]))
  }
  
  console.log(horses)

  return (
    <div className="App">
      <SideBar />
      <Switch>
        <Route 
          path="/newhorse"
          component={() => <NewHorseForm onFormSubmit={handleFormSubmit} />}
        />
        <Route
          path="/horses"
          component={() => <HorseList allHorses={horses}/>}
        />
        
      </Switch>
    </div>

    
  );
}

export default App;



