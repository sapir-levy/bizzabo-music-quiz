import {artists, numberOfRounds , numberOfAttempts} from '../constants/consts';

export function getRandomArtists() {
  // const gameArtists = [];
  // for (let i = 0; i < numberOfRounds; i++) {
  //   let artist = artists[Math.floor(Math.random() * artists.length)];
  //
  //   while (gameArtists.includes(artist)) {
  //     artist = artists[Math.floor(Math.random() * artists.length)];
  //   }
  //
  //   gameArtists.push(artist);
  // }

  // return gameArtists;
  return artists;
}

export function getJSONP(url, success) {

  var ud = '_' + +new Date,
    script = document.createElement('script'),
    head = document.getElementsByTagName('head')[0]
      || document.documentElement;

  window[ud] = function(data) {
    head.removeChild(script);
    success && success(data);
  };

  script.src = url.replace('callback=?', 'callback=' + ud);
  head.appendChild(script);
}
