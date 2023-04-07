import Link from "next/link";
import styles from "@/styles/Home.module.css";
import common from "@/styles/common.module.css";
import Image from "next/image";

export default function index() {
  return (
    <footer className={[styles.footer,common.w_100].join(" ")}>
      <div
        className={[
          common.container,
          common.h_100,
          common.d_flex_column,
          common.justify_evenly,
        ].join(" ")}
      >
        <div
          className={[
            common.d_flex,
            common.align_center,
            styles.footer_row_1,
          ].join(" ")}
        >
          <Link href={"/"}>
            <Image
              className={[common.cursor_pointer, styles.header_logo].join(" ")}
              src="/images/footer_logo.png"
              width="241"
              height="49"
              alt="LOGO"
              priority
            />
          </Link>

          <ul
            className={[
              styles.footer_links,
              common.d_flex,
              common.grow,
              common.align_center,
            ].join(" ")}
          >
            <li>
              <Link className={[common.header_font].join(" ")} href={"/"}>
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
          </ul>

          {/* Social Icons */}
          <div
            className={[
              styles.footer_icon_root,
              common.d_flex,
              common.gap_25,
            ].join(" ")}
          >
            <Link
              href={"/"}
              className={[common.d_flex, common.align_center].join(" ")}
            >
              <Image
                src="/images/facebook.png"
                width="24"
                height="23"
                alt="LOGO"
              />
            </Link>
            <Link
              href={"/"}
              className={[common.d_flex, common.align_center].join(" ")}
            >
              <Image
                src="/images/instagram.png"
                width="24"
                height="23"
                alt="LOGO"
              />
            </Link>

            <Link
              href={"/"}
              className={[common.d_flex, common.align_center].join(" ")}
            >
              <Image
                src="/images/twitter.png"
                width="24"
                height="23"
                alt="LOGO"
              />
            </Link>

            <Link
              href={"/"}
              className={[common.d_flex, common.align_center].join(" ")}
            >
              <Image
                src="/images/youtube.png"
                width="24"
                height="23"
                alt="LOGO"
              />
            </Link>

            <Link
              href={"/"}
              className={[common.d_flex, common.align_center].join(" ")}
            >
              <Image
                src="/images/linkdln.png"
                width="24"
                height="23"
                alt="LOGO"
              />
            </Link>
          </div>
        </div>

        <hr />
        <p
          className={[
            common.font_weight_400,
            common.font_size_16,
            styles.footer_copyright,
          ].join(" ")}
        >
          © Copyright 2022. All Rights Reserved. SnapIT.
        </p>
      </div>
    </footer>
  );
}
