import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
} from "lucide-react";
import { LANDING_DATA } from "../../constants/landingData";

const TeamSection = () => {
  const { team } = LANDING_DATA;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Split members into slides (3 per slide)
  const slides = [];
  for (let i = 0; i < team.members.length; i += 3) {
    slides.push(team.members.slice(i, i + 3));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="section bg-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent4 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-medium-background rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-header text-primary mb-6">
            {team.title.primary}
            <span className="text-gradient"> {team.title.secondary}</span>
          </h2>
          <p className="text-body-large text-gray max-w-3xl mx-auto">
            {team.description}
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {slide.map((member) => (
                      <div
                        key={member.id}
                        className={`group feature-card ${
                          member.isTeamCard
                            ? "bg-gradient-to-br from-primary to-secondary text-light"
                            : ""
                        }`}
                      >
                        <div className="text-center">
                          <div className="relative mx-auto mb-6">
                            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-accent group-hover:border-accent2 transition-colors duration-300">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-white">
                              {member.isTeamCard ? (
                                <Users className="text-white text-sm" />
                              ) : (
                                <CheckCircle className="text-white text-sm" />
                              )}
                            </div>
                          </div>
                          <h3 className="text-sub-header text-primary mb-2">
                            {member.name}
                          </h3>
                          <p className="text-accent font-semibold mb-4">
                            {member.position}
                          </p>
                          <p className="text-body text-gray mb-6">
                            {member.description}
                          </p>
                          {member.isTeamCard ? (
                            <Link to="/team-members" className="btn-primary">
                              <ArrowRight className="mr-2" />
                              Xem Tất Cả
                            </Link>
                          ) : (
                            <div className="flex justify-center space-x-4">
                              <a
                                href={member.linkedin}
                                className="w-10 h-10 bg-light rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover-scale"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                              </a>
                              <a
                                href={member.email}
                                className="w-10 h-10 bg-light rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover-scale"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-primary hover:bg-accent hover:text-white group hover-scale"
          >
            <ChevronLeft className="group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-primary hover:bg-accent hover:text-white group hover-scale"
          >
            <ChevronRight className="group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Carousel Navigation Dots */}
          <div className="flex items-center justify-center mt-8">
            <ul className="flex items-center justify-center gap-3">
              {slides.map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => goToSlide(index)}
                    className={`h-5 w-5 rounded-full cursor-pointer transition-colors ${
                      index === currentSlide ? "bg-accent" : "bg-gray"
                    }`}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 text-center bg-white rounded-3xl p-12 shadow-lg border border-light-border">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-section-header text-primary mb-6">
              {team.cta.title}
            </h3>
            <p className="text-body-large text-gray mb-8">
              {team.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {team.cta.buttons.map((button, index) => (
                <Link
                  key={index}
                  to={button.href}
                  className={`inline-flex items-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    button.variant === "primary"
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                >
                  {button.variant === "primary" ? (
                    <>
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                      {button.text}
                    </>
                  ) : (
                    <>
                      <Users className="mr-3" />
                      {button.text}
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
