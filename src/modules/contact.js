// displays contact info in contact tab 
function contact() {
    const displayMod = document.querySelector('#displayMod');
    const contact = document.createElement('div');
    contact.innerHTML = `
    <h3>Contact Us!</h3>
    <p>If you have any questions or want to let us know how we are doing, give us a call or leave us an email. Though, we would prefer if you came in and show us how much you enjoy our food.</p>
    <div>
        <p>(555)585-2011</p>
        <p>welovechicken@gmail.com</p>
        <p>Fried Chicken Rd, Chicken City, FC 20301</p>
    </div>
    `;
    displayMod.appendChild(contact);
}

export {
    contact
}