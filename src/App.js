import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';
import './App.css';

const store = ConfigureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }  

}

export default App;
