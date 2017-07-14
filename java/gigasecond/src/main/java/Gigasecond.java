import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.OffsetTime;

class Gigasecond {
    LocalDate birthDate;
    LocalTime localTime = LocalTime.of(0,0);
    LocalDateTime birthDateTime;

    Gigasecond(LocalDate birthDate) {
        this.birthDate = birthDate;
        birthDateTime = LocalDateTime.of(birthDate, localTime);

    }

    Gigasecond(LocalDateTime birthDateTime) {
        this.birthDateTime = birthDateTime;
    }

    LocalDateTime getDate() {
        return birthDateTime.plusSeconds(1000000000);
    }

}
