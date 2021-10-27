import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
interface Props {}

function Main({}: Props): ReactElement {
  const router = useRouter();
  const [click, setclick] = useState<boolean>(false);
  setTimeout(() => {
    setclick(true);
  }, 3900);
  return (
    <div>
      <div className="animation01 overflow-hidden">
        <div className="rhombus_small">
          <div className="rhombus">
            <div className="border_box">
              <span className="line line01" />
              <span className="line line02" />
              <span className="line line03" />
              <span className="line line04" />
              <span className="circle circle01" />
              <span className="circle circle02" />
              <span className="circle circle03" />
              <span className="circle circle04" />
              <span className="animation_line animation_line01" />
              <span className="animation_line_wrapper animation_line02_wrapper">
                <span className="animation_line animation_line02" />
              </span>
              <span className="animation_line animation_line03" />
              <span className="animation_line_wrapper animation_line04_wrapper">
                <span className="animation_line animation_line04" />
              </span>
              <span className="animation_line animation_line05" />
              <span className="animation_line_wrapper animation_line06_wrapper">
                <span className="animation_line animation_line06" />
              </span>
              <span className="animation_line animation_line07" />
              <span className="animation_line_wrapper animation_line08_wrapper">
                <span className="animation_line animation_line08" />
              </span>
            </div>
            <div className="wave">
              <div className="wave_wrapper">
                <div className="wave_box" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animation02">
        <div className="name">
          {click ? (
            <p onClick={() => router.push(`/ManageMain`)}>+ SSAFY</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Main;
