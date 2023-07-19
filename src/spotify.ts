import type { AxiosError, AxiosInstance, AxiosResponse, AxiosStatic } from 'axios';
import axios from 'axios';
import { createURLFrom } from './lib/utils/url';

export interface SpotifyError {
  error: {
    status: number;
    message: string;
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

export interface PagingObject<T> {
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface SimplifiedArtistObject {
  external_urls: ExternalUrls;
  id: string;
  name: string;
}

export interface SimplifiedTrackObject {
  artists: SimplifiedArtistObject[];
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  id: string;
  name: string;
  track_number: number;
}

export interface SimplifiedPlaylistObject {
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
  tracks: {
    total: number;
  };
}

export interface Playlist extends SimplifiedPlaylistObject {
  tracks: PagingObject<PlaylistTrackObject>;
}

export interface Track extends SimplifiedTrackObject {
  artists: Artist[];
  album: Album;
}

export interface Artist extends SimplifiedArtistObject {
  genres: Array<string>;
  images: Array<ImageObject>;
}

export interface Album {
  total_tracks: number;
  id: string;
  images: ImageObject[];
  genres: string[];
  artists: SimplifiedArtistObject[];
  name: string;
  tracks?: PagingObject<SimplifiedTrackObject>;
  external_urls: ExternalUrls;
}

export interface PlaylistTrackObject {
  added_at: string | null;
  track: Track;
}

export interface SearchResults {
  tracks?: PagingObject<Track>;
  artists?: PagingObject<Artist>;
  albums?: PagingObject<Album>;
  playlists?: PagingObject<Playlist>;
}

export interface CategoryItem {
  id: string;
  icons: [
    {
      height: number | null;
      width: number | null;
      url: string;
    }
  ];
  name: string;
}

export interface Category {
  categories: PagingObject<CategoryItem>;
}

export interface CategoryPlaylist {
  playlists: PagingObject<SimplifiedPlaylistObject>;
}

class SpotifyApi {
  protected api: AxiosInstance;

  constructor() {
    this.api = <AxiosStatic>axios.create({
      baseURL: 'https://api.spotify.com/v1'
    });
  }

  search = async (q: string, access_token: string): Promise<AxiosResponse<SearchResults, any>> =>
    await this.api.get(
      createURLFrom('/search', { params: { q, type: 'track,artist,album,playlist', limit: '20' } }),
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

  generateAccessToken = async (): Promise<string> =>
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
