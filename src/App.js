import { useState, useEffect } from 'react';
import './App.css';
import WithoutWidgetExample from './components/WithoutWidget';
import WithWidget from './components/WithWidget';


const App = () => {
  const [withWidget, setWithWidget] = useState(false);


  function widgetShowController(e){    
    setWithWidget(e.target.id === "withWidgetRadio");
  }


  useEffect(() => {
    if(document.getElementById('withoutWidgetRadio')){
      document.getElementById('withoutWidgetRadio').checked = true;
    }
  }, []);


  return (
    <div className="App container">
      <div className='row site-header'>
          <div className='col-sm-12'>
              <h2><b>Widget Demo</b></h2>
          </div>
      </div>
      <div className='row'>
          <div className='col-sm-12'>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="radioBtn" id="withWidgetRadio" onClick={widgetShowController}/>
              <label class="form-check-label" for="withWidgetRadio">
                With Widget
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="radioBtn" id="withoutWidgetRadio"  onClick={widgetShowController}/>
              <label class="form-check-label" for="withoutWidgetRadio">
                Without Widget
              </label>
            </div>
          </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      {withWidget 
        ? <WithWidget />
        : <WithoutWidgetExample />
      }
    </div>
  );
}

export default App;
