const Title: React.FC<{ title: string, link: string }> = ({title, link}) => {
    return (
        <div className="rs-iteminfo-title-wrapper large-6 small-12">
            <h2 className="rs-iteminfo-title">
                <a
                    href={link}
                    data-autom="bag-item-name"
                >
                    {title}
                </a>
            </h2>
        </div>
    )
}

export default Title;