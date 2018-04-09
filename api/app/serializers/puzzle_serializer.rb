class PuzzleSerializer < ActiveModel::Serializer
  attributes :id, :name, :pieces, :missing_pieces
  belongs_to :user
  has_many :reviews
  has_many :tags
end
