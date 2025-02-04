import React from 'react';


export function ButtonSolid({
    text,
    onClick,
    disable,
    hidden,
    children,
    link,
    title,
    icon,
    className,
}) {
    return (
        <button
            onClick={onClick}
            disabled={disable}
            hidden={hidden}
            className={`button-solid button ${className}`}
            title={title}
            {...(link? { href: link } : {})}
        >
            {icon && <span className={`icon ${icon}`} />}
            {text}
            {children}
        </button>
    );
}