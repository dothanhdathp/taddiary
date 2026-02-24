# Leetcode 78. Subsets

> Bài này là bài hay

## Yêu Cầu 
## Nội Dung Yêu Cầu

Cho tập hợp các số __*không trùng lập (duy nhất)*__ trong `nums<int>`. Trả về các bộ tập hợp con có thể được tạo ra từ tập hợp số trên:

- __*Ví Dụ 1*__:
	- __Đầu vào__: `nums = [1,2,3]`
	- __Kết Quả__: `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`
- __*Ví Dụ 2*__:
	- __Đầu vào__: `nums = [0]`
	- __Kết Quả__: `[[],[0]]`

### Giới Hạn

## Phương Pháp

Bài này trước tiên mình tiếp cận theo hướng quay số. Tức là nếu có $1,2,3$ thì sẽ tạo thành các bộ tập hợp con $1$, $2$, $3$ trước rồi đến tạo các bộ đôi $1,2$, $1,3$, $1,4$, ..., bộ tam, bộ tứ, ...

```txt title="Ví Dụ"
1
2
3
12
13
23
123
```

Cách đó lập trình khá khó khăn, việc di chuyển dựa trên các `vector` cũng không có kết quả tốt.

Dựa trên gợi ý của một người trong phần bình luận, khá là hay, đó là dựa trên sự biến đổi số tuyệt vời của __*bits*__. Tức là nếu có một tập hợp __*bits*__ có sẵn độ dài, các bit sẽ tự động tạo thành các bộ số con dựa trên sự __*xuất hiện*__ của các __*bits*__ tại các vị trí tương ứng.

Ví dụ với `nums={1,2,3}`

```text
000 ->> {}
001 ->> {3}
010 ->> {2}
011 ->> {2,3}
100 ->> {1}
101 ->> {1,3}
110 ->> {1,2}
111 ->> {1,2,3}
```

## Lời Giải

```cpp
class Solution {
public:
    std::vector<std::vector<int>> subsets(std::vector<int>& nums) {
        std::vector<std::vector<int>> ans;
        for(size_t i = 1; i < 1025; ++i) {
            std::bitset<10> bits = i;
            std::vector<int> simple;
            for(int i = 0; i < nums.size(); ++i) {
                if(bits[i]) simple.push_back(nums[i]);
            }
            if(simple.empty()) {
                ans.push_back(simple);
                break;
            } else {
                ans.push_back(simple);
            }
        }
        
        return ans;
    }
};
```