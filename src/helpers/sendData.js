export async function sendData(general) {
  const res = await fetch('http://localhost:5500/api/v1/', {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(general),
  });
  return res.json();
}
