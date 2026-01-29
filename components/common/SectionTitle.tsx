import React from 'react';

interface SectionTitleProps {
    subtitle: string;
    title: string;
    className?: string;
    textColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    subtitle,
    title,
    className = "",
    textColor = "text-dark"
}) => {
    return (
        <div className={`relative ${className}`}>

            <h6 className="text-secondary font-semibold uppercase mb-2 tracking-wide text-lg lg:text-xl">
                {subtitle}
            </h6>

            <div className="relative pl-[60px]">
                <div className="section-title-line absolute left-0 top-3"></div>

                <h1 className={`${textColor} text-3xl lg:text-5xl font-extrabold`}>
                    {title}
                </h1>
            </div>

        </div>
    );
};

export default SectionTitle;