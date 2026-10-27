"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitLead, type LeadFormState } from "@/lib/leads";
import { whatsappLink } from "@/lib/site";

const budgets = ["Under KES 100,000", "KES 100,000 to 300,000", "KES 300,000 to 750,000", "KES 750,000 to 1.5M", "Above KES 1.5M", "Not sure yet"];
const timelines = ["As soon as possible", "Within 1 month", "1 to 3 months", "3 to 6 months", "Just exploring"];

const inputCls =
  "mt-1.5 block w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-ink placeholder:text-slate-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 aria-[invalid=true]:border-rose-400";

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string[];
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-rose-600">
          {error[0]}
        </p>
      )}
    </div>
  );
}

type Preselect = { service?: string; package?: string };
type ServiceOption = { slug: string; name: string };
type FormProps = { variant: "quote" | "contact"; serviceOptions?: ServiceOption[] };

// Reads ?service= and ?package= from the URL. Render inside <Suspense> with
// <LeadForm /> as the fallback, so the static shell already contains the full form.
export function LeadFormFromUrl(props: FormProps) {
  const params = useSearchParams();
  return (
    <LeadForm
      {...props}
      preselect={{ service: params.get("service") ?? undefined, package: params.get("package") ?? undefined }}
    />
  );
}

export function LeadForm({ variant, serviceOptions = [], preselect = {} }: FormProps & { preselect?: Preselect }) {
  const [state, action, pending] = useActionState<LeadFormState, FormData>(submitLead, { status: "idle" });
  const v = state.values ?? {};
  const err = state.errors ?? {};
  const invalid = (n: string) => ({ "aria-invalid": !!err[n], "aria-describedby": err[n] ? `${n}-error` : undefined });

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8" role="status">
        <CheckCircle2 className="text-emerald-600" size={32} aria-hidden />
        <h2 className="mt-4 text-xl font-semibold text-ink">Thank you, we have your enquiry.</h2>
        <p className="mt-2 leading-relaxed text-ink-soft">
          We will reply within one working day. If it is urgent, message us on{" "}
          <a href={whatsappLink()} className="font-medium text-brand underline" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          .
        </p>
        <Link href="/" className="mt-6 inline-block text-sm font-semibold text-brand">
          Back to home
        </Link>
      </div>
    );
  }

  const defaultService = v.service ?? preselect.service ?? "";
  const defaultPackage = v.package ?? preselect.package ?? "";

  return (
    <form action={action} noValidate className="space-y-10">
      <input type="hidden" name="source" value={variant === "quote" ? "QUOTE_FORM" : "CONTACT_FORM"} />
      {defaultPackage && <input type="hidden" name="package" value={defaultPackage} />}
      <div className="hidden" aria-hidden>
        <label>
          Leave this empty <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message && (
        <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">
          {state.message}
        </p>
      )}

      {variant === "quote" && (
        <fieldset className="space-y-5">
          <legend className="text-lg font-semibold text-ink">1. Your project</legend>
          <Field label="What do you need help with?" name="service" error={err.service} optional>
            <select id="service" name="service" defaultValue={defaultService} className={inputCls}>
              <option value="">Not sure yet</option>
              {serviceOptions.map((s) => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
          </Field>
          {defaultPackage && (
            <p className="text-sm text-muted">
              Package of interest: <span className="font-medium text-ink">{defaultPackage}</span>
            </p>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Budget range" name="budget" optional>
              <select id="budget" name="budget" defaultValue={v.budget ?? ""} className={inputCls}>
                <option value="">Select a range</option>
                {budgets.map((b) => <option key={b}>{b}</option>)}
              </select>
            </Field>
            <Field label="When do you need it?" name="timeline" optional>
              <select id="timeline" name="timeline" defaultValue={v.timeline ?? ""} className={inputCls}>
                <option value="">Select a timeline</option>
                {timelines.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
          </div>
        </fieldset>
      )}

      <fieldset className="space-y-5">
        {variant === "quote" && <legend className="text-lg font-semibold text-ink">2. About you</legend>}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" error={err.name}>
            <input id="name" name="name" autoComplete="name" defaultValue={v.name} className={inputCls} {...invalid("name")} />
          </Field>
          <Field label="Organisation" name="organisation" optional>
            <input id="organisation" name="organisation" autoComplete="organization" defaultValue={v.organisation} className={inputCls} />
          </Field>
          <Field label="Email" name="email" error={err.email}>
            <input id="email" name="email" type="email" autoComplete="email" defaultValue={v.email} className={inputCls} {...invalid("email")} />
          </Field>
          <Field label="Phone / WhatsApp" name="phone" error={err.phone}>
            <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="0712 345 678" defaultValue={v.phone} className={inputCls} {...invalid("phone")} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        {variant === "quote" && <legend className="text-lg font-semibold text-ink">3. The details</legend>}
        <Field label={variant === "quote" ? "Describe the problem you want to solve" : "Your message"} name="message" error={err.message}>
          <textarea
            id="message"
            name="message"
            rows={6}
            defaultValue={v.message}
            placeholder={variant === "quote" ? "What happens today, what is going wrong, and what would success look like?" : "How can we help?"}
            className={inputCls}
            {...invalid("message")}
          />
        </Field>
        <div>
          <label className="flex gap-3 text-sm text-ink-soft">
            <input type="checkbox" name="consent" defaultChecked={v.consent === "on"} className="mt-0.5 h-4 w-4 shrink-0 accent-brand" {...invalid("consent")} />
            <span>
              I agree that DevApex Technologies may store these details and contact me about this enquiry, as described in the{" "}
              <Link href="/privacy" className="text-brand underline">privacy policy</Link>.
            </span>
          </label>
          {err.consent && <p id="consent-error" className="mt-1.5 text-sm text-rose-600">{err.consent[0]}</p>}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {pending && <Loader2 size={18} className="animate-spin" aria-hidden />}
        {pending ? "Sending..." : variant === "quote" ? "Send my request" : "Send message"}
      </button>
    </form>
  );
}
