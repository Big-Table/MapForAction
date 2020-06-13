class Incident < ApplicationRecord
    has_many :actions
    has_many :tweets
end
