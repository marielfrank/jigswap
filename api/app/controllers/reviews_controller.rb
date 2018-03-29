class ReviewsController < ApplicationController
    def index
        if params[:puzzle_id]            
            @reviews = @puzzle.reviews
            render json: @reviews
        else
            raise "Add error handling here!".inspect
        end
    end

    def create
        @review = @puzzle.reviews.build(review_params)
        if @review && @review.save
            render json: @review
        else
            @reviews = @puzzle.reviews
            raise "Add error handling here!".inspect
        end
    end

    def update
        og_user = @review.user
        if @review.update(review_params)
            @review.update(user: og_user)
        else
            raise "Add error handling here!".inspect
        end
    end

    def destroy
        @review.delete
    end

    private

    def set_review
        @review = review.find(params[:id])
    end

    def set_puzzle
        @puzzle = puzzle.find(params[:puzzle_id])
    end

    def review_params
        params.require(:review).permit(:puzzle_id, :user_id, :rating, :comment)
    end
end
