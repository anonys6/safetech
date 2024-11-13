// pages/dashboard.tsx

import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    DollarSign,
    Menu,
    Package2,
    Search,
    Users,
} from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ChartOrders } from "./ChartOrders";
import { ChartBarMonths } from "./ChartBarMonths";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="bg-background sticky top-0 flex h-16 items-center gap-4 border-b px-4 md:px-6">
                {/* Navigation */}
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <a href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </a>
                    <a href="#" className="text-foreground hover:text-foreground transition-colors">
                        Dashboard
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Orders
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Products
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Customers
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        Analytics
                    </a>
                </nav>
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <a href="#" className="flex items-center gap-2 text-lg font-semibold">
                                <Package2 className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </a>
                            <a href="#" className="hover:text-foreground">Dashboard</a>
                            <a href="#" className="text-muted-foreground hover:text-foreground">Orders</a>
                            <a href="#" className="text-muted-foreground hover:text-foreground">Products</a>
                            <a href="#" className="text-muted-foreground hover:text-foreground">Customers</a>
                            <a href="#" className="text-muted-foreground hover:text-foreground">Analytics</a>
                        </nav>
                    </SheetContent>
                </Sheet>
                {/* Search and User Menu */}
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                {/* Cards Section */}
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSign className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-muted-foreground text-xs">+20.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                            <Users className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-muted-foreground text-xs">+180.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                            <CreditCard className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-muted-foreground text-xs">+19% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                            <Activity className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-muted-foreground text-xs">+201 since last hour</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts Section */}  
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <ChartOrders />
                    <ChartBarMonths />
                </div>

                {/* Transactions and Recent Sales */}
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    {/* Transactions Card */}
                    <Card className="xl:col-span-2">
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Transactions</CardTitle>
                                <CardDescription>Recent transactions from your store.</CardDescription>
                            </div>
                            <Button size="sm" className="ml-auto gap-1">
                                View All
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Customer</TableHead>
                                        <TableHead className="hidden xl:table-cell">Type</TableHead>
                                        <TableHead className="hidden xl:table-cell">Status</TableHead>
                                        <TableHead className="hidden xl:table-cell">Date</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        {
                                            name: "Liam Johnson",
                                            email: "liam@example.com",
                                            type: "Sale",
                                            status: "Approved",
                                            date: "2023-06-23",
                                            amount: "$250.00",
                                        },
                                        {
                                            name: "Olivia Smith",
                                            email: "olivia@example.com",
                                            type: "Refund",
                                            status: "Declined",
                                            date: "2023-06-24",
                                            amount: "$150.00",
                                        },
                                        {
                                            name: "Noah Williams",
                                            email: "noah@example.com",
                                            type: "Subscription",
                                            status: "Approved",
                                            date: "2023-06-25",
                                            amount: "$350.00",
                                        },
                                        {
                                            name: "Emma Brown",
                                            email: "emma@example.com",
                                            type: "Sale",
                                            status: "Approved",
                                            date: "2023-06-26",
                                            amount: "$450.00",
                                        },
                                        {
                                            name: "Liam Johnson",
                                            email: "liam@example.com",
                                            type: "Sale",
                                            status: "Approved",
                                            date: "2023-06-27",
                                            amount: "$550.00",
                                        },
                                    ].map((transaction, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div className="font-medium">{transaction.name}</div>
                                                <div className="text-muted-foreground hidden text-sm md:inline">
                                                    {transaction.email}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden xl:table-cell">{transaction.type}</TableCell>
                                            <TableCell className="hidden xl:table-cell">
                                                <Badge className="text-xs" variant="outline">
                                                    {transaction.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell xl:table-cell">
                                                {transaction.date}
                                            </TableCell>
                                            <TableCell className="text-right">{transaction.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    {/* Recent Sales Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Sales</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            {[
                                {
                                    name: "Olivia Martin",
                                    email: "olivia.martin@email.com",
                                    amount: "+$1,999.00",
                                    avatar: "/avatars/01.png",
                                    initials: "OM",
                                },
                                {
                                    name: "Jackson Lee",
                                    email: "jackson.lee@email.com",
                                    amount: "+$39.00",
                                    avatar: "/avatars/02.png",
                                    initials: "JL",
                                },
                                {
                                    name: "Isabella Nguyen",
                                    email: "isabella.nguyen@email.com",
                                    amount: "+$299.00",
                                    avatar: "/avatars/03.png",
                                    initials: "IN",
                                },
                                {
                                    name: "William Kim",
                                    email: "will@email.com",
                                    amount: "+$99.00",
                                    avatar: "/avatars/04.png",
                                    initials: "WK",
                                },
                                {
                                    name: "Sofia Davis",
                                    email: "sofia.davis@email.com",
                                    amount: "+$39.00",
                                    avatar: "/avatars/05.png",
                                    initials: "SD",
                                },
                            ].map((sale, index) => (
                                <div className="flex items-center gap-4" key={index}>
                                    <Avatar className="hidden h-9 w-9 sm:flex">
                                        <AvatarImage src={sale.avatar} alt="Avatar" />
                                        <AvatarFallback>{sale.initials}</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium leading-none">{sale.name}</p>
                                        <p className="text-muted-foreground text-sm">{sale.email}</p>
                                    </div>
                                    <div className="ml-auto font-medium">{sale.amount}</div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
