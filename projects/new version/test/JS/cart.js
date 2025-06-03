// JS/cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    cartList.innerHTML += `
      <div class="product-sell">
        <li>
          ${item.name} - ${item.price} جنيه (x ${item.quantity} قطع)
          <button class="remov" onclick="removeFromCart(${index})">حذف</button>
        </li>
      </div>
    `;
  });

  document.getElementById('total').innerText = `الإجمالي: ${total} جنيه`;
}

function removeFromCart(index) {
  cart.splice(index, 1);  // حذف المنتج حسب ترتيبه في القائمة
  localStorage.setItem('cart', JSON.stringify(cart));  // تحديث السلة
  updateCart();  // تحديث العرض
}

updateCart();
