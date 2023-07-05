import React from "react";
import Price from "./Price";
import Quotes from "./Quotes/Quotes";
import ButtonAddToBag from "./ButtonAddToBag";
import { ThemeProductSummaryProps } from "../../../types/theme/theme-product-summary";

const Summary: React.FC<ThemeProductSummaryProps> = ({ data }) => {
    return (
        <div id="product-summary" className="rf-flagship-summary-wrapper">
            <div className="rf-flagship-summary">
                <div className="rc-summary">
                    <Price price={data.price} />
                    {data.quotes &&
                        <Quotes
                            dude={data.quotes.dude}
                            availability={data.quotes.availability}
                        />
                    }

                    {data.buttonAddToBag &&
                        <ButtonAddToBag
                            title={data.buttonAddToBag.title}
                        />
                    }

                </div>
            </div>
        </div>
    )
}

export default React.memo(Summary);