import FooterBottomBar from "./FooterBottomBar";
import { Link } from "react-router";

const navLinks = [
  {
    heading: "Product",
    links: [
      { name: "Overview", href: "/overview" },
      { name: "Pricing", href: "/pricing" },
      { name: "Marketplace", href: "/marketplace" },
      { name: "Features", href: "/features" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { name: "Help", href: "/help" },
      { name: "Sales", href: "/sales" },
      { name: "Advertise", href: "/advertise" },
      { name: "Privacy", href: "/privacy" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="py-10 text-gray-200 bg-slate-950">
        <div className="container px-4 mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 list-none">
            <li className="lg:col-span-6 sm:col-span-2 space-y-4">
              <img
                src={"./logo.svg"}
                className="invert brightness-0"
                width={150}
                height={150}
                alt="Coffee Solutions"
              />
              <div>
                <p className="pt-3 pe-5 text-gray-200">
                  Cycls is a delightful tool for creating and monetizing AI
                  agents.
                </p>
              </div>
            </li>

            {navLinks.map(({ heading, links }) => (
              <li className="lg:col-span-2 sm:col-span-1" key={heading}>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {heading}
                </h3>
                <ul className="space-y-3 text-gray-200">
                  {links.map(({ name, href }) => (
                    <li key={name}>
                      <Link to={href} className="hover:text-cyan-400">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <FooterBottomBar />
    </>
  );
};

export default Footer;
