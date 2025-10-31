import Link from "next/link";
import { PROGRAMS } from "@/constants/programs";
import { ArrowRightIcon } from "lucide-react";

export default function ProgramIndexPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Our Programs & Services
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Explore our business consultancy and professional training
            offerings.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.slice(0, 2).map((program) => (
            <Link
              key={program.slug}
              href={`/program/${program.slug}`}
              className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              <div className="flex h-full flex-col">
                <div className="mb-3 inline-flex items-center gap-2">
                  <span className="inline-block size-2 rounded-full bg-blue-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Program
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                  {program.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-base text-slate-600">
                  {program.summary}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-700">
                  <span>View details</span>
                  <ArrowRightIcon className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional programs below the cards */}
        {PROGRAMS.length > 2 && (
          <div className="mt-12 space-y-6">
            {PROGRAMS.filter((p) => p.listOnly).map((p) => (
              <div
                key={p.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>
                <div className="mt-3 space-y-3 text-slate-700">
                  {p.summary && <p>{p.summary}</p>}
                  {p.sections?.length ? (
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      {p.sections
                        .flatMap((s) => [
                          ...(s.paragraphs ?? []),
                          ...(s.bullets ?? []),
                        ])
                        .map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
