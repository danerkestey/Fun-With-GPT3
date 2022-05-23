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

export default function PromptButton({ text }) {
    return (
        <Prompt onClick={(event) => handlePromptButtonClick(text)}>
            <h2>
                {text}
            </h2>
        </Prompt>

    );
}

const handlePromptButtonClick = async (text) => {
    await navigator.clipboard.writeText(text)
    alert("Copied to clipboard!");
};