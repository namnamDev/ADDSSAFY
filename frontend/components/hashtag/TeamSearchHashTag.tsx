import React, { ReactElement, useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import TeamList from "../Team/TeamList";
import TeamDump from "../../dummy/json/teamDump.json";
import axios from "axios";

const filters: filters[] = [
  {
    id: "can",
    name: "can",
    options: [],
  },
];
interface Props {}

interface list {
  hashTagPK: number;
  hashTagName: string;
  hashTagProp: string;
  check: boolean;
}
interface filters {
  id: string;
  name: string;
  options: list[];
}
function TeamSearchHashTag({}: Props): ReactElement {
  const clonedeep = require("lodash.clonedeep");
  const [can, setCan] = useState<list[]>([]);
  const [index, setIndex] = useState(0);
  const [searchList, setSearchList] = useState<number[]>([]);
  const check = (section: any, option: any) => {
    console.log(section);
    console.log(option);
    if (section === "can") {
      // 추가하는부분
      if (option.check === false) {
        option.check = !option.check;
        setCan([...can, option.hashTagPK]);
      }
      // 빼는부분
      else if (option.check === true) {
        option.check = !option.check;
        const result = can.filter((value:any) => value != option.hashTagPK);
        console.log(result);
        setCan(result);
      }
    }
  };
  const search = () => {
    console.log(can);
    setSearchList(TeamDump);
  };
  const getHashTagList = () => {
    axios.get("/api/search/hashtag").then(function (res: any) {
      // 할 수 있다.can
      filters[0].options.push(...clonedeep(res.data.data.BE));
      filters[0].options.push(...clonedeep(res.data.data.FE));
      filters[0].options.push(...clonedeep(res.data.data.DEVOPS));
      filters[0].options.push(...clonedeep(res.data.data.FOUR));
      filters[0].options.push(...clonedeep(res.data.data.ETC));
      filters[0].options.push(...clonedeep(res.data.data.GOODBADGE));

      filters.map((value) => {
        value.options.map((val) => {
          val.check = false;
        });
      });
    });
  };
  useEffect(() => {
    if (filters[0].options.length == 0) getHashTagList();
  }, []);
  return (
    <div className="bg-white">
      <div>
        <main className="max-w-7xl mx-auto px-6">
          {/* <div className="relative z-10 flex items-baseline justify-between pt-5 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">팀 검색</h1>
          </div> */}
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
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
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.hashTagPK + section.name + optionIdx}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.hashTagPK}
                                  type="checkbox"
                                  defaultChecked={option.check}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  onClick={() => check(section.name, option)}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
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
                <button
                  type="button"
                  className=" px-8 py-2 bg-blue-600 text-white rounded-lg  shadow-sm hover:bg-blue-500 focus:ring-2 focus:ring-indigo-200 m-2 "
                  onClick={search}
                >
                  검색
                </button>
              </form>
              <div className="lg:col-span-3">
                <div className="">
                  <div className="font-bold text-lg mb-4">검색 결과</div>
                  {index === 0 ? <TeamList list={searchList} /> : "교육생 검색"}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default TeamSearchHashTag;