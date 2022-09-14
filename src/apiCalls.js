const getTopStories = () => {
  let url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=8FJOXU9C3RiQGIrSzRyPWxevCV8Sd1rK`
  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw response.message;
    })
    .catch(err => console.log(err));
};

// const getObituaries = () => {
//   let url = `https://api.nytimes.com/svc/topstories/v2/obituaries.json?api-key=${process.env.REACT_APP_APIKEY}`
//   fetch(url)
//     .then(response => response.json())
//     .catch(err => console.log(err));
// };

export {
  getTopStories
};
