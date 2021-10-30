import React, { ReactElement, useState,useEffect } from "react";
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
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'want',
    name: 'want',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
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
      { value: '40l', label: '40L', checked: true },
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

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <div className="">
                  <div className="font-bold text-2xl mb-4">검색 결과</div>
                  {index === 0 ? <TeamList list={searchList} /> : "교육생 검색"}
                </div>
                {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" /> */}
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Search;
