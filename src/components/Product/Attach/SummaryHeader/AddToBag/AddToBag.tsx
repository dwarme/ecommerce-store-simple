import SummaryHeader from "../SummaryHeader"

interface AddToBagProps {
    title?: string
    product: {
        name: string
        image: {
            src: string
            srcset?: string
            className?: string
            alt?: string
        }
    }

    onAddToBag: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const AddToBag: React.FC<AddToBagProps> = ({ onAddToBag, product, title }) => {

    return (
        <SummaryHeader
            title={title || 'Add to Bag'}
            product={product}
            onButtonClick={onAddToBag}
        />
    )

}

export default AddToBag;