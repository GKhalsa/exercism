import java.util.HashMap;
import java.util.Map;


class Scrabble {

    String word;

    Scrabble(String word) {
        this.word = word.toLowerCase();
    }

    int getScore() {
        Map<String, Integer> scoreMap = generateScoreMap();

        int score = 0;

        for(int i = 0; i < this.word.length(); i++){
            String letter = Character.toString(this.word.charAt(i));
            score += scoreMap.get(letter);
        }

        return score;
    }

    private Map<String,Integer> generateScoreMap(){
        Map<String, Integer> scoreMap = new HashMap<String, Integer>()
        {{
            put("a", 1);
            put("b", 3);
            put("c", 3);
            put("d", 2);
            put("e", 1);
            put("f", 4);
            put("g", 2);
            put("h", 4);
            put("i", 1);
            put("j", 8);
            put("k", 5);
            put("l", 1);
            put("m", 3);
            put("n", 1);
            put("o", 1);
            put("p", 3);
            put("q", 10);
            put("r", 1);
            put("s", 1);
            put("t", 1);
            put("u", 1);
            put("v", 4);
            put("w", 4);
            put("y", 4);
            put("x", 8);
            put("z", 10);
        }};
        return scoreMap;
    }

}
