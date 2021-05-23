
export default class GetService {

    _apiBase = 'https://swapi.dev/api';
    
  
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        return await res.json();
    }
  
    getAllPerson = async () => {
      const res = await this.getResource('/people/'); 
      return res.results;
    }
  
    getAllPlanets = async () => {
      const res = await this.getResource('/planets/'); 
      return res.results;
    }
  
    getAllStarships = async () => {
      const res = await this.getResource('/starships/'); 
      return res.results;
    }
  
    getPerson = (id) => {
      return this.getResource(`/people/${id}/`)
    }
    getPlanet = (id) => {
      return this.getResource(`/planets/${id}/`)
    }
    getStarships = (id) => {
      return this.getResource(`/starships/${id}/`)
    }
}