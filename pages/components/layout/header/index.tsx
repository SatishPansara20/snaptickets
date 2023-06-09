import Link from "next/link";
import styles from "@/styles/Home.module.css";
import common from "@/styles/common.module.css";
import Image from "next/image";
import React from "react";

type Props = {};

let toggleflag = true;

let navToggle: HTMLElement | null;
let navToggle_header_links: HTMLElement | null;

export default function Navigation({}: Props) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      navToggle = document.getElementById("navToggle");
      navToggle_header_links = document.getElementById(
        "navToggle_header_links"
      );
    }
  }, []);

  const handleClick = () => {
    const class_1 = `${common.d_none}`;

    const class_2 = `${styles.navToggle_header_link}`;

    if (toggleflag) {
      console.log("open");
      navToggle_header_links?.classList.remove(class_1);
      navToggle_header_links?.classList.add(class_2);
      toggleflag = false;
    } else {
      console.log("close");
      navToggle_header_links?.classList.remove(class_2);
      navToggle_header_links?.classList.add(class_1);
      toggleflag = true;
    }

  };

  const handleLinkClink = () => {
    toggleflag = false;
  };

  return (
    <>
      <header className={[styles.header].join(" ")}>
        <div
          className={[
            common.container,
            common.d_flex,
            common.align_center,
            styles.header_container,
          ].join(" ")}
        >
          <Link href={"/"}>
            <Image
              className={[common.cursor_pointer, styles.header_logo].join(" ")}
              src="/images/LOGO.png"
              width="241"
              height="49"
              alt="LOGO"
              priority
            />
          </Link>

          <ul
            className={[
              styles.header_links_display,
              common.grow,
              common.align_center,
              common.justify_evenly,
            ].join(" ")}
          >
            <li>
              <Link
                className={[common.header_font].join(" ")}
                href={"/screen/dashboard"}
              >
                Organizer
              </Link>
            </li>
            <li>
              <Link className={[common.header_font].join(" ")} href={"/"}>
                Venue
              </Link>
            </li>
            <li>
              <Link className={[common.header_font].join(" ")} href={"/"}>
                Events
              </Link>
            </li>
            <li>
              <form
                className={[
                  styles.headr_search_form,
                  common.d_flex,
                  common.align_center,
                ].join(" ")}
              >
                <figure
                  className={[common.d_flex, common.align_center].join(" ")}
                >
                  <Image
                    src="/images/search_icon.png"
                    width="24"
                    height="23"
                    alt="LOGO"
                  />
                </figure>

                <input
                  type="text"
                  placeholder="Search for events , Play Activites"
                />
              </form>
            </li>
          </ul>

          {/* Sign Up and Login */}
          <div className={[styles.header_btn_root].join(" ")}>
            <button
              className={[
                common.btn_common,
                common.btn_1,
                styles.header_btn,
              ].join(" ")}
            >
              SIGN UP
            </button>
            <button
              className={[
                common.btn_common,
                common.btn_2,
                styles.header_btn,
              ].join(" ")}
            >
              LOGIN
            </button>
          </div>

          {/* nav_toggle_btn */}

          <button
            id="navToggle"
            onClick={handleClick}
            className={[styles.nav_toggle_btn].join(" ")}
          >
            <Image
              className={[styles.toggle_image].join(" ")}
              src="/images/nav_toggle_icon.png"
              alt="toggle nav"
              width={25}
              height={25}
              priority
            />
          </button>
        </div>

        {/* nav Toggle */}

        <ul id="navToggle_header_links" className={common.d_none}>
          <li className={[common.d_inline_block, common.w_100].join(" ")}>
            <Link
              onClick={handleClick}
              href={"/screen/dashboard"}
              className={[
                common.header_font,
                common.w_100,
                common.d_flex,
                common.justify_center,
              ].join(" ")}
            >
              Organizer
            </Link>
          </li>

          <li className={[common.d_inline_block, common.w_100].join(" ")}>
            <Link
              onClick={handleClick}
              href=""
              className={[
                common.header_font,
                common.w_100,
                common.d_flex,
                common.justify_center,
              ].join(" ")}
            >
              Venue
            </Link>
          </li>

          <li className={[common.d_inline_block, common.w_100].join(" ")}>
            <Link
              onClick={handleClick}
              href=""
              className={[
                common.header_font,
                common.w_100,
                common.d_flex,
                common.justify_center,
              ].join(" ")}
            >
              Events
            </Link>
          </li>

          <li
            className={[
              common.d_flex,
              common.justify_center,
              common.w_100,
            ].join(" ")}
          >
            <button
              className={[
                common.btn_common,
                // common.btn_1,
                // styles.header_btn,
              ].join(" ")}
              onClick={handleClick}
            >
              SIGN UP
            </button>
          </li>

          <li
            className={[
              common.d_flex,
              common.justify_center,
              common.w_100,
            ].join(" ")}
          >
            <button
              className={[
                common.btn_common,
                // common.btn_2,
                // styles.header_btn,
              ].join(" ")}
              onClick={handleClick}
            >
              LOGIN
            </button>
          </li>

          <li
            className={[
              common.d_flex,
              common.justify_center,
              common.w_100,
            ].join(" ")}
          >
            <form
              className={[
                styles.headr_search_form,

                common.d_flex,
                common.align_center,
              ].join(" ")}
            >
              <figure
                onClick={handleClick}
                className={[common.d_flex, common.align_center].join(" ")}
              >
                <Image
                  src="/images/search_icon.png"
                  width="24"
                  height="23"
                  alt="LOGO"
                />
              </figure>

              <input
                type="text"
                placeholder="Search for events , Play Activites"
              />
            </form>
          </li>
        </ul>
      </header>
    </>
  );
}
