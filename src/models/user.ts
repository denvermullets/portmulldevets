import axios from "axios";
import config from "../config";
import { UAParser } from "ua-parser-js";

export const logVisit = async (name: string, tag: string, target: string | null) => {
  if (!config.API_URL) {
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
  const deviceType = `${uaResult.device.vendor || ""} ${uaResult.device.model || ""} ${
    uaResult.device.type || "Desktop"
  }`.trim();

  await axios.post(`${config.API_URL}/api/v1/events`, {
    event: {
      target,
      tag,
      name,
      browser,
      operating_system: os,
      screen_size: `${screenWidth}w x ${screenHeight}h`,
      referrer,
      device_type: deviceType,
    },
  });
};
