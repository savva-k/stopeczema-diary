create table users(
	username varchar(100) not null primary key,
	password varchar(100) not null,
	email varchar(150) not null,
	enabled boolean not null
);

create table authorities (
	username varchar(100) not null references users(username),
	authority varchar(50) not null
);
