class Company < ApplicationRecord
    has_many :interns
    has_many :sent_messages, as: :sender, class_name: "Message"
    has_many :received_messages, as: :receiver, class_name: "Message"
end
