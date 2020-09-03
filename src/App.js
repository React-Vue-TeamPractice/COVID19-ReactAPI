import React, {useState, useEffect} from 'react';

//import components
import { CircularDeterminate } from './components/elements/loading';
import { CovidHook } from './components/hooks/useCovidHook';
import { Cards, CountryPicker, Chart} from './components'
import styles from './components/style/index.css'
import Axios from 'axios'
import { API_URL } from './components/config/index'

// class App extends React.Component  {

//   constructor(props) {
//     super(props)
//    this.state = {
//       data: []
//     }
//   }

//    componentDidMount() {
//     Axios.get(API_URL)
//       .then(res => this.setState({data: res.Ukraine}))
//     console.log(this.data)
//   }
//     render () {
//       const { data } = this.state.data
//       console.log(this.data)

//         return (
//           <div className='container'>
//               COVID-19
             
//          </div>
//       )
//     }
// }

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
      try {
          Axios.get(API_URL)
          .then(res => setData([res,data]))
      } catch(e) {
        console.log(e);
      }
  }, [])
  console.log(data)
  return (
    data
  )
}

export default App;
