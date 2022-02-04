import { Header } from "../Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="mx-auto max-w-2xl text-base leading-tight px-4">
      <Header />
      {children}
    </div>
  );
};
