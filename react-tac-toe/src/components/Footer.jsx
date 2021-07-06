import React from "react";
import styled from "styled-components";

const FooterStyled = styled.section`
    width: 100%;
    height: 30px;
    margin-top: 60px;

    .footer__container {
        margin: auto;
        max-width: 600px;
        height: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        font-size: 0.7rem;
        color: #555;

        a {
            text-decoration: none;
            color: #888;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyled>
            <div className="footer__container">
                <div className="footer__developed">
                    <p>Developed by pvinics at gmail.com - 2021</p>
                </div>
                <div className="footer__social">
                    <p>
                        Check it on{" "}
                        <a href="https://github.com/pviniciusm/react-tac-toe">
                            github
                        </a>
                    </p>
                </div>
            </div>
        </FooterStyled>
    );
};

export default Footer;
