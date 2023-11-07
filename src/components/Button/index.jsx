import { Container } from "./styles";

export function Button({ tittle, loading = false }) {
    return (
        <Container
            type="button"
            disabled={loading}
        >
            {loading ? "Carregando..." : tittle}
        </Container>
    )
}