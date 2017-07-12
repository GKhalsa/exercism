import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PangramChecker {

    public boolean isPangram(String input) {
        String alphaString = input.toLowerCase().replaceAll("[^a-z]", "");
        return findUniqeCount(alphaString) == 26;
    }

    private int findUniqeCount(String alphabeticalString){
        String uniqueString = "";
        for(int i = 0; i < alphabeticalString.length(); i++){
            if (uniqueString.indexOf(alphabeticalString.charAt(i)) == -1){
                uniqueString += alphabeticalString.charAt(i);
            }
        }
        return uniqueString.length();
    }

}
