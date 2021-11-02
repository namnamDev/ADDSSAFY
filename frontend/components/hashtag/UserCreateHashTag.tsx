import React, { ReactElement, useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import axios from "axios";
const filters: filters[] = [
  {
    id: "can",
    name: "할 수 있는 기술스택",
    options: [],
  },
  {
    id: "want",
    name: "하고 싶은 기술스택",
    options: [],
  },
];
interface Props {
  onCanChanged: (value: number[]) => void;
  onWantChanged: (value: number[]) => void;
}

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
function UserCreateHashTag({ onCanChanged, onWantChanged }: Props): ReactElement {
  const clonedeep = require("lodash.clonedeep");
  const [can, setCan] = useState<number[]>([]);
  const [want, setWant] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [searchList, setSearchList] = useState<number[]>([]);
  const check = (section: any, option: any) => {
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
    } else if (section === "want") {
      // 추가하는부분
      if (option.check === false) {
        option.check = true;
        setWant([...want, option.hashTagPK]);
      }
      // 빼는부분
      else if (option.check === true) {
        option.check = false;
        const result = want.filter((value: any) => value != option.hashTagPK);
        console.log(result);
        setWant(result);
      }
    }
  };
  const getHashTagList = () => {
    axios.get("/api/search/hashtag").then(function (res: any) {
      // 할 수 있다.can
      filters[0].options.push(...clonedeep(res.data.data.BE));
      filters[0].options.push(...clonedeep(res.data.data.FE));
      filters[0].options.push(...clonedeep(res.data.data.DEVOPS));
      filters[0].options.push(...clonedeep(res.data.data.FOUR));
      filters[0].options.push(...clonedeep(res.data.data.ETC));
      // filters[0].options.push(...clonedeep(res.data.data.GOODBADGE));
      // 하고싶은 기술스택 want
      filters[1].options.push(...clonedeep(res.data.data.BE));
      filters[1].options.push(...clonedeep(res.data.data.FE));
      filters[1].options.push(...clonedeep(res.data.data.DEVOPS));
      filters[1].options.push(...clonedeep(res.data.data.FOUR));
      filters[1].options.push(...clonedeep(res.data.data.ETC));
      // filters[1].options.push(...clonedeep(res.data.data.GOODBADGE));
      filters.map((value) => {
        value.options.map((val) => {
          val.check = false;
        });
      });
    });
  };
  useEffect(() => {
    getHashTagList();
    setSearchList([]);
  }, [index]);
  useEffect(() => {
    onCanChanged([...can]);
  }, [can]);
  useEffect(() => {
    onWantChanged([...want]);
  }, [want]);
  return (
    <div className="bg-white shadow-md">
      <div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-5 pb-6 border-b border-gray-200">
            <h1 className="text-lg  tracking-tight text-gray-900">기술스택 등록</h1>
          </div>
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className=" gap-x-8 gap-y-10">
              {/* Filters */}
              <form className="">
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
                                  onClick={() => check(section.name, option)}
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
