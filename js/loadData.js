fetch('../products.json').then((response)=> response.json()).then((json)=>localStorage.setItem('products',JSON.stringify(json)));

