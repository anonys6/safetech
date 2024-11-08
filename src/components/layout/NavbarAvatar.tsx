import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const NavbarAvatar = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const router = useRouter();

    const handleLogout = () => {
        setIsAuthenticated(false);
        Cookies.remove('jwt');
        console.log('Logging out');
        router.push("/");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className='select-none cursor-pointer'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {isAuthenticated ? (
                    <>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <Link href="/en/profile">
                                <DropdownMenuItem>
                                    Profile
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuItem>
                                Order History
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            Log out
                        </DropdownMenuItem>
                    </>
                ) : (
                    <>
                        <DropdownMenuGroup>
                            <Link href="/en/login">
                                <DropdownMenuItem>
                                    Login
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/en/signup">
                                <DropdownMenuItem>
                                    Signup
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuGroup>
                    </>
                )
                }
            </DropdownMenuContent>
        </DropdownMenu>


    )
}

export default NavbarAvatar