import * as React from 'react';

interface AboutPageProps {}

type AboutPageState = {
    count: number; // like this
};

export class AboutPage extends React.Component<AboutPageProps, AboutPageState> {
    static displayName = 'AboutPage';

    constructor(props: AboutPageProps) {
        super(props);
    }

    state: AboutPageState = {
        // optional second annotation for better type inference
        count: 0,
    };

    render() {
        return (
            <div className="flex">
                <div className="">
                    <div className="p-2 prose">
                        <h1>About This Page</h1>
                    </div>
                    <div className="p-2 prose">
                        Coming soon! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. In eu mi bibendum neque egestas congue.
                    </div>

                    <div className="p-2 prose">
                        Quis commodo odio aenean sed adipiscing diam donec adipiscing. Turpis cursus in hac habitasse platea.
                        Morbi tristique senectus et netus et malesuada. Quis lectus nulla at volutpat.
                    </div>

                    <div className="p-2 prose">
                        Quam quisque id diam vel quam elementum pulvinar etiam. Quis imperdiet massa tincidunt nunc pulvinar
                        sapien et ligula ullamcorper. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
                        Facilisis sed odio morbi quis commodo odio aenean sed.
                    </div>
                </div>
            </div>
        );
    }
}
