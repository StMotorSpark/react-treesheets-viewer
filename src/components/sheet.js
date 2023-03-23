import React, { useState } from "react";
import styled from "styled-components";
import Grid from "./grid";
import Cell from "./cell";

const SheetContainer = styled.div`
    width: 100%;
    height: 100%;
`;

function buildGrid({ data }, isSubGrid = false) {
    // the data is going to be a 2d array

    // let's build out the cells first
    let cells = data.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
            // debugger;
            if (cell === null) {
                return <Cell key={cellIndex} value={null} />;
            }

            // if a cell has sub data, we need to build a sub grid
            let subData = null;
            if (cell.data) {
                subData = buildGrid(cell, true);
            }

            return <Cell key={cellIndex} value={cell.value}>
                {subData}
            </Cell>;
        });
    });

    // calculate the column count for use in the grid styling
    let colCount = data[0].length;

    return <Grid colCount={colCount} type={isSubGrid ? "" : "root"}>
        {cells}
    </Grid>;
}

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

function useSheetState() {
    const [state, setState] = useState({
        data: sheetData,
        cellSelection: {
            cellId: null,
            direction: null
        }
    });

    //TODO implement and test cell selection
    const cellSelection = (cellId, direction) => {
        setState({
            ...state,
            cellSelection: {
                cellId,
                direction
            }
        })
    };

    return {
        state
    }
}

function Sheet({ children }) {
    // we need to take the data and build ouf the grid and cells recirsivly
    const { state } = useSheetState();

    let sheetData = buildGrid(state.data);

    return (
        <SheetContainer>
            Sheet: {state.data.name}

            {sheetData}

            {children}
        </SheetContainer>
    );
}

export default Sheet;