public class Hamming {

    String leftStrand;
    String rightStrand;

    Hamming(String leftStrand, String rightStrand) {
        this.leftStrand = leftStrand;
        this.rightStrand = rightStrand;
        sizeCheck();
    }

    int getHammingDistance() {
        int count = 0;
        for(int i = 0; i < leftStrand.length(); i ++){
            if (leftStrand.charAt(i) != rightStrand.charAt(i)){
                count++;
            }
        }
        return count;
    }

    private void sizeCheck(){
        if (leftStrand.length() != rightStrand.length()){
            throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }
    }

}
