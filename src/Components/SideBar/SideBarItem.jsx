import React from 'react';
import { Wrapper } from './SideBarItem.style';

const SideBarItem = ({img, text}) => {
    return ( <Wrapper>
        <img src={img} alt=""/>
        <p>{text}</p>
    </Wrapper> );
}
 
export default SideBarItem;