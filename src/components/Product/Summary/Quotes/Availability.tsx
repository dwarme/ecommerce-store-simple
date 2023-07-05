import React, { ReactNode } from "react"

interface AvailabilityProps {
    svgIcon: ReactNode;
    title?: string
    text: string
}

const Availability: React.FC<AvailabilityProps> = ({svgIcon, title, text}) => {
    return (
        <div className="column large-12">
            <div className="as-icondetails as-icondetails-topicon rf-pickupinfo rf-pickupinfo-noquote">
                <span className="as-icondetails-icon as-svgicon-container rf-pickup-quote-icon">
                    {svgIcon}
                </span>
                <div className="rf-pickup-quote-info typography-body-reduced" data-autom="pickUpDetails">
                    <span className="rf-pickup-quote-label">{title || 'Availability:'}</span>
                    <span className="rf-pickup-quote-value">{text}</span>
                </div>
            </div>
        </div>
    )
}

export default Availability