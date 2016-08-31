class Phrase
  attr_reader :word_string

  def initialize(word_string)
    @word_string = sanitize_string(word_string)
  end

  def word_count
    word_count_hash = Hash.new(0)
    word_string.each { |word| word_count_hash[remove_quotes(word)] += 1 }
    word_count_hash
  end

  def sanitize_string(word_string)
    word_string.downcase.gsub(/[^a-z0-9']/, " ").split
  end

  def remove_quotes(word)
    if word[0] == "'" && word[-1] == "'"
      word = word[1..-2]
    end
    word
  end

end
