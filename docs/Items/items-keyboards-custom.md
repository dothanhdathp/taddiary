# \[Keyboard\] Custom Keyboard
> Hướng dẫn thay đổi cấu hình với bàn phím Keychron

## Trang Web

- [Keychron Offical](https://launcher.keychron.com/#/keymap)
- [VIA/](https://usevia.app/)

## Fix issue

??? bug "HID device connected"
    Trên hệ điều hành Linux sẽ gặp vấn đề này. Nó là do hệ điều hành không cho phép ứng dụng sử dụng qua application. Lúc này phải tự thêm địa chỉ thiết bị bằng tay.

    Làm theo hướng dẫn ở [trong link này](https://github.com/earthphum/LinuxDocuments/blob/main/Arch/fixed/keychron-fix.md)

    1. Chạy lệnh này để cho phép người dùng của bạn truy cập vào các thiết bị đầu vào:
        ```bash
        sudo usermod -aG input $USER
        ```
    2. Tạo quy tắc udev mới
        ```bash
        sudo vim /etc/udev/rules.d/99-keychron.rules
        ```
    3. Tìm id Sản phẩm của bạn
        - Chạy lệnh sau để tìm kiếm thông tin sản phẩm
            ```bash
            lsusb | grep Keychron
            ```
        - Đọc các thông số về `idVendor` và `idProduct`. Ví dụ:
            ```text
            Bus 001 Device 003: ID 3434:d030 Keychron Keychron Link
            ```
            - idVendor = `3434`
            - idProduct = `d030`
    4. Thêm quy tắc udev
        ```text
        KERNEL=="hidraw*", SUBSYSTEM=="hidraw", ATTRS{idVendor}=="3434", ATTRS{idProduct}=="d030", MODE="0660", GROUP="myusername", TAG+="uaccess", TAG+="udev-acl"
        ```
        - Có ba trường phải thay đổi là `idVendor`, `idProduct` và `myusername` là tên người dùng.
    5. Chạy lại udev rules
        ```bash
        sudo udevadm control --reload-rules
        sudo udevadm trigger
        ```
    6. <mark>Nếu vẫn không chạy thì chạy thử lại lệnh sau;</mark>
        ```text
        KERNEL=="hidraw*", SUBSYSTEM=="hidraw", ATTRS{idVendor}=="3434", ATTRS{idProduct}=="d030", MODE="0666", TAG+="uaccess", TAG+="udev-acl"
        ```
        _Nhớ thay `idVendor`, `idProduct` và `myusername`_