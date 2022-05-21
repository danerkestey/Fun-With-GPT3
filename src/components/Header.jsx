import React from "react";
import Styled from "styled-components";
import { Icon } from '@iconify/react';

const HeaderContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: centre;
    padding: 3em 5em 0 5em;

`;

export default function Header( {children} ) {
    return (
        <HeaderContainer>
            <h1>{children}</h1>
            <Icon icon="ant-design:smile-outlined" color="#F8F8F8" height={80} align="center"/>
        </HeaderContainer>

    );
}