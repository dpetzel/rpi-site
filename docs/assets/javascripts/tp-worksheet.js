/*
 * Test Point Measurement Worksheet
 * ---------------------------------
 * Client-side, localStorage-backed worksheet for recording per-device
 * test point measurements. No backend, no network. All data stays in the
 * visitor's browser.
 *
 * A worksheet is scoped to a board revision via a data-attribute on its
 * mount point, and supports multiple named "devices" (individual boards)
 * so a technician can track several units of the same revision.
 *
 * Mount point (in the Markdown page):
 *   <div class="tp-worksheet"
 *        data-board="pi4-model-b-rev1.5"
 *        data-title="Pi 4 Model B Rev 1.5">
 *   </div>
 *
 * The set of test points and their reference ("expected") values are
 * defined in TP_DATASETS below, keyed by the data-board value.
 */
(function () {
  "use strict";

  var STORAGE_PREFIX = "rpi-tp:v1:";

  /* --------------------------------------------------------------------
   * Reference datasets. Columns mirror the published reference tables.
   * Values of "" mean the reference table had no published value.
   * ------------------------------------------------------------------ */
  var TP_DATASETS = {
    "pi4-model-b-rev1.5": {
      columns: [
        { key: "powered", label: "Powered", unit: "V" },
        { key: "os_idle", label: "OS Idle", unit: "V" },
        { key: "resistance", label: "Resistance", unit: "Ω" }
      ],
      points: [
        { tp: "TP1", zone: "6", ref: { powered: "5.45v", os_idle: "5.47v", resistance: "OL" } },
        { tp: "TP2", zone: "2", ref: { powered: "5.44v", os_idle: "5.47v", resistance: "OL" } },
        { tp: "TP3", zone: "4", ref: { powered: "5.44v", os_idle: "5.47v", resistance: "OL" } },
        { tp: "TP4", zone: "5", ref: { powered: "0v", os_idle: "3.32v", resistance: "OL" } },
        { tp: "TP5", zone: "5", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "OL" } },
        { tp: "TP6", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "OL" } },
        { tp: "TP7", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP8", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP9", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP10", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "OL" } },
        { tp: "TP11a*", zone: "6", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "76 Ω" } },
        { tp: "TP11b*", zone: "6", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "OL" } },
        { tp: "TP12", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP13", zone: "6", ref: { powered: "1.80v", os_idle: "1.80v", resistance: "OL" } },
        { tp: "TP14", zone: "6", ref: { powered: "1.10v", os_idle: "1.10v", resistance: "90 Ω" } },
        { tp: "TP15", zone: "6", ref: { powered: "1.00v", os_idle: "0.87v", resistance: "44.4 Ω" } },
        { tp: "TP16", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP17", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP18", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "OL" } },
        { tp: "TP19", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "OL" } },
        { tp: "TP20", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP21", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP22", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP23", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP24", zone: "4", ref: { powered: "0.52v", os_idle: "0.52v", resistance: "75 Ω" } },
        { tp: "TP25", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP26", zone: "1", ref: { powered: "3.32v", os_idle: "3.33v", resistance: "OL" } },
        { tp: "TP27", zone: "1", ref: { powered: "3.32v", os_idle: "3.33v", resistance: "OL" } },
        { tp: "TP28", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP29", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP30", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP31", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP32", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP33", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP34", zone: "4", ref: { powered: "1.03v", os_idle: "1.03v", resistance: "53 Ω" } }
      ]
    },
    "pi4-model-b-rev1.1": {
      columns: [
        { key: "powered", label: "Powered", unit: "V" },
        { key: "os_idle", label: "OS Idle", unit: "V" },
        { key: "resistance", label: "Resistance", unit: "Ω" }
      ],
      points: [
        { tp: "TP1", zone: "6", ref: { powered: "5.43v", os_idle: "5.43v", resistance: "1.26K Ω" } },
        { tp: "TP2", zone: "2", ref: { powered: "5.43v", os_idle: "5.43v", resistance: "1.26K Ω" } },
        { tp: "TP3", zone: "4", ref: { powered: "5.43v", os_idle: "5.43v", resistance: "1.25K Ω" } },
        { tp: "TP4", zone: "5", ref: { powered: "0v", os_idle: "3.32v", resistance: "77.8K Ω" } },
        { tp: "TP5", zone: "5", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "3.29K Ω" } },
        { tp: "TP6", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "46.5K Ω" } },
        { tp: "TP7", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP8", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP9", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "0.0 Ω" } },
        { tp: "TP10", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "46.9K Ω" } },
        { tp: "TP11", zone: "6", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "1.49K Ω" } },
        { tp: "TP12", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP13", zone: "6", ref: { powered: "1.80v", os_idle: "1.80v", resistance: "8.9K Ω" } },
        { tp: "TP14", zone: "6", ref: { powered: "1.10v", os_idle: "1.10v", resistance: "9 Ω" } },
        { tp: "TP15", zone: "6", ref: { powered: "1.00v", os_idle: "0.84v", resistance: "34 Ω" } },
        { tp: "TP16", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP17", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "0.0 Ω" } },
        { tp: "TP18", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "46.6K Ω" } },
        { tp: "TP19", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "46.9K Ω" } },
        { tp: "TP20", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP21", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP22", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "" } },
        { tp: "TP23", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "1.8K Ω" } },
        { tp: "TP24", zone: "4", ref: { powered: "0.51v", os_idle: "0.51v", resistance: "75.3 Ω" } },
        { tp: "TP25", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP26", zone: "1", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "20.9M Ω" } },
        { tp: "TP27", zone: "1", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "26.1M Ω" } },
        { tp: "TP28", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP29", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP30", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP31", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP32", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP33", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP34", zone: "4", ref: { powered: "1.04v", os_idle: "1.04v", resistance: "OL" } }
      ]
    },
    "pi5-rev1.1": {
      columns: [
        { key: "powered", label: "Powered", unit: "V" },
        { key: "os_idle", label: "OS Idle", unit: "V" },
        { key: "resistance", label: "Resistance", unit: "Ω" }
      ],
      points: [
        { tp: "TP1", zone: "5", ref: { powered: "3.31v", os_idle: "", resistance: "" } },
        { tp: "TP2", zone: "6", ref: { powered: "3.32v", os_idle: "", resistance: "" } },
        { tp: "TP3", zone: "2", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP4", zone: "6", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP5", zone: "4", ref: { powered: "3.29v", os_idle: "", resistance: "" } },
        { tp: "TP6", zone: "4", ref: { powered: "3.29v", os_idle: "", resistance: "" } },
        { tp: "TP7", zone: "6", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP8", zone: "6", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP9", zone: "5", ref: { powered: "3.32v", os_idle: "", resistance: "" } },
        { tp: "TP10", zone: "2", ref: { powered: "3.32v", os_idle: "", resistance: "" } },
        { tp: "TP11", zone: "6", ref: { powered: "5.03v", os_idle: "", resistance: "" } },
        { tp: "TP12", zone: "6", ref: { powered: "5.03v", os_idle: "", resistance: "" } },
        { tp: "TP13", zone: "5", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP14", zone: "5", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP15", zone: "6", ref: { powered: "0.80v", os_idle: "", resistance: "" } },
        { tp: "TP16", zone: "5", ref: { powered: "2.79v", os_idle: "", resistance: "" } },
        { tp: "TP17", zone: "5", ref: { powered: "3.31v", os_idle: "", resistance: "" } },
        { tp: "TP18", zone: "3", ref: { powered: "1.80v", os_idle: "", resistance: "" } },
        { tp: "TP19", zone: "2", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP20", zone: "5", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP21", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP22", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP23", zone: "2", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP24", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP25", zone: "1", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP26", zone: "4", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP27", zone: "2", ref: { powered: "1.10v", os_idle: "", resistance: "" } },
        { tp: "TP28", zone: "6", ref: { powered: "0.80v", os_idle: "", resistance: "" } },
        { tp: "TP29", zone: "3", ref: { powered: "0.80v", os_idle: "", resistance: "" } },
        { tp: "TP30", zone: "2", ref: { powered: "0.60", os_idle: "", resistance: "" } },
        { tp: "TP31", zone: "2", ref: { powered: "1.10v", os_idle: "", resistance: "" } },
        { tp: "TP32", zone: "6", ref: { powered: "3.72v", os_idle: "", resistance: "" } },
        { tp: "TP33", zone: "3", ref: { powered: "3.31v", os_idle: "", resistance: "" } },
        { tp: "TP34", zone: "2", ref: { powered: "1.81v", os_idle: "", resistance: "" } },
        { tp: "TP35", zone: "5", ref: { powered: "3.31v", os_idle: "", resistance: "" } },
        { tp: "TP36", zone: "5", ref: { powered: "3.28v", os_idle: "", resistance: "" } },
        { tp: "TP37", zone: "6", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP38", zone: "3", ref: { powered: "3.28v", os_idle: "", resistance: "" } },
        { tp: "TP39", zone: "6", ref: { powered: "3.31v", os_idle: "", resistance: "" } },
        { tp: "TP40", zone: "5", ref: { powered: "3.31v", os_idle: "", resistance: "" } },
        { tp: "TP41", zone: "5", ref: { powered: "3.31v", os_idle: "", resistance: "" } },
        { tp: "TP42", zone: "6", ref: { powered: "3.22v", os_idle: "", resistance: "" } },
        { tp: "TP43", zone: "2", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP44", zone: "2", ref: { powered: "2.51v", os_idle: "", resistance: "" } },
        { tp: "TP45", zone: "1", ref: { powered: "1.10v", os_idle: "", resistance: "" } },
        { tp: "TP46", zone: "2", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP47", zone: "5", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP48", zone: "5", ref: { powered: "3.24v", os_idle: "", resistance: "" } },
        { tp: "TP49", zone: "5", ref: { powered: "3.28v", os_idle: "", resistance: "" } },
        { tp: "TP50", zone: "5", ref: { powered: "0.29v", os_idle: "", resistance: "" } },
        { tp: "TP51", zone: "5", ref: { powered: "3.28v", os_idle: "", resistance: "" } },
        { tp: "TP52", zone: "5", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP53", zone: "1", ref: { powered: "3.30v", os_idle: "", resistance: "" } },
        { tp: "TP54", zone: "1", ref: { powered: "0.34", os_idle: "", resistance: "" } },
        { tp: "TP55", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP56", zone: "1", ref: { powered: "3.30", os_idle: "", resistance: "" } },
        { tp: "TP57", zone: "4", ref: { powered: "3.31v", os_idle: "", resistance: "" } },
        { tp: "TP58", zone: "5", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP59", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP60", zone: "1", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP61", zone: "6", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP62", zone: "3", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP63", zone: "6", ref: { powered: "5.03v", os_idle: "", resistance: "" } },
        { tp: "TP64", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP65", zone: "1", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP66", zone: "1", ref: { powered: "3.31v", os_idle: "", resistance: "" } },
        { tp: "TP67", zone: "1", ref: { powered: "5.02v", os_idle: "", resistance: "" } },
        { tp: "TP68", zone: "1", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP69", zone: "1", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP70", zone: "1", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP71", zone: "1", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP72", zone: "1", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP73", zone: "4", ref: { powered: "0v", os_idle: "", resistance: "" } },
        { tp: "TP74", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP75", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP76", zone: "1", ref: { powered: "5.02v", os_idle: "", resistance: "" } }
      ]
    },
    "pi5-rev1.0": {
      columns: [
        { key: "powered", label: "Powered", unit: "V" },
        { key: "os_idle", label: "OS Idle", unit: "V" },
        { key: "resistance", label: "Resistance", unit: "Ω" }
      ],
      points: [
        { tp: "TP1", zone: "5", ref: { powered: "3.32v", os_idle: "3.33v", resistance: "12.8K Ω" } },
        { tp: "TP2", zone: "6", ref: { powered: "3.32v", os_idle: "3.33v", resistance: "0.55M Ω" } },
        { tp: "TP3", zone: "2", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP4", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "4.1M Ω" } },
        { tp: "TP5", zone: "4", ref: { powered: "3.29v", os_idle: "3.33v", resistance: "OL" } },
        { tp: "TP6", zone: "4", ref: { powered: "3.30v", os_idle: "3.33v", resistance: "OL Ω" } },
        { tp: "TP7", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP8", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP9", zone: "5", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "12.3K Ω" } },
        { tp: "TP10", zone: "1", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "62.7K Ω" } },
        { tp: "TP11", zone: "6", ref: { powered: "5.43v", os_idle: "5.20v", resistance: "OL" } },
        { tp: "TP12", zone: "6", ref: { powered: "5.43v", os_idle: "5.20v", resistance: "OL" } },
        { tp: "TP13", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP14", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "0.99K Ω" } },
        { tp: "TP15", zone: "6", ref: { powered: "0.80v", os_idle: "0.80v", resistance: "10.64K Ω" } },
        { tp: "TP16", zone: "5", ref: { powered: "3.46v", os_idle: "3.33v", resistance: "12.9K Ω" } },
        { tp: "TP17", zone: "5", ref: { powered: "3.32v", os_idle: "3.33v", resistance: "12.8K Ω" } },
        { tp: "TP18", zone: "3", ref: { powered: "1.80v", os_idle: "1.80v", resistance: "11.7K Ω" } },
        { tp: "TP19", zone: "2", ref: { powered: "0v", os_idle: "0v", resistance: "1.06M Ω" } },
        { tp: "TP20", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "1.06M Ω" } },
        { tp: "TP21", zone: "6", ref: { powered: "3.32v", os_idle: "3.33v", resistance: "OL" } },
        { tp: "TP22", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP23", zone: "2", ref: { powered: "0v", os_idle: "0v", resistance: "3.91M Ω" } },
        { tp: "TP24", zone: "3", ref: { powered: "0v", os_idle: "3.3v", resistance: "OL Ω" } },
        { tp: "TP25", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "0.4 Ω" } },
        { tp: "TP26", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP27", zone: "1", ref: { powered: "1.10v", os_idle: "1.11v", resistance: "0.9K Ω" } },
        { tp: "TP28", zone: "6", ref: { powered: "0v", os_idle: "0.72v", resistance: "1.7 Ω" } },
        { tp: "TP29", zone: "3", ref: { powered: "0.80v", os_idle: "0.80v", resistance: "118.3 Ω" } },
        { tp: "TP30", zone: "2", ref: { powered: "0.60v", os_idle: "0.60v", resistance: "20.3K Ω" } },
        { tp: "TP31", zone: "2", ref: { powered: "1.11v", os_idle: "1.11v", resistance: "97.3 Ω" } },
        { tp: "TP32", zone: "6", ref: { powered: "3.72v", os_idle: "3.73v", resistance: "23.9K Ω" } },
        { tp: "TP33", zone: "3", ref: { powered: "3.32v", os_idle: "3.33v", resistance: "7.8K Ω" } },
        { tp: "TP34", zone: "2", ref: { powered: "1.81v", os_idle: "1.81", resistance: "10.6K Ω" } },
        { tp: "TP35", zone: "5", ref: { powered: "0v", os_idle: "3.33v", resistance: "1.06M Ω" } },
        { tp: "TP36", zone: "5", ref: { powered: "0v", os_idle: "3.31v", resistance: "1.06M Ω" } },
        { tp: "TP37", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "3.9M Ω" } },
        { tp: "TP38", zone: "3", ref: { powered: "3.30v", os_idle: "0.06v", resistance: "OL" } },
        { tp: "TP39", zone: "6", ref: { powered: "3.32v", os_idle: "3.33v", resistance: "OL" } },
        { tp: "TP40", zone: "5", ref: { powered: "0v", os_idle: "3.32v", resistance: "10.3K Ω" } },
        { tp: "TP41", zone: "5", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "10.3K Ω" } },
        { tp: "TP42", zone: "6", ref: { powered: "3.48v", os_idle: "3.33v", resistance: "12K Ω" } },
        { tp: "TP43", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "0.99K Ω" } },
        { tp: "TP44", zone: "1", ref: { powered: "0v", os_idle: "2.50v", resistance: "18.1K Ω" } },
        { tp: "TP45", zone: "1", ref: { powered: "1.10v", os_idle: "1.10v", resistance: "60.5K Ω" } },
        { tp: "TP46", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP47", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "OL" } },
        { tp: "TP48", zone: "4", ref: { powered: "3.25v", os_idle: "3.26v", resistance: "9.1K Ω" } },
        { tp: "TP49", zone: "4", ref: { powered: "3.30v", os_idle: "3.31v", resistance: "1.06M Ω" } },
        { tp: "TP50", zone: "4", ref: { powered: "0.21v", os_idle: "0.21v", resistance: "1.05M Ω" } },
        { tp: "TP51", zone: "5", ref: { powered: "3.30v", os_idle: "3.31v", resistance: "1.06M Ω" } },
        { tp: "TP52", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "1.05M Ω" } },
        { tp: "TP53", zone: "1", ref: { powered: "3.31v", os_idle: "3.32v", resistance: "OL" } },
        { tp: "TP54", zone: "1", ref: { powered: "0.11v", os_idle: "0.15v", resistance: "OL" } },
        { tp: "TP55", zone: "1", ref: { powered: "3.31v", os_idle: "3.32v", resistance: "OL" } },
        { tp: "TP56", zone: "1", ref: { powered: "0.24v", os_idle: "3.32v", resistance: "OL" } },
        { tp: "TP57", zone: "4", ref: { powered: "3.32v", os_idle: "3.33v", resistance: "0.42M Ω" } },
        { tp: "TP58", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "75.1 Ω" } },
        { tp: "TP59", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP60", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP61", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP62", zone: "3", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP63", zone: "6", ref: { powered: "5.42v", os_idle: "5.19v", resistance: "OL" } },
        { tp: "TP64", zone: "1", ref: { powered: "0.89v", os_idle: "1.01v", resistance: "0.89K Ω" } },
        { tp: "TP65", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "21.9K Ω" } },
        { tp: "TP66", zone: "1", ref: { powered: "0v", os_idle: "3.32v", resistance: "10.3K Ω" } },
        { tp: "TP67", zone: "1", ref: { powered: "5.42v", os_idle: "5.19v", resistance: "19.2K Ω" } },
        { tp: "TP68", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "0.45M Ω" } },
        { tp: "TP69", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "69.8K Ω" } },
        { tp: "TP70", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "0.45M Ω" } },
        { tp: "TP71", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "72.1K Ω" } },
        { tp: "TP72", zone: "2", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP73", zone: "4", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "TP74", zone: "1", ref: { powered: "5.42v", os_idle: "5.29v", resistance: "19.2K Ω" } },
        { tp: "TP75", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "TP76", zone: "1", ref: { powered: "5.42v", os_idle: "5.19v", resistance: "19.1K Ω" } }
      ]
    },
    "pi3-3b-plus-rev1.3": {
      columns: [
        { key: "powered", label: "Powered", unit: "V" },
        { key: "os_idle", label: "OS Idle", unit: "V" },
        { key: "resistance", label: "Resistance", unit: "Ω" }
      ],
      points: [
        { tp: "PP1", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP2", zone: "6", ref: { powered: "5.44v", os_idle: "5.42v", resistance: "5.05K Ω" } },
        { tp: "PP3", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.0 Ω" } },
        { tp: "PP4", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.0 Ω" } },
        { tp: "PP5", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.6 Ω" } },
        { tp: "PP6", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "PP7", zone: "6", ref: { powered: "5.42v", os_idle: "5.42v", resistance: "5.04K Ω" } },
        { tp: "PP8", zone: "6", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "12.6K Ω" } },
        { tp: "PP9", zone: "6", ref: { powered: "1.81v", os_idle: "1.81v", resistance: "13.66K Ω" } },
        { tp: "PP10", zone: "6", ref: { powered: "1.88v", os_idle: "1.86v", resistance: "6.04K Ω" } },
        { tp: "PP11", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP12", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP13", zone: "6", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "13.18M Ω" } },
        { tp: "PP14", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP15", zone: "5", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "20.66K Ω" } },
        { tp: "PP16", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP17", zone: "6", ref: { powered: "5.42v", os_idle: "5.42v", resistance: "OL" } },
        { tp: "PP18", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP19", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP20", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP21", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP22", zone: "4", ref: { powered: "1.70v", os_idle: "1.71v", resistance: "15.30M Ω" } },
        { tp: "PP23", zone: "4", ref: { powered: "1.62v", os_idle: "3.32v", resistance: "0.79M Ω" } },
        { tp: "PP24", zone: "5", ref: { powered: "2.51v", os_idle: "0.91v", resistance: "4.03K Ω" } },
        { tp: "PP25", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "1.80K Ω" } },
        { tp: "PP26", zone: "5", ref: { powered: "0v", os_idle: "0v", resistance: "1.80K Ω" } },
        { tp: "PP27", zone: "1", ref: { powered: "5.4v", os_idle: "5.41v", resistance: "5.61M Ω" } },
        { tp: "PP28", zone: "1", ref: { powered: "0.48v", os_idle: "0.50v", resistance: "179 Ω" } },
        { tp: "PP29", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP30", zone: "6", ref: { powered: "0.06v", os_idle: "0.12v", resistance: "5.36M Ω" } },
        { tp: "PP31", zone: "6", ref: { powered: "3.50v", os_idle: "3.50v", resistance: "3.27K Ω" } },
        { tp: "PP32", zone: "6", ref: { powered: "5.41v", os_idle: "5.40v", resistance: "14.99K Ω" } },
        { tp: "PP33", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP34", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP35", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP36", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP37", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP38", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP39", zone: "5", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "14.75K Ω" } },
        { tp: "PP40", zone: "5", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "14.76K Ω" } },
        { tp: "PP41", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP42", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "8.85M Ω" } },
        { tp: "PP43", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "8.94M Ω" } },
        { tp: "PP44", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "8.90M Ω" } },
        { tp: "PP45", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "8.96M Ω" } },
        { tp: "PP46", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "8.78M Ω" } },
        { tp: "PP47", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "8.88M Ω" } },
        { tp: "PP48", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "PP49", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "PP50", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP51", zone: "1", ref: { powered: "0v", os_idle: "0v", resistance: "0.2 Ω" } },
        { tp: "PP52", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP53", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP54", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP55", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP56", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP57", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP58", zone: "", ref: { powered: "", os_idle: "", resistance: "" } },
        { tp: "PP59", zone: "6", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "14.72K Ω" } },
        { tp: "PP60", zone: "6", ref: { powered: "3.32v", os_idle: "3.32v", resistance: "14.8K Ω" } },
        { tp: "PP61", zone: "6", ref: { powered: "5.44v", os_idle: "5.43v", resistance: "5.05K Ω" } },
        { tp: "PP62", zone: "6", ref: { powered: "0v", os_idle: "0v", resistance: "0.0 Ω" } }
      ]
    }
  };

  /* --------------------------------------------------------------------
   * Storage helpers. Data model, per board key:
   *   {
   *     activeId: "<deviceId>",
   *     devices: {
   *       "<deviceId>": {
   *         name: "Board #1",
   *         created: <ms>,
   *         updated: <ms>,
   *         readings: { "TP1": { powered, os_idle, resistance, notes }, ... }
   *       }
   *     }
   *   }
   * ------------------------------------------------------------------ */
  function storageKey(board) {
    return STORAGE_PREFIX + board;
  }

  function storageAvailable() {
    try {
      var t = "__tp_test__";
      window.localStorage.setItem(t, t);
      window.localStorage.removeItem(t);
      return true;
    } catch (e) {
      return false;
    }
  }

  function loadStore(board) {
    try {
      var raw = window.localStorage.getItem(storageKey(board));
      if (!raw) return { activeId: null, devices: {} };
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return { activeId: null, devices: {} };
      if (!parsed.devices) parsed.devices = {};
      return parsed;
    } catch (e) {
      return { activeId: null, devices: {} };
    }
  }

  function saveStore(board, store) {
    try {
      window.localStorage.setItem(storageKey(board), JSON.stringify(store));
      return true;
    } catch (e) {
      return false;
    }
  }

  function newId() {
    return "dev-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
  }

  /* --------------------------------------------------------------------
   * Small DOM helpers
   * ------------------------------------------------------------------ */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "class") node.className = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function fmtDate(ms) {
    if (!ms) return "";
    try {
      return new Date(ms).toLocaleString();
    } catch (e) {
      return "";
    }
  }

  /* --------------------------------------------------------------------
   * Worksheet controller
   * ------------------------------------------------------------------ */
  function Worksheet(root) {
    this.root = root;
    this.board = root.getAttribute("data-board");
    this.title = root.getAttribute("data-title") || this.board;
    this.dataset = TP_DATASETS[this.board];
    this.store = loadStore(this.board);
  }

  Worksheet.prototype.activeDevice = function () {
    if (!this.store.activeId) return null;
    return this.store.devices[this.store.activeId] || null;
  };

  Worksheet.prototype.persist = function () {
    var dev = this.activeDevice();
    if (dev) dev.updated = Date.now();
    var ok = saveStore(this.board, this.store);
    this.setStatus(ok ? "Saved " + fmtDate(Date.now()) : "Save failed (storage full or blocked)");
  };

  Worksheet.prototype.setStatus = function (msg) {
    if (this.statusEl) this.statusEl.textContent = msg;
  };

  Worksheet.prototype.addDevice = function (name) {
    var id = newId();
    var count = Object.keys(this.store.devices).length + 1;
    this.store.devices[id] = {
      name: name || ("Board #" + count),
      created: Date.now(),
      updated: Date.now(),
      readings: {}
    };
    this.store.activeId = id;
    saveStore(this.board, this.store);
    this.render();
  };

  Worksheet.prototype.deleteActiveDevice = function () {
    var id = this.store.activeId;
    if (!id) return;
    var dev = this.store.devices[id];
    var label = dev ? dev.name : "this device";
    if (!window.confirm('Delete worksheet for "' + label + '"? This cannot be undone.')) return;
    delete this.store.devices[id];
    var remaining = Object.keys(this.store.devices);
    this.store.activeId = remaining.length ? remaining[0] : null;
    saveStore(this.board, this.store);
    this.render();
  };

  Worksheet.prototype.renameActiveDevice = function (name) {
    var dev = this.activeDevice();
    if (!dev) return;
    dev.name = name;
    this.persist();
  };

  Worksheet.prototype.exportJSON = function () {
    var dev = this.activeDevice();
    if (!dev) return;
    var payload = {
      board: this.board,
      title: this.title,
      device: dev.name,
      exported: new Date().toISOString(),
      readings: dev.readings
    };
    this.download(
      slug(dev.name) + "_" + this.board + ".json",
      JSON.stringify(payload, null, 2),
      "application/json"
    );
  };

  Worksheet.prototype.exportCSV = function () {
    var dev = this.activeDevice();
    if (!dev) return;
    var cols = this.dataset.columns;
    var header = ["Test Point", "Zone"];
    cols.forEach(function (c) {
      header.push(c.label + " (measured)");
      header.push(c.label + " (expected)");
    });
    header.push("Notes");

    var rows = [header];
    this.groupedPoints().forEach(function (group) {
      group.points.forEach(function (p) {
        var r = dev.readings[p.tp] || {};
        var row = [p.tp, group.zone];
        cols.forEach(function (c) {
          row.push(r[c.key] != null ? r[c.key] : "");
          row.push(p.ref[c.key] != null ? p.ref[c.key] : "");
        });
        row.push(r.notes != null ? r.notes : "");
        rows.push(row);
      });
    });

    var csv = rows.map(function (row) {
      return row.map(csvCell).join(",");
    }).join("\r\n");

    this.download(slug(dev.name) + "_" + this.board + ".csv", csv, "text/csv");
  };

  Worksheet.prototype.download = function (filename, content, type) {
    var blob = new Blob([content], { type: type + ";charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = el("a", { href: url, download: filename });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  };

  Worksheet.prototype.clearActiveReadings = function () {
    var dev = this.activeDevice();
    if (!dev) return;
    if (!window.confirm('Clear all measurements for "' + dev.name + '"? The device stays, values are wiped.')) return;
    dev.readings = {};
    this.persist();
    this.render();
  };

  /* --------------------------------------------------------------------
   * Rendering
   * ------------------------------------------------------------------ */
  Worksheet.prototype.render = function () {
    var self = this;
    this.root.innerHTML = "";

    if (!this.dataset) {
      this.root.appendChild(el("div", { class: "tp-error", text: 'No test point dataset found for board "' + this.board + '".' }));
      return;
    }

    if (!storageAvailable()) {
      this.root.appendChild(el("div", { class: "tp-error" }, [
        "Your browser is blocking local storage, so entries can't be saved between sessions. ",
        "You can still fill in the sheet, but it won't persist."
      ]));
    }

    this.root.appendChild(this.renderToolbar());

    var dev = this.activeDevice();
    if (!dev) {
      this.root.appendChild(el("div", { class: "tp-empty" }, [
        el("p", { text: "No device worksheets yet." }),
        (function () {
          var b = el("button", { class: "md-button md-button--primary", type: "button", text: "Start a new device worksheet" });
          b.addEventListener("click", function () { self.addDevice(); });
          return b;
        })()
      ]));
      return;
    }

    this.root.appendChild(this.renderTable(dev));

    this.statusEl = el("div", { class: "tp-status", text: "Last updated " + fmtDate(dev.updated) });
    this.root.appendChild(this.statusEl);
  };

  Worksheet.prototype.renderToolbar = function () {
    var self = this;
    var ids = Object.keys(this.store.devices);

    var select = el("select", { class: "tp-device-select", "aria-label": "Select device worksheet" });
    ids.forEach(function (id) {
      var dev = self.store.devices[id];
      var opt = el("option", { value: id, text: dev.name });
      if (id === self.store.activeId) opt.setAttribute("selected", "selected");
      select.appendChild(opt);
    });
    select.addEventListener("change", function () {
      self.store.activeId = select.value;
      saveStore(self.board, self.store);
      self.render();
    });

    var addBtn = btn("+ New device", function () {
      var name = window.prompt("Name for this device (e.g. serial, customer, ticket #):", "");
      if (name === null) return;
      self.addDevice(name.trim());
    });

    var renameBtn = btn("Rename", function () {
      var dev = self.activeDevice();
      if (!dev) return;
      var name = window.prompt("Rename device:", dev.name);
      if (name === null) return;
      var trimmed = name.trim();
      if (trimmed) self.renameActiveDevice(trimmed);
      self.render();
    });

    var deleteBtn = btn("Delete", function () { self.deleteActiveDevice(); });
    var clearBtn = btn("Clear values", function () { self.clearActiveReadings(); });
    var csvBtn = btn("Export CSV", function () { self.exportCSV(); });
    var jsonBtn = btn("Export JSON", function () { self.exportJSON(); });

    var left = el("div", { class: "tp-toolbar-group" }, [
      el("label", { class: "tp-toolbar-label", text: "Device:" }),
      ids.length ? select : el("span", { class: "tp-muted", text: "none yet" }),
      addBtn
    ]);
    var right = el("div", { class: "tp-toolbar-group" },
      this.activeDevice() ? [renameBtn, clearBtn, deleteBtn, csvBtn, jsonBtn] : []);

    return el("div", { class: "tp-toolbar" }, [left, right]);
  };

  // A point is worth showing only if it has at least one published reference value.
  Worksheet.prototype.hasReference = function (p) {
    return this.dataset.columns.some(function (c) {
      var v = p.ref[c.key];
      return v != null && String(v).trim() !== "";
    });
  };

  // Points that have reference data, grouped by zone, ordered by zone then by
  // their original (TP-number) order within the zone.
  Worksheet.prototype.groupedPoints = function () {
    var self = this;
    var groups = {};
    var order = [];
    this.dataset.points.forEach(function (p) {
      if (!self.hasReference(p)) return;
      var zone = p.zone && String(p.zone).trim() !== "" ? String(p.zone) : "Unzoned";
      if (!groups[zone]) {
        groups[zone] = [];
        order.push(zone);
      }
      groups[zone].push(p);
    });
    // Sort zone labels numerically where possible, keeping "Unzoned" last.
    order.sort(function (a, b) {
      if (a === "Unzoned") return 1;
      if (b === "Unzoned") return -1;
      var na = parseInt(a, 10), nb = parseInt(b, 10);
      if (!isNaN(na) && !isNaN(nb)) return na - nb;
      return a.localeCompare(b);
    });
    return order.map(function (zone) {
      return { zone: zone, points: groups[zone] };
    });
  };

  Worksheet.prototype.renderTable = function (dev) {
    var self = this;
    var wrap = el("div", { class: "tp-table-wrap" });

    this.groupedPoints().forEach(function (group) {
      wrap.appendChild(el("h3", { class: "tp-zone-heading", text: "Zone " + group.zone }));
      wrap.appendChild(self.renderZoneTable(dev, group.points));
    });

    return wrap;
  };

  Worksheet.prototype.renderZoneTable = function (dev, points) {
    var self = this;
    var cols = this.dataset.columns;

    var headCells = [el("th", { text: "Test Point" })];
    cols.forEach(function (c) {
      headCells.push(el("th", { class: "tp-col-measured", text: c.label + (c.unit ? " (" + c.unit + ")" : "") }));
      headCells.push(el("th", { class: "tp-col-expected", text: "exp." }));
    });
    headCells.push(el("th", { text: "Notes" }));

    var body = el("tbody");
    points.forEach(function (p) {
      var reading = dev.readings[p.tp] || (dev.readings[p.tp] = {});
      var cells = [
        el("td", { class: "tp-tp", text: p.tp })
      ];

      cols.forEach(function (c) {
        var input = el("input", {
          type: "text",
          class: "tp-input",
          value: reading[c.key] != null ? reading[c.key] : "",
          "aria-label": p.tp + " " + c.label,
          placeholder: ""
        });
        input.addEventListener("input", function () {
          reading[c.key] = input.value;
          self.persist();
        });
        cells.push(el("td", { class: "tp-cell-measured" }, [input]));
        cells.push(el("td", { class: "tp-cell-expected", text: p.ref[c.key] || "\u2014" }));
      });

      var notes = el("input", {
        type: "text",
        class: "tp-input tp-notes",
        value: reading.notes != null ? reading.notes : "",
        "aria-label": p.tp + " notes",
        placeholder: ""
      });
      notes.addEventListener("input", function () {
        reading.notes = notes.value;
        self.persist();
      });
      cells.push(el("td", { class: "tp-cell-notes" }, [notes]));

      body.appendChild(el("tr", null, cells));
    });

    return el("table", { class: "tp-table" }, [
      el("thead", null, [el("tr", null, headCells)]),
      body
    ]);
  };

  /* --------------------------------------------------------------------
   * Utilities
   * ------------------------------------------------------------------ */
  function btn(label, handler) {
    var b = el("button", { class: "md-button tp-btn", type: "button", text: label });
    b.addEventListener("click", handler);
    return b;
  }

  function slug(s) {
    return (s || "device").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "device";
  }

  function csvCell(v) {
    var s = v == null ? "" : String(v);
    if (/[",\r\n]/.test(s)) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }

  function init() {
    var mounts = document.querySelectorAll(".tp-worksheet");
    mounts.forEach(function (root) {
      if (root.getAttribute("data-tp-init") === "1") return;
      root.setAttribute("data-tp-init", "1");
      new Worksheet(root).render();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Material for MkDocs uses instant navigation; re-init on page change.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  }
})();
