$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

var findIP = new Promise(r => {
  var w = window,
    a = new(w.RTCPeerConnection || w.mozRTCPeerConnection || w.webkitRTCPeerConnection)({
      iceServers: []
    }),
    b = () => {};
  a.createDataChannel("");
  a.createOffer(c => a.setLocalDescription(c, b, b), b);
  a.onicecandidate = c => {
    try {
      c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)
    } catch (e) {}
  }
})

findIP.then(ip => document.getElementById('saveIP').innerHTML = ip).catch(e => console.error(e))
