<script lang="ts">
    export let title: string
    export let description: string | null
    export let url: string
</script>

<div class="bg-black rounded-2xl p-10">
    <h1 class="text-xl">{title}</h1>
    <p class="text-md text-gray-400 pb-5">{description ? description : ''}</p>
    <a class="bg-gray-600 hover:bg-gray-400 p-3 w-full rounded-2xl" href={url} target="_blank">View Project</a>
</div>