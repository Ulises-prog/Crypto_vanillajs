let endpoint ='https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
.then(response => response.json())
.then(data => mostrarDatos(data))
.catch(error => console.log(error))


const mostrarDatos = (data) =>{
    let body = ''
    for(let i =0 ; i<data.length ; i++){
        body +=  `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr> `

    }
    document.getElementById('data').innerHTML = body
}