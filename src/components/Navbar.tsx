import * as React from 'react';
import Link from 'next/link';
import {useAtom} from 'jotai'
import {pageAtom} from "jotai/atoms/index";

// interface NavbarProps {}

export default function Navbar() {
    // @ts-ignore
  const [page, setPage] = useAtom(pageAtom);

    return (
      <div className="navbar bg-base-200">
        <div className="flex-1 pr-4">
          <div
              className="btn btn-ghost text-lg normal-case lg:text-xl"
              onClick={() => setPage('index')}
          >
            Chomper Cam
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="text-sm lg:text-base">
                Learn More
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                </svg>
              </a>
              <ul className="bg-base-200">
                <li>
                  <div
                      className="text-sm lg:text-base"
                      onClick={() => setPage('MeetChomper')}
                  >
                    Meet Chomper
                  </div>
                </li>
                <li>
                  <div
                      className="text-sm lg:text-base"
                      onClick={() => setPage('AboutPage')}
                  >
                    About This Page
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link  href="https://www.buymeacoffee.com/gPKIjH2QrP">
                <a className="text-sm lg:text-base" target="_blank" >
                  Donations
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

