import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import Logo from "../assets/logo1.png";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-slate-200"
      >
        <div className="logo flex justify-start items-center">
          <img src={Logo} alt="logo" className="w-24 h-24" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "",
              icon: <UserOutlined />,
              label: "Home"
            },
            {
              key: "add-tutor",
              icon: <VideoCameraOutlined />,
              label: "Add Tutor"
            },
            {
              key: "reserve-tutor",
              icon: <UploadOutlined />,
              label: "Reserve Tutor"
            },
            {
              key: "reservation",
              icon: <UserOutlined />,
              label: "Reservation"
            },
            {
              key: "delete-tutor",
              icon: <VideoCameraOutlined />,
              label: "Delete Tutor"
            },
            {
              key: "type-reserve",
              icon: <UploadOutlined />,
              label: "Type Reserve"
            }
          ]}
        />
        <div
          className={`absolute bottom-5 w-full ${collapsed
            ? "hidden"
            : "flex"}`}
        >
          <Menu
            className={`flex w-full justify-center items-center md:flex-row flex-col  `}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={({ key }) => navigate(key)}
            items={[
              {
                key: "facebook",
                icon: <BsFacebook />,
                label: "Fb"
              },
              {
                key: "twitter",
                icon: <BsTwitter />,
                label: "Twitter"
              },
              {
                key: "linkedin",
                icon: <BsLinkedin />,
                label: "Linkedin"
              },
              {
                key: "whatapp",
                icon: <BsWhatsapp />,
                label: "Whatapp,"
              }
            ]}
          />
        </div>
        <div
          div
          className={`absolute bottom-2 w-full justify-center items-center left-3 
          ${collapsed ? "hidden" : "flex"}`}
        >
          <span className="text-center text-black">
            @2023 copy rights reserved
          </span>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff"
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "calc(100vh - 112px)",
            background: colorBgContainer
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
