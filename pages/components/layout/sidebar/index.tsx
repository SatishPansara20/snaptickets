import React from "react";
import { FiGlobe } from "react-icons/fi";

interface IProps {
  flag: boolean;
}

let silder_link: HTMLElement | null;
const Page = ({ flag }: IProps) => {
  React.useEffect(() => {
    // console.log(flag);
    if (window !== undefined) {
      silder_link = document.getElementById("silder_link");
    }
    if (flag && silder_link) {
      silder_link.classList.add("d-none");
      silder_link.classList.remove("d-flex");
    } else if (flag === false && silder_link) {
      silder_link.classList.add("d-flex");
      silder_link.classList.remove("d-none");
    }
  }, [flag]);

  return (
    <>
      <div className="sidebar_root d-flex gap-10">
        <div className="my-texy-2">
          {" "}
          <FiGlobe />
          <p id="silder_link" className="d-none">
            Earth
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
