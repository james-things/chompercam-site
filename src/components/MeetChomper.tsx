import * as React from 'react';

interface MeetChomperProps {}

type MeetChomperState = {
    count: number; // like this
};

export class MeetChomper extends React.Component<MeetChomperProps, MeetChomperState> {
    static displayName = 'MeetChomper';

    constructor(props: MeetChomperProps) {
        super(props);
    }

    state: MeetChomperState = {
        // optional second annotation for better type inference
        count: 0,
    };

    render() {
        return (
            <div className="mx-auto flex flex-col flex-nowrap p-1 md:grid md:grid-cols-2">
                <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                    <h1>Meet Chomper</h1>
                </div>

                <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
                    <p>
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                    </p>

                    <p>
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                    </p>

                    <p>
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                    </p>

                    <div className="prose flex p-2 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">
                        <a className="flex flex-row items-center hover:text-blue-400 hover:underline" href="https://github.com/james-things/chompercam-site/">
                            <img className="max-h-12" src="/github.png" alt="github-logo" />
                            <div className="">Check out this project on GitHub</div>
                        </a>
                    </div>

                </div>

                <div className="prose p-2 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:items-end">
                    <p>
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                    </p>

                    <p>
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                    </p>

                    <p>
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                        Meet chomper content coming soon! Meet chomper content coming soon!
                    </p>

                    <div className="prose flex p-2 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">
                        <a className="flex flex-row items-center hover:text-blue-400 hover:underline" href="https://github.com/james-things/chompercam-site/">
                            <img className="max-h-12" src="/github.png" alt="github-logo" />
                            <div className="">Check out this project on GitHub</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
