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
        <div className="flex flex-col mt-4 items-center">
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
}
