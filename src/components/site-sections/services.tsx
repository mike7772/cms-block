/**
 * Content-editable section components reproducing the OCCMS public portal's
 * /services page. ServicesFeeCalculator is intentionally NOT here — it embeds
 * a live, app-specific widget, so it's registered locally in the consuming
 * portal app instead (see that app's lib/cms/puck-config.tsx).
 */

import {
  FileText,
  Users,
  Calculator,
  Search,
  Calendar,
  Shield,
  Globe,
  Building,
  Scale,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export type ServicesHeroProps = {
  title: string;
  description: string;
};

export function ServicesHeroSection(props: ServicesHeroProps) {
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

function bulletsToList(text: string | undefined | null): string[] {
  if (typeof text !== "string") return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export type ServicesGridProps = {
  service1Title: string;
  service1Description: string;
  service1Features: string;
  service2Title: string;
  service2Description: string;
  service2Features: string;
  service3Title: string;
  service3Description: string;
  service3Features: string;
  service4Title: string;
  service4Description: string;
  service4Features: string;
  service5Title: string;
  service5Description: string;
  service5Features: string;
  service6Title: string;
  service6Description: string;
  service6Features: string;
};

export function ServicesGridSection(props: ServicesGridProps) {
  const p = props;
  const services = [
    { icon: FileText, title: p.service1Title, description: p.service1Description, features: bulletsToList(p.service1Features) },
    { icon: Search, title: p.service2Title, description: p.service2Description, features: bulletsToList(p.service2Features) },
    { icon: Calculator, title: p.service3Title, description: p.service3Description, features: bulletsToList(p.service3Features) },
    { icon: Calendar, title: p.service4Title, description: p.service4Description, features: bulletsToList(p.service4Features) },
    { icon: Users, title: p.service5Title, description: p.service5Description, features: bulletsToList(p.service5Features) },
    { icon: Shield, title: p.service6Title, description: p.service6Description, features: bulletsToList(p.service6Features) },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl border border-blue-100 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition-colors group-hover:bg-blue-200">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-blue-900 transition-colors group-hover:text-blue-700">
                    {service.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export type ServicesAdditionalProps = {
  heading: string;
  description: string;
  item1Title: string;
  item1Description: string;
  item2Title: string;
  item2Description: string;
  item3Title: string;
  item3Description: string;
  item4Title: string;
  item4Description: string;
};

export function ServicesAdditionalSection(props: ServicesAdditionalProps) {
  const p = props;
  const items = [
    { icon: BookOpen, title: p.item1Title, description: p.item1Description },
    { icon: Building, title: p.item2Title, description: p.item2Description },
    { icon: Scale, title: p.item3Title, description: p.item3Description },
    { icon: Globe, title: p.item4Title, description: p.item4Description },
  ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-blue-900 md:text-4xl">{p.heading}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">{p.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="rounded-xl bg-blue-50 p-6 text-center">
                  <Icon className="mx-auto mb-3 h-8 w-8 text-blue-600" />
                  <h3 className="mb-2 font-bold text-blue-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
