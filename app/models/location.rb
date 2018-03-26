class Location < ApplicationRecord
    validates :city, presence: true
    validates :state, presence: true

    has_many :users
    has_many :puzzles, through: :users
end