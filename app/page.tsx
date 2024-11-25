import Banner from "@/components/Banner";
import BannerTwo from "@/components/BannerTwo";
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
          <Gallery />
        </div>
        <div className="flex flex-col items-center">
          <BannerTwo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
