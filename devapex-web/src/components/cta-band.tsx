import { site, whatsappLink } from "@/lib/site";
import { Button, Container } from "./ui";

export function CtaBand({
  title = "Have a process that should be a system?",
  body = "Tell us what slows your team down. We will reply within one working day with honest next steps, even if that means we are not the right fit.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink">
      <Container className="flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
          <p className="mt-3 text-lg text-slate-300">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/quote" variant="light">Request a quote</Button>
          <Button href={whatsappLink()} variant="ghostLight" external>WhatsApp {site.shortName}</Button>
        </div>
      </Container>
    </section>
  );
}
