import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId='7856a0c9-68fb-4e8e-a96e-514195ae40c9' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>
    , document.getElementById('root'));