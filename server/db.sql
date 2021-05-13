create database CRUDAPP;

create table CRUDAPP.movie_review (
    id int not null auto_increment,
    movieName varchar(255) not null,
    movieReview text(50) not null,
    primary key (id)
);