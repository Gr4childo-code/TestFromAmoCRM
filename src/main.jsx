import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './ui/components/Layout/index.jsx';
import Main from './ui/components/Main/index.jsx';

import 'normalize.css';
import './styles/globals.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Main />
    </Layout>
  </React.StrictMode>
);
