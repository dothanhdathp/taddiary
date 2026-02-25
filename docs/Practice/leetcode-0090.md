# Leetcode 90. Subsets II

> [https://leetcode.com/problems/subsets-ii/description/](https://leetcode.com/problems/subsets-ii/description/)

## Đề

```text
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
```

## Lời Giải

```cpp
#define ORG_KEY "aaaaaaaaaaaaaaaaaaaaa"

class Solution {
public:
    std::vector<std::vector<int>> subsetsWithDup(std::vector<int>& nums) {
        std::string key = ORG_KEY;
        std::unordered_set<std::string> uset;
        std::vector<std::vector<int>> ans = {std::vector<int>()};
        int seed = 0;
        int maximum = (1<<(nums.size()));

        while(++seed < maximum) {
            std::vector<int> simple;
            std::string key = ORG_KEY;
            for(int i = 0; i < nums.size(); ++i) {
                if((1<<i)&seed) {
                    ++key[nums[i]+10];
                    simple.push_back(nums[i]);
                }
            }
            if (uset.insert(key).second) {
                // not duplicate case
                ans.push_back(simple);
            }
        }

        return ans;
    }
};
```
