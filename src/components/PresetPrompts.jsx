import React from 'react';
import Styled from 'styled-components';
import PromptButton from './PromptButton';


export default function PresetPrompts() {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", margin: "1em 20% 0 10%" }}>
            <h2 style={{ margin: "1em 4em 0 0" }}>
                Try These:
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <PromptButton text="Give me an idea for an online store" on />
                <PromptButton text="What platform should I use for my store?" />
                <PromptButton text="What sites can I source products from?" />
            </div>
        </div>

    );
}