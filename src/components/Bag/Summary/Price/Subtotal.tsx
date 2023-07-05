const Subtotal: React.FC<{subtotal: string}> = ({subtotal})=>{
    return (
        <div className="rs-summary-content rs-summary-subtotal">
            <div className="rs-summary-labelandvaluecontainer">
                <div className="rs-summary-label" data-autom="bagrs-summary-subtotallabel">Subtotal</div>
                <div className="rs-summary-value" data-autom="bagrs-summary-subtotalvalue">{subtotal}</div>
            </div>
        </div>
    )
}

export default Subtotal;