// function getData receive the URL to fetch 
// return the result of the fetch
// if the fetch succed return the fetch data 
// if something goes wrong return a error

export default async function getData(URL) {
  try {
    const response = await fetch(URL)
    if(!response.ok){
      throw new Error(`response error: ${response.status}`)
    }
    const json = await response.json()
    return json
  } catch(err) {
    throw new Error(err)
  }
}
