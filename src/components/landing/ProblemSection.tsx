const ProblemSection = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section
      id="problem"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-orange-900/10"></div>

      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-8">
              The Gap Between a{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Brilliant Agent
              </span>
              <br />
              and a{" "}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Viable Business
              </span>
              <br />
              is Immense.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                <p className="text-xl text-gray-300 leading-relaxed">
                  You've built a powerful AI agent. But turning it into a real,
                  commercial product is a maze of infrastructure, frontend
                  boilerplate, authentication, and payment integrations.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                <p className="text-xl text-gray-300 leading-relaxed">
                  This friction kills speed and innovation. Cycls is the
                  platform designed to close that gap instantly.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl p-8 backdrop-blur-lg border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-red-400">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span>Complex Infrastructure Setup</span>
                  </div>
                  <div className="flex items-center gap-3 text-orange-400">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span>Frontend Development Overhead</span>
                  </div>
                  <div className="flex items-center gap-3 text-yellow-400">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span>Authentication & Security</span>
                  </div>
                  <div className="flex items-center gap-3 text-red-400">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span>Payment Integration Complexity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
