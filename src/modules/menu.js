function menu() {

    // menu container
    const displayMod = document.getElementById('displayMod');
    const menu = document.createElement('div');
    const pageTitle = document.createElement('h2');
    pageTitle.textContent = "Menu";
    displayMod.appendChild(menu);
    menu.appendChild(pageTitle);

    // menu content

    // first menu item (taiwanese chicken)
    const first = document.createElement('div');
    const firstTitle = document.createElement('h3');
    firstTitle.textContent = 'Taiwanese Fried Chicken';
    const firstText = document.createElement('p');
    firstText.textContent = "Our Taiwanese fried chicken is lightly breaded, tossed in our herb and spice mix , and fried in our own special canola oil. Try it mild or spicy!";
    const firstPrice = document.createElement('p');
    firstPrice.textContent = 'Small: $3.99(feeds one)/ Large: $5.99(feeds two)';
    menu.appendChild(first);
    first.appendChild(firstTitle);
    first.appendChild(firstText);
    first.appendChild(firstPrice);

    // second menu item fries
    const second = document.createElement('div');
    const secondTitle = document.createElement('h3');
    secondTitle.textContent = 'Fresh-Cut Fries';
    const secondText = document.createElement('p');
    secondText.textContent = "Our fries are freshly-cut and you can have them seasoned or have them loaded with bacon, cheese, fried chicken, and a pinch of chives";
    const secondPrice = document.createElement('p');
    secondPrice.textContent = 'Seasoned Small: $1.99/ Large: $2.99 ||| Loaded Fries: $5.99(feeds two)';
    menu.appendChild(second);
    second.appendChild(secondTitle);
    second.appendChild(secondText);
    second.appendChild(secondPrice);

    // third menu item
    const third = document.createElement('div');
    third.innerHTML = `
    <h3>Boba Tea</h3>
    <div>
        <p>We use real tea in our drinks. We also offer non-diary options for your milk tea. Take a look at our assorted flavors and try one!</p>
        <p>Small: $2.99/ Large: 3.99</p>

        <div class="listContainer">
            <div class="listCard">
                <h4>Flavors</h4>
                <li>Original</li>
                <li>Almond</li>
                <li>Taro</li>
                <li>Earl Grey</li>
                <li>Thai</li>
                <li>Honey Melon</li>
                <li>Mocha</li>
                <li>Jasmine</li>
            </div>
            <div class="listCard">
                <h4>Toppings</h4>
                <li>Honey Boba</li>
                <li>Taro Boba</li>
                <li>Pudding</li>
                <li>Lychee Jelly</li>
            </div>
            <div class="listCard">
                <h4>Milk Options</h4>
                <li>2% Milk</li>
                <li>Lactaid Milk</li>
                <li>Soy Milk</li>
                <li>Almond Milk</li>
                <li>Oat Milk</li>
            </div>
        </div>
    </div>
    `;
    menu.appendChild(third);
}

export {
    menu
};