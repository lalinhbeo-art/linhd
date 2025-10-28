// Bắt sự kiện khi nhấn nút Xác nhận
document.getElementById("submit-btn").addEventListener("click", function () {
  const emailInput = document.getElementById("email-input").value.trim();
  const errorMsg = document.getElementById("error-msg");
  const formContainer = document.getElementById("form-container");
  const infoContainer = document.getElementById("info-container");

  // Regex kiểm tra định dạng email
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Kiểm tra hợp lệ
  if (emailInput === "") {
    errorMsg.textContent = "⚠️ Vui lòng nhập email.";
  } else if (!regex.test(emailInput)) {
    errorMsg.textContent = "❌ Email không hợp lệ. Vui lòng nhập đúng định dạng.";
  } else {
    // Email hợp lệ → ẩn form, hiện thông tin
    formContainer.classList.add("hide");
    infoContainer.classList.remove("hide");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const viewButtons = document.querySelectorAll(".view-btn");
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation(); // Ngăn lan sự kiện
      const section = btn.closest(".ddd"); // Lấy vùng kỹ năng tương ứng

      // Đóng các phần khác (chỉ mở 1 phần 1 lúc, tùy chọn)
      document.querySelectorAll(".ddd").forEach((other) => {
        if (other !== section) other.classList.remove("expanded");
      });

      // Bật/tắt phần hiện tại
      section.classList.toggle("expanded");

      // Đổi nút View More ↔ View Less
      if (section.classList.contains("expanded")) {
        btn.textContent = "View Less";
      } else {
        btn.textContent = "View More";
      }
    });
  });

  // Cả khi click vào tiêu đề (.dddd)
  const titles = document.querySelectorAll(".dddd");
  titles.forEach((title) => {
    title.addEventListener("click", function () {
      const section = title.closest(".ddd");
      const btn = section.querySelector(".view-btn");

      section.classList.toggle("expanded");

      btn.textContent = section.classList.contains("expanded")
        ? "View Less"
        : "View More";
    });
  });
});

