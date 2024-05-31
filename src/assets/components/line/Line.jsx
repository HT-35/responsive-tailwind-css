import PropTypes from "prop-types";
const Line = ({ margin, children }) => {
  return (
    <div
      className={`line ${
        margin ? margin : "my-[60px] max-sm:my-[20px] max-md:my-[20px]"
      }  flex justify-center items-center text-[0.75rem] text-[#6B7280] max-sm:text-[8px] max-md:text-[8px]`}
    >
      <div className="deco-line h-[2px] w-[2rem] bg-[#E5E7EB] mx-2"></div>
      <div className="sub-line">{children}</div>
      <div className="deco-line h-[2px] w-[2rem] bg-[#E5E7EB] mx-2 bg-opacity-100"></div>
    </div>
  );
};

Line.propTypes = {
  props: PropTypes.object,
  children: PropTypes.string,
  margin: PropTypes.string,
};

export default Line;
