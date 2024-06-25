export {};

declare global {
  interface Track {
    artists: string;
    title: string;
    genre: string;
    description: string;
    cover: string;
    type: string;
    fanlink: {
      links: Record<MusicStores, string>;
      dark: boolean;
    };
  }

  type Tracks = Record<string, Track>;
}
