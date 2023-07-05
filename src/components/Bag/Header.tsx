const Header: React.FC<{title: string, subtitle?: string}> = ({title, subtitle}) => {
    return (
        <div className="large-8 small-12 rs-header-noborder">
            <h1 className="rs-bag-header" data-autom="bag-header" tabIndex={-1} >{title}</h1>
            {subtitle &&
                <div className="rs-bag-headermessage">
                    <span className="pd-util-weight-semibold">{subtitle}</span>
                </div>
            }
        </div>
    )
}

export default Header;