class Bob

  def hey(remark)
    if remark.upcase == remark 
      "Whoa, chill out!"
    elsif remark.end_with?("?")
      "Sure."
    elsif remark.gsub(" ","").empty? || remark.strip.empty?
      "Fine. Be that way!"
    else
      "Whatever."
    end
  end

  def letter_check(remark)
    letter_count = remark.chars & [*'a'..'z',*'A'..'Z']
    letter_count.empty?
  end
end
