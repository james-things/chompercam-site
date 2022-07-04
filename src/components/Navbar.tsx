import Link from "next/link";
import * as React from 'react';

interface MyProps {}

type MyState = {
  count: number; // like this
};

export default class Navbar extends React.Component<MyProps, MyState> {
  static displayName = 'MyComponent';

  constructor(props: MyProps) {
    super(props);
  }

  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };

  render() {
    return (
      <div className="navbar bg-base-200">
        <div className="flex-1 pr-4">
          <Link href="/">
            <a className="btn btn-ghost text-lg normal-case lg:text-xl">
              Chomper Cam
            </a>
          </Link>
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
                {/*
                <li>
                  <a className="text-sm lg:text-base">
                    Meet Chomper
                  </a>
                </li>
                <li>
                  <a className="text-sm lg:text-base">
                    About This Page
                  </a>
                </li>
                */}
                <li>
                  <a className="text-sm lg:text-base">
                    Coming Soon!
                  </a>
                </li>
                <li>
                  <a className="text-sm lg:text-base">
                    Coming Soon!
                  </a>
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
}
