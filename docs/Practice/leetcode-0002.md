# 2. Add Two Numbers

### 2.1 Mô Tả

Bài này không nhảm, bài này rất rất hay

### 2.2 My Solotion

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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* ans = new ListNode();
        ListNode* zero = new ListNode(0);
        ListNode* p = ans;
        int rem{0};
        for(;;)
        {
            int va  = l1->val;
            va += l2->val;
            va += rem;
            rem = va/10;
            p->val = va%10;
            if(l1->next!=nullptr || l2->next!=nullptr)
            {
                l1 = l1->next==nullptr ? zero : l1->next;
                l2 = l2->next==nullptr ? zero : l2->next;
                p->next = new ListNode();
                p = p->next;
            } else {
                if(rem!=0) p->next = new ListNode(rem);
                break;
            }
        }
        delete zero;
        return ans;
    }
};
```

### 2.3 Fastest Solution

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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy=new ListNode(0);
        ListNode* cur=dummy;
        int car=0;

        while(l1 || l2){
            int num=car;
            if(l1==NULL){
                num+=l2->val;
            }
            else if(l2==NULL){
                num+=l1->val;
            }
            else{
                num+=l1->val + l2->val;
            }
            ListNode* digit = new ListNode(num%10);
            car=num/10;
            cur->next=digit;
            cur=cur->next;
            if(l1!=NULL) l1=l1->next;
            if(l2!=NULL) l2=l2->next;
        }

        if(car!=0){
            cur->next= new ListNode(car);
        }

        return dummy->next;
    }
};
```