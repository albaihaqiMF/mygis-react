import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { Activity, ChevronDown, Home, Map as MapIcon } from "react-feather";

import "../side-menu";

export default function SideMenu({ auth }) {
    const hasRoute = (isRoute) => {
        return route().current(isRoute) && "side-menu--active";
    };

    return (
        <nav className="side-nav">
            <ul>
                <li>
                    <Link
                        href={route("dashboard")}
                        className={`side-menu ${hasRoute("dashboard")}`}
                    >
                        <div className="side-menu__icon">
                            <Home />
                        </div>
                        <div className="side-menu__title">Dashboard</div>
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("map")}
                        className={`side-menu ${hasRoute("map")}`}
                    >
                        <div className="side-menu__icon">
                            <MapIcon />
                        </div>
                        <div className="side-menu__title">Map</div>
                    </Link>
                </li>
                <li>
                    <a href="javascript:;" className="side-menu">
                        <div className="side-menu__icon">
                            <i data-feather="box"></i>
                        </div>
                        <div className="side-menu__title">
                            Menu Layout
                            <div className="side-menu__sub-icon ">
                                <ChevronDown />
                            </div>
                        </div>
                    </a>
                    <ul className="side-menu__sub-open">
                        <li>
                            <a href="index.html" className="side-menu">
                                <div className="side-menu__icon">
                                    <i data-feather="activity"></i>
                                </div>
                                <div className="side-menu__title">
                                    Side Menu
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="simple-menu-light-dashboard-overview-1.html"
                                className="side-menu"
                            >
                                <div className="side-menu__icon">
                                    <Activity />
                                </div>
                                <div className="side-menu__title">
                                    Simple Menu
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="top-menu-light-dashboard-overview-1.html"
                                className="side-menu"
                            >
                                <div className="side-menu__icon">
                                    <Activity />
                                </div>
                                <div className="side-menu__title">Top Menu</div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
