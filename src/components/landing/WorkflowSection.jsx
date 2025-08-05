import { CheckCircle } from "lucide-react";
import { LANDING_DATA } from "../../constants/landingData";

const WorkflowSection = () => {
  const { workflow } = LANDING_DATA;

  // Custom icons for workflow steps
  const getStepIcon = (iconName) => {
    switch (iconName) {
      case "Edit":
        return (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        );
      case "UserCheck":
        return (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        );
      case "Building":
        return (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        );
      case "CheckCircle":
        return <CheckCircle className="w-8 h-8 text-white" />;
      default:
        return null;
    }
  };

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent4 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-medium-background rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-header text-primary mb-6">
            {workflow.title.primary}
            <span className="text-gradient"> {workflow.title.secondary}</span>
          </h2>
          <p className="text-body-large text-gray max-w-3xl mx-auto">
            {workflow.description}
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent2 to-primary transform -translate-y-1/2 hidden lg:block"></div>

          {/* Workflow Steps */}
          <div className="grid lg:grid-cols-4 gap-8">
            {workflow.steps.map((step) => (
              <div key={step.id} className="group text-center">
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 relative z-10`}
                  >
                    {getStepIcon(step.icon)}
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full opacity-20 group-hover:scale-125 transition-all duration-500`}
                  ></div>
                </div>
                <div className="feature-card">
                  <h3 className="text-sub-header text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-body text-gray mb-4">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <span
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: step.color }}
                    ></span>
                    <span className="text-sm text-gray">{step.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
