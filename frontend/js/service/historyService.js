/*

//let index = 1; if we have pages
async function fetchData() {
  
    const api = `https://rickandmortyapi.com/api/episode?page=${index}`;
    const response = await fetch(api);
    const body = await response.json();
    if (!response.ok || body.Response === "False") {
      throw new Error(body.Error);
    }
  
    return { results: body.results, next: body.info.next };
  }
  
  async function getEpisode(index) {
    try{
       const character = await fetchData();
    return character.results[index];
    }catch{
      console.error("error fetching episode", error);
      throw error;
    }
   
  }
  
  async function getEpisodes() {
    return await fetchData();
  }
  
  //if we have pages
  function incrementIndex() {
    index++;
  };
  
  export default { getEpisode, getEpisodes};
  */