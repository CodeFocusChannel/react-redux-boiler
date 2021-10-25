import styled from "styled-components";

import { v } from "../../../styles/variables";

export const SHeader = styled.div`
    width: 100%;
    height: ${v.headerHeight};
    background: ${({ theme }) => theme.bg};

    display: flex;
    justify-content: center;
    align-items: center;
`;
