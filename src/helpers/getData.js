export async function getData() {
  const res = await fetch('http://localhost:5500/api/v1/');
  return res.json();
}
