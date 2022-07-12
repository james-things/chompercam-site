import Link from 'next/link';
import * as React from 'react';

export default function SideMenu({setPage}: any) {

    return (
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4">
            <li>
                <div
                    className="text-lg lg:text-xl"
                    onClick={() => setPage('index')}
                >
                    <label htmlFor="main-drawer-toggle-btn">Chomper Cam</label>
                </div>
            </li>
            <div className="divider"></div>
            <li>
                <div
                    className="text-sm lg:text-base"
                    onClick={() => setPage('MeetChomper')}
                >
                    <label htmlFor="main-drawer-toggle-btn">Meet Chomper</label>
                </div>
            </li>
            <li>
                <div
                    className="text-sm lg:text-base"
                    onClick={() => setPage('AboutPage')}
                >
                    <label htmlFor="main-drawer-toggle-btn">About This Page</label>
                </div>
            </li>
            <div className="divider"></div>
            <li>
                <Link href="https://www.buymeacoffee.com/gPKIjH2QrP">
                    <a className="text-sm lg:text-base" target="_blank" >
                        Donations
                    </a>
                </Link>
            </li>
            <div className="divider"></div>
        </ul>
    );
}

