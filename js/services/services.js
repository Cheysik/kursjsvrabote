const postData = async (url, data) => {
  const res = await fetch(url, {
      method: "POST",
      headers:{
          'Content-type': 'application/json'
      },
      body: data
  });

  return await res.json();
};

const getResource = async (url) => {
  const res = await fetch(url);
  
  if(!res.ok) { //Для fetch ошибка это если интернета нет и т.п., поэтому мы прописываем если не получили ответ от сервера (404 и т.п.) в ручную ошибку
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export {postData};
export {getResource};