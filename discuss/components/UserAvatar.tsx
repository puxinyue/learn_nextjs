"use client"
import { Avatar, Popover, PopoverContent, PopoverTrigger } from "@heroui/react"
import SignOutButton from "./SignOutButton"
import { useSession } from "next-auth/react"

export default function UserAvatar() {
  const { data: session } = useSession()

  if (!session?.user) return null

  return (
    <div>
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <Avatar src={session?.user?.image || 'https://i.pravatar.cc/150?u=a042581f4e29026024d'} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <SignOutButton />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}