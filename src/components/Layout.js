import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Home from '../pages/Home';
import TopPanel from './TopPanel';
import Category from '../pages/Category';
import Products from '../pages/Products';

const Layout = () => {
  const [page, setPage] = useState('Home');

  const handleItemClick = (key) => {
    setPage(key);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Menu
        selectedKeys={[page]}
        mode="vertical"
        onClick={({ key }) => handleItemClick(key)}
        width='200px'
      >
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="Category" icon={<AppstoreOutlined />}>
          Category
        </Menu.Item>
        <Menu.Item key="Products" icon={<UnorderedListOutlined />}>
          Products
        </Menu.Item>
      </Menu>

      <div>
        <TopPanel />
        {page === 'Home' && <div><Home /></div>}
        {page === 'Category' && <div><Category /></div>}
        {page === 'Products' && <div><Products /></div>}
      </div>
    </div>
  );
};

export default Layout;
