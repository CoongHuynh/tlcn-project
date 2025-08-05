import { Link } from "react-router-dom";
import { BarChart3, Users } from "lucide-react";
import { LANDING_DATA } from "../../constants/landingData";

const HeroSection = () => {
  const { hero } = LANDING_DATA;

  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-light min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Digital Marketing background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 lg:left-20 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 lg:right-32 w-2 h-2 bg-accent3 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-32 w-4 h-4 bg-accent rounded-full opacity-60 animate-pulse"></div>

      <div className="container z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero">
                <span className="text-gradient">{hero.title.primary}</span>
                <br />
                <span className="text-light">{hero.title.secondary}</span>
              </h1>

              <p className="text-body-large text-gray">{hero.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {hero.ctaButtons.map((button, index) => (
                <Link
                  key={index}
                  to={button.href}
                  className={`group flex items-center justify-center ${
                    button.variant === "primary"
                      ? "btn-cta-large"
                      : "btn-secondary"
                  }`}
                >
                  {button.variant === "primary" ? (
                    <BarChart3 className="mr-3 group-hover:animate-pulse" />
                  ) : (
                    <Users className="mr-3 group-hover:animate-pulse" />
                  )}
                  {button.text}
                </Link>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <img
                  src={hero.heroImage}
                  alt="Digital Marketing development"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-light rounded-xl p-4 shadow-xl border border-light-border backdrop-blur-sm animate-bounce">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="text-accent" />
                  <span className="text-primary font-semibold text-sm">
                    Timesheet
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-light rounded-xl p-4 shadow-xl border border-light-border backdrop-blur-sm animate-pulse">
                <div className="flex items-center space-x-2">
                  <Users className="text-accent" />
                  <span className="text-primary font-semibold text-sm">
                    Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C150,100 350,0 600,0 C850,0 1050,100 1200,120 L1200,120 L0,120 Z"
            fill="#f2f2ff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
