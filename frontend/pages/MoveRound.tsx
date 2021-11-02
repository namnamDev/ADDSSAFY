import React, { ReactElement } from "react";
import { useRouter } from "next/router";

interface Props {}

function MoveRound({}: Props): ReactElement {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <ul className="manage_main_ul">
        <li
          className="manage_main_li"
          onClick={() =>
            router.push("https://www.samsung.com/sec/aboutsamsung/home/")
          }
        >
          SAMSUNG
        </li>
        <li
          className="manage_main_li"
          onClick={() => router.push("https://www.navercorp.com/naver/company")}
        >
          NAVER
        </li>
        <li
          className="manage_main_li"
          onClick={() => router.push("https://www.kakaocorp.com/page/")}
        >
          Kakao
        </li>
        <li
          className="manage_main_li"
          onClick={() => router.push("https://linepluscorp.com/company/info")}
        >
          LINE
        </li>
        <li
          className="manage_main_li"
          onClick={() =>
            router.push(
              "https://www.aboutcoupang.com/ko/?gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_cTWqCF-LAuNXLvn9WRuJ3It0Vh6xad0_Pwp8NPK1-zYla6FwUUJFoaAokyEALw_wcB"
            )
          }
        >
          coupang
        </li>
        <li
          className="manage_main_li"
          onClick={() => router.push("https://www.aboutamazon.com/")}
        >
          Amazon
        </li>
        <li
          className="manage_main_li"
          onClick={() => router.push("https://about.google/intl/en-GB/")}
        >
          Google
        </li>
        <li
          className="manage_main_li"
          onClick={() =>
            router.push(
              "https://www.ibm.com/kr-ko?utm_content=SRCWW&p1=Search&p4=43700059792962876&p5=e&gclsrc=aw.ds&gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_dja9JrkcTWde_fhc0r8lzhvd6Wma2vbiA0QTSjlMZ9DvI_I5DAu6waAvuJEALw_wcB"
            )
          }
        >
          IBM
        </li>
        <li
          className="manage_main_li"
          onClick={() =>
            router.push("https://www.huawei.com/en/corporate-information")
          }
        >
          HUAWEI
        </li>
        <li
          className="manage_main_li"
          onClick={() =>
            router.push(
              "https://corporate.delltechnologies.com/en-us/about-us/who-we-are.htm"
            )
          }
        >
          Dell
        </li>
        <li
          className="manage_main_li"
          onClick={() => router.push("https://www.microsoft.com/en-us/about")}
        >
          Microsoft
        </li>
        <li
          className="manage_main_li"
          onClick={() => router.push("https://www.apple.com/business/")}
        >
          Apple
        </li>
      </ul>
    </div>
  );
}

export default MoveRound;
