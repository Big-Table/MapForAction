class IncidentsController < ApplicationController

    def index 
        incidents = Incident.all
        render json: incidents
    end 

    def incidents_tweets
        incident = Incident.find_by(id: params[:id])
        render json: incident, include: [:tweets]
    end

    def create 
        incident = Incident.new(incident_params)
            if incident.save
                render json: {status: 'Incident created successfully', incident: incident}, status: :created
            else
                render json: { errors: incident.errors.full_messages }, status: :bad_request
            end
    end 

    private 

    def incident_params 
        params.require(:incident).permit(:title, :description, :date, :image_url, :lat, :lng, :organization, :petition)
    end 
end
