import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";

const Remove: React.FC<{onRemove: ()=>void, loading?: boolean}> = ({onRemove, loading})=>{
    return (
        <div className="rs-iteminfo-pricelineitemwrapper">
            <div className="rs-summary-content rs-summary-iteminfoactions">
                <div className="rs-summary-labelandvaluecontainer">
                    <div className="rs-summary-label" >
                        <div className="rs-iteminfo-actions-left"></div>
                    </div>
                    <div className="rs-summary-value">
                        <div className="rs-iteminfo-actions-right">
                            {!loading &&
                            <button 
                                type="button"
                                className="rs-iteminfo-remove as-buttonlink"
                                id="shoppingCart.items.item-be39e0db-7919-4cef-935d-2d282c0bedce.delete"
                                onClick={onRemove}
                            >
                                 Remove
                            </button>
                            }
                            {loading &&
                                <LoadingSpinner style={{width: 20, float: 'right'}}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Remove;