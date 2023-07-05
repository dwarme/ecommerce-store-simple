import React from "react";

interface BuystripItemProps{
    icon: React.ReactNode
    title: string
}

const BuystripItem: React.FC<BuystripItemProps> = ({icon, title}) => {
    return (
        <li className="column small-12 as-buystrip-item">
            <div className="as-svgicon-container">
                {icon}
            </div>
            <p className="as-buystrip-title">
                <span>{title}</span>
            </p>
        </li>
    )
}

export default BuystripItem;