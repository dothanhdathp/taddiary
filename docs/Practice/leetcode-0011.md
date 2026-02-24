# 11. Container With Most Water

### 11.1 Overview

Bài này có hai phương pháp, kết quả đem lại lại khác nhau rõ rệt. Mình muốn biết tại sao và làm thế nào mà tốc độ có thể khác biệt lớn đến như này.

|            | Language | Runtime | Memory |
| :--------- | :------: | :-----: | :----: |
| Solution 1 |   Cpp    |  5.69%  | 99.97% |
| Solution 2 |   Java   | 96.29%  | 99.97% |

### 11.2 Solution 1

```cpp
class Solution {
public:
    int maxArea(vector<int>& H) {
        int Ans = (H.size()-1)*min(H[0],H[H.size()-1]);
        for(int i{0}; i < H.size(); ++i) {
            if(H[i]==0) continue;
            int diff = Ans/H[i];
            while(i-diff>0) {
                Ans = max(Ans,diff*min(H[i-diff],H[i]));
                ++diff;
            }
            while(i+diff<H.size()) {
                Ans = max(Ans,diff*min(H[i+diff],H[i]));
                ++diff;
            }
        }
        return Ans;
    }
};
```

### 11.2 Solution 2

```java
class Solution {
    public int maxArea(int[] height) {
        int first = 0;
        int last = height.length-1;
        int ans = 0;
        while(last != first)
        {
            ans = Math.max((last-first)*Math.min(height[first], height[last]), ans);
            if(height[first] < height[last])
            {
                ++first;
            } else {
                --last;
            }
        }
        return ans;
    }
}
```