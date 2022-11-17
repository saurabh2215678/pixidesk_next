import styles from "./Button.module.scss";
import PropTypes from "prop-types";

export enum ButtonTypes {
  PRIMARY = "primary",
  OUTLINE = "outline",
  WHITE = "white",
}

const Button = ({
  type,
  onClick = () => {},
  name,
  classes = "",
  ...otherProps
}: {
  type: ButtonTypes;
  onClick?: () => void;
  name: string;
  classes?: string;
  [key: string]: string | (() => void);
}) => {
  const buttonClasses =
    "py-2 px-7 font-medium rounded text-base md:text-xl tracking-wide link duration-300 flex items-center";

  return (
    <button
      {...otherProps}
      onClick={onClick}
      className={`${getButtonTypeStyles(type)} ${buttonClasses} ${classes}`}
    >
      {name}
    </button>
  );

  function getButtonTypeStyles(type: ButtonTypes) {
    return type === ButtonTypes.PRIMARY
      ? styles.primary
      : type === ButtonTypes.WHITE
      ? styles.white
      : styles.outline;
  }
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default Button;
