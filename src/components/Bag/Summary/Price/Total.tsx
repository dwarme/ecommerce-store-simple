const Total: React.FC<{total: string}> = ({total})=>{
    return (
        <div className="rs-summary-labelandvaluecontainer rs-summary-total">
            <div className="rs-summary-label" data-autom="bagtotallabel">Total</div>
            <div className="rs-summary-value" data-autom="bagtotalvalue">{total}</div>
        </div>
    )
}

export default Total;