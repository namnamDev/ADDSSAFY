import React, { ReactElement, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';

interface Props { }

function Footer({ }: Props): ReactElement {
  const [mode, setMode] = useState("auto");
  const router = useRouter();
  return (
    <div className="pt-12">
      <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('https://edu.ssafy.com/comm/login/SecurityLoginForm.do')}>
                        Edu SSAFY
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('https://job.ssafy.com/job/support/userPwdCheckForm.do')}>
                        Job SSAFY
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        href=""
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('https://meeting.ssafy.com/login')}
                      >
                        Meeting SSAFY
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('https://www.youtube.com/channel/UC_XI3ByFO1uZIIH-g-zJZiw')}>
                        Youtube SSAFY
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp')}>
                        SSAFY
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('www.naver.com')}>
                        Free components
                      </a>
                    </li>

                    <li className="mt-6">
                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('www.naver.com')}>
                        Blog
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('www.naver.com')}>
                        Changelog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        href=""
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('www.naver.com')}
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className="mt-6">
                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 cursor-pointer" onClick={() => router.push('www.naver.com')}>
                        Terms of service
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                  <div className="flex items-center mb-6">
                    <span>
                      <FaFacebook />
                      <FaTwitter />
                      <FaYoutube />
                      <FaGithub />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex flex-col justify-center items-center">
          <Image
            src="/images/ssafy.png"
            height="100"
            width="100"
            alt=""
          ></Image>
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50 cursor-pointer">
            2021 우리의 마지막 프로젝트, 싸피에 더하다.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
