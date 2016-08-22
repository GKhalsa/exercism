class Sieve
  attr_reader :num

  def initialize(num)
    @num = num
  end

  def primes
    range = [*2..num]

    catch(:stop) do
      range.each do |num|
        original_num = num
        first_count = range.count
        until num > range[-1]
          num += original_num
          range.delete(num)
        end
        second_count = range.count
        throw :stop if first_count == second_count
      end
    end
    range
  end

end
