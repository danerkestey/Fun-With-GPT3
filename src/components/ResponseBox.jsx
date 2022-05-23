import React from "react";
import Styled from "styled-components";
import { Textarea, ScrollArea, createStyles } from '@mantine/core';



const ResponseContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    height: 300px;
    width: 60em;
    background-color: #FFFFFF;
    border-radius: 30px;
    margin: 2em 12em 0 0;
    
`;


const ResponseTextBox = Styled.div`

`;


export default function ResponseBox({ responses }) {
    let str = "";
    for (const line of responses)
        str += line;

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <ResponseContainer>
                <h3 style={{ padding: "0.4em 0 0 0.75em" }}>
                    Output:
                </h3>
                <p style={{ padding: "0 0 0 1.50em"}}>
                    Output may take some time
                </p>

                <div style={{ margin: "0 3em 0 1.5em" }}>
                    <Textarea minRows={7} maxRows={7} value={str} readOnly >
                    </Textarea>
                </div>
            </ResponseContainer >
        </div >
    );
}