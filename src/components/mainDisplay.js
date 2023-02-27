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

// temp data sheet data for development
const sheetData = {
    name: "Sheet 1",
    // data is a 2d array of cells, each cell is an object that can have it's own data
    data: [
        [
            {
                value: "Branchsheet Development"
            },
            null
        ],
        [
            {
                value: "Idea:",
                data: [
                    [
                        {
                            value: "Create a Javascript based alternative to Tree Sheets display"
                        }
                    ],
                    [
                        null
                    ]
                ]
            },
            {
                value: "Testing",
            }
        ]
    ]
}

function useCoreState() {
    const [state, setState] = useState({
        currentSheet: sheetData
    });

    return {
        state
    }
}

function MainDisplay() {
    const { state } = useCoreState();

    return (
        <MainDisplayContainer>
            <h1>Hi</h1>
            <Sheet data={state.currentSheet}>
            </Sheet>
        </MainDisplayContainer>
    );
}

export default MainDisplay;