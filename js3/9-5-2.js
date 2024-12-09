//値をグラフに表示させる
Chart.plugins.register({
  afterDatasetsDraw: function (chart, easing) {
      var ctx = chart.ctx;
      chart.data.datasets.forEach(function (dataset, i) {
          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
              meta.data.forEach(function (element, index) {
                  // 値の表示
                  ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                  var fontSize = 18;//フォントサイズ
                  var fontStyle = 'bold';//フォントスタイル
                  var fontFamily = 'Arial';//フォントファミリー
                  ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                  var dataString = dataset.data[index].toString();
        
                  // 値の位置
                  ctx.textAlign = 'center';//テキストを中央寄せ
                  ctx.textBaseline = '';//テキストベースラインの位置を中央揃え

                  var padding = 0;//余白
                  var position = element.tooltipPosition();
                  ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
  
              });
          }
      });
  }
});

//=========== 棒グラフ（縦） ============//
$('#chart01').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {
var ctx=document.getElementById("chart01");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'bar',//グラフのタイプ
data:{//グラフのデータ
labels:["50代","60代","70代",],//データの名前
datasets:[{
    label:"軟骨の構成成分数",//グラフのタイトル
    backgroundColor:"#0584C5",//グラフの色
    data:["800","700","600",]//横列に並ぶデータ
  }]
},
options:{//グラフのオプション
legend:{
  display: false//グラフの説明を非表示
},
tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
  callbacks:{
    display: false
  }
},
title:{//上部タイトル表示の設定
  display: false
},
scales:{
  yAxes:[//グラフ縦軸（Y軸）設定
    {
      ticks:{
        beginAtZero:true,//0からスタート
        suggestedMax: 1000,//最大が1000
        suggestedMin: 0,//最小が0
        stepSize: 200,//100づつ数値が刻まれる
        callback: function(value){
          return  value +  '個'//数字＋個で表示					
        }
      }
    }
  ],
  xAxes:[//グラフ縦軸（X軸）設定
  {
      barPercentage:0.6,//バーの太さ
      
    }
  ]
}
}
});

}
});