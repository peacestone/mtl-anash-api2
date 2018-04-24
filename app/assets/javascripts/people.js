document.addEventListener("DOMContentLoaded", function(event) { 
    const formNode = document.getElementById('upload-form')
    formNode.addEventListener('submit', (element) => {
        const loader =  document.createElement('div')
        loader.className = 'loader'

        const h1 =  document.createElement('h1')
        const textNode = document.createTextNode('Hang on Tight! This could take some time')
        h1.appendChild(textNode)
        formNode.appendChild(loader)
        formNode.appendChild(h1)
    })

    
});
