"use client"
import { NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import SignInButton from "./SignInButton";
import UserAvatar from "./UserAvatar";
import { useSession } from "next-auth/react"

export default function Header() {
  const { data: session } = useSession()
  return (
    <>
      {session?.user ? (
        <NavbarContent justify="end">
          <UserAvatar />
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <SignInButton />
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </>
  );
}
