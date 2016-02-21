/**
 * Created by maliknur on 2/20/16.
 */
import java.util.LinkedList;
import java.util.Queue;

public class GraphBFS {
    public static void main(String args[]) {
        Graph g = new Graph(6);
        // adding edges between Vertices
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(1, 3);
        g.addEdge(3, 4);
        g.addEdge(2, 3);
        g.addEdge(4, 0);
        g.addEdge(4, 1);
        g.addEdge(4, 5);
        g.addEdge(2, 5);

        //explore Graph from Vertice '0'
        g.BFS(0);

    }

}

// single Graph's node class
class GNode {
    int dest;
    GNode next;

    public GNode(int d) {
        dest = d;
        next = null;
    }
}

// adjacency list of Graph
class adjList {
    GNode head;
}

// General Graph class with various methods
class Graph {
    int V; // number of Vertices
    adjList[] array;

    public Graph(int V) {
        this.V = V;
        array = new adjList[V]; // linked lists = number of GNodes in Graph
    
        for (int i = 0; i < V; i++) {
            array[i] = new adjList();
            array[i].head = null;
        }
    }

    // add Edge between two Vertices of Graph
    public void addEdge(int src, int dest) {
        GNode n = new GNode(dest);
        n.next = array[src].head;
        array[src].head = n;
    }

    // Breadth-first search approach
    public void BFS(int startVertex) {
        boolean[] visited = new boolean[V];
        Queue<Integer> s = new LinkedList<Integer>();

        s.add(startVertex);
        while (s.isEmpty() == false) {
            int n = s.poll();
            System.out.print(" " + n);
            visited[n] = true;
            GNode head = array[n].head;
            while (head != null) {
                if (visited[head.dest] == false) {
                    s.add(head.dest);
                    visited[head.dest] = true;
                }
                head = head.next;
            }
        }
    }
}