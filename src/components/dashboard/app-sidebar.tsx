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

// This is sample data.
const data = {
  user: {
    name: "msalam",
    email: "info@safetechco.com",
    avatar: "/avatars/shadcn.jpg",
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
      url: "#",
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
