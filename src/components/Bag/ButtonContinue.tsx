import React from "react";

const ButtonContinue: React.FC<{ link: string, title?: string }> = ({ link, title = 'Continue' }) => {
    return (
        <div className="large-6 small-8 row " style={{ marginTop: 40 }}>
            <a
                href={link}
                className="button form-button"
            >
                <span>{title}</span>
            </a>
        </div>
    )
}

export default ButtonContinue;