import React, { useState } from "react";
import styled, { css } from "styled-components";

import Row from "./Row";
import GameContext from "../core/GameContext";
import { winnerPlayer } from "../core/rules";
import playerSubstitutionImage from "../assets/player-substitution.png";
import getInitialValues from "../data/initialValues";

const Container = styled.main`
    flex: 1;
    height: 100%;
    width: 100%;
    max-width: 600px;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

const GameWrapper = styled.div`
    font-family: "Source Sans Pro", "Roboto", sans-serif;

    .tictac-wrapper {
        margin-top: 20px;
        border-radius: 6px;
        padding: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        border: 3px solid #fad050;
    }
`;

const ChangePlayerButton = styled.button`
    border-radius: 6px;
    padding: 6px 8px;
    margin-right: 6px;
    font-family: "Otomanopee One";
    font-size: 0.8rem;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.active
            ? css`
                  border: 1px solid #fad050;
                  background-color: #fad050;
                  color: #fff;

                  &:hover {
                      background-color: #fddb73;
                  }
              `
            : css`
                  border: 1px solid #fad050;
                  background-color: #fff;
                  color: #fad050;

                  cursor: not-allowed;
              `}

    img {
        height: 26px;
    }

    span {
        margin-left: 4px;
    }
`;

const GameHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

const GameHeaderInfo = (props) => {
    if (props.lastWinner) {
        return props.lastWinner === "draw" ? (
            <h4>O jogo terminou empatado!</h4>
        ) : (
            <h4>
                Parabéns Player {props.player}, você venceu o outro player
                idiota!
            </h4>
        );
    }

    return <h4>É a sua vez, Player {props.player}, seu idiota!</h4>;
};

const Game = (props) => {
    const [player, changePlayer] = useState(1);
    const [gameInProgress, changeGameStatus] = useState(true);
    const [rows, changePosition] = useState(getInitialValues());
    const [lastWinner, setLastWinner] = useState(undefined);

    const checkWinner = () => {
        setTimeout(() => {
            let winner = winnerPlayer(rows);
            if (winner) {
                changeGameStatus(false);

                if (winner !== "draw") {
                    const winnerName = winner === "X" ? "Player 1" : "Player 2";
                    setLastWinner(winnerName);
                } else {
                    setLastWinner(winner);
                }
            } else {
                changePlayer(player === 1 ? 2 : 1);
            }
        }, 100);
    };

    const restartGame = () => {
        changePosition(getInitialValues());
        changePlayer(1);
        changeGameStatus(true);
        setLastWinner(undefined);
    };

    return (
        <Container>
            <GameContext.Provider
                value={{
                    player,
                    changePlayer,
                    rows,
                    changePosition,
                    checkWinner,
                    gameInProgress,
                }}
            >
                <GameWrapper>
                    <GameHeaderInfo lastWinner={lastWinner} player={player} />

                    <GameHeader>
                        <ChangePlayerButton
                            onClick={(event) =>
                                changePlayer(player === 1 ? 2 : 1)
                            }
                            active={gameInProgress}
                        >
                            <img
                                src={playerSubstitutionImage}
                                alt="Substitution icon"
                            />
                            <span>Change player</span>
                        </ChangePlayerButton>

                        <ChangePlayerButton
                            onClick={() => restartGame()}
                            active={true}
                        >
                            <span>Restart game</span>
                        </ChangePlayerButton>
                    </GameHeader>

                    <div className="tictac-wrapper">
                        {rows.map((row, index) => (
                            <Row
                                key={row.position}
                                position={row.position}
                                columns={row.columns}
                                border={index !== rows.length - 1}
                            ></Row>
                        ))}
                    </div>
                </GameWrapper>
            </GameContext.Provider>
        </Container>
    );
};

export default Game;
