import { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  LeftCircleOutlined,
  RightCircleFilled,
  LeftCircleFilled,
  UserOutlined
} from "@ant-design/icons";
import { Button, Col, Menu, Row, Typography,Avatar } from "antd";
const { Title } = Typography;
const items = [
  {
    key: 1,
    label: "Dashboard",
    icon: <AppstoreOutlined />
  },
  {
    key: 2,
    label: "Analytics",
    icon: <MailOutlined />
  },

  {
    key: 3,
    label: "Payments",
    icon: <DesktopOutlined />
  },
  {
    key: 4,
    label: "Classes",
    icon: <PieChartOutlined />
  },
  

  {
    key: 10,
    label: "Upload",
    icon: <DesktopOutlined />
  },
  {
    key: 11,
    label: "Discussion",
    icon: <PieChartOutlined />
  },
  {},
  {},
  {},
  {
    key: 15,
    label: "Notifications",
    icon: <AppstoreOutlined />
  }
 
];
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Row
        style={{
          width: collapsed ? 80 : 256,
          margin: "3% 0",
          backgroundColor: "rgba(31, 72, 91, 1)",
          padding:collapsed ?"10px 0": "11px",
          borderTopRightRadius: 18,
          borderBottomRightRadius: 18,
        //   minHeight:'70vh'
        }}
        align='top'
        className="sidebar-w"
      >
        <Col span={24}>
        <Row justify='end'>
        <Title
          level={3}
          onClick={toggleCollapsed}
          style={{
            margin: "0",
            color: "#cccccc",
            cursor: "pointer",
            marginTop: "10px",
            marginRight: "10px",
          }}
        >
          {collapsed ? <RightCircleFilled /> : <LeftCircleFilled />}
        </Title>
        </Row>
          <Menu
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
            style={{ backgroundColor: "rgba(31, 72, 91, 1)",minHeight:'60vh' }}
          />
           <Row align='middle' gutter={10} style={{paddingLeft:'20px',marginTop:'10px'}}>
            <Col>
            <Avatar size={40} icon={<UserOutlined />} />
            </Col>
            <Col>
            <Title level={5} style={{margin:'0', color:'white',display:collapsed?'none':''}}>View Profile</Title>
            </Col>
           </Row>
        </Col>
      </Row>
    </>
  );
}
