import React from "react";
import Styled from "styled-components";

const Primary = Styled.button`
    background-color: #3CA1FF;
    color: #3CA1FF;

    border-radius: 30px;
    border-color: transparent;
    width: 10em;
    height: 4em;

    cursor: pointer;

`;


export default function PrimaryButton({ text, onClick }) {
    return (
        <Primary onClick={onClick}>
            <h2>
                {text}
            </h2>
        </Primary>

    );
}