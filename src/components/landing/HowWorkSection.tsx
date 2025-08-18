import { Code, DollarSign, Zap } from "lucide-react";

const HowWorkSection = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section
      id="how-it-works"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-blue-900/10"></div>

      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              From{" "}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Code to Customer
              </span>
              <br />
              in Three Steps.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Write Your Agent",
                description:
                  "Focus on what you do best. Write your agent's logic in a simple Python function. Our guided meta-agent can even help you get started, turning ideas into code even faster.",
                icon: <Code className="w-8 h-8" />,
                color: "from-green-400 to-emerald-400",
              },
              {
                step: "2",
                title: "Deploy Instantly",
                description:
                  "Add our @cycls.agent decorator to your function. That's it. Cycls automatically packages your agent into a full-stack, serverless application with a pre-built frontend and API.",
                icon: <Zap className="w-8 h-8" />,
                color: "from-blue-400 to-cyan-400",
              },
              {
                step: "3",
                title: "Monetize Immediately",
                description:
                  "Launch your subscription business in minutes. Our managed platform comes with a built-in user pool and monetization, allowing you to charge for your agent with a simple take-rate model.",
                icon: <DollarSign className="w-8 h-8" />,
                color: "from-purple-400 to-pink-400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 delay-${
                  index * 100
                } group`}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>

                <div
                  className={`text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}
                >
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorkSection;
