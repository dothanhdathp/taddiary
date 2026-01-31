# Nhiệm Vụ

## Đang làm

!!! warning "Nghiên Cứu ROS"
    1. Nghiên Cứu ROS và ghi lại vào [Tài Liệu Trong DEV](http://localhost:65002/ROS/ros/)
        - Debian không phải tier 1 cho ROS thế nên không cài đặt thành công ROS cho debian.
        - <mark>Kiểm tra tài liệu của __ROS__ có trong ổ cứng ở nhà không?</mark>

!!! example "Android"
    - Kotlin
!!! example "C/C++"
    - Thread
    
!!! example "FTXUI"

!!! example "Java"

## Lưu Trữ

!!! quote "Tìm hiểu về mã hóa"
    - Tìm hiểu về mã hóa, kiểu kiểu AES, ... để đẩy được các key public lên

!!! quote "Mã Hóa và lưu key cho megafile"
    Đây là key của megafile dùng để recover: `4a 4c 48 54 6d 6f 77 33 6c 33 4f 5f 39 38 64 56 59 41 43 33 45 41 `

!!! quote "Làm một bài về module `EditText` của __Android__"
    - Làm một bài về module `EditText` của __Android__
    - _Bài này được tách ra một phần trong lúc làm Engineering Mode_
    - Có một đoạn cần chú ý như này, dùng để thoát chế độ _focus_ vào `EditText` sau khi ấn ra ngoài khu vực làm việc _(không còn cái thanh điều hướng nằm trong hộp edittext)_

    Tham khảo code mẫu này
    
    ```java
    edtFreqChange.setOnEditorActionListener((v, actionId, event) -> {
        if (actionId == EditorInfo.IME_ACTION_DONE ||
                (event != null && event.getKeyCode() == KeyEvent.KEYCODE_ENTER && event.getAction() == KeyEvent.ACTION_DOWN)) {

            // Set new text after Enter
            String str = edtFreqChange.getText().toString();
            int value = Integer.valueOf(str).intValue();
            if (value>20000) {
                value = 20000;
                edtFreqChange.setText(String.valueOf(value));
            }
            seekFrequenceChange.setProgress(value);

            // Exit edit mode by clearing focus and hiding keyboard
            edtFreqChange.clearFocus();
            InputMethodManager imm = (InputMethodManager)mApplicationContext.getSystemService(Context.INPUT_METHOD_SERVICE);
            imm.hideSoftInputFromWindow(edtFreqChange.getWindowToken(), 0);
            return true;
        }
        return false;
    });
    ```

