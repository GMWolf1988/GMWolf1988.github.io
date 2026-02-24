import { getCollection } from 'astro:content';

export async function loadAndFormatCollection(name: any, withDate = true) {
    const collection = await getCollection(name);

    collection.forEach((item: any) => {
        if (withDate) {
            const date = new Date(item.data.pubDate);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const monthZerofilled = (month < 10 ? '0' : '') + month;

            item.relativeURL = `${year}/${monthZerofilled}/${item.id}/`;
        } else {
            item.relativeURL = `${item.id}/`;
        }

        item.absoluteURL = `/${name}/${item.relativeURL}`;
    })

    return collection;
};