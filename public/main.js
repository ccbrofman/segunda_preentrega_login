
async function addItem(index){

    let data = await  fetch('/api/products')
    let productos = await data.json()
    console.log(productos.docs[index])
    let cargar = await fetch(`/api/carts/65863ae5faf4a8a0cedeae37/product/${productos.docs[index]._id}`,{method:"POST"})
}

const logoutButton = document.getElementById("logout")


logoutButton.addEventListener('click',e =>{
    
    

    fetch('/api/sessions/logout',{
        method:"GET",
        headers:{
           'Content-Type': 'application/json'
        }
    }).then(result =>{
        
        if(result.status === 200) window.location.replace('/users/login')})
})
