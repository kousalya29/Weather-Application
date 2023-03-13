import styled from 'styled-components';

const Wrapper = styled.article `
    width:60%;
    margin:0 auto;
    
    .current {
        margin-top:2rem;
        height:auto;
        color:#fff;
        background-color: #000;
        padding:0.5rem 1rem 1rem 1rem;
        border-radius:0.25rem;
        box-shadow: 0  5px 3px  rgba(0,0,0,0.1);
    }
    .top {
        display: flex;
        flex-direction: row;
        padding-top: 0.5rem;
        justify-content: left;
        align-items: left;
    }
    .top p { 
        color:#00ff9e;
        font-weight:800;
        font-size:0.75rem;
        padding-bottom:0.5rem;
    }

    .weather{
        display:flex;
        flex-direction: row;
    }
    .temp {
        font-size:2.5rem;
        font-weight:700;
    }
    
    @media screen and (max-width:1200px) {
         width:80%;
    }

      @media screen and (max-width: 768px){
        width:90%;
    }
`;


export default Wrapper;