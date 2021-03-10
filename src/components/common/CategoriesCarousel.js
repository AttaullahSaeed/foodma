import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import ProductBox from '../home/ProductBox';
import axios from "axios";

const CategoriesCarousel = () => {
	const [users, setUser] = useState([]);
	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = async () => {
		const result = await axios.post("https://foodomabackend.p2gmanagement.xyz/api/get-restaurant-category-slides");
		setUser(result.data);
		console.log(result.data);
	};
	return (

		<>

			<OwlCarousel nav loop {...options} className="owl-carousel-category owl-theme">

				{users.map((user, index) => (
					<div className="item">
						<ProductBox

							boxClass='osahan-category-item'

							title={user.name}
							counting='156'
							image={user.image}
							imageClass='img-fluid'
							imageAlt=''
							linkUrl='#'

						/>

					</div>
				))}

			</OwlCarousel>

		</>
	);

}

const options = {
	responsive: {
		0: {
			items: 3,
		},
		600: {
			items: 4,
		},
		1000: {
			items: 6,
		},
		1200: {
			items: 8,
		},
	},
	loop: true,
	lazyLoad: true,
	autoplay: true,
	dots: false,
	autoplaySpeed: 1000,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
	nav: true,
	navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}

export default CategoriesCarousel;