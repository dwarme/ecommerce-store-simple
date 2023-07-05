import Summary from "./Summary/Summary";
import Selection from "./Selection/Selection";
import Gallery from "./Gallery/Gallery";
import Buystrip from "./Buystrip/Buystrip";
import Header from "./Header";
import { ThemeProductProps } from "../../types/theme/theme-product";

const Product: React.FC<ThemeProductProps> = ({ data }) => {

    return (
        <div className="rf-flagship">
            <div className="rf-flagship-buyflow as-l-container row">
                {/* Left side */}
                <div className="column large-6 small-12">
                    <div className="rf-flagship-sticky">
                        <div className="large-hide small-show">
                            <Header note={data.header.note} productName={data.header.productName} />
                        </div>
                        <Gallery data={{ ...data.gallery, buystrip: data.buystrip }} />
                    </div>
                </div>

                {/* Right side */}
                <div className="column large-5 large-offset-1 small-offset-0 small-12 rf-flagship-buyflow-columnright">
                    <div className="small-hide">
                        <Header note={data.header.note} productName={data.header.productName} />
                    </div>
                        
                    <Selection
                        quantity={data.selection.quantity}
                        variants={data.selection.variants}
                    />

                    <Summary data={data.summary.data}/>

                    {data.buystrip &&
                        <div className="width-full large-hide small-show" style={{ width: '100%' }}>
                            <Buystrip data={data.buystrip.data} />
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Product;