import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-28 text-center">
      <p className="font-mono text-sm text-brand">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">The page you are looking for does not exist or has moved.</p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Go home</Button>
        <Button href="/contact" variant="secondary">Contact us</Button>
      </div>
    </Container>
  );
}
