import React, { CSSProperties } from "react";

interface LoadingIndicatorProps{
    className?: string
    style?: CSSProperties
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({style, className}) => {
    return (
        <div className="ac-gn-loading-indicator">
            <div
                className="progress-indicator progress-indicator-indeterminate progress-indicator-curtain progress-indicator-visible ac-gn-progress-indicator-curtain"
                aria-label="aria-label-from-constructor"
            >
                <svg style={style} className={`progress-indicator-icon ${className ?? ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" aria-hidden="true"> <g className="progress-indicator-spokes"> <path className="progress-indicator-spoke" d="M28,8.5A2.5,2.5,0,0,1,30.5,11v7a2.5,2.5,0,0,1-5,0V11A2.5,2.5,0,0,1,28,8.5Z"> </path> <path className="progress-indicator-spoke" d="M41.79,14.21a2.52,2.52,0,0,1,0,3.54L36.84,22.7a2.5,2.5,0,0,1-3.54-3.54l5-4.95A2.52,2.52,0,0,1,41.79,14.21Z"> </path> <path className="progress-indicator-spoke" d="M47.5,28A2.5,2.5,0,0,1,45,30.5H38a2.5,2.5,0,0,1,0-5h7A2.5,2.5,0,0,1,47.5,28Z"> </path> <path className="progress-indicator-spoke" d="M41.79,41.79a2.52,2.52,0,0,1-3.54,0l-5-4.95a2.5,2.5,0,0,1,3.54-3.54l4.95,5A2.52,2.52,0,0,1,41.79,41.79Z"> </path> <path className="progress-indicator-spoke" d="M28,47.5A2.5,2.5,0,0,1,25.5,45V38a2.5,2.5,0,0,1,5,0v7A2.5,2.5,0,0,1,28,47.5Z"> </path> <path className="progress-indicator-spoke" d="M14.21,41.79a2.52,2.52,0,0,1,0-3.54l4.95-5a2.5,2.5,0,0,1,3.54,3.54l-4.95,4.95A2.52,2.52,0,0,1,14.21,41.79Z"> </path> <path className="progress-indicator-spoke" d="M8.5,28A2.5,2.5,0,0,1,11,25.5h7a2.5,2.5,0,0,1,0,5H11A2.5,2.5,0,0,1,8.5,28Z"> </path> <path className="progress-indicator-spoke" d="M14.21,14.21a2.52,2.52,0,0,1,3.54,0l4.95,4.95a2.5,2.5,0,0,1-3.54,3.54l-4.95-4.95A2.52,2.52,0,0,1,14.21,14.21Z"> </path> </g> </svg>
            </div>
        </div>
    )
}

export default LoadingIndicator;