import { ArrowRight, CheckCircle, Shield, Users } from "lucide-react";

const EnterpriseSection = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <section
      id="enterprise"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 via-transparent to-red-900/10"></div>

      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              A Complete{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Commercial Engine
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>

              <h3 className="text-3xl font-bold mb-4">For Startups</h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                We provide a complete business-in-a-box, handling users,
                payments, and infrastructure so you can focus on your product.
              </p>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Built-in user management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Automatic payment processing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Serverless scaling
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8" />
              </div>

              <h3 className="text-3xl font-bold mb-4">For Enterprise</h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Our sovereign managed cloud, hosted in Dammam, offers a
                flexible, enterprise-ready platform to build foundational AI
                capabilities within the Kingdom.
              </p>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  Saudi Arabia data residency
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  Enterprise security & compliance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  Dedicated support
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-3 mx-auto">
              Contact Sales
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
