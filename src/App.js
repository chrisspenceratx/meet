// src/App.js


import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';

import './App.css';

return (
  <div className="App">
    <CitySearch />
    <NumberOfEvents />
    <EventList events={events} />
  </div>
);

export default App;