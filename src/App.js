import React from "react";
import "./App.css";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";

function App() {
  return (
    <div className="App">
      {/* <div id="event-list"></div> */}
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
