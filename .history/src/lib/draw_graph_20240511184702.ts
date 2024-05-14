
import { onMount } from "svelte";
import { graphviz } from "d3-graphviz";
// import { css } from '/styled-system/css'
export let data; // data returned by the load function
onMount(() => {
graphviz("#graph").renderDot("digraph { a -> b, c }");
});