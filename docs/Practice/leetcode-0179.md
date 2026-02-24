# 179. Largest Number

## Đề bài

Cho một danh sách các số nguyên không âm, sắp xếp chúng sao cho tạo thành số lớn nhất và trả về số đó.
Vì kết quả có thể rất lớn nên bạn cần trả về một chuỗi thay vì số nguyên.

__Ví Dụ 1:__

- Input: `nums = [10,2]`
- Output: `"210"`

__Ví Dụ 2:__

- Input: `nums = [3,30,34,5,9]`
- Output: `"9534330"`

## Bài Giải

Bài này không khó để giải. Chủ yếu được note lại vì một vấn đề rất khó hiểu. Lỗi __*Segmentation fault*__!

### Giải Pháp

1. <mark>Chuỗi nào có hạng tử thứ _n_ lớn hơn thì lớn hơn.</mark>
    - Ví dụ `2131` và `22` thì `22` sẽ được tính là số lớn hơn vì khi ghép nối có `222131 > 213122`
1. <mark>Với hai số có độ dài giống nhau mà các phần tử đầu tiên giống nhau thì xét cộng chuỗi.</mark>
    - Sau khi cộng độ ta sẽ được hai chuỗi có cùng độ dài.
    - Lúc này nếu chuỗi nào lớn hơn thì phần tử đầu tiên của nó sẽ được tính là lớn hơn.
    - Ví dụ `2231` và `22`. Sau khi ghép được `223122` và `222231`. Vì `223122 > 222231` nên suy ra `2231 > 22`

Nên tổng kết được các bước giải sẽ là:

!!! success "Các Bước Giải"
    1. Chuyển đổi `vector<int>` thành `vector<std::string>`
    1. Dùng `std::sort` và viết lại hàm sắp xếp cho hai đầu vào a, b là:
        - Cộng hai chuỗi với nhau.
        - So sánh `[a+b]` với `[b+a]`
        - Xếp theo chiều `LỚN -> NHỎ`
        - Khi trả về kết quả chỉ cần cộng các chuỗi `string` lại là được.
        - _Chú ý trường hợp nhiều số `0` kiểu `"000000"` thì kết quả trả về sẽ là `"0"`_

Bài này không có gì đáng nói trừ việc không hiểu sao đoạn code dưới này của mình gây ra lỗi __*Segmentation fault*__ với chuỗi 
`std::vector<int>{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}`

```cpp title="Lời Giải 1"
class Solution {
public:
    string largestNumber(vector<int>& nums) {
        // Convert to string
        std::vector<string> nums_str;

        for (int n : nums) {
            nums_str.push_back(to_string(n));
        }

        std::sort(nums_str.begin(), nums_str.end(), [](string a, string b) {
            // Case equal
            std::string __a = a + b;
            std::string __b = b + a;
            for(size_t i=0; i < __a.length(); ++i) {
                if(__a[i] != __b[i]) {
                    return __a[i] > __b[i];
                }
            }
            return true;
        });

        std::string ans;
        for (std::string s : nums_str)
            ans += s;
        return (ans[0] == '0') ? std::string("0") : ans;
    };
};
```

Nhưng cách viết dưới này thì lại không sao:

```cpp title="Lời Giải 2"
class Solution {
public:
    string largestNumber(vector<int>& nums) {
        // Convert to string
        std::vector<string> nums_str;

        for (int n : nums) {
            nums_str.push_back(to_string(n));
        }

        std::sort(nums_str.begin(), nums_str.end(), [](string a, string b) {
            // Case equal
            return (a + b) > (b + a);
        });
        
        std::string ans;
        for (std::string s : nums_str)
            ans += s;
        return ans[0] == '0' ? std::string("0") : ans;
    };
};
```

Và cuối cùng tối ưu bằng một cách rất đơn giản:

Sửa `for (std::string s : nums_str)` thành `for (std::string &s : nums_str)` là kết quả tiến đến `100%`. Khác biệt đây là:

!!! tip "Tip"
    Cần phải đặc biệt chú ý với hàm `for (std::string s : nums_str)`. Ở hàm này `std::string s` sẽ bị tạo mới và khai báo một vùng nhớ mới.
    Kết quả về cơ bản sẽ chậm hơn so với `std::string &s` sử dụng lại chuỗi vốn có trong __*nums_str*__. Thế nên nếu giá trị không bị sửa đổi mà chỉ có tính ứng dụng, ưu tiên tái sử dụng bằng __*con trỏ*__

```cpp title="Lời Giải Cuôi"
string largestNumber(vector<int>& nums) {
    // Convert to string
    std::vector<string> nums_str;

    for (int n : nums) {
        nums_str.push_back(to_string(n));
    }

    std::sort(nums_str.begin(), nums_str.end(), [](string a, string b) {
        // Case equal
        return (a + b) > (b + a);
    });
    
    std::string ans;
    for (std::string  &s : nums_str)
        ans += s;
    return ans[0] == '0' ? std::string("0") : ans;
};
```