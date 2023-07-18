import type { AxiosInstance, AxiosStatic } from 'axios';
import axios from 'axios';
import { createURLFrom } from './lib/utils/url';

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

export interface SearchResults {
  tracks?: PagingObject<Track>;
  artists?: PagingObject<Artist>;
  albums?: PagingObject<Album>;
  playlists?: PagingObject<Playlist>;
}

class SpotifyApi {
  protected api: AxiosInstance;

  constructor() {
    this.api = <AxiosStatic>axios.create({
      baseURL: 'https://api.spotify.com/v1'
    });
  }

  search = async (q: string, access_token: string): Promise<SearchResults> => {
    const { data } = await this.api.get(
      createURLFrom('/search', { params: { q, type: 'track,artist,album,playlist' } }),
      { headers: { Authorization: `Bearer ${access_token}` } }
    );
    return data;
  };

  generateAccessToken = async () =>
    (
      await axios.post(
        'https://accounts.spotify.com/api/token',
        { grant_type: 'client_credentials' },
        {
          headers: {
            Authorization: `Basic ${btoa(
              `${import.meta.env.SPOTDL_CLIENT_ID}:${import.meta.env.SPOTDL_CLIENT_SECRET}`
            )}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
    ).data.access_token;
}

export const spotify = new SpotifyApi();
