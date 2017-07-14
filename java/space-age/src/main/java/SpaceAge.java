class SpaceAge {

    double seconds;

    SpaceAge(double seconds) {
        this.seconds = seconds;
    }

    double getSeconds() {
        return seconds;
    }

    double onEarth() {
        return getSeconds() / 31556791;
    }

    double onMercury() {
        return 4.1518 * onEarth();
    }

    double onVenus() {
        return 1.62458 * onEarth();
    }

    double onMars() {
        return 0.53162 * onEarth();
    }

    double onJupiter() {
        return 0.08432 * onEarth();
    }

    double onSaturn() {
        return 0.03397 * onEarth();
    }

    double onUranus() {
        return 0.01189 * onEarth();
    }

    double onNeptune() {
        return 0.006073 * onEarth();
    }

}
