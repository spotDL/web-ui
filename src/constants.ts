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

export enum LocalKeys {
  CLIENT_ID = 'CLIENT_ID',
  THEME = 'theme'
}
