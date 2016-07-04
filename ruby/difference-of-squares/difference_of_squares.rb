class Squares
  VERSION = 1

  def initialize(num)
    @num = (0..num)
  end

  def square_of_sums
    total = @num.reduce(0) do |sum, num|
      sum + num
    end
    total ** 2
  end

  def sum_of_squares
    total = @num.reduce(0) do |sum, num|
      sum + num ** 2
    end
  end

  def difference
    square_of_sums - sum_of_squares
  end
end
