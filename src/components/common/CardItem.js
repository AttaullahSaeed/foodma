import React,{useEffect,useState} from 'react'
import Icofont from 'react-icofont';
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { cardProducts,addToCart  } from '../../Actions/cardProductActions'; 
import MessageBox from './LoadingBox';
import LoadingBox2 from './LoadingBox';
const CardItem = () => {

	const dispatch = useDispatch();
	const CardsForListingPage = useSelector((state) => state.CardsForListingPage);
	const { loading, error, getAllcards } = CardsForListingPage;
    console.log("🚀 ~ file: CardItem.js ~ line 17 ~ CardItem ~ getAllcards", getAllcards)

	// const [products , setProducts ] = useState(getAllcards);
    // console.log("🚀 ~ file: CardItem.js ~ line 20 ~ CardItem ~ products", products)
	
const [increase,setIncrease]=useState(1);

const Plus=()=>{
	setIncrease(increase+1);
}
const Minus =()=>{
	if(
		increase >1
	)
	setIncrease(increase-1);
}






// useEffect(() => {
// 	if(getAllcards){
// 		let newProducts = [getAllcards]
// 		console.log("🚀 ~ file: CardItem.js ~ line 37 ~ CardItem ~ newProducts", newProducts)
// 		for(var i = 0 ; i < newProducts.length ; i++){
			
// 			newProducts.push({quanitity : 1})
// 		}
// 		console.log("🚀 ~ file: CardItem.js ~ line 33 ~ CardItem ~ newProducts", newProducts)
// 	}


// },[getAllcards])



useEffect(() => {
	
		dispatch(cardProducts())
	}, [dispatch]);
	const addCart = id => {

		console.log(id);
        dispatch(addToCart(id));
		// alert("Card added successfully")
		toast.success("card added successfully");	
	}
	return (
		<div>

               {
                loading ? <LoadingBox2></LoadingBox2>
                    :
                    error ? <MessageBox varient="danger">{error}</MessageBox>
                        :           
                           
			<div className="container-fluid">
		
				<div className="row ">
			
				{getAllcards.map((product) => (
					<div className="col-lg-4 col-md-4 col-12" key={product.id}>
					<div className="card my-2" style={{width:'17rem'}}>
					<img src={product.image} className="card-img-top" alt="..."  className="productsss__imgss"/>
					<div className="card-body">
						<h6 className="card-title">{product.category}</h6>
						<h6 className="promoted__css">Promoted</h6>
						<p className="rating__css"><StarBorderIcon className="mb-1" style={{fontSize:'19px'}}/>{product.rating}</p>
						<Icofont icon='heart' className="heart_icon_cards"/>
						<p class="card-text">{product.custom_message}</p>
						<div className="d-flex justify-content-between">
						<p><AccessAlarmIcon/>{product.delivery_time} min</p>
						<p>100$ for two</p>
						</div>
						<div className="d-flex justify-content-between">
						<p className="offers--cs" style={{color:'white'}}>Offer</p>
						<p>65% off get coupons</p>
						</div>
						<div className="d-flex justify-content-between">
						
						
								<div className="btn-group" role="group" aria-label="Basic example"   >
								<button type="button" className="btn btn-outline-primary" onClick={Minus}>-</button>
								<button type="button" className="bg-white">{increase}</button>
								<button type="button" className="btn btn-outline-primary" onClick={Plus}>+</button>
								</div>
							
							
								<h5>$ {product.price}</h5>
              
                            </div>
						<button  className="btn btn-primary mt-2 w-100" onClick={() => addCart(product.id)}>Add</button>
					</div>
					</div>
					
					</div>
					))}

				
				</div>
				<ToastContainer 
					autoClose={2000}
				/>
			</div>
}
		</div>
	)
}

export default CardItem
