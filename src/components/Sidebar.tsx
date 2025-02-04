"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, Upload, Brain, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Lessons", href: "/lessons", icon: BookOpen },
  { name: "Upload", href: "/upload", icon: Upload },
  { name: "AI Fine-tuning", href: "/ai-finetuning", icon: Brain },
]

export function SidebarNav() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-2xl font-bold p-6">Teacher Dashboard</h1>
      </SidebarHeader>
      <SidebarContent>
        <nav className="flex-1 px-3">
          {navItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start mb-1",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Link href={item.href} className="flex items-center">
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter>
        {user && (
          <div className="p-4 flex items-center">
            <User className="h-6 w-6 mr-2" />
            <span className="text-sm font-medium">{user.displayName}</span>
          </div>
        )}
        <Button variant="ghost" className="w-full justify-start" onClick={signOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </SidebarFooter>
      <SidebarTrigger />
    </Sidebar>
  )
}
