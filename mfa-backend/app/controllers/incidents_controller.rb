class IncidentsController < ApplicationController

    def index 
        incidents = Incident.all
        render json: incidents
    end 

    def incidents_tweets
        incident = Incident.find_by(id: params[:id])
        render json: incident, include: [:tweets, :actions]
    end

    def create 
        print incident_params
        incident = Incident.new(incident_params)
            if incident.save
                render json: {status: 'Incident created successfully', incident: incident}, status: :created
            else
                render json: { errors: incident.errors.full_messages }, status: :bad_request
            end
    end 

    def approved 
        print params
        incident = Incident.find_by(id: params[:id])
        incident.update(approve: incident.approve + 1)
       
    end 

    def rejected 
        incident = Incident.find_by(id: params[:id])
        
    end 

    private 

    def incident_params 
        
        params.require(:incident).permit(:title, :description, :date, :image_url, :lat, :lng, :organization, :petition, :approve, :reject, :id)
    end 
end
