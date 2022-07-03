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
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl normal-case">Chomper Cam!</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>
                Learn More
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                </svg>
              </a>
              <ul className="bg-base-100 p-2">
                <li><a>Meet Chomper</a></li>
                <li><a>About This Page</a></li>
              </ul>
            </li>
            <li><a>Donate</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
