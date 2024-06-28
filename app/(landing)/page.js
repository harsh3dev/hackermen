import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar/>
        Home
      <Footer/>
    </main>
  );
}
