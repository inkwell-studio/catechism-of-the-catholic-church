import { PageProps } from "$fresh/server.ts";

import TableOfContents from '../../islands/table-of-contents.tsx';
import { ContentContainer } from '../../components/content-container.tsx';
import { ActionBar } from '../../components/action-bar.tsx';

export default function Home(props: PageProps) {

    const contentPath = props.params.index;

    return (
        <div class='flex flex-col'>
            <TableOfContents></TableOfContents>
            <ContentContainer></ContentContainer>
            {/*
            <div>
                <ActionBar></ActionBar>
            </div>
            */}
        </div>
    );
}
