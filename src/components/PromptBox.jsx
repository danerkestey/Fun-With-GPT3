import React from "react";
import Styled from "styled-components";
import { Textarea, ScrollArea, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import { queryGpt3 } from "../OpenAI";

import PrimaryButton from "./PrimaryButton";

const StyledContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 3% 0 0 0;    
`

const StyledPrompt = Styled.div`
    background-color: #FFFFFF;
    width: 60em;
    border-radius: 30px;
    margin: 0;

`

export default function PromptBox({ setResponses }) {
    const form = useForm({
        initialValues: {
            query: '',
        },
    });

    return (
        <StyledContainer>
            <form
                onSubmit={form.onSubmit((event) => handleSubmit(event, setResponses))}
                style={{ display: "flex", flexDirection: "row" }}
            >
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
                        {...form.getInputProps('query')}
                    />
                </StyledPrompt>

                <div style={{ margin: "3em 0 0 4em" }}>
                    <PrimaryButton type="submit" text="SUBMIT" />
                </div>
            </form>
        </StyledContainer>

    );
}

const handleSubmit = async (event, setResponses) => {
    const query = event.query;
    const result = await queryGpt3(query);
    setResponses([...result]);
}; 