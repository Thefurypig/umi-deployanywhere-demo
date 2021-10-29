import App from './pages/index'
import ReactDOM from 'react-dom'
import React from 'react';

const AppConfig = React.createContext({});

// export function rootContainer(container: any) {
//   return fetch('../public/config.json')
//     .then((res) => res.json())
//     .then((config) => {
      
//     })
//   //  const res= await fetch('../public/config.json')
//   //  const json = res.json();
//   //  return container 
   
//   //   <AppConfig.Provider value={json}>
    
//   // </AppConfig.Provider>
  
//   //  )
//   return React.createElement('div', null, container);

// }
export function render(oldRender: any) {
  fetch('./config.json')
  .then((res) => res.json())
  .then((config) => {
    console.log(config);
    window.config = config[window?.APP_METADATA?.deployEnv|| 'dev'];
    console.log("🚀 ~ file: app.tsx ~ line 32 ~ .then ~ window.config", window.config)
    oldRender()
  })
}