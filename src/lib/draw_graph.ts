
import { onMount } from "svelte";
import { graphviz } from "d3-graphviz";
import { load } from "./+page.server";
// import { css } from '/styled-system/css'

export let data;

onMount(() => {
graphviz("#graph").renderDot("digraph { "+ data.result[0] +"-> b, c }");
});