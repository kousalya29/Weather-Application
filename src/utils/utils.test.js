
import fetchMock from "jest-fetch-mock";
import { getCities } from "./utils";

fetchMock.enableMocks();

describe("Utils", () => {
    const mockCitiesResponse = {
        data:[{city: "Naperville",country:"United States of America",countryCode: "US",
            id: 3058418,latitude: 41.74826,longitude: -88.16585,name: "Naperville",population: 149540,
            region: "Illinois",regionCode: "IL",type: "CITY",wikiDataId: "Q243007"}]
    }

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    //Test manually for data response
    it('returns the correct options when given a search term', async () => {
        
        fetchMock.mockResponse(JSON.stringify(mockCitiesResponse))
        const searchTerm = 'naperville';
        const result = await getCities(searchTerm);

        expect(result.options).toEqual([
            { value: '41.74826 -88.16585', label: 'Naperville US' },
        ]);
    });
    //Returns empty for invalid city- tests manually
    it('returns an empty array when there is no  matching results', async () => {
        const searchTerm = 'dummy city';
        fetchMock.mockImplementationOnce(() => Promise.reject('API is down'));

        const result = await getCities(searchTerm);

        expect(result).toEqual('API is down');
    });



})