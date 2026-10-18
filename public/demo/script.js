// ใส่ปีปัจจุบันใน footer
document.getElementById("year").textContent = new Date().getFullYear();

// กดเมนูแล้วเลื่อนลงไปแบบนุ่ม ๆ
document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ---------- ตะกร้าสินค้า ----------
// เก็บเป็น { "ลาเวนเดอร์": { price: 290, qty: 2 }, ... }
const cart = {};

document.querySelectorAll('.add-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    const product = button.closest('.product');
    const name = product.dataset.name;
    const price = Number(product.dataset.price);
    if (!cart[name]) {
      cart[name] = { price: price, qty: 0 };
    }
    cart[name].qty += 1;
    updateCart();
  });
});

document.getElementById('cart-btn').addEventListener('click', function () {
  const panel = document.getElementById('cart-panel');
  panel.hidden = !panel.hidden;
});

function updateCart() {
  let count = 0;
  let total = 0;
  const lines = [];
  const items = document.getElementById('cart-items');
  items.innerHTML = '';

  for (const name in cart) {
    const item = cart[name];
    count += item.qty;
    total += item.qty * item.price;
    lines.push(name + ' x' + item.qty + ' = ' + item.qty * item.price + ' บาท');

    const li = document.createElement('li');
    li.textContent = name + ' x' + item.qty;
    const sum = document.createElement('span');
    sum.textContent = '฿' + item.qty * item.price;
    li.appendChild(sum);
    items.appendChild(li);
  }

  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = total;
  document.getElementById('cart-sum').textContent = total;

  // ข้อความที่จะส่งเข้า LINE
  const message = 'สั่งเทียนหอมกลิ่นมายด์\n' + lines.join('\n') + '\nรวม ' + total + ' บาท';
  document.getElementById('send-line').href = 'https://line.me/R/msg/text/?' + encodeURIComponent(message);
}
