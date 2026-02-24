# 37. Sudoku Solver

## 37.1 Lịch sử

Bắt đầu từ một câu đố trên [https://leetcode.com/problems/sudoku-solver/](https://leetcode.com/problems/sudoku-solver/). Ngồi mày mò cách giải nhưng không thành công, ít nhất là mình cũng có thể giải được mấy bảng sudoku đơn giản.

## 37.2 Mã nguồn

```cpp title="main.cpp"
#include "stdio.h"
#include <algorithm>
#include <iostream>
#include <chrono>
#include <fstream>
#include <string>
#include <bitset>
#include <vector>

using namespace std;

#define _1_ (000000001b)
#define _2_ (000000010b)
#define _3_ (000000100b)
#define _4_ (000001000b)
#define _5_ (000010000b)
#define _6_ (000100000b)
#define _7_ (001000000b)
#define _8_ (010000000b)
#define _9_ (100000000b)

// Export function

const std::vector<std::vector<int>> id_row = {
    { 0, 1, 2, 3, 4, 5, 6, 7, 8},
    { 9,10,11,12,13,14,15,16,17},
    {18,19,20,21,22,23,24,25,26},
    {27,28,29,30,31,32,33,34,35},
    {36,37,38,39,40,41,42,43,44},
    {45,46,47,48,49,50,51,52,53},
    {54,55,56,57,58,59,60,61,62},
    {63,64,65,66,67,68,69,70,71},
    {72,73,74,75,76,77,78,79,80}
};
const std::vector<std::vector<int>> id_col {
    { 0, 9,18,27,36,45,54,63,72},
    { 1,10,19,28,37,46,55,64,73},
    { 2,11,20,29,38,47,56,65,74},
    { 3,12,21,30,39,48,57,66,75},
    { 4,13,22,31,40,49,58,67,76},
    { 5,14,23,32,41,50,59,68,77},
    { 6,15,24,33,42,51,60,69,78},
    { 7,16,25,34,43,52,61,70,79},
    { 8,17,26,35,44,53,62,71,80}
};
const std::vector<std::vector<int>> id_box {
    { 0, 1, 2, 9,10,11,18,19,20},
    { 3, 4, 5,12,13,14,21,22,23},
    { 6, 7, 8,15,16,17,24,25,26},
    {27,28,29,36,37,38,45,46,47},
    {30,31,32,39,40,41,48,49,50},
    {33,34,35,42,43,44,51,52,53},
    {54,55,56,63,64,65,72,73,74},
    {57,58,59,66,67,68,75,76,77},
    {60,61,62,69,70,71,78,79,80},
};

template<typename T>
void print_2d_vector(std::vector<std::vector<T>> &board, const char* prompt) {
    for(std::vector<T> V : board) {
        for(T v : V) {
            printf(prompt, v);
        }
        printf("\n");
    }
}

void solveSudoku(vector<vector<char>>& board) {
    std::vector<std::bitset<9>> data;
    std::vector<int> marker;

    // Fill data
    for(auto v : board) {
        for(auto c : v) {
            switch (c)
            {
                case '1': data.push_back(std::bitset<9>(0b000000001)); marker.push_back(1);  break;
                case '2': data.push_back(std::bitset<9>(0b000000010)); marker.push_back(1);  break;
                case '3': data.push_back(std::bitset<9>(0b000000100)); marker.push_back(1);  break;
                case '4': data.push_back(std::bitset<9>(0b000001000)); marker.push_back(1);  break;
                case '5': data.push_back(std::bitset<9>(0b000010000)); marker.push_back(1);  break;
                case '6': data.push_back(std::bitset<9>(0b000100000)); marker.push_back(1);  break;
                case '7': data.push_back(std::bitset<9>(0b001000000)); marker.push_back(1);  break;
                case '8': data.push_back(std::bitset<9>(0b010000000)); marker.push_back(1);  break;
                case '9': data.push_back(std::bitset<9>(0b100000000)); marker.push_back(1);  break;
                case '.': data.push_back(std::bitset<9>(0b111111111)); marker.push_back(10); break;
                default:
                    break;
            }
        }
    }

    bool repeat = true;
    int max_test = 1000000;
    while (repeat && --max_test)
    {
        // Fill data
        // Reach all in row
        for(int i=0; i<9; ++i) {
            std::bitset<9> rowbit(0b000000000);
            for(int j=0; j<9; ++j) {
                if(marker[id_row[i][j]] == 1) {
                    rowbit |= data[id_row[i][j]];
                }
            }
            for(int j=0; j<9; ++j) {
                if(marker[id_row[i][j]] != 1) {
                    data[id_row[i][j]] &= ~rowbit;
                }
            }
        }

        // Reach all in col
        for(int i=0; i<9; ++i) {
            std::bitset<9> colbit(0b000000000);
            for(int j=0; j<9; ++j) {
                if(marker[id_col[i][j]] == 1) {
                    colbit |= data[id_col[i][j]];
                }
            }
            for(int j=0; j<9; ++j) {
                if(marker[id_col[i][j]] != 1) {
                    data[id_col[i][j]] &= ~colbit;
                }
            }
        }

        // Reach all in box
        for(int i=0; i<9; ++i) {
            std::bitset<9> boxbit(0b000000000);;
            for(int j=0; j<9; ++j) {
                if(marker[id_box[i][j]] == 1) {
                    boxbit |= data[id_box[i][j]];
                }
            }
            for(int j=0; j<9; ++j) {
                if(marker[id_box[i][j]] != 1) {
                    data[id_box[i][j]] &= ~boxbit;
                }
            }
        }

        // Re-check map.
        repeat = false;
        for(int i=0; i<81; ++i) {
            if(1 != marker[i]) {
                if(data[i].count() == 0) {
                    printf("--- Wrong Table ---\n");
                    goto exit;
                }
                if(marker[i] != data[i].count()) {
                    marker[i] = data[i].count();
                    repeat = true;
                }
            }
        }
    }
exit:
    auto get_number_char = [](std::bitset<9> input) {
        if(std::bitset<9>(0b000000001) == input) return '1';
        if(std::bitset<9>(0b000000010) == input) return '2';
        if(std::bitset<9>(0b000000100) == input) return '3';
        if(std::bitset<9>(0b000001000) == input) return '4';
        if(std::bitset<9>(0b000010000) == input) return '5';
        if(std::bitset<9>(0b000100000) == input) return '6';
        if(std::bitset<9>(0b001000000) == input) return '7';
        if(std::bitset<9>(0b010000000) == input) return '8';
        if(std::bitset<9>(0b100000000) == input) return '9';
        return '.';
    };

    for(int i=0; i<9; ++i) {
        for(int j=0; j<9; ++j) {
            board[i][j] = get_number_char(data[i*9+j]);
        }
    }
}

int main(int argc, char const *argv[]) {
    std::vector<std::vector<char>> input;
    std::ifstream inputFile(argv[1]); // Replace with your file name

    if (!inputFile) {
        printf("Unable to open file %s", argv[1]);
        return 1; // Return with error code
    }

    std::string line;
    while (std::getline(inputFile, line)) {
        vector<char> vc;
        for (char c : line)
        {
            if((('1'<=c)&&(c<='9'))||c=='.') 
                vc.push_back(c);
        }
        input.push_back(vc);
    }

    inputFile.close(); // Close the file
    printf("------ IN -------\n");
    print_2d_vector<char>(input, "%c ");
    printf("------ OUT ------\n");
    solveSudoku(input);
    print_2d_vector<char>(input, "%c ");

    return 0; // Return success
}
```

## 37.3 Build

```bash
g++ -std=c++11 -O2 -Wall main.cpp -o main
```