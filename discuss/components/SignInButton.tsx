
import { Button, User } from "@heroui/react"
import * as actions from '@/actions'
export default function SignInButton() {
  return (
    <>
      <form
        action={actions.signIn}
      >
        <Button type="submit" color="primary" variant="bordered">Signin with GitHub</Button>
      </form>
    </>
  )
} 