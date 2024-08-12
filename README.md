<div align="center">

  <h1 align="center">Quick-Journey</h1>

  Plan your dream journey
quick and with AI

<br/>
☑ Preview
<br/>
<a href="https://quick-journey-k4g8u7vw7-ayshenms-projects.vercel.app"><strong> 📺 Live</strong></a>

![quickJourney](./src/assets/quick.png "quicks")
  

</div>

<br />
<div align="center">

![html](https://img.shields.io/badge/html-yellow?logo=html5)
![css](https://img.shields.io/badge/css-blue?logo=css3)
![Javascript](https://img.shields.io/badge/JavaScript-darkgreen?logo=javascript)
![react](https://cdn.prod.website-files.com/61b9e37d1106b57eaa076efd/629df2647290ef3b75d74f2c_a2bc81309136b0c1864f582b1af95307_546c60cadefd5c0f5e78014543c554cb.png)
![typescript](https://miro.medium.com/v2/resize:fit:1358/1*moJeTvW97yShLB7URRj5Kg.png)
![tailwind](https://www.google.com/url?sa=i&url=https%3A%2F%2Flaravel-news.com%2Ftailwind-css-v3-alpha&psig=AOvVaw0oMEls2K29mHFWlmgDbcYZ&ust=1723580340575000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKC5_5Cg8IcDFQAAAAAdAAAAABAJ)
![node](https://img.shields.io/badge/Node.js-lightblue?logo=node.js)

</div>

<br>

### ☑ Contact

If you want to contact me, you can reach me over  [Linkedin](https://www.linkedin.com/in/ayshen-mirzayeva-462077167/)

<br>



<br>

### ☑ Creators

The project got prepared by collaborative actions of [Aishan](https://github.com/ayshenm)

<br>

# <div align="center">
  
#   ![GitHub repo size](https://img.shields.io/github/repo-size/salahlisahil/dentello)
#   ![GitHub stars](https://img.shields.io/github/stars/salahlisahil/dentello?style=social)
#   ![GitHub forks](https://img.shields.io/github/forks/salahlisahil/dentello?style=social)
# [![Twitter Follow](https://img.shields.io/twitter/follow/salahlisahil_?style=social)](https://twitter.com/sahil_salahli)
#   [![YouTube Video Views](https://img.shields.io/youtube/views/xwXGdpRuSiQ?style=social)](https://youtube.com)
#   ![GitHub repo file count (file type)](https://img.shields.io/github/directory-file-count/salahlisahil/dentello)

# </div>


This project is built using Node.js and serves a web application via an Nginx server.

## Prerequisites

- Docker
- Docker Compose

## Deployment

Follow the steps below to build and deploy the application using Docker and Docker Compose.

### Step 1: Build the Docker Image

First, build the Docker image by running the following command:

```sh
docker build -t quick-journey .
```

### Step 2: Start the Services

Next, use Docker Compose to start the services defined in the docker-compose.yml file:

```sh
docker-compose up -d
```

- The -d flag runs the containers in detached mode.

> alternative
>
> docker-compose up --build -d

## Accessing the Application

Once the services are up and running, you can access the application in your web browser at [http://localhost:3010](http://localhost:3010).

## Configuration

- **Nginx Configuration**: Ensure that the `nginx.conf` file is located in the root of your project directory and is correctly configured for your application.
- **Ports**: The application is set to run on port 3010 of your host machine, mapped to port 80 of the Nginx container.

## Stopping the Services

To stop the services, run:

```sh
docker-compose down
```




