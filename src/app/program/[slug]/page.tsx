import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProgramBySlug, PROGRAMS } from "@/constants/programs";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROGRAMS.filter((p) => !p.listOnly).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program || program.listOnly) return { title: "Program Not Found" };
  return {
    title: `${program.title} | MDS Experts`,
    description: program.summary,
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program || program.listOnly) notFound();

  const SITE_URL = "https://mdsexpertspro.com/";
  const programUrl = `${SITE_URL}program/${slug}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Programs",
        item: `${SITE_URL}program`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: program.title,
        item: programUrl,
      },
    ],
  };

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.summary,
    url: programUrl,
    provider: {
      "@type": "Organization",
      name: "MDS Experts Ltd",
      sameAs: SITE_URL,
    },
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-3xl px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
        <div className="mb-6">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
          >
            <ArrowLeftIcon className="size-4" />
            Back to programs
          </Link>
        </div>

        <header>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            {program.title}
          </h1>
          <p className="mt-3 text-slate-600">{program.summary}</p>
        </header>

        <div className="mt-10 space-y-10">
          {program.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {section.title}
              </h2>
              {section.paragraphs && (
                <div className="mt-3 space-y-3 text-slate-700 leading-relaxed">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}
              {section.bullets && (
                <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {program.applyUrl && (
            <div className="sticky bottom-8 mt-6 flex justify-center">
              <Button
                asChild
                size="lg"
                className="shadow-lg bg-white text-blue-600 px-8 py-3 rounded-full cursor-pointer font-semibold hover:bg-blue-50 transition-colors duration-200 text-base"
              >
                <a
                  href={program.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply for this program
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
