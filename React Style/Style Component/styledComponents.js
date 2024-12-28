import style from "styled-components";

export const Div = style.div`
    border: 2px solid;
    background-color: red;
    h1 {
        color: white;
    };

    & p {
        border: 2px solid white;
    }
`;

/*
    " & p {
    
    } " means it holds and design the parent elements

*/
