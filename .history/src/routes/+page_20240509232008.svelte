<script lang="ts">
    // @ts-ignore
    import { css } from '/styled-system/css'
    export let data; // data returned by the load function
</script>
<div class={css({
    border: '3px solid #555555',
    boxShadow: '4px 4px 0px #555555',
    borderRadius: '13px',
    padding: 6,
})}>
    <div class={css({
        color: 'red.600',
        fontWeight: 'bold',
        fontSize: '20px'
    })}>
        Character Relation
    </div>
</div>
<div>
    <p>testowy content</p>
</div>

<h1>Czyżby faktycznie działało?</h1>
<p>If you are here, you successfully setup DRIZZLE ORM with SVELTEKIT</p>

<!--{#if data?.result}
    {#each data.result as user}
    <div class="flex">
        <form action="/?/update" method="post">
            <input type="number" name="id" value={user.id} />
            <input type="text" name="content" value={user.fullName} />
            <input type="number" name="phone" value={user.phone} />
        </form>
    </div>
    {/each}
{/if}-->
{#if data?.result}
    <div>
        <table>
            <thead>
                <tr>
                    {#each Object.keys(data.result[0]) as colHead}
                        <th>{colHead}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each Object.values(data.result) as row}
                    <tr>
                        {#each Object.values(row) as cell}
                            <td>{cell}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}
<h2>Chyba zaczynam to rozumieć jako tako.</h2>
<style>
    table, th, td {
		border: 1px solid;
		border-collapse: collapse;
		margin-bottom: 10px;
	}
</style>
