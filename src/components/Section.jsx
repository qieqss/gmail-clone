import React from 'react';

const Section = ({ Icon, title, color, selected }) => {
    return (
        <section className={`section ${selected && "section--selected"}`}
        style={{
            borderBottom: `3px solid ${color}`,
            color: `${selected && color}`
        }}
        >
            <Icon />
            <h4>{title}</h4>
        </section>
    );
}

export default Section;
