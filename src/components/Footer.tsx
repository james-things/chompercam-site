import * as React from 'react';

interface FooterProps {}

type FooterState = {
  count: number; // like this
};

export class Footer extends React.Component<FooterProps, FooterState> {
  static displayName = 'MyComponent';

  constructor(props: FooterProps) {
    super(props);
  }

  state: FooterState = {
    // optional second annotation for better type inference
    count: 0,
  };

  render() {
    return (
      <footer className="footer footer-center bg-base-200 p-0 text-base-content">
        <div className="container flex flex-row flex-nowrap justify-center">

          <div className="">
              <img className="my-3 max-h-20 px-1" src="/chompers-left.png" alt="chomper-smile" />
          </div>

          <div className="grow">
            App running{' '}
            <a className="hover:text-blue-400 hover:underline" href="https://nextjs.org/">Next.js</a>
            {' '}and{' '}
            <a className="hover:text-blue-400 hover:underline" href="https://daisyui.com/">Daisy UI</a>
            {' '}-{' '}
            <a className="hover:text-blue-400 hover:underline" href="https://github.com/james-things/chompercam-site/">Github Project</a>
          </div>

          <div className="">
            <img className="my-3 max-h-20 px-1" src="/chompers-right.png" alt="chomper-smile" />
          </div>

        </div>
      </footer>
    );
  }
}
