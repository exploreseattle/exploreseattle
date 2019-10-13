import soda from "soda-js";
import CONFIG from "../config/data.json";

const consumer = new soda.Consumer(CONFIG.PROVIDER);

const data = (async function() {
  const raw = await new Promise((res, rej) => {
    consumer
      .query()
      .withDataset(CONFIG.DATASETS.PUBLIC_ART)
      .getRows()
      .on("success", res)
      .on("error", rej);
  });

  // remove duplicates
  const deduped = [];
  const entryLookup = new Set();
  raw.forEach(point => {
    const key =
      point.latitude + point.longitude + point.artist_last_name + point.sac_id;
    if (entryLookup.has(key)) return;
    entryLookup.add(key);
    deduped.push(point);
  });

  // change geolocation to numeric and add unique key
  deduped.forEach((point, i) => {
    point.geolocation = {
      ...point.geolocation,
      latitude: parseFloat(point.geolocation.latitude),
      longitude: parseFloat(point.geolocation.longitude)
    };

    point.key = i;
  });

  return deduped;
})();

export default data;
