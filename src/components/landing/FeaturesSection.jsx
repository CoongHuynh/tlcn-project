import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Users,
  Calendar,
  Bell,
  Shield,
} from "lucide-react";
import { LANDING_DATA } from "../../constants/landingData";

const FeaturesSection = () => {
  const { features } = LANDING_DATA;

  // Icon mapping
  const iconMap = {
    BarChart3,
    Clock,
    Users,
    Calendar,
    Bell,
    Shield,
  };

  return (
    <section className="section bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-header text-primary mb-6">
            {features.title.primary}
            <span className="text-gradient"> {features.title.secondary}</span>
          </h2>
          <p className="text-body-large text-gray max-w-3xl mx-auto">
            {features.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.items.map((feature) => {
            const IconComponent = iconMap[feature.icon];

            return (
              <div key={feature.id} className="feature-card group">
                <div
                  className={`icon-container bg-gradient-to-br ${feature.gradient}`}
                >
                  <IconComponent className="text-2xl text-white" />
                </div>
                <h3 className="text-sub-header text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-body text-gray mb-6">
                  {feature.description}
                </p>
                <Link
                  to={feature.href}
                  className="inline-flex items-center text-accent font-semibold hover:text-accent2 transition-colors hover-translate"
                >
                  {feature.href === "#" ? "Tìm hiểu" : "Khám phá"}{" "}
                  <ArrowRight className="ml-2" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
