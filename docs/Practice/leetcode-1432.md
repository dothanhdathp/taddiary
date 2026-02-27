# Leetcode 1432. Max Difference You Can Get From Changing an Integer

> [Link Problemt](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/description/)

## Vấn Đề

- Cho một số `nums`.
- Chọn ra bất kỳ một số **x**, **x** nằm trong khoảng số tự nhiên từ '0' đến '9'. Thay đổi tất cả các số đơn giống _**x**_ trong `nums` thành số khác sao cho được _**số lớn nhất**_.
- Làm lại tương tự với một số **y** khác để được _**số nhỏ nhất**_.
- Trả về hiệu của _**số lớn nhất**_ và _**số nhỏ nhất**_
- _Lưu ý: `nums` cả trước và sau khi chuyển đổi không được biến số đầu tiên thành `0`_. Ví dụ `123` sẽ không được chọn đổi `1` thành `0` để tạo thành số `023`.

Bài này có khá nhiều trường hợp, mình không có thể giải quyết được trong một lần

## Phương Án

1. Bài này cũng không khó, giải thuật đầu tiên là chuyển đổi số `nums` thành chuỗi _**strings**_ trước vì biến đổi từng phần tử trong chuỗi nhanh hơn nhiều so với số nguyên,
1. Sau đó tiến hành tìm hai phép biến đổi để tìm được hai số _**lớn nhất**_ và _**nhỏ nhất**_
1. Tìm số _**lớn nhất**_:
    - Số lớn nhất chắc chắn là sẽ có số lớn nhất là số `9`. Với một số _**nums**_ bất kỳ, ở vị trí lớn nhất có thể đổi thành số `9` sẽ có số lớn nhất.
    - Ví dụ với `1231` -> _đổi `1` thành `9`_ -> `9239`; 
    - Ví dụ với `9930` -> _đổi `3` thành `9`_ -> `9990`; 
1. Tìm số _**nhỏ nhất**_
    - Vì số `0` không thể ở đầu tiên nên chia làm hai trường hợp:
        - **Nếu số đầu tiên khác `0`**, lấy số đó làm _**seed**_ và chuyển đổi toàn bộ thành số `1` _(đầu số nhỏ nhất sẽ là 1)_
        - **Nếu số đầu tiên là `1`**, tìm từ đó trở đi nếu có số nào khác `0` và khác `1` thì lấy làm _**seed**_, duyệt mảng tìm _**seed**_ và đổi thành `0`.
            - Điều kiện **khác 1** vì phép chuyển đổi sẽ biến số `1` ở đầu về `0`
        - `9930` -> _đổi `9` thành `1`_ -> `1130`; 
        - `1231` -> _đổi `2` thành `0`_ -> `1031`; 
1. Cuối cùng chuyển lại hai chuỗi thành số, lấy hiệu của chúng là được.

## Bài Giải

```cpp
class Solution {
public:
    int maxDiff(int num) {
        std::string sample = std::to_string(num);
        std::string a = std::to_string(num);
        std::string b = a;

        for(auto c : sample) {
            if(c != '9') {
                for(auto ir = a.begin(); ir != a.end(); ++ir) {
                    if(*ir == c) *ir = '9';
                }
                break;
            }
        }

        char cb = b[0];
        if(cb != '1') {
            for(auto ir = b.begin(); ir != b.end(); ++ir) {
                if(*ir == cb) *ir = '1';
            }
        } else {
            for(auto c : sample) {
                if((c != '1') && (c != '0')) {
                    cb = c;
                    for(auto ir = b.begin(); ir != b.end(); ++ir) {
                        if(*ir == cb) *ir = '0';
                    }
                    break;
                }
            }
        }

        int ia = std::stoi(a);
        int ib = std::stoi(b);
        return (ia-ib);
    }
};
```