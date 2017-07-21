
public class DifferenceOfSquaresCalculator {

    public int computeSquareOfSumTo(int num){
        int sum = 0;
        for(int i = 1; i < (num + 1); i++){
            sum += i;
        }
        return sum * sum;
    }

    public int computeSumOfSquaresTo(int num){
        int sum = 0;
        for(int i = 1; i < (num + 1); i++){
            sum += (i * i);
        }
        return sum;
    }

    public int computeDifferenceOfSquares(int num){
        return computeSquareOfSumTo(num) - computeSumOfSquaresTo(num);
    }
}
