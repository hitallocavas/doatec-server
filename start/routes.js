'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
})

// Authentication Routes
Route.post('/api/auth/register', 'AuthController.register');
Route.post('/api/auth/login', 'AuthController.authenticate');

// User Detail Routes
Route.group(() => {
    Route.resource('/api/users', 'UserDetailController')
        .apiOnly()
        .except('update')
}).middleware(['auth']);

// Action Routes
Route.group(() => {
    Route.resource('/api/actions', 'ActionController')
        .apiOnly()
        .except('update')
}).middleware(['auth']);
