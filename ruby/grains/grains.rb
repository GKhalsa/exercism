class Grains

  def self.square(num)
    generate_squares(num).last
  end

  def self.total
    generate_squares(64).reduce(:+)
  end

  def self.generate_squares(num)
    count = []
    num.times do
      if count.empty?
        count << 1
      else
        count << count.last + count.last
      end
    end
    count
  end

end
