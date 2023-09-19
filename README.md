# Symphonic Storage README

Symphonic Storage is a full-stack application for keeping track or music-related library records.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [License](#license)

## Introduction

This application was created to provide a database for keeping track of a users's personal library.

## Features

Key features:

- Database integration (MongoDB)
- Front-end using React and Next.js
- API endpoints using FastAPI
- Full CRUD operations

## Requirements

List the software and tools required to run your application. For example:

- Python 
- npm 
- MongoDB 
- Web browser (for running the React front-end)

## Getting Started

Provide instructions for setting up and running your MERN application.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jkworley/library-database-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd library-database-project
   ```

3. Install the dependencies for the server:

   ```bash
   cd server
   pipenv install
   ```

4. Install the dependencies for the client (React):

   ```bash
   cd ../client
   npm install
   ```

### Configuration

Currently, the MongoDB key is not published here. You can connect to your own MongoDB development cluster by creating a .env file and providing your ATLAS_URI and DB_NAME.

### Running the Application

1. Start the server:

   ```bash
   cd ../server
   python -m uvicorn main:app --reload
   ```

2. Start the client:

   ```bash
   cd ../client
   npm run dev
   ```

## Structure

- `server/`: Server-side code (PyMongo)
- `client/`: Client-side code (React & Next.js)
- `public/`: Public assets for the React app
- `models.py`: Database models
- `routes.py`: API routes

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.