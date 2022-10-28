# React CodeIgniter

React CodeIgniter is an appstarter bundle for fullstack programing javascript and PHP in one place.

## Installation

### Requirement

- Backend
    - PHP 7.4 with basic extensions (such as intl , dom , mbstring and curl)
    - we are recomended to use php from ondrej/php for using our appstarter
- Frontend
    - NodeJS v14 with **Yarn** Package Manager

### Via Composer

1. run `composer create-project baharsah/reactigniter <project-directory>` to install it in your system
2. go to your project directory and run :
    1. `yarn` for downloading node packages
    2. `composer i` for downloading backend components
    3. `yarn run build` for building frontend
    4. `php spark serve` for serving as backend
    5. `yarn run serve` for serving as frontend

## Todo

[] Make Static Routing
[] Create command for managing reactigniter
[] Create command to creating new component
[] Make HTTP Request Debugbar Handler
[] Make Debugbar Handler