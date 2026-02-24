# 47. Permutations II

> link: [https://leetcode.com/problems/permutations-ii/description/](https://leetcode.com/problems/permutations-ii/description/)

### 47.1 Mô tả

Cho một tập hợp các số, nums, có thể chứa các số trùng lặp, trả về tất cả các hoán vị <mark>duy nhất</mark> có thể theo bất kỳ thứ tự nào.

_Khác biệt ở đây là các hoán vị không được trùng lặp._

### 47.2 Ví dụ

- __Input__: nums = [1,1,2]
- __Output__: [[1,1,2], [1,2,1], [2,1,1]]
    - Với phép hoán vị thông thường, kết quả trả về _[1, 1, 2], [1, 2, 1], __[1, 1, 2]__, __[1, 2, 1]__, [2, 1, 1], __[2, 1, 1]___ có ba giá trị trùng lặp bị loại bỏ.
    - Ở đây không được trùng lặp không được tính.

### 47.3 Bài giải

Thì ... giải thuật bài này khá là đơn giản, có kết quả loại bỏ các giá trị có giá trị giống nhau trong `ans`.

```c++
void permute(vector<int>& nums, int k, vector<vector<int>>& ans) {
    if(k >= nums.size()) {
        ans.push_back(nums);
    }
    for(int i=k;i<nums.size(); i++) {
        swap(nums[i], nums[k]);
        permute(nums, k+1, ans);
        swap(nums[i], nums[k]);
    }
}

vector<vector<int>> permuteUnique(vector<int>& nums) {
    vector<vector<int>> ans;
    permute(nums, 0, ans);
    std::sort(ans.begin(), ans.end());
    ans.erase(std::unique(ans.begin(), ans.end()), ans.end());
    return ans;
}
```
