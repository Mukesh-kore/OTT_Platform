import React, { } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";



// const comp = ReactDOM.createRoot(document.getElementById('root'))
// comp.render(
  
//         <App />
  
// )
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorkerRegistration.register();
