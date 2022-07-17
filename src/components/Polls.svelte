<script>
  import { fade, scale } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import polls from '../stores/polls'
  import Poll from './Poll.svelte'
</script>

<div class="grid grid-cols-2 gap-5">
  {#each $polls as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <Poll {...poll} />
    </div>
  {:else}
    <div class="col-span-2 text-center">Aucun sondage</div>
  {/each}
</div>
