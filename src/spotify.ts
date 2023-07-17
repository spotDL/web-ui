interface SpotifyError {
  error: {
    status: number;
    message: number;
  };
}

interface ExternalUrls {
  spotify: string;
}

interface ImageObject {
  height: number | null;
  url: string;
  width: number | null;
}

interface PagingObject<T> {
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

interface SimplifiedArtistObject {
  external_urls: ExternalUrls;
  id: string;
  name: string;
}

interface SimplifiedTrackObject {
  artists: SimplifiedArtistObject[];
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  id: string;
  name: string;
  track_number: number;
}

interface Track extends SimplifiedTrackObject {
  artists: Artist[];
  album: Album;
}

interface Artist extends SimplifiedArtistObject {
  genres: Array<string>;
  images: Array<ImageObject>;
}

interface Album {
  total_tracks: number;
  id: string;
  images: ImageObject[];
  genres: string[];
  artists: SimplifiedArtistObject[];
  name: string;
  tracks?: PagingObject<SimplifiedTrackObject>;
  external_urls: ExternalUrls;
}

interface PlaylistTrackObject {
  added_at: string | null;
  track: Track;
}

interface Playlist {
  description: string | null;
  external_urls: ExternalUrls;
  id: string;
  images: ImageObject[];
  name: string;
  owner: {
    external_urls: ExternalUrls;
    id: string;
    display_name: string | null;
  };
  tracks: PagingObject<PlaylistTrackObject>;
}

interface SearchResults {
  tracks?: PagingObject<Track>;
  artists?: PagingObject<Artist>;
  albums?: PagingObject<Album>;
  playlists?: PagingObject<Playlist>;
}
