import React from "react";
import styled from "styled-components";

const RootGrid = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${props => props.colCount}, minmax(10vw, 40vw));

    width: 20vw;
    hight: 20vh;
    border: 1px solid black;
`;

const SubGrid = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(${props => props.colCount}, minmax(10vw, 40vw));
    margin-left: 20px;
    margin-top: 20px;
`;

// in the future there may ge other grid types

function Grid({ type, colCount, children }) {
    let gridDisplay = null;

    // debugger;

    switch (type) {
        case "root":
            gridDisplay = <RootGrid colCount={colCount}>{children}</RootGrid>;
            break;
        default:
            gridDisplay = <SubGrid>{children}</SubGrid>;
            break;
    }

    return <>
        {gridDisplay}
    </>;
}

export default Grid;