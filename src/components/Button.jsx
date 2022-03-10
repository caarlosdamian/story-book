import PropTypes from "prop-types"

function Button({ label, backgroundColor, color, size = "md",borderRadius,handleClick }) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor,
    color,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  borderRadius:PropTypes.string
}

export default Button