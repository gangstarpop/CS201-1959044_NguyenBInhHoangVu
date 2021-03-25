
async function getData() {
    let url = 'https://fakestoreapi.com/products';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderData() {
    let data = await getData();
    let html = '';
    data.forEach(data => {
        let htmlSegment = `<div class="col-md-6">
                              <img src="${data.image}" alt="">
                            </div>
                            <div class="col-md-6">
                              <h3>${data.title}</h3>
                              <p>Price:${data.price}$ <br> ${data.description}</p>
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.section col-sm-4 row');
    container.innerHTML = html;
}

renderData();
