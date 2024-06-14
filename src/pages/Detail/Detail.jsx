import './detail.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/reducer';

const Detail = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data}) =>{
            setProduct(data)
        })
    }, [])
    return (
        <div className='container detail'>
            {
                JSON.stringify(product) === '{}'
                ? ''
                : <div className="row">
                    <div className="col-6">
                        <img src={product.image} alt="" className="detail-img" />
                    </div>
                    <div className="col-6">
                        <h2 className="detail-title">{product.title}</h2>
                        <p className="detail-text">{product.description}</p>
                        <br />
                        <p className="detail-text"> category: <b>{product.category}</b></p>
                        <p className="detail-text"> rating: <b>{product.rating.rate}</b></p>
                        <p className="detail-text"> price: <b>${product.price}</b></p>
                        <br />
                        <button
                        onClick={()=>{
                            dispatch(addCart(product))
                        }}
                        className="detail-btn">buy</button>
                        <button
                            onClick={()=>{
                                navigate(-1)
                            }}
                        className="detail-btn">go back</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Detail;
