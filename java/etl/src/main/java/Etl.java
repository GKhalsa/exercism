import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Etl {

    public Map<String, Integer> transform(Map<Integer, List<String>> old) {
        Map<String, Integer> transformedMap = new HashMap<String, Integer>();

        old.forEach((k,v) -> {
            v.forEach((letter) -> {
                transformedMap.put(letter.toLowerCase(), k);
            });
        });

        return transformedMap;
    }

}
