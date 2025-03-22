import { MessagesSquare, Home, GalleryVerticalEnd } from "lucide-react"
import { Link } from 'react-router-dom';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "My Courses",
        url: "/mycourses",
        icon: GalleryVerticalEnd,
    },
    {
        title: "Forum",
        url: "/forum",
        icon: MessagesSquare,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                OCW Plus
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Button>
                    Google Sign In
                </Button>
            </SidebarFooter>
        </Sidebar>
    )
}
