class Fixnum
  VERSION = 1

  def to_roman
    num = self
    numeral = ''
    roman_mapping.each do |arabic, roman|
      while num >= arabic
        numeral << roman
        num -= arabic
      end
    end
    numeral
  end

  def roman_mapping
    { 1000 => 'M',
      900 => 'CM',
      500 => 'D',
      400 => 'CD',
      100 => 'C',
      90 => 'XC',
      50 => 'L',
      40 => 'XL',
      10 => 'X',
      9 => 'IX',
      5 => 'V',
      4 => 'IV',
      1 => 'I'
    }
  end
end
