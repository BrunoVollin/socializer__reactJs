import React from 'react';

const SideBarItem = ({img, text}) => {
    return ( <li>
        <img src={img} alt=""/>
        <p>{text}</p>
    </li> );
}
 
export default SideBarItem;