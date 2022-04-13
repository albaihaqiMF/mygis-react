import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function SideMenu({ auth }) {
    const hasRoute = (isRoute) => {
        return route().current(isRoute) && "side-menu--active";
    }

    return (
        <nav className="side-nav">
            <ul>
                <li>
                    <Link href={route("dashboard")} className={`side-menu ${hasRoute('dashboard')}`}>
                        <div className="side-menu__icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                        <div className="side-menu__title">
                            Dashboard
                            <div className="side-menu__sub-icon transform rotate-180">
                                {" "}
                                <i data-feather="chevron-down"></i>{" "}
                            </div>
                        </div>
                    </Link>
                    <Link href={route("map")} className={`side-menu ${hasRoute('map')}`}>
                        <div className="side-menu__icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="side-menu__title">Map</div>
                    </Link>
                </li>
                <li>
                    <a href="javascript:;" className="side-menu">
                        <div className="side-menu__icon">
                            {" "}
                            <i data-feather="box"></i>{" "}
                        </div>
                        <div className="side-menu__title">
                            Menu Layout
                            <div className="side-menu__sub-icon ">
                                {" "}
                                <i data-feather="chevron-down"></i>{" "}
                            </div>
                        </div>
                    </a>
                    <ul className="side-menu__sub-open">
                        <li>
                            <a href="index.html" className="side-menu">
                                <div className="side-menu__icon">
                                    {" "}
                                    <i data-feather="activity"></i>{" "}
                                </div>
                                <div className="side-menu__title">
                                    {" "}
                                    Side Menu{" "}
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="simple-menu-light-dashboard-overview-1.html"
                                className="side-menu"
                            >
                                <div className="side-menu__icon">
                                    {" "}
                                    <i data-feather="activity"></i>{" "}
                                </div>
                                <div className="side-menu__title">
                                    {" "}
                                    Simple Menu{" "}
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="top-menu-light-dashboard-overview-1.html"
                                className="side-menu"
                            >
                                <div className="side-menu__icon">
                                    {" "}
                                    <i data-feather="activity"></i>{" "}
                                </div>
                                <div className="side-menu__title">
                                    {" "}
                                    Top Menu{" "}
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
