import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel3";
import TopSearch from "./home/TopSearch";
import ProductBox from "./home/ProductBox";
import CardItem from "./common/CardItem";
import SectionHeading from "./common/SectionHeading";
import FontAwesome from "./common/FontAwesome";
import axios from 'axios';

import { CARD_ITEMS } from "../Services/DataApi";


const Index = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {

    try {
      const result = await axios.post(CARD_ITEMS);
      setData(result.data);

    } catch (error) {
      console.log("My error is:" + error);
    }

  };



  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       console.log("RUN");
  //       navigator.geolocation.getCurrentPosition(function (position) {
  //         var positionInfo =
  //           "Your current position is (" +
  //           "Latitude: " +
  //           position.coords.latitude +
  //           ", " +
  //           "Longitude: " +
  //           position.coords.longitude +
  //           ")";

  //         console.log("DATA RESPONSE", positionInfo);
  //       });
  //     } else {
  //       alert("Sorry, your browser does not support HTML5 geolocation.");
  //     }
  //   }, []);



  return (
    <>
      <TopSearch />
      <section className="section pt-5 pb-5 bg-white homepage-add-section">
       
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12 images_mbl">
              <img src="https://images.unsplash.com/photo-1555992457-720eb4e75880?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlc3R1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid" />
            </div>
            <div className="col-md-3 col-12 images_mbl">
              <img src="https://images.unsplash.com/photo-1598515213345-d710d121c709?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnlhbml8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid" />
            </div>
            <div className="col-md-3 col-12 images_mbl">
              <img src="https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid" />
            </div>
            <div className="col-md-3 col-12 images_mbl">
              <img src="https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcnlhbml8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

 
      <section className="section pt-5 pb-5 bg-white becomemember-section border-bottom">
        <Container>
          <SectionHeading
            heading="Become a Member"
            subHeading="Lorem Ipsum is simply dummy text of"
          />
          <Row>
            <Col sm={12} className="text-center">
              <Link to="register" className="btn btn-success btn-lg">
                Create an Account <FontAwesome icon="chevron-circle-right" />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const options = {
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 4,
    },
  },

  lazyLoad: true,
  pagination: false.toString(),
  loop: true,
  dots: false,
  autoPlay: 2000,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
};

export default Index;
