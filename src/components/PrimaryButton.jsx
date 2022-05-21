import React from "react";
import Styled from "styled-components";

const Primary = Styled.button`
    background-color: #3CA1FF;
    color: #3CA1FF;

    border-radius: 30px;
    width: 10em;
    height: 4em;

    cursor: pointer;

`;

const handlePrimaryClick = () => {
    console.log("primary button clicked")
}

export default function PrimaryButton({ text }) {
    return (
        <Primary onClick={handlePrimaryClick}>
            <h2>
                {text}
            </h2>
        </Primary>

    );
}