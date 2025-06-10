
import { Button } from "@heroui/react"
import * as actions from '@/actions'
export default function SignOut() {
  return (
    <form
      action={actions.signOut}
    >
      <Button type="submit" color="primary" variant="light">Sign Out</Button>
    </form>
  )
}