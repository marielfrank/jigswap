# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "test1@testing.com", username: "user1", password: "test123")
User.create(email: "test2@testing.com", username: "user2", password: "test123")
User.create(email: "test3@testing.com", username: "user3", password: "test123")
User.create(email: "test4@testing.com", username: "user4", password: "test123")
User.create(email: "test5@testing.com", username: "user5", password: "test123")

Puzzle.create(name: "puzzle1", pieces: 200, missing_pieces: 0, user_id: 1)
Puzzle.create(name: "puzzle2", pieces: 300, missing_pieces: 2, user_id: 1)
Puzzle.create(name: "puzzle3", pieces: 500, missing_pieces: 1, user_id: 1)
Puzzle.create(name: "puzzle4", pieces: 100, missing_pieces: 0, user_id: 2)
Puzzle.create(name: "puzzle5", pieces: 550, missing_pieces: 0, user_id: 3)
Puzzle.create(name: "puzzle6", pieces: 1000, missing_pieces: 1, user_id: 4)
Puzzle.create(name: "puzzle7", pieces: 2000, missing_pieces: 2, user_id: 5)
Puzzle.create(name: "puzzle8", pieces: 750, missing_pieces: 0, user_id: 3)
Puzzle.create(name: "puzzle9", pieces: 1000, missing_pieces: 0, user_id: 2)

Review.create(rating: 3, comment: "Cute puppies", user_id: 1, puzzle_id: 1)
Review.create(rating: 3, comment: "Cute puppies", user_id: 2, puzzle_id: 8)
Review.create(rating: 3, comment: "Cute puppies", user_id: 4, puzzle_id: 5)
Review.create(rating: 3, comment: "Cute puppies", user_id: 2, puzzle_id: 3)