import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Loader from "../components/Loader"; // New Loader component
import { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {/* <div className="z-0">
            <Hero />
          </div> */}
          {/* <div className="container z-10 mx-auto">
            <SearchBar />
          </div> */}
          <div className="container mx-auto my-8">{children}</div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
