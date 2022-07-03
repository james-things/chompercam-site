import * as React from "react";

interface MyProps {};

type MyState = {
    count: number; // like this
};

export class Navbar extends React.Component<MyProps, MyState> {
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
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered"/>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people"/>
                                </div>
                            </label>
                            <ul
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}