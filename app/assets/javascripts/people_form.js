document.addEventListener("DOMContentLoaded", (event) => { 
    const formNode = document.getElementById('upload-form')
    formNode.addEventListener('submit', (element) => {
        element.target.style.display = 'none'
        const uploadDiv = document.getElementById('upload-loader')
        uploadDiv.innerHTML = "<div class='people-loader'> </div> <h1>Hang on Tight!</h1>"
    })

    
});
