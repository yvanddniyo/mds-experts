import { Navbar } from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-1 flex-col overflow-hidden">
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
