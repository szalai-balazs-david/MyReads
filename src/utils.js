export function camelCase2SentenceCase(name){
  const result = name.replace( /([A-Z])/g, " $1" );
  return result.charAt(0).toUpperCase() + result.slice(1);
}