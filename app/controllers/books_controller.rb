class BooksController < ApplicationController
  def index
    @book = Book.get_random
    render json: @book
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.create(book_params)
    render json: @book
  end

  def show
    set_book
    render json: @book
  end

  def all
    @books = Book.all
    render json: @books
  end

  private 
  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:author, :title, :genre, :img_link, :amazon_link, :text)
  end
end 