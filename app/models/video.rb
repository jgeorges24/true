class Video < ApplicationRecord
    belongs_to :rappers
    has_and_belongs_to_many :camps
end
