import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.mixPusherAppKey,
  cluster: process.env.mixPusherAppCluster,
  encrypted: true,
  authEndpoint: `${process.env.apiURL}/broadcasting/auth`,
  auth: {
    headers: {
      Authorization: window.localStorage.getItem('auth._token.password_grant')
    },
  },
});
