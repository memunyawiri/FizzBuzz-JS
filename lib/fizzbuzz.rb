def fizzbuzz(number)
  if number % 3 == 0
    return 'fizz'
  elsif number % 5 == 0
    return 'buzz'
  elsif number % 15 == 0
    return 'fizzbuzz'
  else
    return number
  end
end
