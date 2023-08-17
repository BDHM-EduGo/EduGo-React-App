import {
  Row,
  Col,
  Image,
  Typography,
  Button,
  Divider,
  Form,
  Input,
} from "antd";
import google from "../../assets/images/google.png";
import signin from "../../assets/images/pic.png";
import { Link } from "react-router-dom";

const { Title } = Typography;
function SignIn() {
  return (
    <>
      <Row
        style={{ backgroundColor: "#1F485B", height: "100vh" }}
        align="middle"
        justify="center"
      >
        <Col span={16}>
          <Row
            style={{
              borderRadius: "50px",
              boxShadow: "7px 7px 50px rgba(255,255,255,.3)",
            }}
            justify="space-between"
          >
            <Col span={11}>
              <Row align="middle" justify="center">
                <Col span={20}>
                  <Title level={3} style={{ color: "white" }}>
                    Welcome to
                    <br /> ABCD Academy
                  </Title>
                </Col>
                <Col span={20}>
                  <Image
                    preview={false}
                    style={{
                      borderRadius: "50px",
                      margin: "5% 0 5% 5%",
                      width: "80%",
                    }}
                    src={signin}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              span={13}
              style={{ borderRadius: "50px", backgroundColor: "white" }}
            >
              <Row gutter={[0, 30]} justify="center">
                <Col span={18}>
                  <Title style={{ fontWeight: "700" }} level={3}>
                    Create Account
                  </Title>
                </Col>
                <Col span={10}>
                  <Button
                    size="large"
                    style={{ borderRadius: "50px", padding: "0 10%" }}
                    icon={<Image width={20} src={google} />}
                  >
                    signup with Google
                  </Button>
                </Col>
                <Col span={15}>
                  <Divider style={{ border: "1px" }}>OR</Divider>
                </Col>
                <Col span={18}>
                  <Form>
                    <Row gutter={[0, 35]}>
                      <Col span={24}>
                        <Input
                          required
                          allowClear
                          placeholder="Full Name"
                          className="signin-input-w"
                        />
                      </Col>
                      <Col span={24}>
                        <Input
                          required
                          allowClear
                          placeholder="Email"
                          className="signin-input-w"
                        />
                      </Col>
                      <Col span={24}>
                        <Input.Password
                          required
                          allowClear
                          placeholder="Password"
                          className="signin-input-w"
                        />
                      </Col>
                      <Col span={24}>
                        <Button 
                            htmlType="submit"
                            shape="round"
                            size="large"
                            block
                            style={{backgroundColor:'#1F485B', color: 'white', fontWeight: '600'}}>
                            Create Account
                        </Button>
                      </Col>
                      <Col style={{marginBottom:'5%'}}>
                        <span style={{fontSize: '16px'}}>
                            Already have an account?
                        </span> &nbsp;
                        <span style={{fontSize: '16px',cursor:'pointer',color:'#1F485B', fontWeight: '700'}}>
                            Log in
                        </span>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default SignIn;
