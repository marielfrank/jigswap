class Puzzle < ApplicationRecord
    validates :name, uniqueness: true
    validates :pieces, presence: true, numericality: true { only_integer: true }

    belongs_to :user
    has_many :puzzle_tags
    has_many :tags, through: :puzzle_tags
    has_many :reviews
    delegate :location, to :user 

    def change_owner(owner_id)
        prev_owner = self.user
        self.previous_owners.push(prev_owner)
        new_owner = User.find(owner_id)
        self.user = new_owner
    end
end
