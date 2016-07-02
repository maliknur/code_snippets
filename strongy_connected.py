# Compute the number of strongly connected components of 
# a given directed graph with n vertices and m edges.

# For instance
# Input:
# 4 4
# 1 2 
# 4 1 
# 2 3 
# 3 1

# Output:
# 2


#Uses python3

import sys

sys.setrecursionlimit(200000)

def getReversed(adj):
    radj = [[] for _ in range(len(adj))]
    
    for v in range(len(adj)):
        for e in adj[v]:
            radj[e].append(v)

    return radj


def getOrder(visited, adj, order, v):
    if v in visited:
        return

    visited.add(v)

    for e in adj[v]:
        getOrder(visited, adj, order, e)

    order.append(v)



def stronglyConnectedComponents(adj):
    result = 0
    radj = getReversed(adj)
    visited = set([])
    order = []

    for v in range(len(adj)):
        getOrder(visited, radj, order, v)
        
    visited = set([])
    for v in reversed(order):
        c = len(visited)
        getOrder(visited, adj, [], v)
        
        if len(visited) > c:
            result += 1

    return result


if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n, m = data[0:2]
    data = data[2:]
    edges = list(zip(data[0:(2 * m):2], data[1:(2 * m):2]))
    adj = [[] for _ in range(n)]
    for (a, b) in edges:
        adj[a - 1].append(b - 1)
        
    print(stronglyConnectedComponents(adj))