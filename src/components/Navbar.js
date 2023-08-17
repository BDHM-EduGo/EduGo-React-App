import { Col, Row, Typography, } from "antd";
import { useState } from "react";

const { Title, } = Typography;

const items = [
    {
      key: '1',
      label: 'Home'
    },
    {
      key: '2',
      label: 'Contact Us'
    },
    {
      key: '3',
      label: 'About Us'
    },
    {
        key: '4',
        label: 'Logout'
      },
  ];
 
export default function Navbar() {
    const [ active, setActive ] = useState(false);
    const onChange = (key) => {
        console.log(key);
      };
  return (
    <>
        <Row 
            align='middle'  
            style={{
                backgroundColor:'rgba(31, 72, 91, 1)', height: '10vh'}}>
            <Col span={24}>
                <Row align='middle' justify='space-around'>
                    <Col span={8}>
                        <Title
                            level={2} 
                            style={{
                                color:'white',
                                margin:'0'
                            }}>
                            Logo Here
                        </Title>
                    </Col>
                    <Col span={8}>
                        <Row align='middle' justify='space-between'>
                            {items.map((item)=>{
                                return(
                                    <Col>
                                        <span
                                            onClick={()=>setActive(item.key)} 
                                            className={`navitem-w ${active===item.key?'active':''}`}>
                                            {item.label}
                                        </span>
                                    </Col>
                                )
                            })  }
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
  )
}
