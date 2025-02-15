import { AppSidebar } from "@/components/dashboard/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import AvatarImage from "@/assets/avatar.jpeg";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/en/profile">
                                        Profile
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-8 p-4 xl:p-16 pt-0">
                    <div className="bg-muted rounded-md border-accent border-2">
                        <div className="flex justify-between p-6 border-accent border-b-2">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold">
                                    Avatar
                                </h3>
                                <span>
                                    <p className="text-sm">
                                        This is your avatar.
                                    </p>
                                    <p className="text-sm">
                                        Click on the avatar to upload a custom
                                        one from your files.
                                    </p>
                                </span>
                                {/* <Separator className="bg-accent" /> */}
                            </div>
                            <Image
                                className="rounded-full"
                                src={AvatarImage.src}
                                alt="avatar"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="py-4 px-6 text-sm text-zinc-500">
                            An avatar is optional but strongly recommended.
                        </div>
                    </div>
                    <div className="bg-muted rounded-md border-accent border-2">
                        <div className="flex justify-between p-6 border-accent border-b-2">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold">
                                    Display Name
                                </h3>
                                <p className="text-sm">
                                    Please enter your full name, or a display
                                    name you are comfortable with.
                                </p>
                                <Input type="text" className="w-[300px] bg-" />
                            </div>
                        </div>
                        <div className="py-4 px-6 text-sm text-zinc-500 flex justify-between items-center">
                            Please use 32 characters at maximum.
                            <Button variant="outline">Save</Button>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md border-accent border-2">
                        <div className="flex justify-between p-6 border-accent border-b-2">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold">
                                    Username
                                </h3>
                                <p className="text-sm">
                                    This is your URL namespace within SafeTech
                                </p>
                                <Input type="text" className="w-[300px] bg-" />
                            </div>
                        </div>
                        <div className="py-4 px-6 text-sm text-zinc-500 flex justify-between items-center">
                            Please use 48 characters at maximum.
                            <Button variant="outline">Save</Button>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md border-accent border-2">
                        <div className="flex justify-between p-6 border-accent border-b-2">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold">
                                    Email
                                </h3>
                                <p className="text-sm">
                                    Enter the email addresses you want to use to
                                    log in with Vercel. Your primary email will
                                    be used for account-related notifications.
                                </p>
                                <Input type="email" className="w-[300px] bg-" />
                            </div>
                        </div>
                        <div className="py-4 px-6 text-sm text-zinc-500 flex justify-between items-center">
                            Please enter valid email address.
                            <Button variant="outline">Save</Button>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md border-accent border-2">
                        <div className="flex justify-between p-6 border-accent border-b-2">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold">
                                    Your Phone Number
                                </h3>
                                <p className="text-sm">
                                    Enter a phone number to receive important
                                    service updates by SMS.
                                </p>
                                <Input type="tel" className="w-[300px] bg-" />
                            </div>
                        </div>
                        <div className="py-4 px-6 text-sm text-zinc-500 flex justify-between items-center">
                            Future update will be sent to this phone number.
                            <Button variant="outline">Save</Button>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md border-accent border-2">
                        <div className="flex justify-between p-6 border-accent border-b-2">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold">
                                    Customer ID
                                </h3>
                                <p className="text-sm">
                                    Enter your customer id to view your order
                                    history
                                </p>
                                <Input type="tel" className="w-[300px] bg-" />
                            </div>
                        </div>
                        <div className="py-4 px-6 text-sm text-zinc-500 flex justify-between items-center">
                            Please contact support if you don&apos;t have a
                            customer id.
                            <Button variant="outline">Save</Button>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md border-red-800 border">
                        <div className="flex justify-between p-6 border-accent border-b-2">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl font-semibold">
                                    Delete Account
                                </h3>
                                <p className="text-sm">
                                    Permanently remove your Personal Account and
                                    all of its contents from the Vercel
                                    platform. This action is not reversible, so
                                    please continue with caution.
                                </p>
                            </div>
                        </div>
                        <div
                            style={{ backgroundColor: "rgb(42, 19, 20)" }}
                            className="py-4 px-6 text-sm text-zinc-500 flex justify-end items-center rounded-b-md"
                        >
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="bg-red-600 text-white hover:bg-red-500"
                                    >Delete Account</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your
                                            account and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}

// hilol
