import React from "react";
import styled from "styled-components";
import headerImage from "../assets/tic-tac-toe.png";

const HeaderStyled = styled.header`
    width: 100%;
    height: 60px;

    .header__container {
        margin: auto;
        max-width: 600px;
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .header__image img {
            height: 38px;
        }

        .header__title {
            margin-left: 20px;
            font-family: "Yomogi", sans-serif;

            h4 {
                margin: 0;
                padding: 0;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
            <div className="header__container">
                <div className="header__image">
                    <img src={headerImage} alt="title" />
                </div>
                <div className="header__title">
                    <h4>React tac toe</h4>
                </div>
            </div>
        </HeaderStyled>
    );
};

export default Header;
