class VideosController < ApplicationController

    def index

        videos = Video.all
        render json: videos.to_json(:include => :rapper)


    end

    #create those routes to account 
    def create 

        video = Video.new
        render json: videos.to_json(:include => :rapper)

    end



    private



end
