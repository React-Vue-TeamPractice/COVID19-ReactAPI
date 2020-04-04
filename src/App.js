import React from 'react';
import { CircularDeterminate } from './components/elements/loading';
import { CovidHook } from './components/hooks/useCovidHook';

const App = () => {
  return (
      <>
       COVID-19
       <CovidHook  />
    </>
  )
};

export default App;
