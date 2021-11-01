import React, { ReactElement, useState, useEffect } from "react";
import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import UserHashTag from "../components/hashtag/UserHashTag";
import TeamHashTag from "../components/hashtag/TeamHashTag";
import TeamList from "../components/Team/TeamList";
import TeamDump from "../dummy/json/teamDump.json";

const filters = [
  {
    id: 'can',
    name: 'can',
    options: [
      { value: 'Spring', label: 'Spring', checked: false },
      { value: 'Django', label: 'Django', checked: false },
      { value: 'OracleDB', label: 'OracleDB', checked: false },
      { value: 'JPA', label: 'JPA', checked: false },
      { value: 'QueryDSL', label: 'QueryDSL', checked: false },
      { value: 'Mybatis', label: 'Mybatis', checked: false },
      { value: 'STS', label: 'STS', checked: false },
      { value: 'Intellij', label: 'Intellij', checked: false },
      { value: 'Vue', label: 'Vue', checked: false },
      { value: 'TypeScript', label: 'TypeScript', checked: false },
      { value: 'Bootstrap', label: 'Bootstrap', checked: false },
      { value: 'JavaScript', label: 'JavaScript', checked: false },
      { value: 'Node.Js', label: 'Node.Js', checked: false },
      { value: 'Jenkins', label: 'Jenkins', checked: false },
      { value: 'AI', label: 'AI', checked: false },
      { value: 'BigData', label: 'BigData', checked: false },
      { value: 'BlockChain', label: 'BlockChain', checked: false },
      { value: 'IOT', label: 'IOT', checked: false },
      { value: 'UCC', label: 'UCC', checked: false },
      { value: 'PPT', label: 'PPT', checked: false },
      { value: 'Presentation', label: 'Presentation', checked: false },
    ],
  },
  {
    id: 'want',
    name: 'want',
    options: [
      { value: 'Spring', label: 'Spring', checked: false },
      { value: 'Django', label: 'Django', checked: false },
      { value: 'OracleDB', label: 'OracleDB', checked: false },
      { value: 'JPA', label: 'JPA', checked: false },
      { value: 'QueryDSL', label: 'QueryDSL', checked: false },
      { value: 'Mybatis', label: 'Mybatis', checked: false },
      { value: 'STS', label: 'STS', checked: false },
      { value: 'Intellij', label: 'Intellij', checked: false },
      { value: 'Vue', label: 'Vue', checked: false },
      { value: 'TypeScript', label: 'TypeScript', checked: false },
      { value: 'Bootstrap', label: 'Bootstrap', checked: false },
      { value: 'JavaScript', label: 'JavaScript', checked: false },
      { value: 'Node.Js', label: 'Node.Js', checked: false },
      { value: 'Jenkins', label: 'Jenkins', checked: false },
      { value: 'AI', label: 'AI', checked: false },
      { value: 'BigData', label: 'BigData', checked: false },
      { value: 'BlockChain', label: 'BlockChain', checked: false },
      { value: 'IOT', label: 'IOT', checked: false },
      { value: 'UCC', label: 'UCC', checked: false },
      { value: 'PPT', label: 'PPT', checked: false },
      { value: 'Presentation', label: 'Presentation', checked: false },
    ],
  },
  {
    id: 'except',
    name: 'except',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: false },
    ],
  },
]
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
interface Props { }

interface list {
  hashTagPK: number;
  title: string;
  prop: string;
  image: string;
}

function Search({ }: Props): ReactElement {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [can, setCan] = useState<list[]>([]);
  const [want, setWant] = useState<list[]>([]);
  const [except, setExcept] = useState<list[]>([]);
  const [index, setIndex] = useState(0);
  const [searchList, setSearchList] = useState<number[]>([]);
  const [checked, setchecked] = useState<any>([])

  const check = (section: any, option: any) => {
    if (section === "can") {
      // 추가하는부분
      if (option.checked === false) {
        option.checked = true
        console.log(option.checked)
      }
      // 빼는부분
      else if (option.checked === true) {
        option.checked = false
        console.log(option.checked)
      }
    }
    else if (section === "want") {
      // 추가하는부분
      if (option.checked === false) {
        option.checked = true
        console.log(option.checked)
      }
      // 빼는부분
      else if (option.checked === true) {
        option.checked = false
        console.log(option.checked)
      }
    }

  }
  const search = () => {
    console.log(can);
    console.log(want);
    console.log(except);
    setSearchList(TeamDump);
  };
  useEffect(() => {
    setSearchList([]);
  }, [index]);
  return (
    <div className="bg-white">
      <div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-5 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">팀 검색</h1>
          </div>
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
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  onClick={() => check(section.name, option)}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
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
                  <div className="font-bold text-2xl mb-4">검색 결과</div>
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

export default Search;
