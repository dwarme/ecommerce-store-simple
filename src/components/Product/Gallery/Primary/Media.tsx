import { IProductImage } from "../../../../types";

interface MediaProps{
    image: IProductImage & {className?: string}
}
const Media: React.FC<MediaProps> = ({image})=>{
    return (
        <div className="rf-flagship-media" style={{maxHeight: '492px', justifyContent: 'center'}}>
        <div className="rf-flagship-image-wrapper" style={{minHeight: 'auto'}}>
            <img

                alt={image.alt ?? ''}
                src={image.src}
                className={`rf-flagship-main-image rf-flagship-main-image-dimensionColor ${image.className ?? ''}`}
                style={{paddingTop:0, height: 'auto', width: '100%'}}
            />
        </div>
    </div>
    )
}

export default Media;