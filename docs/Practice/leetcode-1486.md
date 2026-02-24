# 1486. XOR Operation in an Array

!!! note "Note"
    [Link bài gốc](https://leetcode.com/problems/xor-operation-in-an-array/description/)

## Mô tả

Bài này cho hai đối số đầu vào là `n` và `start` với:

- `n` là độ dài của chuỗi `nums`
- `start` có thể coi là ___giá trị cơ bản___ của chuỗi `nums`
- Chuỗi `nums` được xác định như sau:
    - Thành phần thứ `i` trong chuỗi `nums` sẽ có giá trị là `nums[i] = start + 2 * i`

Yêu cầu trả ra kết quả là phép __XOR bit__ _(bitwise)_ của tất cả các số trong chuỗi `nums`

## Bài làm

### Cách 1

```cpp
class Solution {
public:
    int xorOperation(int n, int start) {
        if(1==n)
            return start;
        return (start + 2*(n-1))^xorOperation(n-1, start);
    }
};
```

!!! success "Success"
    - Cái này quá dễ rồi, đơn giản chỉ là dùng đệ quy thôi và cách đó chắc chắn là nhanh nhất rồi.

### Cách 2

Cách này mình mới nghĩ ra thôi. Có thể xem xét thấy hai giá trị thứ `nums[i]` và `nums[i+1]` lệch nhau chính xác là 2 đơn vị. Có thể sẽ có cách khác nhanh hơn nhiều nếu dùng `while` và `--` thay vì phải dùng __đệ quy__.