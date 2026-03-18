document.addEventListener("DOMContentLoaded", function() {
  const note = document.querySelector(".sticky-note");
  const header = document.querySelector(".sticky-note-header");

  if (note && header) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    header.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e.preventDefault();
      // Lấy vị trí con trỏ chuột khi bắt đầu
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      // Tính toán khoảng cách di chuyển
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      
      // Thiết lập vị trí mới cho note
      note.style.top = (note.offsetTop - pos2) + "px";
      note.style.left = (note.offsetLeft - pos1) + "px";
      note.style.bottom = "auto"; // Hủy bỏ bottom để không bị xung đột
      note.style.right = "auto";  // Hủy bỏ right
    }

    function closeDragElement() {
      // Dừng di chuyển khi thả chuột
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
});