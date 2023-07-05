import React from "react";

const Badge: React.FC<{qty: number}> = ({qty}) => {
    return (
        <span className="as-standardnav-bag-badge" aria-hidden="true" data-analytics-click="prop3:open - bag"
            data-analytics-title="open - bag">
            <span className="as-standardnav-bag-badge-separator"></span>
            <span className="as-standardnav-bag-badge-number">{qty}</span>
            {qty >= 10 &&
                <span className="as-standardnav-bag-badge-unit">+</span>
            }
        </span>
    )
}

export default Badge;