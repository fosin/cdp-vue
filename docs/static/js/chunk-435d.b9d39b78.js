(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-435d"],{KnHh:function(a,e,t){"use strict";var n=t("yb8W");t.n(n).a},RCx3:function(a,e,t){"use strict";t.r(e);var n=t("MT78"),o=t.n(n);t("gX0l"),t("xexB"),t("Fa/5"),t("ERHi"),t("Z1wy"),t("VrN/"),t("0o9m"),t("AH3D"),t("0HBW"),t("MTm3"),t("A9a3"),t("aE3T"),t("3jiS");var r={name:"Charts",props:{userJson:{type:Object,default:void 0}},data:function(){return{chart:null,option:{title:{text:"就诊患者地域分布图",subtext:"",x:"center"},tooltip:{trigger:"item"},legend:{x:"right",selectedMode:!1,data:[]},dataRange:{orient:"horizontal",min:0,max:1e3,text:["高","低"],color:["#11264f","#293047","#7fb80e","#145b7d","#1E90FF","#007d65","#5e7c85","#008792"],splitNumber:0},toolbox:{show:!0,orient:"vertical",x:"right",y:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1}}},series:[{name:"人数",type:"map",mapType:"china",mapLocation:{x:"left"},selectedMode:"single",itemStyle:{normal:{label:{show:!0}},emphasis:{label:{show:!0}}},data:[{name:"湖南",value:1454},{name:"辽宁",value:Math.round(1e3*Math.random())},{name:"内蒙古",value:Math.round(1e3*Math.random())},{name:"浙江",value:Math.round(1e3*Math.random())},{name:"黑龙江",value:Math.round(1e3*Math.random())},{name:"陕西",value:Math.round(1e3*Math.random())},{name:"广西",value:Math.round(1e3*Math.random())},{name:"安徽",value:Math.round(1e3*Math.random())},{name:"湖北",value:Math.round(1e3*Math.random())},{name:"贵州",value:Math.round(1e3*Math.random())},{name:"福建",value:Math.round(1e3*Math.random())},{name:"山西",value:Math.round(1e3*Math.random())},{name:"西藏",value:Math.round(1e3*Math.random())},{name:"河南",value:Math.round(1e3*Math.random())},{name:"江西",value:Math.round(1e3*Math.random())},{name:"海南",value:Math.round(1e3*Math.random())},{name:"山东",value:Math.round(1e3*Math.random())},{name:"江苏",value:Math.round(1e3*Math.random())},{name:"云南",value:Math.round(1e3*Math.random()),selected:!0},{name:"北京",value:Math.round(1e3*Math.random())},{name:"天津",value:Math.round(1e3*Math.random())},{name:"广东",value:Math.round(1e3*Math.random())},{name:"上海",value:Math.round(1e3*Math.random())},{name:"新疆",value:Math.round(1e3*Math.random())},{name:"青海",value:Math.round(1e3*Math.random())},{name:"吉林",value:Math.round(1e3*Math.random())},{name:"河北",value:Math.round(1e3*Math.random())},{name:"四川",value:Math.round(1e3*Math.random())},{name:"重庆",value:Math.round(1e3*Math.random())},{name:"甘肃",value:Math.round(1e3*Math.random())},{name:"宁夏",value:Math.round(1e3*Math.random())},{name:"台湾",value:Math.round(1e3*Math.random())},{name:"香港",value:Math.round(1e3*Math.random())},{name:"澳门",value:Math.round(1e3*Math.random())}]}],animation:!1}}},computed:{mapWidth:function(){return window.innerWidth-200+"px"},mapHeight:function(){return window.innerHeight+"px"}},mounted:function(){this.chinaConfigure()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{chinaConfigure:function(){this.chart=o.a.init(this.$refs.myEchart),this.chart.setOption(this.$data.option)}}},h=(t("KnHh"),t("KHd+")),d=Object(h.a)(r,function(){var a=this.$createElement,e=this._self._c||a;return e("div",{ref:"contener",staticStyle:{width:"100%",height:"100%",background:"#2468a2"}},[e("div",{ref:"myEchart",style:{width:this.mapWidth,height:this.mapHeight}})])},[],!1,null,"d43f8f0c",null);d.options.__file="charts.vue";e.default=d.exports},yb8W:function(a,e,t){}}]);