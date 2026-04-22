export function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 transition-colors";

  const variants = {
    // Убедитесь, что используете slate или stone, в Tailwind нет стандартного 'state'
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    secondary: "border border-slate-300 text-slate-900 hover:bg-slate-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
