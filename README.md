# Stopeczema Diary App

The application constists of 2 subprojects:
* stopeczema-diary-api – API written in Java
* stopeczema-diary-front – front-end part that uses React and [Material UI Next](https://material-ui-next.com) for rendering data

## Setting up dev environment

### Run a Postgres instance with Docker:

* Install Docker if you don't have it.
* Run this command to create and start a container:
    ```
    docker run --name stopeczema-psql -p 5432:5432 -e POSTGRES_DB=stopeczema -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=12345 -d postgres
    ```
  Where:
  * `--name` means the Docker containter name,
  * `-p` is used to forward Postgres ports outside the container,
  * `-d` tells us what Docker image to use
  * `-e` sets an environment variable inside the container (POSTGRES_DB, POSTGRES_USER and POSTGRES_PASSWORD must be the same as in the `application.properties` of the back-end part)

* The container is now installed and can be stopped and started with the following commands:

  * `docker stop stopeczema-psql`
  * `docker start stopeczema-psql`

### Inslall Lombok for your Java IDE

  Here are the guides for [Ecliplse](https://projectlombok.org/setup/eclipse) and [IDEA](https://projectlombok.org/setup/intellij).

## Running the application

### Running back-end

  * From your favorite IDE: simply run `clean` and `build` Gradle tasks, then run `StopeczemaDiaryApiApplication` class.
  * From the command line: navigate to the `stopeczema-diary-api` directory, run `./gradlew bootRun`

### Running front-end

  * Navigate to the `stopeczema-diary-front` directory
  * `npm install`
  * `npm start`