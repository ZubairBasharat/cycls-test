import { useTypewriter } from "@/hooks/useTypewriter";
import { CheckCircle, ExternalLink } from "lucide-react";

const DeveloperSection = ({ isVisible }: { isVisible: boolean }) => {
  const codeSnippets = [
    `import cycls

@cycls.agent
def my_ai_agent(query: str) -> str:
    # Your AI logic here
    return process_query(query)

# That's it! Your agent is now:
# ✅ Deployed as a web app
# ✅ Has a REST API
# ✅ Ready for monetization`,

    `import cycls

@cycls.agent
def weather_bot(city: str) -> str:
    # Fetch live weather data
    forecast = get_weather(city)
    return f"The weather in {city} is {forecast}"

# That's it! Your agent is now:
# ✅ Answers weather queries
# ✅ Accessible via REST API
# ✅ Ready for integration anywhere`,
  ];

  const text = useTypewriter(codeSnippets, 40, 2000);

  return (
    <section
      id="developers"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-transparent to-purple-900/10"></div>

      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                A{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Zero-Config Dream
                </span>
                <br />
                for Builders.
              </h2>

              <div className="space-y-6 mb-8">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Cycls is built by developers, for developers. Our open-source
                  core gives you ultimate flexibility, while our zero-config
                  philosophy removes all the boilerplate.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  The Python SDK is all you need to learn. With perfect dev/prod
                  parity, what you build locally is exactly what scales globally
                  on our serverless infrastructure.
                </p>
              </div>

              <button className="group bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-3">
                Read the Docs
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-2 text-gray-400 text-sm">agent.py</span>
                </div>

                <pre className="text-green-400 text-sm leading-relaxed whitespace-pre-wrap">
                  {text}
                </pre>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                <CheckCircle className="w-4 h-4 inline mr-1" />
                Zero Config
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
