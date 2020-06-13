class ActionsController < ApplicationController

    def index 
        actions = Action.all
        render json: actions
    end 

    def create 
        action = Action.new(action_params)
            if action.save
                render json: {status: 'action created successfully', action: action}, status: :created
            else
                render json: { errors: action.errors.full_messages }, status: :bad_request
            end
    end 

    private 

    def action_params 
        params.require(:action).permit(:title, :action_type, :url)
    end 
end
