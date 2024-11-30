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
      </SidebarInset>
    </SidebarProvider>
  );
}
