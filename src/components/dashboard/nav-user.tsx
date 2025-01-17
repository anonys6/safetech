/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import {
	House,
	LogOut,
} from "lucide-react"

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import Cookies from "js-cookie"
import { useAuth } from "@/contexts/AuthContext"
import { useToast } from "@/hooks/use-toast"

export function NavUser({
	user,
	isLoading,
}: {
	user: {
		name: string
		email: string
		avatar: string
	}
	isLoading: boolean
}) {
	const { isAuthenticated, setIsAuthenticated } = useAuth()
	const { isMobile } = useSidebar()
	const router = useRouter();
	const { toast } = useToast();

	const handleLogout = () => {
		toast({
			description: "You have been logged out",
		})
		Cookies.remove('jwt')
		setIsAuthenticated(false);
		console.log('Logging out')
		router.push("/")
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							{isLoading ? (
								<div className="flex items-center space-x-4">
									<Skeleton className="h-8 w-8 rounded-lg" />
									<div className="grid flex-1 text-left text-sm leading-tight space-y-2">
										<Skeleton className="h-4 w-[100px]" />
										<Skeleton className="h-4 w-[150px]" />
									</div>
									<Skeleton className="ml-auto size-4 h-4 w-4" />
								</div>
							) : (
								<>
									<Avatar className="h-8 w-8 rounded-lg">
										<AvatarImage src={user.avatar} alt={user.name} />
										<AvatarFallback className="rounded-lg">CN</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-semibold">{user.name}</span>
										<span className="truncate text-xs">{user.email}</span>
									</div>
									<CaretSortIcon className="ml-auto size-4" />
								</>
							)}
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								{isLoading ? (
									<div className="flex items-center space-x-4">
										<Skeleton className="h-8 w-8 rounded-lg" />
										<div className="grid flex-1 text-left text-sm leading-tight space-y-2">
											<Skeleton className="h-4 w-[100px]" />
											<Skeleton className="h-4 w-[150px]" />
										</div>
									</div>
								) : (
									<>
										<Avatar className="h-8 w-8 rounded-lg">
											<AvatarImage src={user.avatar} alt={user.name} />
											<AvatarFallback className="rounded-lg">CN</AvatarFallback>
										</Avatar>
										<div className="grid flex-1 text-left text-sm leading-tight">
											<span className="truncate font-semibold">{user.name}</span>
											<span className="truncate text-xs">{user.email}</span>
										</div>
									</>
								)}
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem onClick={() => router.push("/")}>
								<House />
								Home
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={handleLogout}>
							<LogOut />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}