import {Carousel} from "jotai/components/Carousel";
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
            <div className="">
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
                    </div>
                </div>
                <Carousel />
            </div>
        );
    }
}
