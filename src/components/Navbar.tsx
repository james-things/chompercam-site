import Link from 'next/link';
import * as React from 'react';

export default function Navbar({setPage}: any) {

    return (
        <div className="navbar max-h-16 flex-none bg-base-200">
          <div className="md:hidden">
            <label htmlFor="main-drawer-toggle-btn" className="btn btn-ghost btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <div
                className="btn btn-ghost text-lg normal-case lg:text-xl"
                onClick={() => setPage('index')}
            >
              Chomper Cam
            </div>
          </div>
          <div className="invisible md:visible">
            <ul className="menu menu-horizontal p-0">
              <li>
                <label className="text-base">
                  Learn More
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                       viewBox="0 0 24 24">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                  </svg>
                </label>
                <ul className="bg-base-200">
                  <li>
                    <div
                        className="text-base"
                        onClick={() => setPage('MeetChomper')}
                    >
                      Meet Chomper
                    </div>
                  </li>
                  <li>
                    <div
                        className="text-base"
                        onClick={() => setPage('AboutApp')}
                    >
                      About This App
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <Link  href="https://www.buymeacoffee.com/gPKIjH2QrP">
                  <a className="text-base" target="_blank" >
                    Donations
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    );
  }

