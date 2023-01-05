// 气象指标卡片
$('#temp-today').text(weather.today.temperature);
$('#weather-today').text(weather.today.weather);
$('#temp-tomorrow').text(`明天 ${ weather.tomorrow.temperature }`);
$('#temp-after-tommorow').text(`后天 ${ weather.afterTomorrow.temperature }`);
$('#pm25').text(weather.today.pm25);
$('#light-intensity').text(weather.today.lightIntensity);

// 设备浇灌卡片  >>>  设备
function getDevice(deviceWater) {
      for (const item of deviceWater) {
      const li = $(`<li><div class="device-name">${ item.name}</div>
      <i class="iconfont icon-guangai ${ item.status === '灌溉中' && ` device-working`} "></i>
      <div class="device-status">${ item.status }</div></li>`);
      li.appendTo($('#device-nums' ));
  }
}
getDevice(deviceWater);

// 设备状态占比图表
function getDeviceRate(deviceWater) {
  const deviceRateChart = echarts.init(document.querySelector('#device-rate-chart'));
  const deviceOption = {
      title: {
          show: true,
          text: '设备状态占比',
          textAlign: 'left',
          textStyle: {
              color: '#eee',
              fontWeight: 400,
              fontSize: 12,
          }
      },
      legend: {
        show: true,
        top: 30,
        left: 30, 
        align: 'right',
        orient: 'vertical',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: '#eee',
          fontSize: 10
        }
      },
      series: [
        {
          color: ['#6972c6', '#2f3b7b'],
          name: '设备状态占比',
          type: 'pie',
          roseType: true,
          radius: ['40%', '80%'],
          top: 0,
          left: 90,
          legenHoverLink: true,
          label: {
            show: false,
            position: 'center',
            color: '#eee',
            formatter: `${(deviceWater.filter(d => d.status === '灌溉中').length * 100 / deviceWater.length).toFixed(0)}%`
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { 
              value: deviceWater.filter(item => item.status === '灌溉中').length, 
              name: "灌溉中" ,
              label: {
                normal: {
                  show: true,
                }
              }
            },
            { 
              value: deviceWater.filter(item => item.status === '未灌溉').length, 
              name: '未灌溉' 
            },
          ]
        }
      ]
    };
    deviceRateChart.setOption(deviceOption);
}
getDeviceRate(deviceWater);

// 空气温度图表
function getAirTempatureChart(airTemperature) {
  const maxTemperature = Math.max(...airTemperature.map(item => item.temperature));
  const airTemperatureChart = echarts.init(document.querySelector('#airTemperature'));
  const airTemperatureOption = {
      color: ['#3e7cb8', '#8d64d2', 'rgba(255, 255, 255, .02)'],
      title: {
        text: '空气温度/湿度',
        textStyle: {
          color: '#eee',
          fontWeight: 400,
          fontSize: 12,
        }
      },
      legend: {
        show: true,
        top: 20,
        right: 100,
        orient: 'horizontal',
        itemGap: 10,
        textStyle: {
          color: '#eee',
          fontSize: 12,
        }
      },
      grid: {
        left:80,
        top: 80,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        backgroundColor: 'rgba(0, 0, 0, .5)',
        borderWidth: 0,
        textStyle: {
            color: '#fff',
        },
        formatter: "{a0} : {c0}°C<br />{a1} : {c1}%",
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: airTemperature.sort((a, b) => a.timestamp - b.timestamp).map(item => dayjs(item.timestamp).format('HH:mm'))
      },
      yAxis: [
        {
          alignTicks: false,
          position: 'left',
          offset: 10,
          type: 'value',
          name: '温度(℃)',
          nameLocation: 'end',
          nameTextStyle: {
              align: 'right',
          },
          splitLine: {
            show: false,
          },
          axisPointer: {
            snap: true
          }
        },
        {
          alignTicks: false,
          position: 'right',
          offset: 10,
          type: 'value',
          name: '湿度(%)',
          nameLocation: 'end',
          nameTextStyle: {
              align: 'left',
          },
          splitLine: {
            show: false,
          },
          axisPointer: {
            snap: true
          }
        }
      ],
      series: [
        {
          name: '湿度',
          type: 'line',
          smooth: true,
          symbolSize: 8,
          // 对应的Y轴
          yAxisIndex: 1,
          data: airTemperature.map(item => item.humidity)
        },
        {
          name: '温度',
          type: 'line',
          smooth: true,
          yAxisIndex: 0,
          symbolSize: 8,
          data: airTemperature.map(item => item.temperature)
        },
        {
          type: 'bar',
          yAxisIndex: 0,
          data: airTemperature.map(() => maxTemperature)
        }
      ]
    };
    airTemperatureChart.setOption(airTemperatureOption);
}
getAirTempatureChart(airTemperature);

// 土壤墒情
$('#soil-temprature').text(soilMoisture.temperature);
$('#soil-humidity').text(soilMoisture.humidity);
$('#soil-conductivity').text(soilMoisture.conductivity);
$('#soil-ph').text(soilMoisture.ph);

// 土壤湿度图表
function getSoilTempatureChart(soilTemperature) {
  const soilTemperatureChart = echarts.init(document.querySelector('#soil-temperature'));
  const soilTemperatureOption = {
      color: '#8d64d2',
      title: {
        text: '土壤温度/湿度',
        textStyle: {
          color: '#eee',
          fontWeight: 400,
          fontSize: 12,
        }
      },
      legend: {
        show: true,
        top: 0,
        right: 100,
        itemWidth: 20,
        itemHeight: 10,
        orient: 'horizontal',
        itemGap: 10,
        textStyle: {
          color: '#eee',
          fontSize: 12,
        }
      },
      grid: {
        top: 60,
        left: 70,
        width: 420,
        height: 90,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        backgroundColor: 'rgba(0, 0, 0, .5)',
        borderWidth: 0,
        textStyle: {
            color: '#fff',
            fontSize: 12,
        },
        formatter: "{a0} : {c0}°C<br />{a1} : {c1}%",
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: soilTemperature.sort((a, b) => a.timestamp - b.timestamp).map(item => dayjs(item.timestamp).format('HH:mm'))
      },
      yAxis: [
        {
          alignTicks: false,
          position: 'left',
          offset: 10,
          type: 'value',
          name: '温度(℃)',
          nameLocation: 'end',
          nameTextStyle: {
              align: 'right',
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 0, 0, .2)',
            }
          },
          axisPointer: {
            snap: true
          }
        },
        {
          alignTicks: false,
          position: 'right',
          offset: 10,
          type: 'value',
          name: '湿度(%)',
          nameLocation: 'end',
          nameTextStyle: {
              align: 'left',
          },
          splitLine: {
            show: false,
          },
          axisPointer: {
            snap: true
          }
        }
      ],
      series: [
        {
          color :{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0, color: '#8d64d2' // 0% 处的颜色
              }, 
              {
                offset: 1, color: '#3e7cb8' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          name: '湿度',
          type: 'bar',
          // 对应的Y轴
          yAxisIndex: 1,
          barWidth: '20%',
          data: soilTemperature.map(item => item.humidity)
        },
        {
          name: '温度',
          type: 'line',
          smooth: true,
          yAxisIndex: 0,
          symbolSize: 8,
          data: soilTemperature.map(item => item.temperature)
        },
      ]
    };
    soilTemperatureChart.setOption(soilTemperatureOption);
}
getSoilTempatureChart(soilTemperature);

// 报警消息占比
function getMsgRate(messages, msgType) {
  const total = messages.filter(item => item.type === msgType).length;
  const done = messages.filter(item => item.type === msgType && item.status === 'done').length;
  const undo = messages.filter(item => item.type === msgType && item.status === 'undo').length;


  const dateRate = messages.reduce((res, item) => {
    const finded = res.find(r => r.name === item.type);
        if (!finded) {
          res.push({
            value: 1,
            name: item.type,
          });
        } else {
          finded.value++;
        }
        return res;
    }, []);

  $(`#${ msgType }-done`).text(done);
  $(`#${ msgType }-undo`).text(undo);
  $(`#${ msgType }-total`).text(total);
  
  const rateChart = echarts.init(document.querySelector(`#msg-${ msgType }-chart`));
  // 此类消息占比
  const msgRate = ((total / messages.length) * 100).toFixed(0);

  const option = {
      series: [
        {
          // 1e2770
          color: ['#6972c6','#8d64d2', '#0c1138'],
          name: '消息占比',
          type: 'pie',
          roseType: true,
          radius: ['40%', '80%'],
          legenHoverLink: true,
          label: {
            show: false,
            position: 'center',
            formatter: `${ msgRate }%`,
            fontSize: 10,
            texBorderType:0,
            color: '#eee',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { 
              // 此类消息
              value: total, 
              label: {
                normal: {
                  show: true,
                }
              }
            },
            ...dateRate.filter(item => item.name !== msgType),
          ]
        }
      ]
    };
    rateChart.setOption(option);
}
getMsgRate(messages, 'danger');
getMsgRate(messages, 'warning');
getMsgRate(messages, 'info');

// 消息提醒 >> 显示消息
function createMsgTip(messages) {
  const ul =  $('#msg-tip-list');
  ul.html('');
  for (const m of messages) {
    const el = $(`
        <li>
            ${ m.type === 'danger' ? '<i class="iconfont icon-jingbao dangerColor"></i>' : '' } 
            ${ m.type === 'info' ? '<i class="iconfont icon-tixing infoColor"></i>' : '' } 
            ${ m.type === 'warning' ? '<i class="iconfont icon-zhuyi warningColor"></i>' : '' } 
            <div class="msg-info">
                <div class="msg-info-hd">
                    <div class="info-type">${ m.title }</div>
                    <div class="info-time">${ dayjs(m.timestamp).format('YYYY-MM-DD HH:mm') }</div>
                </div>
                <div class="msg-info-content">${ m.content }</div>
            </div>
        </li>
    `);
    el.appendTo(ul);
  }
}
createMsgTip(messages);

function bindMsgTipEvents(messages) {
    $('.msg-tab').on('click', function () {
      console.log( $(this).attr('type') );
      $(this).addClass('active');
      $(this).siblings().removeClass('active');

      let data = [];
      switch ($(this).attr('type')) {
          case 'all':
              data = messages;
              break;
          case 'danger':
              data = messages.filter(m => m.type === 'danger');
              break;
          case 'warning':
              data = messages.filter(m => m.type === 'warning');
              break;
          case 'other':
              data = messages.filter(m => m.type !== 'warning' && m.type !== 'danger');
              break;
          default:
              break;
      }
      createMsgTip(data);
  });
}
bindMsgTipEvents(messages);