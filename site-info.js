const SITE = {
  name: "Dimatis",
  src_domain: "dimatis.yizack.com",
  domain: "yizack.com",
  protocol: "https",
  meta_description: "Dimatis is a Panamanian musician and producer.",
  description: "Panamanian musician and producer",
  keywords: "dimatis, website, producer, dj, artist, panama, yizack, musician",
  socials: {
    spotify: "https://open.spotify.com/artist/0RAT9Q5WZwzJRJgTI38zJR",
    soundcloud: "https://soundcloud.com/dimatis",
    youtube: "https://youtube.com/dimatis",
    twitter: "https://twitter.com/dimatismusic",
    facebook: "https://facebook.com/dimatismusic",
    instagram: "https://instagram.com/dimatismusic",
    musicbrainz: "https://musicbrainz.org/artist/507c89e0-5a06-4466-bef0-0ae22dd90945"
  },
  fanlinks: "https://yizack.com/fanlinks"
};

SITE.url = `${SITE.protocol}://${SITE.domain}`;
SITE.src_url = `${SITE.protocol}://${SITE.src_domain}`;

export { SITE };
