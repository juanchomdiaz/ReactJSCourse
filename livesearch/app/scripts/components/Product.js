import React from 'react';

const Product = ({product}) => {
    return ( 
        <div className="product-card">
            <div className="product-image">
                <img src={product.picture} />
            </div>
            <div className="product-card-body">
                <p className="product-name">{product.name}</p>
                <p className="product-about">{product.about}</p>
                <p className="product-price">$ {product.price}</p>
            </div>
        </div>
    );
}
 
export default Product;