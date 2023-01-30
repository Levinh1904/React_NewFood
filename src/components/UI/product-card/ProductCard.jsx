import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { toast} from "react-toastify"
const ProductCard = (props) => {
  const { id, title, image01, price, category, cont } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        category,
        cont,
      })
    );
    toast.success('Thêm sản phẩm thành công!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  return (
    <div className="product__item">
      <div className="category">{category}</div>
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <p className="cont_card">{cont}</p>
        <span className="product__price">${price}</span>
        <div className=" d-flex align-items-center justify-content-between ">

          <button className="addTOCart__btn"  onClick={addToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
