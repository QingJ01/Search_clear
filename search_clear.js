// ==UserScript==
// @name         搜索引擎净化
// @namespace    https://github.com/QingJ01/Search_clear
// @version      1.0.0
// @description  一个轻量级的搜索引擎优化脚本。自动净化百度、谷歌、必应等搜索结果页面，支持移除广告、优化重定向链接、清理URL、隐藏弹窗等功能，让搜索体验更简洁高效
// @author       QingJ
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFU0lEQVRoQ81aTWhUVxQ+902cMdVJMthV6SLubEFrwFKoCGZTBKE6nVgqdWHcaNyYLLrUart00XHjRBc1m9LSJHVSKBQLTUAsLS0YuxC7yhTEVcs8Z2x+NHNvz7nz3jh58967P2+CHhjIZO7P9533nXvOvfcx6IKN36wOrK7DXhzqIHN6+oEJ/FsMgIBBOTyDCghWYQAu542/8T8Lk8dyC12YGoe2NAK91kDALHVEgDiKwwyYD8XKAhpzk4XclHnfZg9jAp63x5njnLMDHQXVKZYK2QlTItoEfI8Dc77ASZrS6L65AviEyRPRIiDB89QN1DVJZfONwWKG8eFiPueqJlMSOPttda9IOTc30etRGF3W4MNXP8wtxpGIJTA2Uz2KkkHP2wSoyneavwueL43kylGtIwmcma2eZCD1brG6aILTbRZDIpSAJ5v5lwK8RxLlNBQmpw4CzYB17r4AzauehyscPjSZz1XaG3YQGJutYcBu3mpTZw/hQXoGKumfYPfqKOx6NqIC/vx3XJ1KH/QPRRLwdE9B21VbYzX4N3Uf7vR+DkSAvpO9yt+EY/UfjObCPDHanidaT0BKRzjzWL9QTdM1W9pyC/7YegX+ce6Hjnmidhuy4nWT+dxSoT/nd2gRODNdvYjlwacmI8W1fdTzq/R4FHC/7/6V87Dn6SmjaQXnl7AYvEidJAEvcJfwz8RLJsmDPP7XlpmWVOLQ7Xz2HhxavmZEABu3AloS8BIWZdtE9gBB/4Je9zWuM1hG9MGp2j2dpoE2fKJUyBWbBBKuPL7X/0x/aQEEZCBTQJsZK5cKfXmWdN0n8PO9nwAFq63ZxAHJiIKZJZUPBaqt533ClnGACyYfZWOz1XFo1jzGRsCJQFJ7bf0dOPLfN8bD0GrEzs7WbuCW8KRpb0pI09nDRgEbNYd9ILMyPgG70qEb0mknRCsRETEyxhaQwGNa/wdNOlKS+vGV013xvj+vFQEMZCsCc9s+gkc9v2lzJs+qckMSAlVEop2BqTQg7esalQlLPbeg7jyM7WJJANjYd4/vmhRwv2eKslTQMfL8+0++VhK2D2KoIIEaVqDioA4gakPeVxVo/lh+jUPxEmc2ZbUcD/cHGAN1zAEcc4HaTORD0qEMS+BVWXrX0xEYXrmsBhBowYBNGRHQTVwE6N3V83K6r7IHlAFsWUrg6E7RqJSgmoe2gyo5kO5J1zrxQu0+rt82zwEEAk8r/GJOay+gkgOVBIeWr0swtGzqeH/f6jl4e01LwUG/uRmH75TltG45EfcESPMExs+mut6nUtpwS+kR8cpp+qa7mQ8rHwgwAW/fFlKwf7/9uFL7w8uXzU4lNjyDtg2NtyeghBZrVELMbTveakOS2b9yYcNmhKQzvf2wMnH5q5RqzojfN24p5VPQ3NRTHkjzrPQ41fHtpru5CcrNlETHpp4G0N2Z+TVNsHLUAR8mN1Pw2F4Gr3/0vuFkTjcWgpOStH7GJTau3gmTmwV4XDmfH6lQ/86jRcPaiAL2Tu9nodUpeXxH442OOLEBLvuEXHxEHe5q5YUgEL9kIOBp3ieXR+NNSjS70AuPuON1OqF+WcxF7YyGXXREXnAkPa3oLvPmmh82ps4VU+ITuwRk8JKPX4oCHxrEwcle4G1NpGzaMSpvKVs5YhOO3iOfDK42gvF88DbGWELBDt4hGB3Ba++hDeUjJZNxYErnjlhLQmEAkpzmRRAyBu6PoyWhKC9KIviyh8meum0sFxhbBNGYEw6UdeSSWEJxcqBlV+D1FHNSb2HGxFdtxCC2pw+9LoBg8YOv3GA6rQhYv7cVQevKJG7e/wGC2pwVj9Yh6QAAAABJRU5ErkJggg==
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
// @supportURL   https://github.com/QingJ01/Search_clear/issues
// @homepageURL  https://github.com/QingJ01/Search_clear
// @downloadURL https://update.greasyfork.org/scripts/520018/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%87%80%E5%8C%96.user.js
// @updateURL https://update.greasyfork.org/scripts/520018/%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%87%80%E5%8C%96.meta.js
// ==/UserScript==

(function() {
    'use strict';

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
     * @param {string} selector - CSS选择器
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
     * @param {string} host - 要检查的域名
     * @returns {boolean}
     */
    function isMatchHost(host) {
        return location.host.includes(host);
    }

    /**
     * 搜索引擎广告过滤
     */
    function removeAds() {
        // 百度广告过滤
        if(isMatchHost(HOSTS.BAIDU)) {
            // 移除顶部和右侧广告
            removeElements([
                '.ec_wise_ad',
                '#content_right',
                // 移除带有广告标记的内容
                '.c-container >>> .c-container:has(.f13>span:starts-with("广告"))',
                '#content_right>div:has(a:contains("广告"))',
                '#content_left>div:has(span.tuiguang:contains("广告"))',
                '#content_left>div:has(span.brand:contains("广告"))',
                '#content_left>div:has(a:contains("广告"))',
                // 移除多余元素
                '#content_right>br',
                '#content_right>div:not([id])',
                '#content_left>div:has(.na-like-container)',
                // 移除劫持和推荐
                '.res_top_banner',
                '#content_left div[class*="_rs"]'
            ].join(','));

            // 移除手机版广告
            if(location.host.includes('m.baidu.com')) {
                removeElements([
                    // 广告容器
                    '.ec_wise_ad',
                    '.ec-result-inner',
                    '.c-result.result-op',
                    '[data-module="b2b"]',
                    
                    // 推广内容 - 修改选择器写法
                    '.c-container .c-icons-outer:contains("广告")',
                    '.c-container [data-tuiguang]',
                    '.c-container .icon-marketing',
                    '.c-container .c-icon-marketing',
                    '.c-container [class*="tuiguang"]',
                    '.c-container [class*="marketing"]',
                    '.c-container .source:contains("广告")',
                    '.c-container .c-color-source:contains("广告")',
                    
                    // 商业广告
                    '[data-tcelog]',
                    '[data-click*="ad"]',
                    '[data-log*="ad"]',
                    '[data-resourceid*="ad"]',
                    '[data-type="ads"]',
                    '[data-rendered="ad"]',
                    '[class*="_ad_"]',
                    '[id*="_ad_"]',
                    
                    // 应用推广
                    '.c-result.c-clk-recommend',
                    '.c-recomm-wrap',
                    '.c-recommend-wrap',
                    '.recommend-wrap',
                    '[class*="recommend-list"]',
                    
                    // 底部推荐和下载
                    '.na-like-container',
                    '.download-tip',
                    '.app-download',
                    '[class*="download-wrap"]',
                    
                    // 浮动元素
                    '.float-ball',
                    '.ball-wrapper',
                    '.new-user-banner',
                    '.search-guide-layer',
                    
                    // 特定广告位
                    '#page-copyright[style*="margin-bottom"]',
                    '.search-feedback-wrapper',
                    '.wise-custom-wrap',
                    '.brand-entry',
                    
                    // 其他广告
                    '.ec-pl-container',
                    '.ec-pc-container', 
                    '.c-container.ec-container',
                    '.c-container.sfc-container',
                    '.c-container.ad-container',
                    '.c-container.ec-result',
                    '.c-container.ecom-result',
                    '.c-container.sfc-result',
                    '.c-container.biz-result',
                    '.c-container.adv-result',
                    '.c-container.ecom-adv',
                    '.c-container.sfc-adv',
                    '.c-container.biz-adv'
                ].join(','));
                
                // 添加CSS规则
                GM_addStyle(`
                    .search-guide,
                    .popup-layer,
                    .c-atom-afterclick,
                    [class*="ad-wrapper"],
                    [class*="ad-banner"],
                    .c-result-content .c-icon-ads,
                    .c-result-content .c-icon-marketing,
                    .c-result-content .c-icon-sponsored,
                    .c-result-content [data-tuiguang],
                    .c-result-content [class*="promote"],
                    .c-result-content [class*="advertise"] {
                        display: none !important;
                    }
                `);
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
            // 移除广告和无用元素
            removeElements([
                'li.b_ad',
                '.pa_sb', 
                '.adsMvC',
                'a[h$=",Ads"]',
                'a[href*="/aclick?ld="]',
                '.b_algo:has(.rms_img[src*="/th?id=OADD2."][src$="21.2"])',
                '.b_algo:has(.rms_img[src*="=AdsPlus"])',
                'DIV#bnp_container',
                'li.b_ad',
                '.ad_sc'
            ].join(','));
        }

        // 搜狗广告过滤
        if(isMatchHost(HOSTS.SOGOU)) {
            removeElements([
                '#so_kw-ad',
                '#m-spread-left',
                '#m-spread-bottom',
                '#righttop_box li:has(span:contains("广告"))'
            ].join(','));
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
        if(isMatchHost(HOSTS.BAIDU)) {
            document.querySelectorAll('a[href*="baidu.com/link"]').forEach(link => {
                try {
                    const match = link.href.match(/url=(.+)&/);
                    if(match && match[1]) {
                        link.href = decodeURIComponent(match[1]);
                    }
                } catch(e) {
                    console.error('百度重定向处理失败:', e);
                }
            });
        }

        // 处理谷歌重定向
        if(isMatchHost(HOSTS.GOOGLE)) {
            document.querySelectorAll('a[onmousedown]').forEach(link => {
                link.removeAttribute('onmousedown');
                link.setAttribute('target', '_blank');
                link.removeAttribute('data-jsarwt');
            });
        }

        // 处理知乎重定向
        if(isMatchHost('zhihu.com')) {
            document.querySelectorAll('a[href*="//link.zhihu.com/?target"]').forEach(link => {
                try {
                    link.href = decodeURIComponent(
                        link.href.replace(/https?:\/\/link\.zhihu\.com\/\?target=/, '')
                    );
                } catch(e) {
                    console.error('知乎重定向处理失败:', e);
                }
            });
        }

        // 处理百度学术重定向
        if(isMatchHost('xueshu.baidu.com')) {
            document.querySelectorAll('a[href*="sc_vurl=http"]').forEach(link => {
                try {
                    const xurl = new URLSearchParams(link.href).get('sc_vurl');
                    if(xurl) link.href = decodeURIComponent(xurl);
                } catch(e) {
                    console.error('百度学术重定向处理失败:', e);
                }
            });
        }

        // 处理360搜索重定向
        if(isMatchHost(HOSTS.SO)) {
            document.querySelectorAll('a[href*="so.com/link"]').forEach(link => {
                try {
                    const url = new URL(link.href);
                    const targetUrl = url.searchParams.get('url');
                    if(targetUrl) {
                        link.href = decodeURIComponent(targetUrl);
                    }
                } catch(e) {
                    console.error('360搜索重定向处理失败:', e);
                }
            });
        }

        // 处理神马搜索重定向
        if(isMatchHost(HOSTS.SM)) {
            document.querySelectorAll('a[href*="//yz.m.sm.cn/adclick"]').forEach(link => {
                try {
                    const url = new URL(link.href);
                    const targetUrl = url.searchParams.get('url');
                    if(targetUrl) {
                        link.href = decodeURIComponent(targetUrl);
                    }
                } catch(e) {
                    console.error('神马搜索重定向处理失败:', e);
                }
            });
        }
    }

    /**
     * 隐藏必应APP弹窗
     */
    function hideBingPopup() {
        if(isMatchHost(HOSTS.BING)) {
            // 隐藏弹窗容器
            GM_addStyle('div#bnp_container {display: none !important;}');
            
            // 自动关闭弹窗
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
     * 搜索引擎URL参数清理
     */
    function shortenUrl() {
        sturl();
        // 监听URL变化
        window.addEventListener('locationchange', function() {
            sturl();
        });
    }

    /**
     * URL参数清理主函数 
     */
    function sturl() {
        try {
            // 当前URL
            var url = window.location.href;
            // 新URL
            var nurl = window.location.href;
            
            // 需要移除的查询参数
            const qs = [
                // 百度参数 - 只保留必要参数
                'prefixsug', 'bsst', 'inputT', 'usm', 
                'rsv_sug1', 'rsv_sug7', 'rsv_sug2', 'rsv_sug3', 'rsv_sug4',
                'issp', 'cshid',
                
                // 谷歌参数
                'tbas','ved','uact','ei','ie','oq','sclient','cshid','dpr','iflsig',
                'aqs','gs_lcp','source','sourceid','sxsrf','pccc','sa','biw','bih',
                'hl','newwindow',
                
                // 必应参数
                'tsc','sp','FORM','form','pq','sc','qs','sk','cvid','lq','ghsh',
                'ghacc','ghpl','ghc'
            ];

            // 移除以下参数可能会影响移动端功能，所以在移动端时跳过
            if(location.host.includes('m.baidu.com')) {
                return false;
            }

            // 需要在特定值时移除的参数
            const qseq = [['start', '0']];

            // 移除普通参数
            nurl = rmqs(nurl, qs);
            // 移除特定值参数
            nurl = rmqseq(nurl, qseq);

            // URL未改变则不处理
            if(url === nurl) {
                return false;
            }

            // 更新地址栏URL
            window.history.replaceState(null, null, nurl);

        } catch(e) {
            console.error('URL参数清理失败:', e);
        }
    }

    /**
     * 移除普通查询参数
     */
    function rmqs(url, qs) {
        url = new URL(url);
        qs.forEach(function(param) {
            url.searchParams.delete(param);
        });
        return url.toString();
    }

    /**
     * 移除特定值的查询参数
     */
    function rmqseq(url, qseq) {
        url = new URL(url);
        qseq.forEach(function(item) {
            if(url.searchParams.get(item[0]) === item[1]) {
                url.searchParams.delete(item[0]);
            }
        });
        return url.toString();
    }

    // 添加 locationchange 事件监听支持
    history.pushState = (f => function pushState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    })(history.pushState);

    history.replaceState = (f => function replaceState() {
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate')); 
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    })(history.replaceState);

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'));
    });

    /**
     * 初始化函数
     */
    function init() {
        // 执行功能
        removeAds();
        redirectOptimize();
        hideBingPopup();
        shortenUrl();
        
        // 监听页面变化
        const observer = new MutationObserver(() => {
            removeAds();
            redirectOptimize();
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // 在页面加载完成后执行初始化
    if(document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
