# Task

## To Do

### Về IP địa chỉ

- [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
- [Multicast address](https://en.wikipedia.org/wiki/Multicast_address)

### Về thông tin địa chỉ

- Một số PORT sẽ là không được, hoặc là không nên động vào làm gì cả, nó có tác dụng riêng. Được định danh ở đây: [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
- Đầu tiên port được hợp cùng với địa chỉ mạng để làm cùng một địa chỉ
    - [TCP/IP Packet Format](https://www.geeksforgeeks.org/computer-networks/tcp-ip-packet-format/)
    - Sau đó tất cả các gói vẫn lên cùng một băng thông.
- Có một số port sẽ hỗ trợ __*multicast*__ _([Multicast address](https://en.wikipedia.org/wiki/Multicast_address))_

## Về Leetcode

### 64. Minimum Path Sum

Link: [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

```cpp
class Solution {
public:
	int minPathSum(std::vector<std::vector<int>>& grid) {
		// cost table
		size_t maxX = grid[0].size();
		size_t maxY = grid.size();
		std::vector<std::vector<int>> cost_grid =
			std::vector<std::vector<int>>(maxY, std::vector<int>(maxX, -1));
		std::stack<std::pair<int, int>> stackpack;
		
		stackpack.push(std::pair<int, int>({0,0}));
		
		while (!stackpack.empty())
		{
			std::stack<std::pair<int, int>> rstackpack;
			// Xử lý tất cả các phần tử trong gói
			while (!stackpack.empty()) {
				size_t x = stackpack.top().first;
				size_t y = stackpack.top().second;

				if(cost_grid[y][x] != -1) {
					stackpack.pop();
					continue;
				}

				int cost_from_top = [x,y,&cost_grid](){
					if(y == 0) return -1;
					return cost_grid[y-1][x];
				}();
				int cost_from_left = [x,y,&cost_grid](){
					if(x == 0) return -1;
					return cost_grid[y][x-1];
				}();

				cost_grid[y][x] = grid[y][x];
				if((cost_from_top > 0) || (cost_from_left > 0))  {
					cost_grid[y][x] += (
						((unsigned int)cost_from_top < (unsigned int)cost_from_left) ?
						cost_from_top : cost_from_left
					);
				}

				// Push right cell, push bottom cell
				if (x+1 < maxX) 
					rstackpack.push(std::pair<int, int>({x+1, y}));
				if (y+1 < maxY) 
					rstackpack.push(std::pair<int, int>({x, y+1}));

				stackpack.pop();
			}
			// Move new stack pack to old stack for restart process
			stackpack = std::move(rstackpack);
		}

		return cost_grid[maxY-1][maxX-1];
	}
};
```

### 22. Generate Parentheses

- [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)

## Good music today

- [qe0GaYWGk0k](https://www.youtube.com/watch?v=qe0GaYWGk0k)
- [ca27Q51UFYs](https://www.youtube.com/watch?v=ca27Q51UFYs)
- [IfkZUsLbqqE](https://www.youtube.com/watch?v=IfkZUsLbqqE)
- [HJRCBoWWVIk](https://www.youtube.com/watch?v=HJRCBoWWVIk)