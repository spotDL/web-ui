export const REPO_LINK = 'https://github.com/spotDL/spotify-downloader';

export const DISCORD_LINK = 'https://discord.gg/xCa23pwJWY';

enum AudioProvider {
  'YouTube' = 'youtube',
  'YouTube Music' = 'youtube-music',
  'Slider.KZ' = 'slider-kz',
  'SoundCloud' = 'soundcloud',
  'Bandcamp' = 'bandcamp',
  'Piped' = 'piped'
}

enum LyricsProvider {
  'AZLyrics' = 'azlyrics',
  'Musixmatch' = 'musixmatch',
  'Genius' = 'genius',
  'Synced' = 'synced'
}

export enum FileFormat {
  'MPEG Audo Layer 3' = 'mp3',
  'Free Lossless Audio Codec' = 'flac',
  'Vorbis OGG' = 'ogg',
  'Opus' = 'opus',
  'MPEG-4 Audio ' = 'm4a',
  'Waveform' = 'wav'
}

export const Provider = {
  Audio: AudioProvider,
  Lyrics: LyricsProvider
};

export const Bitrate = [
  'auto',
  'disable',
  '8k',
  '16k',
  '24k',
  '32k',
  '40k',
  '48k',
  '64k',
  '80k',
  '96k',
  '112k',
  '128k',
  '160k',
  '192k',
  '224k',
  '256k',
  '320k',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

export enum LocalKeys {
  CLIENT_ID = 'CLIENT_ID',
  THEME = 'theme'
}
