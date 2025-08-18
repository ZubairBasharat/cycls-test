import { Link } from "react-router";

const FooterBottomBar = () => {
  return (
    <div className="bg-slate-950">
      <div className=" bg-slate-800 rounded-t-4xl items-center flex text-gray-200 py-5 px-6 justify-between">
        <span className="text-[16px]">
          &copy; 2025 Cycls. All rights reserved.
        </span>
        <div className="flex flex-col items-center">
          <ul className=" text-gray-200 flex space-x-4">
            <li>
              <Link className="hover:text-cyan-400" to={"#"}>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:text-cyan-400" to={"#"}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottomBar;
