"use server";

import { z } from "zod";
import { db } from "./db";

const kenyanPhone = /^(?:\+?254|0)(?:7|1)\d{8}$/;

const leadSchema = z.object({
  source: z.enum(["QUOTE_FORM", "CONTACT_FORM"]),
  name: z.string().trim().min(2, { error: "Please enter your full name." }).max(120),
  email: z.email({ error: "Please enter a valid email address." }).max(200),
  phone: z
    .string()
    .transform((v) => v.replace(/[\s-]/g, ""))
    .refine((v) => kenyanPhone.test(v), { error: "Enter a Kenyan number, e.g. 0712 345 678." }),
  organisation: z.string().trim().max(160).optional(),
  service: z.string().max(80).optional(),
  package: z.string().max(80).optional(),
  budget: z.string().max(80).optional(),
  timeline: z.string().max(80).optional(),
  message: z.string().trim().min(20, { error: "Please give us a little more detail (at least 20 characters)." }).max(4000),
  consent: z.literal("on", { error: "Please agree so we can contact you about your enquiry." }),
});

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<string, string[]>>;
  values?: Record<string, string>;
};

export async function submitLead(_prev: LeadFormState, formData: FormData): Promise<LeadFormState> {
  // Honeypot: real visitors never fill this hidden field.
  if (formData.get("company_website")) return { status: "success" };

  const raw = Object.fromEntries(
    [...formData.entries()].filter(([k, v]) => !k.startsWith("$ACTION") && typeof v === "string" && v !== ""),
  ) as Record<string, string>;

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors: z.flattenError(parsed.error).fieldErrors,
      values: raw,
    };
  }

  const { consent, ...data } = parsed.data;

  if (!db) {
    if (process.env.NODE_ENV === "production") {
      console.error("Lead not saved: DATABASE_URL is not configured");
      return { status: "error", message: "We could not send your enquiry right now. Please contact us on WhatsApp or by email.", values: raw };
    }
    console.info("[dev] Lead received (no database configured):", data);
    return { status: "success" };
  }

  try {
    await db.lead.create({ data: { ...data, consent: consent === "on" } });
  } catch (err) {
    console.error("Failed to save lead", err);
    return { status: "error", message: "Something went wrong on our side. Please try again, or contact us on WhatsApp.", values: raw };
  }

  return { status: "success" };
}
