import * as React from 'react';

interface MyProps {}

type MyState = {
  count: number; // like this
};

export class CamEmbed extends React.Component<MyProps, MyState> {
  static displayName = 'MyComponent';

  // constructor(props: MyProps) {
  //   super(props);
  // }

  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };

  render() {
    return (
      <div className="flex px-2 py-0 lg:px-5">
        <div className="mx-auto max-w-6xl shrink rounded border-2 border-gray-500">
          <img className="mx-auto p-1" src='http://174.57.153.211:8080/' alt='Chomper is taking a short break!'/>
        </div>
      </div>
    );
  }
}
