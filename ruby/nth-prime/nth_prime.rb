class Prime

  def self.nth(num)
    raise ArgumentError if num == 0

    prime_numbers = []
    current_num = 2

    until prime_numbers.length == num
      prime_numbers << current_num if self.is_prime?(prime_numbers, current_num)
      current_num += 1
    end
    prime_numbers.last
  end

  def self.is_prime?(prime_numbers, num)
    !prime_numbers.any? {|check_num| num % check_num == 0 }
  end
end
