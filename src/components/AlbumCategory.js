import React from 'react';

const AlbumCategory = ({ products }) => {
  return (
    <div>
      <div className="album-images">
        {products.map((product) => {
          return <div>
            {product.filter((task) => task.category)}
            {/* {product.productList.map((single) => {
            return <div>
              <img key={single.productId} src={single.productImage} alt="" />
            <h1>{single.price}</h1>
            </div>
          })} */}
            </div>
        })}
        
      </div>
    </div>
  );
};

export default AlbumCategory;
