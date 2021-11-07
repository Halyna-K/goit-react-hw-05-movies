import s from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onClick, text }) => {
  return (
    <button type="button" className={s.button} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
