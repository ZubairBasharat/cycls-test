import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { scrollToSection } from "@/lib/utils";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { Link } from "react-router";
import { Button } from "../ui/button";

const navItems = [
  {
    name: "Home",
    href: "hero",
    icon: "home",
  },
  {
    name: "Problem",
    href: "problem",
    icon: "alert-triangle",
  },
  {
    name: "How It Works",
    href: "how-it-works",
    icon: "workflow",
  },
  {
    name: "For Developers",
    href: "developers",
    icon: "code-2",
  },
  {
    name: "Enterprise",
    href: "enterprise",
    icon: "building-2",
  },
];

const MobileSidebar = () => {
  return (
    <Sidebar style={{ border: 0 }}>
      <SidebarHeader className="pt-7 px-3">
        <img
          src={"./logo.svg"}
          className="invert brightness-0"
          width={90}
          alt="Coffee Solutions"
        />
      </SidebarHeader>
      <SidebarContent className="mt-2 pt-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className="mb-4"
                    onClick={() => scrollToSection(item.href)}
                  >
                    <Link
                      to="#"
                      className={` relative flex items-center space-x-3 z-10  rounded-full overflow-visible`}
                    >
                      <DynamicIcon
                        name={item.icon as IconName}
                        className="relative z-10"
                      />
                      <span className="relative z-10 text-base">
                        {item.name}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          type="button"
          className="cursor-pointer bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        >
          Get Started
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MobileSidebar;
