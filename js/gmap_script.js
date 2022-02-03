$(function(){
	
	// Googleマップの埋め込み
	var gmap = $("#gmap").gmap3({
		
		// 初期表示位置の指定
		latitude:   48.865886, // 緯度
		longitude: 2.337265, // 経度
		zoom: 16,              // ズームレベル
		
		// 各コントロールの表示／非表示
		navigationControl: true,
		mapTypeControl: false,
		scaleControl: true,


		// マーカーの設置
		markers: [
			{
				latitude:   48.865886, // 緯度
				longitude: 2.337265, // 経度
				icon: "img_fr/foot_point.png", 
			}
		]
	
	}).data('gmap');
	
	// カスタムマップタイプを設定
	var myStyledMapType = new google.maps.StyledMapType(
		[
			{
				featureType: "all",
				elementType: "all",
				stylers: [
					{ hue: '#fef7e9' }, // 色相
					{ lightness: 0 }, // 明度
					{ saturation: 30 }, // 彩度
					{ gamma: .6 } // ガンマ
				]
			}
		]
	);
	
	// カスタムマップタイプの登録
	gmap.mapTypes.set('myMapType', myStyledMapType);
	gmap.setMapTypeId('myMapType');

});
