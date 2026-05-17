import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { ctaPrimary, ctaSizeMd } from "@/lib/ui-classes";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center text-cocoyam sm:px-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoyam/45">
        404
      </p>
      <h1 className="mt-5 font-display text-4xl font-medium tracking-tight">
        Project not found
      </h1>
      <p className="mt-4 text-base text-cocoyam/60">
        This case study may have moved or doesn&apos;t exist yet.
      </p>
      <Link href="/projects" className={cn("group mt-8", ctaPrimary, ctaSizeMd)}>
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to projects
      </Link>
    </div>
  );
}
