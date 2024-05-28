import PropTypes from "prop-types";

const Button = ({ bgText, full, ...Props }) => {
  return (
    <div className="flex items-center justify-center ">
      <button
        type="button "
        className={`${full ? full : "max-w-[300px]"} px-[20px] py-[20px] ${
          bgText ? bgText : "bg-white "
        }  text-black w-[300px] font-semibold`}
      >
        {Props.children}
      </button>
    </div>
  );
};

Button.propTypes = {
  Props: PropTypes.object,
  full: PropTypes.bool,
  bgText: PropTypes.string,
};

export default Button;
