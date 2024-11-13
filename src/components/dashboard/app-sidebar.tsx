"use client"

import * as React from "react"
import {
  GalleryVerticalEnd,
  ShoppingCart,
  User,
} from "lucide-react"

import { NavProjects } from "@/components/dashboard/nav-projects"
import { NavUser } from "@/components/dashboard/nav-user"
import { TeamSwitcher } from "@/components/dashboard/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import avatarImage from "@/assets/avatar.jpeg";
import { useRouter } from "next/navigation"

// This is sample data.
const data = {
  user: {
    name: "msalam",
    email: "info@safetechco.com",
    avatar: avatarImage.src,
  },
  teams: [
    {
      name: "Safe Tech",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }
  ],

  projects: [
    {
      name: "Profile",
      url: "#",
      icon: User,
    },
    {
      name: "Order History",
      url: "/en/profile/orders",
      icon: ShoppingCart
    },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader onClick={() => router.push("/")}>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} isLoading={false} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
