import java.util.Arrays;


class Acronym {

    String phrase;

    Acronym(String phrase) {
        this.phrase = phrase.replaceAll("[-]", " ").replaceAll("[^a-zA-Z ]", "");
    }

    String get() {
        String[] splitPhrase =  phrase.split(" ");

        StringBuilder acronym = new StringBuilder();
        Arrays.stream(splitPhrase).forEach(word -> acronym.append(word.charAt(0)));
        return acronym.toString().toUpperCase();
    }

}
