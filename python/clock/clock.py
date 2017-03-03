import pdb

class Clock:

    def __init__(self, hour, minutes):
        self.hour = hour
        self.minutes = minutes
        self.total_minutes = self.generate_minutes()

    def generate_minutes(self):
        total_min = 0
        total_min += self.minutes
        total_min += (self.hour * 60)
        total_min = total_min % 1440
        return total_min


    def format_time(self):
        self.hour = (int(self.total_minutes / 60 ) % 24)
        self.minutes = self.total_minutes % 60

    def add(self, minutes):
        self.minutes += minutes
        self.total_minutes = self.generate_minutes()
        return self

    def __eq__(clock1, clock2):
        if clock1.total_minutes == clock2.total_minutes:
            return True
        else:
            return False

    def __str__(self):
        self.format_time()
        return "{:02d}:{:02d}".format(self.hour, self.minutes)
