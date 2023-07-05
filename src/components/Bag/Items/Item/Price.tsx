const Price: React.FC<{ price: string }> = ({ price }) => {
    return (
        <div className="rs-iteminfo-pricedetails large-last">
            <div className="rs-iteminfo-price">
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Price;