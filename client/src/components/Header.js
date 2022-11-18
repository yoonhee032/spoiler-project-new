import { Link } from "react-router-dom";

import tw from "tailwind-styled-components";
import { ReactComponent as Cookie } from "../assets/spoilerLogo.svg";

const DivA = tw.a`
    mr-5 
    hover:text-gray-900
`;

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link to="/">
            <Cookie />
          </Link>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <DivA>
            <Link to="/survey">Survey</Link>
          </DivA>
          <DivA>
            <Link to="/map">Map</Link>
          </DivA>
          <DivA>Third Link</DivA>
        </nav>
      </div>
    </header>
  );
}
