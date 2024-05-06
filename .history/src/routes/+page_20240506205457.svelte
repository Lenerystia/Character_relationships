<script lang="ts">
    import { redirect } from '@sveltejs/kit';
import { css } from '/styled-system/css'

    const style = css({
        bg: 'red.300'
    })

</script>

<header className={style}>
    Character Relation
</header>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
