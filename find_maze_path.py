# Find path in a maze
# Given an undirected graph and two distinct vertices u and v, 
# check if there is a path between u and v.

# For instance
# Input:
# 4 4 
# 1 2
# 3 2
# 4 3
# 1 4
# 1 4

# Output:
# 1

#Uses python3

import sys

def exploreGraph(visited, adj, x):
    if x in visited:
        return visited

    visited.add(x)

    if x not in adj:
        return visited

    for y in adj[x]:
        visited = exploreGraph(visited, adj, y)

    return visited


def numberOfComponents(adj, n):
    result = 0

    visited = set([])
    for x in range(n):
        c = len(visited)
        visited = exploreGraph(visited, adj, x + 1)
        if len(visited) > c:
            result += 1
    
    return result


def add_edge(adj, x, y):
    if x not in adj:
        adj[x] = set([])

    adj[x].add(y)


if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))

    n, m = data[0:2]
    data = data[2:]
    edges = list(zip(data[0:(2 * m):2], data[1:(2 * m):2]))
    adj = {}

    for (a, b) in edges:
        add_edge(adj, a, b)
        add_edge(adj, b, a)

    print(numberOfComponents(adj, n))