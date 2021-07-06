import React, { useContext } from "react";
import styled, { css } from "styled-components";

import GameContext from "../core/GameContext";

const ColumnElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1;
    text-align: center;
    height: 100px;
    background-color: white;

    ${(props) =>
        props.marked
            ? css`
                  background-color: #fdd65f;
              `
            : css`
                  background-color: whitesmoke;
                  &:hover {
                      background-color: #ffecaf;
                      color: whitesmoke;
                  }
              `}
    cursor: pointer;
    /* color: $primary-blue; */

    @media (min-width: 600px) {
        height: 150px;
    }

    border-right: ${(props) => (props.border ? "5px solid #FAD050" : "0px")};
`;

const Column = (props) => {
    const { player, rows, changePosition, checkWinner, gameInProgress } =
        useContext(GameContext);

    const handleColumnClick = (event) => {
        event.preventDefault();

        if (!gameInProgress) return;

        const prevRows = [...rows];
        const currentPosition = prevRows[props.row]?.columns[props.position];

        if (currentPosition) {
            const prevValue = prevRows[props.row].columns[props.position].value;
            if (!prevValue) {
                prevRows[props.row].columns[props.position].value =
                    player === 1 ? "X" : "O";
                changePosition(prevRows);
                checkWinner();
            } else {
                alert("Posicao já marcada");
            }
        }
    };

    return (
        <ColumnElement
            className={`primary-blue ${props.marked ? "marked" : ""}`}
            border={props.border}
            marked={props.marked}
            onClick={handleColumnClick}
        >
            {/* <p>{props.row + ":" + props.position}</p> */}
            <p>{props.value}</p>
        </ColumnElement>
    );
};

export default Column;
