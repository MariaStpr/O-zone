
const getData = (str) => {
    return fetch(`https://test-f9e92-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
    .then((response) => {
        return response.json();
    });

};

export default getData;