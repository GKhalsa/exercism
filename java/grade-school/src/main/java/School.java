import java.util.*;

public class School {
    Map<Integer, List<String>> roster = new HashMap<>();
    int studentCount = 0;

    public int numberOfStudents() {
        return studentCount;
    }

    public void add(String name, int grade) {
        List<String> classListByGrade = roster.get(grade);
        if (classListByGrade == null) {
            classListByGrade = new ArrayList<>();
        }
        classListByGrade.add(name);
        roster.put(grade, classListByGrade);
        studentCount ++;
    }

    public List<String> grade(int gradeQuerie) {
        if (roster.get(gradeQuerie) == null) {
            return new ArrayList<>();
        }
        return roster.get(gradeQuerie);
    }


    public Map<Integer, List<String>> studentsByGradeAlphabetical() {
        for(Integer grade : roster.keySet()) {
            Collections.sort(roster.get(grade));
        }
        return Collections.unmodifiableMap(roster);
    }
}