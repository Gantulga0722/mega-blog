import { Header, Footer } from "@/components";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex mx-auto flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
