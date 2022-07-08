import React from 'react';

const SidebarOption = ({ Icon, title, number, selected }) => {
    return (
        <div className={`sidebar__option ${selected && "sidebar__option--active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption;
