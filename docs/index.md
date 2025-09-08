# Note

!!! note "Làm"
    - [ ] Giày khô rồi thì thu vào đi
    - [ ] Sửa bàn phím keychon __*low-profile*__ của mình đi

!!! danger "Thanh toán nợ nần"
    - [ ] Trường thanh toán bún cá cay 35k
    - [ ] Hải Bánh nợ
        - Một bữa cơm `45k`
        - Vé xe `130k`
        - Ram `325k`


!!! warning "Lên nhà chú Hà _(bố nhắc từ hè)_"
    Bằng một cách hơi khó hiểu nào đó chú Hà lại gọi mình lên nói chuyện. Chắc lại về công việc cơ mà mình thấy hơi ...

    - [ ] Gọi điện trước và ... nói sao giờ? Hỏi han về cuộc sống hay gì à? Hay là có công việc?

!!! abstract "Làm một bài về module `EditText` của __Android__"
    - Làm một bài về module `EditText` của __Android__
    - _Bài này được tách ra một phần trong lúc làm Engineering Mode_
    - Có một đoạn cần chú ý như này, dùng để thoát chế độ _focus_ vào `EditText` sau khi ấn ra ngoài khu vực làm việc _(không còn cái thanh điều hướng nằm trong hộp edittext)_

    ??? note "Tham khảo code mẫu này"
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

!!! abstract "Sửa bàn phím ___low-profile___"
    - Sửa cái bàn phím ___low-profile___ của mình đi. Sửa ở đâu thì không biết. ___(Không biết có phải thay lại keycap không nữa.)___