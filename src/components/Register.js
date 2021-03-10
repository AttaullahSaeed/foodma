import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Row, Col, Container, Form } from "react-bootstrap";

import { REGISTER_API } from "../Services/DataApi";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from "react-router-dom";

const Register = ({ history }) => {

  const initialState = "";
  const [name, setName] = useState(initialState);
  const [email, setEmail] = useState(initialState);
  // const [address, setAddress] = useState(initialState);
  const [password, setpassword] = useState(initialState);
  // const [promeCode, setpromeCode] = useState(initialState);
  const [phone, setPhone] = useState(initialState);

  const navigateCheck = () => {
    axios.post(REGISTER_API, {
      name, email, password, phone

    })
      .then(res => {
        console.log("RIGISTER response", res)
        alert(res.data.message);
        history.push("/login")
      })
      .catch(err => {
        console.log("RIGISTER response Error", err)
      })

  };
  return (
    <Container fluid className="bg-white">
      <Row>
        <Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
        <Col md={8} lg={6}>
          <div className="login d-flex align-items-center py-5">
            <Container>
              <Row>
                <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
                  <h3 className="login-heading mb-4">New Buddy!</h3>

                  <div class="wrapper">
                    <div class="input-data">
                      <input type="text" required
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div class="underline">
                      </div>
                      <label>Name</label>
                    </div>
                  </div>
                  <div class="wrapper">
                    <div class="input-data">
                      <input type="email" required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div class="underline">
                      </div>
                      <label>Email</label>
                    </div>
                  </div>
                  <div class="wrapper">
                    <div class="input-data">
                      <input type="password" required
                        onChange={(e) => setpassword(e.target.value)}
                      />
                      <div class="underline">
                      </div>
                      <label>Password</label>
                    </div>
                  </div>
                  <div class="wrapper">
                    <div class="input-data">
                      <input type="number" required
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <div class="underline">
                      </div>
                      <label>Phone</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mt-3">
                    <div
                      className="btn btn-primary rounded" style={{ cursor: 'pointer' }}
                      onClick={navigateCheck}
                    >
                      Create Account
           
                    </div>
                  </div>
                  <br />
                  <div className="forgot___password text-center pb-2">
                    <Link to="/login" class="linktext">
                      Have an account? Go to login
                     </Link>
                  </div>

                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
