import { HandlerContext, PageProps } from '$fresh/server.ts';

import TableOfContents from '../../islands/table-of-contents.tsx';
import { ActionBar } from '../../components/action-bar.tsx';
import { ContentContainer } from '../../components/content-container.tsx';

import { Element, getElementAndContentID } from '../../utils/element.ts';

export function handler(request: Request, context: HandlerContext) {
    const contentPath = context.params.index;

    const elementAndContentID = getElementAndContentID(contentPath);
    if (elementAndContentID) {
        return context.render({
            element: elementAndContentID.element,
            contentID: elementAndContentID.contentID,
        });
    } else {
        return context.renderNotFound();
    }
}

export default function Home(props: PageProps) {
    const { element, contentID } = props.data;

    let mainElement = <></>;
    if (Element.TABLE_OF_CONTENTS === element) {
        mainElement = <TableOfContents></TableOfContents>;
    } else if (Element.CONTENT === element) {
        mainElement = <ContentContainer contentID={contentID}></ContentContainer>;
    }

    return (
        <div class='flex flex-col'>
            {mainElement}
            {
                /*
            <div>
                <ActionBar></ActionBar>
            </div>
            */
            }
        </div>
    );
}
