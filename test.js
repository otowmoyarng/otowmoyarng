//「月別データ」
var data = [
  { label: "１月", y: 65 },
  { label: "２月", y: 59 },
  { label: "３月", y: 80 },
  { label: "４月", y: 81 },
  { label: "５月", y: 56 },
  { label: "６月", y: 55 },
  { label: "７月", y: 48 }
];

var stage = document.getElementById('stage');
var chart = new CanvasJS.Chart(stage, {
  title: {
    text: "サンプルチャート"  //グラフタイトル
  },
  theme: "theme4",  //テーマ設定
  data: [{
    type: 'column',  //グラフの種類
    dataPoints: data  //表示するデータ
  }]
});
chart.render();
