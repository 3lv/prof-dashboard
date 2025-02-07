"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  BookOpen,
  Upload,
  Brain,
  User,
  LogOut,
  ChevronRight,
  Sun,
  Moon,
  FileText,
  LayoutTemplate,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarTrigger } from "@/components/ui/sidebar"
import { useState } from "react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Lessons", href: "/lessons", icon: BookOpen },
  { name: "Upload", href: "/upload", icon: Upload },
  { name: "AI Fine-tuning", href: "/ai-finetuning", icon: Brain },
  { name: "Generate Test", href: "/generate-test", icon: FileText },
  { name: "LaTeX Templates", href: "/latex-templates", icon: LayoutTemplate },
]

export function SidebarNav() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(true)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Sidebar className={cn("transition-all duration-300 ease-in-out", isOpen ? "w-64" : "w-16")}>
      <SidebarHeader className={cn("p-4", !isOpen && "p-2")}>
        {isOpen ? <h1 className="text-2xl font-bold">Teacher Dashboard</h1> : <Home className="h-6 w-6 mx-auto" />}
      </SidebarHeader>
      <SidebarContent className={cn("px-3 py-2", !isOpen && "px-2")}>
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary",
                !isOpen && "px-2",
              )}
            >
              <Link href={item.href} className="flex items-center">
                <item.icon className={cn("h-5 w-5", isOpen && "mr-2")} />
                {isOpen && <span>{item.name}</span>}
              </Link>
            </Button>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter className={cn("p-4", !isOpen && "p-2")}>
        {user && (
          <div className={cn("flex items-center", !isOpen && "justify-center")}>
            <User className="h-6 w-6 mr-2" />
            {isOpen && <span className="text-sm font-medium">{user.displayName}</span>}
          </div>
        )}
        <Button variant="ghost" className={cn("w-full justify-start mt-2", !isOpen && "px-2")} onClick={signOut}>
          <LogOut className={cn("h-5 w-5", isOpen && "mr-2")} />
          {isOpen && <span>Sign Out</span>}
        </Button>
        <Button variant="ghost" className={cn("w-full justify-start mt-2", !isOpen && "px-2")} onClick={toggleTheme}>
          {theme === "dark" ? (
            <Sun className={cn("h-5 w-5", isOpen && "mr-2")} />
          ) : (
            <Moon className={cn("h-5 w-5", isOpen && "mr-2")} />
          )}
          {isOpen && <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
        </Button>
      </SidebarFooter>
      <SidebarTrigger
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "absolute top-1/2 -right-3 bg-background border border-input rounded-full p-1.5 hover:bg-accent hover:text-accent-foreground",
          isOpen && "rotate-180",
        )}
      >
        <ChevronRight className="h-4 w-4" />
      </SidebarTrigger>
    </Sidebar>
  )
}
