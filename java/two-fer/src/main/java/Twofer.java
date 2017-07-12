public class Twofer {
    public String twofer(String name) {
        return "One for " + injectName(name) + ", one for me.";
    }

    private String injectName(String name){
        return name == null ? "you" : name;
    }
}