import ReactGA from "react-ga";

/**
 * 菜花广告链接
 */
export const caihuaLink =
  "https://live.bilibili.com/7194086";

/**
 * 跳转至直播间
 * 「你想用钱来收买我吗？这是对我的侮辱！我本想这样大声呵斥他，但钱实在是太多了」
 */
export function jumpToCaihua() {
  console.log(
    "你想用钱来收买我吗？这是对我的侮辱！我本想这样大声呵斥他，但钱实在是太多了。"
  );
  ReactGA.ga("send", {
    hitType: "event",
    eventCategory: "Outbound Link",
    eventAction: "click",
    eventLabel: "Ximalaya Adsense",
  });
  window.open(caihuaLink);
}
