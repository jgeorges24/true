class VideosController < ApplicationController

    def index

        videos = Video.all
        render json: videos.to_json(:include => :rapper)


    end




end
