import axios from "axios";
import config from "../config";
import { UAParser } from "ua-parser-js";

export const logVisit = async (event: string) => {
  if (!config.API_URL || !config.IPINFO_TOKEN) {
    console.error("missing configs");
    return;
  }

  const userAgent = navigator.userAgent;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const referrer = document.referrer;
  const parser = new UAParser(userAgent);
  const uaResult = parser.getResult();
  const browser = `${uaResult.browser.name} - v${uaResult.browser.version}`;
  const os = `${uaResult.os.name} - v${uaResult.os.version}`;
  const deviceType = `${uaResult.device.vendor} ${uaResult.device.model} ${
    uaResult.device.type || "desktop"
  }`;

  await axios.post(`${config.API_URL}/api/v1/visits`, {
    visit: {
      event,
      browser,
      operating_system: os,
      screen_size: `${screenWidth}w x ${screenHeight}h`,
      referrer,
      device_type: deviceType,
    },
  });
};
