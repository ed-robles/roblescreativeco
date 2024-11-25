import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh ">
      <Header />
      <main className="grow bg-white">
        <div className="flex flex-col items-center">
          <Banner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
