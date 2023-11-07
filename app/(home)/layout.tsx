import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";

const HomeLayoit = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayoit;
