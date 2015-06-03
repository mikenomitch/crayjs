class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def users
    active_users = (1..10).to_a.sample.times.map{
      {
        name: fake_names.sample,
        status: ["active","idle","away","offline"].sample
      }
    }
    render json: active_users
  end

  def fake_names
    %w(
      Adela
      Jean
      Nikki
      Eric
      Cyril
      Tisha
      Marie
      Alan
      Sandy
      Augustine
      Kitty
      Erma
      Kristie
      Lenny
      Phoebe
      Gordon
      Danial
      Johanna
      Angelina
      Garth
      Monty
      Rupert
      Laurence
      Margo
      Nettie
      Rafael
      Trinidad
      Kip
      Forrest
      Normand
      Blaine
      Dianne
      )
  end
  private :fake_names
end
