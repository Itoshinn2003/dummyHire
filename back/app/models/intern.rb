class Intern < ApplicationRecord
  belongs_to :company
  has_many :likes


  def self.ransackable_attributes(auth_object = nil)
    ["job", "salary", "location"]
  end
end
