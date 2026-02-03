export function ContactBadge({
  label,
  value,
  color,
  rotate = "rotate-0",
  isCopy = false,
  link = "#",
}: {
  label: string;
  value?: string;
  color: string;
  rotate?: string;
  isCopy?: boolean;
  link?: string;
}) {
  const handleClick = () => {
    if (isCopy && value) {
      navigator.clipboard
        .writeText(value)
        .then(() => alert(`Copied ${label}: ${value}`))
        .catch((err) => console.error("Failed to copy: ", err));
    }
  };

  const baseClass = `inline-block px-3 py-1 md:px-7 md:py-2 text-md md:text-xl text-black rounded-full cursor-pointer 
    transition-all duration-200 hover:scale-110 hover:ring-4 ring-white/20 active:scale-95 ${color} ${rotate}`;

  if (isCopy) {
    return (
      <button
        onClick={handleClick}
        className={baseClass}
        title={`Copy ${label}`}
      >
        {label}
      </button>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClass}
      title={`Go to ${label}`}
    >
      {label}
    </a>
  );
}
