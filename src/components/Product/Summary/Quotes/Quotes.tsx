import React from "react"
import Dude from "./Dude"
import Availability from "./Availability"
import { ThemeQuotesProps } from "../../../../types/theme/theme-product-summary"

const Quotes: React.FC<ThemeQuotesProps> & {
    Dude: typeof Dude
    Availability: typeof Availability
} = ({ availability, dude }) => {
    return (
        <div className="r-fade-transition-enter-done">
            <div className="rc-summary-quotes-box row">
                <div className="rf-fulfillment-quote row">
                    {dude &&
                        <Dude
                            title={dude.title}
                            delivery={dude.delivery}
                        />
                    }
                    
                    {availability &&
                        <Availability
                            svgIcon={availability.svgIcon}
                            title={availability.title}
                            text={availability.text}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

Quotes.Dude = Dude;
Quotes.Availability = Availability;
export default Quotes;