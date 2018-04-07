class PuzzlesController < ApplicationController
    before_action :set_puzzle, only: [:show, :update, :destroy]
    
    def index
        @puzzles = Puzzle.all
        render json: @puzzles, include: :user
    end

    def create
        @puzzle = Puzzle.new(puzzle_params)
        if @puzzle && @puzzle.save
            render json: @puzzle
        else
            raise "Add error handling here!".inspect
        end
    end

    def show
        render json: @puzzle
    end

    def update
        if @puzzle.update(puzzle_params) && @puzzle.errors.empty?
            render json: @puzzle
        else
            raise "Add error handling here!".inspect
        end
    end

    def destroy
        name = @puzzle.name
        @puzzle.delete
    end

    private

    def set_puzzle
        @puzzle = Puzzle.find(params[:id])
    end

    def puzzle_params
        params.require(:puzzle).permit(:id, :name, :pieces, :missing_pieces, :user_id, reviews_attributes: [:user_id, :rating, :comment] , tags_attributes: [:name])
    end
end
