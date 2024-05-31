import Product from "./Product";

import PropTypes from "prop-types";

const listProduct = [
  {
    id: 1,
    nameProduct: "Red Love Cup",
    url: "https://coffee-style-trungquandev.web.app/img/product-coffee-01.jpeg",
    price: 25.0,
  },
  {
    id: 2,
    nameProduct: "Black Tea Cup",
    url: "https://coffee-style-trungquandev.web.app/img/product-coffee-02.jpeg",
    price: 15.0,
  },
  {
    id: 3,
    nameProduct: "B&W Essentials Mug",
    url: "https://coffee-style-trungquandev.web.app/img/product-coffee-03.jpeg",
    price: 19.0,
  },
  {
    id: 4,
    nameProduct: "Winter Style Mug",
    url: "https://coffee-style-trungquandev.web.app/img/product-coffee-04.jpeg",
    price: 25.0,
  },
  {
    id: 5,
    nameProduct: "Ceramic Tea",
    url: "https://coffee-style-trungquandev.web.app/img/product-coffee-05.jpeg",
    price: 46.0,
  },
  {
    id: 6,
    nameProduct: "No Handle Bar Cup",
    url: "https://coffee-style-trungquandev.web.app/img/product-coffee-06.jpeg",
    price: 34.0,
  },
  {
    id: 7,
    nameProduct: "Espresso Cup by Mugs.co",
    url: "https://coffee-style-trungquandev.web.app/img/product-coffee-07.jpeg",
    price: 47.0,
  },
  {
    id: 8,
    nameProduct: "Pink Premium Ceramic",
    url: "https://coffee-style-trungquandev.web.app/img/product-coffee-08.jpeg",
    price: 99.0,
  },
  {
    id: 9,
    nameProduct: "Summer Designer Cup",
    url: "https://coffee-style-trungquandev.web.app/img/product-coffee-09.jpeg",
    price: 29.0,
  },
];

const ListProduct = ({ halfHeight }) => {
  return (
    <div
      className="grid grid-cols-3 gap-3 more-product
                    md:grid-cols-3
                    md:gap-3
                    max-md:grid-cols-2
                    max-md:gap-3
                    sm:grid-cols-2
                    sm:gap-3
                    max-sm:grid-cols-2
    
    "
    >
      {listProduct.map((item) => {
        const { id, nameProduct, price, url } = item;
        return (
          <Product
            halfHeight={halfHeight}
            key={id}
            nameProduct={nameProduct}
            price={price}
            url={url}
          ></Product>
        );
      })}
    </div>
  );
};

ListProduct.propTypes = {
  halfHeight: PropTypes.number,
};

export default ListProduct;
