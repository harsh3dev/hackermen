import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar/>
        Home
      <Footer/>
    </main>
  );
}
