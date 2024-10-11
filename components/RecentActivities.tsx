import Image from 'next/image'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Activity {
  name: string;
  action: string;
  time: string;
  avatar: string;
}

const activities: Activity[] = [
  {
    name: "John Doe",
    action: "checked in",
    time: "2 hours ago",
    avatar: "/avatars/01.png",
  },
  {
    name: "Jane Smith",
    action: "updated health record",
    time: "4 hours ago",
    avatar: "/avatars/02.png",
  },
  {
    name: "Alice Johnson",
    action: "scheduled doctor visit",
    time: "Yesterday at 2:30 PM",
    avatar: "/avatars/03.png",
  },
  {
    name: "Bob Williams",
    action: "checked out",
    time: "Yesterday at 11:00 AM",
    avatar: "/avatars/04.png",
  },
]

export function RecentActivities() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <Image src={activity.avatar} alt={activity.name} width={36} height={36} />
            <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">
              {activity.action}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  )
}