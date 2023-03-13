import React from "react";
import {  renderWithProviders, setupStore } from "./utils/common-test-utils";
import App from './App';
import { mockWeatherData, mockForecastData } from "./utils/testData";
import{ fireEvent, act} from '@testing-library/react';
import * as redux from 'react-redux';
import Search from './components/Search'

jest.mock('react-redux', () => {
    const ActualHelpers = jest.requireActual('react-redux');
    return {
        ...ActualHelpers,
        useSelectorOne: jest.fn(),
        useSelectorTwo: jest.fn(),
        useDispatchMock: jest.fn(),
    };
});

describe("App", () => {
    const mockDispatch = jest.fn();
    let useSelectorOne= jest.fn();
    let useSelectorTwo= jest.fn();
    beforeEach(() => {
      jest.resetAllMocks();
      jest.spyOn(redux, "useDispatch").mockImplementation(() =>mockDispatch);
      useSelectorOne = jest.spyOn(redux, "useSelector").mockImplementation(() =>  { return {data:{},isLoading:true}});
      useSelectorTwo = jest.spyOn(redux, "useSelector").mockImplementation(() =>  { return {forecast:{},isLoading:true}});
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
 
    
    it("Initial render shows loader", () => {
      const store = setupStore();
      const {getByTestId} = renderWithProviders(<App />, { store });
      
      expect(getByTestId('loader')).toBeInTheDocument();
    
    })

   it('dispatches action', () => {
      const store = setupStore(); 
      const {getByRole} = renderWithProviders(<App />, { store });     
      fireEvent.change(getByRole('combobox'))
      expect(mockDispatch).toHaveBeenCalled()
    })
 

    //useSelectorOne = jest.fn(redux, "useSelector").mockImplementation(() => {return {data:mockWeatherData, isLoading:false}});
    //useSelectorTwo = jest.fn(redux, "useSelector").mockImplementation(() => {return {forecast:mockForecastData, loading:false}});
});