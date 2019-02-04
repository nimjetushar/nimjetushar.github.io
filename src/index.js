import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerWebWorker from "./registerWebWorkers";

ReactDOM.render(<App />, document.getElementById('root'));
registerWebWorker();
