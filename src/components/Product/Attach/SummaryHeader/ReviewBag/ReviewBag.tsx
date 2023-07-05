import SummaryHeader from "../SummaryHeader"

interface ReviewBagProps {
    title?: string
    bagLink: string
    product: {
        name: string
        image: {
            src: string
            srcset?: string
            className?: string
            alt?: string
        }
    }
}

const ReviewBag: React.FC<ReviewBagProps> = ({title, bagLink, product }) => {
    
    return (
        <SummaryHeader 
            title={title || 'Review Bag'}
            link={bagLink}
            product={product}
        />
    )
}

export default ReviewBag;