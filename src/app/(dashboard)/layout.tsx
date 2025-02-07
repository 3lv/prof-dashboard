import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar"
import { AuthCheck } from "@/components/AuthCheck"
import { SidebarNav } from "@/components/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthCheck>
      <SidebarProvider>
        <div className="flex w-full h-full">
          <SidebarNav />
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </AuthCheck>
  )
}
