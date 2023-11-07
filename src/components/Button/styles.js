import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;

    background-color: ${({theme})=> theme.COLORS.ORANGE};
    color: ${({theme})=> theme.COLORS.BACKGROUND_800};

    margin-top: 1.6rem;
    padding: 0 1.6rem;
    border: 0;
    border-radius: 1rem;
    
    font-weight: 500;

    &:disabled{
        opacity: .5;
    }
`;