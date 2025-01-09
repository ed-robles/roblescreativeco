"use client";

import * as React from "react";
import { Cross, Home, Info, ShoppingBag } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "Edgar Robles",
    email: "edgar@roblescreativeco.com",
    avatar: "/apple-icon.png",
  },
  // teams: [
  //   {
  //     name: "Acme Inc",
  //     logo: GalleryVerticalEnd,
  //     plan: "Enterprise",
  //   },
  //   {
  //     name: "Acme Corp.",
  //     logo: AudioWaveform,
  //     plan: "Startup",
  //   },
  //   {
  //     name: "Evil Corp.",
  //     logo: Command,
  //     plan: "Free",
  //   },
  // ],
  navMain: [
    {
      title: "Home",
      url: "https://roblescreativeco.com",
      icon: Home,
      isActive: true,
    },
    {
      title: "About",
      url: "https://roblescreativeco.com/about",
      icon: Info,
    },
  ],
  projects: [
    {
      name: "Midwest Vault",
      url: "https://midwestvault.com",
      icon: ShoppingBag,
    },
    {
      name: "Primera Iglesia Bautista de MKE",
      url: "https://iglesiamke.com",
      icon: Cross,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <Link href="https://roblescreativeco.com">
          <Image src="/RCC_Circle_Blue.png" alt="RCC" width={80} height={80} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
