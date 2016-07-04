class Gigasecond
  VERSION = 1
  Gigasecond = 10**9

  def self.from(date)
    date + Gigasecond
  end
end
