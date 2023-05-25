const SITE = {
  name: "Dimatis",
  src_domain: "dimatis.yizack.com",
  domain: "yizack.com",
  protocol: "https",
  meta_description: "Dimatis is a Panamanian musician and producer.",
  description: "Panamanian musician and producer",
  keywords: "dimatis, website, producer, dj, artist, panama, yizack, musician",
  background: "https://dimatis.yizack.com/images/banner_bg.jpg",
  useful: {
    playlist: "https://open.spotify.com/playlist/6Qu7co7czjjXwSEuCyCOAD",
    submit: "https://www.submithub.com/blog/dimatis",
    merch: "https://store.streamelements.com/dimatis"
  },
  socials: {
    spotify: "https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR",
    soundcloud: "https://soundcloud.com/dimatis",
    youtube: "https://youtube.com/dimatis",
    twitter: "https://twitter.com/dimatismusic",
    facebook: "https://facebook.com/dimatismusic",
    instagram: "https://instagram.com/dimatismusic",
    musicbrainz: "https://musicbrainz.org/artist/507c89e0-5a06-4466-bef0-0ae22dd90945",
    bandcamp: "https://dimatis.bandcamp.com"
  },
  fanlinks: "https://yizack.com/fanlinks",
  merch: [
    "/images/dimatis-merch-1.jpg",
    "/images/dimatis-merch-2.jpg",
    "/images/dimatis-merch-3.jpg",
    "/images/dimatis-merch-4.jpg",
    "/images/dimatis-merch-5.jpg"
  ],
  stores: {
    spotify: {
      name: "Spotify",
      image: "/images/stores/spotify.png",
      text: "Stream"
    },
    soundcloud: {
      name: "SoundCloud",
      image: "/images/stores/soundcloud.png",
      text: "Stream"
    },
    youtube: {
      name: "YouTube",
      image: "/images/stores/youtube.png",
      text: "Stream"
    },
    apple: {
      name: "Apple Music",
      image: "/images/stores/apple-music.png",
      text: "Stream"
    },
    itunes: {
      name: "iTunes",
      image: "/images/stores/itunes.png",
      text: "Buy"
    },
    bandcamp: {
      name: "Bandcamp",
      image: "/images/stores/bandcamp.png",
      text: "Buy"
    },
    deezer: {
      name: "Deezer",
      image: "/images/stores/deezer.png",
      text: "Stream"
    },
    tidal: {
      name: "Tidal",
      image: "/images/stores/tidal.png",
      text: "Stream"
    },
    yandex: {
      name: "Yandex Music",
      image: "/images/stores/yandex.png",
      text: "Stream"
    },
    amazon: {
      name: "Amazon",
      image: "/images/stores/amazon.png",
      text: "Buy"
    },
    beatport: {
      name: "Beatport",
      image: "/images/stores/beatport.png",
      text: "Buy"
    },
    netease: {
      name: "Netease Cloud Music",
      image: "/images/stores/netease.png",
      text: "Stream"
    },
    tiktok: {
      name: "TikTok",
      image: "/images/stores/tiktok.png",
      text: "Use"
    }
  }
};

SITE.url = `${SITE.protocol}://${SITE.domain}`;
SITE.src_url = `${SITE.protocol}://${SITE.src_domain}`;

export { SITE };
