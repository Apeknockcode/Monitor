import { setFlag, _support } from './global';
import { EVENTTYPES } from '@brolisten/common';

/**
 * 返回包含id、class、innerTextde字符串的标签
 * @param target html节点
 */
export function htmlElementAsString(target: HTMLElement): string {
  const tagName = target.tagName.toLowerCase();
  if (tagName === 'body') {
    return '';
  }
  let classNames = target.classList.value;

  classNames = classNames !== '' ? ` class='${classNames}'` : '';
  const id = target.id ? ` id="${target.id}"` : '';
  const innerText = target.innerText;
  return `<${tagName}${id}${classNames !== '' ? classNames : ''}>${innerText}</${tagName}>`;
}
/**
 * 将地址字符串转换成对象，
 * 输入：'https://XXXXX.com/XYXYXY/browser-listen?token=123&name=11'
 * 输出：{
 *  "host": "XXXXX.com",
 *  "path": "XYXYXY/browser-listen",
 *  "protocol": "https",
 *  "relative": "/XYXYXY/browser-listen?token=123&name=11"
 * }
 */
export function parseUrlToObj(url: string) {
  if (!url) {
    return {};
  }
  const match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }
  const query = match[6] || '';
  const fragment = match[8] || '';
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    relative: match[5] + query + fragment,
  };
}
// 给全局添加已设置的标识，防止重复设置
export function setSilentFlag({
  silentXhr = true,
  silentFetch = true,
  silentClick = true,
  silentHistory = true,
  silentError = true,
  silentHashchange = true,
  silentUnhandledrejection = true,
  silentWhiteScreen = false,
}): void {
  setFlag(EVENTTYPES.XHR, !silentXhr);
  setFlag(EVENTTYPES.FETCH, !silentFetch);
  setFlag(EVENTTYPES.CLICK, !silentClick);
  setFlag(EVENTTYPES.HISTORY, !silentHistory);
  setFlag(EVENTTYPES.ERROR, !silentError);
  setFlag(EVENTTYPES.HASHCHANGE, !silentHashchange);
  setFlag(EVENTTYPES.UNHANDLEDREJECTION, !silentUnhandledrejection);
  setFlag(EVENTTYPES.WHITESCREEN, !silentWhiteScreen);
}

// 对每一个错误详情，生成唯一的编码
export function getErrorUid(input: string): string {
  return window.btoa(encodeURIComponent(input));
}

// 判断是不是第一次报错，如果是第一次报错就上报。否则返回false
export function hashMapExist(hash: string): boolean {
  const exist = _support.errorMap.has(hash);
  if (!exist) {
    _support.errorMap.set(hash, true);
  }
  return exist;
}
