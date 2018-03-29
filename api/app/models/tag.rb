class Tag < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :puzzle_tags
    has_many :puzzles, through: :puzzle_tags
end
