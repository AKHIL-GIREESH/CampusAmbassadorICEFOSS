export const fetchStats = async () => {
  const resp = await fetch("http://localhost:3001");
  const data = await resp.json();
  data.sort((a, b) => parseInt(b[7]) - parseInt(a[7]));
  console.log(data);
  return data;
};
