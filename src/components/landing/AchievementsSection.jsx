import { Users, Clock, BarChart3, Shield } from "lucide-react";
import { LANDING_DATA } from "../../constants/landingData";

const AchievementsSection = () => {
  const { achievements } = LANDING_DATA;

  // Icon mapping
  const iconMap = {
    Users,
    Clock,
    BarChart3,
    Shield,
  };

  return (
    <section className="section bg-gradient-to-br from-primary via-secondary to-primary text-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(238, 183, 74, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-accent rounded-full opacity-30 animate-spin"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-accent3 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-accent transform rotate-45 opacity-40 animate-bounce"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-header mb-6">
            {achievements.title.primary}
            <span className="text-gradient">
              {" "}
              {achievements.title.secondary}
            </span>
          </h2>
          <p className="text-body-large text-gray max-w-3xl mx-auto">
            {achievements.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.stats.map((stat) => {
            const IconComponent = iconMap[stat.icon];

            return (
              <div key={stat.id} className="group text-center">
                <div className="stats-card group-hover:scale-105">
                  <div
                    className={`icon-container bg-gradient-to-br ${stat.gradient} mx-auto mb-6 group-hover:scale-110`}
                  >
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <div className="text-5xl lg:text-6xl font-bold text-accent mb-4 group-hover:text-accent2 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <h3 className="text-sub-header mb-2">{stat.label}</h3>
                  <p className="text-body-small text-gray">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bars Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-section-header mb-8">Hiệu Suất Hệ Thống</h3>

            {achievements.progress.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{item.label}</span>
                  <span className="text-accent font-bold">
                    {item.percentage}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${item.gradient}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-effect p-8">
              <img
                src={achievements.visualImage}
                alt="Business team analyzing statistics"
                className="w-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-30 rounded-3xl"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-accent text-primary rounded-xl p-4 shadow-2xl animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold">2024</div>
                <div className="text-sm font-semibold">Năm Thành Lập</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white text-primary rounded-xl p-4 shadow-2xl animate-pulse">
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm font-semibold">Hỗ Trợ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
