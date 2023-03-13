import Search from '../Search'
import {render, screen, act,renderHook,logRoles } from '@testing-library/react';
import { AsyncPaginate } from "react-select-async-paginate";

describe('Search', ()=>{
    
    it('renders correctly', ()=>{
        render(<Search />);

        //combobox
        const selectBox = screen.getByRole('combobox');
        expect(selectBox).toBeInTheDocument();

        //placeholder text
        const placeholderValue = screen.getByText('Enter city');
        expect(placeholderValue).toBeInTheDocument();
    })

});


    

