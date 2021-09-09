class RappersController < ApplicationController

    def index
        rappers = Rapper.all
        render json:    rappers.to_json(:include => :videos)
    end



end
