import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
