import React from "react";
import styled from "styled-components";

const CellContainer = styled.div`
    min-width: 30px;
    min-height: 30px;
    border: 1px dotted grey;
    padding: 20px;
`;

const CellContainerDirection = styled.div``;

//TODO implement dandlers for cell focus, blur, and event keys
function Cell({value, children}) {
    return (
        <CellContainer>
            {value}
            {children}
        </CellContainer>
    );
}

export default Cell;