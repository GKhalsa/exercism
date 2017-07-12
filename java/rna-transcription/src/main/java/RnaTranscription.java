import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class RnaTranscription {

    public static String ofDna(String sequenceString) {

        Map<String, String> dnaSequenceMap = new HashMap<String, String>() {{
            put("C", "G");
            put("G", "C");
            put("T", "A");
            put("A", "U");
        }};

        StringBuilder convertedSequence = new StringBuilder();

        Arrays.asList(sequenceString).forEach((letter) -> {
            convertedSequence.append(dnaSequenceMap.get(letter));
        });

        return checkForEmptyString(sequenceString, convertedSequence.toString());
    }

    private static String checkForEmptyString(String string, String sequence){
        return string == null || string.length() == 0 ? "" : sequence;
    }
}
