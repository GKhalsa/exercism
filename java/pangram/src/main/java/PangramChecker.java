import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

public class PangramChecker {

    public boolean isPangram(String input) {
        String alphaString = input.toLowerCase().replaceAll("[^a-z]", "");
        return findUniqeCount(alphaString) == 26;
    }

    private long findUniqeCount(String alphabeticalString){
        long count = alphabeticalString
                            .codePoints()
                            .distinct()
                            .count();

        return count;
    }
}