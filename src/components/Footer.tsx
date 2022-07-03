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
      <footer style={{ position: 'absolute', bottom: 0, width: '100%' }} className="footer footer-center rounded bg-base-200 p-10 text-base-content">
        <div className="grid-cols-3">
          <div className="flex">
            <img className="my-3 max-h-14 px-1" src="/chomper-smile.png" alt="chomper-smile" />
            <img className="-my-3 max-h-20" src="/chomper-dance.png" alt="chomper-dance" />
            <img className="my-3 max-h-14 px-2" src="/chomper-smile.png" alt="chomper-smile" />
          </div>

          <div>
            App created using {' '}
            <a className="hover:text-blue-400 hover:underline" href="https://nextjs.org/">Next.js</a>
            ,{' '}
            <a className="hover:text-blue-400 hover:underline" href="https://daisyui.com/">Daisy UI</a>
            , and{' '}
            <a className="hover:text-blue-400 hover:underline" href="https://tailwindcss.com/">TailwindCSS</a>

            <div className="pt-4">
              Art by{' '}
              <a className="hover:text-blue-400 hover:underline" href="https://twitter.com/sayyestogiygas">@SayYesToGiygas</a>
            </div>
          </div>

          <div className="flex">
            <img className="my-3 max-h-14 px-1" src="/chomper-smile.png" alt="chomper-smile" />
            <img className="-my-3 max-h-20" src="/chomper-dance.png" alt="chomper-dance" />
            <img className="my-3 max-h-14 px-2" src="/chomper-smile.png" alt="chomper-smile" />
          </div>
        </div>
      </footer>
    );
  }
}
