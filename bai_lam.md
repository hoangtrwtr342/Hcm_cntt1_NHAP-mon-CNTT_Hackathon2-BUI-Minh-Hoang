# BÀI LÀM – HACKATHON 02

- **Mã đề:** 03
- **Họ tên:Bùi Minh Hoàng**
- **Lớp:Hcm_cntt1**
- **Link repository:**
- **Hệ điều hành (Windows/macOS):Windown**

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
1. D:\starter-kit\starter-kit\Karaoke-website
2. ls -Force
3.  mv .\Ghi_Chu_Ky_Thuat.txt .\docs\
4.mkdir backup
5.cp .\data\Dat_Phong_Thang_3.xlsx .\backup\
6. rm "*.tmp"
7. Get-Content .\logs\Booking.log
8. Get-ChildItem -Recurse -Force
```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
    Directory: D:\starter-kit\starter-kit\Karaoke-website


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   8:00 AM                backup
d-----        11/11/2026   7:53 AM                data
d-----        11/11/2026   7:59 AM                docs
d-----        11/11/2026   7:51 AM                evidence
d-----        11/11/2026   7:53 AM                logs
d-----        11/11/2026   7:49 AM                web
-a-h--         11/3/2026   7:07 AM             70 .env
-a----         11/3/2026   7:07 AM           2410 bai_lam.md


    Directory: D:\starter-kit\starter-kit\Karaoke-website\backup


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           6113 Dat_Phong_Thang_3.xlsx


    Directory: D:\starter-kit\starter-kit\Karaoke-website\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           6113 Dat_Phong_Thang_3.xlsx


    Directory: D:\starter-kit\starter-kit\Karaoke-website\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM            163 Ghi_Chu_Ky_Thuat.txt


    Directory: D:\starter-kit\starter-kit\Karaoke-website\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM            994 Booking.log


    Directory: D:\starter-kit\starter-kit\Karaoke-website\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   7:49 AM                images
-a----         11/3/2026   7:07 AM            599 app.js
-a----         11/3/2026   7:07 AM            530 index.html
-a----         11/3/2026   7:07 AM            460 style.css


    Directory: D:\starter-kit\starter-kit\Karaoke-website\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           3072 logo-melodybox.png
```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
 Get-Content .\logs\Booking.log | select-string "status=500" >> loi_500.txt
```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
2026-03-28 08:13:01 POST /api/thanh-toan status=500
2026-03-28 08:17:12 POST /api/thanh-toan status=500
```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
Get-Content .\logs\Booking.log | select-string "status=404" | Measure
```

```text

Count    : 4
Average  :
Sum      :
Maximum  :
Minimum  :
Property :
```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
@'
# Script : tong_hop.ps1
# Tac gia : Bui Minh Hoang
# Ngay tao : 11/11/2026
Write-Host "Dang tao bao cao..."
" === Bao Cao Su Co WEBSITE ===" > .\logs\tong_hop.txt
Get-Content .\logs\Booking.log | Select-String "status=404" >> .\logs\tong_hop.txt
Get-Content .\logs\Booking.log | Select-String "status=500" | Measure-Object >> .\logs\tong_hop.txt
Write-Host "HOAN THANH!"
'@ | Set-Content tong_hop.ps1
```

### Nội dung file logs/tong_hop.txt

```text
Dang tao bao cao...
HOAN THANH!
```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, mô tả có **in đ1ậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 | Lỗi console | app.js |  |
| 2 | Lỗi network | logo.png | đổi tên images/logo.png đúng với tên hình ảnh |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context: tôi mở html lên Lỗi app.js:18 Uncaught ReferenceError: hienThiGiaPhong is not defined** 
- **Expected: tôi không biết phải làm sao cả,và tôi không biết sửa như nào** 
- **Actual:Tôi có thể nhờ bạn sửa và giải thích cho tôi được không** 
- **Log:** 

### Câu tìm kiếm Google

```text
site:staroverflow.com "app.js:18 Uncaught ReferenceError: hienThiGiaPhong is not defined"

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/dat_phong_thang_3.xlsx`, không cần ghi vào đây.
