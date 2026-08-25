/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /about/president and /about/vision-mission pages verbatim.
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Quote, Eye, Target, Shield, Clock, Users, Globe } from "lucide-react";
import { resolveMediaUrl } from "@/puck/media";

export type AboutSubpageHeroProps = {
  backLabel: string;
  backUrl: string;
  title: string;
  subtitle: string;
};

export function AboutSubpageHeroSection(props: AboutSubpageHeroProps) {
  const p = props;
  return (
    <>
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Link
              href={p.backUrl}
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {p.backLabel}
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold text-blue-900 md:text-5xl">
              {p.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl">{p.subtitle}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export type AboutPresidentMessageProps = {
  imageUrl: string;
  imageCaptionTitle: string;
  imageCaptionSubtitle: string;
  quoteText: string;
  bodyHeading: string;
  bodyParagraph1: string;
  bodyParagraph2: string;
  bodyParagraph3: string;
  bodyParagraph4: string;
  commitmentHeading: string;
  commitment1: string;
  commitment2: string;
  commitment3: string;
  commitment4: string;
};

export function AboutPresidentMessageSection(props: AboutPresidentMessageProps) {
  const p = props;
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-start gap-12 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="relative h-[300px] overflow-hidden rounded-xl shadow-xl md:h-[400px]">
                <Image
                  src={resolveMediaUrl(p.imageUrl)}
                  alt="President of Supreme Court of Oromia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-blue-900">{p.imageCaptionTitle}</h3>
                <p className="text-gray-600">{p.imageCaptionSubtitle}</p>
              </div>
            </div>

            <div className="space-y-6 md:col-span-2">
              <div className="relative">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-blue-200" />
                <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
                  <p className="text-lg italic leading-relaxed text-gray-800">{p.quoteText}</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <h3 className="mb-4 text-2xl font-bold text-blue-900">{p.bodyHeading}</h3>
                <p>{p.bodyParagraph1}</p>
                <p>{p.bodyParagraph2}</p>
                <p>{p.bodyParagraph3}</p>
                <p>{p.bodyParagraph4}</p>
              </div>

              <div className="mt-8 rounded-xl bg-blue-50 p-6">
                <h4 className="mb-3 text-xl font-bold text-blue-900">{p.commitmentHeading}</h4>
                <ul className="space-y-2 text-gray-700">
                  {[p.commitment1, p.commitment2, p.commitment3, p.commitment4].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-blue-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type AboutVisionSectionProps = {
  heading: string;
  text: string;
};

export function AboutVisionSection(props: AboutVisionSectionProps) {
  const p = props;
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-blue-900 md:text-4xl">
              {p.heading}
            </h2>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 md:p-12">
            <p className="text-center text-lg leading-relaxed text-gray-800 md:text-xl">
              {p.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export type AboutMissionSectionProps = {
  heading: string;
  text: string;
  pillar1Title: string;
  pillar1Description: string;
  pillar2Title: string;
  pillar2Description: string;
  pillar3Title: string;
  pillar3Description: string;
};

export function AboutMissionSection(props: AboutMissionSectionProps) {
  const p = props;
  const pillars = [
    { icon: Shield, title: p.pillar1Title, description: p.pillar1Description },
    { icon: Clock, title: p.pillar2Title, description: p.pillar2Description },
    { icon: Users, title: p.pillar3Title, description: p.pillar3Description },
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-blue-900 md:text-4xl">
              {p.heading}
            </h2>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-lg md:p-12">
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-800 md:text-xl">
              {p.text}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="rounded-xl bg-blue-50 p-6 text-center">
                    <Icon className="mx-auto mb-3 h-8 w-8 text-blue-600" />
                    <h3 className="mb-2 font-bold text-blue-900">{pillar.title}</h3>
                    <p className="text-sm text-gray-600">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type AboutCoreValuesSectionProps = {
  heading: string;
  description: string;
  value1Title: string;
  value1Description: string;
  value2Title: string;
  value2Description: string;
  value3Title: string;
  value3Description: string;
  value4Title: string;
  value4Description: string;
};

export function AboutCoreValuesSection(props: AboutCoreValuesSectionProps) {
  const p = props;
  const values = [
    { icon: Shield, title: p.value1Title, description: p.value1Description },
    { icon: Users, title: p.value2Title, description: p.value2Description },
    { icon: Globe, title: p.value3Title, description: p.value3Description },
    { icon: Clock, title: p.value4Title, description: p.value4Description },
  ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-blue-900 md:text-4xl">
              {p.heading}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">{p.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-blue-100 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 font-bold text-blue-900">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export type AboutImageBannerProps = {
  imageUrl: string;
  captionTitle: string;
  captionText: string;
};

export function AboutImageBannerSection(props: AboutImageBannerProps) {
  const p = props;
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative h-[300px] overflow-hidden rounded-xl shadow-2xl md:h-[400px]">
            <Image
              src={resolveMediaUrl(p.imageUrl)}
              alt="Supreme Court of Oromia Vision and Mission"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="mb-2 text-2xl font-bold text-white">{p.captionTitle}</h3>
              <p className="max-w-md text-white/90">{p.captionText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
