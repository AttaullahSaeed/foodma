import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PageTitle from './common/PageTitle';
import CouponCard from './common/CouponCard';
import BankOffers from './common/BankOffers';
import axios from 'axios';
import { GET_COUPONS } from "../Services/DataApi";

const Offers = () => {
	const [coupons, setCoupons] = useState([]);
	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {

		try {
			const result = await axios.post(GET_COUPONS);
			setCoupons(result.data);

		} catch (error) {
			console.log("My error is:" + error);
		}

	};


	return (
		<>
			<PageTitle
				title="Offers for you"
				subTitle="Explore top deals and offers exclusively for you!"
			/>
			<section className="section pt-5 pb-5">
				<Container>

					<Row>
						<Col md={12}>
							<h4 className="font-weight-bold mt-0 mb-3">Available Coupons</h4>
						</Col>
						{coupons.map((d, key) => (
							<Col md={4} key={key}>
								<CouponCard
									title={d.name}
									logoImage='img/bank/1.png'
									subTitle={d.description}
									copyBtnText='COPY CODE'
									couponCode={d.code}
								/>
							</Col>
						))}
						{/* <Col md={4}>
							<CouponCard
								title='Get 50% OFF on your first osahan eat order'
								logoImage='img/bank/2.png'
								subTitle='Use code EAT730 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $600'
								copyBtnText='COPY CODE'
								couponCode='EAT730'
							/>
						</Col>
						<Col md={4}>
							<CouponCard
								title='Get 50% OFF on your first osahan eat order'
								logoImage='img/bank/3.png'
								subTitle='Use code SAHAN50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $200'
								copyBtnText='COPY CODE'
								couponCode='SAHAN50'
							/>
						</Col>
						<Col md={4}>
							<CouponCard
								title='Get 50% OFF on your first osahan eat order'
								logoImage='img/bank/4.png'
								subTitle='Use code GURDEEP50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $600'
								copyBtnText='COPY CODE'
								couponCode='GURDEEP50'
							/>
						</Col>
						<Col md={4}>
							<CouponCard
								title='Get 50% OFF on your first osahan eat order'
								logoImage='img/bank/5.png'
								subTitle='Use code OSAHANEAT50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $200'
								copyBtnText='COPY CODE'
								couponCode='OSAHANEAT50'
							/>
						</Col>
						<Col md={4}>
							<CouponCard
								title='Get 50% OFF on your first osahan eat order'
								logoImage='img/bank/6.png'
								subTitle='Use code OSAHANEAT50 & get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $200'
								copyBtnText='COPY CODE'
								couponCode='OSAHANEAT50'
							/>
						</Col> */}
					</Row>
					<Row className="pt-5">
						<Col xs={12}>
							<h4 className="font-weight-bold mt-0 mb-3">Bank Offers</h4>
						</Col>
						<Col md={6}>
							<BankOffers
								title='Get flat $.30 cashback using Amazon Pay'
								logoImage='img/bank/7.png'
								imageclassName='card-img'
								subTitle='Get flat $.30 cashback on orders above $.99 for 10 orders. No code required.'
							/>
						</Col>
						<Col md={6}>
							<BankOffers
								title='Get flat $.30 cashback using Osahan Pay'
								logoImage='img/bank/8.png'
								imageclassName='card-img'
								subTitle='Get flat $.30 cashback on orders above $.99 for 10 orders. No code required.'
							/>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}


export default Offers;