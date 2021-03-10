import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { addToCart  } from '../../Actions/cardProductActions'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'

const QuickBite = () => {

  const [card, setCard] = useState([]);
	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {

		try {
			const result = await axios.get("https://fakestoreapi.com/products");
			setCard(result.data);

		} catch (error) {
			console.log("My error is:" + error);
		}

	};

  const dispatch = useDispatch();

const [qty,setQty] = useState(1)


const addCart = id => {

  console.log(id);
      dispatch(addToCart(id,qty));
  // alert("Card added successfully")
  toast.success("card added successfully");
  
}
  return (
    <div>
   
 
      <h5 className="mb-4 mt-3 col-md-12">Starters <small className="h6 text-black-50">3 ITEMS</small></h5>
 {card.map((products) => (
  <div className="container-fluid card p-4 for_style">
         <div>
         <h5>{products.category} <span class="badge badge-secondary">New</span></h5>
         <h6>${products.price}</h6>
              <button className="float-right btn btn-primary" onClick={() => addCart(products.id)} >Add</button>
         </div>

       </div> 
 ))}

        <ToastContainer 
					autoClose={2000}
				/>
 
    </div>
  )
}

export default QuickBite
