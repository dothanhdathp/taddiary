
# Note

??? danger "Kiểm tra thuế"
    Vâng vì cái VNiD này làm mình hơi tốn thời gian. Cơ bản mình vẫn chưa làm `CCCD` có gắn chip. Thế nên vẫn chưa mở được cái ứng dụng này. Dạo này nhà nước nhiều chuyện thật.

??? warning "Lên nhà chú Hà"
    Bằng một cách hơi khó hiểu nào đó chú Hà lại gọi mình lên nói chuyện. Chắc lại về công việc cơ mà mình thấy hơi ...

??? question "Issue `AEP-635`, `AEP-731`"
    Issue __Parktronic sound after system booting__ của EVO, cũng không gấp nhưng là khách hàng tạo ra. Thật kỳ lạ là mình không tái hiện được.

??? question "In 3D đầu type-C, Lightling, ..."
    Nhiệm vụ này đơn giản chỉ là để bảo vệ các đầu cắm khỏi bị ăn mòn hoặc dính nước thôi. Không nhất định.

??? question "Làm một bài về module `EditText` của __Android__"

    - Làm một bài về module `EditText` của __Android__
    - _Bài này được tách ra một phần trong lúc làm Engineering Mode_
    - Có một đoạn cần chú ý như này, dùng để thoát chế độ _focus_ vào `EditText` sau khi ấn ra ngoài khu vực làm việc _(không còn cái thanh điều hướng nằm trong hộp edittext)_

    
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