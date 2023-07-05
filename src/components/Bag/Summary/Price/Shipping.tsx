const Shipping: React.FC<{shippingFee: string}> = ({shippingFee})=>{
    return (
        <div className="rs-summary-content rs-summary-shipping">
            <div className="rs-summary-labelandvaluecontainer">
                <div className="rs-summary-label">Shipping fee</div>
                <div className="rs-summary-value">{shippingFee}</div>
            </div>
        </div>
    )
}

export default Shipping;