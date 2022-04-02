import PropTypes from "prop-types";

export const Input = (
  { label, type, handleChange, padding, borderRadius, border, outline },
  props
) => {
  const style = {
    padding,
    borderRadius,
    border,
    outline,
  };
  return (
    <input
      type={type}
      placeholder={label}
      onChange={handleChange}
      style={style}
    />
  );
};

Input.propTypes = {
  label: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  outline: PropTypes.string,
  border: PropTypes.string,
  handleClick: PropTypes.func,
};
