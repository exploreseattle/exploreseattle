import soda from "soda-js";
import CONFIG from "../config/data.json";

const consumer = new soda.Consumer(CONFIG.PROVIDER);

export function run(query) {
  return new Promise((res, rej) => {
    query.getRows()
      .on('success', res)
      .on('error', rej)
  })
}

export function query() {
  return consumer.query().withDataset(CONFIG.DATASETS.PUBLIC_ART)
}
