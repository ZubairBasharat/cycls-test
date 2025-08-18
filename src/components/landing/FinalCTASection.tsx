import { ArrowRight } from "lucide-react";

const FinalCTASection = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section
      id="cta"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-8xl font-bold mb-12">
            Ready to Launch Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              AI Business?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join the elite builders transforming ideas into profitable AI
            businesses with a single decorator.
          </p>

          <button className="group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-12 py-6 rounded-full text-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-3 mx-auto">
            Get Started for Free
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
