import React from "react";
import { ThemeQuoteDudeProps } from "../../../../types/theme/theme-product-summary";

const Dude: React.FC<ThemeQuoteDudeProps> = ({ title, delivery }) => {
    return (
        <div className="rf-dude-quote column large-12 rf-dude-quote-default as-icondetails as-icondetails-topicon" data-autom="dudeInfo">
            <span className="as-icondetails-icon as-svgicon-container rf-dude-quote-icon">
                <svg viewBox="0 0 25 25" className="as-svgicon as-svgicon-boxtruck as-svgicon-reduced as-svgicon-boxtruckreduced" role="img" aria-hidden="true" width="25px" height="25px"><path fill="none" d="M0 0h25v25H0z"></path> <path d="M23.482 12.847l-2.92-3.209A1.947 1.947 0 0018.985 9H17V6.495a2.5 2.5 0 00-2.5-2.5h-11a2.5 2.5 0 00-2.5 2.5v9.75a2.5 2.5 0 002.5 2.5h.548A2.746 2.746 0 006.75 21.02 2.618 2.618 0 009.422 19h6.681a2.744 2.744 0 005.347-.23h.735A1.656 1.656 0 0024 16.98v-2.808a1.937 1.937 0 00-.518-1.325zM8.426 18.745a1.74 1.74 0 01-3.352 0 1.577 1.577 0 01.015-1 1.738 1.738 0 013.322 0 1.578 1.578 0 01.015 1zM9.447 18a2.726 2.726 0 00-5.394-.255H3.5a1.502 1.502 0 01-1.5-1.5v-9.75a1.502 1.502 0 011.5-1.5h11a1.502 1.502 0 011.5 1.5V18zm10.972.77a1.738 1.738 0 01-3.337 0 1.573 1.573 0 010-1 1.742 1.742 0 113.337 1zM23 16.98c0 .569-.229.79-.815.79h-.735A2.73 2.73 0 0017 16.165V10h1.986a.976.976 0 01.838.314l2.927 3.214a.95.95 0 01.249.644zm-1.324-3.36a.512.512 0 01.174.38h-3.306a.499.499 0 01-.544-.528V11h1.073a.76.76 0 01.594.268z" fill="#1d1d1f"></path> </svg>
            </span>
            <div className="rf-dude-quote-info">
                <span className="rf-dude-quote-label">{title || 'Delivery:'}</span>
                <ul className="rf-dude-quote-delivery-message-list">
                    <li className="rf-dude-quote-delivery-message">
                        <span>{delivery.message}</span>
                    </li>
                    {delivery.promo &&
                        <li className="rf-dude-quote-delivery-promo">
                            <span>{delivery.promo}</span>
                        </li>
                    }
                </ul>

            </div>
        </div>
    )
}

export default Dude;