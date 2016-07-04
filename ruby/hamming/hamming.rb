require'pry'
class Hamming
  #Hamming::VERSION = 1
  VERSION = 1
  def self.compute(strand1,strand2)
    strand1 = strand1.chars
    strand2 = strand2.chars
    if strand1.length != strand2.length
      raise ArgumentError, "Strands must be the same length"
    else
      (0...strand1.length).count do |i|
        strand1[i] != strand2[i]
      end
    end
  end
end
