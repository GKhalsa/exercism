class Pangram
  def self.is_pangram?(str)
    string = str.gsub(/[^a-zA-Z]/, '').chars.uniq
    return string.length == 26
  end
end

module BookKeeping
  VERSION = 2
end
