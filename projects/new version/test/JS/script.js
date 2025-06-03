document.addEventListener("DOMContentLoaded", function () {
    const categoriesDiv = document.getElementById("categories");

    function displayCategories() {
        for (const brand in productsData) {
            const button = document.createElement("button");
            button.classList.add("category-btn");

            const imagePath = `IMGS/${brand.toLowerCase()}.jpg`;

            button.innerHTML = `
            <center>
                <h4>${brand}</h4>
            </center>
                <img src="${imagePath}" alt="${brand}" class="category-img">
                
            `;

            button.onclick = () => {
                window.location.href = `product.html?category=${brand}`;
            };

            categoriesDiv.appendChild(button);
        }
    }

    displayCategories();
});

