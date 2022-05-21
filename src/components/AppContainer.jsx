import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    background: radial-gradient(152.29% 217.05% at 99.06% 112.01%, #665000 0%, #371878 35.94%, #171717 86.23%)
`;

export default function AppContainer({ children }) {
    return (
        <Container>
            {/* <BackgroundColorContainer/> */}

            {children}
        </Container>
    );
}