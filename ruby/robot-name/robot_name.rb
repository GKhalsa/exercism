class Robot
 attr_reader :name

  def initialize
    generate
  end

  def generate
    pre = [*'A'..'Z'].sample(2).join
    suff = rand(100..999).to_s
    @name = pre + suff
  end

  def reset
    generate
  end

end

# class Robot
#   attr_reader :name
#
#   def initialize
#     set_name
#   end
#
#   def set_name
#     @name = (0...2).map { (65 + rand(26)).chr }.join + (rand 100..999).to_s
#   end
#
#   def reset
#     set_name
#   end
#
# end


also, what is ||=
example def name
          @name ||= generate_name
        end
