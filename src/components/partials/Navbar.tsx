import { scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";
import { DynamicIcon } from "lucide-react/dynamic";
import { useSidebar } from "../ui/sidebar";

const Navbar = () => {
  const { isMobile, toggleSidebar } = useSidebar();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <img
            src={"./logo.svg"}
            className="invert brightness-0"
            width={100}
            alt="Coffee Solutions"
          />
          {!isMobile && (
            <>
              <div className="hidden md:flex space-x-8 text-gray-300">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("problem")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Problem
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("developers")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  For Developers
                </button>
                <button
                  onClick={() => scrollToSection("enterprise")}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Enterprise
                </button>
              </div>
              <Button className="cursor-pointer bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Get Started
              </Button>
            </>
          )}
          {isMobile && (
            <Button
              variant="secondary"
              type="button"
              onClick={() => toggleSidebar()}
              className="w-11 h-11 rounded-full relative cursor-pointer overflow-hidden"
            >
              <DynamicIcon
                name="align-justify"
                className="size-5 rounded-full"
              />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
