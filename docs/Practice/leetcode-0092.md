# Leetcode 92. Reverse Linked List II

> [link leetcode](https://leetcode.com/problems/reverse-linked-list-ii/description/)

## Đề

Cho một chuỗi _**linked list**_ và giới hạn hai vị trí ở đầu và cuối là `left` và `right`. Đảo chỗ chỉ các phần tử trong khoảng tử _**left** đển **right**_.

<figure markdown="span">
    ![alt text](image/leetcode-0092.png)
    <figcaption>Hình ảnh minh họa</figcaption>
</figure>

## Giải Pháp

1. Từ con trỏ `head`, từ giá trị của `left` nên cho con trỏ chạy thẳng đến vị trí của _node_ đầu tiên.
1. Lưu lại địa chỉ con trỏ này _**\*attached**_.
1. Sau đó từ khoảng cách `(right - left)`, chạy tiếp đến vị trí cuối, vừa chạy vừa đưa giá trị vào **Stack**
1. Quay trở lại con trỏ _**\*attached**_, chạy lại và lấy ngược giá trị từ trong **Stack** ra ngoài.

## Bài Giải

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int left, int right) {
        std::stack<int> sack;
        ListNode* runner = head;
        ListNode* attached;

        int diff = right-left+1;
        while(--left>0) runner = runner->next;
        attached = runner;

        while(diff-->0) {
            sack.push(runner->val);
            runner = runner->next;
        }

        while (!sack.empty()) {
            attached->val = sack.top();
            attached = attached->next;
            sack.pop();
        }
        return head;
    }
};
```