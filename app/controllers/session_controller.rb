class SessionController < ApplicationController
  def login
  end

  def new

  end

  def create
    if user = User.find_by_name(name_param).try(:authenticate, password_param )
      session[:user_id] = user
      redirect_to '/people', notice: "Welcome #{user.name} "
    else
      redirect_to new_session_path, notice: "Invalid Login Input"
    end
  end

  def logout
  end

  def destroy
  end

  private 
  
  def new_session_params
    params.permit(:name, :password )
  end

  def name_param
    params.permit(:name)['name']
  end

  def password_param
    params.permit(:password )['password']
  end

  

end
