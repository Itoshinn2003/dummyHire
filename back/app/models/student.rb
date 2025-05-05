class Student < ApplicationRecord

    validates :user_name, presence: true
    validates :university_name, presence: true
    validates :department, presence: true
    validates :grade, presence: true
    validates :desired_job, presence: true
    validates :user_id, presence: true, uniqueness: { message: 'はすでに使用されています。' }
    validates :password, presence: true, length: { in: 8..20 }
end
