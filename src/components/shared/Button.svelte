<script>
  export let danger = false
  export let small = false
</script>

<button
  class="rounded p-4 font-semibold w-full bg-blue-500 hover:bg-blue-600 text-white"
  class:bg-red-500={danger}
  class:hover:bg-red-600={danger}
  class:py-2={small}
  on:click
>
  <slot />
</button>
