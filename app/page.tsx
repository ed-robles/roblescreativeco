import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh ">
      <Header />
      <main className="grow bg-white">
        <div className="flex flex-col items-center">
          <Banner />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl underline font-bold m-4 text-[#ff3300]">Our Services</h2>
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}
