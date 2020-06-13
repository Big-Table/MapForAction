class TweetsController < ApplicationController

    def index 
        tweets = Tweet.all
        render json: tweets
    end 

    def create 
        tweet = Tweet.new(tweet_params)
            if tweet.save
                render json: {status: 'tweet created successfully', tweet: tweet}, status: :created
            else
                render json: { errors: tweet.errors.full_messages }, status: :bad_request
            end
    end 

    private 

    def tweet_params 
        params.require(:tweet).permit(:url)
    end 
end
