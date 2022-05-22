import React from "react";
import Styled from "styled-components";
import { Textarea, ScrollArea, createStyles } from '@mantine/core';
import PrimaryButton from "./PrimaryButton";

const StyledContainer = Styled.div`
    
`

const StyledPrompt = Styled.div`
    background-color: #FFFFFF;
    width: 1000px;
    border-radius: 30px;
    margin: 0;
`


export default function PromptBox() {
    return (
        <StyledContainer style={{ display: "flex", flexDirection: "row", justifyContent: "center", margin: "3% 0 0 0"}}>
            <StyledPrompt>
                <h3 style={{ padding: "0.40em 0 0 0.75em" }}>
                    Prompt:
                </h3>
                <Textarea
                    placeholder="Ask Shoppy your curious business questions here!"
                    autosize
                    minRows={3}
                    maxRows={3}
                    radius="xl"
                    size="xl"
                // required

                />
            </StyledPrompt>
            <div style={{ margin: "3em 0 0 4em" }}>
                <PrimaryButton text="SUBMIT" />
            </div>
        </StyledContainer>

    );
}