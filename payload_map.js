// @ts-check

const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";

/**
 * @typedef {Object} PayloadInfo
 * @property {string} displayTitle
 * @property {string} description
 * @property {string} fileName - path relative to the payloads folder
 * @property {string} author
 * @property {string} projectSource
 * @property {string} binarySource - should be direct download link to the included version, so that you can verify the hashes
 * @property {string} version
 * @property {string[]?} [supportedFirmwares] - optional, these are interpreted as prefixes, so "" would match all, and "4." would match 4.xx, if not set, the payload is assumed to be compatible with all firmwares
 * @property {number?} [toPort] - optional, if the payload should be sent to "127.0.0.1:<port>" instead of loading directly, if specified it'll show up in webkit-only mode too
 * @property {string?} [customAction]
 */

/**
 * @type {PayloadInfo[]}
*/
const payload_map = [
    // { // auto-loaded
    //     displayTitle: "PS5 Payload ELF Loader",
    //     description: "Uses port 9021. Persistent network elf loader",
    //     fileName: "elfldr.elf",
    //     author: "john-tornblom",
    //     projectSource: "https://github.com/ps5-payload-dev/elfldr",
    //     binarySource: "https://github.com/ps5-payload-dev/elfldr/releases/download/v0.19/Payload.zip",
    //     version: "0.19",
    //     supportedFirmwares: ["1.", "2.", "3.", "4.", "5."]
    // },
    {
        displayTitle: "etaHEN2.5b\u4e00\u952e\u6298\u817e",
        description: "\u5168\u80fd\u6298\u817e\u63d2\u4ef6\uff0c\u9002\u5e94\u4e8e3.xx-5.xx\u7cfb\u7edf.",
        fileName: "etaHEN-2.5B.bin",
        author: "LightningMods, Buzzer, sleirsgoevy, ChendoChap, astrelsky, illusion, CTN, SiSTR0, Nomadic",
        projectSource: "https://github.com/etaHEN/etaHEN",
        binarySource: "https://github.com/etaHEN/etaHEN/blob/ea3b04a60f911d31e3888a0f98a57b3cccfe787c/etaHEN-2.2B.bin",
        version: "2.5b",
        toPort: 9021
    },
    {
        displayTitle: "kstuff\u4e00\u952e\u6298\u817e",
        description: "\u9002\u7528\u4e8e3.xx-5.xx\u7cfb\u7edf\u8fd0\u884cps4 fpkg",
        fileName: "kstuff.elf",
        author: "sleirsgoevy, john-tornblom, EchoStretch, buzzer-re, BestPig, LightningMods, zecoxao",
        projectSource: "https://github.com/EchoStretch/kstuff",
        binarySource: "https://github.com/EchoStretch/kstuff/actions/runs/14686953552",
        version: "1.6.6",
        supportedFirmwares: ["3.", "4.", "5."],
        toPort: 9021
    },
    {
        displayTitle: "Byepervisor HEN",
        description: "\u9002\u7528\u4e8e1.xx-2.xx\u7cfb\u7edf\u8fd0\u884cps4 fpkg",
        fileName: "byepervisor.elf",
        author: "SpecterDev, ChendoChap, flatz, fail0verflow, Znullptr, kiwidog, sleirsgoevy, EchoStretch, LightningMods, BestPig, zecoxao", 
        projectSource: "https://github.com/EchoStretch/Byepervisor",
        binarySource: "https://github.com/EchoStretch/Byepervisor/actions/runs/14004003762",
        version: "84164bb",
        supportedFirmwares: ["1.00", "1.01", "1.02", "1.12", "1.14", "2.00", "2.20", "2.25", "2.26", "2.30", "2.50", "2.70"],
        toPort: 9021
    },
    {
        displayTitle: "kstuff Testkit\u4e00\u952e\u6298\u817e",
        description: "\u9002\u7528\u4e8e3.xx-5.xx\u7cfb\u7edf\u8fd0\u884cps4 fpkg",
        fileName: "kstuff_testkit.bin",
        author: "sleirsgoevy, john-tornblom, EchoStretch, buzzer-re, BestPig, LightningMods, zecoxao",
        projectSource: "https://github.com/EchoStretch/kstuff",
        binarySource: "https://github.com/EchoStretch/kstuff/actions/runs/14686953552",
        version: "1.6.6",
        supportedFirmwares: ["3.", "4.", "5."],
        toPort: 9021
    },
	    {
        displayTitle: "kstuff Devkit\u4e00\u952e\u6298\u817e",
        description: "\u9002\u7528\u4e8e3.xx-5.xx\u7cfb\u7edf\u8fd0\u884cps4 fpkg",
        fileName: "devkit_kstuff.bin",
        author: "sleirsgoevy, john-tornblom, EchoStretch, buzzer-re, BestPig, LightningMods, zecoxao",
        projectSource: "https://github.com/EchoStretch/kstuff",
        binarySource: "https://github.com/EchoStretch/kstuff/actions/runs/14686953552",
        version: "1.6.6",
        supportedFirmwares: ["3.", "4.", "5."],
        toPort: 9021
    },
    {
        displayTitle: "websrv",
        description: "\u81ea\u5236\u5c0f\u7a0b\u5e8f\u52a0\u8f7d\u5668\uff0c\u5de5\u4f5c\u7aef\u53e38080.",
        fileName: "websrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/websrv",
        binarySource: "https://github.com/ps5-payload-dev/websrv/actions/runs/14318408868",
        version: "0.22",
        toPort: 9021
    },
    {
        displayTitle: "FTP\u670d\u52a1",
        description: "\u7aef\u53e3 2121.",
        fileName: "ftpsrv.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/ftpsrv",
        binarySource: "https://github.com/ps5-payload-dev/pacbrew-repo/actions/runs/14012252230",
        version: "0.11.3",
        toPort: 9021
    },

    {
        displayTitle: "\u7248\u672c\u67e5\u770b",
        description: "\u67e5\u770b\u5185\u6838\u548cSDK\u7248\u672c",
        fileName: "ps5-versions.elf",
        author: "SiSTRo",
        projectSource: "https://github.com/SiSTR0/ps5-versions",
        binarySource: "https://github.com/SiSTR0/ps5-versions/releases/download/v1.0/ps5-versions.elf",
        version: "1.0",
        supportedFirmwares: ["1.", "2.", "3.", "4."]
    },

    {
		// https://github.com/Storm21CH/PS5_Browser_appCache_remove
        displayTitle: "\u6d4f\u89c8\u5668\u7f13\u5b58\u6e05\u7406",
        description: "\u4e00\u952e\u6e05\u7406\u6d4f\u89c8\u5668\u7f13\u5b58.",
        fileName: "",
        author: "Storm21CH, idlesauce",
        projectSource: "",
        binarySource: "",
        version: "1.0",
        customAction: CUSTOM_ACTION_APPCACHE_REMOVE
    }

];








