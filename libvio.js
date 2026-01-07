var rule = {
    title: 'Libvio',
    host: 'https://www.libvio.site',
    url: '/type/fyclass-fypage.html',
    searchUrl: '/search/**----------fypage.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.libvio.site/'
    },
    class_name: '电影&剧集&动漫&日韩剧&欧美剧',
    class_url: '1&2&4&15&16',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: 'ul.stui-vodlist li;a&&title;a&&data-original;.pic-text&&text;a&&href',
    一级: 'ul.stui-vodlist li;a&&title;a&&data-original;.pic-text&&text;a&&href',
    二级: {
        "title": ".stui-content__detail h1&&text",
        "img": ".stui-content__thumb img&&data-original",
        "desc": ".stui-content__detail p.data:eq(0)&&text;;.stui-content__detail p.data:eq(1)&&text;;.stui-content__detail p.data:eq(2)&&text",
        "content": ".detail-content&&text",
        "tabs": ".stui-pannel__head h3",
        "lists": ".stui-content__playlist:eq(#index) li"
    },
    搜索: 'ul.stui-vodlist li;a&&title;a&&data-original;.pic-text&&text;a&&href',
}
