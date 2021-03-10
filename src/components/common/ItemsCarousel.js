import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import { Link } from 'react-router-dom';
import MessageBox from './LoadingBox';
import LoadingBox from './LoadingBox';
import { addToCart  } from '../../Actions/cardProductActions'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../../Actions/productActions';

const ItemsCarousel = () => {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, getAllProducts } = productList;
	const [qty,setQty] = useState(1)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);
	const addCart = id => {

		console.log(id);
        dispatch(addToCart(id,qty));
		// alert("Card added successfully")
		toast.success("card added successfully");
		
	}
	
		return (
                    <>
			        {
                loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox varient="danger">{error}</MessageBox>
                        :
			<OwlCarousel nav loop {...options} className="owl-theme owl-carousel-five offers-interested-carousel">
			{getAllProducts.map((product) => (
					<div className="item">
					<div class="product-card">
		<button class="badge1"  onClick={() => addCart(product.id)}>Add</button>
		<div class="product-tumb">
			<img src={product.image} alt=""/>
		</div>
		<div class="product-details">
		<h6 className="mt-2 ml-2">{product.category}</h6>
		<div className="d-flex justify-content-between">
              
              <select className="option__cs1 ml-2"  value={qty} onChange={e => setQty(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                
              </select>
              <h6 className="mr-2 mt-2">${product.price}</h6>
			  
              
              </div>
			
		</div>
	</div>
						
					</div>
					))}
					<ToastContainer 
					autoClose={2000}
				/>
			</OwlCarousel>
					}
	
	</>
		);
	}

const options = {
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 2,
		},
		1200: {
			items: 3,
		},
	},
	lazyLoad: true,
	pagination: "false",
	loop: true,
	dots: false,
	autoPlay: 2000,
	nav: true,
	navText: ["<i class='icofont-thin-left'></i>", "<i class='icofont-thin-right'></i>"]
}

export default ItemsCarousel;