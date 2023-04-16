document.getElementById("citySelection").addEventListener('change', (event) => {
    const choosedcity = event.target.value;
    
    if(choosedcity) {
        window.location.href = `${choosedcity}.html`;
    }
});
