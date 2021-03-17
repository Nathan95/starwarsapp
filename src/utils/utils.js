// It didn't make sense to make an api call for data that will never change
// So I made a hardcoded utils function to get the appropriate planets and movies

export const fetchHomeWorld = homeworld => {
  switch (homeworld) {
    case "http://swapi.dev/api/planets/1/":
      return <>Tatooine</>;
    case "http://swapi.dev/api/planets/2/":
      return <>Alderaan</>;
    case "http://swapi.dev/api/planets/3/":
      return <>Yavin IV</>;
    case "http://swapi.dev/api/planets/4/":
      return <>Hoth</>;
    case "http://swapi.dev/api/planets/5/":
      return <>Dagobah</>;
    case "http://swapi.dev/api/planets/6/":
      return <>Bespin</>;
    case "http://swapi.dev/api/planets/7/":
      return <>Endor</>;
    case "http://swapi.dev/api/planets/8/":
      return <>Naboo</>;
    case "http://swapi.dev/api/planets/9/":
      return <>Coruscant</>;
    case "http://swapi.dev/api/planets/10/":
      return <>Kamino</>;
    case "http://swapi.dev/api/planets/11/":
      return <>Geonosis</>;
    case "http://swapi.dev/api/planets/12/":
      return <>Utapau</>;
    case "http://swapi.dev/api/planets/13/":
      return <>Mustafar</>;
    case "http://swapi.dev/api/planets/14/":
      return <>Kashyyyk</>;
    case "http://swapi.dev/api/planets/15/":
      return <>Polis Massa</>;
    case "http://swapi.dev/api/planets/16/":
      return <>Mygeeto</>;
    case "http://swapi.dev/api/planets/17/":
      return <>Felucia</>; 
    case "http://swapi.dev/api/planets/18/":
      return <>Cato Neimoidia</>; 
    case "http://swapi.dev/api/planets/19/":
      return <>Saleucami</>; 
    case "http://swapi.dev/api/planets/20/":
      return <>Stewjon</>;
    case "http://swapi.dev/api/planets/21/":
      return <>Eriadu</>;
    case "http://swapi.dev/api/planets/22/":
      return <>Corellia</>;
    case "http://swapi.dev/api/planets/23/":
      return <>Rodia</>;
    case "http://swapi.dev/api/planets/24/":
      return <>Nal Hutta</>;
    case "http://swapi.dev/api/planets/26/":
      return <>Bestine IV</>;
    case "http://swapi.dev/api/planets/28/":
      return <>unknown</>;
    case "http://swapi.dev/api/planets/29/":
      return <>unknown</>;
    case "http://swapi.dev/api/planets/30/":
      return <>Socorro</>;
    case "http://swapi.dev/api/planets/31/":
      return <>Mon Cala</>;
    case "http://swapi.dev/api/planets/32/":
      return <>Chandrila</>;
    case "http://swapi.dev/api/planets/33/":
      return <>Sullust</>;
    case "http://swapi.dev/api/planets/34/":
      return <>Toydaria</>;
    case "http://swapi.dev/api/planets/35/":
      return <>Malastare</>;
    case "http://swapi.dev/api/planets/36/":
      return <>Dathomir</>;
    case "http://swapi.dev/api/planets/37/":
      return <>Ryloth</>;
    case "http://swapi.dev/api/planets/38/":
      return <>Aleen Minor</>;
    case "http://swapi.dev/api/planets/39/":
      return <>Vulpter</>;
    case "http://swapi.dev/api/planets/40/":
      return <>Troiken</>;
    case "http://swapi.dev/api/planets/41/":
      return <>Tund</>;
    case "http://swapi.dev/api/planets/42/":
      return <>Haruun Kal</>;
    default:
      return <span>"N/A"</span>;
  }
};

export const fetchFirstFilmAppearance = firstFilm => {
  switch (firstFilm) {
    case "http://swapi.dev/api/films/1/":
      return <>A New Hope</>;
    case "http://swapi.dev/api/films/2/":
      return <>The Empire Strikes Back</>;
    case "http://swapi.dev/api/films/3/":
      return <>Return of the Jedi</>;
    case "http://swapi.dev/api/films/4/":
      return <>The Phantom Menace</>;  
    case "http://swapi.dev/api/films/5/":
        return <>Attack of the Clones</>; 
    case "http://swapi.dev/api/films/6/":
        return <>Revenge of the Sith</>;   
    default:
      return <span>"N/A"</span>;
  }
}