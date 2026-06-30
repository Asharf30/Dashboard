const Button = ({ bgColor, color, text, borderRadius, size }) => {
  return (
    <button
      type="button"
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
