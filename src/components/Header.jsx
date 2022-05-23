import React from "react";
import Styled from "styled-components";
import { Icon as Smiley } from '@iconify/react';

const HeaderContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3em 5em 0 5em;

`;

const Icon = ({setOverlayOpened}) => {
    return <Smiley
        icon="ant-design:smile-outlined"
        color="#F8F8F8"
        height={80}
        align="center"
        cursor="pointer"
        onClick={() => setOverlayOpened(true)}
    />
};

const Link = Styled.a`
    color: none;
    text-decoration: none;
`

export default function Header({ text, setOverlayOpened }) {
    return (
        <HeaderContainer>
            <Link href="/">
                <h1>{text}</h1>
            </Link>

            <Icon setOverlayOpened={setOverlayOpened}/>
        </HeaderContainer>

    );
}