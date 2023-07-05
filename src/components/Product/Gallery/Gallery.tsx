import React, { useMemo } from "react"
import Primary from "./Primary/Primary"
import Secondary from "./Secondary/Secondary"
import Buystrip from "../Buystrip/Buystrip"
import { ThemeGalleryProps } from "../../../types/theme/theme-product-gallery"

interface Props {
    data: ThemeGalleryProps
}

const Gallery: React.FC<Props> = ({ data }) => {

    const gallery = useMemo(() => {
        if (data.gallery.primary) {
            return (
                <Primary 
                    images={data.gallery.primary.images} 
                />
            )
        }
        
        return (
            <Secondary />
        )
    }, [data.gallery])

    return (
        <React.Fragment>
            {gallery}
            {data.buystrip &&
            <div className="small-hide">
                <Buystrip
                    data={data.buystrip?.data}
                />
            </div>

            }
        </React.Fragment>
    )

}


export default React.memo(Gallery);