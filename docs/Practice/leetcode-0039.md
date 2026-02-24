# 39. Combination Sum

> Link: https://leetcode.com/problems/combination-sum/

### 39.1 Mô tả

- Cho đầu vào là chuỗi số nguyên `candidates` và một số nguyên `target`
- Trả về tất cả tổ hợp có thể của các số trong `candidates` sao cho các số đó có tổng bằng với `target`

| candidates  | target | result                      |
| :---------- | :----: | :-------------------------- |
| `[2,3,6,7]` |  `7`   | `[[2,2,3],[7]]`             |
| `[2,3,5]`   |  `8`   | `[[2,2,2,2],[2,3,3],[3,5]]` |

- 1 <= `candidates.length` <= 30
- 2 <= `candidates[i]` <= 40
- <mark>Tẩt cả các số trong __candidates__ đều khác nhau</mark>
- 1 <= `target` <= 40

### 39.2 Giải thuật

___Backtracking___

Tư duy của mình khi giải bài này thế nào? Tưởng tượng mình <u>__là người thợ đào mỏ__</u>

- Gọi chuỗi đầu vào là tập $I={i_0, i_1, ..., i_k}$
- Trước hết, cần phải sắp xếp lại chuỗi $I$ sao cho  $i_0 < i_1 < ... < i_k$
- Đầu tiên cần tưởng tượng rằng mình __giống như người thợ đi đào mỏ__ qua từng tầng để đào vàng và cầm theo một cái túi chỉ vừa đủ ___target___:
  - Chủ nhân chỉ chấp nhận số đá có tổng là một mục tiêu (___target___ $T$) xác định.
  - Ở mỗi tầng chỉ được nhặt 1 viên đá.
  - ỗi tầng chỉ được nhặt 1 viên đá.
  - Có thể chọn nhặt đá có kích thước giống nhau ở các tầng khác nhau, nhưng cuối cùng các kết quả có tổ hợp giống nhau cần bị loại bỏ.
    - Giải thích: Nghĩa là giả sử đi qua ba tầng, đá nhặt có thứ tự lần lượt là `1,2,3` và `3,2,1` thì kết quả sẽ bị tính là giống nhau và loại bỏ. (Với mục tiêu giả định là `6`)
- Nếu mình là thợ mỏ sẽ thực hiện như sau:
  - Vì có thể nhặt lại viên đá có kích thước giống nhau nên hãy coi như mỗi tầng đá sẽ lại được phục hồi lại. Hay mỗi tầng đều có đá $I={i_0, i_1, ..., i_k}$ là như nhau.
  - Đi mỗi tầng nhặt đá, __chỉ 1 viên đá__, theo các luật sau:
    1. Đá nhặt ở mỗi tầng phải theo thứ tự từ nhỏ nhất đến lớn nhất.
    1. Nếu đá đó có thể nhặt, hãy bỏ vào giỏ và cập nhật dung lượng.
    1. __Đá có thể nhặt__ là đá mà túi có thể chứa được viên đá _(nghĩa là khi thêm viên đá đó vào túi vẫn chưa vượt quá dung tích)_.
    1. Nếu chưa đủ ___target___, hãy đi tiếp xuống tầng dưới và lặp lại, nhặt viên bé nhất.
    1. Nếu vừa đủ ___target___, hãy liệt kê và lưu lại danh sách cả số đá hiện có trong giỏ.
    1. Sử dụng `std::sort` để sắp xếp lại đá trong danh sách, việc này sẽ ___hỗ trợ loại bỏ các kết quả giống nhau___.
    1. Nếu viên đá nhặt lên ở tầng đó mà vượt quá dung tích, hãy bỏ viên đá đó và trở lại tầng trước đó.
    1. Khi quay lại tầng trước, hãy bỏ viên được nhặt ở tầng này và chọn viên đá lớn hơn tiếp theo.
    1. Lặp đi lặp lại cho đến khi bạn ở một tầng nào đó nhặt đến viên cuối cùng vẫn chưa đầy giỏ tức là đã hết trường hợp khả dĩ rồi.

### 39.3 Đáp án

```c++
struct DIGGER
{
    std::vector<int> backpack;
    int total;
    int target;
    std::vector<int> *mine;
    std::set<std::vector<int>> *report;
    std::set<int> avaible;
};


void dfs(DIGGER &digger) {
    for(size_t i=0; i < digger.mine->size(); ++i) {
        int gold = digger.mine->at(i);
        if ((digger.total + gold) == digger.target) {
            std::vector<int> package = digger.backpack;
            package.push_back(gold);
            std::sort(package.begin(), package.end());
            digger.report->insert(package);
            return;
        } else
        if ((digger.total + gold) < digger.target) {
            digger.backpack.push_back(gold);
            digger.total += gold;
            dfs(digger);
            digger.backpack.pop_back();
            digger.total -= gold;
        } else
        if ((digger.total + gold) > digger.target) {
            return;
        }
    }
}

std::vector<std::vector<int>> combinationSum(std::vector<int>& candidates, int target) {
    std::set<std::vector<int>> report;
    std::sort(candidates.begin(), candidates.end());
    DIGGER miner;
    miner.total = 0;
    miner.target = target;
    miner.mine = &candidates;
    miner.report = &report;
    dfs(miner);
    std::vector<std::vector<int>> ans(report.begin(), report.end());
    return ans;
}
```