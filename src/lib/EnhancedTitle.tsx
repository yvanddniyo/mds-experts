import { cn } from "./utils";
const EnhancedTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-sky-500 to-emerald-600 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default EnhancedTitle;
