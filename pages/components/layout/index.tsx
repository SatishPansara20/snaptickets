import React from "react";
import { ReactElement, ReactPortal } from "react";
import { FiArrowRight } from "react-icons/fi";
import Header from "./header/index";
import Footer from "./footer/index";
import Sidebar from "./sidebar/index";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
type elementype = HTMLElement | null;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: React.ReactNode;
};

let sideBar: elementype;
let silder_toggle_icon: elementype;
let root_main: elementype;
let query: MediaQueryList | null;

export default function Layout({ children }: Props) {
  const [flag, setFlag] = React.useState(true);

  React.useEffect(() => {
    if (window !== undefined) {
      root_main = document.getElementById("rootMain");
      sideBar = document.getElementById("sidebar");
      silder_toggle_icon = document.getElementById("silderToggleIcon");
      query = window.matchMedia("(max-width: 400px)");
    }
  }, [flag]);

  const controlSidebar = (size: string) => {
    if (flag && sideBar && silder_toggle_icon) {
      silder_toggle_icon.classList.add("tr-90");
      sideBar.style.minWidth = size;
    } else if (sideBar && silder_toggle_icon) {
      sideBar.style.minWidth = size;
      silder_toggle_icon.classList.remove("tr-90");
    }
  };

  const handleClick = () => {
    if (query?.matches) {
      // If media query matches
      if (flag && root_main) {
        controlSidebar("60%");
        root_main.style.opacity = "0.6";
        setFlag(false);
      } else if (flag === false && root_main) {
        root_main.style.opacity = "1";
        controlSidebar("20px");
        setFlag(true);
      }
    } else {
      if (flag) {
        controlSidebar("250px");
        setFlag(false);
      } else {
        controlSidebar("70px");
        setFlag(true);
      }
    }
  };

  return (
    <>
      <div className="layout">
        <aside id="sidebar" className="aside">
          <button
            id="sidebarToggle"
            onClick={handleClick}
            className="w-100 d-flex justify-end align-center"
          >
            <FiArrowRight
              id="silderToggleIcon"
              className="silder_toggle_icon"
            />
          </button>
          <Sidebar flag={flag} />
        </aside>
        <div id="rootMain" className="root_main">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
