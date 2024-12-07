// ==UserScript==
// @name         搜索引擎净化
// @namespace    https://github.com/QingJ01/Search_clear
// @version      1.0.0
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFU0lEQVRoQ81aTWhUVxQ+902cMdVJMthV6SLubEFrwFKoCGZTBKE6nVgqdWHcaNyYLLrUart00XHjRBc1m9LSJHVSKBQLTUAsLS0YuxC7yhTEVcs8Z2x+NHNvz7nz3jh58967P2+CHhjIZO7P9533nXvOvfcx6IKN36wOrK7DXhzqIHN6+oEJ/FsMgIBBOTyDCghWYQAu542/8T8Lk8dyC12YGoe2NAK91kDALHVEgDiKwwyYD8XKAhpzk4XclHnfZg9jAp63x5njnLMDHQXVKZYK2QlTItoEfI8Dc77ASZrS6L65AviEyRPRIiDB89QN1DVJZfONwWKG8eFiPueqJlMSOPttda9IOTc30etRGF3W4MNXP8wtxpGIJTA2Uz2KkkHP2wSoyneavwueL43kylGtIwmcma2eZCD1brG6aILTbRZDIpSAJ5v5lwK8RxLlNBQmpw4CzYB17r4AzauehyscPjSZz1XaG3YQGJutYcBu3mpTZw/hQXoGKumfYPfqKOx6NqIC/vx3XJ1KH/QPRRLwdE9B21VbYzX4N3Uf7vR+DkSAvpO9yt+EY/UfjObCPDHanidaT0BKRzjzWL9QTdM1W9pyC/7YegX+ce6Hjnmidhuy4nWT+dxSoT/nd2gRODNdvYjlwacmI8W1fdTzq/R4FHC/7/6V87Dn6SmjaQXnl7AYvEidJAEvcJfwz8RLJsmDPP7XlpmWVOLQ7Xz2HhxavmZEABu3AloS8BIWZdtE9gBB/4Je9zWuM1hG9MGp2j2dpoE2fKJUyBWbBBKuPL7X/0x/aQEEZCBTQJsZK5cKfXmWdN0n8PO9nwAFq63ZxAHJiIKZJZUPBaqt533ClnGACyYfZWOz1XFo1jzGRsCJQFJ7bf0dOPLfN8bD0GrEzs7WbuCW8KRpb0pI09nDRgEbNYd9ILMyPgG70qEb0mknRCsRETEyxhaQwGNa/wdNOlKS+vGV013xvj+vFQEMZCsCc9s+gkc9v2lzJs+qckMSAlVEop2BqTQg7esalQlLPbeg7jyM7WJJANjYd4/vmhRwv2eKslTQMfL8+0++VhK2D2KoIIEaVqDioA4gakPeVxVo/lh+jUPxEmc2ZbUcD/cHGAN1zAEcc4HaTORD0qEMS+BVWXrX0xEYXrmsBhBowYBNGRHQTVwE6N3V83K6r7IHlAFsWUrg6E7RqJSgmoe2gyo5kO5J1zrxQu0+rt82zwEEAk8r/GJOay+gkgOVBIeWr0swtGzqeH/f6jl4e01LwUG/uRmH75TltG45EfcESPMExs+mut6nUtpwS+kR8cpp+qa7mQ8rHwgwAW/fFlKwf7/9uFL7w8uXzU4lNjyDtg2NtyeghBZrVELMbTveakOS2b9yYcNmhKQzvf2wMnH5q5RqzojfN24p5VPQ3NRTHkjzrPQ41fHtpru5CcrNlETHpp4G0N2Z+TVNsHLUAR8mN1Pw2F4Gr3/0vuFkTjcWgpOStH7GJTau3gmTmwV4XDmfH6lQ/86jRcPaiAL2Tu9nodUpeXxH442OOLEBLvuEXHxEHe5q5YUgEL9kIOBp3ieXR+NNSjS70AuPuON1OqF+WcxF7YyGXXREXnAkPa3oLvPmmh82ps4VU+ITuwRk8JKPX4oCHxrEwcle4G1NpGzaMSpvKVs5YhOO3iOfDK42gvF88DbGWELBDt4hGB3Ba++hDeUjJZNxYErnjlhLQmEAkpzmRRAyBu6PoyWhKC9KIviyh8meum0sFxhbBNGYEw6UdeSSWEJxcqBlV+D1FHNSb2HGxFdtxCC2pw+9LoBg8YOv3GA6rQhYv7cVQevKJG7e/wGC2pwVj9Yh6QAAAABJRU5ErkJggg==
// @description  一个轻量级的搜索引擎优化脚本。自动净化百度、谷歌、必应等搜索结果页面，支持移除广告、优化重定向链接、清理URL、隐藏弹窗等功能，让搜索体验更简洁高效
// @author       QingJ
// @license      Apache Licence 2.0
// @match        *://*.google.com/*
// @match        *://*.google.com.hk/*
// @match        *://*.google.co.jp/*
// @match        *://*.baidu.com/*
// @match        *://*.bing.com/*
// @match        *://*.cn.bing.com/*
// @match        *://*.s.cn.bing.net/*
// @match        *://*.sogou.com/*
// @match        *://*.m.sogou.com/*
// @match        *://*.wap.sogou.com/*
// @match        *://*.so.com/*
// @match        *://*.m.so.com/*
// @match        *://*.sm.cn/*
// @match        *://*.m.sm.cn/*
// @match        *://*.yz.m.sm.cn/*
// @match        *://*.so.toutiao.com/*
// @grant        GM_addStyle
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function(cat) {
    "use strict";

    const userConfig = {
        css: " {display: none !important;width: 0 !important;height: 0 !important;} ",
        timeout: 10000,
        tryCount: 5,
        tryTimeout: 500,
    };

    /**
     * 常量定义
     */
    const HOSTS = {
        BAIDU: 'baidu.com',
        GOOGLE: 'google.com',
        BING: 'bing.com',
        SOGOU: 'sogou.com',
        SO: 'so.com',
        SM: 'sm.cn'
    };

    /**
     * 工具函数:移除元素
     */
    function removeElements(selector) {
        try {
            document.querySelectorAll(selector).forEach(el => el.remove());
        } catch(e) {
            console.error('移除元素失败:', selector, e);
        }
    }

    /**
     * 检查当前域名是否匹配
     */
    function isMatchHost(host) {
        return location.host.includes(host);
    }

    /**
     * 添加样式
     */
    function addStyle(css, pass = 0) {
        let el;
        if (pass >= userConfig.tryCount) return;
        if (typeof cat.GM_addStyle == "function") {
            el = cat.GM_addStyle(css);
        } else {
            el = document.createElement("style");
            el.textContent = css;
            document.documentElement.appendChild(el);
        }
        if (typeof el == "object") {
            if (!el || !document.documentElement.contains(el)) {
                setTimeout(() => {
                    addStyle(css, pass + 1);
                }, userConfig.tryTimeout);
            }
        }
    }

    /**
     * 搜索引擎广告过滤
     */
    function removeAds() {
        // 百度广告过滤
        if(isMatchHost(HOSTS.BAIDU)) {
            // 移除顶部和右侧广告
            removeElements('.ec_wise_ad');
            removeElements('#content_right');

            // 移除带有广告标记的内容 - 更精确的选择器
            document.querySelectorAll('#content_left > div').forEach(container => {
                // 检查是否包含广告标记
                if(container.querySelector('.f13 > span')?.textContent?.includes('广告') ||
                   container.querySelector('a[data-landurl]') ||
                   container.querySelector('span.tuiguang')?.textContent?.includes('广告') ||
                   container.querySelector('span.brand')?.textContent?.includes('广告') ||
                   container.querySelector('span[data-tuiguang]')) {
                    container.remove();
                }
            });

            // 移除多余元素 - 更精确的选择器
            removeElements('#content_right > br');
            removeElements('#content_right > div:not([id])');
            removeElements('#content_left > div.result-op');
            removeElements('#content_left > div[class*="recommend"]');

            // 移除劫持和推荐
            removeElements('.res_top_banner');
            removeElements('#content_left div[class*="_rs"]');

            // 移除手机版广告
            if(location.host.includes('m.baidu.com')) {
                // 基础广告元素
                removeElements([
                    '.ec_wise_ad',
                    '.ec-result-inner',
                    '.c-result.result-op',
                    '.download-tip',
                    '.float-ball',
                    '.ball-wrapper',
                    '.na-like-container'
                ].join(','));

                // 移除带有广告标记的内容
                document.querySelectorAll('.c-container').forEach(container => {
                    if(container.querySelector('.c-icons-outer')?.textContent?.includes('广告') ||
                       container.hasAttribute('data-tuiguang') ||
                       container.querySelector('[data-tuiguang]')) {
                        container.remove();
                    }
                });

                // 移除底部推广
                removeElements([
                    '.c-recommends',
                    '.c-flex-recommend',
                    '.c-recommend-tip',
                    '[data-module="recommend"]'
                ].join(','));
            }
        }

        // 谷歌广告过滤
        if(isMatchHost(HOSTS.GOOGLE)) {
            removeElements([
                '.commercial-unit',
                '#tads',
                '#bottomads',
                'div[aria-label="广告"]',
                'div[aria-label="Ads"]'
            ].join(','));
        }

        // 必应广告过滤
        if(isMatchHost(HOSTS.BING)) {
            removeElements([
                'li.b_ad',
                '.pa_sb',
                '.adsMvC',
                'a[h$=",Ads"]',
                'a[href*="/aclick?ld="]',
                'DIV#bnp_container',
                '.ad_sc'
            ].join(','));

            // 移除特定图片的广告
            document.querySelectorAll('.b_algo').forEach(algo => {
                const img = algo.querySelector('.rms_img');
                if(img && (img.src.includes('/th?id=OADD2.') ||
                          img.src.includes('=AdsPlus'))) {
                    algo.remove();
                }
            });
        }

        // 搜狗广告过滤
        if(isMatchHost(HOSTS.SOGOU)) {
            removeElements([
                '#so_kw-ad',
                '#m-spread-left',
                '#m-spread-bottom'
            ].join(','));

            // 移除带有广告标记的内容
            document.querySelectorAll('#righttop_box li').forEach(li => {
                if(li.querySelector('span')?.textContent.includes('广告')) {
                    li.remove();
                }
            });
        }

        // 360搜索广告过滤
        if(isMatchHost(HOSTS.SO)) {
            removeElements([
                '.res-mediav',
                '.e_result',
                '.c-title-tag',
                'DIV.res-mediav-right',
                'DIV.inner_left',
                '#so-activity-entry',
                'DIV.tg-wrap'
            ].join(','));
        }

        // 神马搜索广告过滤
        if(isMatchHost(HOSTS.SM)) {
            removeElements([
                '.ad-wrapper',
                '.ec_wise_ad',
                '.qb-download-banner-non-share',
                'DIV[data-text-ad]',
                '.ad-block'
            ].join(','));

            // 移除手机版广告
            if(location.host.includes('m.sm.cn')) {
                removeElements([
                    'DIV.ad-alert-info',
                    '.se-recommend-word-list-container',
                    '#se-recommend-word-list-container',
                    '[class*="ball-wrapper"]',
                    'DIV#page-copyright.se-page-copyright[style*="margin-bottom: 50px"]',
                    'DIV[style*="position: fixed; bottom: 0px"]',
                    '[ad_dot_url*="http"]',
                    '.dl-banner-without-logo',
                    '.ad_result',
                    '.biz_sponsor'
                ].join(','));
            }
        }
    }

    /**
     * 搜索引擎重定向优化
     */
    function redirectOptimize() {
        // 处理百度重定向
        if (isMatchHost(HOSTS.BAIDU)) {
            document.querySelectorAll('a[href*="baidu.com/link"]:not([ac-redirect-processed])').forEach(link => {
                try {
                    // 标记已处理,避免重复
                    link.setAttribute('ac-redirect-processed', '1');

                    // 保存原始链接
                    const originalHref = link.href;

                    // 移除原有的点击事件
                    link.removeAttribute('onclick');
                    link.removeAttribute('onmousedown');

                    // 使用GM_xmlhttpRequest处理重定向
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();

                        GM_xmlhttpRequest({
                            method: "GET",
                            url: originalHref,
                            headers: {
                                "Accept": "*/*",
                                "Referer": originalHref
                            },
                            timeout: 5000,
                            onload: function(response) {
                                let directUrl = response.finalUrl;
                                if (!directUrl) {
                                    // 尝试从响应文本中提取URL
                                    const matches = /URL='([^']+)'/.exec(response.responseText);
                                    directUrl = matches ? matches[1] : null;
                                }
                                if (directUrl && !directUrl.includes('baidu.com/link')) {
                                    window.open(directUrl, '_blank');
                                } else {
                                    window.open(originalHref, '_blank');
                                }
                            },
                            onerror: function() {
                                window.open(originalHref, '_blank');
                            }
                        });
                    }, {once: true}); // 确保事件只触发一次

                } catch (e) {
                    console.error('百度重定向处理失败:', e);
                }
            });
        }

        // 处理谷歌重定向
        if (isMatchHost(HOSTS.GOOGLE)) {
            document.querySelectorAll('a[onmousedown]:not([ac-redirect-processed]), a[data-jsarwt]:not([ac-redirect-processed])').forEach(link => {
                try {
                    // 标记已处理
                    link.setAttribute('ac-redirect-processed', '1');

                    // 移除Google的重定向属性
                    link.removeAttribute('onmousedown');
                    link.removeAttribute('data-jsarwt');
                    link.removeAttribute('ping');

                    // 新标签页打开
                    link.setAttribute('target', '_blank');

                } catch (e) {
                    console.error('谷歌重定向处理失败:', e);
                }
            });
        }

        // 处理必应重定向
        if (isMatchHost(HOSTS.BING)) {
            document.querySelectorAll('a[href*="/click?"]:not([ac-redirect-processed]), a[href*="go.microsoft.com"]:not([ac-redirect-processed])').forEach(link => {
                try {
                    // 标记已处理
                    link.setAttribute('ac-redirect-processed', '1');

                    // 尝试从href中提取目标URL
                    const url = new URL(link.href);
                    let targetUrl = url.searchParams.get('u') || url.searchParams.get('r');

                    if (targetUrl) {
                        // 设置解码后的URL
                        link.href = decodeURIComponent(targetUrl);
                        link.setAttribute('target', '_blank');

                        // 移除原有的点击事件
                        link.removeAttribute('onclick');
                        link.removeAttribute('onmousedown');
                    }
                } catch (e) {
                    console.error('必应重定向处理失败:', e);
                }
            });
        }
    }

    /**
     * 隐藏必应APP弹窗
     */
    function hideBingPopup() {
        if(isMatchHost(HOSTS.BING)) {
            addStyle('div#bnp_container {display: none !important;}');

            const observer = new MutationObserver(() => {
                const closeBtn = document.querySelector('div#sacs_close');
                if(closeBtn) {
                    closeBtn.click();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }
    }

    /**
     * URL参数清理
     */
    function shortenUrl() {
        sturl();
        window.addEventListener('locationchange', sturl);
    }

    function sturl() {
        try {
            let url = new URL(window.location.href);
            let changed = false;

            // 需要移除的查询参数
            const params = [
                // 百度参数 - 完整列表
                'rsp', 'prefixsug', 'fr', 'bsst', 'f', 'inputT', 'usm', 'rsv_page',
                'rqlang', 'rsv_t', 'oq', 'rsv_pq', 'rsv_spt', 'ie', 'rsv_enter',
                'rsv_sug1', 'rsv_sug7', 'rsv_sug2', 'rsv_sug3', 'rsv_iqid',
                'rsv_bp', 'rsv_btype', 'rsv_idx', 'rsv_dl', 'issp', 'cshid',
                'tn', 'rsv_sug4', 'rtt', 'bsst', 'rsv_sid', 'rsv_tn', '_ss',
                'rsv_jmp', 'rsv_bl', 'rsv_sug5', 'rsv_sug6', 'rsv_sug8', 'rsv_sug9', 'bar',

                // 谷歌参数 - 完整列表
                'tbas', 'ved', 'uact', 'ei', 'ie', 'oq', 'sclient', 'cshid', 'dpr',
                'iflsig', 'aqs', 'gs_lcp', 'source', 'sourceid', 'sxsrf', 'pccc',
                'sa', 'biw', 'bih', 'hl', 'newwindow', 'stick', 'gws_rd', 'client',
                'gs_rn', 'tbo', 'dcr', 'safe', 'ssui', 'psi',

                // 必应参数 - 完整列表
                'tsc', 'sp', 'FORM', 'form', 'pq', 'sc', 'qs', 'sk', 'cvid', 'lq',
                'ghsh', 'ghacc', 'ghpl', 'ghc', 'ubireng', 'FPIG', 'PC', 'setmkt',
                'setlang', 'mkt', 'qpvt', 'ensearch', 'first'
            ];

            // 移除参数
            params.forEach(param => {
                if(url.searchParams.has(param)) {
                    url.searchParams.delete(param);
                    changed = true;
                }
            });

            // 特殊参数处理
            const specialParams = [
                ['start', '0'],
                ['page', '1'],
                ['offset', '0'],
                ['first', '1']
            ];

            if(url.searchParams.get('start') === '0') {
                url.searchParams.delete('start');
                changed = true;
            }

            // 如果有改变则更新URL
            if(changed) {
                window.history.replaceState(null, null, url.toString());
            }

        } catch(e) {
            console.error('URL参数清理失败:', e);
        }
    }

    // 添加 locationchange 事件支持
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function() {
        originalPushState.apply(this, arguments);
        window.dispatchEvent(new Event('locationchange'));
    };

    history.replaceState = function() {
        originalReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('locationchange'));
    };

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'));
    });

    /**
     * 初始化函数
     */
    function init() {
        removeAds();
        redirectOptimize();
        hideBingPopup();
        shortenUrl();
    }

    // 使用 MutationObserver 监听DOM变化
    const observer = new MutationObserver(() => {
        removeAds();
        redirectOptimize();
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["id", "class"]
    });

    // 初始化执行
    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})({
    GM_info: typeof GM_info == "object" ? GM_info : {},
    unsafeWindow: typeof unsafeWindow == "object" ? unsafeWindow : window,
    GM_addStyle: typeof GM_addStyle == "function" ? GM_addStyle : undefined,
});
