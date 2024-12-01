import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="flex flex-col items-center">
          <Link href="https://roblescreativeco.com">
            <Image
              src="/RCC_Circle_Blue.png"
              width={150}
              height={150}
              alt="RCC Circle Logo"
              className="-mt-4 mb-4 animate-spin-slow"
            />
          </Link>
        </div>
        <div className="p-8">
          <h2 className="text-xl font-bold mb-2">Our Story</h2>
          Robles Creative Company was founded by Edgar Robles, an experienced IT
          professional and creative visionary who has always been passionate
          about the intersection of technology and design. Born and raised in
          Wisconsin, Edgar has deep ties to the Midwest and a keen understanding
          of the unique needs of businesses in the region. Before launching
          Robles Creative Company, Edgar honed his skills in IT support and web
          development, specializing in crafting user-friendly experiences and
          delivering high-quality solutions.
          <br /> Recognizing a gap in the market for integrated technology and
          marketing solutions, Edgar set out to create a company that combined
          these strengths under one roof. Founded in 2024, Robles Creative Co.
          began as a one-man operation focused on helping small businesses in
          Milwaukee harness digital tools to compete on a larger scale. From
          building e-commerce platforms to designing marketing campaigns,
          Edgar’s vision was clear: to empower businesses with the resources and
          strategies they need to succeed in an increasingly digital world.
        </div>
        <div className="bg-[#4FBBFF] text-white p-9">
          <h2 className="text-xl font-bold mb-2">Why Milwaukee?</h2>
          Our roots in Milwaukee are a vital part of our identity. The city’s
          entrepreneurial spirit and rich cultural heritage inspire everything
          we do. Being based in Milwaukee allows us to stay connected to the
          pulse of the Midwest while also serving clients nationwide. We’re
          proud to contribute to our local community by supporting businesses
          that are shaping the future of our region.
        </div>
        <div className="bg-black text-white p-8">
          <h2 className="text-xl mb-2 font-bold">A Note from Our Founder</h2>
          “Robles Creative Company was born out of a passion for solving
          problems and creating something meaningful. I’ve always believed in
          the power of technology and design to transform ideas into reality,
          and that’s what drives me every day. At Robles Creative Company, we’re
          not just building websites or campaigns—we’re building connections and
          opportunities for our clients to succeed.” —{" "}
          <span className="font-bold">Edgar Robles</span>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
