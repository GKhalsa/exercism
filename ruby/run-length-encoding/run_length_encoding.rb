require 'pry'
class RunLengthEncoding

  def self.encode(input)
    grouped = input.chars.chunk{|letter| letter}
    encoded = grouped.map{|type, type_array| [type_array.count, type]}.flatten
    encoded.delete(1)
    encoded.join
  end

  def self.decode(input)
    input_array = input.chars
    output = []
    input_array.each_with_index do |char, index|
      num = char.to_i
      if num > 0 && input_array[index + 1].to_i > 0
        output << input_array[index + 2] * (input_array[index..(index+1)]).join.to_i
        input_array.delete_at(index)
      elsif num > 0
        output << input_array[index + 1] * num
      elsif num == 0 && (index == 0 || input_array[index - 1].to_i == 0)
        output << char
      end
    end
    output.join
  end

end

module BookKeeping
  VERSION = 2
end
