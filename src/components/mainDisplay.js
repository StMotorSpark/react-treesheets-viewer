import React, { useState } from 'react';
import styled from 'styled-components';

import Sheet from './sheet';
import Grid from './grid';
import Cell from './cell';

const MainDisplayContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`;

function MainDisplay() {

    return (
        <MainDisplayContainer>
            <h1>Hi</h1>
            <Sheet>
            </Sheet>
        </MainDisplayContainer>
    );
}

export default MainDisplay;