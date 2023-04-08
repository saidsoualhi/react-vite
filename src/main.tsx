import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'routes/Router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={Router} />
        </Provider>{' '}
    </React.StrictMode>,
);
