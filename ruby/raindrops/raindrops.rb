class Raindrops
  VERSION = 1
  def self.convert(n)
    line = ""
    line << 'Pling' if n % 3 == 0
    line << 'Plang' if n % 5 == 0
    line << 'Plong' if n % 7 == 0
    if line.empty? == true
      n.to_s
    else
      line
    end
  end
end
