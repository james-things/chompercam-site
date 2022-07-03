import * as React from "react";

interface MyProps {
    // using `interface` is also ok
    message: string;
};

type MyState = {
    count: number; // like this
};

export class MyComponent extends React.Component<MyProps, MyState> {
    static displayName = 'MyComponent';

    constructor(props: MyProps) {
        super(props);
    };

    state: MyState = {
        // optional second annotation for better type inference
        count: 0,
    };

    render() {
        return (
            <div>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}