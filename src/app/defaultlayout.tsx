import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import Toup from "./components/toup";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        {children}
      </main>
      
      {/* Scroll-to-top button */}
      {/* <Toup /> */}
      
      {/* Footer */}
      <Footer />
    </>
  );
}
