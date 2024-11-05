import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
    token: 'MY-API-TOKEN',
});

// Start the Google Maps Scraper Actor and wait for it to finish.
const actorRun = await client.actor('compass/Google-Maps-Reviews-Scraper').call({
    queries: 'apify',
});
// Fetch scraped results from the Actor's dataset.
const { items } = await client.dataset(actorRun.defaultDatasetId).listItems();
console.dir(items);