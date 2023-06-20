const Button = ({
  disabled = false,
  children,
  className = "",
  link = "",
  onClick,
  ...props
}) => {
  if (link.length > 0) {
    return (
      <a
        href={link}
        className={`rounded-[8px] justify-center flex items-center gap-x-[12px]  ${
          className || ""
        }`}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`rounded-[8px] justify-center flex items-center gap-x-[12px] ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
