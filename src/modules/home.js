function home() {
    const displayMod = document.getElementById('displayMod');
    const home = document.createElement('div');
    const welcome = document.createElement('h2');
    welcome.textContent = "Welcome to Jackie's!";
    const description = document.createElement('p');
    description.textContent = "Jackie's is proud of our authentic Taiwanese fried chicken. Our grassfed chicken is lightly breaded in our secret spice and herb mix. Then, it is fried in our own special brand of organic canola oil. Come down to Jackie's to enjoy our freshly made chicken with a side of fries and your choice of boba tea!";
    
    displayMod.appendChild(home);
    home.appendChild(welcome);
    home.appendChild(description);
}

export {
    home
}