import React, { ReactElement, useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import axios from "axios";
const filters: filters[] = [
  {
    id: "can",
    name: "기술스택 설정",
    options: [],
  },
];

interface list {
  hashTagPK: number;
  hashTagName: string;
  hashTagProp: string;
  check: boolean;
}
interface Props {
  onCanChanged: (value: number[]) => void;
  userHashTag: list[][];
}

interface filters {
  id: string;
  name: string;
  options: list[];
}
function UserCreateHashTag({ onCanChanged, userHashTag }: Props): ReactElement {
  const clonedeep = require("lodash.clonedeep");
  const [can, setCan] = useState<number[]>([]);
  const check = (option: any) => {
    // 추가하는부분
    if (option.check === false) {
      option.check = !option.check;
      setCan([...can, option.hashTagPK]);
    }
    // 빼는부분
    else if (option.check === true) {
      option.check = !option.check;
      const result = can.filter((value: any) => value != option.hashTagPK);
      setCan(result);
    }
  };
  const getHashTagList = () => {
    axios.get("/api/search/hashtag").then(function (res: any) {
      filters[0].options.push(...clonedeep(res.data.data.BE));
      filters[0].options.push(...clonedeep(res.data.data.FE));
      filters[0].options.push(...clonedeep(res.data.data.DEVOPS));
      filters[0].options.push(...clonedeep(res.data.data.FOUR));
      filters[0].options.push(...clonedeep(res.data.data.ETC));

      filters.map((value) => {
        value.options.map((val) => {
          val.check = false;
        });
      });

      // 기존의 해쉬태그 받아오기
      for (const key in userHashTag) {
        userHashTag[key].map((hashTag) => {
          filters[0].options.map((value) => {
            if (hashTag.hashTagPK === value.hashTagPK) {
              value.check = true;
              can.push(value.hashTagPK);
            }
          });
        });
      }
    });
  };
  useEffect(() => {
    getHashTagList();
    return function cleanup() {
      filters[0].options.length = 0;
    };
  }, [userHashTag]);
  useEffect(() => {
    onCanChanged([...can]);
  }, [can]);
  return (
    <div className="bg-white shadow-md">
      <div>
        <main className="max-w-7xl mx-auto px-6">
          <div className=""></div>
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className=" gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="">
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="py-6 w-5/6 mx-auto">
                    {({ open }) => (
                      <>
                        <p className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </p>
                        <Disclosure.Panel className="pt-6">
                          <div className="grid grid-cols-5">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.hashTagPK + section.name + optionIdx}
                                className="flex items-center "
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.hashTagPK}
                                  type="checkbox"
                                  defaultChecked={option.check}
                                  className="h-4 w-4 mx-2 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  onClick={() => check(option)}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className={"text-sm text-gray-500"}
                                >
                                  {option.hashTagName}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default UserCreateHashTag;
