import { Outlet } from "react-router-dom"
import { Container } from "./style"

const RootLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default RootLayout