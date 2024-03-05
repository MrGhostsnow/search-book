import styled from "styled-components";

export const ContainerHomePage = styled.div`
    width: 1200px;
    height: 400px;
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;    
    border: 1px solid ;
    border-radius: 8px;
    background-color: #434371;
`

export const ContainerFindBooks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ResultTerm = styled.p`
    color: #484041;
    font-weight: 700;
    font-size: 18px;
    padding: 10px;
`;

export const SectionFindBooks = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    gap: 3rem;
    padding: 3rem;
    width: 100%;
`;

export const LabelSection = styled.section`
    text-align: center;
`;

export const Label = styled.h2`
    font-size: 30px;
    color: #93b7be;
    font-weight: 700;
`

export const PaginationButtons =styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    button {
        background-color: #484041;
        width: 100px;
        height: 30px;
        border-radius: 8px;
        border: none;
        color: #93b7be;
        font-weight: 700;
        cursor: pointer;
        font-size: 16px;
    }

    button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`