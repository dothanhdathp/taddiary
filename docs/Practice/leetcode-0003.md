# 3. Longest Substring Without Repeating Characters

!!! warning "Warning"
    Tiết kiệm bộ nhớ chứ tốc độ thì như hạch

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        if(s.length()<2) return s.length();
        unordered_map<char, bool> mmap;
        int temp = 1;
        int ans = 1;
        mmap[s[0]]=true;
        for(int i{1};i<s.length();++i) {
            if(s[i]==s[i-temp]) {
                continue;
            } else {
                if(mmap[s[i]]) {
                    temp=1;
                    mmap.clear();
                    mmap[s[i]]=true;
                    for(int j=1;j<ans;++j) {
                        if(s[i]==s[i-j]) break;
                        mmap[s[i-j]]=true;
                        ++temp;
                    }
                } else {
                    ++temp;
                    mmap[s[i]]=true;
                    ans = max(temp, ans);
                }
            }
        }
        return ans;
    }
};
```