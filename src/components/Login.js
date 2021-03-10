import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import FontAwesome from "./common/FontAwesome";
import { checkAuth } from "../Actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import axios from "axios";
import { LOGIN_API } from "../Services/DataApi";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const initialState = "";
  const [email, setemail] = useState(initialState);
  const [password, setpassword] = useState(initialState);
  const [address, setaddress] = useState("");

  const { is_Auth } = useSelector((state) => state);

  useEffect(() => {
    console.log("FOODMA REDUX", is_Auth);
    dispatch(checkAuth());
    if (is_Auth) {
      history.push("/");
    }
    getCurrentPosition();
  }, [dispatch, is_Auth]);

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      console.log("RUN");
      navigator.geolocation.getCurrentPosition(function (position) {
        var positionInfo =
          "Your current position is (" +
          "Latitude: " +
          position.coords.latitude +
          ", " +
          "Longitude: " +
          position.coords.longitude +
          ")";

        console.log("DATA RESPONSE", positionInfo);
        setaddress({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          address: "Mandi bahauddin",
          house: "4",
          tag: "sabzi mandi",
        });
      });
    }
  };
  const onClickListener = () => {
    loginApiCall();
  };

  const loginApiCall = () => {
    axios
      .post(LOGIN_API, {
        email,
        password,
        address: address,
      })
      .then((res) => {
        console.log("Respoonse", res.data.data);
        setInLocalStorage(res.data.data, res.data.data.auth_token);
        if (res.status === 201) {
          alert("Login Successfully by " + res.data.data.name);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const setInLocalStorage = (user, token) => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("ERrror", error);
    }
  };

  if (is_Auth === null) {
    return (
      <div style={{ position: "absolute", top: "45%", left: "50%" }}>
        <Loader type="ThreeDots" color="#ff3008" height={100} width={100} />
      </div>
    );
  } else {
    return (
      <Container fluid className="bg-white">
        <Row>
          <Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
          <Col md={8} lg={6}>
            <div className="login d-flex align-items-center py-5">
              <Container>
                <Row>
                  <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <Form>
                      <div className="form-label-group">
                        <Form.Control
                          type="email"
                          id="inputEmail"
                          placeholder="Email address"
                          onChange={(e) => setemail(e.target.value)}
                        />
                        <Form.Label htmlFor="inputEmail">
                          Email address / Mobile
                        </Form.Label>
                      </div>
                      <div className="form-label-group">
                        <Form.Control
                          type="password"
                          id="inputPassword"
                          placeholder="Password"
                          onChange={(e) => setpassword(e.target.value)}
                        />
                        <Form.Label htmlFor="inputPassword">
                          Password
                        </Form.Label>
                      </div>
                      <Form.Check
                        className="mb-3"
                        custom
                        type="checkbox"
                        id="custom-checkbox"
                        label="Remember password"
                      />

                      <div
                        onClick={onClickListener}
                        className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                      >
                        Sign in
                      </div>
                      <div className="text-center pt-3">
                        Don’t have an account?{" "}
                        <Link className="font-weight-bold" to="/register">
                          Sign Up
                        </Link>
                      </div>
                      <hr className="my-4" />
                      <p className="text-center">LOGIN WITH</p>
                      <div className="row">
                        <div className="col pr-2">
                          <Button
                            className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase"
                            type="submit"
                          >
                            <FontAwesome icon="google" className="mr-2" />
                            Google
                          </Button>
                        </div>
                        <div className="col pl-2">
                          <Button
                            className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase"
                            type="submit"
                          >
                            <FontAwesome icon="facebook" className="mr-2" />
                            Facebook
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};
export default Login;
