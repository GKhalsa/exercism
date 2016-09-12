class Binary
  attr_reader :binary_num_string
  def initialize(binary_num_string)
    @binary_num_string = binary_check(binary_num_string)
  end

  def to_decimal
    number_count = binary_num_string.length
    decimal_value = 0
    binary_num_string.chars.each_with_index do |num, index|
      power_value = number_count - (index + 1)
      decimal_value += num.to_i * (2 ** power_value)
    end
    decimal_value
  end

  def binary_check(binary_num_string)
    check = binary_num_string.chars.all? do |char|
      '10'.include?(char)
    end

    if check
      binary_num_string
    else
      raise ArgumentError
    end
  end

end

module BookKeeping
  VERSION = 2
end
