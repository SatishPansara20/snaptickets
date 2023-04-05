import { ReactElement, ReactPortal } from "react";

import Header from "./header/index";
import Footer from "./footer/index";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

import React from "react";

import Sidebar from "./sidebar/index";

let flag = true;

// let sidebar_toggle: HTMLElement | null;
let sideBar: HTMLElement | null;
let silder_toggle_icon: HTMLElement | null;

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

export default function Layout({ children }: Props) {
  React.useEffect(() => {
    if (window !== undefined) {
      // sidebar_toggle = document.getElementById("sidebarToggle");
      sideBar = document.getElementById("sidebar");
      silder_toggle_icon = document.getElementById("silderToggleIcon");
    }
  }, []);

  const handleClick = () => {
    console.log(sideBar);

    if (flag && sideBar && silder_toggle_icon) {
      console.log(open);
      sideBar.style.width = "400px";
      silder_toggle_icon.classList.add("tr-90");
      flag = false;
    } else if (flag === false && sideBar && silder_toggle_icon) {
      sideBar.style.width = "40px";
      silder_toggle_icon.classList.remove("tr-90");
      console.log(close);

      flag = true;
    }
  };

  return (
    <>
      {/* <div className="d-flex root">
        <aside id="sidebar" className="aside">
          <button
            id="sidebarToggle"
            onClick={handleClick}
            className="w-100 d-flex justify-end absolute z-index-3"
          >
            <p id="silderToggleIcon" className="silder_toggle_icon">
              &gt;
            </p>
          </button>
          <Sidebar />
        </aside>

        <div className="root_main"> */}
      <Header />
      <main>{children}</main>
      <Footer />
      {/* </div>
      </div> */}
    </>
  );
}
