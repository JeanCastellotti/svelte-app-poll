<script>
  import Tabs from './components/shared/Tabs.svelte'
  import CreatePollForm from './components/CreatePollForm.svelte'
  import Polls from './components/Polls.svelte'

  let tabs = ['Liste des sondages', 'Ajouter un sondage']
  let activeTab = 'Liste des sondages'

  function tabChange(e) {
    activeTab = e.detail
  }

  function addPoll() {
    activeTab = 'Liste des sondages'
  }
</script>

<main class="h-screen p-5 bg-gray-50">
  <div class="max-w-screen-lg w-full m-auto">
    <Tabs {tabs} {activeTab} on:tabChange={tabChange} />
    {#if activeTab === 'Liste des sondages'}
      <Polls />
    {:else if activeTab === 'Ajouter un sondage'}
      <CreatePollForm on:addPoll={addPoll} />
    {/if}
  </div>
</main>
