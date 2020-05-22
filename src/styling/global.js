import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.bodyBg};
    transition: all 0.25s linear;
}

.header {
    background-color: ${({ theme }) => theme.topBg};
}

.headlineContainer p {
    color: ${({ theme }) => theme.subText};
}

.overviewCard {
    background-color: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.mainText};
}

.overviewCard:hover {
    background-color: ${({ theme }) => theme.cardBgHover};
}

.overviewCard .cardHeader {
    color: ${({ theme }) => theme.subText};
}

.metricContainer .percentChangeContainer {
    color: ${({ theme }) => theme.subText};
}

.followerCard {
    background-color:${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.mainText};
}

.followerCard:hover {
    background-color: ${({ theme }) => theme.cardBgHover};
}

.followerCard .handleContainer {
    color: ${({ theme }) => theme.subText};
}

.followerContainer .followerName {
    color: ${({ theme }) => theme.subText};;

`;