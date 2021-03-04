import React, { useState, useEffect } from 'react';
import logo from './components/images/adslot_black.png';
import './App.scss';
import {getData}  from './util/getData'
import {mergeData} from './util/mergeData'
import displayTables from './components/displayTables/displayTables'

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isDataFormatted, setIsDataFormatted] = useState(false)
  const [data, setData] = useState(() => {
    getData()
    .then(data => {
      setData(mergeData(data))
      setIsDataLoaded(true)
    })
  });
  useEffect(() => {
    setIsDataFormatted(true)
  }, [isDataLoaded])

  const [filter, setFilter] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Adslot" />
      </header>
      <article>
        <header>
          <h1>Bookings</h1>
        </header>
        {
          (!isDataLoaded) ? (<div className="loader">Loading...</div>) : <span></span>
        }
        {
          (!isDataFormatted && isDataLoaded) ?  (<div>Formatting the data</div>) : displayTables(data, filter)
        }
      </article>
    </div>
  );
}

export default App;
