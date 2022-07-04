import * as React from 'react';

interface MyProps {}

type MyState = {
  count: number; // like this
};

export class Footer extends React.Component<MyProps, MyState> {
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
      <footer className="footer footer-center rounded bg-base-200 p-0 text-base-content">
        <div className="container flex flex-row flex-nowrap justify-center">

          <div className="">
              <img className="my-3 max-h-20 px-1" src="/chompers-left.png" alt="chomper-smile" />
          </div>

          <div className="grow">
            App created using {' '}
            <a className="hover:text-blue-400 hover:underline" href="https://nextjs.org/">Next.js</a>
            ,{' '}
            <a className="hover:text-blue-400 hover:underline" href="https://daisyui.com/">Daisy UI</a>
            , and{' '}
            <a className="hover:text-blue-400 hover:underline" href="https://tailwindcss.com/">TailwindCSS</a>
            {' '}-{' '}
            <a className="hover:text-blue-400 hover:underline" href="https://github.com/james-things/chompercam-site/">GitHub Project</a>



            <div className="pt-4">
              Art by{' '}
              <a className="hover:text-blue-400 hover:underline" href="https://twitter.com/sayyestogiygas">@SayYesToGiygas</a>
            </div>

          </div>

          <div className="">
            <img className="my-3 max-h-20 px-1" src="/chompers-right.png" alt="chomper-smile" />
          </div>

        </div>
      </footer>
    );
  }
}
