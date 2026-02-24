# 57. Insert Interval

> _Source: [https://leetcode.com/problems/insert-interval/](https://leetcode.com/problems/insert-interval/)_

### 57.1 Mô Tả

### 57.2 Giải Pháp

```cpp
#define MAXLEN 100002

class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        std::bitset<MAXLEN> bits(0);
        std::stack<vector<vector<int>>::iterator> bin;

        for(int i = newInterval[0]; i <= newInterval[1]; ++i) {
            bits.set(i);
        }

        for(auto ir = intervals.begin(); ir != intervals.end(); ++ir) {
            for(int idx = (*ir)[0]; idx <= (*ir)[1]; ++idx) {
                if(bits.test(idx)) {
                    goto merged;
                }
            }
            continue;
            merged:
            bin.push(ir);
            for(int idx = (*ir)[0]; idx <= (*ir)[1]; ++idx) {
                bits.set(idx);
            }
        }
        
        // Remove each items in bin
        while (!bin.empty())
        {
            intervals.erase(bin.top());
            bin.pop();
        }
        
        // Prepare new item
        vector<int> new_item;
        for(int i = 0; i <= MAXLEN; ++i) {
            if(bits.test(i)) {
                new_item.push_back(i);
                for(int j = i+1; j <= MAXLEN; ++j) {
                    if(!bits.test(j)) {
                        new_item.push_back(j-1);
                        goto quit_double_for;
                    }
                }
            }
        }
        
        quit_double_for:
        intervals.push_back(new_item);
        std::sort(intervals.begin(), intervals.end());
        return intervals;
    }
};
```