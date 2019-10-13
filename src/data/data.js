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
    if (~CONFIG.EXCLUDE.indexOf(point.sac_id)) return;
    entryLookup.add(key);
    deduped.push(point);
  });

  deduped.forEach((point, i) => {
    // change geolocation to numeric
    point.geolocation = {
      ...point.geolocation,
      latitude: parseFloat(point.geolocation.latitude),
      longitude: parseFloat(point.geolocation.longitude)
    };

    // add full artist name or unknown
    const fullArtist = `${point.artist_first_name ||
      ""} ${point.artist_last_name || ""}`.trim();
    if (fullArtist) {
      point.fullArtist = fullArtist;
    } else {
      point.fullArtist = "Unknown";
    }

    // get guaranteed address or lat/lng location
    if (point.address) {
      point.safeAddress = point.address.trim();
    } else {
      point.safeAddress = `${point.latitude}, ${point.longitude}`;
    }

    point.description = point.description || "";

    // strip quotes from description
    if (point.description.substr(0, 1) === "'") {
      point.description = point.description.substr(1);
    }
    if (point.description.substr(-1, 1) === "'") {
      point.description = point.description.substr(
        0,
        point.description.length - 1
      );
    }

    if (point.classification === "2-Dimensional" && point.media && point.media.toLowerCase().indexOf("concrete")) {
      point.extra = "mural"
    }

    // make searching key
    point.searchKey = [
      point.fullArtist,
      point.title,
      point.classification,
      point.location,
      point.description,
      point.media,
      point.extra
    ].filter(Boolean).join('$').toLowerCase()

    // add unique key for item
    point.key = i;
  });

  return deduped;
})();

export default data;
