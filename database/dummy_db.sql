create table users(
	id int PRIMARY KEY,
	full_name varchar(50),
	email varchar(255)
);

create table repositories(
	id int PRIMARY KEY,
	name varchar(50),
	owner_id int,
	html_url varchar(255),
	language varchar(10),
	description varchar(255),
	FOREIGN KEY (owner_id) REFERENCES users(id)
);

create table catalogs(
	id int PRIMARY KEY,
	name varchar(255),
	owner_id int,
	repo_id int,
	FOREIGN KEY (owner_id) REFERENCES users(id),
	FOREIGN KEY (repo_id) REFERENCES repositories(id)
);

insert into users(id, full_name, email) values
	(1, "Peter", "peter@mail.com"),
	(2, "John", "john@mail.com"),
	(3, "Jacob", "jacob@mail.com");
INSERT into repositories(id, name, owner_id, html_url, language, description) values
	(1, "sample_repo1" ,1, "https://git.door43.org/Door43-Catalog/sample_repo1", "en", "Sample English content"),
	(2, "sample_repo2" ,2, "https://git.door43.org/Door43-Catalog/sample_repo2", "hi", "Sample Hindi content"),
	(3, "sample_repo3" ,3, "https://git.door43.org/Door43-Catalog/sample_repo3", "ml", "Sample Malayalam content");
insert into catalogs(id, name, owner_id, repo_id) values
	(1, "sample_catalog1", 1, 1),
	(2, "sample_catalog2", 2, 2),
	(3, "sample_catalog3", 3, 3);
	
