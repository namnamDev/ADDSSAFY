import React, { ReactElement } from 'react'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from '../components/basic/Navbar'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
interface Props {

}

function test({ }: Props): ReactElement {
  return (
    // bg - gradient - to - r from - yellow - 100 via - blue - 100 to - green - 100
    <div className="bg-opacity-0 min-h-screen">
      <Navbar />
      <div className="relative bg-white overflow-hidden mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-opacity-0 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <div className="block xl:inline">아직도 구글시트?</div>{' '}
                  <br />
                  <div className="block text-red-600 xl:inline">ㅉㅉ</div>
                </h1>
                <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  효율적인 팀빌딩 서비스
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mr-20">
          <img
            className=" object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/images/mainbg.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-center">우수작품</div>
      <div className="wrapper">
        <div className="item">
          <div className="polaroid"><Image src="/images/peopool.gif" width="390" height="220" alt="" />
            <div className="caption">PeoPool</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid"><Image src="/images/peopool.gif" width="390" height="220" alt="" />
            <div className="caption">ISEAU</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid"><Image src="/images/thefan.gif" width="390" height="220" alt="" />
            <div className="caption">theFAN</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid"><Image src="/images/peopool.gif" width="390" height="220" alt="" />
            <div className="caption">알잘알</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid"><Image src="/images/peopool.gif" width="390" height="220" alt="" />
            <div className="caption">pjt1</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid"><Image src="/images/peopool.gif" width="390" height="220" alt="" />
            <div className="caption">pjt2</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default test
