import ApplicationLogo from "@/Components/ApplicationLogo";
import MobileMenu from "@/Components/MobileMenu";
import SideMenu from "@/Components/SideMenu";
import React, { useState } from "react";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <MobileMenu auth={auth} />
            <div>
                <div className="top-bar-boxed border-b border-theme-2 -mt-7 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-12">
                    <div className="h-full flex items-center">
                        <a href="" className="-intro-x hidden md:flex">
                            <ApplicationLogo />
                            <span className="text-white text-lg ml-3">
                                Ice<span className="font-medium">wall</span>
                            </span>
                        </a>
                        <div className="-intro-x breadcrumb mr-auto">
                            <a href="">Application</a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <a href="" className="breadcrumb--active">
                                Dashboard
                            </a>
                        </div>
                        <div className="intro-x relative mr-3 sm:mr-6">
                            <div className="search hidden sm:block">
                                <i
                                    data-feather="search"
                                    className="search__icon dark:text-gray-300"
                                ></i>
                            </div>
                            <a className="notification sm:hidden" href="">
                                <i
                                    data-feather="search"
                                    className="notification__icon dark:text-gray-300"
                                ></i>
                            </a>
                            <div className="search-result">
                                <div className="search-result__content">
                                    <div className="search-result__content__title">
                                        Pages
                                    </div>
                                    <div className="mb-5">
                                        <a
                                            href=""
                                            className="flex items-center"
                                        >
                                            <div className="w-8 h-8 bg-theme-29 text-theme-10 flex items-center justify-center rounded-full">
                                                <i
                                                    className="w-4 h-4"
                                                    data-feather="inbox"
                                                ></i>
                                            </div>
                                            <div className="ml-3">
                                                Mail Settings
                                            </div>
                                        </a>
                                        <a
                                            href=""
                                            className="flex items-center mt-2"
                                        >
                                            <div className="w-8 h-8 bg-theme-30 text-theme-24 flex items-center justify-center rounded-full">
                                                <i
                                                    className="w-4 h-4"
                                                    data-feather="users"
                                                ></i>
                                            </div>
                                            <div className="ml-3">
                                                Users & Permissions
                                            </div>
                                        </a>
                                        <a
                                            href=""
                                            className="flex items-center mt-2"
                                        >
                                            <div className="w-8 h-8 bg-theme-31 text-theme-26 flex items-center justify-center rounded-full">
                                                <i
                                                    className="w-4 h-4"
                                                    data-feather="credit-card"
                                                ></i>
                                            </div>
                                            <div className="ml-3">
                                                Transactions Report
                                            </div>
                                        </a>
                                    </div>
                                    <div className="search-result__content__title">
                                        Users
                                    </div>
                                    <div className="mb-5">
                                        <a
                                            href=""
                                            className="flex items-center mt-2"
                                        >
                                            <div className="w-8 h-8 image-fit">
                                                <img
                                                    alt="Icewall Tailwind HTML Admin Template"
                                                    className="rounded-full"
                                                    src="images/profile-1.jpg"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                Al Pacino
                                            </div>
                                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                                alpacino@left4code.com
                                            </div>
                                        </a>
                                        <a
                                            href=""
                                            className="flex items-center mt-2"
                                        >
                                            <div className="w-8 h-8 image-fit">
                                                <img
                                                    alt="Icewall Tailwind HTML Admin Template"
                                                    className="rounded-full"
                                                    src="images/profile-14.jpg"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                Edward Norton
                                            </div>
                                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                                edwardnorton@left4code.com
                                            </div>
                                        </a>
                                        <a
                                            href=""
                                            className="flex items-center mt-2"
                                        >
                                            <div className="w-8 h-8 image-fit">
                                                <img
                                                    alt="Icewall Tailwind HTML Admin Template"
                                                    className="rounded-full"
                                                    src="images/profile-11.jpg"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                Denzel Washington
                                            </div>
                                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                                denzelwashington@left4code.com
                                            </div>
                                        </a>
                                        <a
                                            href=""
                                            className="flex items-center mt-2"
                                        >
                                            <div className="w-8 h-8 image-fit">
                                                <img
                                                    alt="Icewall Tailwind HTML Admin Template"
                                                    className="rounded-full"
                                                    src="images/profile-11.jpg"
                                                />
                                            </div>
                                            <div className="ml-3">
                                                Brad Pitt
                                            </div>
                                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                                bradpitt@left4code.com
                                            </div>
                                        </a>
                                    </div>
                                    <div className="search-result__content__title">
                                        Products
                                    </div>
                                    <a
                                        href=""
                                        className="flex items-center mt-2"
                                    >
                                        <div className="w-8 h-8 image-fit">
                                            <img
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="images/preview-9.jpg"
                                            />
                                        </div>
                                        <div className="ml-3">Nike Tanjun</div>
                                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                            Sport &amp; Outdoor
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-2"
                                    >
                                        <div className="w-8 h-8 image-fit">
                                            <img
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="images/preview-4.jpg"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            Samsung Galaxy S20 Ultra
                                        </div>
                                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                            Smartphone &amp; Tablet
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-2"
                                    >
                                        <div className="w-8 h-8 image-fit">
                                            <img
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="images/preview-1.jpg"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            Oppo Find X2 Pro
                                        </div>
                                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                            Smartphone &amp; Tablet
                                        </div>
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-2"
                                    >
                                        <div className="w-8 h-8 image-fit">
                                            <img
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="images/preview-3.jpg"
                                            />
                                        </div>
                                        <div className="ml-3">
                                            Samsung Q90 QLED TV
                                        </div>
                                        <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                            Electronic
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x dropdown mr-4 sm:mr-6">
                            <div
                                className="dropdown-toggle notification notification--bullet cursor-pointer"
                                role="button"
                                aria-expanded="false"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </div>
                            <div className="notification-content pt-2 dropdown-menu">
                                <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
                                    <div className="notification-content__title">
                                        Notifications
                                    </div>
                                    <div className="cursor-pointer relative flex items-center ">
                                        <div className="w-12 h-12 flex-none image-fit mr-1">
                                            <img
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="images/profile-1.jpg"
                                            />
                                            <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <a
                                                    href="javascript:;"
                                                    className="font-medium truncate mr-5"
                                                >
                                                    Al Pacino
                                                </a>
                                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                                                    06:05 AM
                                                </div>
                                            </div>
                                            <div className="w-full truncate text-gray-600 mt-0.5">
                                                It is a long established fact
                                                that a reader will be distracted
                                                by the readable content of a
                                                page when looking at its layout.
                                                The point of using Lorem
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer relative flex items-center mt-5">
                                        <div className="w-12 h-12 flex-none image-fit mr-1">
                                            <img
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="images/profile-14.jpg"
                                            />
                                            <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <a
                                                    href="javascript:;"
                                                    className="font-medium truncate mr-5"
                                                >
                                                    Edward Norton
                                                </a>
                                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                                                    06:05 AM
                                                </div>
                                            </div>
                                            <div className="w-full truncate text-gray-600 mt-0.5">
                                                Contrary to popular belief,
                                                Lorem Ipsum is not simply random
                                                text. It has roots in a piece of
                                                classical Latin literature from
                                                45 BC, making it over 20
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer relative flex items-center mt-5">
                                        <div className="w-12 h-12 flex-none image-fit mr-1">
                                            <img
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="images/profile-11.jpg"
                                            />
                                            <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <a
                                                    href="javascript:;"
                                                    className="font-medium truncate mr-5"
                                                >
                                                    Denzel Washington
                                                </a>
                                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                                                    01:10 PM
                                                </div>
                                            </div>
                                            <div className="w-full truncate text-gray-600 mt-0.5">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry&#039;s standard
                                                dummy text ever since the 1500
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer relative flex items-center mt-5">
                                        <div className="w-12 h-12 flex-none image-fit mr-1">
                                            <img
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="images/profile-11.jpg"
                                            />
                                            <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <a
                                                    href="javascript:;"
                                                    className="font-medium truncate mr-5"
                                                >
                                                    Brad Pitt
                                                </a>
                                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                                                    01:10 PM
                                                </div>
                                            </div>
                                            <div className="w-full truncate text-gray-600 mt-0.5">
                                                There are many variations of
                                                passages of Lorem Ipsum
                                                available, but the majority have
                                                suffered alteration in some
                                                form, by injected humour, or
                                                randomi
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer relative flex items-center mt-5">
                                        <div className="w-12 h-12 flex-none image-fit mr-1">
                                            <img
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="images/profile-4.jpg"
                                            />
                                            <div className="w-3 h-3 bg-theme-10 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="ml-2 overflow-hidden">
                                            <div className="flex items-center">
                                                <a
                                                    href="javascript:;"
                                                    className="font-medium truncate mr-5"
                                                >
                                                    Arnold Schwarzenegger
                                                </a>
                                                <div className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                                                    01:10 PM
                                                </div>
                                            </div>
                                            <div className="w-full truncate text-gray-600 mt-0.5">
                                                There are many variations of
                                                passages of Lorem Ipsum
                                                available, but the majority have
                                                suffered alteration in some
                                                form, by injected humour, or
                                                randomi
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x dropdown w-8 h-8">
                            <div
                                className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
                                role="button"
                                aria-expanded="false"
                            >
                                <img
                                    alt="Icewall Tailwind HTML Admin Template"
                                    src={`https://ui-avatars.com/api/?name=${auth.user.name}`}
                                />
                            </div>
                            <div className="dropdown-menu w-56">
                                <div className="dropdown-menu__content box bg-theme-11 dark:bg-dark-6 text-white">
                                    <div className="p-4 border-b border-theme-12 dark:border-dark-3">
                                        <div className="font-medium">
                                            {auth.user.name}
                                        </div>
                                        <div className="text-xs text-theme-13 mt-0.5 dark:text-gray-600">
                                            {auth.user.email}
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <a
                                            href=""
                                            className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
                                        >
                                            <i
                                                data-feather="user"
                                                className="w-4 h-4 mr-2"
                                            ></i>
                                            Profile
                                        </a>
                                        <a
                                            href=""
                                            className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
                                        >
                                            <i
                                                data-feather="edit"
                                                className="w-4 h-4 mr-2"
                                            ></i>
                                            Add Account
                                        </a>
                                        <a
                                            href=""
                                            className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
                                        >
                                            <i
                                                data-feather="lock"
                                                className="w-4 h-4 mr-2"
                                            ></i>
                                            Reset Password
                                        </a>
                                        <a
                                            href=""
                                            className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
                                        >
                                            <i
                                                data-feather="help-circle"
                                                className="w-4 h-4 mr-2"
                                            ></i>
                                            Help
                                        </a>
                                    </div>
                                    <div className="p-2 border-t border-theme-12 dark:border-dark-3">
                                        <a
                                            href=""
                                            className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
                                        >
                                            <i
                                                data-feather="toggle-right"
                                                className="w-4 h-4 mr-2"
                                            ></i>
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper-box">
                    <SideMenu auth={auth} />
                    <div className="content p-4">{children}</div>
                </div>
            </div>
        </>
    );
}
