import React from 'react';

//import components
import { CircularDeterminate } from './components/elements/loading';
import { CovidHook } from './components/hooks/useCovidHook';
import { Cards, CountryPicker, Chart} from './components'
import styles from './components/style/index.css'

class App extends React.Component  {

  state = {
      data: {}
    }

  async componentDidMount() {
    const fetchData = await CovidHook()

    this.setState({data: fetchData})
    console.log(fetchData)
  }

  render () {
    const { data } = this.state

   return (
      <div className='container'>
      COVID-19
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
  </div>
   )
  }
}

export default App;
