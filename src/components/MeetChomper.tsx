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
            <div className="rounded-box max-w-6xl grow rounded border-2 border-gray-500 bg-base-100">
                <div id="stuff-inside-content-box">
                    <div className="mx-auto flex flex-col flex-nowrap p-1 md:grid md:grid-cols-2">
                        <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
                            <h1>Meet Chomper</h1>
                        </div>

                        <div className="prose p-2 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
                            <p>
                                Chomper is a male Leopard Gecko who we believe is approximately two years old.
                                We didn&apos;t plan on getting a lizard as a pet; but one day we came across someone
                                who was trying to find someone to take the gecko that they could no longer house.
                                He was very skinny and had lost nearly all of his coloring so we immediately seized
                                the opportunity and took him in.
                            </p>

                            <p>
                                Despite his frail stature, as soon as we put some crickets in his new tank
                                he leapt into action and ate them all, each with a with a surprisingly aggressive
                                chomp - and with that &ldquo;Chomper&rdquo; was officially the newest member of the family.
                                As you will see if you check in often, Chomper is no longer skinny and unhealthy.
                                He is now close to full grown, at a healthy weight, and regaining his coloring
                                as time passes.
                            </p>
                        </div>

                        <div className="prose p-2 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:items-end">
                            <p>
                                When we first got Chomper, he was suffering from Metabolic Bone Disease,
                                or MBD, which is a common result of inadequate calcium levels in these animals.
                                When we first got Chomper, he struggled to support his weight on his soft bones,
                                and he would wobble and fall as he walked.
                            </p>

                            <p>
                                With proper supplementation and well-regulated temperature levels, he has almost
                                entirely recovered from this condition in the time we have had him. He now only
                                has a slight occasional wobble, and it usually only presents itself when he is
                                excited and trying to search about for something quickly.
                            </p>
                        </div>
                    </div>
                    <Carousel />
                </div>
            </div>
        );
    }
}
