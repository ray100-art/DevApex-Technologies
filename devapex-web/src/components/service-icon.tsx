import { BrainCircuit, Code2, GraduationCap, Server } from "lucide-react";
import type { Service } from "@/lib/content";

const icons = { code: Code2, brain: BrainCircuit, server: Server, graduation: GraduationCap };

export function ServiceIcon({ icon, size = 22 }: { icon: Service["icon"]; size?: number }) {
  const Icon = icons[icon];
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
      <Icon size={size} aria-hidden />
    </span>
  );
}
