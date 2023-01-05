// 1.土壤温度/湿度   >>> 把温度渲染成柱状图
const soilTemperature = [
    {
        timestamp: 1671784778753,
        // 温度
        temperature: 54,
        // 湿度
        humidity: 80,
    },
    {
        timestamp: 1671781178753,
        temperature: 39,
        humidity: 81,
    },
    {
        timestamp: 1671777578753,
        temperature: 22,
        humidity: 82,
    },
    {
        timestamp: 1671773978753,
        temperature: 22,
        humidity: 83,
    },
    {
        timestamp: 1671770378753,
        temperature: 22,
        humidity: 84,
    },
    {
        timestamp: 1671766778753,
        temperature: 21,
        humidity: 83,
    },
    {
        timestamp: 1671763178753,
        temperature: 31,
        humidity: 82,
    },
    {
        timestamp: 1671759578753,
        temperature: 21,
        humidity: 83,
    },
    {
        timestamp: 1671755978753,
        temperature: 44,
        humidity: 81,
    },
    {
        timestamp: 1671752378753,
        temperature: 23,
        humidity: 85,
    },
    {
        timestamp: 1671748778753,
        temperature: 23,
        humidity: 79,
    },
    {
        timestamp: 1671745178753,
        temperature: 25,
        humidity: 81,
    },
    {
        timestamp: 1671741578753,
        temperature: 25,
        humidity: 82,
    },
    {
        timestamp: 1671737978753,
        temperature: 23,
        humidity: 83,
    },
    {
        timestamp: 1671734378753,
        temperature: 21,
        humidity: 81,
    },
];

// 2.空气温度/湿度  >>> 把温度/ 湿度/ time 渲染成折线图
const airTemperature = [
    {
        timestamp: 0,
        // 温度
        temperature: 2,
        // 湿度
        humidity: 80,

    },
    {
        timestamp: 67,
        temperature: 12,
        humidity: 81,
    },
    {
        timestamp: 71,
        temperature: 32,
        humidity: 82,
    },
    {
        timestamp: 67,
        temperature: 22,
        humidity: 83,
    },
    {
        timestamp: 0,
        temperature: 2,
        humidity: 84,
    },
];

// 3.把空气时间渲染成面积图

// 4饼图1
const airItem = {
        a: 67,
        b: 54,
        c: 81,
    };