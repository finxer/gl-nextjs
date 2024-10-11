"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Home, Users, Building, FileText, Settings, LogOut } from 'lucide-react'

const navItems = [
  { href: '/', icon: Home, label: 'Dashboard' },
  { href: '/residents', icon: Users, label: 'Residents' },
  { href: '/facilities', icon: Building, label: 'Facilities' },
  { href: '/reports', icon: FileText, label: 'Reports' },
  { href: '/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-card text-card-foreground">
      <div className="flex h-16 items-center justify-center border-b">
        <h1 className="text-xl font-bold">ElderCare Manager</h1>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === item.href && "bg-accent text-accent-foreground"
              )}
            >
              <item.icon className="mr-2 h-5 w-5" />
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="border-t p-4">
        <Button variant="outline" className="w-full justify-start">
          <LogOut className="mr-2 h-5 w-5" />
          Log out
        </Button>
      </div>
    </div>
  )
}