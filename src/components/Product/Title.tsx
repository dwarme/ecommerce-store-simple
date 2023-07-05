import React from "react";

interface TitleProps{
    productName: string
}

const Title: React.FC<TitleProps> = ({productName}) => {
    return (
        <div data-analytics-section="hero">
            <div className="rf-flagship-product-header">
                <div>
                    <h1 className="fwl">{productName}</h1>
                </div>
            </div>
        </div>
    )
}

export default Title;