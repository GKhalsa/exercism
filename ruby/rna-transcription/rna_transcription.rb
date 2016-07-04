require 'pry'
class Complement
  VERSION = 3

  def self.of_dna(dna)
    dna.chars.map do |i|
      raise ArgumentError unless ['G', 'C', 'T', 'A'].include?i
      end
      dna.tr('GCTA', 'CGAU')
    end
  end
