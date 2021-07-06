import React from "react";
import styled from "styled-components";

import Column from "./Column";

const RowElement = styled.div`
    color: #333;
    display: flex;
    flex-direction: row;
    align-items: center;

    border-bottom: ${(props) => (props.border ? "5px solid #FAD050" : "0px")};
`;

const Row = (props) => {
    const columns = props.columns ?? [];
    return (
        <RowElement className="row" border={props.border}>
            {columns.map((column, index) => (
                <Column
                    key={column.position}
                    position={column.position}
                    value={column.value}
                    row={props.position}
                    marked={!!column.value}
                    border={index !== columns.length - 1}
                ></Column>
            ))}
        </RowElement>
    );
};
export default Row;
