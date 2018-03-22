class PuzzleTag < ApplicationRecord
    belongs_to :puzzle
    belongs_to :tag
end
