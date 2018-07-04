class SessionController < ApplicationController
  skip_before_action :require_login, only: ['new', 'create']

  def new
    if session['user_id']
      redirect_to '/people'
    end
  end

  def create
    if user = User.find_by_name(name_param).try(:authenticate, password_param )
      session[:user_id] = user.id
      redirect_to '/people', notice: "Welcome #{user.name} "
    else
      redirect_to new_session_path, notice: "Invalid Login Input"
    end
  end


  def destroy
    session.delete 'user_id'
    redirect_to new_session_path
  end

  private 

  def name_param
    params.permit(:name)['name']
  end

  def password_param
    params.permit(:password )['password']
  end

  

end
