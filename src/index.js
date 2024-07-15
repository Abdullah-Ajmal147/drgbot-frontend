import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './Api/context';
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SpeedInsights>
        <AppProvider>
            <App />
        </AppProvider>
    </SpeedInsights>
);