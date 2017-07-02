require './lib/fizzbuzz'

describe 'fizzbuzz' do
  it 'returns "fizz" when passed multiple of 3' do
    expect(fizzbuzz(3)).to eq 'fizz'
  end
  it 'returns "buzz" when passed multiple of 5' do
    expect(fizzbuzz(5)).to eq 'buzz'
  end
  it 'returns "fizzbuzz" when passed multiple of 15' do
    expect(fizzbuzz(15)).to eq 'fizzbuzz'
  end
  it 'knows that a number is not a multiple of 3' do
    expect(fizzbuzz(1)).not_to eq 'fizz'
  end
  it 'knows that a number is not a multiple of 5' do
    expect(fizzbuzz(1)).not_to eq 'buzz'
  end
  it 'knows that a number is not a multiple of 15' do
    expect(fizzbuzz(1)).not_to eq 'fizzbuzz'
  end
end
