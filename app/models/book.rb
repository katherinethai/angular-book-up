class Book < ActiveRecord::Base
  validates :title, presence: true
  validates :text, presence: true

  def self.get_random
    self.all.sample
  end
end
