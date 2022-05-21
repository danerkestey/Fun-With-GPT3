import React from "react";
import Styled from "styled-components";

const PresetContainer = Styled.div`
    
`;

export default function PresetPrompt( {children} ) {
    return (
        <PresetContainer>
            <h2>{children}</h2>
        </PresetContainer>

    );
}