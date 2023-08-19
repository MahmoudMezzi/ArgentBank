import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from "./utils/store.js"
import { QueryClientProvider, QueryClient } from "react-query"
import { RouterProvider } from 'react-router-dom';
import './style/index.css';
import router from "./router"
import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client ={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);


