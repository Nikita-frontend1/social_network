
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

 //рирендерим все и экспортируем компоненту. В компоненту приходит props(state)
    
  root.render(
    <React.StrictMode>
     <BrowserRouter>

      <Provider store = {store}>

      <App />
      
      </Provider>
      
      </BrowserRouter>
    </React.StrictMode>
  );

  //рендерится все один раз. Поэтоиу создали новую компоненту для перерисовки 

// rerenderTree (store.getState()); // вызывем нашу компоненту и добавляем import'ы наших данных(state) и rerenderTree. Данные прокидываем через props


// store.subscribe(() => {
//     let state = store.getState();
//     rerenderTree(state)
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
