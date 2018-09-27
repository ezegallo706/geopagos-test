import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

const rootComponent = (
    <div className="container-fluid my-5">
        <div className="row">
            <Form />
        </div>
    </div>
);

ReactDOM.render(rootComponent, document.getElementById('root'));
registerServiceWorker();
