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
      <div className="flex px-10 pt-5">
        <div className="container mx-auto flex max-w-screen-lg rounded border-2 border-gray-500">
          <img className="mx-auto p-10" src='http://192.168.50.79:8080/0' alt='Chomper is taking a short break!'/>
        </div>
      </div>
    );
  }
}
