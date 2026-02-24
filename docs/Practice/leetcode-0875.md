# 875. Koko Eating Bananas

> Link: [https://leetcode.com/problems/koko-eating-bananas/description/](https://leetcode.com/problems/koko-eating-bananas/description/)

## Lần 1

> Error: __Time Limit Exceeded__

```cpp
class Solution {
public:
    // 875. Koko Eating Bananas
    int minEatingSpeed(std::vector<int>& piles, int h)
    {
        // Sort mảng để có mảng dễ tính nhất
        std::sort(piles.begin(), piles.end());

        // Tìm miếng cắn lớn nhất
        int maxBite = (*(piles.end()-1))*(piles.size())/h + 1;
        
        int bitCnt = 0;
        do {
            bitCnt = 0;
            auto ir = piles.end();
            while (ir-- != piles.begin()) {
                int diff = ((*ir)/maxBite) + (((*ir)%maxBite) ? 1 : 0);
                bitCnt += diff;
                if(!diff)
                    break;
            };
        } while((bitCnt <= h) && (--maxBite>0));
        return maxBite+1;
    }
};
```

## Lần 2

> Error: __Time Limit Exceeded__

```cpp
class Solution {
public:
    // 875. Koko Eating Bananas
    int minEatingSpeed(std::vector<int>& piles, int h)
    {
        // Tìm miếng cắn lớn nhất
        int maxBite = (*std::max_element(piles.begin(), piles.end()))*(piles.size())/h + 1;

        // Quick sort for the range which should be louder than normally
        auto ir_first = piles.begin();
        auto ir_last = piles.end()-1;
        while(ir_first < ir_last) {
            while((*ir_last <= maxBite) && (ir_first < ir_last)) --ir_last;
            while((*ir_first > maxBite) && (ir_first < ir_last)) ++ir_first;
            std::swap(ir_first, ir_last);
        }
        std::sort(piles.begin(), ir_first);
        // std::sort(piles.begin(), piles.end());
        
        int bitCnt = 0;
        do {
            bitCnt = 0;
            auto ir = piles.end();
            while (ir-- != piles.begin()) {
                int diff = ((*ir)/maxBite) + (((*ir)%maxBite) ? 1 : 0);
                bitCnt += diff;
                if(!diff)
                    break;
            };
        } while((bitCnt <= h) && (--maxBite>0));
        return maxBite+1;
    }
};
```

## Lần 3

> Error: __Time Limit Exceeded__

```cpp
class Solution {
public:
    // 875. Koko Eating Bananas
    int minEatingSpeed(std::vector<int>& piles, int h)
    {
        // Tìm miếng cắn lớn nhất
        std::sort(piles.begin(), piles.end());
        size_t maxBite = (*(piles.end()-1) * piles.size())/h + 1;
        int step = static_cast<int>(maxBite);

        int cnt{0}, m_step, lv;
        while (step) {
            m_step = step;
            cnt = 0;
            lv = 1;
            for(int i : piles)  {
                while (i > m_step) {
                    m_step += step;
                    ++lv;
                }
                cnt += lv;
            }
            if(cnt > h) break;
            if(m_step < 0) {
                break;
            }
            --step;
        }
        return (++step);
    }
}; 
```