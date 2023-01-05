// 柱状图
function getBarChart(soilTemperature) {
    const barChart = echarts.init(document.querySelector('#bar-chart'));
    barChart.setOption({
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#5b2ff5' // 0% 处的颜色
            }, {
                offset: 1, color: '#e94e98' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
        grid: {
            top:'10%',
        },
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, .8)',
            borderWidth: 0,
            formatter: "{b}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{c}",
            textStyle: {
                color: '#eee',
                fonstSsize: 12,
            }
        },
        xAxis: {
            // show: false,
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLabel:{
                show: false,
            },
            data: soilTemperature.map(item => dayjs(item.timestamp).format('HH:mm')),
          },
          yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: [5, 10],
                    color: '#303439',
                }
            }
          },
          series: [
            {
              data: soilTemperature.map(item => item.temperature),
              type: 'bar',
              barWidth: '40%',
              itemStyle: {
                borderRadius: [3, 3, 0, 0],
              },
              showBackground: true,
              backgroundStyle: {
                color: '#2d3137'
              }
            }
          ]
    });
};
getBarChart(soilTemperature);

// 折线图
function getLineChart(airTemperature) {
    const lineChart = echarts.init(document.querySelector('#line-chart'));
    lineChart.setOption({
        color: ['#cf4791', '#7e31ed', '#522de0'],
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            }
          },
          yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type:[5, 10],
                    color: '#303439',
                }
            }
          },
          series: [
            {
              data: airTemperature.map(item => item.timestamp),
              type: 'line',
              symbolSize: 6,
              lineStyle: {
                width: 2.5,
                shadowOffsetY: 3,
                shadowBlur: 10,
                shadowColor: '#cf4791',
              },
              symbol: 'circle',
            },
            {
                data: airTemperature.map(item => item.temperature),
                type: 'line',
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {
                    width: 2.5,
                    shadowOffsetY: 3,
                    shadowBlur: 10,
                    shadowColor: '#7e31ed',
                  },
              },
              {
                data: airTemperature.map(item => item.humidity),
                type: 'line',
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {
                    width: 2.5,
                    shadowOffsetY: 3,
                    shadowBlur: 10,
                    shadowColor: '#522de0',
                  }
              }
          ]
    });
};
getLineChart(airTemperature);

// 面积图
function getAreaChart(airTemperature) {
    const lineChart = echarts.init(document.querySelector('#area-chart'));
    lineChart.setOption({
        color: '#0074ff',
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type:[5, 10],
                    color: '#303439',
                }
            }
        },
        series: {
            data: airTemperature.map(item => item.timestamp),
            type: 'line',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#0074ff' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#1a232e' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  },
            },
            symbolSize: 6,
            lineStyle: {
                width: 2.5,
                shadowOffsetY: 3,
                shadowBlur: 10,
                // shadowColor: '#0074ff',
            },
            symbol: 'circle',
        }
    });
}
getAreaChart(airTemperature);

// 饼图
function getPieOneChart(airItem) {
    const pieOneChart = echarts.init(document.querySelector('#pie-one'));
    pieOneChart.setOption({
        color: ['#e54c9e', '#592ff5', '#8033ee'],
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '饼图',
                type: 'pie',
                radius: '50%',
                label: {
                    color: '#eee',
                    fontSize: 10,
                    position: 'outside',
                },
                labelLine: {
                    length: 10,
                    length2: 20,
                    lineStyle: {
                        color: '#eee',
                    },
                },
                data: [
                    { 
                        value: airItem.a,
                        name: 'A' ,
                        itemStyle: {
                                shadowBlur: 6,
                                shadowColor: '#e54c9e', 
                        }
                    },
                    { 
                        value: airItem.b, 
                        name: 'B',
                        itemStyle: {
                            shadowBlur: 6,
                            shadowColor: '#592ff5', 
                    }
                    },
                    { 
                        value: airItem.c, 
                        name: 'C',
                        itemStyle: {
                            shadowBlur: 6,
                            shadowColor: '#8033ee', 
                    }
                    },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    });
}
getPieOneChart(airItem)

function getPieTwoChart(airItem) {
    const pieTwoChart = echarts.init(document.querySelector('#pie-two'));
    pieTwoChart.setOption({
        color: ['#e54c9e', '#592ff5', '#8033ee'],
        series: [
            {
                type: 'pie',
                radius: ['40%', '50%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: "{c}",
                        lineHeight: 30,
                        fontSize: 30,
                        texBorderType:0,
                        color: '#eee',
                    }
                },
                // avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    // borderColor: '#fff',
                    // borderWidth: 2
                },
                
                labelLine: {
                    show: false
                },
                data: [
                    { 
                        value: airItem.a,
                        name: 'A' ,
                        itemStyle: {
                                shadowBlur: 5,
                                shadowColor: '#e54c9e', 
                        },
                        label: {
                            normal: {
                                show: true,
                            },
                        }
                    },
                    { 
                        value: airItem.b, 
                        name: 'B',
                        itemStyle: {
                            shadowBlur: 5,
                            shadowColor: '#592ff5', 
                    }
                    },
                    { 
                        value: airItem.c, 
                        name: 'C',
                        itemStyle: {
                            shadowBlur: 5,
                            shadowColor: '#8033ee', 
                    }
                    },
                ],
            }
        ]
        });
}
getPieTwoChart(airItem);

function getPieThreeChart(airItem) {
    const pieThreeChart = echarts.init(document.querySelector('#pie-three'));
    pieThreeChart.setOption({
        // color: ['#e54c9e', 'transparent',],
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#6553ff' // 0% 处的颜色
            }, {
                offset: 1, color: '#34cdee' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
        series: [
            {
                type: 'pie',
                radius: ['40%', '50%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: "{c}",
                        lineHeight: 30,
                        fontSize: 30,
                        texBorderType:0,
                        color: '#eee',
                    }
                },
                itemStyle: {
                    borderRadius: 10,
                },
                showEmptyCircle: true,
                emptyCircleStyle: {
                    color: 'gray'
                },
                labelLine: {
                    show: false
                },
                stillShowZeroSum: true,
                data:[ 
                    { 
                        value: airItem.a,
                        name: 'A' ,
                        // itemStyle: {
                        //         shadowBlur: 5,
                        //         shadowColor: '#e54c9e', 
                        // },
                        label: {
                            normal: {
                                show: true,
                            },
                        }
                    }
                ]
            }
        ]
        });
};
getPieThreeChart(airItem);