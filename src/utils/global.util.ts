/**
 * debounce
 * 
 * Example use:
 function search(query: string){
  // ...perform search...
  console.log(`searching for ${query}`)
}
const debounceSearch = debounce(search, 500);

debounceSearch("facebook")
debounceSearch("apple")
debounceSearch("tesla")

*/
export function debounce(fn: Function, wait: number): Function {
  let t: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait)
  }
}
