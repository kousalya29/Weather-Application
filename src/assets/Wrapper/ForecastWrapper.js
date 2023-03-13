import styled from 'styled-components';

const Wrapper = styled.article `
    width:60%;
    margin:0 auto;
   padding:0;
    
    .forecast {
        display: flex;
        flex-direction:column;
        flex-wrap:wrap;
        padding: 0;
        border: 2px solid var(--clr-grey-special);
        margin-bottom: 1rem;
        border-radius: var(--radius);
        box-shadow: var(--light-shadow);
    }
    .forecast p {
        color: var(--clr-grey-1);
        margin-bottom: 0;
        margin-top: 0.5rem;
    }
    .forecast header {
         display: grid;
         width: 100%;
         grid-template-columns: repeat(auto-fit, minmax(1rem, auto));
        gap:1rem;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
    }
    .forecast header h4 {
        margin-bottom: 0;
    }
    .details {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .timestamp {
        margin-bottom: 0.5rem;
        font-size:0.75rem;
        color:rgb(21 44 206);
        font-weight: 800;
    }

    .detailsRow {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap:0.5rem;
    }

   .description{
        background-color: #e6eaef;
        width:100%;
        padding: 1rem 1.5rem;
    }
   
    @media screen and (max-width:1200px) {
        width:80%;
        
    }
      @media screen and (max-width:992px) {
        width:80%;
      }
    @media screen and (max-width: 768px){
        width:90%;
        font-size:0.95rem;
        .weather-icon{
            width:100%;
            height:100%;
        }
    }
`;


export default Wrapper;