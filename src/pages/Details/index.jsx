import { Button } from "../../components/Button"
import { Container } from "./styles"

export function Detail() {
  return (
    <Container>
      <h1>Hello Wolrd</h1>
      <p>By Johan</p>
      <Button tittle="Login" loading />
    </Container>
  )
}