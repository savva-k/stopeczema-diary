create table se_user (
    id serial primary key not null,
    username varchar(100) not null,
    first_name varchar(150) not null,
    last_name varchar(150) not null,
    password varchar(100) not null,
    email varchar(150) not null,
    enabled boolean not null
);

create table se_authority (
    id serial primary key not null,
    user_id integer not null,
    authority varchar(50) not null
);
