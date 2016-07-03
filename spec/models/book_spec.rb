require 'spec_helper'

describe Book do
  before do
    @book = Book.new(title: 'Go Set a Watchman', author: 'Harper Lee', genre: 'fiction')
    @not_valid_book = Book.new(author: 'John Gree')
  end

  it('should not be valid without a title') do 
    expect(@not_valid_book).to_not be_valid
    expect(@book).to be_valid
  end
end
