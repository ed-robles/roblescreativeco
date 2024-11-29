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
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50">
              <h1 className="text-center">Brand Identity</h1>
              <p className="text-center font-light">
                Build a strong brand identity that resonates with your
                customers.
              </p>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50"></div>
            <div className="aspect-video rounded-xl bg-muted/50"></div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
