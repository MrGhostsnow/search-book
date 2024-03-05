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