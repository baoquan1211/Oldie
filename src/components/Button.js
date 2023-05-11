const Button = ({ children, className = "", link = "", ...props }) => {
  if (link.length > 0) {
    return (
      <a
        href={link}
        className={`rounded-[8px] justify-center flex items-center gap-x-[12px] ${
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
