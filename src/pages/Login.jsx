import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/res-logo.png";
import "../styles/login.css";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="12" md="12" sm="12" className="m-auto text-center">
              <div className="form-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-offset-3 col-lg-12 col-md-offset-2 col-md-8">
                      <div className="form-container">
                        <div className="form-icon">
                          <img className="logo_login" src={logo} alt="logo" />

                        </div>
                        

                        <form className="form-horizontal">
                          <h3 className="title">Đăng Nhập</h3>
                          <div className="form-group">
                            <span className="input-icon"><i class="fa fa-envelope"></i></span>
                            <input class="form-control" type="email" placeholder="Địa chỉ Email" required
                              ref={loginNameRef} />
                          </div>
                          <div className="form-group">
                            <span className="input-icon"><i class="fa fa-lock"></i></span>
                            <input class="form-control" type="password" placeholder="Mật Khẩu" required
                              ref={loginPasswordRef} />
                          </div>
                          <button className="btn signin">Đăng Nhập</button>
                          <Link className="register_login" to="/register">
                            ĐĂNG KÝ
                          </Link>
                          <span className="forgot-pass"><a href="#">Quên mật khẩu</a></span>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Container>

      </section>
    </Helmet>
  );
};

export default Login;
