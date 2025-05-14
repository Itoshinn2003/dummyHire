class Intern < ApplicationRecord
  belongs_to :company


  def self.ransackable_attributes(auth_object = nil)
    ["job", "salary", "location"]
  end
end
