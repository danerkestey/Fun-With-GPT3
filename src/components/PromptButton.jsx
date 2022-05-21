import React from "react";
import Styled from "styled-components";

const Prompt = Styled.button`
    background-color: transparent;
    border: 0.4em solid #E0E0E0;
    outline: none;

    padding: 10px 60px;
    border-radius: 30px;
    margin: 10px 0px;
    width: 40em;
    height: 4em;

    cursor: pointer;

`;

const handlePromptClick = () => {
    console.log("prompt clicked")
}

export default function PromptButton({ text }) {
    return (
        <Prompt onClick={handlePromptClick}>
            <h2>
                {text}
            </h2>
        </Prompt>

    );
}