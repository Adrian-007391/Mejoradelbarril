import styled from "styled-components";

export const Container = styled.div`
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    h6{
        font-size: 30px;
        font-weight: bold;
        margin: 0;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        margin:20px 0;
        font-size: 18px;
    }
`;

export const Cost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CostItem = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    p{
        margin-top: 0;
        margin-bottom: 5px;
        font-weight: bold;
    }
    span{
        font-weight: bold;
        color: #017A5A;
    }
`;

export const Data = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.div`
    border-radius: 50%;
    margin-left: 50px;
    width: 85px;
    height: 85px;
    background-color: #017A5A;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
`;