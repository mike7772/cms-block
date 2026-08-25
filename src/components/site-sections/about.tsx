/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /about page.
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { resolveMediaUrl } from "@/puck/media";

export type AboutHeroProps = {
  title: string;
  description: string;
};

export function AboutHeroSection(props: AboutHeroProps) {
  const p = props;
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold text-blue-900 md:text-5xl">{p.title}</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl">{p.description}</p>
        </div>
      </div>
    </section>
  );
}

export type AboutQuickLinksProps = {
  link1Title: string;
  link1Description: string;
  link1Url: string;
  link1Label: string;
  link2Title: string;
  link2Description: string;
  link2Url: string;
  link2Label: string;
};

export function AboutQuickLinksSection(props: AboutQuickLinksProps) {
  const p = props;
  const links = [
    { title: p.link1Title, description: p.link1Description, url: p.link1Url, label: p.link1Label },
    { title: p.link2Title, description: p.link2Description, url: p.link2Url, label: p.link2Label },
  ];
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              className="group rounded-xl border border-blue-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-200">
                  <ChevronRight className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                    {link.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{link.description}</p>
                  <div className="flex items-center font-medium text-blue-600 group-hover:text-blue-800">
                    <span>{link.label}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export type AboutBodyProps = {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  imageUrl: string;
};

export function AboutBodySection(props: AboutBodyProps) {
  const p = props;
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 font-serif text-3xl font-bold text-blue-900 md:text-4xl">{p.heading}</h2>
              <div className="space-y-4 text-gray-700">
                <p>{p.paragraph1}</p>
                <p>{p.paragraph2}</p>
                <p>{p.paragraph3}</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[300px] overflow-hidden rounded-xl shadow-2xl md:h-[400px]">
                <Image src={resolveMediaUrl(p.imageUrl)} alt="Supreme Court Building" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
