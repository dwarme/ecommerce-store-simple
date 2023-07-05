import Media from "./Media";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Primary.css'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import React, { useEffect, useRef } from "react";
import { ThemeGalleryPrimaryProps } from "../../../../types/theme/theme-product-gallery";
import { useSelector } from "react-redux";
import { ShopSliceState } from "../../../../types/redux/shop-slice";
import Swiper from "swiper";
// register Swiper custom elements
register();

const Primary: React.FC<ThemeGalleryPrimaryProps> = ({ images }) => {

    const swiperRef = useRef<Swiper>();
    const variantColorOptionSelected = useSelector((state: { shop: ShopSliceState }) => state.shop?.variantColorOptionSelected)

    useEffect(() => {
        if (variantColorOptionSelected) {
            for (let i = 0; i < images.length; i++) {
                
                if (images[i].variant_ids.includes(variantColorOptionSelected.variant_id)) {
                    swiperRef.current?.slideTo(i);
                    break;
                }
            }
        }
    }, [images, variantColorOptionSelected, swiperRef]);

    useEffect(() => {
        const swiperEl: { swiper: Swiper } = document.querySelector('#gallery-primary-swiper') as any;
        swiperRef.current = swiperEl.swiper;
    }, [])

    return (
        <swiper-container id="gallery-primary-swiper" pagination="true" slides-per-view="1">
            {images.map(image =>
                <swiper-slide>
                    <Media image={image} />
                </swiper-slide>
            )}
        </swiper-container>
    )
}

export default Primary;