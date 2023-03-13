import styled from 'styled-components';

const Wrapper = styled.article `
    width:60%;
    margin:0 auto;
    .heading{
        text-align: center;
        margin-bottom: 2rem;
    }
    .container {
        margin-top: 5rem;
        height:auto;
        background-color: #fff;
        padding:2rem;
        border-radius:0.25rem;
        box-shadow: 0  5px 3px  rgba(0,0,0,0.1);
    }
    .searchcontainer { 
        display:flex;
        justify-content: center;
    }
    input { 
        padding:0.75rem;
        margin:1rem;
        width:200px;
        border:1px solid var(--neutral-grey);
        border-radius:0.25rem;
    }
    .btn {
        background-color: var(--primary-dark);
        width:4rem;
        height:2.5rem;
        border:0;
        border-radius:0.25rem;
        color:#fff;
        text-transform: uppercase;
        cursor:pointer;
        float:right;
    }
    .searchcontainer .searchfield > div{
        width:300px;
    }
    @media screen and (max-width:1200px) {
            width:80%;
        .btn {
            width:3rem;
        }
    }
    @media screen and (max-width: 768px){
        width:90%;
    }
`;


export default Wrapper;