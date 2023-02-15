import { PageProps } from "$fresh/server.ts";

import TableOfContents from '../../islands/table-of-contents.tsx';
import { ContentContainer } from '../../components/content-container.tsx';
import { ActionBar } from '../../components/action-bar.tsx';

export default function Home(props: PageProps) {
    return (
        <div class='flex flex-col'>

            {/*
            <div>
                <div class="m-6 p-2">1 {JSON.stringify(props.data)}</div>
                <div class="m-6 p-2">2 {JSON.stringify(props.params)}</div>
                <div class="m-6 p-2">3 {props.route}</div>
                <div class="m-6 p-2">4 {JSON.stringify(props.url)}</div>
                <div class="m-6 p-2">5 {JSON.stringify(props.url.search)}</div>
                <div class="m-6 p-2">6 {JSON.stringify(props.url.searchParams)}</div>
                <div class="m-6 p-2">7 {JSON.stringify(props.url.hash)}</div>
                <div class="m-6 p-2">8 {JSON.stringify(props.url.host)}</div>
                <div class="m-6 p-2">9 {JSON.stringify(props.url.hostname)}</div>
                <div class="m-6 p-2">10 {JSON.stringify(props.url.href)}</div>
                <div class="m-6 p-2">11 {JSON.stringify(props.url.origin)}</div>
                <div class="m-6 p-2">12 {JSON.stringify(props.url.password)}</div>
                <div class="m-6 p-2">13 {JSON.stringify(props.url.pathname)}</div>
                <div class="m-6 p-2">14 {JSON.stringify(props.url.port)}</div>
                <div class="m-6 p-2">15 {JSON.stringify(props.url.protocol)}</div>
                <div class="m-6 p-2">16 {JSON.stringify(props.url.username)}</div>
                <div class="m-6 p-2">17 {JSON.stringify(props.url.toString)}</div>
                <div class="m-6 p-2">18 {JSON.stringify(props.url.toJSON)}</div>
            </div>
            */}

            {props.params.index}

            <ContentContainer></ContentContainer>
            {/*
            <div>
                <ActionBar></ActionBar>
            </div>
            */}
        </div>
    );
}
