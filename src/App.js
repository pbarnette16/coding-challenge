import React, { useState, useEffect } from 'react';
import logo from './components/images/adslot_black.png';
import './App.scss';
import {getData}  from './util/getData'
import {mergeData} from './util/mergeData'

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, setData] = useState(() => {
    getData()
    .then(data => {
      setIsDataLoaded(true)
      setData(mergeData(data))
    })
  });

  useEffect(() => {
    console.log('useEffect')
    console.log(data)
  })

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
      </article>
    </div>
  );
}

export default App;
