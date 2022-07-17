<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let tabs
  export let activeTab
</script>

<div class="mb-10">
  <ul class="flex space-x-5 justify-center">
    {#each tabs as tab (tab)}
      <li
        class="text-gray-500 font-semibold cursor-pointer"
        class:active={tab === activeTab}
        on:click={() => dispatch('tabChange', tab)}
      >
        {tab}
      </li>
    {/each}
  </ul>
</div>

<style>
  .active {
    @apply text-blue-500;
  }
</style>
