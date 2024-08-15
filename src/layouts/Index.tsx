import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="bg-secondary-light h-screen">
      <header className="px-4 py-3 bg-primary">
        <h2 className="font-bold text-white text-lg text-center">Welcome</h2>
      </header>

      <Outlet />
    </main>
  );
};

export default Layout;
