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
            <div className="rounded-box max-w-6xl grow rounded border-2 border-gray-500 bg-base-100">
                <div className="mx-auto flex flex-col flex-nowrap p-1 md:grid md:grid-cols-2">
                    <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                        <h1>About This App</h1>
                    </div>

                    <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
                        <p>
                            This web app began as a weekend project with the goal of setting up some form of remote
                            monitoring for my pet lizard, so that I could make sure that his lights were working
                            while I was away. Once I got the camera stream up and running on a Raspberry Pi,
                            I decided to explore further in the hopes that I might learn a bit along the way.
                        </p>

                        <p>
                            Feel free to check out the project at the Github link below. Please bear in mind
                            this is an experimental project which I am currently working on for fun in my spare
                            time, so commits may be a bit frequent and messy. In the future I intend to document
                            the setup and configuration process, as there were a number of stumbling blocks, and I
                            found myself searching far and wide for answers at times.
                        </p>

                        <p>
                            In the near future the remaining base content will be completed and the focus will shift
                            to getting SSL functioning on the camera stream.
                        </p>

                        <div className="prose flex p-2 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">
                            <a className="flex flex-row items-center hover:text-blue-400 hover:underline" href="https://github.com/james-things/chompercam-site/">
                                <img className="max-h-12" src="/github.png" alt="github-logo" />
                                <div className="">Check out this project on GitHub</div>
                            </a>
                        </div>
                    </div>

                    <div className="prose p-2 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:items-end">
                        <h3 className="underline">
                            Technical Information
                        </h3>

                        <ReactMarkdown className="prose-sm p-0 pl-4">
                            {`
### Hardware
* Raspberry Pi 4b on Ubuntu Server
* Generic USB Webcam
* Standard Home Networking Equipment

### Software
* Apache Web Server
* Motion Server
* Node.js Server
* JavaScript App

### Libraries, Frameworks, Languages, Etc.
* TypeScript
* Next.JS
* Tailwind CSS
* Jotai
* Daisy UI    
* See "package.json" on GitHub a for complete list of node libraries!
                                `}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        );
    }
}
