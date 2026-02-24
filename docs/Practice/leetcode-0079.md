# Leetcode 79. Word Search

> [https://leetcode.com/problems/word-search/](https://leetcode.com/problems/word-search/)

- Bài này không khó làm. Cho một bảng các chữ cái và tìm, nối các chữ sao cho được từ giống với từ được cho ở đầu vào.
- Từ nào dùng để nối rồi không được dùng lại.

```cpp
class Solution {
public:
    bool go_exist(
        vector<vector<char>>& board,
        vector<vector<bool>>& marked,
        string& word,
        int& X,int& Y,
        int idx,
        int x,int y
        )
    {
        if(idx == word.length())
            return true;

        if((x<0) || (y<0) || (x >= X) || (y >= Y) || marked[y][x])
            return false;

        if(word[idx] == board[y][x]) {
            marked[y][x] = true;
            if(go_exist(board,marked,word,X,Y,idx+1,x-1,y)) return true;
            if(go_exist(board,marked,word,X,Y,idx+1,x,y-1)) return true;
            if(go_exist(board,marked,word,X,Y,idx+1,x+1,y)) return true;
            if(go_exist(board,marked,word,X,Y,idx+1,x,y+1)) return true;
            marked[y][x] = false;
        };
        return false;
    }

    bool exist(std::vector<std::vector<char>>& board, std::string word) {
        int X = board[0].size();
        int Y = board.size();
        std::vector<std::vector<bool>> marked(Y, std::vector<bool>(X, false));

        for(int x=0; x < X; ++x) {
            for(int y=0; y < Y; ++y) {
                if(board[y][x] == word[0]) {
                    if(go_exist(board,marked,word,X,Y,0,x,y)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
};
```