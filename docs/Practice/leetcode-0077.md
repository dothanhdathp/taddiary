# Leetcode 77. Combinations

> [https://leetcode.com/problems/combinations/](https://leetcode.com/problems/combinations/)

## Đề Bài

```text
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
You may return the answer in any order.

Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
Example 2:

Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
 

Constraints:

1 <= n <= 20
1 <= k <= n
```

## Lời Giải

```cpp
class Solution {
public:
    std::vector<std::vector<int>> combine(int n, int k) {
        std::vector<std::vector<int>> ans;
        std::bitset<20> b(0);
        int kn = k;
        // Case 1
        if(k==n) {
            std::vector<int> sample;
            while(kn--) sample.push_back(kn+1);
            ans.push_back(sample);
            return ans;
        }
        // Case 2
        while(kn--) b.set(kn);
        int base = b.to_ulong();
        while(b.count() < n) {
            if(b.count() == k) {
                std::vector<int> sample;
                for(int i=0; i<n; ++i) {
                    if(b[i]) sample.push_back(i+1);
                }
                ans.push_back(sample);
            }
            b = ++base;
        }
        return ans;
    }
};
```