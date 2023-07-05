interface SummaryHeaderProps {
    title: string
    link?: string
    product: {
        name: string
        image: {
            src: string
            srcset?: string
            className?: string
            alt?: string
        }
    }
    onButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}

const SummaryHeader: React.FC<SummaryHeaderProps> = ({ title, link, product, onButtonClick }) => {
    return (
        <div className="rf-summary-header" data-autom="summaryHeader">
            <div className="as-l-container row rf-summary-header-content">
                <div className="rf-summary-header-left">
                    <img
                        width="100"
                        height="100"
                        alt={product.image.alt}
                        src={product.image.src}
                        srcSet={product.image.srcset}
                        className={`rf-summary-header-image ${product.image.className}`}
                        data-autom="attach-summary-image"
                    />
                    <div className="rf-summary-header-productdesc">
                        <span className="rf-summary-header-producttitle" data-autom="summaryHeaderTitle">{product.name}</span>
                    </div>
                </div>
                <div className="rf-summary-header-right">
                    <div className="rf-summary-header-button">
                        {link &&
                            <a
                                href={link}
                                title="Review Bag"
                                className="button button-block"
                            >
                                {title}
                            </a>
                        }

                        {(onButtonClick || !link) &&
                            <button
                                title={title}
                                className="button button-block"
                                onClick={onButtonClick}
                            >
                                {title}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryHeader;