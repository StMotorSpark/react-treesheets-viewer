import React from "react";
import styled from "styled-components";
import Grid from "./grid";
import Cell from "./cell";

const SheetContainer = styled.div`
    width: 100%;
    height: 100%;
`;

function buildGrid({data}, isSubGrid = false) {
    // the data is going to be an 2d array
    // debugger;
    
    // let's build out the cells first
    let cells = data.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
            // debugger;
            if (cell === null) {
                return <Cell key={cellIndex} value={null} />;
            }

            let subData = null;
            if(cell.data) {
                subData = buildGrid(cell, true);
            }

            return <Cell key={cellIndex} value={cell.value}>
                {subData}
            </Cell>;
        });
    });

    let colCount = data[0].length;

    return <Grid colCount={colCount} type={isSubGrid ? "" : "root"}>
        {cells}
    </Grid>;
}

function Sheet({data, children}) {
    // we need to take the data and build ouf the grid and cells recirsivly

    let sheetData = buildGrid(data);

    return (
        <SheetContainer>
            Sheet: {data.name}

            {sheetData}

            {children}
        </SheetContainer>
    );
}

export default Sheet;