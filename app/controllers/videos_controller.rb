class VideosController < ApplicationController

    def index

        videos = Video.all
        render json:.to_json(:include => :rapper)


    end




end
