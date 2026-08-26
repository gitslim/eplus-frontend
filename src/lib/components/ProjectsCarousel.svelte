<script>
    import { onMount } from "svelte";
    import Carousel from "$lib/components/Carousel.svelte";
    import Icon from "fa-svelte";
    import {
        faChevronCircleLeft,
        faChevronCircleRight,
    } from "@fortawesome/free-solid-svg-icons";
    import LazyImage from "svelte-lazy-image";
    import Link from "./Link.svelte";
    import { t } from "svelte-i18n";

    export let startIndex = 0;
    let carousel;

    $: items = [
        {
            image: "/images/projects/1.jpg",
            title: $t('projects_carousel.linear_new_title'),
            subtitle: $t('projects_carousel.linear_new_sub'),
            slug: "page/linejnye-obuekty-novoe-stroitelstvo",
        },
        {
            image: "/images/projects/2.jpg",
            title: $t('projects_carousel.linear_rec_title'),
            subtitle: $t('projects_carousel.linear_rec_sub'),
            slug: "page/linejnye-obuekty-rekonstrukciya",
        },
        {
            image: "/images/projects/3.jpg",
            title: $t('projects_carousel.pipelines_title'),
            subtitle: $t('projects_carousel.pipelines_sub'),
            slug: "page/gazoprovody-v-granicah-uchastka-zakazchika",
        },
        {
            image: "/images/projects/4.jpg",
            title: $t('projects_carousel.boilers_title'),
            subtitle: $t('projects_carousel.boilers_sub'),
            slug: "page/kotelnye",
        },
    ];

    $: perPage = {
        800: Math.min(items.length, 1),
        500: Math.min(items.length, 1),
    };

    function enter() {
        carousel.pause();
    }

    function leave() {
        carousel.resume();
    }

    onMount(async () => {});
</script>

<div>
    <Carousel
        bind:this={carousel}
        loop="true"
        on:mouseenter={enter}
        on:mouseleave={leave}
        {perPage}
        {startIndex}
    >
        <span class="control" slot="left-control">
            <Icon class="carousel-button" icon={faChevronCircleLeft} />
        </span>
        {#each items as item}
            <div class="slide-content">
                <div class="columns is-vcentered">
                    <div class="column is-6">
                        <figure class="image">
                            <LazyImage
                                src={item.image}
                                alt={item.title}
                                placeholder="/white-200.png"
                            />
                        </figure>
                    </div>
                    <div class="column has-text-centered">
                        <Link slug={item.slug}>
                            <div class="title">
                                {item.title}
                            </div>
                            <div class="subtitle">
                                {item.subtitle}
                            </div>
                            <button class="button is-primary">{$t('common.read_more')}</button>
                        </Link>
                    </div>
                </div>
            </div>
        {/each}
        <span class="control" slot="right-control">
            <Icon class="carousel-button" icon={faChevronCircleRight} />
        </span>
    </Carousel>
</div>
