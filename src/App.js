import "./App.css";
import "./css/styles.css"
import { Route, Switch } from "react-router-dom";
import SideBar from './components/SideBar';
import NewHorseForm from "./components/NewHorseForm";
import HorseList from "./components/HorseList";
import HorseCard from "./components/HorseCard";
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


  function handleSortByClick(e) {
    const key = e.target.name
    const sortedHorses = horses.sort((a, b) => a[key] > b[key] ? 1 : -1);

    setHorses([...sortedHorses]);
}

  return (
    <div className="App bg-blue-200 min-h-screen">
      <SideBar />
      <Switch>
        <Route 
          path="/newhorse"
          component={() => <NewHorseForm onFormSubmit={handleFormSubmit} />}
        />
        <Route
          exact
          path="/horses"
          component={() => <HorseList allHorses={horses} handleSortByClick={handleSortByClick}/>}
        />
        <Route 
          path="/horses/:id"
          component={() => <HorseCard horses={horses}/>}
        />
      </Switch>
    </div>

    
  );
}

export default App;



