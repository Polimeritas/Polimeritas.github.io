"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

interface PageHeaderProps {
    title: string;
    activePage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, activePage }) => {
    return (
        <div className="w-full bg-primary py-10 mb-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h1 className="text-4xl lg:text-5xl font-bold text-secondary m-0 tracking-tight">
                            {title}
                        </h1>
                    </div>

                    {/* Breadcrumb */}
                    <div className="text-center md:text-right">
                        <div className="inline-flex items-center justify-center md:justify-end space-x-3 font-medium">

                            <Link
                                href="/"
                                className="inline-block border-2 border-dark text-dark rounded-full px-5 py-1.5 text-sm hover:bg-dark hover:text-primary transition-all duration-300"
                            >
                                Home
                            </Link>

                            {/* Separator Icon */}
                            <FontAwesomeIcon icon={faAngleDoubleRight} className="text-dark text-sm opacity-60" />
                            <span className="inline-block border-2 border-dark/40 bg-dark/5 text-dark/80 rounded-full px-5 py-1.5 text-sm cursor-default">
                                {activePage}
                            </span>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PageHeader;