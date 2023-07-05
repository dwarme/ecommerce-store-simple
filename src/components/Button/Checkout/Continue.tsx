import React from "react";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";

interface Props {
    title: string
    disabled?: boolean
    loading?: boolean
}

const Continue: React.FC<Props> = (props) => {

    return (
        <div className="rs-checkout-action">
            <div className="row">
                <div className="column large-6 small-12">
                    {!props.loading &&
                        <button
                            id="rs-checkout-continue-button-bottom"
                            type="submit"
                            className="form-button"
                            disabled={props.disabled}
                        >
                            <span>{props.title}</span>
                        </button>
                    }

                    {props.loading &&
                        < div style={{ maxHeight: '100%' }}>
                            <LoadingSpinner />
                        </div>
                    }
            </div>
        </div>
        </div >
    )
}

export default Continue;