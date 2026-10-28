# 🏭 MES Unified Operations Hub (v2.0)

![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue)

**Hệ sinh thái điều hành và quản lý sản xuất tập trung - Multi-Tab Workstation**

🌐 **Live Demo**: [https://xuanan2018.github.io/mes-unified-app/](https://xuanan2018.github.io/mes-unified-app/)

---

## 🎯 Giới thiệu

**MES Unified Operations Hub v2.0** là nền tảng quản trị và vận hành sản xuất thế hệ mới, tích hợp tập trung **18+ ứng dụng chuyên môn** từ Google Apps Script, Cloudflare Workers & Pages, Vercel, Netlify và GitHub Pages trên một không gian làm việc đa nhiệm duy nhất.

---

## ✨ Điểm nổi bật phiên bản 2.0

### 🚀 1. Multi-Tab Workstation (Giữ nguyên trạng thái)
- Hỗ trợ mở song song nhiều công cụ dưới dạng các tab trình duyệt độc lập.
- **Không bao giờ reload lại iframe** khi chuyển đổi qua lại giữa các tab, bảo toàn dữ liệu nhập dở và phiên làm việc.
- Hỗ trợ đóng tab, đóng tất cả tab khác và quay về Dashboard bất cứ lúc nào.

### 🔍 2. Command Palette Thông Minh (`Ctrl + K`)
- Tìm kiếm tức thời bất kỳ module nào qua tên, tính năng, mã hoặc từ khóa chuyên ngành.
- Điều hướng bằng bàn phím (`↑`, `↓`, `Enter`, `Esc`).

### ⭐ 3. Ghim ứng dụng yêu thích (Favorites / Pinned)
- Tùy chỉnh danh sách công cụ dùng hàng ngày hiển thị ngay đầu Dashboard chỉ với 1 cú click vào biểu tượng sao (⭐).
- Tự động ghi nhớ vào `localStorage`.

### 🌓 4. Chế độ Giao diện Dark / Light & Zen Mode
- Giao diện Dark Glassmorphism chuyên nghiệp cho ca sản xuất ban đêm, hạn chế mỏi mắt.
- Chế độ **Zen Mode (Toàn màn hình)**: Ẩn toàn bộ thanh menu để tập trung thao tác các bảng tính và dữ liệu lớn.

---

## 📂 Danh mục 18 Ứng dụng tích hợp

### 🏭 1. Sản Xuất & Điều Hành (Production & Operations)
1. **AOMTOP · Trung Tâm Điều Hành** *(Google Apps Script)* - Giám sát toàn bộ đơn hàng AO, kế hoạch và thực nhập theo thời gian thực.
2. **Tra Cứu Đơn Hàng SPEEDUP** *(Google Apps Script)* - Tra cứu tiến độ chi tiết đơn hàng sản xuất SPEEDUP.
3. **AOMTOP Daily Prod Data** *(Vercel)* - Theo dõi số lượng còn lại, đơn giá, ngày xuất xưởng PM.PM0120L.
4. **Hourly Target (Batch)** *(Netlify)* - Nhập mục tiêu sản xuất theo lô (Batch Mode).
5. **Input Hourly Target** *(Cloudflare Pages)* - Nhập mục tiêu sản xuất hàng giờ theo thời gian thực.
6. **IoT Scanner Pro** *(GitHub Pages)* - Quét mã vạch và tải dữ liệu IoT lên hệ thống.
7. **Shipping Schedule** *(Vercel)* - Theo dõi lịch trình giao hàng và xuất khẩu.

### 🔍 2. QC & Thiết Bị (Quality & Equipment)
8. **Defect Management** *(GitHub Pages)* - Báo cáo lỗi sản phẩm, chụp ảnh và gửi dữ liệu về chuyền.
9. **MES Image Search** *(Vercel)* - Tra cứu nhanh hình ảnh sản phẩm và mẫu lỗi.
10. **Remove Machine** *(GitHub Pages)* - Reset và gỡ thiết bị IoT khỏi hệ thống.

### 📦 3. Bao Gói & Xác Nhận (Package & Cookie)
11. **MXPackage Admin** *(Cloudflare Workers)* - Quản trị hệ thống và tài khoản MXPackage.
12. **Package Search** *(GitHub Pages)* - Tra cứu chi tiết từng gói sản xuất (Yêu cầu Cookie).
13. **Search PackageGroup** *(GitHub Pages)* - Tra cứu lịch sử PackageGroup 6 tháng (Yêu cầu Cookie).
14. **Confirm Package** *(GitHub Pages)* - Xác nhận hoàn thành gói sản xuất (Yêu cầu Cookie).

### ☁️ 4. Lưu Trữ & Tiện Ích (Cloud Storage & Utilities)
15. **R2 Vault — Kho Lưu Trữ Cloud** *(Cloudflare Pages)* - Quản lý và lưu trữ tệp tin đám mây Cloudflare R2 siêu tốc.
16. **Storage R2 Worker Service** *(Cloudflare Workers)* - Dịch vụ API và lưu trữ trực tiếp Cloudflare R2.
17. **Drive Converter** *(GitHub Pages)* - Chuyển link Google Drive sang direct link tải trực tiếp.
18. **Addin NXA** *(GitHub Pages)* - Bộ công cụ mở rộng xử lý dữ liệu Excel đa nền tảng.

---

## ⌨️ Phím tắt hỗ trợ

| Phím tắt | Chức năng |
| :--- | :--- |
| `Ctrl + K` / `Cmd + K` | Mở Command Palette tìm kiếm nhanh ứng dụng |
| `Ctrl + B` / `Cmd + B` | Thu gọn / Mở rộng Sidebar điều hướng |
| `Ctrl + W` | Đóng tab công cụ đang hoạt động |
| `Escape` | Thoát Zen Mode / Đóng cửa sổ tìm kiếm / Đóng menu mobile |

---

👥 **Tác giả & Quản trị**: Xuan An & Chí Công
