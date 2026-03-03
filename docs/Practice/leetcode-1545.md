# 1545. Find Kth Bit in Nth Binary String

> [_Link to problem_](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/description/)

## Mô Tả

_Để sau_

## Cách 1

```text

```

## Cách 2

Để diễn giải thì:

- Đặt $F(s) = reversed(invert(s));$
- Thì $S_1 = S_0 + 1 + F(S_0)$
- Thì $S_2 = S_1 + 1 + F(S_1) = S_0 + 1 + F(S_0) + 1 + F(S_1)$
- Có thể thấy phần đầu giữ nguyên, chỉ cần tạo ra các phần sau và đếm cho đến khi `k-->0`.

> Làm đệ quy khá là thú vị đó!

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <utility>
#include <algorithm>
#include <stack>
#include <bitset>
#include <unordered_map>
#include <unordered_set>
#include <memory>
#include <string>
#include <initializer_list>
#include <set>

template <typename... Args>
void println(Args... args) {
    (std::cout << ... << args) << std::endl;
}
template <typename... Args>
void print(Args... args) {
    (std::cout << ... << args);
}

#define debug(...) debug_print_value(__LINE__, #__VA_ARGS__, __VA_ARGS__)
template <typename... Args>
void debug_print_value(size_t line_number, std::string names, Args... args) {
    size_t pos = 0;
    std::cout << "[ line " << line_number << " ] ";
    // Fold expression that handles the name parsing and printing
    ([&](auto& val) {
        size_t next_comma = names.find(',', pos);
        std::string name = names.substr(pos, next_comma - pos);
        std::cout << name << " = " << val << "; ";
        pos = next_comma + 1;
        // Skip space after comma if it exists
        if (pos < names.size() && names[pos] == ' ') pos++;
    }(args), ...);
    std::cout << std::endl;
}

template<typename T>
void print_2d_vector(std::vector<std::vector<T>> &vec, const char* mnt)
{
    for(auto V : vec) {
        for(T var : V) {
            printf(mnt, var);
        }
        printf("\n");
    }
    printf("\n");
}

/*
std::string reverts_binary_string(std::string str) {
    auto _first = str.begin();
    auto _last = str.end()-1;
    while (_first < _last) {
        std::swap(*_first, *_last);
        ++_first;
        --_last;
    }
    return str;
}

std::string sum_binary_string(std::string a, std::string b, std::string c) {
    std::string ans = "";
    int rem = 0;
    auto pa = a.rbegin();
    auto pb = b.rbegin();
    auto pc = c.rbegin();
    while((pa!=a.rend()) && (pb!=b.rend()) && (pc!=c.rend())) {
        int ia = (a.rend() == pa) ? 0 : (int)(*pa - '0');
        int ib = (b.rend() == pb) ? 0 : (int)(*pb - '0');
        int ic = (c.rend() == pc) ? 0 : (int)(*pc - '0');
        int ians = ia + ib + ic + rem;
        ans.push_back((ians&1) ? '1' : '0');
        rem = (ians>>1)&1;
        if(a.rend() != pa) ++pa;
        if(b.rend() != pb) ++pb;
        if(b.rend() != pc) ++pc;
    }
    if(rem) ans.push_back('1');
    std::reverse(ans.begin(), ans.end());
    debug(a, b, c, ans);
    return ans;
}

std::string inverts_binary_string(std::string str) {
    for(auto &c : str) {
        c = ('0'==c) ? '1':'0';
    }
    return str;
}

char findKthBit(int n, int k) {
    // actually, ... n doesn't need
    std::string s = "0";
    while (s.length() < k) {
        std::string sri = inverts_binary_string(s); // reverts of inverts
        std::reverse(sri.begin(), sri.end()); // revert to get origin.
        s.push_back('1');
        s += sri;
    }
    return s[k-1];
};
*/

void inverts_binary_string(std::string& str) {
    for(auto &c : str) { c = ('0'==c) ? '1':'0'; }
}

std::string gen_next_string(std::string org) {
    // inverts
    for(auto &c : org) {
        c = ('0'==c) ? '1':'0';
    }
    std::reverse(org.begin(), org.end());
    return std::string("1") + org;
}

char recursionBit(std::string s, int k) {
    if(k <= s.length()) {
        return s[k];
    } else {
        return recursionBit(s+gen_next_string(s), k-s.length());
    }
}

char findKthBit(int n, int k) {
    return recursionBit(std::string("0"), k);
};

int main() {
    std::cout << "ANS : " << findKthBit(3, 1) << std::endl;
    std::cout << "ANS : " << findKthBit(4, 11) << std::endl;
    return 0;
}
```