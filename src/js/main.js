require.config({
    paths: {
        "jquery": "./libs/jquery-2.1.1.min",
        "index": "./app/index",
        "Zepto": "./libs/zepto"
    }
});

require(["index"])