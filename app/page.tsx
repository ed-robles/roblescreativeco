import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";

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
          <Image
            src="/RCC_Circle_Blue.png"
            width={150}
            height={150}
            alt="RCC Circle Logo"
            className="-mt-4 mb-4 animate-spin-slow"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 mt-4">
          <div className="text-6xl">
            <h1 className="text-white bg-[#4FBBFF] font-bold p-2">
              ROBLES CREATIVE COMPANY
            </h1>
            <div className="tracking-tighter mt-3 p-2">
              is a <span className="font-bold">technology</span> and{" "}
              <span className="font-bold">marketing </span>
              consulting agency
              <br /> dedicated to empowering businesses in the digital age.
            </div>
          </div>
          <div className="bg-[#4FBBFF] text-white p-2 flex grow">
            <h1 className="font-bold underline text-5xl p-4">
              How We Can Help
            </h1>
            <p className="text-3xl sm:text-4xl p-4">
              We provide a range of services to help your business grow and
              succeed in the digital age.
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
