import { Layout } from 'antd';
import React from 'react';
import './App.css';
import "antd/dist/antd.css";

import AppFooter from './components/common/Footer';
import AppHeader from './components/common/Header';
import AppHome from './pages/Home';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header className="mainHeader">
        <AppHeader />
      </Header>
      <Content className="mainContent">
        <AppHome />
      </Content>
      <Footer className="mainFooter">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
