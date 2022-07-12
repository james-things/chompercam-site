import * as React from 'react';
import ReactMarkdown from 'react-markdown';

interface AboutAppProps {}

type AboutAppState = {
    count: number; // like this
};

export class AboutApp extends React.Component<AboutAppProps, AboutAppState> {
    static displayName = 'AboutApp';

    constructor(props: AboutAppProps) {
        super(props);
    }

    state: AboutAppState = {
        // optional second annotation for better type inference
        count: 0,
    };

    render() {
        return (
            <div className="mx-auto flex flex-col flex-nowrap p-1 md:grid md:grid-cols-2">
                <div className="prose p-2 md:col-span-1 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                    <h1>About This App</h1>
                </div>

                <div className="prose p-2 md:col-span-1 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
                    <p>
                        This web app began as a weekend project with the goal of setting up some form of remote
                        monitoring for my pet lizard, so that I could make sure that his lights were working properly
                        while I was away for a few days. Once I got the camera stream up and running on a Raspberry Pi,
                        I got the bug to go a bit further with everything in the hopes that I might learn a bit along the way.
                    </p>

                    <p>
                        Feel free to check out the project at the Github link below. Please bear in mind
                        this is an experimental project which I am currently working on for fun in my spare
                        time, so commits may be a bit frequent and messy. In the future I intend to document
                        the setup and configuration process, as there were a number of stumbling blocks, and I
                        found myself at the far reaches of the internet looking for answers at times!
                    </p>
                </div>

                <div className="prose p-2 md:col-span-1 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
                    <div className="underline md:text-center">
                        Some technical information about this project:
                    </div>

                    <ReactMarkdown className="prose-sm p-0 pl-4">
                        {`
### Hardware
* Raspberry Pi 4b running Ubuntu Server Edition

### Software Stack
* Apache Web Server
* Motion Server
* Node.js Server
* Javascript App

### Languages and Frameworks
* TypeScript
* Next.JS
* Tailwind CSS
* Jotai
* Daisy UI    
                            `}
                    </ReactMarkdown>
                    In the near future the remaining base content will be completed and the focus will shift
                    to getting SSL functioning on the Motion side.
                </div>

                <div className="prose flex p-2 md:col-span-1 md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4">
                    <a className="grid grid-cols-2 items-center hover:text-blue-400 hover:underline" href="https://github.com/james-things/chompercam-site/">
                        <img className="max-h-12 grid-cols-1 justify-self-end" src="/github.png" alt="github-logo" />
                        <div className="grid-cols-1 justify-self-center">Github Project</div>
                    </a>
                </div>
            </div>
        );
    }
}
