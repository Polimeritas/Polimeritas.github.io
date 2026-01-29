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
        <div className="w-full bg-primary py-8 mb-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between py-4">

                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h1 className="text-4xl lg:text-5xl font-bold text-dark m-0">
                            {title}
                        </h1>
                    </div>

                    {/* Breadcrumb */}
                    <div className="text-center md:text-right">
                        <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded">
                            <Link
                                href="/"
                                className="btn-sm text-dark hover:text-white transition-colors font-medium"
                            >
                                Home
                            </Link>
                            <FontAwesomeIcon icon={faAngleDoubleRight} className="text-dark mx-3 text-sm" />
                            <span className="text-dark/60 font-medium cursor-default">
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