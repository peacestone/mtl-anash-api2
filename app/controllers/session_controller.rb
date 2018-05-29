class SessionController < ApplicationController
  def login
  end

  def new

  end

  def create
    if !User.find_by_name(name_param).try(:authenticate, password_param )
      puts password_param
      redirect_to new_session_path
    else
      redirect_to '/people' 
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
