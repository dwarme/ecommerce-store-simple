import { MyCustomInput } from "./input";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': any
            'swiper-slide': any
            'my-custom-input': React.DetailedHTMLProps<React.InputHTMLAttributes<MyCustomInput>, MyCustomInput>;
        }
    }
}