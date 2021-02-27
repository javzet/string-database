export async function getData() {
  const res = await fetch('https://ogla-db.herokuapp.com/api/v1/');
  return res.json();
}
