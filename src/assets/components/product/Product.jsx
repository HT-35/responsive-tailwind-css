import Button from "../button/Button";

import PropTypes from "prop-types";

const SkeletonCard = () => {
  return <div className="w-full h-[400px] bg-gray-500 animate-pulse"></div>;
};

const Product = ({
  nameProduct,
  url,
  price,
  title,
  content,
  number,
  halfHeight,
}) => {
  const imgHeight =
    halfHeight >= 250 ? Number(halfHeight - 200) : Number(halfHeight);
  console.log("imgHeight 123:", imgHeight);
  return (
    <>
      {(nameProduct || title) && url && (price || number) && (
        <div>
          <div
            className={`img h-[${imgHeight}px] bg-cover object-cover bg-center w-full relative group`}
            style={{
              backgroundImage: `url(${url})`,
              height: `${imgHeight}px`,
            }}
          >
            <div className="absolute inset-0 overlay group-hover:bg-gradient-to-t group-hover:from-[rgba(0,0,0,0.5)] group-hover:to-[rgba(0,0,0,0.1)]"></div>
            <div className="absolute hidden -translate-x-1/2 left-1/2 bottom-5 group-hover:block">
              <Button full="">
                {content ? "READ THE FULL STORY" : "EXPLORE MUG"}
              </Button>
            </div>
          </div>

          <div
            className={`text-2xl  md:text-xl        max-md:text-sm  ${
              title ? "text-left" : "text-center"
            }`}
          >
            <h1
              className={`my-4  md:my-4        max-md:my-2 ${
                title
                  ? "text-xl md:text-xl        max-md:text-lg  font-semibold leading-7 min-h-[50px]"
                  : ""
              }`}
            >
              {nameProduct || title}
            </h1>

            {content && (
              <h1
                className="my-4    max-md:my-2  text-lg leading-7 text-gray-500 min-h-[100px]
              md:text-xl  
              md:my-1
              md:min-h-[100px]

              max-md:text-sm

              max-md:min-h-[50px]

              "
              >
                {content}
              </h1>
            )}

            <span
              className={`${
                number
                  ? "text-gray-500 text-[17px] font-semibold tracking-widest  max-md:text-[13px] md:text-sm        "
                  : "text-coffee text-center"
              } `}
            >
              {number ? number : `$ ${price}.00`}
            </span>
          </div>
        </div>
      )}

      {!nameProduct &&
        !url &&
        !price &&
        Array.from({ length: 8 }).map((_, index) => {
          <SkeletonCard key={index}></SkeletonCard>;
        })}
    </>
  );
};

Product.propTypes = {
  nameProduct: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  number: PropTypes.string,
  halfHeight: PropTypes.number,
};

export default Product;
