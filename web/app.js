const danhSachBangGia = [
  { ma: "P-NHO", ten: "Phong nho 6 nguoi", gia: 150000 },
  { ma: "P-VUA", ten: "Phong vua 10 nguoi", gia: 200000 },
  { ma: "P-LON", ten: "Phong lon 15 nguoi", gia: 300000 },
  { ma: "P-VIP", ten: "Phong VIP", gia: 450000 },
];

function hienThiBangGiaPhong() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiGiaPhong();
