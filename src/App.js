// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';

return (
  <div className="App">
    <CitySearch />
    <NumberOfEvents />
    <EventList events={events} />
  </div>
);

export default App;