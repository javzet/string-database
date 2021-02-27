export async function sendData(general) {
  const res = await fetch('https://ogla-db.herokuapp.com/api/v1/', {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(general),
  });
  return res.json();
}
