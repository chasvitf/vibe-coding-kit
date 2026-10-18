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
