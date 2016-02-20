/**
 * Created by maliknur on 2/19/16.
 */

import java.util.*;
import java.io.*;

public class MaximumPairwiseProduct {
    static Long getMaxPairwiseProduct(int[] numbers) {

        Long result = null;
        Long longA = null;
        Long longB = null;
        int n = numbers.length;

        int max_index1 = -1;
        int max_index2 = -1;

        for(int i = 0; i < n; i++){
            if((max_index1 == -1) || (numbers[i] > numbers[max_index1])){
                max_index1 = i;
            }
        }
        if(max_index1 != -1){
            longA = new Long(numbers[max_index1]);
        }

        for(int j = 0; j < n; j++){
            if((j != max_index1) && ((max_index2 == -1) || (numbers[j] > numbers[max_index2]))){
                max_index2 = j;
            }
        }

        if(max_index2 != -1){
            longB = new Long(numbers[max_index2]);
        }

        if((longA != null) && (longB != null)){
            result = longA*longB;
        }
        return result;

    }

    public static void main(String[] args) {

        FastScanner scanner = new FastScanner(System.in);
        int n = scanner.nextInt();
        Long resultPair = null;
        int[] numbers = new int[n];
        for (int i = 0; i < n; i++) {
            numbers[i] = scanner.nextInt();
        }

        // output RESULT
        resultPair = getMaxPairwiseProduct(numbers);
        if(resultPair == null){

        } else {
            System.out.println(resultPair);
        }
    }

    static class FastScanner {
        BufferedReader br;
        StringTokenizer st;

        FastScanner(InputStream stream) {
            try {
                br = new BufferedReader(new InputStreamReader(stream));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        String next() {
            while (st == null || !st.hasMoreTokens()) {
                try {
                    st = new StringTokenizer(br.readLine());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return st.nextToken();
        }

        int nextInt() {
            return Integer.parseInt(next());
        }
    }

}