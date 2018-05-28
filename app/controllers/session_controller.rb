class SessionController < ApplicationController
  def login
  end

  def new
    @user = User.new 
  end

  def create
  end

  def logout
  end

  def destroy
  end
end
