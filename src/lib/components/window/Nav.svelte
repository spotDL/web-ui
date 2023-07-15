<script lang="ts">
  import { GitHubIcon, DiscordIcon, PaintIcon, QueueIcon } from '$lib/components/icons';
  import { REPO_LINK, DISCORD_LINK } from '@app/constants';
  import ThemeChanger from './decors/ThemeChanger.svelte';
</script>

<div class="sticky z-10 top-0 bg-base-100 navbar px-2">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-2xl" href="/">
      <div class="flex-none">
        <img src="app_icon.svg" alt="app_icon" width="28" height="28" />
      </div>
      <div class="max-md:hidden">spot<span class="text-[#16cd57]">DL</span></div>
    </a>
  </div>
  <div class="flex-none space-x-4">
    <ThemeChanger />
    <label for="main" class="btn btn-ghost btn-square">
      <QueueIcon class="w-6 h-6" />
    </label>
    <div class="divider divider-horizontal h-4 my-auto max-md:hidden" />
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-ghost btn-square max-md:hidden"
      href={DISCORD_LINK}>
      <DiscordIcon class="w-5 h-5" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-primary max-md:btn-square normal-case"
      href={REPO_LINK}>
      <GitHubIcon class="w-5 h-5" />
      <span class="max-md:hidden">Star on GitHub</span>
    </a>
  </div>
</div>
