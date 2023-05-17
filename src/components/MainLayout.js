import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Button, Layout, Menu, theme,
} from 'antd';
import { useState } from 'react';
import {
  BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp,
} from 'react-icons/bs';
import Logo from '../assets/logo1.png';

const mytoken = window.localStorage.getItem('token');
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role');
  const deleteData = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('role');
    navigate('/login');
  };
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-slate-300"
      >
        <div className="logo flex justify-start items-center">
          <img src={Logo} alt="logo" className="w-24 h-24 hero" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: '',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: 'reserve-tutor',
              icon: <UploadOutlined />,
              label: 'Reserve Tutor',
            },
            {
              key: 'reservation',
              icon: <UserOutlined />,
              label: 'Reservation',
            },
          ]}
        />
        {userRole === 'admin' && (
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={({ key }) => navigate(key)}
            items={[
              {
                key: 'add-tutor',
                icon: <VideoCameraOutlined />,
                label: 'Add Tutor',
              },
              {
                key: 'delete-tutor',
                icon: <VideoCameraOutlined />,
                label: 'Delete Tutor',
              },
            ]}
          />
        )}
        <div
          className={`absolute bottom-5 w-full ${!collapsed ? 'flex justify-center items-center' : 'md:hidden'}`}
        >
          <Menu
            className="flex w-full justify-center items-center md:flex-row flex-col  "
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={({ link }) => navigate(link)}
            items={[
              {
                key: 'facebook',
                icon: <BsFacebook />,
                label: 'Fb',
                link: 'https://web.facebook.com/',
              },
              {
                key: 'twitter',
                icon: <BsTwitter />,
                label: 'Twitter',
                link: 'https://twitter.com/',
              },
              {
                key: 'linkedin',
                icon: <BsLinkedin />,
                label: 'Linkedin',
                link: 'https://www.linkedin.com/',
              },
              {
                key: 'whatapp',
                icon: <BsWhatsapp />,
                label: 'Whatapp,',
                link: 'https://web.whatsapp.com/',
              },
            ]}
          />
        </div>
        <div className="scale-50 flex justify-center items-center absolute bottom-0 w-full">
          {
            mytoken ? (
              <button onClick={deleteData} type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                Logout
              </button>
            ) : (
              <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Login
              </button>
            )
          }

        </div>
        <div
          className={`absolute bottom-2 w-full justify-center items-center left-3 
          ${collapsed ? 'hidden' : 'flex'}`}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: '#fff',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 'calc(100vh - 112px)',
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
