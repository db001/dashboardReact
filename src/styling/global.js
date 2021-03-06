import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.bodyBg};
    transition: all 0.25s linear;
}

.header {
    background-color: ${({ theme }) => theme.topBg};
}

.headlineContainer h1 {
    color: ${({ theme }) => theme.mainText};
}

.headlineContainer p {
    color: ${({ theme }) => theme.subText};
}

@media only screen and (max-width: 479px) {
    .toggleContainer {
        border-top: 1px solid ${({ theme }) => theme.subText};
    }
}

h3 {
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
    color: ${({ theme }) => theme.subText};
}

.toggleContainer {
    color: ${({ theme }) => theme.subText};
}

.toggleBody {
    background-image: ${({ theme }) => theme.toggle};
    background-color: ${({ theme }) => theme.toggle};
}

.toggleInner {
    background-color: ${({ theme }) => theme.topBg};
    left: ${({ theme }) => theme.togglePos};
}

`;