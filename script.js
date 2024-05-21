// Function to fetch and process the JSON file
function fetchJSONFile(filename, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', filename, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

// Function to create product elements and append them to the container
function displayProductData(productData) {
    // Parse JSON string into object
    var products = JSON.parse(productData);
    var i = 1;
    
    
    // Iterate over each product
    products.forEach(function(product) {

        // Get the container element
        var imageContainer = document.getElementById('product' + i);

        // Create image element
        var image = document.createElement('img');
        image.src = product.imageSrc;
        image.alt = product.name;
        image.classList.add('image');

        // Create overlay element
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // Create content element
        var content = document.createElement('div');
        content.classList.add('content');

        // Create product name and brand elements
        var productNameAndBrand = document.createElement('div');
        productNameAndBrand.classList.add('product-name-and-brand');

        var productName = document.createElement('div');
        productName.classList.add('product-name');
        productName.textContent = product.name;

        var brand = document.createElement('div');
        brand.classList.add('brand');
        brand.textContent = product.brand;

        // Create price element
        var price = document.createElement('div');
        price.classList.add('price');
        price.textContent = product.price;

        // Append elements to their respective parent elements
        productNameAndBrand.appendChild(productName);
        productNameAndBrand.appendChild(brand);

        content.appendChild(productNameAndBrand);
        content.appendChild(price);

        overlay.appendChild(content);

        imageContainer.appendChild(image);
        imageContainer.appendChild(overlay);
        console.log('product' + i)

        i = i + 1;
    });
}

// Usage
fetchJSONFile('data.json', displayProductData);
