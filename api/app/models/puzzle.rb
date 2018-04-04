class Puzzle < ApplicationRecord
    validates :name, uniqueness: true
    validates :pieces, presence: true, numericality: { only_integer: true }

    belongs_to :user
    has_many :puzzle_tags
    has_many :tags, through: :puzzle_tags
    has_many :reviews

    def change_owner(owner_id)
        prev_owner_id = self.user.id
        self.previous_owners.push(prev_owner_id)
        new_owner = User.find(owner_id)
        self.user = new_owner
        self.save
    end
end
