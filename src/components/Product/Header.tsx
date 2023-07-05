interface ProductHeaderProps {
    note?: string;
    productName: string;
}

const Header: React.FC<ProductHeaderProps> = ({ note, productName }) => {
    return (
        <div className="rf-flagship-product-header">
            <div>
                {note &&
                    <div className="violator-frameless">
                        {note}
                    </div>
                }
                <h1 className="fwl">
                    {productName}
                </h1>
            </div>
        </div>
    )
}

export default Header;