import React from "react";
import Styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { Modal } from '@mantine/core';

const StyledContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;

    border-radius: 30px;
    width: 30em;
    height: 20em;    
    
    background-color: #000000;


`;

const Link = Styled.a`
    color: none;
    text-decoration: none;
    margin: 0;
`;

const StyledBody = Styled.p`
    color: black;
    
`;

export default function Overlay({ overlayOpened, setOverlayOpened }) {
    return (
        <Modal opened={overlayOpened} centered closeOnClickOutside={true} closeOnEscape withCloseButton={false}>
            <h2 style={{ color: "#000000" }}>Welcome!</h2>
            <StyledBody>
                Hi!

                My name is Daner, and this is my submission for the Shopify Front End Developer Intern Challenge Fall 2022! I hope you like it!

                Here are my links:
            </StyledBody>

            <Link href="https://www.linkedin.com/in/daneryasin/">
                <StyledBody>LinkedIn</StyledBody>
            </Link>

            <Link href="https://github.com/danerkestey/fun-with-gpt3">
                <StyledBody>GitHub</StyledBody>
            </Link>

            <Link href="https://www.figma.com/proto/RKHklPrwTeG0h25LxpPlQo/Fun-with-GPT-3?node-id=3%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3%3A2">
                <StyledBody>Figma</StyledBody>
            </Link>

            <PrimaryButton text="THANKS" onClick={() => setOverlayOpened(false)} />
        </Modal>



    );
}