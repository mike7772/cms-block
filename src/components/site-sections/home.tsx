/**
 * Content-editable section components reproducing the OCCMS public portal's
 * "/" landing page. Structural layout and icons are fixed; text, links, and
 * list items are prop-driven so an admin can edit them per-instance in the
 * Puck page-builder. HomeSearch and HomeFeeCalculator are intentionally NOT
 * here — they embed live, app-specific widgets (case search, fee calculator)
 * that only exist in the consuming portal app, so they're registered locally
 * there instead (see that app's lib/cms/puck-config.tsx).
 */

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Users,
  ArrowRight,
  Gavel,
  ExternalLink,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Shield,
  CheckCircle,
  Search,
} from "lucide-react";

export type HomeHeroProps = {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  fileNewCaseLabel: string;
  trackCaseStatusLabel: string;
  imageUrl: string;
  buildingCaption: string;
};

export function HomeHeroSection(props: HomeHeroProps) {
  const p = props;
  return (
    <section className="relative overflow-hidden bg-blue-900 py-8 text-white sm:py-12 md:py-16 lg:py-24">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      <div className="container relative z-10 mx-auto grid items-center gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-2 md:gap-12">
        <div className="space-y-4 sm:space-y-6">
          <div className="inline-block rounded-full bg-blue-800 px-2.5 py-0.5 text-xs font-medium text-blue-100 sm:px-3 sm:py-1 sm:text-sm">
            {p.badge}
          </div>
          <h1 className="font-serif text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {p.title} <span className="text-blue-400">{p.titleHighlight}</span>
          </h1>
          <p className="max-w-lg text-sm text-blue-100 sm:text-base md:text-lg lg:text-xl">
            {p.description}
          </p>
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-4">
            <Link
              href="#"
              className="group flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-blue-900 transition-colors duration-300 hover:bg-gray-100 sm:px-6 sm:py-3 sm:text-base"
            >
              {p.fileNewCaseLabel}{" "}
              <FileText className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="/dashboard/case-status"
              className="group flex items-center justify-center gap-2 rounded-md border border-white bg-transparent px-4 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-800 sm:px-6 sm:py-3 sm:text-base"
            >
              {p.trackCaseStatusLabel}{" "}
              <Search className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
        <div className="relative h-[250px] transform overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.02] sm:h-[300px] md:h-[350px] lg:h-[400px]">
          <Image src={p.imageUrl} alt="Supreme Court Building" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <span className="font-medium text-white">{p.buildingCaption}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export type HomeAboutUsProps = {
  badge: string;
  heading: string;
  description: string;
  visionHeading: string;
  visionText: string;
  missionHeading: string;
  missionText: string;
  ctaLabel: string;
  ctaUrl: string;
  videoUrl: string;
};

export function HomeAboutUsSection(props: HomeAboutUsProps) {
  const p = props;
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-blue-600">{p.badge}</div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-blue-900 md:text-4xl">{p.heading}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">{p.description}</p>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-blue-900">{p.visionHeading}</h3>
                  <p className="leading-relaxed text-gray-700">{p.visionText}</p>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-blue-900">{p.missionHeading}</h3>
                  <p className="leading-relaxed text-gray-700">{p.missionText}</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href={p.ctaUrl}
                    className="inline-flex transform items-center rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                  >
                    {p.ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <video className="h-[300px] w-full object-cover md:h-[400px]" autoPlay muted loop playsInline>
                  <source src={p.videoUrl} type="video/mp4" />
                  Video not supported
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type HomeFeaturesProps = {
  feature1Title: string;
  feature1Description: string;
  feature2Title: string;
  feature2Description: string;
  feature3Title: string;
  feature3Description: string;
  feature4Title: string;
  feature4Description: string;
};

export function HomeFeaturesSection(props: HomeFeaturesProps) {
  const p = props;
  const items = [
    { icon: CheckCircle, bg: "bg-green-50 group-hover:bg-green-100", color: "text-green-600", title: p.feature1Title, description: p.feature1Description },
    { icon: Shield, bg: "bg-blue-50 group-hover:bg-blue-100", color: "text-blue-600", title: p.feature2Title, description: p.feature2Description },
    { icon: FileText, bg: "bg-purple-50 group-hover:bg-purple-100", color: "text-purple-600", title: p.feature3Title, description: p.feature3Description },
    { icon: Clock, bg: "bg-amber-50 group-hover:bg-amber-100", color: "text-amber-600", title: p.feature4Title, description: p.feature4Description },
  ];
  return (
    <section className="bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-12 sm:w-12 ${item.bg}`}>
                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 sm:text-base">{item.title}</h3>
                  <p className="truncate text-xs text-gray-500 sm:text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export type HomeCoreFeaturesProps = {
  badge: string;
  title: string;
  description: string;
  learnMoreLabel: string;
  item1Title: string;
  item1Description: string;
  item2Title: string;
  item2Description: string;
  item3Title: string;
  item3Description: string;
};

export function HomeCoreFeaturesSection(props: HomeCoreFeaturesProps) {
  const p = props;
  const items = [
    { icon: Gavel, title: p.item1Title, description: p.item1Description },
    { icon: Users, title: p.item2Title, description: p.item2Description },
    { icon: FileText, title: p.item3Title, description: p.item3Description },
  ];
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600 sm:mb-4 sm:px-3 sm:py-1 sm:text-sm">
            {p.badge}
          </div>
          <h2 className="mb-4 font-serif text-2xl font-bold text-blue-900 sm:mb-6 sm:text-3xl md:text-4xl">{p.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">{p.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group transform rounded-xl border-t-4 border-blue-600 bg-white p-4 shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6 md:p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 p-4 transition-colors duration-300 group-hover:bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-6">
                  <Link href="#" className="group inline-flex items-center font-medium text-blue-600">
                    <span className="transition-all duration-300 group-hover:mr-2">{p.learnMoreLabel}</span>
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export type HomeStatsProps = {
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  stat4Value: string;
  stat4Label: string;
};

export function HomeStatsSection(props: HomeStatsProps) {
  const p = props;
  const stats = [
    { value: p.stat1Value, label: p.stat1Label },
    { value: p.stat2Value, label: p.stat2Label },
    { value: p.stat3Value, label: p.stat3Label },
    { value: p.stat4Value, label: p.stat4Label },
  ];
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="group text-center">
              <div className="mb-2 text-4xl font-bold text-blue-900 transition-colors duration-300 group-hover:text-blue-600 md:text-5xl">
                {s.value}
              </div>
              <div className="text-xs text-gray-600 sm:text-sm md:text-base">{s.label}</div>
              <div className="mx-auto mt-4 h-1 w-16 bg-blue-600 transition-all duration-500 group-hover:w-24"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type HomeFaqProps = {
  title: string;
  description: string;
  viewAllLabel: string;
  faq1: string;
  faq2: string;
  faq3: string;
  faq4: string;
  faq5: string;
};

export function HomeFaqSection(props: HomeFaqProps) {
  const p = props;
  const questions = [p.faq1, p.faq2, p.faq3, p.faq4, p.faq5];
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-4 font-serif text-2xl font-bold text-blue-900 sm:mb-6 sm:text-3xl md:text-4xl">{p.title}</h2>
          <p className="mx-auto max-w-2xl px-4 text-sm text-gray-700 sm:text-base md:text-lg">{p.description}</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={i} className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                <button className="flex w-full items-center justify-between p-6 text-left">
                  <span className="text-lg font-medium text-gray-900">{q}</span>
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
            >
              <span>{p.viewAllLabel}</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export type HomeCtaProps = {
  heading: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  newsletterHeading: string;
  newsletterDescription: string;
  emailPlaceholder: string;
  subscribeButtonLabel: string;
  disclaimerText: string;
};

export function HomeCtaSection(props: HomeCtaProps) {
  const p = props;
  return (
    <section className="relative overflow-hidden bg-blue-900 py-8 text-white sm:py-12 md:py-16 lg:py-24">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      <div className="container relative z-10 mx-auto grid items-center gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="mb-4 font-serif text-2xl font-bold leading-tight sm:mb-6 sm:text-3xl md:text-4xl">{p.heading}</h2>
          <p className="mb-6 text-sm text-blue-100 sm:mb-8 sm:text-base md:text-lg">{p.description}</p>
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-4">
            <Link
              href="#"
              className="group relative overflow-hidden rounded-md bg-white px-6 py-3 font-medium text-blue-900 transition-colors duration-300 hover:bg-gray-100"
            >
              <span className="relative z-10">{p.primaryButtonLabel}</span>
              <span className="absolute inset-0 -translate-x-full transform bg-gray-200 transition-transform duration-300 group-hover:translate-x-0"></span>
              <ArrowRight className="relative z-10 ml-2 inline-block h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#"
              className="rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-blue-900"
            >
              {p.secondaryButtonLabel}
            </Link>
          </div>
        </div>
        <div className="transform rounded-xl bg-blue-800 p-8 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
          <h3 className="mb-6 text-xl font-bold">{p.newsletterHeading}</h3>
          <p className="mb-6 text-blue-100">{p.newsletterDescription}</p>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder={p.emailPlaceholder}
                className="w-full rounded-md bg-white px-4 py-3 text-blue-900 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-md bg-white px-4 py-3 font-medium text-blue-900 transition-colors duration-300 hover:bg-gray-100"
            >
              <span className="relative z-10">{p.subscribeButtonLabel}</span>
              <span className="absolute inset-0 -translate-x-full transform bg-gray-200 transition-transform duration-300 group-hover:translate-x-0"></span>
            </button>
            <p className="text-sm text-blue-100">{p.disclaimerText}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export type HomeContactInfoProps = {
  visitTitle: string;
  visitAddress: string;
  visitActionLabel: string;
  callTitle: string;
  callPhone: string;
  callHours: string;
  callActionLabel: string;
  callHref: string;
  emailTitle: string;
  emailAddress: string;
  emailResponseTime: string;
  emailActionLabel: string;
  emailHref: string;
};

export function HomeContactInfoSection(props: HomeContactInfoProps) {
  const p = props;
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          <div className="group rounded-xl p-6 text-center transition-colors duration-300 hover:bg-gray-50">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{p.visitTitle}</h3>
            <p className="text-gray-600">{p.visitAddress}</p>
            <Link href="#" className="group mt-4 inline-flex items-center gap-2 font-medium text-blue-600">
              <span className="transition-all duration-300 group-hover:mr-2">{p.visitActionLabel}</span>
              <ExternalLink className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="group rounded-xl p-6 text-center transition-colors duration-300 hover:bg-gray-50">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{p.callTitle}</h3>
            <p className="text-gray-600">{p.callPhone}</p>
            <p className="text-gray-600">{p.callHours}</p>
            <Link href={p.callHref} className="group mt-4 inline-flex items-center gap-2 font-medium text-blue-600">
              <span className="transition-all duration-300 group-hover:mr-2">{p.callActionLabel}</span>
              <ExternalLink className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="group rounded-xl p-6 text-center transition-colors duration-300 hover:bg-gray-50">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{p.emailTitle}</h3>
            <p className="text-gray-600">{p.emailAddress}</p>
            <p className="text-gray-600">{p.emailResponseTime}</p>
            <Link href={p.emailHref} className="group mt-4 inline-flex items-center gap-2 font-medium text-blue-600">
              <span className="transition-all duration-300 group-hover:mr-2">{p.emailActionLabel}</span>
              <ExternalLink className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
