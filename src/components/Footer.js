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
  UserOutlined,
} from "@ant-design/icons";
import { BiSolidMapPin, BiLogoInstagramAlt } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

import { Col, Row, Avatar, Typography } from "antd";
const { Title } = Typography;

export default function Footer() {
  return (
    <>
      <Row>
        <Col
          span={24}
          style={{ padding: "3%", backgroundColor: "rgba(31, 72, 91, 1)" }}
        >
          <Row justify="space-around">
            <Col
              span={6}
              style={{
                borderRadius: "30px",
                boxShadow: "3px 3px 20px rgba(255,255,255,.5)",
                padding: "20px",
              }}
            >
              <Row gutter={[0, 20]}>
                <Col span={24}>
                  <Row justify="center">
                    <Avatar size={40} icon={<UserOutlined />} />
                  </Row>
                </Col>
                <Col span={24}>
                  <span>
                    We provide a well equipped institute with state of the art
                    facilities, starting from classrooms to the nitty-gritty’s
                    to make the studying experience of our students an easy and
                    a well facilitated one. Join us to make your higher
                    education experience unforgettable.
                  </span>
                </Col>
              </Row>
            </Col>
            <Col span={7}>
              <Row gutter={[0, 20]}>
                <Col span={24}>
                  <span
                    style={{ fontSize: "20px", color: "rgba(255,255,255,.9)" }}
                  >
                    Contact Us
                  </span>
                </Col>
                <Col span={24}>
                  <span
                    style={{ fontSize: "16px", color: "rgba(255,255,255,.7)" }}
                  >
                    <BiSolidMapPin /> &nbsp; &nbsp; Galle Road, Matara,
                    SriLanka.
                  </span>
                </Col>
                <Col span={24}>
                  <span
                    style={{ fontSize: "16px", color: "rgba(255,255,255,.7)" }}
                  >
                    <GrMail /> &nbsp; &nbsp; edugo@gmail.com
                  </span>
                </Col>
                <Col span={24}>
                  <span
                    style={{ fontSize: "16px", color: "rgba(255,255,255,.7)" }}
                  >
                    <BsFillTelephoneFill /> &nbsp; &nbsp; +94761239480
                  </span>
                </Col>
              </Row>
            </Col>
            <Col span={4}>
              <Row gutter={[0,20]}>
                <Col span={24}>
                  <span
                    style={{ fontSize: "20px", color: "rgba(255,255,255,.9)" }}
                  >
                    Follow Us
                  </span>
                </Col>
                <Col span={24}>
                  <Row gutter={30}>
                    <Col>
                      <span
                        style={{
                          fontSize: "16px",
                          color: "rgba(255,255,255,.7)",
                        }}
                      >
                        <BsFacebook />
                      </span>
                    </Col>
                    <Col>
                      <span
                        style={{
                          fontSize: "16px",
                          color: "rgba(255,255,255,.7)",
                        }}
                      >
                        <BsYoutube />
                      </span>
                    </Col>
                    <Col>
                      <span
                        style={{
                          fontSize: "16px",
                          color: "rgba(255,255,255,.7)",
                        }}
                      >
                        <BiLogoInstagramAlt />
                      </span>
                    </Col>
                    <Col>
                      <span
                        style={{
                          fontSize: "16px",
                          color: "rgba(255,255,255,.7)",
                        }}
                      >
                        <BsLinkedin />
                      </span>
                    </Col>

                    
                    
                    
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
