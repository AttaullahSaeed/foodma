import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Icofont from 'react-icofont';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../../Actions/productActions'; 
import { addToCart  } from '../../Actions/cardProductActions'; 
import MessageBox from './LoadingBox';
import LoadingBox from './LoadingBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BestSeller(props) {


  const [qty,setQty] = useState(1)
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, getAllProducts } = productList;

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
    <div>
             
             {
                loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox varient="danger">{error}</MessageBox>
                        :           
                           
       <div className="container-fluid">
           <div className="row ">
           {getAllProducts.map((product) => (
             <div className="col-md-4 col-12" key={product.id}>
             <div className="card my-1" style={{width: '15rem'}}>
            <img src={product.image} className="card-img-top" alt="..." className="productsss__imgs"/>
           
            <div className="card-body">
              <h5 className="card-title">{product.category}</h5> 
              <h6 className="promoted__css">Promoted</h6>
              <Icofont icon='heart' className="heart_icon_cards"/>
              <p className="card-text">{product.title}</p>

              <div className="d-flex justify-content-between">
              
              <select className="option__cs" value={qty} onChange={e => setQty(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                
              </select>
              <h4>${product.price}</h4>
              
              </div>
              
            </div>
            <button  className="btn btn-primary mt-2 w-100" onClick={() => addCart(product.id)}>Add</button>
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

export default BestSeller

