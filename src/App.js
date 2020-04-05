import React from 'react';

//import components
import { CircularDeterminate } from './components/elements/loading';
import { CovidHook } from './components/hooks/useCovidHook';
import { Cards, CountryPicker, Chart} from './components'
import styles from './components/style/index.css'

const App = () => {
  return (
      <div className='container'>
       COVID-19
       <CovidHook  />
       <Cards />
       <CountryPicker />
       <Chart />
    </div>
  )
};

export default App;
