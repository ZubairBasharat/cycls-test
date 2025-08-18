import { scrollToSection } from "@/lib/utils";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-cyan-500/20 via-transparent to-purple-500/20 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl bg-gradient-to-r bg-clip-text max-w-200 mx-auto  md:text-7xl font-bold mb-6 leading-tight from-cyan-400 via-purple-400 to-pink-400 text-transparent">
            <TypeAnimation
              sequence={[
                "Go from AI Agent to AI\nBusiness Instantly.",
                1500,
                " Turn Ideas into AI\nProducts Instantly.",
                1500,
              ]}
              speed={30}
              cursor={true}
              repeat={Infinity}
              wrapper="span"
            />
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Cycls is the definitive platform for commercial AI agents. Our
            open-source framework and managed cloud transform your Python code
            into a scalable, monetizable business with a single decorator.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-3">
              Start Building for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("problem")}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </button>
    </section>
  );
};

export default HeroSection;
