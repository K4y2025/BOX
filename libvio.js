var rule = {
    title: 'Libvio',
    host: 'https://www.libvio.site',
    url: '/show/fyclass-----------fypage.html',
    searchUrl: '/index.php/vod/search.html?wd=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
        'Referer': 'https://www.libvio.site/'
    },
    class_name: '电影&剧集&综艺&动漫',
    class_url: '1&2&3&4',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '.stui-vodlist__item;a&&title;.stui-vodlist__thumb&&data-original;.pic-text&&text;a&&href',
    一级: '.stui-vodlist__item;a&&title;.stui-vodlist__thumb&&data-original;.pic-text&&text;a&&href',
    二级: {
        "title": ".stui-content__detail .title&&text",
        "img": ".stui-content__thumb img&&data-original",
        "desc": ".stui-content__detail p:contains(类型)&&text;;.stui-content__detail p:contains(地区)&&text;;.stui-content__detail p:contains(年份)&&text",
        "content": ".stui-content__detail .detail-content&&text",
        "tabs": ".stui-pannel__head .title",
        "lists": ".stui-content__playlist:eq(#index) li"
    },
    搜索: '.stui-vodlist__item;a&&title;.stui-vodlist__thumb&&data-original;.pic-text&&text;a&&href',
}
