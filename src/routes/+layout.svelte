<script lang="ts">
	import '../app.css'

	import Particles from 'svelte-particles'
    import { loadStarsPreset } from 'tsparticles-preset-stars'


	let particlesOptions = {
		preset: 'stars'
	}

	let particlesInit = async (engine: any) => {
		await loadStarsPreset(engine)
	}
</script>

<Particles
        id="tsparticles"
        options={particlesOptions}
        particlesInit={particlesInit}
/>

<main class="flex flex-col justify-center items-center justify-items-center p-10 text-white h-screen">
    <div class="backdrop-blur-md bg-gray-700/30 p-10 max-w-6xl rounded-2xl">
        <slot />
    </div>
</main>
