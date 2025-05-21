class Student < ApplicationRecord
    has_many :likes
    has_many :sent_messages, as: :sender, class_name: "Message"
    has_many :received_messages, as: :receiver, class_name: "Message"
    
    
    validates :user_name, presence: true
    validates :university_name, presence: true
    validates :department, presence: true
    validates :grade, presence: true
    validates :desired_job, presence: true
    validates :user_id, presence: true, uniqueness: { message: 'はすでに使用されています。' }
    validates :password, presence: true, length: { in: 8..20 }



    def self.ransackable_attributes(auth_object = nil)
        ["desired_job", "region"]
    end
end
